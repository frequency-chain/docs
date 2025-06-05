# Collator Rewards

Collator Rewards incentivize formation of the blocks necessary to ensure that the chain continues to function.
Since Frequency is a Layer 1 chain in the Polkadot ecosystem, the Relay Chain is used for consensus and finality via the parachain leasing mechanism.
However, block formation is still a Frequency responsibility that must be performed by Frequency-specific Collators.
[Public Collators](../Glossary.md#public-collator) must stake to the network to participate.
All Collators participating in block formation activities will eventually receive token rewards, though the details of this mechanism will be finalized as part of the process of launching Public Collators.

{{#svg-embed pages/images/CollatorRewards.svg Collator Rewards Diagram}}

Collators are analogous to validators in other proof of stake networks, but the work done by Collators is significantly lower, requiring less computational overhead and lower participation levels, given that consensus and finality occur at the Relay Chain level.
Public Collators are currently a roadmap item, and Frequency currently uses [Invulnerable Collators](../Glossary.md#invulnerable-collator) that do not receive rewards for block formation.
The system will be parameterized in a way that will support meaningful profitability for Public Collators in order to maximize system stability under varying conditions.
