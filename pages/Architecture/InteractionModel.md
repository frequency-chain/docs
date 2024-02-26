# Interaction Model

Frequency Nodes have several points of interaction, including extrinsics, State Queries, Runtime APIs, and Custom RPCs.
Extrinsics are used to perform transactions on the chain.
Users interact with extrinsics using asymmetric (public key) cryptography.
A user's public key, when stored on the blockchain, becomes their account identifier.
Users submit transactions for an extrinsic by generating an appropriately formatted payload, and adding a cryptographic signature using the corresponding private key.
The blockchain must verify the signature in order to continue processing the transaction.
Frequency uses the Schnorrkel/Ristretto x25519 algorithm (abbreviated sr25519) as its key derivation and signature system.

In addition to extrinsics, Frequency has several structures for reading on-chain data from a node.
When reading information, it is important that the specific node being used for access is trusted.
As Frequency is a public blockchain, anyone can run a Frequency Node to submit transactions and read information securely from it.

State queries directly access the key-value store that holds the state of Frequency.
Most libraries provide utilities to make the creation of the correct key and decoding of the data easy, although some storage can be difficult to parse or consume without additional processing, and underlying storage migrations will produce breaking changes.

Runtime APIs provide access to both chain and node information without being tied directly to the key-value store.
They may also access running information about the Frequency node such as the version of the binary.
These are "Runtime" APIs as they are deployed with the Runtime Wasm upgrades.

Frequency Nodes are also configured to provide a layer of Custom RPCs (Remote Procedure Calls).
Custom RPCs are deployed only on the node, so allow for heavy processing, external calls, or other code that is not appropriate for the Wasm runtime execution environment.
These RPCs do not upgrade until the node binary is upgraded, but may rely on Runtime APIs that are upgraded.
Some Custom RPCs may require additional node configuration.
