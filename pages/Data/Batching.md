# Message Batching

The ability to publish off-chain data using IPFS and the Parquet format enables a single blockchain transaction to encapsulate a large number of protocol-specific data items that share the same Frequency Schema.
This is referred to as Message Batching.
The Parquet type additionally functions to enable the off-chain searching, indexing, and organizing of Messages.

Message Batches allow applications to publish a single on-chain transaction that encompasses large quantities of data off chain, thus reducing transaction fees.
Batched Messages also reduce block space requirements, resulting in lower transaction congestion on chain, which is crucial for a high-volume Message ecosystem.

Applications should consider the tradeoffs when assessing how frequently to form batches of Messages.
More frequent batches reduce latency, while less frequent batches further reduce transaction fees.

Applications and protocols that use Message Batching can additionally benefit from Frequency's [Delegation Model](../Delegation/index.md).
This enables application providers to aggregate Messages from any set of users that has delegated permission to the application.
These delegations can be confirmed against the chain by later consumers of the batch Messages.
