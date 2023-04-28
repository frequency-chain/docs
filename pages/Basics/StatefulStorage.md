
# Stateful Storage

The Stateful Storage pallet on Frequency is a storage mechanism designed for situations where transactional history is less important than the current state of the transaction. While in many use cases (such as DSNP over Frequency) state transitions may be modeled via [Announcments](https://unfinished.com/wp-content/uploads/dsnp_whitepaper.pdf) in some situations, Frequency is only interested in the latest state.  In these situations Stateful Storage allows storage of stateful data with flexible schemas on chain. 

## Types of Stateful Storage
Stateful Storage expands the definition of a Schema, adding two additional payload locations: Itemized and Paginated. Itemized Stateful Storage is limited to a single page and is most useful when there are many small items.  Paginated Stateful Storage is organized in pages and is most useful for larger items (although the number of pages is restricted).  Both forms of storage are data agnostic in that Frequency does not check the data against the schema model.  The client or application is expected to manage the data within each page or within the itemized model.  Stateful Storage refers to two different types of Schema Settings: Append Only and Signature Required. The Append Only setting is applicable exclusively to Schemas utilizing Itemized Stateful Storage which ultimately restricts the Schema to allow adding items but not removing them.  Append only extrinsics may be called directly by the owner. The Signature Required setting may apply both to Schemas utilizing Itemized or Paginated Stateful Storage but ultimately require that the extrinsics be called with a signed payload as opposed to being called directly by the owner.

## Content Hash and Avoiding Race Conditions
The content hash is a hash of the content and a nonce calculated when the page is stored.    When submitting updates to the chain, Frequency must provide the previous content hash.  If the content hash in the request does not match the current content hash on chain, the system will reject the message as "stale".  Thus clients or apps must ensure that they have the latest state when submitting modifications to the chain. This is used to avoid race conditions and out of order state manipulations.

## Stateful Storage Expiration
Signed payloads require an Expiration Block Number.  When a User creates a signed payload, they first query the chain for the latest block number and then select a future block number (e.g. via an offset) which will serve as the Expiration Block Number of the payload.  When the Expiration Block Number has been surpassed, the payload in question will no longer be available.  Frequency employs a "mortality window" feature which ensures payload Expiration Block Numbers are not set too far in the future.  If a User attempts to sign a payload with a Payload Expiration Block outside the mortality window, the signature request is rejected.

## Notes
Frequency does not currently support record modification.  If record modifications are required, the User will essentially delete the old record and then submit a new updated record.

Page Ids are non sequential.  Users may create any Page Id up to the largest allowable and there may be holes in incrementation within the Page Id range.

Previously signed payloads are useful when a User does not want to assign delegation of their entire account to a particular provider, but rather create an action, sign the payload and assign that specific action to anyone with sufficient funds (Capacity) to submit it on their behalf.

