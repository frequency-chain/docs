# Keeping Your Accounts Safe

**Remember: keeping your account safe is a responsibility that goes beyond the scope of this document.**
**While this document provides basic concepts, security is constantly in flux, and these may not represent the latest best practices.**

## Public Keys and Rotation

Frequency’s [Message Source Account (MSA)](./MessageSourceAccounts.md) allows users to separate and rotate public keys that control the account.
The ability to attach multiple keys to an account offers increased security for users to rotate a corrupted key for a new one if compromised.
While having an on-chain identifier with connected public keys increases chain storage requirements, it also greatly reduces the risk of corruption and can include additional validity checks.

Currently all keys attached to an MSA carry the same level of access, functioning as a "master key", and can be rotated to replace compromised keys.
The ability to add additional keys behaves like a backup, allowing users to maintain and protect their accounts.

Keys are unique.
Once assigned to an MSA, a key cannot be associated with another MSA.
Key pair validation protects the user identifier associated with an MSA.
Frequency expects third-party developers and applications built on Frequency to manage the issue of fraudulent identities within their applications and protocols.

## Account Recovery

At this time, account recovery is not possible for either MSAs or Token Accounts.
The roadmap includes research for offering options for MSA recovery in the future.

See the [Token Account](./TokenAccounts.md) and [Message Source Account](./MessageSourceAccounts.md) pages for account information.

## Resources

- [Polkadot support article](https://support.polkadot.network/support/solutions/articles/65000181874-how-to-store-your-mnemonic-phrase-and-backup-file-safely) with more information about key security.
- [General information](https://wiki.polkadot.network/docs/learn-account-generation) about the Polkadot account generation and security.
