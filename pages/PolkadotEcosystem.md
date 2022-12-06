# Polkadot Ecosystem

## What is a Polkadot Parachain?

A Parachain is a blockchain that works within the confines of the Polkadot host Relay Chain, running in parallel as a “parallelized chain”.

The main responsibility of the Relay Chain serves to coordinate parachains as a whole.
Parachains benefit from the pooled security, thought-through governance, and overall scalability generated through the Relay Chain.

Parachains operate as layer-1 blockchains that connect to a Relay Chain, which validates the state transition of connected parachains, providing shared state across the entire ecosystem.
Since the validator set on the Relay Chain is expected to be secure with a large amount of stake put up to back it, it is desirable for parachains to benefit from this shared security.

Learn more about Polkadot's [parachain architecture](https://wiki.polkadot.network/docs/learn-parachains).

## Why is Frequency a Parachain?

Frequency is a Polkadot Parachain dedicated to decentralized social media.
Balancing blockchain-based incentive models with the scale needed to support a social network is a challenge.
However, Polkadot’s model of a Relay Chain with connected parachains offers a fixed price consensus, making it ideal for a highly scalable operation.

The ability to alter the pricing structure of blockchain transactions served as an essential consideration in developing Frequency as a Polkadot Parachain.

Parachains don’t pay a separate fee for each block that gets validated because of parachain leases.
[Parachain leases](https://wiki.polkadot.network/docs/learn-auction#parachain-lease-extension) have been settled via funds gathered from the Polkadot community and slot auctions.

As a Parachain, Frequency accomplishes several functionality components essential for its development:

1. Different Classes of Transactions
2. Broadcast as a Key to Decentralization
3. Different Economic Structures
4. Collaborative Standardization

Learn more about these concepts: [Basics Overview](Basics/Overview.md)
