# How to Gain Capacity

#### Capacity is currently under development - more details will be released soon regarding instructions and implementation details.

### Token vs Message Source Accounts

* **Token: Standard across other parachains**
[Token Accounts](https://docs.frequency.xyz/glossary.html#1-token-account) hold the token used by Frequency (FRQCY). 
They are the same across Polkadot accounts and most other parachains. 
Anyone can create and use these accounts but they are only active if they have FRQCY tokens stored. 
These accounts can store tokens and execute transactions.

* **Message Source Accounts: Unique to Frequency** 
[MSA's](https://docs.frequency.xyz/glossary.html#2-message-source-account-msa) are unique to Frequency and used to send messages using Capacity (from the user or Provider). 
MSA's can provide or revoke access to the chain and providers 

### Two Types of [Staking](https://docs.frequency.xyz/glossary.html#staking)
Frequency supports two types of staking to generate Capacity - each for a different purpose. 
Capacity must be directed/delegated to a selected Provider for **both** methods of staking.

1. **Maximized Capacity Staking:**
The goal of [Maximized Capacity Staking](https://docs.frequency.xyz/glossary.html#2-maximized-capacity-staking-for-applications-and-services) is to use FRQCY tokens as efficiently as possible to generate the most amount of Capacity possible. 
Applications, services, and Providers need Capacity to interact with Frequency on behalf of their users. 
The amount of Generated Capacity is balanced against Rewards Capacity Staking to ensure that it is almost always more capital efficient. 
Because Providers have an amount of Capacity they need to operate they care most about gaining the necessary Capacity while regular users don’t need a specific amount of Capacity and can opt for more useful token earnings.

2. **Rewards Capacity Staking:** 
[Rewards Capacity staking](#1-rewards-capacity-staking-for-users) generates less Capacity for the same number of tokens staked in Maximized Capacity Staking. 
[Most users](#Purpose-of-Capacity-for-Frequency) will use Capacity from Providers. 
Frequency offers Rewards Capacity Staking to encourage users to engage in on-chain governance and support services. 
The user receives a periodic “reward” back to the Token Account of the stake based on user participation. 
This incentivizes users to hold FRQCY tokens to increase decentralization and user participation with the chain. 
Users can change which Providers they support without unstaking, encouraging applications and providers to stay aligned with the Frequency users.

### [Unstaking](#unstaking)
Users must go through a “thaw” period for staked FRQCY tokens to become liquid. 
A thaw period is a time interval, currently expected to be about 7 days, where tokens are not generating any rewards or Capacity but cannot yet be used or transferred to the user’s account. 
After the thaw period has ended, tokens can be used, transferred, or re-staked. Once unstaking has begun, the Capacity received for those tokens is removed at the start of the next Capacity Epoch. 

### Prioritization of Capacity Transactions

Capacity transactions do not have the ability to tip, placing them at a disadvantage to token transactions, in which a tip increases the priority of the transactions likelihood to be added to the next block. 

Frequency prioritizes Capacity transactions over token transactions but place a limit on the block space Capacity transactions can consume. 
This allows Capacity transactions to fill the allocated spend and still allow for token transactions to fill the remaining block.
