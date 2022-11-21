# Accounts Overview

Frequency has two account types: Token Accounts and Message Source Accounts (MSAs).

[Token Accounts](./TokenAccounts.md) are responsible for holding a balance, transferring tokens, and paying for transactions.
These accounts are the same as on the [Polkadot chain](https://wiki.polkadot.network/docs/learn-accounts).

[Message Source Accounts](./MessageSourceAccounts.md) are unique to Frequency and allow users to broadcast messages and delegate to [Provider MSA accounts](#provider), that can send messages on behalf of a user who has delegated to them.

Users must have a Message Source Account to send messages on Frequency.
A user does not need a Token Account to be able to have an MSA.

A [wallet](https://wiki.polkadot.network/docs/glossary#wallet) is a program that allows users to store private keys and sign transactions for blockchain networks.
Both Token Accounts and the private keys that control an MSA are stored in such a wallet to secure user data.

See [Polkadot's Wiki](https://wiki.polkadot.network/docs/build-wallets) for wallets that support token accounts.

Visit the [Token Accounts](./TokenAccounts.md) and [Message Source Accounts](./MessageSourceAccounts.md) pages for specific account information.

## Who would need an MSA and/or Token Account?

| User Type                      | MSA Required? | Token Account Required? |
|--------------------------------|:-------------:|:-----------------------:|
| [Coinless](#coinless-users)    |    **Yes**    |            No           |
| [Autonomous](#autonomous-users)|    **Yes**    |         **Yes**         |
| [Providers](#providers)        |    **Yes**    |         **Yes**         |
| [Token traders](#token-trader) |       No      |         **Yes**         |

### Coinless Users
Frequency implements delegation and Capacity economic systems to enable “coinless users” as first-class citizens of Frequency.
Coinless users do not need tokens to interact with the blockchain.
These users have MSA accounts with private keys that maintain control of their user information and identity on-chain.
While a coinless user might still interact with tokens for other purposes, they are not required to do so and therefore may not want a Token Account.
For more information on Frequency’s economic structure visit the [Capacity](../Tokenomics/Capacity.md) and [Tokenomics](../Tokenomics/TokenomicsOverview.md) pages.

* MSA Required: Yes
* Token Account Required: No

### Autonomous Users
The use of both an MSA and a Token Account allow users to pay for and send their own messages without delegation to a Provider.
The user’s Token Account key must be associated with the user’s MSA account in order to pay for message transactions.
Autonomous users may also engage in staking, governance, building new schemas, or other systems on Frequency.

* MSA Required: Yes
* Token Account Required: Yes

### Providers
Providers must register for both a Token Account and a [Provider MSA Account](#provider-msa) to participate on the Frequency chain.
Providers are the applications and services directly interacting with Frequency.
They use the Capacity economic system to serve the users that delegate to them.
Providers use Token Accounts to hold FRQCY Tokens and Capacity to pay messaging transactions on behalf of their users.

* MSA Required: Yes
* Token Account Required: Yes

### Token Trader
While not a primary use case, it is possible for users to engage exclusively with a Token Account.
In this case, the user may speculate and trade FRQCY tokens according to the public price.
These users would not require an MSA account to trade.

* MSA Required: No
* Token Account Required: Yes
