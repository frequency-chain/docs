
# Stateful Storage

Stateful Storage on Frequency is designed to allow for storage of stateful data with flexible schemas on chain.  Stateful Storage allows for high read and write throughput and is useful for cases where transactional history is less important than the current state of the transaction. While in many use cases (such as DSNP over Frequency) state transitions may be modeled via [Announcements](https://unfinished.com/wp-content/uploads/dsnp_whitepaper.pdf), in some situations, Frequency is only interested in the latest state.  Stateful storage can be used by:
* An MSA "owner" directly
* An MSA's delegate (Provider)
* Anyone submitting a previously-signed payload given to them by the MSA owner

## Benefits of Stateful Storage
* Highly available and consistent and decentralized data storage
* `MSA` based data isolation
* Data format flexibility using different schemas
* Providing a protocol and usage-agnostic, consensus-critical storage

## Modes of Stateful Storage
Stateful Storage expands the definition of schemas, and adds two additional payload locations: Itemized and Paginated. Itemized Stateful Storage is limited to a single page and is most useful when there payloads are comprised of many small items.  Paginated Stateful Storage is organized in pages and is most useful for payloads with larger items and a limited number of pages.  Both forms of storage are data agnostic in that Frequency does not check the data against the schema model.  The client or application is expected to manage the data within each page or within the itemized model.  Stateful Storage refers to two different types of Schema Settings: Append Only and Signature Required. The Append Only setting (applicable exclusively to Schemas utilizing Itemized Stateful Storage) ultimately restricts the Schema to allow User to add items but not delete them.  Append-only extrinsics may be called directly by the owner. The Signature Required setting may be applied both to schemas utilizing Itemized or Paginated Stateful Storage and allows Users to both add and delete items. However the Signature Required setting ultimately requires that the extrinsics be called with a signed payload as opposed to being called directly by the owner.

![](https://user-images.githubusercontent.com/9152501/213291600-98229ee4-6358-4e0e-abe2-d6da9abe179e.png)

## Content Hash and Avoiding Race Conditions
The content hash is a hash of the content and a nonce calculated when the page is stored.    When submitting updates to the chain, Frequency must provide the previous content hash.  If the content hash in the request does not match the current content hash on chain, the system will reject the message as "stale".  Thus clients or apps must ensure that they have the latest state when submitting modifications to the chain. This is used to avoid race conditions and out-of-order state manipulations.

## Stateful Storage Expiration
Signed payloads require an Expiration Block Number.  When a User creates a signed payload, they first query the chain for the latest block number and then select a future block number (e.g. via an offset) which will serve as the Expiration Block Number of the payload.  When the Expiration Block Number has been surpassed, the payload in question will no longer be available.  Frequency employs a "mortality window" feature which ensures payload Expiration Block Numbers are not set too far in the future.  If a User attempts to sign a payload with a Payload Expiration Block outside the mortality window, the signature request is rejected.

## Notes
Frequency does not currently support record modification.  If record modifications are required, the User will essentially delete the old record and then submit a new updated record.

Page Ids are non sequential.  Users may create any Page Id up to the largest allowable and there may be holes in incrementation within the Page Id range.

Previously signed payloads are useful when a User does not want to assign delegation of their entire account to a particular provider, but rather create an action, sign the payload and assign that specific action to anyone with sufficient funds (Capacity) to submit it on their behalf.

