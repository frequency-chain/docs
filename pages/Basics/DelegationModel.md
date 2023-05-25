# Delegation

![alt text](https://github.com/LibertyDSNP/frequency-docs/blob/editing-session/pages/images/Decentralized%20vs%20Low%20Friction_Cost%20Dichotomy.png)

## The Low Cost/Friction vs. Decentralized Dichotomy
Typical blockchain solutions exhibit a push/pull between those that are transparent and decentralized and those that are low friction (i.e., easy on-ramp and participation for Users) with little to no cost. Low cost and low friction solutions tend to be highly centralized, opaque, and offer little to no user controls. On the other side of the coin, solutions that offer transparency, decentralization, and user control tend to be complicated and require Users to come to the table with both significant domain knowledge and the willingness to acquire a substantial number of tokens.

## The Delegation Model Solution
Frequency manages the User’s need for accessibility via its Delegation Model, which shifts most of the complexity and all the fees of participating in blockchain applications away from End Users to Providers: the creators of third-party applications and services directly interacting with Frequency. Users may choose to engage with tokens if they wish to disintermediate third-party providers or participate in chain governance, but the system does not require it.

![alt text](https://github.com/LibertyDSNP/frequency-docs/blob/editing-session/pages/images/Actor%20Interactions.png)

Frequency has two account types–**Token Accounts** and **Message Source Accounts (MSAs)**. MSAs allow Users to delegate tasks to Providers on their behalf and ensure messages (i.e., lightweight, non-financial transactions) have verifiable chains of authorship, while maintaining the ability to revoke that delegation at any time without cost. 

Users and Providers must have a Message Source Account to send messages on Frequency. A user does not need a Token Account to have an MSA. In this case they are considered “Coinless Users”. Providers may broadcast messages on behalf of their Users.

The relationship between the User and the Provider is not dictated by Frequency. Any entity that holds an MSA and wishes to be a Provider may do so. (They may need to stake some tokens.) Providers may dictate whatever terms with the User they wish. Providers and Coinless Users are very helpful in building use cases that require rapid
and massive scaling to a large audience like social media. Onboarding new Users is very simple as they do not need to buy tokens or participate in governance (although they may do so if they wish). Delegation also serves an important ethical function as it allows access to a wide audience of people from varying socioeconomic levels.


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

