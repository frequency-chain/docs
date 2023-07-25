# How to Create a Token Account

1. Acquire tokens via an Exchange (or)
2. Transfer tokens into an account address
3. Derive an **AccountID**. 

    A Token Account has a 32-byte identifier called an **AccountID**. This identifier can be derived from the public-key of the following cryptographic schemes supported by [Substrate](https://docs.substrate.io/):

    - EDSA signatures using secp256k1 curve
    - Ed25519 using Curve25519
    - SR25519 using Ristretto group
