# [Schemas](#schema)
## What is a schema:

[Schemas](#schema) are registered data structures that define the format and properties of how messages are stored. 
This ensures message correctness, validity, extensibility, and interoperability between services. 

Frequency is a data-passing blockchain and implements schemas to define the flow of data across different channels. 
This allows Frequency to support a variety of message types and enforce communication protocol between network and service participants.

Schemas are immutable. 
Once the schema is created it cannot be changed. 
Schema immutability prevents overly complicated implementation and evolution, simplifying the process. 
 
## Schema Registry: 
The `Schema Registry` provides an on-chain repository for schemas, thereby allowing participants of the network to flexibly interact and exchange messages without the challenge of managing different schema types. 
Frequency enforces the unique identification of schemas using `SchemaIds`. 
A `SchemaId` ensures there is only one type of schema that exists for a specific format of data. 

## Properties of Schemas:
### [Models](#on-chain-message): 
Schema Models define the format and structure of the data. 
Frequency currently supports two model formats for data to differentiate between on-chain and off-chain storage. 

* **Parquet Type (Off-Chain):** 
Frequency recommends constrained requirements for Parquet files. 
These highly compressed files are stored using the same `SchemaId` in IPFS, that batch location is posted on-chain. 
Other Parquet formats are permitted, but not recommended, as it may exhibit challenges for end users to read the data and would require notification from Providers. 
A read-check validation is currently under development for Parquet files.

* **JSON Arvo Type (On-Chain):** Frequency implements Apache Avro for all on-chain transaction storage. 
* Data is always accompanied by a schema that allows files to be processed later by any program

## [Payload Location:](#payload) 
Payload Location specifies where the data will be stored: on-chain or off-chain. 
Off-chain messages offer a decentralized encrypted location at a lower transaction price and faster transaction publishing. 
On-chain messages offer increased privacy and security at a higher price point and slower transaction publishing. 

* **Off-Chain:** [IPFS](#interplanetary-file-system-ipfs) is a standardized, decentralized file system that allowed dApps to create a batch of messages and store them in IPFS an off-chain. Only the location of the file is published to Frequency on-chain. Public domain data allows any user to obtain file information.

* [**On-Chain**](#on-chain-message): Utilize a key-value pair (A UniqueID stored against a SchemaId that matches an incoming message) where data is stored on the blockchain nodes. 
	* Existing Development: On-Chain messages only include graph changes and 

	* Future Development: On-Chain messages will be private between specific users (private messages, groups, followers), allowing only certain users to access messages with a specific key pair.

Additional information on **how to create a schema** will be released soon.
