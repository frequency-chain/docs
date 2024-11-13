{{#title-image .01 pages/images/icons/lock.svg "Become a Provider"}}

# Become a Provider

## What is a Provider?

In the Frequency ecosystem, a **Provider** is an entity (often an application or service) that interacts directly with the Frequency blockchain on behalf of users.
Providers handle transactions, manage user delegations, and facilitate various operations within the network.

{{#svg-embed pages/images/Become_Provider.svg Become a Provider}}

### From a developer's perspective, Providers

- **Create and Update User Content with Permission:** Providers publish new content or modify existing content on behalf of users, such as posts, comments, and other social interactions, after obtaining the user's consent.
- **Maintain the User's Social Graph:** Providers manage and update users' social connections, such as following or unfollowing other users, and maintaining friend lists, ensuring that the user's relationships are accurately represented on the blockchain.
- **Store User Content and Write Links to It on Frequency:** Providers either store user-generated content files (e.g., media files, documents) or links to off-chain storage of these content files on the Frequency blockchain, enabling decentralized access and verification.
- **Simplify User Participation:** By handling transaction complexities and fees, Providers make blockchain applications more accessible to end-users who may not possess sufficient technical knowledge or hold tokens.
- **Manage Delegated Tasks:** Users delegate specific permissions to Providers, allowing them to perform only those specified actions on the user's behalf in a secure and transparent manner.
- **Enhance User Experience:** Providers may offer intuitive user interfaces and seamless interactions, so users don't need to experience or understand the underlying blockchain mechanics.

## How to Become a Provider

Before you become a provider on Testnet, you will need to make sure you have a wallet and Testnet Token.
To set up your digital wallet and obtain testnet tokens go to [https://faucet.testnet.frequency.xyz/](https://faucet.testnet.frequency.xyz/) and follow these directions for setting a wallet and getting tokens.

## Step 1: Generate Your Keys

There are various wallets that can generate and secure Frequency compatible keys, including:

- [Polkadot Extension](https://polkadot.js.org/extension/)
- [Talisman](https://www.talisman.xyz)
- [See more](https://polkadot.com/get-started/wallets)

This onboarding process will guide you through the creation of an account and the creation of a Provider Control Key which will be required for many different transactions.

## Step 2: Acquire Testnet Tokens

Taking the account generated in Step 1, visit the Frequency Testnet Faucet [Testnet Faucet](https://faucet.testnet.frequency.xyz/), and follow the prompts to get tokens.

## Step 3: Create a Testnet Provider

- Visit the [Provider Dashboard](https://provider.frequency.xyz/) to set up your official Provider account on the Frequency Testnet.
- On the Provider Dashboard, you will be asked to select which network you would like to join from the dropdown. You may select among the available networks: Mainnet, Testnet on Paseo, Localhost, or Custom. Select Testnet on Paseo.
- Select your account ID from the dropdown. (This is the Application Account you created in Step 1.)
- Select Create an MSA and approve the transaction popups.
- Enter a Provider name. You should enter the name you wish register under as a Provider (typically a company or application name).

NOTE: Once registered, your provider status remains permanent in order to maintain transaction verification integrity.

## Step 4: Gain Capacity

[Capacity](../Tokenomics/ProviderIncentives.md#capacity-model) is the ability to perform some transactions without token cost.
All interactions with the chain that an application does on behalf of a user can be done with Capacity.

Login to the [Provider Dashboard](https://provider.frequency.xyz/), select Stake to Provider, and stake 100 XRQCY Tokens.
This will give you enough Capacity for testing.

## Step 5: Done

You are now registered as a Provider on Testnet and have Capacity to do things like support users with [Single Sign On](./SSO.md).
You can also use the [Provider Dashboard](https://provider.frequency.xyz/) to add additional Control Keys for safety.

Ready to move to production? [Become a Provider on Mainnet](https://projectlibertylabs.github.io/gateway/GettingStarted/BecomeProvider.html#mainnet).

**[Become a Provider Today](https://provider.frequency.xyz/)**
