# Core Principles of Frequency

Frequency aims to return agency to the user amongst an ecosystem of rampant misinformation, censorship from state and corporate actors, and near monopolies from select players with absolute power over social engagements.
Frequency, in conjunction with Provider Applications, strives to solve these challenges by reshaping online social interactions.

## The Frequency Triangle

Frequency is a Layer 1 blockchain designed around a novel economic system that uses three interconnected models: the Delegation Model, the Capacity Staking Model and the Data Transaction model, to meet and carefully balance the criteria necessary for massively scaled applications. This blockchain is available for multiple use cases–including non-financial, high volume, broadcast-based ones like social media. The Frequency blockchain is like a 3-legged stool.  Without any one of the three economic model solutions, balance is lost, and the stool can no longer stand. Not only must all three of these models be present, but they must also be carefully balanced with one another, otherwise the stool will wobble, and the ecosystem will not thrive.  Thus, each model has manual and automatic level sets that may be used to restore the system to a balanced state.

Typical blockchains exhibit a push pull between many opposing forces.  Those blockchains that are Low Cost and Low Friction tend to be highly centralized.  By contrast, those blockchains that are truly decentralized, tend to be expensive and present a lot of friction for onboarding Users.  Frequency carefully balances these opposing forces with the three economic models mentioned above.  This overall balance is called The Frequency Triangle.

![image](https://github.com/LibertyDSNP/frequency-docs/blob/editing-session/pages/images/The%20Frequency%20Triangle.png)

### The Delegation Model

**Shifting Cost and Complexity**

Many blockchain systems face inhibited growth as a result of high/unpredictable user costs as well and complex systems that are difficult for new users to understand. Via its [Delegation Model](https://github.com/LibertyDSNP/frequency-docs/blob/editing-session/pages/Basics/DelegationModel.md) Frequency shifts most of the complexity and all the fees of participating in blockchain applications away from End Users to Providers: the creators of third-party applications and services directly interacting with Frequency. Users need not learn the intricacies of blockchain or even engage with tokens in order to use Frequency as providers can handle these tasks for them.

**The Power of Choice**

Traditional web systems are centered around point-to-point communications.
Any information that one wants to transmit to an unknown third party requires a centralized system to compile and then distribute the data to known requestors. Frequency uses the broadcast nature of the blockchain to provide [Message](./Messages.md) metadata that allows the existence of information to be discovered by anyone. Thus users, be they creators or consumers, can choose their own tools.
Users may then tune in to the data they want, ensuring user control without losing the power and value of a network.  Frequency Providers compete for customers in an open market where users may move from one Provider to another without losing agency over their relationships or their data--ensuring a chainwide focus on User needs and desires.


### The Capacity Model

**Renewable and Business-Friendly**

The tremendous volatility of blockchain transaction pricing, while normal for emerging technology, creates an unacceptable level of uncertainty for many businesses trying to build on a blockchain.  Even if costs are low on average, unpredictable price spikes lead to businesses not being able to budget or control their costs.
Frequency uses a unique continually renewing stake-based leasing system for sending messages called [Capacity](https://github.com/LibertyDSNP/frequency-docs/blob/editing-session/pages/Basics/CapacityModel.md), making node expenses more predictable and economical for participating Collators.

**Shared Schemas**

Much of the power of blockchain has not been in custom smart contracts, but the ability for those contracts to follow standards.
Common use of custom tokens would not be possible without ERC-20 nor NFTs without EIP-721.
Even once those standards are complete, implementations can be flawed or allow for twisted results.
Frequency enables collaborative standardization instead of individual customization.
Frequency is not a replacement for smart contracts.
However, a large subset of the benefits of smart contracts can be realized through [Schemas](./Schemas.md).
With clear usage data and information structures, Frequency allows Providers to collaborate faster and iterate on standards in new ways.

### The Data Transaction Model

**Off-Chain Storage**

Blockchain transactions have primarily been financial in nature, even when they didn’t need to be.
Frequency distinguishes between financial transactions and data-focused transactions via its [Data Transaction Model](https://github.com/LibertyDSNP/frequency-docs/blob/editing-session/pages/Basics/DataTransactionModel.md).
Financial transactions require extra rigor and additional steps (such as defending against the double-spend attack) that are not necessary in data-focused transactions.  However, Frequency [Messages](./Messages.md) retain other blockchain guarantees such as authenticity and data validation while storing the bulk of its data off chain.

**Batching**

Frequency's data-focused, non-financial use cases allow for parallel transactions in batches.  Verification may be done asychronously at read time or write time.  This allows Providers to batch and publish a lot of data off chain at once--a key requirement for managing transaction costs as well as scaling.


