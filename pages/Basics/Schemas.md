# What is a Schema

[Schemas](#schema) are registered data structures that define the format and properties of how messages are stored. Messages are stores and parsed by the consumer of the message.
This ensures message correctness, validity, extensibility, and interoperability between services.

Frequency is a data-distribution blockchain and implements schemas to define the flow of data across different channels.
This allows Frequency to support a variety of message types and enforce communication protocol between network and service participants.

Schemas are immutable.
Once the schema is created it cannot be changed.
Schema immutability prevents an overly complicated necessity to evolve and update schema(s), simplifying the process.

## Schema Registry
The `Schema Registry` provides an on-chain repository for schemas, thereby allowing participants of the network to flexibly interact and exchange messages without the challenge of managing different schema types.
The unique identification of schemas on Frequency is a `SchemaId` that is set when the schema is created.
A `SchemaID` ensures there is only one type of schema that exists for a specific format of data.

## Properties of Schemas
### Models
Schema Models define the format and structure of the data.
Frequency currently supports two model formats for data to differentiate between on-chain and off-chain storage.

* **Parquet Type (Off-Chain):**
Frequency recommends constrained requirements for Parquet files.
These highly compressed files are stored by message producers in a decentralized file system such as IPFS and a pointer to that file is stored on the Frequency blockchain.
Other Parquet formats are permitted, but not recommended, as it may exhibit challenges for end users to read the data and would require notification from Providers.
A read-check validation is currently under development for Parquet files.

* **Avro Type (On-Chain):** Frequency implements [Apache Avro](https://avro.apache.org/) for all on-chain transaction storage.

Data is always accompanied by a schema that allows files to be processed later by any program

## Payload Location
Payload Location specifies where the data will be stored: on-chain or off-chain.
Off-chain messages offer a decentralized encrypted location at a lower transaction price and faster transaction publishing.
On-chain messages offer increased privacy and security at a higher price point and slower transaction publishing.

* **Off-Chain:** [IPFS](#interplanetary-file-system-ipfs) is a preferred, decentralized file system that allowed dApps to create a batch of messages and store them in IPFS an off-chain. Only the pointer to the file location is published to Frequency on-chain storage. Public domain data allows any user to obtain file information.

* [**On-Chain**](#on-chain-message): Utilize a key-value pair (A UniqueID stored against a SchemaID that matches an incoming message) where data is stored in an immutable blockchain database.


Additional information on **How to Create a Schema** will be released soon.
