# Glossary

<!-- General rule of thumb: Glossary links OUT, nothing really links INTO the Glossary -->

## Account

An account on the blockchain, represented by a public key.
Accounts may hold a token balance, transfer tokens, and pay transaction fees.
Not to be confused with Message Source Accounts, which are unique to Frequency and ensure that user-generated data has verifiable authorship.
See [Identity Management](./Identity/index.md).

## Autonomous User

An end user who spends tokens to perform transactions directly on Frequency, in contrast to a coinless user, who delegates to Providers in order to pay transaction fees.
See [Autonomous Users](./Delegation/Benefits.md#autonomous-users).

## Batch

See [Message Batch](#message-batch).

## Capacity

An alternate payment mechanism for certain classes of transactions that allows Messages to be sent and on-chain work to occur over time.
Capacity allows Providers a rate-limited continuous stream of transactions and provides an alternative to using tokens to perform individual transactions.
Capacity is generated via Capacity Staking and Provider Boosting.
See [Capacity Model](./Tokenomics/ProviderIncentives.md#capacity-model).

## Capacity Allocation

The amount of Capacity generated for a Provider per Capacity Epoch.
See [Capacity Renewal](./Tokenomics/ProviderIncentives.md#capacity-renewal).

## Capacity Epoch

The number of blocks before Capacity refills.
In other words, it is the number of blocks before a Provider may reuse their Capacity Allocation.
See [Capacity Renewal](./Tokenomics/ProviderIncentives.md#capacity-renewal).

## Capacity Staking

A form of staking that allows Providers to use FRQCY as efficiently as possible, optimizing their generated Capacity for serving end users.
Capacity Staking generates more Capacity per token staked than Provider Boosting.
See [Capacity Staking](./Tokenomics/ProviderIncentives.md#capacity-staking).

## Capacity Staking Ratio
The ratio of the number of FRQCY that must be staked per unit of Capacity generated each Capacity Epoch.
See [Capacity Staking](./Tokenomics/ProviderIncentives.md#capacity-staking).

## Coinless User

An end user who doesn’t use tokens to interact with Frequency.
While coinless users maintain Control Keys that enable them to directly control their authentication and authorization data on chain, they delegate transaction handling to a Provider who will in turn manage data transactions (such as sending Messages) on their behalf.
See [Benefits of Delegation](./Delegation/Benefits.md).

## Collator

A Frequency Node that generates blocks and submits them to the Relay Chain.
Frequency currently operates using Invulnerable Collators, but intends to transition to Public Collators in the future.
See [Collator](./Architecture/Collators.md).

## Collator Nodes

Servers that participate in the Frequency Network and are configured to form blocks.
See [Operational Model](./Architecture/OperationalModel.md).

## Collator Rewards

FRQCY awarded to Frequency-specific Public Collators for staking to the Frequency Network and participating in block formation activities.
See [Collator Incentives](./Tokenomics/CollatorIncentives.md).

## Content Identifier (CID)

A unique identifier used with IPFS derived from the content of a file.
See [Schema Payload Location](./Data/Schemas.md#payload-location).

## Control Key

The public key used to control an MSA.
See [Identity Management](./Identity/ControlKeys.md).

## Delegation Model

The mechanism whereby end users can grant permission to perform tasks that require significant blockchain knowledge or token ownership to Providers, reducing friction and enabling Message Batching to improve scalability. Also includes the concept of Revocation, where a user can revoke permission to perform those tasks from a Provider.
Revocation does not have any on-chain transaction fees associated with the transaction, ensuring that [Coinless Users](#coinless-users) can invoke it without Provider permission.
See [Delegation Model](./Delegation/index.md).

## End User

A user who owns an MSA but is not acting as a Provider.
An end user may choose to own tokens to participate in Provider Boosting to support services and participate in on-chain governance with Capacity.
See [Delegation Model](./Delegation/index.md)
However, end users typically delegate other tasks to Providers who perform actions on the user's behalf.
See [Coinless Users](#coinless-users) and [Delegation](#delegation-model).

## Existential Deposit

The minimum token amount an Account that is not associated with an MSA may have and still be considered alive.
See [Message Source Accounts](./Identity/MessageSourceAccounts.md).

## Frequency Council

The set of Frequency accounts that are responsible for certain governance actions, including Provider approval.
See [Governance](./Governance/index.md).

## Frequency Node

A server that participates in the Frequency network.
See [Interaction Model](Architecture/InteractionModel.md).

## FRQCY

The native coin on Frequency Mainnet, which can be used to pay any Frequency transaction fees, or staked for Capacity.
Sometimes referred to as "FRQCY Token" or simply "tokens".
Holders of FRQCY are often referred to as token holders.
See [Tokenomics](./Tokenomics/index.md).

## Handle

See [User Handle](#user-handle).

## Handle Base

The user-selected portion of the Handle Display.
See [Handle Creation](./Identity/Handles.md#handle-creation).


## Handle Display

A user’s entire User Handle as displayed by the system including the user-selected Handle Base and the system-selected Handle Suffix, separated by a “.” character.
See [Handle Creation](./Identity/Handles.md#handle-creation).

## Handle Suffix

The system-selected numeric portion of the Handle Display.
See [Handle Creation](./Identity/Handles.md#handle-creation).

## InterPlanetary File System (IPFS)

A decentralized content-addressed file system protocol.
See https://docs.ipfs.tech/ for more detail.

## Invulnerable Collator

A collator that cannot be removed without governance action.
<!--
See [Collator Decentralization Roadmap](./Networks/Decentralization.md).
-->
## Key pair

A matching public key and private key.
The private key can be used to generate cryptographic signatures which third parties may verify with the public key.
See [Identity Management](./Identity/index.md).

## Message

A protocol related data item that is indexed by its Schema Id and block number.
See [Messages](./Data/Messages.md).


## Message Batch

A collection of Messages, possibly from many different Message Source Accounts (MSAs), that allows Providers to publish a single on-chain transaction that references large quantities of data off chain, thereby reducing the transaction fee.
See [Batching](./Data/Batching.md).


## Message Source Account (MSA)

Message Source Accounts (MSAs) are distinct from Token Accounts and unique to Frequency.
They ensure protocol related data items have verifiable authorship.
End users with MSAs are not required to have FRQCY or Capacity to interact with Frequency, but may instead choose to delegate tasks that require Capacity to Providers.
See [Message Source Accounts](./Identity/MessageSourceAccounts.md).

## MSA Id

The unique 64-bit unsigned integer identifier associated with an MSA.
See [Message Source Accounts](./Identity/MessageSourceAccounts.md).


## On-Chain Message

A Message that has its payload stored on the Frequency blockchain.
See [Payload Location](./Data/Schemas.md#payload-location).

## Off-Chain Message

A Message that has its payload stored on IPFS.
See [Payload Location](./Data/Schemas.md).

## Payload

The data within a protocol related data item.
The format of the payload is defined by the corresponding Schema Model.
See [Schemas](./Data/Schemas.md).

## Payload Location

The attribute of a Frequency Schema that specifies how and where data will be stored.
See [Schema Models](./Data/Schemas.md#schema-models).

## Provider

The holder of an MSA that can allow others to delegate to it such as applications and services that use the Capacity economic system.
Providers utilize Capacity to serve the end users that delegate to them.
See [Providers](./Delegation/Providers.md).

## Provider Boosting

Provider Boosting allows users to stake FRQCY they hold to support specific Providers.
Providers who are "boosted" by end users receive additional Capacity, while Users who "boost" Providers receive a reward (in the form of additional FRQCY).

See [Boosting](./Tokenomics/UserIncentives.md#boosting).

## Public Collator

A Collator who bonds FRQCY in order to participate in block formation, and receives rewards for participation.
Public Collators who behave improperly risk losing their position and their bond.
See [Collator Incentives](./Tokenomics/CollatorIncentives.md).

## Reward Epoch

The number of blocks between distributions of Provider Boosting rewards.
See [Boosting](./Tokenomics/UserIncentives.md#boosting).

## Revocation

See [Delegation Model](./Delegation/index.md).


## Schema

Registered data structures for Messages and Stateful Storage items.
Frequency Schemas define where Payloads are stored and how end users can parse the data within.
See also On-Chain Message and Off-Chain Message.
See [Schemas](./Data/Schemas.md).


## Schema Id

The unique identifier of a Schema on Frequency.
See [Schemas](./Data/Schemas.md).

## Schema Model

Metadata about a Frequency Schema that defines the format and structure of the Schema itself, from which applications can determine how to serialize and deserialize data using the Schema.
Frequency supports two model types for data: Parquet and Avro.
See [Schema Models](./Data/Schemas.md#schema-models).

## Schema Registry

The Schema Registry is the on-chain repository for Frequency Schemas.
See [Schemas](./Data/Schemas.md).

## Staking

Staking refers to the process of temporarily locking tokens in order to accomplish a specific action.
FRQCY can be staked for specific purposes, including serving as [Public Collators](#public-collator), [Capacity Staking](#capacity-staking) and [Provider Boosting](#provider-boosting).

## Staking Ratio

See [Capacity Staking Ratio](#capacity-staking-ratio).

## Stateful Storage

A mode of storing on-chain protocol related data items so that they can be easily retrieved, modified, and removed, indexed by the data controller's MSA and a Schema Id.
See [Stateful Storage](./Data/StatefulStorage.md).

## Thaw Period

The period of time between token unstaking and token liquidity during which those tokens cannot be used, transferred or sold.
See [Thaw Period](./Tokenomics/ProviderIncentives.md).

## Token Account

An Account that is secured with FRQCY.
See [Visibility](./Tokenomics/UserIncentives.md#visibility).


## Unstaking

The process of allowing tokens that have been staked to be made available again.
When a user unstakes their FRQCY, there is a Thaw Period before the tokens are unlocked.
See [Unstaking](./Tokenomics/ProviderIncentives.md#capacity-unstaking).

## User

Any entity with an Account on Frequency.
See [Identity Management](./Identity/index.md).

## User Handle

A unique identifier for users on Frequency, consisting of a user-selected Handle Base and a chain-selected Handle Suffix.
See [User Handles](./Identity/Handles.md).

## XRQCY

The Frequency Testnet Token.
This token is only for testing and holds no value.
See also [FRQCY](#frqcy).
See [Tokenomics](./Tokenomics/index.md).
