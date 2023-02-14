# Messages

A message on Frequency consists of data conforming to a registered `SchemaId`.

## How messages relate to Schemas
Any message sent must be associated with a `SchemaId` to group data types and indicate to users how to read the data in the payload.
The Schema specifies whether the message is on chain or off chain (IPFS).
The `SchemaId` validates that the message data contains all of the necessary field information required.

## How a message is created and verified:
* **How it relates to MSAs:**
Messages can only be added by MSAs.
Users are not required to delegate to a Provider, so long as they have an MSA; users could become a Provider and pay to post message transactions themselves.

* **How it relates to Providers:**
Providers serve as the primary creator of messages, however, any MSA can submit messages so long as they have enough FRQCY tokens or Capacity (future development).
Providers are expected to post messages on behalf of the MSAs that delegate to them.
Providers submit messages containing the `MSA ID` of the message sender.
This verification is valid for on-chain messages only at this time.

## Batching Content

Messages can be a collection of messages from multiple MSAs that are collated together into a batch.
Usually these are structured as Schemas that are stored off chain such as in IPFS.
Only one data type is allowed per message payload in order to improve searching, indexing, and organizing message threads.
Frequency supports off-chain, batched, messages as it allows a much higher effective message throughput and reduces costs associated with running a node.

Batched messages allow Providers to publish large quantities of data off chain at once, reducing the transaction price.
There are tradeoffs for how long to wait to post batched messages.
Smaller batches reduce latency while larger batches reduce transaction fees.
Additionally, batched messages reduce the congestion of data on chain, which is crucial for a high-message volume ecosystem.

## Message Ordering

Ordering of messages on chain is set by the order processed.
Each message has a transaction index in the block.
Messages should be ordered by block number and then transaction index.

> For example, Node A has 5 messages and Node B has 5 messages.
> If Node A posts all of the extrinsic of their messages to the mempool before B, then Node A's messages will be posted first and show up in the block earlier than B's messages.

Messages off chain are encouraged to use optional timestamps.
Due to the nature of timestamps, ordering cannot be guaranteed for off-chain messages.
Message replies to off-chain messages are recorded in response to the initial message, in which case message ordering is canonical.

## Retrieving from the Chain
Messages may be retrieved from the chain by calling the pointer message location of the IPFS `SchemaId`.
IPFS messages retrieved from the chain generally would be fetched for the purpose of getting the IPFS location for a batch file and then retrieving that file for processing.
On-chain messages retrieved from the chain may be fetched for immediate processing as the message content is on chain.

## Paying for Messages

### Capacity
**Capacity is currently under development - more details will be released soon.**

Learn more about [Capacity](../Tokenomics/Capacity.md) here.

### Tokens

While it is possible to pay for sending messages with tokens, it is expected that they are mostly sent using Capacity.
Sending messages using tokens is currently supported, and is the preferred method for local testing.
