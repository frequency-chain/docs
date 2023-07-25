# How to Replenish Capacity  

**Implementation of how to Replenish** <a id='replenish'></a>
Replenishable means that all Capacity is replenished after a fixed period called an Epoch Period. An Epoch Period is composed of a set number of blocks. In the example below, the Epoch Period is three blocks. The initial Epoch Period will be around 100 blocks. This Epoch Period can be modified through governance.

![https://user-images.githubusercontent.com/3433442/189949840-cafc3b2f-5af7-4a65-8610-81dbe42a69ce.png](https://user-images.githubusercontent.com/3433442/189949840-cafc3b2f-5af7-4a65-8610-81dbe42a69ce.png)

Capacity can be replenished by making your first Capacity transaction during a new Epoch Period.

![https://user-images.githubusercontent.com/3433442/189948939-6b85465a-f9d9-4330-b887-561c7f0283b1.png](https://user-images.githubusercontent.com/3433442/189948939-6b85465a-f9d9-4330-b887-561c7f0283b1.png)

The following interface is implemented on Capacity-Pallet to facilitate replenishment:

### **Hooks**

```rust

#[pallet::hooks]
impl<T: Config> Hooks<BlockNumberFor<T>> for Pallet<T> {
  fn on_initialize(_now: BlockNumberFor<T>) -> Weight {}
}

```

Acceptance Criteria are listed below but can evolve:

1. After a fixed number of blocks, a new Epoch Period begins.
2. At the start of a new Epoch Period, `EpochNumber` storage is increased by 1.
3. At the start of a new block, `CurrentBlockUsedCapacity` storage is reset.

### Traits

Replenishable trait implemented on Capacity-Pallet. This trait is used to replenish the Capacity of a  Registered Provider.

```rust

trait Replenishable {
  type Balance;

  /// Replenish an MSA's Capacity by an amount.
  fn replenish_by_account(msa_id: MessageSourceId, amount: Balance) -> Result<Balance, DispatchError> {};

  /// Replenish all Capacity balance for an MSA.
  fn replenish_all_for_account(msa_id: MessageSourceId) -> Result<Balance, DispatchError>;

  /// Checks if an account can be replenished.
  fn can_replenish(msa_id: MessageSourceId) -> bool;
}

```

`EpochNumberProvider` provides an abstraction over an arbitrary way of providing the current epoch number.

```rust

pub trait EpochNumberProvider {
  /// Type of `EpochNumber` to provide.
  type EpochNumber: Codec + Clone + Ord + Eq + AtLeast32BitUnsigned;

  /// Provides an abstraction over an arbitrary way of providing the
  /// current epoch number.
  fn current_epoch_number() -> Self::EpochNumber;

  /// It allows for setting the block number that will later be fetched
  /// This is useful in case the block number provider is different from than System
  #[cfg(feature = "runtime-benchmarks")]
  fn set_epoch_number(_block: Self::EpochNumber) {}
}

```

**Storage**

`EpochNumber` help keep count of the number of Epoch-Periods:

```rust

/// Storage for keeping count of the number of Epochs.
#[pallet::storage]
pub type EpochNumber<T> = StorageValue<_, u32, ValueQuery>;

```

To facilitate keeping track of the Capacity consumed in a block.

```rust

/// Storage to keep track of the Capacity consumed in a block.
#[pallet::storage]
pub type CurrentBlockUsedCapacity<T: Config> = StorageValue<_, BalanceOf<T>, ValueQuery>;

```
