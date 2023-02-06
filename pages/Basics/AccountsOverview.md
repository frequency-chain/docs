# Accounts Overview

Frequency has two account types: **Token Accounts** and **Message Source Accounts** (MSAs).

[Token Accounts](./TokenAccounts.md) are responsible for holding a balance, transferring tokens, and paying for transactions.
These accounts are the same as on the [Polkadot chain](https://wiki.polkadot.network/docs/learn-accounts).

[Message Source Accounts](./MessageSourceAccounts.md) are unique to Frequency and ensure messages have verifiable authorship.
[Provider MSA accounts](./Providers.md) enable users to broadcast messages through delegation without needing tokens.

Users must have a Message Source Account to send messages on Frequency.
A user does *not* need a Token Account to be able to have an MSA.

[Wallets](./Wallets.md) store private keys for both Token Accounts and Message Source Accounts.
Visit the [Token Accounts](./TokenAccounts.md) and [Message Source Accounts](./MessageSourceAccounts.md) pages for specific account information.

## Who would need an MSA and/or Token Account?

| User Type                      | MSA Required? | Token Account Required? |
|--------------------------------|:-------------:|:-----------------------:|
| [Coinless](#coinless-users)    |    YES    |            no           |
| [Autonomous](#autonomous-users)|    YES    |         YES        |
| [Providers](#providers)        |    YES    |         YES         |
| [Token traders](#token-trader) |       no      |        YES         |

### Coinless Users
Frequency implements delegation and Capacity economic systems to enable "coinless users" as first-class citizens of Frequency.
Coinless users do not need tokens to interact with the blockchain.
These users have MSA accounts with private keys that maintain control of their user information and identity on chain.
While a coinless user might still interact with tokens for other purposes, they are not required to do so and therefore may not want a Token Account.
For more information on Frequency’s economic structure visit the [Capacity](../Tokenomics/Capacity.md) and [Tokenomics](../Tokenomics/TokenomicsOverview.md) pages.

* MSA Required: YES
* Token Account Required: no

### Autonomous Users
The use of both an MSA and a Token Account allow users to pay for and send their own messages without delegation to a Provider.
The user’s Token Account key must be associated with the user’s MSA account in order to pay for message transactions.
Autonomous users may also engage in staking, governance, building new Schemas, or other systems on Frequency.

* MSA Required: YES
* Token Account Required: YES

### Providers
[Providers](./Providers.md) must register for both a Token Account and an MSA Account to participate on the Frequency chain.
Providers are the applications and services directly interacting with Frequency.
They use the Capacity economic system to serve the users that delegate to them.
Providers use Token Accounts to hold FRQCY Tokens and Capacity to pay messaging transactions on behalf of their users.

* MSA Required: YES
* Token Account Required: YES

### Token Trader
While not a primary use case, it is possible for users to engage exclusively with a Token Account.
In this case, the user may speculate and trade FRQCY tokens according to the public price.
These users would not require an MSA account to trade.

* MSA Required: no
* Token Account Required: YES
