# Providers

Providers are the applications and services directly interacting with Frequency.  Message Source Accounts delegate to Providers who may then send and receive messages on the MSA holder's behalf via the respective uses of grants and permissions.

## Who can become a Provider?
The basic workflow for provider registration is as follows:

- Any [Message Source Account (MSA)](./MessageSourceAccounts.md) can register to be a Provider.
- The Provider must pay token transaction fees to become a provider.
- An additional "Registration Fee" may later be required.

## Provider Attributes

- UTF-8 Name (non-unique).

## How are Providers identified?

Providers are

## Provider Verification
#### Provider Verification details are currently under development and additional details will be released soon.

As of now, there is no verification of Providers or Provider attributes.
Users wanting to delegate to a Provider should be told which Provider to use via a trusted source such as a given Provider's secure website.

## Provider De-registration

Neither the Provider nor the original MSA can be retired once registered.

## Provider Account Operational Information

### Extrinsics
#### create_provider(origin, provider_name)

This extrinsic is responsible for storing the registered provider in the
`ProviderToRegistryEntry`.

#### Events
* `ProviderCreated`
  * `provider_id`: `ProviderId`

#### Storage
* `ProviderToRegistryEntry`
  * Stores registered providers and provides lookup functionality via `ProviderId`.
    Existence in this storage structure is record that an MSA transitioned to Provider status.

