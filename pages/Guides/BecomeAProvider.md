{{#title-image .01 pages/images/icons/lock.svg "Become a Provider"}}

# Become a Provider

## What is a Provider?

In the Frequency ecosystem, a **Provider** is an entity (often an application or service) that interacts directly with the Frequency blockchain on behalf of users.
Providers handle transactions, manage user delegations, and facilitate various operations within the Frequency Ecosystem.

{{#svg-embed pages/images/Become_Provider.svg Become a Provider}}

### From a Developer's Perspective, Providers

- **Manage Delegated Tasks:** Users delegate specific permissions to Providers, allowing them to perform only those specified actions on the user's behalf in a secure and transparent manner.
- **Create and Update User-Generated Content with Permission:**  Providers publish new content or modify existing content on behalf of users, such as posts, comments, and other social interactions, after obtaining the user's consent.
- **Maintain the User's Social Graph:**  Providers manage and update users' social connections on Frequency, (based on a user’s direction and consent) such as following or unfollowing other users, and maintaining friend lists. These actions ensure that the user's relationships are accurately represented on the blockchain.
- **Store User-Generated Content and Write Links to It on Frequency:** Providers store user-generated content files (e.g., media files, documents) and publish links to the content on chain or batched metadata in The InterPlanetary File Service (IPFS). This enables decentralized access and verification. Providers have many options for user-generated content file storage including decentralized storage like IPFS.
- **Simplify User Participation:** By handling transaction complexities and fees, Providers make blockchain applications more accessible to end-users who may not possess sufficient technical knowledge or hold tokens.
- **Enhance User Experience:** Providers may offer intuitive user interfaces and seamless interactions, so users don’t need to experience or understand the underlying blockchain mechanics.

## How You Can Become a Provider

### Step 1: Generate Your Keys

There are various wallets that can generate and secure Frequency compatible keys, including:

- [Polkadot Extension](https://polkadot.js.org/extension/)
- [Talisman](https://www.talisman.xyz)
- [See more](https://polkadot.com/get-started/wallets)

This onboarding process will guide you through the creation of an account and the creation of a Provider Account which will be required for many different transactions.

### Step 2: Acquire Testnet Tokens

Taking the account generated in Step 1, visit the [Frequency Testnet Faucet](https://faucet.testnet.frequency.xyz/), and follow the prompts to get Testnet tokens (called XRQCY tokens).

### Step 3: Create a Testnet Provider

- Visit the [Provider Dashboard](https://provider.frequency.xyz/) to set up your official Provider account on the Frequency Testnet.
- On the Provider Dashboard, you will be asked to select which network you would like to join from the dropdown. You may select among the available networks: Mainnet, Testnet on Paseo, Localhost, or Custom. Select Testnet on Paseo.
- Select your account Id from the dropdown. (This is the Application Account you created in Step 1.)
- Select Create an MSA and approve the transaction popups.
- Enter a Provider name. You should enter the name you wish register under as a Provider (typically a company or application name).

NOTE: Once registered as a Provider, your Provider MSA Id can not be removed from the chain in order to maintain transaction verification integrity.

### Step 4: Gain Capacity

[Capacity](../Tokenomics/CapacityStaking.md) is the ability to perform some transactions on Frequency without token cost.
All interactions with the chain that an application does on behalf of a user can be done with Capacity.

Login to the [Provider Dashboard](https://provider.frequency.xyz/), select Stake to Provider, select Stake to Provider, and stake ~100 XRQCY Tokens.

### Step 5: Done

You are now registered as a Provider on Testnet and have Capacity to do things like support users with [Single Sign On](./SSO.md).

You can also use the [Provider Dashboard](https://provider.frequency.xyz/) to add additional Provider Account [Control Keys](../Identity/ControlKeys.md) for safety.

Ready to move to production? [Become a Provider on Mainnet](https://projectlibertylabs.github.io/gateway/GettingStarted/BecomeProvider.html#mainnet).

**[Become a Provider Today](https://provider.frequency.xyz/)**
