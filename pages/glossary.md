# Glossary

## Account

Frequency has two types of accounts — Token Accounts and Message Source Accounts
(see below).

- `Account ID` — A public key that could be a Token Account and/or associated with an MSA.
  Account IDs (aka public keys) may only be associated with one MSA.

### 1. Token Account

Token accounts are accounts that hold the token used on Frequency. Token accounts
are the same as [Polkadot accounts](https://wiki.polkadot.network/docs/learn-accounts)
and accounts on most other parachains. Anyone can
create and use one of these accounts, but they are only active if they have tokens
stored in them. They are identified by the public key from a key pair and they are
secured by storing the private part of the key pair in a wallet.

### 2. Message Source Account (MSA)

Message Source Accounts (MSAs) are unique to Frequency and do not interact with tokens.
MSAs have [one or more associated public keys](https://forums.projectliberty.io/t/shorts-one-public-key-is-not-enough/215),
allowing for different keys for devices and separate backup keys. Each key is able to be
revoked and new keys added without breaking any connections because the connections are
recorded using a unique number generated when the MSA is created. A wallet is still
required to store the associated private keys for each public key that controls the MSA.
These MSAs interact with [Capacity](#capacity) and data on the chain, but unlike
a token account, they do not require Capacity to be active.

- `MSA ID` — The 64-bit unsigned integer identifier associated with an MSA.
- `Registered MSA` — An MSA that can allow others to delegate to it. Required for
  some types of staking.

## Actor

The human(s) behind any single user or service that is either directly or indirectly interacting with Frequency.

### Bad Actor

A user intentionally using the application for bad-faith or illegal purposes

## Announcer

A service that a provider uses to queue individual messages and create message for a Parquet Schema.

### Batch Message

One on-chain message that points to lots of messages from different Message Source Accounts.
In other words, it represents a shorthand that is a logical construct:
off-chain payload reference + more than one MSA referenced as a sender in that off-chain data
(aka a Parquet schema with payload location of IPFS).

### Provider MSA

The MSA associated with the Account ID that signs a capacity transaction.

## Bot

An automated account, sometimes malicious but often providing some service
("Hey Alexa, what's the weather?")

## Capacity

Ability to do a consistent amount of work on the chain repeatedly into the future.
Capacity received from staking is available for the Provider to use once the
Capacity Epoch after the staking happened.

In Frequency context, Capacity is the ability to send messages every Capacity Epoch.

- Capacity refills each Capacity Epoch
- Capacity is gained through Staking
- Capacity can be used for the following actions
- Creating an MSA
- Adding a Key to an MSA
- Adding a Provider to an MSA
- Modifying a Delegation Permissions
- Sending an on-chain message with a given Schema
- Sending a batch message with a given Schema

### Capacity Epoch

The Capacity Epoch is the number of blocks before capacity refills. In other words,
it is a number of blocks before you get to reuse your Capacity.

## Collator

A Frequency node that generates blocks and submit them to the Relay Chain.

## Consumer

Someone who reads content from social media

## Content Identifier (CID)

Self-describing content-addressed identifiers for distributed systems

## Delegate (verb, i.e. "to delegate")

The action of an MSA (the Delegator) delegating to a Provider. A verb only.
**DO NOT** use as a noun!

## ~~Delegate (noun, i.e. "a delegate")~~

!! **DO NOT** use as a noun! Confusing due to being spelled the same as the verb and
close to Delegator. Replaced with Provider.

## Delegator

An [MSA](#message-source-account-msa) that has granted specific permissions to a Provider.

## End User

Groups or individuals that own an MSA that is not a [Provider MSA](#provider).

## Existential Deposit

The minimum amount an account may have and be considered alive. May be set to 0.

## Graph / Social Graph

A social graph is a graph that represents social relations between entities.

### Public Graph

A social connection graph between MSA Ids that is readable by anyone.

### Private Graph

A social connection graph between MSA Ids that is readable only by those with the necessary encryption key(s).

## InterPlanetary File System (IPFS)

A decentralized content-addressed file system. See https://docs.ipfs.tech/ for more detail.

## Message

A Frequency packet of data that matches a registered schema. Any message sent on
Frequency must have a registered Message Schema Id. This registration tells consumers
of the message how to read the data in the Payload.

### On-Chain Message

One message on chain from a Message Sending Account
We have two schema options that are important here:

- **Payload location** - this is currently either on-chain or ipfs.
  It could be expanded to more in the future.
- **Model Type** - this is currently either AvroBinary or Parquet.
  This tells you how to read the schema's model to construct new message payloads and potentially read or validate data.

## Message Source Account (MSA)

See [Account](#account) section for definition.

## Payload

The user data in a message that is defined specifically by the corresponding schema model.
[Schema](#schema) defines the message as a whole.

## Provider

An [MSA](#message-source-account-msa) that is registered for being able to be
delegated to and being the target of capacity rewards when a person stakes to the
network for token rewards. Anyone can register to be a provider.

## Schema

A registered data structure and the settings around it.

## Staking

A stake is an amount of money that a person gives up temporarily when receiving a benefit,
usually to shift some of the risk to the owner of the money. A rental security deposit
is a great example of a stake in everyday life. A renter gives the landlord or rental
company some money, and as long as certain criteria are met, the renter receives that
money back at the end of the agreement. The security deposit helps secure against the
renter breaking the agreement because the renter desires the return of the deposit.

Frequency supports two different types of staking that generate Capacity, each
with a different goal. Both types are a form of network staking which supports the
network as a whole and does not participate in securing the network like validator
staking for example. Network staking connects the market component for the value of
the network, which in part reflects the value of the content flowing through the
network. The risk of loss is not from slashing, but that the token loses value.

### 1. Rewards Capacity Staking for Users

Because most users will use capacity from Providers, they do not need Capacity directly.
To encourage users to support services and participate in the chain governance,
Frequency offers Rewards Capacity Staking. Like Maximized Capacity Staking, the
stake generates capacity that the user must direct to a Provider they chose.
However, the Rewards Capacity Staking is much less Capacity for the same amount of
tokens staked. Instead, the user receives a periodic “reward” back to the
Token Account of the stake.

### 2. Maximized Capacity Staking for Applications and Services

The goal of Maximized Capacity Staking is to use tokens as efficiently as possible to
generate the most amount of Capacity that is possible. Providers, like applications
and services, need Capacity to interact with Frequency on behalf of their users.
These companies have many competing needs for their capital and will want to maximize
the Capacity generated for the number of tokens they stake.

The amount of Capacity generated from Maximized Capacity Staking is balanced against
Rewards Capacity Staking to ensure that it is almost always more capital efficient for
an application to choose Maximized Capacity Staking. Because Providers have an amount
of Capacity they need to operate, they care most about gaining the needed Capacity
while regular users don’t need a specific Capacity amount and can opt for the more
useful token earnings instead.

## Store

A means of keeping messages or data for an extended period of time.

## Substrate Weight (aka Weight)

Substrate’s version of gas. This the core value for the “cost” of the action on the chain.

## Token Account

See [Account](#account) section for definition.

## Tombstone

Represent a deleted record in a replica of a distributed data store.
The tombstone is necessary, as distributed data stores use eventual consistency,
where only a subset of nodes where the data is stored must respond before an operation
is considered to be successful. [See more info here](<https://en.wikipedia.org/wiki/Tombstone_(data_store)>)

### Transaction Weight

Weight is the term for the blockchain computational cost of an action. Different
actions cost different weights. We also charge more for some actions
for spam or future “free” actions.

## Unstaking

If someone who has staked wants to become liquid again in order to transfer or trade
their tokens, they have to go through what is called a thaw period. This is a time
interval where the tokens are not generating any rewards or Capacity, but cannot yet
be used or transferred from the user’s account. After the thaw period ends,
the user can then use, transfer, or even re-stake their tokens.
Once someone has triggered the unstaking process, the Capacity received for those
tokens is removed at the start of the next Capacity Epoch.

This period is important to allow time for the market to react to any actions that
a user has done. It also encourages longer term commitment and investment.
Unlike some chains, Frequency does not currently have staking time periods.
Unstaking requires an active choice by the owner. The length of the thaw period is
currently expected to be about 7 days, but it is still being finalized and is an
example of something that governance could adjust in the future.

# TEST 2
