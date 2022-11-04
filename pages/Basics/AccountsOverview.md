# Accounts Overview

Frequency has two account types: [Token Accounts](#1-token-account) and [Message Source Accounts](2-message-source-account-msa) (MSAs).

Token Accounts act as a “wallet” and are responsible for holding a balance, transferring tokens, and paying for transactions.

[Message Source Accounts](Basics/MessageSourceAccounts.md) are unique to Frequency and allow users to broadcast messages and delegate to a [Registered MSA account](2-message-source-account-msa), called a [Provider](#provider).

Users must have a Message Source Account to send messages on Frequency.
Token Accounts and MSA's can exist independently of the other.

Visit the Token Accounts and Message Source Accounts pages for specific account information.

## Accounts by Use Case
### Primary Users

* **Coinless Users:** Frequency implements delegation and Capacity economic systems to enable “coinless users” as first-class citizens of Frequency.
Coinless users do not need tokens to interact with the blockchain.
These users have MSA accounts with private keys that maintain control of users' information and identity on-chain.

    While a coinless user might still interact with tokens for other purposes, they are not required to do so and therefore may not want a Token Account.
For more information on Frequency’s economic structure visit the Capacity and Tokenomics pages.

* **Autonomous Users:** The use of both an MSA and a Token Account allow users to pay for and send their own messages without delegation to a Provider.
The user’s Token Account key must be associated with the user’s MSA account in order to pay for message transactions.

    Autonomous users may also engage in staking, governance, building new schemas, or other systems on Frequency.

* **Providers:** Providers must register for both a Token Account and a [Provider MSA Account](#provider-msa) to participate on the Frequency chain.
Providers are the applications and services directly interacting with Frequency.
They use the Capacity economic system to serve the users that delegate to them.
Providers use Token Accounts to hold FRQCY Tokens and Capacity to pay messaging transactions on behalf of their users.
Learn more about how to gain Capacity here.

### Minority Users

* **Token Trader:** While we do not foresee this to be a primary use case, it is possible for users to engage exclusively with a Token Account.
In this case, the user may speculate and trade FRQCY tokens according to the public price.
This user would not require an MSA account to trade.

