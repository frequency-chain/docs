# Delegation

Delegation shifts transaction costs of the chain away from the end user and toward a third party (namely Providers.)

An MSA can delegate, or grant access to Providers to take action on their behalf.

## Use Cases for Delegation
Through delegation to a Provider, users have the ability to complete the following actions:

* Account Creation
* Processing of Messages
* Message and Data Storage

Users still maintain ultimate control of their data with the ability to opt in, or out of relationships with Providers.

## Properties of Delegation on Frequency

* **Authorized** - a delegation is authorized with specific permissions by the delegating MSA and the Provider.
* **Transparent** - delegations are readable by anyone, in order to maximize opportunities to police Provider actions.
* **Revocable** - a Delegator can withdraw permissions completely from the Provider without cost.

## Permissions
Permissions establish a separation of control between Delegator (User) - Provider relationships.

* **Providers:** Request a Delegation and Permissions to publish data for one or more specific Schemas on-behalf of a Delegator.
* **Delegator:** Restrict a Provider, by granting a Provider permission to publish data only for the specific Schemas they select on-behalf of the Delegator.

## Revocation

Either the Delegator or the Provider may revoke permissions at any time without cost.

## Definitions

* **delegator_msa:** The MSA of a delegator/user.
* **provider_msa:** The MSA of the provider/app.
* **Permission:** The generic option for any user.
Default mode of operation is ***Restricted*** for any provider.
* **Grant:** The user level action/result.
"A user grants a permission to a provider".
* **revoked_at:** The expiry block number of a permission/grant.
* **schema_id:** The unique identifier of a registered Schema on Frequency

