# Implementation of using Capacity <a id='capacity-transactions'></a>

**When Capacity is Used Up**

A [SignedExtension](https://paritytech.github.io/substrate/master/sp_runtime/traits/trait.SignedExtension.html) trait is implemented so that once the Capacity transaction has reached the `max_total` of allocated Capacity space, the transaction is put back into the transaction pool. Below illustrates the Capacity transaction SignedExtension flow.

![https://user-images.githubusercontent.com/3433442/189949048-7d19a194-701d-4267-ae1a-0333ee665ae7.png](https://user-images.githubusercontent.com/3433442/189949048-7d19a194-701d-4267-ae1a-0333ee665ae7.png)

A type for implementing the SignedExtension trait:

```rust

/// A type that implements SignedExtension that checks to see if Capacity transaction allocated
/// weight has been reached.
pub struct CheckCapacityWeight<T: Config + Send + Sync>(sp_std::market::PhantomData<T>);

```

```rust

impl<T: Config + Send + Sync> SignedExtension for CheckCapacityWeight<T>
  where T::RuntimeCall: Dispachable<Info = DispatchInfo> + IsSubtype<Call<T>>,
{
  type AccountId = T::AccountId;
  type Call = T::RuntimeCall;
  type AdditionalSigned = ();
  type Pre = ();

  fn additional_signed(&self) -> sp_std::result::Result<(), TransactionValidityError> {
    Ok(())
  }

  fn pre_validate() -> Result<(), TransactionValidityError> {}

  /// Below describes the interfaces for validate, pres_dispatch and post_dispatch
}

```

SignedExtension validate

```rust

/// Validates that extrinsic does not exceed max-total of Capacity transactions
///
/// ### Errors
///
/// - Returns InvalidTransaction::ExhaustsResource if transaction is greater than
///   max-total for Capacity Transactions
fn validate(
  &self,
  _who: &Self::AccountId,
  call: &Self::Call,
  info: &DispatchInfoOf<Self::Call>,
  len: usize,
) -> TransactionValidity {}

```

Acceptance Criteria are listed below but can evolve:

1. Checks that the extrinsic does not exceed the size of the `max_total` allocated space.

SignedExtension pre-dispatch

```rust

/// Validates that extrinsic does not exceed max-total of Capacity transactions
///
/// ### Errors
///
/// - Returns InvalidTransaction::ExhaustsResource if transaction fails checks.
fn pre_dispatch(
  self,
  _who: &Self::AccountId,
  _call: &Self::Call,
  info: &DispatchInfoOf<Self::Call>,
  len: usize,
) -> Result<(), TransactionValidityError> {}

```

Acceptance Criteria are listed below but can evolve:

1. Only run validation, pre-dispatch, and post-dispatch on calls that match Capacity Transactions.
2. Adding the Capacity transaction weight to the block-weight total should not cause an overflow.
3. Given Call is a Capacity transaction, it checks that the extrinsic does not exceed the size of the `max_total` allocated weight.
4. Given Call is a Capacity Transaction, it checks that adding the transaction *length* will not exceed the [max length](https://paritytech.github.io/substrate/master/frame_system/limits/struct.BlockLength.html) for the Normal dispatch class.
5. Given the call is a Capacity transaction, checks that adding the weight of the transaction will not exceed the `max_total` weight of Normal transactions
    1. base_weight + transaction weight + total weight < current total weight of normal transactions.
6. Given Call is a Capacity transaction, check that adding the transaction weight will not exceed the `max_total` weight of Capacity Transactions.
    1. base_weight + transaction weight + total weight < current total weight of Capacity transactions.
7. Increases `CurrentBlockUsedCapacity` storage.

SignedExtension post-dispatch

```rust

fn post_dispatch(
  _pre: Option<Self::Pre>,
  info: &DispatchInfoOf<Self::Call>,
  post_info: &PostDispatchInfoOf<Self::Call>,
  _len: usize,
  result: &DispatchResult,
) -> Result<(), TransactionValidityError> {}

```

Acceptance Criteria are listed below but can evolve:

1. Subtract the actual weight of the transaction from the estimated weight to see if there was a difference and adjust `CurrentBlockUsedCapacity` by subtracting the difference.

**Transaction payment**

When submitting a transaction, it is validated at the transaction pool before including it in a block. The validation is implemented with a [SignedExtension](https://docs.rs/sp-runtime/latest/sp_runtime/traits/trait.SignedExtension.html) that validates that the signer has enough token or Capacity to submit the transaction.

![https://user-images.githubusercontent.com/3433442/189948536-ee02784f-7507-4e8c-b28a-0e8ec94de297.png](https://user-images.githubusercontent.com/3433442/189948536-ee02784f-7507-4e8c-b28a-0e8ec94de297.png)

Capacity introduces an additional form of payment for transacting. As a result, FRAME's Transaction-Payment-Pallet can be modified or wrapped to toggle between token and Capacity transactions. The following implementation introduces the Dual-Payment-Pallet, a wrapper for the Transaction-Payment-Pallet, and augments it with additional functionality. In addition, it implements the `pay_with_capacity` extrinsic used to distinguish between Capacity transactions and Token transactions.

**Calls**

`ChargeTransactionPayment` struct type is used to implement a SignedExtension which validates that the signer has enough Capacity or Token to transact. The struct is a named tuple that holds a tip amount. Note that tipping is only limited to Token transactions. Capacity transactions cannot tip. Any tip that is added to Capacity transactions is ignored.

```rust

/// A type that is used to implement a SignedExtension trait. It handles reducing
/// the balance of a Capacity or Token transaction.
#[derive(Encode, Decode, Clone, Eq, PartialEq, TypeInfo)]
#[scale_info(skip_type_params(T))]
pub struct ChargeTransactionPayment<T: Config>(#[codec(compact)] BalanceOf<T>);

```

`ChargeTransactionPayment` implements a `withdraw_fee` method to resolve and withdraw payment fees from either a Token or Capacity account. If the signer does not have enough to pay for transaction errors with a `TransactionValidityError` and drops the transaction from the pool during the validation phase.

```rust

impl<T: Config> ChargeTransactionPayment<T>
where
  CallOf<T>: Dispatchable<Info = DispatchInfo, PostInfo = PostDispatchInfo> + IsSubType<Call<T>> + From<CallOf<T>>,
  BalanceOf<T>: Send + Sync + FixedPointOperand + IsType<ChargeCapacityBalanceOf<T>>,
{
  /// Withdraws fees from either Token or Capacity transactions.
  ///
  /// ### Errors
  ///
  /// - Returns InvalidTransaction::Payment if transaction
  /// Capacity or Token does not have enough to cover the transaction fee.
  fn withdraw_fee(
    &self,
    who: &T::AccountId,
    call: &CallOf<T>,
    info: &DispatchInfoOf<CallOf<T>>,
    len: usize,
  ) -> Result<(BalanceOf<T>, InitialPayment<T>), TransactionValidityError> {}
}

```

Acceptance Criteria are listed below but can evolve:

1. Given a Capacity transaction, withdraw the fee from the Capacity account balance.
2. Given a Token transaction, withdraw the fee from the Token account balance using the Transaction-Payment-Pallet withdrawal function for Token accounts.
3. The result includes an enum describing how the payment was made.
4. Given a free transaction, skip any withdrawals.

An enum is used for describing whether the payment was made with Capacity, Token or free. This enum becomes useful post-dispatch to issue a refund if there was an overcharge for the fee payment.

```rust

/// Types for handling how the payment will be processed.
/// This type is passed to Post-dispatch to be able to distinguish how to reimburse overcharges in fee payment.
#[derive(Encode, Decode, DefaultNoBound, TypeInfo)]
pub enum InitialPayment<T: Config> {
  /// Pay no fee.
  Nothing,
  /// Pay fee with Token.
  Token(LiquidityInfoOf<T>),
  /// Pay fee with Capacity.
  Capacity(ChargeCapacityBalanceOf<T>),
}

```

Below are the interfaces of the SignedExtension that ChargeTransactionPayment implements.

```rust

/// Implement signed extension SignedExtension to validate that a transaction payment can be withdrawn for a Capacity or Token account. This allows transactions to be dropped from the transaction pool if the signer does not have enough to pay the fee. Pre-dispatch withdraws the actual payment from the account, and Post-dispatch refunds over charges made at pre-dispatch.
impl<T: Config + Send + Sync> SignedExtension for ChargeTransactionPayment<T>
where
  BalanceOf<T>: Send + Sync + FixedPointOperand + From<u64> + IsType<ChargeCapacityBalanceOf<T>>,
  CallOf<T>: Dispatchable<Info = DispatchInfo, PostInfo = PostDispatchInfo> + IsSubType<Call<T>>,
{
  const IDENTIFIER: &'static str = "ChargePayment";
  type AccountId = T::AccountId;
  type Call = CallOf<T>;
  type AdditionalSigned = ();
  /// The type that gets past to post-dispatch.
  /// The InitialPayment allows post-dispatch to know to what account
  /// a refund should be applied.
  type Pre = (BalanceOf<T>, Self::AccountId, InitialPayment<T>);

  /// Below, you can find validate, pre-dispatch, and post-dispatch interfaces.
  ...
}

```

```rust

/// Validate that payment can be withdrawn from the Capacity or Token account.
///
/// ### Errors
///
/// - Returns InvalidTransaction::Payment if transaction
/// Capacity or Token does not have enough to cover the transaction fee.
fn validate(
  &self,
  who: &Self::AccountId,
  call: &Self::Call,
  info: &DispatchInfoOf<CallOf<T>>,
  len: usize,
) -> TransactionValidity {}

```

Acceptance Criteria are listed below but can evolve:

1. Checks if the fee can be withdrawn from Token or Capacity balances.
2. Resolves the priority based on weight, tip, and transaction length. Note that the transaction priority can be calculated using the `get_priority` function from Transaction-Payment-Pallet.

```rust

fn pre_dispatch(
  self,
  who: &Self::AccountId,
  call: &Self::Call,
  info: &DispatchInfoOf<Self::Call>,
  len: usize,
) -> Result<Self::Pre, TransactionValidityError> {}

```

Acceptance Criteria are listed below but can evolve:

1. Validates that a withdrawal can be made from Token or Capacity balance.
2. Withdraws payment for the transaction fee from either Token or Capacity balance.

Notice that Pre-dispatch returns a type `Pre`; this is the type that gets passed from pre-dispatch to post-dispatch function. The associated type consists of a tuple that includes: the tip, account, and how the initial payment was made. This lets post-dispatch know how the fee was paid for in Capacity, Token, or no cost.

After the transaction is authored, the post-dispatch is responsible for refunding any overcharged Capacity or Token payment. Using the type associated type, `Pre`, that gets passed in from the pre-dispatch function, it corrects the fee refunding the amount overcharged.

```rust

fn post_dispatch(
  pre: Self::Pre,
  info: &DispatchInfoOf<Self::Call>,
  post_info: &PostDispatchInfoOf<CallOf<T>>,
  len: usize,
  result: &DispatchResult,
) -> Result<(), TransactionValidityError> {}

```

Acceptance Criteria are listed below but can evolve:

1. Issue overpayment for Token transaction.
2. Given transaction is free, nothing needs to be refunded.

Note that Capacity transactions do not get refunded for overcharges.


