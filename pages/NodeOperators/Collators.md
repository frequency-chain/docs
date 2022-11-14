# Collators

## What is a Collator
Collators maintain parachains by collecting parachain transactions from users and producing state transition proofs for the Relay Chain validators.

Essentially they serve as transaction censorship that generates blocks and submits them to the Relay Chain.
They maintain a full node on both the parachain and Relay Chain.


See more details about Collators on [Polkadot's Wiki Page.](https://wiki.polkadot.network/docs/learn-collator)

![Collator Architecture](https://wiki.polkadot.network/assets/images/polkadot-consensus-example-1-b4a05f2e5a4b991594612da57e1d6dfd.png)

## What purpose does it serve for Frequency
Collators generate blocks on Frequency from transactions taken from the mempool and submit them to the Relay Chain on Polkadot. 

The core team will run a few collator nodes to ensure the Frequency  Parachain is always running.
We encourage the community to run their own collator nodes to help maintain the network.

More details will soon be released along with detailed instructions on how to run a collator node.

