# Inflation Rate and Liquidity

FRQCY will generally have positive inflation.
All token-based transaction fees are burned, creating a mildly deflationary environment at launch.
However, Collator Rewards (when launched) and the rewards for Provider Boosting cause new tokens to be minted, resulting in net inflation of token supply.

## Inflationary Mechanisms

Current contributors to inflation are Collator Rewards and Provider Boosting.
Both of these features involve the minting of new tokens.
Each feature is anticipated to have a fixed issuance model with chain Governance controlling the specific number of tokens issued per time period, leading to a declining overall inflation rate, as a ratio of minted tokens to total token supply, for the chain over time.
Issuance rates will be finalized for Collators when Public Collators launch.
Issuance rates for Provider Boosting are capped at 40 million FRQCY tokens per annum.
Given that Provider Boosting caps the earning rate of the stakes for Provider Boosting, below a certain level, not all 40 million FRQCY may be claimable or minted.
The maximum Annual Rewards Rate is currently 15% per annum.The aggregate inflation across Collator Rewards and Provider Boosting is currently planned to not exceed 50 million FRQCY tokens per annum, which would be 5% of the initially minted tokens.
Inflation mechanisms and rates must be approved by governance as part of the code release process of each feature.

## Deflationary Mechanisms

Current contributors to deflation are the burning of transaction fees (for transactions paid in FRQCY) and slashed governance deposits.
Of the two, only transaction fee burning is anticipated to have a significant impact on overall token supply.
The entirety of token-based transaction fees are burned.
While on some networks this can be very significant, the majority of transactions on the Frequency network utilize Capacity, rather than FRQCY, to pay transaction fees.
However, as only some types of transactions can be paid by Capacity, transaction fees constitute an unavoidable reduction in the supply of FRQCY.
Additionally, there are some types of governance actions that require deposits that are burned if the action is denied.
However, governance deposits are not anticipated to generate significant reductions in the token supply when compared to transaction fees.

## Circulating Supply

Decreases in circulating supply are triggered primarily by increased staking activity.
Both Capacity Staking and Provider Boosting lower overall token circulation levels as the number of staked tokens increase.
Given the utility that these staking mechanisms provide, relatively high global stake rates are assumed in both early and later stages of the network.
Staking levels don't decrease Providers’ ability to pay transaction fees for certain transaction types, however, given that both types of staking generate Capacity.
Generally, staking models require derivatives like "liquid staking" or they risk decreasing network transactions due to a smaller circulating supply of tokens available to pay transaction fees, which can reduce the value of the network.
Frequency is less susceptible to that correlation, since Capacity generated from staking can actually be spent on transaction fees.
This means that a lower circulating supply of FRQCY does not necessarily result in a lower transaction volume on chain due to Capacity-related transactions.

Increases in circulating supply can be triggered by distribution of tokens from the on-chain treasury and situations that encourage the unstaking of tokens from Provider Boosting or Capacity Staking, such as a change in the staking ratio or either mechanism.
Information about potential increases is generally available for all three of these activities.
In the case of on-chain treasury spending, the Governance approval process gives an indication of intent and the voting process allows for some trend analysis.
In the case of both staking activities, the Thaw Period of each indicates pending changes in circulating supply in advance of the tokens unlocking.
