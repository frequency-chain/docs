# What is a Schema?

Frequency is a data-distribution blockchain that uses Schemas to define the flow of data across different channels.

Schemas are registered data structures that define both the format of messages and how message payloads are stored.
Consumers can use the Schema to properly retrieve and parse the message data.
This ensures message correctness, validity, extensibility, and interoperability between services, allowing Frequency to support a variety of message types and enforce communication protocols between network and service participants.

Schemas are immutable; once created, they cannot be changed.
Schema immutability removes evolving data structures and relies on new Schemas for updates in order to simplify upgrades.

## Schema Registry
The `Schema Registry` is the on-chain repository for Schemas, allowing participants of the network to flexibly interact with and exchange messages without the challenge of managing unknown Schema types.
The unique identification of Schemas on Frequency is a `SchemaId` which is set when the Schema is created.

## Properties of Schemas
### Models
Schema Models define the format and structure of the data.
Frequency currently supports two model formats for data to differentiate between on-chain and off-chain storage.

* **Parquet Type:**
Frequency recommends Parquet files for off-chain data (which is great for batching multiple user messages.)
These highly-compressed files are stored by message producers in a decentralized file system such as IPFS, and a pointer to that file is stored on the Frequency blockchain.

* **Avro Type:**
Frequency recommends [Apache Avro](https://avro.apache.org/) when on-chain storage is desired.

Data is always accompanied by a `SchemaId` so payload content can be parsed correctly.

## Payload Location
Payload Location specifies where the data will be stored.
Off-chain messages offer a lower transaction price and can batch many messages together.
On-chain messages offer increased validation and security, but at a higher price point and do not allow for batching.

* **Off-Chain:** Frequency currently supports [IPFS](../glossary.md#interplanetary-file-system-ipfs) for off-chain data storage.
Only the pointer to the file location is published to Frequency, but any user should have enough information to retrieve and validate the payload contents.

* **On-Chain**: Data is stored in the Frequency database and does not require additional protocol support for retrieval.
