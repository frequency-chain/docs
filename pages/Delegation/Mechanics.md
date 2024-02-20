# Delegation Mechanics

A delegation authorizes a Provider to manage specific data on behalf of a delegating user.
The user must sign a transaction approving all details of the delegation.
The Provider must then submit that approval to the chain to establish the link between the user's MSA and the Provider.
The terms of the relationship between users and Providers are not dictated by Frequency, but Provider terms should be specified in the approval request at the time of Provider approval.
There is currently no way for these terms to be updated by a Provider.
By requiring both parties to sign the transaction, delegation can only occur by mutual consent.

Delegation permissions establish the set of Schema Ids (data and relationship types) for which Providers may publish data on behalf of the delegating user.

All delegations are public and readable by anyone.
This ensures accountability, as any interested party can observe Provider actions.

Delegations are unilaterally revocable; either the delegating user or the Provider may terminate a delegation at any time.
Again, the terms of the relationship are not dictated by Frequency.
Delegation removals are also public, so parties not acting in good faith or honoring their terms can be identified and managed at the application level.
