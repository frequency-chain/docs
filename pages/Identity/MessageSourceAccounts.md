# Message Source Accounts

Message Source Accounts (MSAs) are unique to Frequency and provide enhanced capabilities distinct from other account systems while still ensuring that data has verifiable authorship.

Users must have a MSA to send Messages and utilize Stateful Storage on Frequency.
A user does not need a blockchain account with tokens to be able to have an MSA; while MSA accounts have a cost to create, they require no existential deposit to be maintained on-chain.
In addition, MSAs enable users to broadcast Messages through delegation to a Provider without needing tokens.

MSAs represent what most users of internet applications like social networking would think of as their account.
While the cryptographic keys, called Control Keys, might change over time, the account itself, and the data it has generated, remain available.

An MSA's identifier, or MSA Id, is simply a unique number permanently assigned to the MSA at creation time.

MSAs can be retired by the user with a valid Control Key.
Once an MSA is retired, its corresponding Id can never be reused or referenced in chain transactions that require an unretired MSA.
This ensures that no confusion over the source of a Message will occur (as may occur in systems like the telephone network, when phone numbers are reassigned).
