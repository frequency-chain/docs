# What is a Schema?

Frequency is a data-distribution blockchain that uses Schemas define the flow of data across different channels.

Schemas are registered data structures that define the format and how message payloads are stored and how the consumers can parse the message.
This ensures message correctness, validity, extensibility, and interoperability between services.
This allows Frequency to support a variety of message types and enforce communication protocol between network and service participants.

Schemas are immutable; once created, they cannot be changed.
Schema immutability removes evolving data structures and relies on new schemas for updates to simplify upgrades.

## Schema Registry
The `Schema Registry` is the on-chain repository for schemas, allowing participants of the network to flexibly interact with and exchange messages without the challenge of managing unknown schema types.
The unique identification of schemas on Frequency is a `SchemaId` that is set when the schema is created.

## Properties of Schemas
### Models
Schema Models define the format and structure of the data.
Frequency currently supports two model formats for data to differentiate between on-chain and off-chain storage.

* **Parquet Type:**
Frequency recommends Parquet files for off-chain data and is great for batching multiple user messages.
These highly-compressed files are stored by message producers in a decentralized file system such as IPFS, and a pointer to that file is stored on the Frequency blockchain.

* **Avro Type:**
Frequency recommends [Apache Avro](https://avro.apache.org/) when on-chain storage is desired.

Data is always accompanied by a `SchemaId` so payload content can be parsed correctly.

## Payload Location
Payload Location specifies where the data will be stored: on-chain or off-chain.
Off-chain messages offer a lower transaction price and can batch many messages together.
On-chain messages offer increased validation and security, but at a higher price point and does not allow for batching.

* **Off-Chain:** Frequency currently supports [IPFS](../glossary.md#interplanetary-file-system-ipfs) for off-chain data storage.
Only the pointer to the file location is published to Frequency, but any user should have enough information to retrieve and validate the payload contents.

* **On-Chain**: Data is stored in the Frequency database and does not require additional protocol support for retrieval.
