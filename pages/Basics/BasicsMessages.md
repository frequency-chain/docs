# What is a Message

A message on Frequency consists of data conforming to a registered `SchemaID`.

## How messages relate to Schemas
Any message sent must be associated with a `SchemaId` to group data types and indicate to users how to read the data in the payload. The schema specifies whether the message is on-chain or off-chain (IPFS). The `SchemaId` validates that the message data contains all of the necessary field information required.

## How a message is created and verified:
* **How it relates to MSAs:**
Messages can only be added by MSA Accounts. Users do not need to delegate to a Provider, so long as they have an MSA, users could pay to post message transactions themselves.

* **How it relates to Providers:**
Providers serve as the primary creator of messages, however, any MSA account can submit messages so long as they have enough FRQCY tokens or capacity (future development). Providers are expected to post messages on behalf of the MSA accounts that delegate to them. Providers submit messages containing the `MSA ID` of the message sender. This verification is valid for on-chain messages only at this time.

## Payload
Payload Location specifies where the data will be stored: on-chain or off-chain.

* On-chain messages offer increased privacy and security at a higher price point and slower transaction publishing.
* Off-chain messages offer a decentralized encrypted location at a lower price and faster transaction publishing.

Visit the [Schemas](https://docs.frequency.xyz/Basics/Schemas.html) page to learn more.

## Batching vs Single Messages

### Single Messages

The `SchemaId` specifies the size of the data packet that can be posted to the chain. `SchemaIds` prevent users to specify between a single message transaction vs batched messages, but users can designate how many items to include in a batch. Single message transactions on-chain are specific to graph change announcements under Frequency’s current development.

### Batched Message Sending

A collection of messages from MSAs that are collated together into a batch to be stored in a decentralized file system (IPFS) with a pointer to the location of the batch published to the Frequency on-chain storage. Only one message type can be stored in a batch to improve searching, indexing, and organizing message threads. Frequency supports off-chain, batched, messages as it allows a much higher effective message throughput and reduces costs associated with running a node.

Batched messages allow Providers to publish large quantities of data off-chain at once, reducing the transaction price. There are tradeoffs for how long to wait to post batched messages. Smaller batches reduce latency while larger batches reduce transaction fees. Additionally, batched messages reduce the congestion of data on-chain, which is crucial for a high-message volume ecosystem.

## Message Ordering

Ordering of messages on-chain occurs as received and will have a transaction index in the block. These messages should be ordered by block and transaction index.

> For example, Node A has 5 messages and Node B has 5 messages. If Node A posts all of the extrinsic of their messages to the mempool before B, then Node A's messages will be posted first and show up in the block earlier than B's messages.

Contrary to other blockchains, Frequency does not implement the concept of ‘tips’ to submit messages sooner.

Messages off-chain are encouraged to use optional timestamps. Due to the nature of timestamps, ordering cannot be guaranteed for off-chain messages. Message replies to off-chain messages are recorded in response to the initial message in which case message ordering is canonical.

## Retrieving from the Chain:
Messages may be retrieved from the chain by calling the pointer message location of the IPFS `SchemaId`. IPFS messages retrieved from the chain generally would be fetched for the purpose of getting the IPFS location for a batch file and then retrieving that file for processing. On-chain messages retrieved from the chain may be fetched for immediate processing as the message content is on-chain.

## Paying for Messages

### Capacity
#### Capacity is currently under development — more details will be released soon regarding instructions and implementation details.

Providers would purchase what amounts to a per-epoch (1 or more blocks) “allowance” for messages. Once the capacity is used up, the Provider must wait until the next epoch, when their capacity would refill, before they could resume posting messages.

Learn more about [Capacity](https://docs.frequency.xyz/Basics/Capacity.html) here.

### Tokens
FRQCY Tokens allow users to pay for a transaction based on its “weight," proportional to the amount of chain database storage accessed or changed, as calculated when executing the transaction. This type of payment is already supported.
