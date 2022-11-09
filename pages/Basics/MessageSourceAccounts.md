# Message Source Accounts

Message Source Accounts ([MSAs](#2-message-source-account-msa)) serve as the source of a message on Frequency.
They can have one or more associated public keys and are not required to interact with tokens.

## Account Keys
An MSA can have multiple keys attached to one `MSA ID`.
These keys provide different utilities to the user such as access to different permissions, devices, restrictions, or backup keys.

![](https://user-images.githubusercontent.com/3433442/162544133-9d163fa5-edcc-4cff-b060-9e8f4b3d9147.png)

The `MSA ID` creates a stable identifier that multiple keys link to. The same key cannot be associated with more than one MSA Account.

![](https://user-images.githubusercontent.com/3433442/162544190-cfdfb02a-ea82-4b53-9d2e-188a747a7384.png)

## Delegation

An MSA can [delegate](#delegate-verb-ie-to-delegate), or grant access to Providers to take action on their behalf.
Providers use the Capacity Economic System to serve the users that delegate to them.

### Delegation accomplishes two primary objectives:

1. It allows users to interact with Frequency without in-depth knowledge of blockchain technology.
2. Shifts the responsibility of transaction fees from the individual to the Provider.

Users still maintain ultimate control of their data with the ability to opt-in or out of relationships with Providers.

For more details please visit the Delegation page.

## Overview

To summarize, MSAs allow users to conduct the following:

* Send Messages using FRQCY tokens:
Users submit a transaction from their Token Account to their MSA Account to pay message fees.
* Allows users to delegate permissions to Providers:
	* Providers take on the financial obligations associated with account creation, message sending, and fees associated with account usage.
	* No need to hold tokens.
	* No need to visit an exchange.

* *Future Development:*
Allows permissions for Providers to take action on behalf of the user (Ex. Sign in with Google, link with contacts, etc.)

Visit the Provider, [Token Accounts](Basics/TokenAccounts.md) and Delegation pages for more details specific to these topics.

