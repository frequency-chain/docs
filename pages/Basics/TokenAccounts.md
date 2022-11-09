# Token Accounts

Token Accounts act as “wallets” and are accounts that hold FRQCY tokens and [Capacity](#capacity).
These are the same as accounts used across other parachains.
Anyone can create a Token Account but they are only active if storing tokens.
This account is responsible for holding a balance, transferring tokens to other accounts, and pay certain transactions.

Token Accounts are identified by the public key, `Account ID`, from a pair and are secured by storing the private part of the key pair in a wallet.
The `Account ID` serves as the account identifier for token accounts.
This is standard across Polkadot and Substrate and synonymous with the users public key.

The `Account ID` both identifies the Token Account and represents the public key used to link a user’s Token Account with their MSA.
Token Accounts send funds to an MSA to pay transaction fees to send messages.
Users must acquire tokens via an exchange or transfer tokens into an account address.

## [Capacity](Basics/Capacity.md)

#### Capacity is currently under development - more details will be released soon regarding instructions and implementation details.

[Capacity](#capacity) is a value transaction that allows for the ability to send messages or do a consistent amount of work on the chain that continues over time.
It is a non-transferable resource that acts as an alternative to using FRQCY tokens to perform certain transactions and is managed through a rate-limited continuous stream of transactions.

Users must have a Token Account to engage with FRQCY tokens and Capacity.
Capacity transactions can interact with only two things: account management and sending messages.
Other transactions use token fees alone.

Visit the [Capacity](Basics/Capacity.md) and [Gaining Capacity](Basics/GainingCapacity.md) pages for more detailed information.

## Overview
To summarize, Token Accounts support the following actions:

* The primary use of Token Accounts are necessary for users or Providers to pay for transactions.
* Could be used for trading exclusively as a token account.
* Can be used by users who want to delegate and revoke access to Providers and operate independently.


