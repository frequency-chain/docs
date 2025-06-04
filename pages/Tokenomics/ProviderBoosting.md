# Provider Boosting

Frequency incorporates a second form of staking called Provider Boosting.
While Capacity Staking solely produces Capacity and is designed to help Providers maximize economic utility for publishing Messages and managing Stateful Storage, Provider Boosting gives users a mechanism to provide support for, or withdraw support from, Providers by staking FRQCY.
Provider Boosting also gives individual users a mechanism to receive FRQCY rewards directly and benefit from the value accrual potential of the broader cryptoeconomic system.

<!-- TODO: Insert diagram here -->

Like Capacity Staking, Provider Boosting also generates Capacity and therefore requires a Provider to be designated as part of the staking process.
In this scenario, a different ratio of FRQCY to Capacity (the Provider Boosting Ratio) is used, which is always less token-efficient than the Capacity Staking Ratio in order to generate an equivalent amount of Capacity.
This incentivizes token-holding Providers, who want to utilize Capacity directly, to use Capacity Staking, and users, who want to earn rewards and support their chosen Providers, to use Provider Boosting.
The Token Account that stakes the tokens receives a reward, paid in FRQCY, to reward the Token Account holder for participating in Provider Boosting and expressing their support for the Provider(s) they chose.
These FRQCY rewards are expected to be substantial, and thus should drive meaningful levels of user staking.
The reward is distributed at the end of each Reward Epoch, a number of blocks set by governance and initially configured to a duration of approximately 14 days.

Users must maintain their full stake throughout the entirety of the Reward Epoch in order to qualify for a reward.
Each Reward Epoch has a fixed number of tokens that can be minted to reward Provider Boosting participants, and those rewards are paid based on the ratio of the user's Provider Boosting stake to all user Provider Boosting stakes across all Providers.
Token for rewards are not minted during, or at the end of, the Reward Epoch.
Instead, tokens are minted at the time they are claimed by the Token Account holder, sometime after the end of the applicable Reward Epoch.
However, all rewards are capped at a maximum Annual Rewards Rate set by governance.
Given that the reward is paid via new token minting, the reward for Provider Boosting contributes to FRQCY inflation.

By virtue of the user staking tokens that increase the Provider's Capacity Allocation, Provider Boosting represents a user's approval or support of a Provider, creating a trackable, continuous support metric.
To allow the user to react to the behavior and actions of the Provider, the user has the ability to designate a different Provider to support with their stake at any time, without going through a thawing process.
This allows a user to change which Providers they support at any time, signaling approval of a newly supported Provider, disapproval of a Provider that loses their support, or both.
Changing which Providers they support has no impact on the rewards a user receives for their Provider Boosting stake.
An on-chain, incentivized mechanism for users indicating support for application participants in the ecosystem is a novel mechanism in the space, and very different from how, for example, social networking applications function today.

Providers also receive value from Provider Boosting.
They receive Capacity from users' stakes, which can substitute for Capacity they would have otherwise received by acquiring FRQCY and deploying it using Capacity Staking.
A Provider also gains block-level insights into user reactions to their product offering, policy changes, and other reputational criteria.
This ongoing signaling can be a powerful feedback mechanism for a Provider as the set of participating users express their approval level on a continuous basis.
Depending on user participation levels and Provider popularity, this could represent all the Capacity needs for a Provider.
Conversely, if users of Provider Boosting disapprove of a supported Provider’s actions and change the Provider they support or unstake, the reduction in Capacity not only sends a negative signal to the Provider regarding their recent actions, but also has potentially direct financial impacts on the Provider, by requiring them to make up any Capacity shortfall with Capacity Staking from FRQCY tokens they must acquire at their own expense.

A novel aspect of Provider Boosting is that while Providers receive Capacity based on user support, unlike staking to a validator on other chains, Providers do not  pay users for the Capacity received.
Instead, the Frequency chain itself is paying the Reward to users for participating.
This changes the nature of the user/Provider interaction involved in Provider Boosting.
Instead of Providers "paying" users to support them, as some other cryptoeconomic systems promote, the network incentivizes users to stake, with no specific economic incentive for which Provider they support.
This "economically agnostic" choice that Provider Boosting incentivizes users to make can increase the quality and value of the support or approval that Provider Boosting implies; this establishes real economic incentive for Providers to behave in the ways users support or prefer.


## Visibility

Provider Boosting, via user staking to support Providers, is also a form of Provider reputation scoring.
There are several ways these stakes can be interpreted.
For example, rankings can be composed for total tokens staked per Provider, average tokens staked per user, rates of increase or decrease for a Provider, and so on.
Each grants valuable insight to users about Providers with whom they may want to start or stop interacting, as well as signals Providers regarding user interest, approval, and support.


Since all Provider Boosting activity occurs on chain, all changes in staking activity are publicly visible.
While Token Accounts used for Provider Boosting may or may not be associated with a user's MSA, all Providers in Provider Boosting are directly identifiable.
This means there is no way for Providers to suppress visibility around public sentiment as expressed by Provider Boosting.
The independent, public and decentralized nature of Provider Boosting is rare in existing platform-based communication channels, and serves as another incentive for users to participate.
