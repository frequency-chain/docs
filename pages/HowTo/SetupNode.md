# Set Up a Node

## Prerequisites
- [Docker Engine*](https://docs.docker.com/engine/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

- *For Mac users, [Docker Desktop](https://docs.docker.com/desktop/install/mac-install/) engine also installs docker compose environment, so no need to install it separately.

### Hardware
We run benchmarks with and recommend the same reference [hardware specified by Parity.](https://wiki.polkadot.network/docs/maintain-guides-how-to-validate-polkadot#reference-hardware)

## Releases

### Binaries

Releases are maintained on Frequency's [GitHub Repository](https://github.com/LibertyDSNP/frequency/releases).

Frequency builds releases for both ARM64 and AMD64 architectures.

| Network | Binary Name |
| --- | --- |
| Frequency |  `frequency-mainnet.[arch]` |
| Frequency Rococo | `frequency-rococo.[arch]` |

### Docker Images

| Network | Docker Image |
| --- | --- |
| Frequency | [`frequencychain/parachain-node-mainnet`](https://hub.docker.com/r/frequencychain/parachain-node-mainnet) |
| Frequency Rococo | [`frequencychain/parachain-node-rococo`](https://hub.docker.com/r/frequencychain/parachain-node-rococo) |

## Build
### Local Desktop
1. Install Rust using the [official instructions.](https://www.rust-lang.org/tools/install)
2. Check out this repository
3. `rust-toolchain.toml` specifies the standard toolchain to use. If you have `rustup` installed, it will automatically install the correct toolchain when you run any cargo command.
4. running `make check` will run cargo checks for all Frequency features. This is the recommended way to check your code before committing.  Alternatively, you can run the following for specific features:

```
make check-local
make check-rococo
make check-mainnet
```
5. Build Wasm and native code.

>*Note, if you get errors complaining about missing dependencies (cmake, yarn, node, jq, etc.) install them with your favorite package manger (e.g. Homebrew on Mac) and re-run the command again.*

```
make build
```
Above will build frequency with all frequency features.  Alternatively you may run the following command to build with specific features:

```
make build-local
make build-rococo
make build-mainnet
```
To build local, rococo, or mainnet features respectively.

At this point, you should have `./target/release` directory generated locally with compiled project files.

### asdf Support
Install the required plugins for asdf:

```
asdf plugin-add rust
asdf plugin-add make
asdf plugin-add cmake (https://github.com/srivathsanmurali/asdf-cmake.git)
```

Install the dependency versions declared in `.tool-versions`

>`asdf install`

Note: I could find no clang plugin that worked, so your system still needs clang to be installed.

## Remote Instance such as AWS EC2
For remote instances running Linux, if you want to check out and build such as on an AWS EC2 instance, the process is slightly different to what is in the [Substrate documentation.](https://docs.substrate.io/install/linux/)

### Ubuntu
1. Upgrade the instance and install missing packages with `apt`:

```
sudo apt upgrade
sudo apt upgrade git
sudo apt install --assume-yes build-essential
sudo apt install --assume-yes clang curl libssl-dev cmake
```
2. Follow [official instructions](https://www.rust-lang.org/tools/install) to install rust, but select `3. customize the installation` then reply n to `Modify PATH variable? (Y/n)`
3. Follow steps 6-10 at [Substrate Linux development.](https://docs.substrate.io/install/linux/)
4. Proceed with checking out and building frequency as above.

## Run
There are 2 options to run the chain locally:

*Note, running Frequency via the following options does not require binary to be built or chain specs to be granted separately, and is programmed within the scripts for simplicity.*

1. Collator Node in Instant Sealing Mode
2. Collator Node with Local Relay Chain


## 1. Collator Node in Local Instant Sealing Mode

Used for local development on or against Frequency.
This does not need any other servers or network and is completely self-contained.
It will produce a block as soon as a transaction has entered the queue.

- Binaries: `frequency-local.amd64`,  `frequency-local.arm64`
- Docker: [`frequencychain/instant-seal-node`](https://hub.docker.com/r/frequencychain/instant-seal-node)

### In Terminal
```
make start
```

### Easy Docker Start
```
docker run --rm -p 9944:9944 -p 9933:9933 frequencychain/instant-seal-node
```
To stop running chain, hit `[Ctrl+C]` in terminal where the chain was started.

| Node | Ports | Explorer URL |
| --- | --- | --- |
| Frequency  Collator Node| ws:`9944`, rpc: `9933`, p2p:`3033` | [127.0.0.1.9944](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer) |

### Force creation of an empty block
```
curl http://localhost:9933 -H "Content-Type:application/json;charset=utf-8" -d '{ \
    "jsonrpc":"2.0", \
    "id":1, \
    "method":"engine_createBlock", \
    "params": [true, true] \
}'
```

## 2. Collator Node with Local Relay Chain

### Mixed Terminal/Docker
This option runs one collator node as local host process and two relay chain validator nodes in each docker container.

1. Start relay chain validator nodes.
```
make start-relay
```
2. Register a new parachain slot (parachain id) for Frequency.

*Note, if parachain was previously registered on a running relay chain and no new registration is required, then you can skip the above step.*
```
make register
```
3. Generate chain spec files.  If this is your first time running the project or new pallets/runtime code changes have been made to Frequency, then the chain specs need to be generated.  Refer to [generation spec file]() for more details.

4. Start Frequency as a parachain.  This step will generate genesis/wasm and onboard the parachain.

```
make start-frequency
```
5. Onboard Frequency to the relay chain.

```
make onboard
```
Stop and Clean Environment
1. Off-board Frequency from relay chain: `make offboard`
2. To stop Frequency from running in the terminal: `[Ctrl+C]`
3. Stop the relay chain: `make stop-relay`
4. Run to remove unused volumes: `make docker-prune`
5. Clean up temporary directory to avoid any conflicts with next onboarding: `rm -fr /tmp/frequency`

### All in Docker Container
**Currently does not work on M-Series macOS Laptops.**   See [https://github.com/LibertyDSNP/frequency/issues/432](https://github.com/LibertyDSNP/frequency/issues/432)

Start
```
make start-frequency-docker
```

Stop
```
make stop-frequency-docker
```

| Node | Ports | Explorer URL |
| --- | --- | --- |
| Frequency Relay Node | ws:`9944`, rpc:`9933`, p2p:`30333` | [127.0.0.1:9944](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer) 
| Alice Relay Node | ws:`19946`, rpc:`9935`, p2p:`30335` | [127.0.0.1:9946](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9946#/explorerhttps://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9946#/explorer) |
Bob Relay Node | ws:`9947`,rpc:`9936`, p2p:`30336` | [127.0.0.1:9947](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9947#/explorer)|
