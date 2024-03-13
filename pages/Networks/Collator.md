# Running a Collator

Collator Node operators will need to meet technical and financial requirements to serve as a candidate to be chosen to form the next block.

Collator Nodes require sufficient hardware and bandwidth to service the network within the necessary block time.
If a Collator lags or drops offline for more than the minimum time, they will be kicked out of the Collator candidate pool unless they are "invulnerable."

See [Running a Node](./Node.md) for binary and general node information.

## Requirements

Collators generally follow the same expectations outlined in [Polkadot's reference hardware](https://wiki.polkadot.network/docs/maintain-guides-how-to-validate-polkadot#reference-hardware).

### Suggested Minimums

- **CPU**
  - AMD64/x86-64 compatible
    - Intel Ice Lake, or newer (Xeon or Core series); AMD Zen3, or newer (EPYC or Ryzen)
    - 4 physical cores @ 3.4GHz.
    - Simultaneous multithreading disabled (Hyper-Threading on Intel, SMT on AMD)
- **Storage**
  - NVMe SSD of 1 TB
  - In general, the latency is more important than the throughput.
- **Memory**
  - 32GB DDR4 ECC
- **System**
  - Linux Kernel 5.16 or newer
- **Network**
  - The minimum symmetric networking speed is set to 500 Mbit/s (= 62.5 MB/s)
- **Clock Synchronization**
  - The system clock must be within a margin of the other collators.
  - It is suggested to use [NTP](https://en.wikipedia.org/wiki/Network_Time_Protocol) or another similar method of maintaining clock synchronization.

### Reference Hardware

For reproducibility, we use Amazon's [`c6i.4xlarge`](https://aws.amazon.com/ec2/instance-types/c6i/) instances to generate our benchmarks.

- **CPU**
  - Intel Ice Lake (3rd Gen Xeon)
  - 3.5 GHz
  - 16 vCPU
- **Storage**
  - NVMe SSD
- **Memory**
  - 32GB
- **System**
  - Linux Kernel 5.16 or newer

## Key Types

There are five keys that matter for a Collator Node:

1. **The Networking Key**

   - Can be auto-generated for most nodes.
   - Can be set via CLI with `--node-key` or `--node-key-file`, usually for public bootnodes.
     - Remember that `--node-key-file` reads the file bytes, so do not have trailing new lines or other whitespace.
   - Used by `libp2p` for secure node communications and is the public key at the end of the node multiaddr.

2. **The Controller Account Key** (Sometimes referred to as the `Account ID`)

   - Account used to control the Collator.
   - For an invulnerable Collator, this is the key that must be set by governance as "invulnerable".

3. **The Invulnerable Address Key**

   - The address of the controller account.
   - Must be added to the invulnerables using `collatorSelection.setInvulnerables`.

4. **The Stash Account Key** (Sometimes referred to as the `Validator ID`)

   - Not used with Collator selection.
   - Should be the same as the controller account.

5. **The Session Aura Key**

   - "Owned" by the controller account.
   - Does the actual work of signing blocks.
   - Can be rotated by generating a new key on the node with `author_rotateKey`, then calling `session.setKeys` from the controller account.

## Collator Setup

<div class="warning">
  Unauthorized access to Collator Node HTTP and WebSocket RPCs MUST be restricted for security.
</div>

1. Create a new full node and match or exceed the [collator requirements](#requirements).
1. [Download the latest release](https://github.com/LibertyDSNP/frequency/releases) (or use [docker](https://hub.docker.com/u/frequencychain)).

   - Required flags
     - `--collator` Telling your node to run as a collator.
   - Suggested Flags
     - `--base-path` Change where the data is stored.
     - `--name` Name your node for easy discovery on https://telemetry.polkadot.io and https://telemetry.frequency.xyz.
   - Situational Flags
     - Need to run `author_rotateKeys` or other protected calls, but have no access to call from localhost? Remember: RPC Port MUST be protected from the public internet.
       - `--rpc-external` External RPC calls accepted.
       - `--rpc-methods=Unsafe` System commands like `author_rotateKeys` accepted externally.
       - `--rpc-port=9944` RPC port, 9944 is default.
   - Example:

     ```
     ./frequency --collator --base-path=/data --name="FooBar Collator 42"

     ```

   - Additional flags are documented with `--help`
   - Flags applied after a `--` are for the internal Relay Chain node.

     - Example:

     ```
     ./frequency --collator -- --rpc-port=9945

     ```

### Controller & Session Key Setup

1. Generate a new Controller Account Aura Key: `subkey generate`.
   - (Optional) Add password `subkey generate --password [password here]`.
1. Generate a new Session Key.
   - Node Generated
     - Use `author_rotateKey` (localhost or "unsafe" RPC required).
     - Returns the new public key.
   - Manually Generated via `subkey generate`.
     - Add to the node with `author_insertKey` (localhost or "unsafe" RPC required).
1. Register a Session Key
   - Submit the Extrinsic: `session.setKeys`
     - Sender: The Controller Account
     - keys: Address of the new Session Key in hex format
     - proof: `0x` (Yes, it is empty)
   - New session keys do not become active until the next session (approximately every 6 hours).
   - Controller Keys should _not_ be used as Session Keys.
1. Wait until the Relay Chain and parachain are up to date and synced.

### Onboarding the Collator

See [Decentralization](./Decentralization.md) for current details on how to become an active Collator Node.

See [Troubleshooting](./Troubleshooting.md) for help if things go wrong.
