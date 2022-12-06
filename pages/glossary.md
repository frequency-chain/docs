# Glossary

## Account

Frequency has two types of accounts — [Token Accounts](./Basics/TokenAccounts.md) (which are responsible for holding a balance, transferring tokens, and paying for transactions) and [Message Source Accounts](./Basics/MessageSourceAccounts.md) (which are unique to Frequency and ensure messages have verifiable authorship.)

## Account ID

Account ID — a string that both identifies the Token Account and represents the Public Key used to link the User’s Token Account with their MSA.

## Actor

The human(s) behind any single user or service that is either directly or indirectly interacting with Frequency.

## Bad Actor

A user intentionally using the application for bad-faith or illegal purposes.

## Batch Message

One on-chain message that points to several messages from different Message Source Accounts (MSAs) that allows Providers to publish large quantities of data off chain at once thereby reducing the transaction price.

## Bot

A program that can interact autonomously with systems or users on a network.
Sometimes malicious, but often providing useful services.

## Capacity

Currently under development, [Capacity](./Tokenomics/Capacity.md) is a staking system for account management and sending messages that allows messages to be sent and on-chain work to occur over time.
Capacity is managed via a rate-limited continuous stream of transactions and provides an alternative to using FRQCY tokens to perform individual transactions.

## Capacity Epoch

The Capacity Epoch is the number of blocks before capacity refills.
In other words, it is the number of blocks before one may reuse Capacity.

## Coinless User

An End User who doesn’t use tokens to interact with the blockchain.
While Coinless Users have wallets with private keys that enable them to maintain control of their information and identity on chain, they typically will delegate their needs to a Provider who will in turn manage on-chain transactions (such as sending messages) on their behalf.

## Collator

A Frequency node that generates blocks and submits them to the Relay Chain.
Frequency currently operates using "[invulnerable Collators](./Networks/Collators.md)", but intends to transition to public collators sometime in 2023.

## Consumer

Someone who reads content from social media.

## Content Identifier (CID)

Self-describing content-addressed identifiers for distributed systems such as IPFS.

## Delegate (verb, i.e. "to delegate")

The action of an [MSA](./Basics/MessageSourceAccounts.md) (the Delegator) granting permissions (such as sending messages on their behalf) to a Provider.
Used as a verb only; i.e. there is no entity that serves as a "delegate" in the Frequency system to prevent confusion.

## Delegator

An MSA that has granted specific permissions to a Provider.

## End User

A user who owns an MSA but is not acting as a Provider MSA.
An End User may choose to own tokens to participate in Rewards Capacity Staking to support services and participate in on-chain governance with Capacity.
However, End Users typically delegate other tasks to Providers who perform actions on the user's behalf.

## Existential Deposit

The minimum token amount a token account may have and still be considered alive.
Set to 0.01 FRQCY.

## Direct Frequency User

Those who interact with the FRQCY token and are engaged in staking, governance, building new schemas, or other systems on Frequency.
These users overlap with DSNP users.

## Frequency Rococo

The testnet for Frequency that is connected to the Rococo Relay Chain.

## FRQCY

FRQCY is the token on the mainnet Frequency blockchain.

## Graph / Social Graph

A social graph is a graph that represents social relations between entities.

## InterPlanetary File System (IPFS)

A decentralized content-addressed file system.
See [https://docs.ipfs.tech/](https://docs.ipfs.tech/) for more detail.

## Invulnerable Collator

A collator that does not receive a reward and will not be removed without governance action.

## Maximized Capacity Staking

A form of staking that allows Providers to use FRQCY tokens as efficiently as possible, optimizing their Generated Capacity for serving End Users.
 Maximized Capacity Staking earns more Capacity per token staked than Rewards Capacity Staking.

## Message

A Frequency packet of data that matches a registered schema.
Any message sent on Frequency must have a registered [Schema Id](./Basics/Schemas.md) which tells consumers of the message how to read the data in the Payload.

## Message Service Account (MSA)

[Message Source Accounts](./Basics/MessageSourceAccounts.md) are unique to Frequency and ensure messages have verifiable authorship.
End Users with MSAs are not required to have tokens or Capacity to interact with Frequency, but may instead choose to delegate tasks that require Capacity to Providers.

## MSA ID

The 64-bit unsigned integer identifier associated with an MSA.

## On-Chain Message

A [message](./Basics/Messages.md) that has a payload location that is on the Frequency blockchain.

## Off-Chain Message

A [message](./Basics/Messages.md) that has a payload location stored off-chain (such as on IPFS.)

## Public Collator

A collator who applies for the Collator operator space, bonds tokens in order to participate, and receives rewards for participation.
However, public collators who behave improperly risk losing their position and their bond.

## Payload

The user data within a message.
The payload is defined specifically by the corresponding Schema model.
Schema defines the message as a whole.

## Provider

An MSA that can allow others to delegate to it such as applications and services that use the Capacity Economic system.
Providers utilize Capacity to serve the End Users that delegate to them.

## Provider MSA

The MSA associated with the Account ID that signs a capacity transaction.

## Public Graph

A social connection graph between MSA Ids that is readable by anyone.
Frequency supports the DSNP public graph.

## Rewards Capacity Staking

A form of staking that encourages End Users to support services and participate in the chain governance.
Rewards Capacity Staking earns less Capacity per token staked than Maximized Capacity Staking.
However in Rewards Capacity Staking the user receives a periodic "reward" back to the Token Account of the stake.

## Schema

[Schemas](./Basics/Schemas.md) are registered data structures and the data that surround it.
With Frequency Schemas define the format, how message payloads are stored, and how End Users can parse the message.
This ensures message correctness, validity, extensibility, and interoperability between services and allows Frequency to support a variety of message types while enforcing communication protocols between network and service participants.

## Staking

[Staking](./Tokenomics/Staking.md) refers to the process of temporarily surrendering something of value (tokens) in order to receive a benefit or to encourage a specific type of behavior.
With Frequency tokens are staked for certain permissions and governance actions.
In addition Frequency supports two types of staking that generate Capacity Rewards: Capacity Staking and Maximized Capacity Staking.

## Substrate Weight (aka Weight)

Substrate’s version of transaction gas.
This is the core value for the "cost" of any action performed on chain.

## Token Account

[Token Accounts](./Basics/TokenAccounts.md) are the Frequency accounts responsible for holding a balance, transferring tokens, and paying for transactions.

## Tombstone

A Tombstone can be created when a record should be "deleted".
Distributed data store captures the delete operation onto a marker or placeholder for that data which is called a Tombstone.
This prevents errors that can occur when requests for data and requests for deletion get out of order.

## Thaw Period

The period of time between token unstaking and token liquidity during which tokens can neither be used nor transferred or sold.

## Transaction Weight

Weight is the term for the blockchain computational cost of an action.
Different actions cost different weights.
Frequency may make changes to Transaction Weight in order to discourage spam messaging and other undesirable behaviors.

## Unstaking

The process of liquidating assets that were previously staked so they may be transferred or traded.
When one unstakes their Frequency tokens, there is a "thaw period" or interval of time where	tokens are not generating rewards or capacity, but are not yet liquid (cannot be transferred or traded).

## XRQCY

The Frequency Rococo Testnet token is notated as XRQCY - this token is only for testing and holds no value.
