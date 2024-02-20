# Stateful Storage

Stateful Storage on Frequency is designed to allow users to store data with well-defined Frequency Schemas as part of chain state.
Stateful Storage is useful for cases where the convenient discovery and retrieval of  the current state of a data item should be retrievable by MSA account id, vs the block the transaction occurred in.

Stateful Storage is organized around the concept of fixed-size pages (approximately one kilobyte each) of user-controlled data, which enables Stateful Storage transactions to efficiently interact with the on-chain data store.
Stateful Storage expands the definition of Frequency Schemas by adding two additional Payload Locations: Itemized and Paginated.
Both forms of storage are data-agnostic, allowing for a full range of data types to be represented.
The client application is expected to manage the data within each page or within the itemized model, in conformance with the specified Frequency Schema.


## Itemized and Paginated Data

Itemized Stateful Storage allows for an ordered list of data items that is limited in aggregate size to a single page.
This is most useful when payloads are composed of many small items that need to be individually addressed and managed.
Itemized Stateful Storage Schemas can optionally indicate that users should only be allowed to add new items, and not delete or replace existing ones, via an Append Only setting.

Paginated Stateful Storage is organized as a sequence of pages and is most useful for payloads with larger items or a cardinality of items that would, in aggregate, exceed the capacity of a single page.
Users must designate a Page Id when publishing paginated data.
 Page Ids are allowed to be non-sequential.
Users may create any Page Id up to the largest allowable and there may be gaps within the Page Id range, enabling applications to adopt Frequency Schema-specific strategies to minimize the number of writes required to maintain the data for a given Schema.

Stateful Storage items or pages, depending on the type, can be inserted, updated, or deleted, unless the Append Only option is specified by the Frequency Schema.

The Signature Required setting may be applied to Frequency Schemas utilizing either type of Stateful Storage and requires that the payload be signed by the owner as well as the transaction's submitter.
 This means that even though a Provider may submit the transaction, it must be signed directly by a Control Key of the MSA owner.

This setting is useful for protocols to indicate data types where a user should retain direct control of data.
For example, when publishing credentials or identifiers to be used off chain, it may be important to know that the user themself, rather than their Provider, has authorized the data.
Users can create an action, sign the payload, and either request that a willing Provider with sufficient funds (token or Capacity) submit it on their behalf, or submit the transaction and pay the relevant transaction fees themself.

## Avoiding Race Conditions

Each page of data in Stateful Storage includes a hash generated from the content and a nonce calculated when the page is stored.
When submitting updates to the chain, the payload must include the previous hash.
If the hash in the request does not match the current content hash on chain, the system will reject the Message as "stale".
Thus, clients or apps must ensure that they have the latest state when submitting modifications to the chain.
This is used to avoid race conditions and out-of-order state manipulations that may occur, for example when multiple client applications are submitting changes against cached data.
