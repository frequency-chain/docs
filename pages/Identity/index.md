# Identity Management

Frequency has been designed to serve applications such as social networking that require a discoverable and addressable user identity.
Users reference an identity that can be authenticated via the blockchain when communicating.

Frequency, like most blockchains, represents a blockchain account with a public key from a user's keypair.
Additionally, Frequency introduces the concept of a long-lived identity, separate from the cryptographic credentials used to access that identity at a given point in time.
A Control Key is Frequency's term for a blockchain account that is associated with a user's identity.
The user’s identity, known as a Message Source Account, or MSA, has its own separate identifier, the MSA Id, which is a 64-bit unsigned integer.

Frequency does not dictate what data should be linked to an MSA, leaving this up to the applications and protocols that use it.
However, to facilitate the goal of user communication for social networking applications, Frequency provides a way of ensuring that each identity can have a unique, human-readable identifier referred to as a User Handle.

This section describes these three concepts (Control Keys, Message Source Accounts, and User Handles) in more detail, and illustrates the relationships between them.


{{#button-links}}
