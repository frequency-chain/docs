# Capacity

### Capacity is currently under development - more details will be released soon regarding instructions and implementation details.

## What is Capacity
Capacity is a value transaction that allows for the ability to send messages or do a consistent amount of work on the chain that continues over time.
It is a non-transferable resource that acts as an alternative to using FRQCY tokens to perform certain transactions and is managed through a rate-limited continuous stream of transactions.

## Capacity Epoch
A set amount of Capacity is available each [Capacity Epoch](#capacity-epoch).
A Capacity Epoch acts as a cycle and refills Capacity each Capacity Epoch (see below visual) during which one can use any amount of Capacity for transactions/messages.
An Epoch Period is composed of a set number of approximately 100 blocks and could be adjusted through governance.

* **Generated Capacity:**
The amount of Capacity generated for a Provider from staking FRQCY tokens to the network.

![Capacity Epoch Diagram](https://global.discourse-cdn.com/standard11/uploads/unfinishedlabs/original/1X/6fadc75824cd238e5aa1decd06339f8f60d7978e.png)

## Purpose of Capacity for Frequency

**By Use Case:**

* Capacity can be used to perform transactions such as
* Create and [MSA](#2-message-source-account-msa)
* Add a key to an MSA
* Delegate permissions to another MSA
* Update [Delegate Permissions](#delegate-verb-ie-to-delegate)
* Send a [message](#message)
* Send a [batch message](#batch-message)

**By User Type**

* **Providers:**
Utilize Capacity to put towards user transitions for provider applications and services.
This allows applications to increase their users by reducing costs.
[Maximized Capacity Staking](#2-maximized-capacity-staking-for-applications-and-services) allows Providers to use FRQCY tokens as efficiently as possible, optimizing their Generated Capacity.

* **End Users:**
Do not need to have Capacity directly.
They can delegate to Providers who generate Capacity for them.
Users can participate in [Rewards Capacity Staking](#1-rewards-capacity-staking-for-users) to support services and participate in on-chain governance with Capacity.

## Capacity Implementation Functionality
Capacity is only effective through the technologies of batching, and parallelization of [source-dependent messaging](https://forums.projectliberty.io/t/04-batching-source-dependent-messages-with-delegation/216).
These allow Capacity to play three primary roles in the Frequency ecosystem: incentive alignment, cost management, and volume regulation.

1. **Incentive Alignment:** Capacity works to align independent actors toward increasing the value of the network.
Network value prioritizes the possibilities for connection and the data flowing through them.
Capacity focuses on outcomes instead of testing each message for value.

	* **Penalties and Incentives:**
Those who use Capacity as a utility receive the benefit from it.
Those who dump the token after abusing the network will receive a natural market penalty.
Network and token values are correlated, encouraging those with the Capacity to align in the goal of a successful and well-functioning network.

2. **Cost Management:** Capacity acts as an asset, like that of [capital expenditure](https://en.wikipedia.org/wiki/Capital_expenditure), in the sense that it fulfills long-term value.
The FRQCY tokens that generate capacity are locked but the Generated Capacity is usable again and again.
Regular message sending is allowed without additional costs.

	* **Short-term vs long-term value:**
	Blockchains primarily interact using short-term, per transaction operation expenses, in which efficiency demands as few transactions as possible.
	Capacity optimizes flow through pricing a continuous stream of messages/transactions together rather than as individual transactions.
	This supports the collective value of the messages, in other words, the whole is greater than the sum of its parts.

3. **Volume Regulation:** Frequency has limited space that it needs to allocate.
Capacity Epochs allow for expansion of that space where a Capacity holder and add to the “mempool” (the transaction queue) as many transactions as they have Capacity to cover at the time in the Capacity Epoch cycle.
	* **Rate Limiting:**
	Limiting the rate of transactions ensures a proportional volume of transactions to the volume of FRQCY tokens staked.

	* **Batching and Capacity:**
	More messages require more FRQCY tokens staked.
	Batching requires less Capacity to send messages, part of Frequency’s marginal cost structure.
	In batching, adding a single message allows for the cost of that message to be small.
	A batched message is one on-chain message that acts as an anchor tied to many off-chain messages from various MSA accounts.
	Transferring data for a single batch message is cheaper than pushing data for all messages included in a batch.
	More information on Frequency batching will be released soon.

**Validation protects the integrity of the Batch from being manipulated.**
Cryptographic technology protects the integrity of messages through the use of hashes and signatures.
Validation occurs at write time for non-batched messages and at read time for batched messages.
Find more information [here](https://spec.dsnp.org/Frequency/Validation.html).

## Capacity Refill
Capacity refills at the start of each Capacity Epoch.
The refillable nature incentivizes services to use Capacity to the best of their user’s needs.
Capacity encourages continual use and sharing; increasing the quantity of data available and thus the value of the network.

**Dynamic Capacity Epoch Development**
These “epochs” form a meta-block that may slowly grow over time.
The growth is a predictable depreciation of Capacity, but rather than influencing price, it increases the lag between refills.
Providers may increase Capacity or allow a minor increase in lag through sending messages.

## Network Costs
Frequency uses minting and burning of FRQCY tokens to manage token supply.
Fees paid in FRQCY tokens are burned and the collators are rewarded by minting new FRQCY tokens.
While generally inflationary, it is required for the network to continue operating and acceptable to token holders.
Collator and token holder values are aligned economically in support of a healthy network.

## Prioritization of Capacity Transactions

Capacity transactions do not have the ability to tip, placing them at a disadvantage to token transactions, in which a tip increases the priority of the transactions likelihood to be added to the next block.

Frequency prioritizes Capacity transactions over token transactions but place a limit on the block space Capacity transactions can consume.
This allows Capacity transactions to fill the allocated spend and still allow for token transactions to fill the remaining block.
