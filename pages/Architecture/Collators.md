# Collators

Collators are full nodes that additionally are responsible for maintaining Frequency by collecting the transactions submitted to the mempool and producing state transition proofs.
They serve to organize and collect valid transactions in order to form blocks.

Frequency utilizes the Polkadot Relay Chain as its consensus mechanism.
Collators submit newly formed blocks to the Relay Chain, which contains an extensive, decentralized network of validator nodes.
The Relay Chain uses a Nominated Proof-of-Stake (NPoS) algorithm, where a validator node is chosen to process the state transition proofs submitted by Frequency's Collators.
This architecture enables nodes on Frequency to focus on the functionality needed for users, while the Relay Chain handles block validation and permissionless security.

To ensure high availability, multiple organizations run Frequency Collator Nodes.
In order to operate as a Frequency Collator, the node must meet additional criteria, as described in [Collator Incentives](../Tokenomics/CollatorIncentives.md).

Learn more about [how to run a Collator](../Networks/Collator.md).
