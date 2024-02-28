# Schemas

Frequency uses an extensible system of on-chain schemas to define the structure, storage, and semantics of data for protocol related data use cases, such as data defined for supporting DSNP.
For these protocol related data items to be stored on Frequency, they must conform to a publicly discoverable schema.

Applications can use Frequency Schemas to properly retrieve, parse, and interpret protocol related structured data.
This ensures data correctness, validity, extensibility, and interoperability among services, allowing Frequency to support a variety of data types and be used to implement communication protocols like DSNP between network and service participants.

## Schema Registry

The Schema Registry is the on-chain repository for Frequency Schemas, allowing participants of the network to flexibly interact with and exchange protocol related data using Frequency as a source of truth.
The unique identifier of Schemas on Frequency is the Schema Id, which is generated when the Schema is created.

Schemas are immutable; once created, they cannot be changed.
Schema immutability means that Frequency Schema evolution (adding, removing, or changing fields) must be handled at the application level by registering each new version as a new schema on Frequency.

Schemas are used for two distinct types of protocol related data in Frequency:  Messages and Stateful Storage.
Messages are indexed by Schema Id and then block number, allowing applications to construct well ordered sequences to represent channels such as social media feeds.
Messages lend themselves well to off-chain aggregation, providing high scalability at a low storage cost.
Stateful Storage is indexed by MSA and then Schema Id, enabling rapid application access to state associated with a specific account.

Schemas are defined by their Schema Model and Payload Location.
Different combinations of these two attributes are used for different scenarios.

## Schema Models

Schema Models define the format and structure of the Frequency Schema itself, from which applications can determine how to serialize and deserialize data using the Schema.
Frequency supports two model types for data to facilitate a wide variety of data use cases.

- Parquet: The Parquet model type indicates that the schema is defined in Apache Parquet format.
  Parquet is a columnar format and includes options for Bloom filters, allowing files that contain collections of structured data to be queried without retrieving the full file.
  Frequency recommends Parquet files for off-chain data management due to its advantages when batching multiple user Messages.
  These highly-compressed files are stored by Message producers in the decentralized IPFS network, and a pointer to that file (its Content Identifier or CID) is stored on Frequency.
- Avro: The Avro model type indicates that the schema is defined in Apache Avro format.
  Avro is a highly compressed row-based format.
  Frequency recommends Avro over Parquet when the guaranteed availability of on-chain storage is desired, because it is the more space efficient option.
  However, Avro does not provide the ease of use for batching and built-in Bloom filter functionality possible with Parquet.

Data is always accompanied by its Schema Id so that payload content can be parsed correctly.

Data may be compressed or encrypted before final serialization.
Schema creators should register a Frequency Schema that describes both the "outer" (representing the compressed/encrypted data) and "inner" (representing the format after restoring the full plaintext of an item) data formats in these cases to aid in off-chain validation.

## Payload Location

A Frequency Schema's Payload Location specifies how data will be stored.
Off-chain IPFS Messages offer a lower transaction price and can enable applications to batch many Messages together.
On-chain Messages offer increased availability guarantees at a higher price point and with the loss of batching capability.

- IPFS: Frequency currently supports IPFS for off-chain data storage.
  Users store content as a file on the IPFS network.
  Only the file's Content Identifier (CID) and size in bytes is published to Frequency.
  The Frequency Schema contains the necessary information to validate and interpret the payload file's contents after retrieving it from IPFS.
- On Chain: Data is published directly on Frequency and does not require additional protocol support for retrieval.
  The Frequency Schema contains the necessary information to validate and interpret the payload retrieved from the chain.
