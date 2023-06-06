# Message Source Accounts

Message Source Accounts (MSAs) serve as the source of messages on Frequency.
They can have one or more associated public keys and are not required to interact with tokens (via delegation).

## Account Keys
An MSA can have multiple keys attached to one `MSA ID`.
These keys provide different utilities to the user such as access to different permissions, devices, restrictions, or backup keys.

The `MSA ID` creates a stable identifier that is controlled by multiple keys.
The same key cannot be associated with more than one MSA Account.

## Delegation

An MSA can delegate, or grant access to [Providers](./Providers.md) to take action on their behalf.
Providers use Capacity to serve the Users that delegate to them.

### Delegation accomplishes two primary objectives

1. It allows users to interact with Frequency without in-depth knowledge of blockchain technology.
2. It shifts the responsibility of transaction fees from the individual to the Provider.

Users still maintain ultimate control of their data with the ability to opt-in or out of relationships with Providers.

Learn more about [Delegation](./Delegation.md).
