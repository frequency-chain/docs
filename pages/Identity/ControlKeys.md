# Control Keys

Control Keys are cryptographic keys that are used to assert control of a user's identity.
While an MSA can have multiple Control Keys, a particular Control Key cannot be associated with more than one MSA.

When creating an MSA, the user must submit a signature proving knowledge of the private key for the associated Control Key.
The MSA is linked to the Control Key that was used to verify this signature.
Subsequently, users can add and remove Control Keys as needed, provided that at least one Control Key remains linked to the MSA at any one point in time.
Users might want different keys signifying access from different devices or wallets, or backup keys used only when needed for account recovery.
Users can also delete Control Keys (unlink them from their MSA) if they are no longer needed or become compromised in some way.
Currently all Control Keys associated with an MSA have the same set of rights and permissions.
