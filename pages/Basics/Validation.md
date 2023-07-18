# Validation

Typically Providers will batch messages together to streamline operations and save money. However, an individual MSA with a Token Account may choose to send a message on-chain on their own behalf.  

## Batched vs Non-batched Messages
Batched Messages (sent by Providers) are off chain and MUST be validated at read time.
Non-batched Messages (sent by MSAs) are on chain, are validated at write time, and do not need to be re-validated at read time.

## On-chain Messages

An MSA with a Token Account may choose to send a message directly on chain.  Creation of an on-chain Frequency Message requires that the Message be validated before adding to the chain.
Thus, any Message read from a trusted node, can be trusted to have been made by the MSA or a delegate of the MSA at the time the Frequency Message was sent.


## Batch Publication Frequency Message Validation

The [Frequency Message](https://libertydsnp.github.io/frequency/common_primitives/messages/struct.MessageResponse.html) for a Batch Publication has several important fields for validation:

| Field | Description |
| ----- | ----------- |
| `provider_msa_id` | MSA Id of the provider sending the message |
| `cid` | The [Content IDentifier v1](https://github.com/multiformats/cid/) for IPFS content |
| `payload_length` | Expected length of the content from IPFS |
| `block_number` | Block number that the message was recorded on the chain. |

### File Validation

1. Retrieve the file from the IPFS network using the `cid`.
1. Verify the file hash by [comparing it to the hash included in the `cid`](https://docs.ipfs.tech/concepts/hashing/). (Required for non-trusted IPFS nodes.)
1. Verify that the byte length of the retrieved file matches the `payload_length`.

### Publication Message Validation

1. Collect the unique set of `fromId` values.
1. Use the [Custom RPC `msa_checkDelegations`](https://libertydsnp.github.io/frequency/pallet_msa_rpc/trait.MsaApiClient.html#method.check_delegations) with the `fromId` values as the `delegator_msa_ids` and the `provider_msa_id` at the `block_number`.
1. The `fromId` values that `msa_checkDelegations` verifies as having a delegation at `block_number` are valid Announcements.

## Message Duplicates

Duplicate Messages MUST be rejected or ignored.

