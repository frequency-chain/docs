# Troubleshooting

## Short-term: Switch to a Different Node

While not all nodes can support all situations, nodes are mostly interchangeable.
Thus, use of a public node may be a short-term fix for some situations.

## Common Logs

- `-lcumulus-collator=trace` Trouble with collating and forming blocks
- `-lsync=trace` Trouble with syncing and peers

## Key Generation

### Helpful Links and References

- https://wiki.polkadot.network/docs/maintain-guides-how-to-validate-polkadot#set-session-keys
- https://wiki.polkadot.network/docs/learn-keys

### Generating Keys

- Suggested: Subkey https://support.polkadot.network/support/solutions/articles/65000180519-how-to-create-an-account-in-subkey
  - macOS Prerequisites
    - rust https://rustup.rs/
    - protobuf `brew install protobuf`
- Alternatives: https://wiki.polkadot.network/docs/learn-account-generation

#### Curl command for inserting a new Session Key

Usually only used for changing servers or initial setup.

Params:

- Key Type: "aura"
- Secret Phrase
- Hex Public Key

```
curl --location --request POST 'http://localhost:9933' \
--header 'Content-Type: application/json' \
--data-raw '{
    "jsonrpc": "2.0",
    "method": "author_insertKey",
    "params": ["aura", "secret phrase would go here but this is not one", "0x4252d29a65087ceddb645ebac744628009b51c8e60fff750d99ba6ce1f1cf366"],
    "id": 1
}'
```

#### Curl command for rotating to a new Session Key

Returns the new public key that would be used for rotating the session key on chain

```
curl --location --request POST 'http://localhost:9933' \
--header 'Content-Type: application/json' \
--data-raw '{
    "jsonrpc": "2.0",
    "method": "author_rotateKeys",
    "params": [],
    "id": 1
}'
```

#### Curl command for testing that the node has a key

Params:

- Hex Public Key
- Key Type: "aura"

```
curl --location --request POST 'http://localhost:9933' \
--header 'Content-Type: application/json' \
--data-raw '{
    "jsonrpc": "2.0",
    "method": "author_hasKey",
    "params": ["0x4252d29a65087ceddb645ebac744628009b51c8e60fff750d99ba6ce1f1cf366", "aura"],
    "id": 1
}'
```
