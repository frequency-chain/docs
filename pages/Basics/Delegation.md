# Delegation

Delegation shifts the cost of committing data to the chain away from the End User, instead towards third party, Providers.

An MSA can delegate, or grant access to Providers to take action on their behalf.

## Use Cases for Delegation
Through delegation to a Provider, users have the ability to complete the following actions:

* Account Creation
* Processing of Messages
* Message and Data Storage

Users still maintain ultimate control of their data with the ability to opt-in, or out of relationships with Providers.

#### It's expected that the actions and permissions that are implemented for delegation will evolve as needed.

## Properties of Delegation
Delegation must allow specific operations to give other MSAs proper authority over their Delegates.

* **Authorizable** - delegations can be authorized with specific permissions by MSAs.
* **Verifiable** - there is a way to check that Providers are doing things only when authorized and only what they are authorized to do.
* **Transparent** - delegations can be readable by anyone, in order to maximize opportunities to police Provider actions.
* **Changeable** - a User can change Provider permissions to give MSAs control over what tasks are permitted to the Provider.
* **Revocable** - a Delegator can withdraw permissions completely from the Provider.

## Permissions and Grants
Permissions and grants establish a separation of control between Delegator  (User) - Provider relationships.

Users can enable specific permissions for a Provider to write data on their behalf, while also restricting grants to Providers at schema level, rendering Providers as restricted.

* **Providers:** Publish data for specific `schema_id` on-behalf of a Delegator.
Defaults to `publish` permissions on all schemas registered by Provider on behalf of Delegator.
* **Delegator:** Restrict a Provider, by allowing a Provider to only publish data for specific `schema_ids` on-behalf of the Delegator.

### Permisions

Permission is a generic option for any User.
The following options are available under existing implementation:

* **RESTRICTED**: User grants a Provider to publish data on their behalf for specific schema(s) only.
This is the default state of a Provider on Frequency, where a Provider has to explicitly provide a list of schema(s) for which they are allowed to publish data on behalf of the User.

### Grants

Grants enable delegators as well as providers to restrict one another from publishing data on specific schema(s).
The following options are available under existing implementation:

* **PUBLISH:** A Delegator grants a Provider to publish data on their behalf for specific schema(s) only.
This is the default state of a Provider on Frequency, where a Provider has to explicitly provide a list of schema(s) for which they are allowed to publish data on behalf of the Delegator.
This also enables a Delegator to opt in to publish their data.

## API (Extrinsic)
* **delegator_msa:** The MSA of a delegator/user.
* **provider_msa:** The MSA of the provider/app.
* **Permission:** The generic option for any user.
Default mode of operation is ***Restricted*** for any provider.
* **Grant:** The user level action/result.
"A user grants a permission to a provider".
* **ToS:** The hash of terms of service between a delegator and provider.
* **expiry:** The expiry time of a permission/grant.
* **schema_id:** The unique identifier of a registered schema on Frequency

