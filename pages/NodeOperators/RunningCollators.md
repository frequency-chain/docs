# Running a Collator

## Registration & Requirements

### Collator details are currently under development — more details will be released soon regarding instructions and implementation details.

Collator operators will have some technical and financial requirements to be able to serve as a candidate chosen to form the next block.

Collator nodes require fast enough hardware and bandwidth to service the network within the necessary block time.
If a Collator lags or drops offline for more than the minimum time, they will be kicked out of the Collator candidate pool.

Collators follow the same expectations outlined in Polkadot’s reference hardware.

#### See Running a Node for details on node setup and deployment

## Key Types

There are five keys that matter for a Collator node:

1. **The Networking Key**
	* Collator: Can be auto-generated
	* Can be set via CLI with `--node-key` or `--node-key-file`, usually for public bootnodes
		* Remember that `--node-key-file` reads the file bytes, so do not have trailing new lines or other whitespace.
	* Used by `libp2p` for secure node communications and is the public key at the end of the node multiaddr

2. **The Controller Account Key** (Sometimes referred to as the `Account ID`)
	* Account used to control the collator
	* When an invulnerable collator, should be set as one of the "invulnerable keys"

3. **The Invulnerable Address Key**
	* The controller account's address
	* Must be added to the invulnerables using `collatorSelection.setInvulnerables`

4. **The Stash Account Key** (Sometimes referred to as the `Validator ID`)
	* Not used with collator selection
	* Should be the same as the controller account

5. **The Session Aura Key**

	* "Owned" by the the controller account
	* Does the actual work of signing blocks
	* Can be rotated by generating a new key on the node with `author_rotateKey`, then calling `session.setKeys` from the controller account


## Bond Information
#### More details regarding bond information will be released soon.

Collators are required to post a “bond” to register as a Collator candidate.

**Bond:** A number of FRQCY tokens that can be slashed if the Collator acts in a malicious manner.

* Bond may be automatically slashed if a block is rejected by Polkadot's Relay Chain
* Bond amount is set by governance but will evolve into a minimum (Will serve as a ranking factor for running a Collator)
* Collator operators must control the tokens placed up for bond and does not provide any system for others to stake tokens to a Collator
* If the same person wants to bond multiple Collators they must put up the same amount of bond for each Collator
	* If the bond requirement increases, it is multiplied by the number of Collators they run. 

## Collator Setup

1. Create a new full node and match or exceed the [official collator requirements](https://docs.frequency.xyz/)
1. Download (or use docker) with  use the most recent release from
1. Remember that the node should be able to peer with others, but access to HTTP and WebSocket RPCs should be restricted
    - Required flags
      - `--collator` Telling your node to run as a collator
    - Suggested Flags
      - `--base-path` Change where the data is stored
      - `--name` Name your node for easy discovery on https://telemetry.polkadot.io and https://telemetry.frequency.xyz
    - Situational Flags
      - Need to run `author_rotateKeys` or other protected calls, but no access to call from localhost. **Port MUST be protected from the public Internet**
        - `--rpc-external` External RPC calls accepted
        - `--rpc-methods=Unsafe` System commands like `author_rotateKeys` accepted externally
        - `--rpc-port=9933` RPC port, 9933 is default
    - Example:
      ```
      ./frequency --collator --base-path=/data --name="FooBar Collator 42"

      ```
    - Additional flags are documented with `--help`
    - Flags applied after a `--` are applied to built in relay chain node.
      - Example:
      ```
      ./frequency --collator -- --rpc-port=9934

      ```
1. Generate a new Controller Account aura key: `subkey generate`
    - If you want a password, you can add that `subkey generate --password [password here]`
1. Generate a new Session Key
    - Node Generated
      - Use `author_rotateKey` (localhost or "unsafe" RPC required)
      - Returns the new public key
    - Manually Generated via `subkey generate`
      - Add to the node with `author_insertKey` (localhost or "unsafe" RPC required)
1. Register a session key
    - Submit the Extrinsic: `session.setKeys`
      - Sender: The Controller Account
      - keys: Address of the new Session Key
      - proof: `0x` (Yes, it is empty)
    - New session keys do not become active until the next session (every ~6h)
    - It is also possible for your session key to match your Controller Account, but not suggested for production
1. Wait until the relay chain and parachain are up to date and synced

## Launch Collator Setup

1. Follow steps 1-3 above
2. Inject your generated Session Key into the server via localhost (or using external rpc and )
    ```
    curl --location --request POST 'http://localhost:9933' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "jsonrpc": "2.0",
        "method": "author_insertKey",
        "params": ["aura", "secret phrase would go here but this is not one", "0x...hex public key here"],
        "id": 1
    }'
    ```
3. Wait until the relay chain is synchronized

#### See [Collator Troubleshooting](./CollatorTroubleshooting.md) for additional information.
