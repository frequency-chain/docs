# How to become a Collator

### Collator details are currently under development. More details will be released soon regarding instructions and implementation details.

In order to become a Collator, you will need to meet technical and financial requirements.

## Requirements

Collators follow the same expectations outlined in [Polkadot's reference hardware](https://wiki.polkadot.network/docs/maintain-guides-how-to-validate-polkadot#reference-hardware).

### Suggested Minimums

- **CPU**
  - AMD64/x86-64 compatible;
    - Intel Ice Lake, or newer (Xeon or Core series); AMD Zen3, or newer (EPYC or Ryzen);
    - 4 physical cores @ 3.4GHz;
    - Simultaneous multithreading disabled (Hyper-Threading on Intel, SMT on AMD);
  - ARM64 compatible
    - ARM64 binaries are available, we do not yet have specific CPU suggestions.
- **Storage**
  - An NVMe SSD of 1 TB
  - In general, the latency is more important than the throughput.
- **Memory**
  - 16GB DDR4 ECC.
- **System**
  - Linux Kernel 5.16 or newer.
- **Network**
  - The minimum symmetric networking speed is set to 500 Mbit/s (= 62.5 MB/s).
- **Clock Synchronization**
  - The system clock must be within a margin of the other collators.
  - It is suggested to use [NTP](https://en.wikipedia.org/wiki/Network_Time_Protocol) or another similar method of maintaining clock synchronization.

### Reference Hardware

For reproducibility, we use Amazon's [`c6id.2xlarge`](https://aws.amazon.com/ec2/instance-types/c6i/) instances to generate our benchmarks.

- **CPU**
  - Intel Ice Lake (3rd Gen Xeon)
  - 3.5 GHz
  - 8 vCPU
- **Storage**
  - NVMe SSD
- **Memory**
  - 16GB
- **System**
  - Linux Kernel 5.16 or newer.


## Collator Setup

1. Create a new full node and match or exceed the [official collator requirements](https://docs.frequency.xyz/).
1. [Download the latest release](https://github.com/LibertyDSNP/frequency/releases) (or use [docker](https://hub.docker.com/u/frequencychain)).
1. Remember that the node should be able to peer with others, but access to HTTP and WebSocket RPCs should be restricted.
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
    - Flags applied after a `--` are applied to built in Relay Chain node.
      - Example:
      ```
      ./frequency --collator -- --rpc-port=9934

      ```
1. Generate a new Controller Account aura key: `subkey generate`
    - (Optional) Add password `subkey generate --password [password here]`
1. Generate a new Session Key
    - Node Generated
      - Use `author_rotateKey` (localhost or "unsafe" RPC required)
      - Returns the new public key
    - Manually Generated via `subkey generate`
      - Add to the node with `author_insertKey` (localhost or "unsafe" RPC required)
1. Register a Session Key
    - Submit the Extrinsic: `session.setKeys`
      - Sender: The Controller Account
      - keys: Address of the new Session Key
      - proof: `0x` (Yes, it is empty)
    - New session keys do not become active until the next session (approximately every 6 hours).
    - While it is possible for your session key to match your Controller Account, but not recommended.
1. Wait until the Relay Chain and parachain are up to date and synced.

#### See [Troubleshooting](./Troubleshooting.md) for help when things go wrong.
