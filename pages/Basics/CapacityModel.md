# Capacity

<img src="https://github.com/LibertyDSNP/frequency-docs/blob/editing-session/pages/images/Decentralized%20vs%20Business-Friendly%20Dichotomy.png" width=75% height=75%>

## The Decentralized vs Business-Friendly Dichotomy
While all blockchains are distributed (meaning many parties own copies of the ledger) they are not all decentralized (e.g., Ripple, Hyperledger, R3 Corda, Enterprise Ethereum). Profitable and business-friendly solutions, be they on the blockchain or otherwise, tend to be centralized and offer very little user control. Solutions that offer a great deal of User control and transparency require governance and consensus, which introduces both complexity and coordination costs. And as the ecosystem grows, the complexity and costs also rise significantly. Thus, truly decentralized blockchains tend to have high associated transaction costs that are not tenable for many types of businesses. Additionally, the tremendous volatility of transaction pricing, while typical for emerging solutions, creates an unacceptable level of uncertainty for many businesses trying to build on a blockchain.

## Frequency's Capacity Staking Model Solution
Frequency balances the End User’s need for control and participation in the system with businesses’ (Providers) needs for business-friendly options via its Capacity Staking Model.  

### What is Capacity
Frequency’s Capacity Staking Model is a unique, continually-renewing, stake-based leasing model for sending messages without explicit payment in tokens. Capacity is replenishable, as all Capacity refills after a fixed period called a Capacity Epoch. 

<img src="https://github.com/LibertyDSNP/frequency-docs/blob/editing-session/pages/images/The%20Capacity%20Refill%20Model.png" width=75% height=75%>

### What is an Epoch?
Capacity is divided into time segments called Capacity Epochs, each composed of a set number of blocks. Capacity (or the ability to transact a subset of blockchain interactions) refills at the start of each new Capacity Epoch. These Capacity Epochs form a meta-block that can grow slowly over time if needed. The block may grow naturally as system efficiency increases (i.e., each block holds 3 Capacity rather than 2) or manually by increasing the Capacity Epoch length. As Capacity is used up, Providers using Capacity may choose to increase their Capacity (by staking more tokens) or allow a lag in sending messages (by waiting until the next Capacity Epoch).

### The Two Types of Capacity Staking
Frequency supports two different types of staking to generate Capacity, each with a different goal. Both types are a form of network staking which supports the ecosystem as a whole rather than securing the chain (as in validator staking).

**Maximized Capacity Staking** uses tokens as efficiently as possible to generate the highest level of Capacity possible. Provider applications and services need Capacity to interact with Frequency on behalf of their Users. These companies have many competing needs for their capital and will want to maximize the Capacity generated from the number of tokens they stake.

**Rewards Capacity Staking** does not generate Capacity for Users, but rather directs their Capacity to the Provider(s) of their choice. Rewards Capacity Staking generates less Capacity Per Token than Maximized Capacity Staking, yet still allows Users to participate in the governance system and receive a periodic “reward” back to their Token Account in exchange for increasing the decentralization and stability of the network. Since Users are allowed to change which Providers they support without unstaking, Providers are encouraged to keep their applications aligned with Users. Balancing these two types of staking presents a natural balance mechanism. 

<img src="https://github.com/LibertyDSNP/frequency-docs/blob/editing-session/pages/images/Staking%20for%20Capacity.png" width=75% height=75%>

### Unstaking
Those who participate in Frequency staking may unstake whenever they wish. However, unstaking requires a thaw period during which they may not restake or transfer their thawing tokens. The Capacity originally received for those tokens is removed immediately.

### The Roles of Capacity
Capacity is used by Users and Providers to do two things on Frequency: 1) manage their accounts and 2) send messages. These are the two tasks within Frequency that are most repetitious and thus the most sensitive to volatile transaction fees. What’s more, Capacity transactions function independently of global state. In most blockchain transactions, the entire global state of the blockchain is brought in for each transaction, because transactions must happen serially and in the correct order. Capacity focuses on transactions that are limited in scope. When combined with “batching”, Frequency enables a high scale of parallelization.

Capacity fills three primary roles within the Frequency ecosystem: 1) regulates volume on the chain, 2) manages costs, and 3) aligns incentives. Each of these roles pairs with a balance mechanism available on Frequency.
