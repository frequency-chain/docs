# Operational Model

Like most Layer 1 blockchains, Frequency stores chain state and conducts data processing and state transitions on nodes, servers that participate in the Frequency network.
Nodes can be configured in different ways depending on their purpose and use cases.
These nodes communicate with one another to maintain shared state and contribute to the mempool, the queue of submitted transactions that are available to use to produce blocks.
Nodes that form blocks are referred to as Collator Nodes.

Depending on its configuration, an individual node may play various roles.
Full nodes maintain the full state of the chain.
Light client nodes enable applications (including browser-based applications) to observe all chain events.
Archive nodes retain the full history of the state of the chain for all blocks.

The core logic for Frequency is encapsulated in the Frequency Runtime, and uses platform-independent WebAssembly (Wasm) code.
Each node runs the same version of the Frequency Runtime, the state transition function of the blockchain.
The Frequency Runtime can be upgraded with new functionality or changes as approved by Frequency Governance.
The Frequency Runtime defines the set of extrinsics (transaction types) that the blockchain is capable of processing, the types of events those transactions represent, and the format and data structures that constitute the blockchain's state.
Each node also runs a copy of the current Relay Chain Runtime WASM, for coordination and interaction with the Polkadot Relay Chain.

Like many blockchains, there are multiple deployments of Frequency.
The production system, referred to as Mainnet, uses the validators of the production Polkadot Relay Chain.
A separate system for testing and development known as Testnet uses validators on the Polkadot Rococo Testnet Relay Chain.
Data and state on Frequency Mainnet is considered canonical, while data and state on Frequency Testnet is for testing purposes only.

Changes to the Frequency Runtime are typically deployed to Testnet before being submitted to Frequency Governance as upgrade proposals for Mainnet.
For the most part, functionality is identical between the two systems (except for new changes on Testnet that are not yet deployed on Mainnet), aside from a few changes that make Testnet simpler to work with for development.
Where there are different behaviors on Testnet versus Mainnet, they are noted in the description.
