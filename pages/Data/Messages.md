# Messages

A Message on Frequency consists of data that must conform to a registered Frequency Schema.
Messages are published in the context of a given block, allowing applications that observe events on the chain from finalized blocks to view the Messages for a given Frequency Schema as a well ordered stream of data items.

To submit a Message to Frequency, the submitted transaction must be signed by a Control Key linked to a Message Source Account.
However, Frequency's Delegation Model provides options for scenarios where Providers can build a Message Batch (consisting of Messages from any number of users) and submit a single transaction for the entire batch, without sacrificing the ability for downstream applications to authenticate each individual Message within the batch.

## Message Ordering

Ordering of Messages on chain is determined by their position within a block.
Each Message is assigned a transaction index within its block.
From an application perspective, Messages should be ordered by block number and then transaction index.

## Message Retrieval

Message metadata, such as Schema Id and, for IPFS messages, CID, is stored on chain and thus always available.
Message Payloads may exist either on chain or off chain.
On-chain Message Payloads may be fetched for immediate processing.
Messages with off-chain payloads contain references to an off-chain IPFS location.
These payloads must be retrieved separately using the IPFS protocol.

## Message Duplicates

Frequency does not attempt to deduplicate Messages in any way, since two Messages with identical data can still be distinguished by block number and transaction index.
The semantics of duplicate Messages are therefore left to the application layer.
For example, a protocol might require that applications consuming Messages for a given Schema Id be resilient in the case of duplicate Messages.
