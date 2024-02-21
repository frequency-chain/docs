# Glossary

<!-- General rule of thumb: Glossary links OUT, nothing really links INTO the Glossary -->

## Account

An account on the blockchain, represented by a public key.
Accounts may hold a token balance, transfer tokens, and pay transaction fees.
Not to be confused with Message Source Accounts, which are unique to Frequency and ensure that user-generated data has verifiable authorship.

## Autonomous User

An end user who spends tokens to perform transactions directly on Frequency, in contrast to a coinless user, who delegates to Providers in order to pay transaction fees.

## Batch

See [Message Batch](#message-batch)

## Capacity

An alternate payment mechanism for certain classes of transactions that allows Messages to be sent and on-chain work to occur over time.
Capacity allows Providers a rate-limited continuous stream of transactions and provides an alternative to using tokens to perform individual transactions.
Capacity is generated via Capacity Staking and Provider Boosting.

## Capacity Allocation

The amount of Capacity generated for a Provider per Capacity Epoch.

## Capacity Epoch

The number of blocks before Capacity refills.
In other words, it is the number of blocks before a Provider may reuse their Capacity Allocation.

## Capacity Staking

A form of staking that allows Providers to use FRQCY Tokens as efficiently as possible, optimizing their generated Capacity for serving end users.
Capacity Staking generates more Capacity per token staked than Provider Boosting.

## Capacity Staking Ratio
The ratio of the number of FRQCY Tokens that must be staked per unit of Capacity generated each Capacity Epoch.

## Coinless User

An end user who doesn’t use tokens to interact with Frequency.
While coinless users maintain Control Keys that enable them to directly control their authentication and authorization data on chain, they delegate transaction handling to a Provider who will in turn manage data transactions (such as sending Messages) on their behalf.

## Collator

A Frequency Node that generates blocks and submits them to the Relay Chain.
Frequency currently operates using Invulnerable Collators, but intends to transition to Public Collators in the future.  See [Collator](./Architecture/Collators.md).

## Collator Nodes

Servers that participate in the Frequency Network and are configured to form blocks.
See [Operational Model](./Architecture/OperationalModel.md).

## Collator Rewards

FRQCY Tokens awarded to Frequency-specific Public Collators for staking to the Frequency Network and participating in block formation activities.

## Content Identifier (CID)

A unique identifier used with IPFS derived from the content of a file.

## Control Key

The public key used to control an MSA.

## Delegation Model

The mechanism whereby end users can grant permission to perform tasks that require significant blockchain knowledge or token ownership to Providers, reducing friction and enabling Message Batching to improve scalability.

## Delegator

An end user that has granted specific permissions to a Provider via their MSA.

## End User

A user who owns an MSA but is not acting as a Provider.
An end user may choose to own tokens to participate in Provider Boosting to support services and participate in on-chain governance with Capacity.
However, end users typically delegate other tasks to Providers who perform actions on the user's behalf.
See Coinless Users and Delegation.

## Existential Deposit

The minimum token amount an Account that is not associated with an MSA may have and still be considered alive.

## Frequency Council

The set of Frequency accounts that are responsible for certain governance actions, including Provider approval.

## Frequency Network Foundation

The organization which owns the intellectual property relating to Frequency.

## Frequency Node

A server that participates in the Frequency network.

## FRQCY

The native coin on Frequency Mainnet, which can be used to pay any Frequency transaction fees, or staked for Capacity.

## Handle

See [User Handle](#user-handle).

## Handle Base

The user-selected portion of the Handle Display.

## Handle Display

A user’s entire User Handle as displayed by the system including the user-selected Handle Base and the system-selected Handle Suffix, separated by a “.” character.

## Handle Suffix

The system-selected numeric portion of the Handle Display.

## InterPlanetary File System (IPFS)

A decentralized content-addressed file system protocol.
See https://docs.ipfs.tech/ for more detail.

## Invulnerable Collator

A collator that cannot be removed without governance action.

## Keypair

A matching public key and private key.
The private key can be used to generate cryptographic signatures which third parties may verify with the public key.

## Message

A protocol related data item that is indexed by its Schema Id and block number.

## Message Batch

A collection of Messages, possibly from many different Message Source Accounts (MSAs), that allows Providers to publish a single on-chain transaction that references large quantities of data off chain, thereby reducing the transaction fee.

## Message Source Account (MSA)

Message Source Accounts (MSAs) are distinct from Token Accounts and unique to Frequency.
They ensure protocol related data items have verifiable authorship.
End users with MSAs are not required to have FRQCY Tokens or Capacity to interact with Frequency, but may instead choose to delegate tasks that require Capacity to Providers.

## MSA Id

The unique 64-bit unsigned integer identifier associated with an MSA.

## On-Chain Message

A Message that has its payload stored on the Frequency blockchain.

## Off-Chain Message

A Message that has its payload stored on IPFS.

## Payload

The data within a protocol related data item.
The format of the payload is defined by the corresponding Schema Model.

## Payload Location

The attribute of a Frequency Schema that specifies how and where data will be stored.

## Provider

The holder of an MSA that can allow others to delegate to it such as applications and services that use the Capacity economic system.
Providers utilize Capacity to serve the end users that delegate to them.

## Provider Boosting

Provider Boosting allows users to stake FRQCY tokens they hold to endorse or reward specific Providers.
Providers who are “boosted” by end users receive additional Capacity, while Users who “boost” Providers receive a reward (in the form of additional FRQCY tokens).

## Public Collator

A Collator who bonds tokens in order to participate in block formation, and receives rewards for participation.
Public Collators who behave improperly risk losing their position and their bond.

## Reward Epoch

The number of blocks between distributions of Provider Boosting rewards.

## Schema

Registered data structures for Messages and Stateful Storage items.
Frequency Schemas define where Payloads are stored and how end users can parse the data within.
See also On-Chain Message and Off-Chain Message.

## Schema Id

The unique identifier of a Schema on Frequency.

## Schema Model

Metadata about a Frequency Schema that defines the format and structure of the Schema itself, from which applications can determine how to serialize and deserialize data using the Schema.
Frequency supports two model types for data: Parquet and Avro.

## Schema Registry

The Schema Registry is the on-chain repository for Frequency Schemas.

## Staking

Staking refers to the process of temporarily locking tokens in order to accomplish a specific action.
FRQCY Tokens can be staked for specific purposes, including serving as Public Collators, Capacity Staking and Provider Boosting.

## Staking Ratio

See [Capacity Staking Ratio](#capacity-staking-ratio).

## Stateful Storage

A mode of storing on-chain protocol related data items so that they can be easily retrieved, modified, and removed, indexed by the data controller's MSA and a Schema Id.

## Thaw Period

The period of time between token unstaking and token liquidity during which those tokens cannot be used, transferred or sold.

## Token Account

An Account that is secured with FRQCY.

## Transaction Weight

The precalculated computational cost of an action on the blockchain.
Different actions have different weights.

## Unstaking

The process of allowing tokens that have been staked to be made available again.
When a user unstakes their FRQCY Tokens, there is a Thaw Period before the tokens are unlocked.

## User

Any entity with an Account on Frequency.

## User Handle

A unique identifier for users on Frequency, consisting of a user-selected Handle Base and a chain-selected Handle Suffix.

## XRQCY

The Frequency Testnet Token.
This token is only for testing and holds no value.
See also FRQCY.
