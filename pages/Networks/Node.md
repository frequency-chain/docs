# Running a Node

## Releases

### Binaries

Releases are maintained on Frequency's [GitHub Repository](https://github.com/LibertyDSNP/frequency/releases).

Frequency currently builds releases for the AMD64 architecture only.

Production releases ONLY work with the one given network. (You may still provide the `--chain` argument if you wish.)

| Network          | Binary Name               |
| ---------------- | ------------------------- |
| Frequency        | `frequency.[arch]`        |
| Frequency Rococo | `frequency.rococo.[arch]` |

### Docker Images

| Network          | Docker Image                                                                                              |
| ---------------- | --------------------------------------------------------------------------------------------------------- |
| Frequency        | [`frequencychain/parachain-node-mainnet`](https://hub.docker.com/r/frequencychain/parachain-node-mainnet) |
| Frequency Rococo | [`frequencychain/parachain-node-rococo`](https://hub.docker.com/r/frequencychain/parachain-node-rococo)   |

## The Embedded Relay Chain Node

The Frequency Node has a built in relay chain node to support checking block validation.
To configure the embedded relay chain node at the command line place a `--` between the Frequency node options and the relay chain node options: `frequency [OPTIONS] [-- <RELAY_CHAIN_ARGS>...]`

## Additional Resources

- [Substrate Docs: Deployment](https://docs.substrate.io/deploy/) - Great starter place to understand node deployments
- [Substrate DevOps Guide](https://paritytech.github.io/devops-guide/) - Great for DevOps teams running nodes

## High Volume Notice

Running a node that will have a high volume of transactions or queries from one or more servers requires altering the defaults.
Please read over not just the notes here, but also the details of all the command line parameters: `./frequency --help`

## Default Ports

### Frequency Node

| Description   | Port  |
| ------------- | ----- |
| P2P (TCP)     | 30333 |
| RPC/WebSocket | 9944  |
| Prometheus    | 9615  |

### Embedded Relay Chain Node

| Description   | Port  |
| ------------- | ----- |
| P2P (TCP)     | 30334 |
| RPC/WebSocket | 9945  |
| Prometheus    | 9616  |

## RPC Node

If you are running an RPC node there are several options to be aware of.
These are NOT all the options (see `--help`), but are the important ones.

See also:

- https://docs.substrate.io/deploy/prepare-to-deploy/
- https://docs.substrate.io/deploy/deployment-options/

### Relay Chain Options

Each node also has a Relay Chain node as well and these options will often apply with different defaults to the Relay Chain.
The docker images do not pass through the ports for the relay chain, but if you are running using the binary, the options are available.

`frequency <parachain-args> -- <relay-chain-args>`

See: `--help` and `-- --help` for more information.

### RPC Access Control

The node offers NO generalized options for access control.
If you need access control, you should proxy through a service that provides that security.

### RPC and WebSocket

Generally WebSockets are used to access the node, but there are both an RPC and WebSocket interfaces.

- External RPC/WebSocket Access: `--rpc-external` (default is local only)
- RPC/WebSocket CORS: `--rpc-cors <ORIGINS>` (use `all` to disable)
- RPC/WebSocket Connection Limit: `--rpc-max-connections 250`
- RPC/WebSocket Subscription Limit: `--rpc-max-subscriptions-per-connection 1024`

### Archive vs State Pruning

_Option_: `--state-pruning`
_Default_: `--state-pruning 256`

Archive nodes are useful for accessing historical states, but Frequency is designed to make that need rare.

- `archive` will store all the historical states for the network, but will require more storage.
- `[number]` will store only the last `n` states.

### Ports

Frequency and the embedded relay node uses various ports (with Frequency defaults):

- RPC/WebSocket: `--rpc-port 9944`
- Gossip Protocol: `--port 30333`

### Monitoring

Frequency and the embedded relay node have a Prometheus exporter enabled by default.

- Prometheus Port: `--prometheus-port 9615`
- Disable Prometheus: `--no-prometheus`

See: https://docs.substrate.io/maintain/monitor/ for more information on monitoring options.

### Other

- Public address if different or behind a proxy: `--public-addr <Multiaddr address>`
  - Example IP: `/ip4/55.66.77.88/tcp/30333`
  - Example DNS: `/dns4/0.boot.frequency.xyz/tcp/30333`
- Public name of the node: `--name <string>`
- Base path for chain data storage: `--base-path <PATH>`

### Logging and Troubleshooting

Logging is `--log <LOG_PATTERN>...` which is `<target>=<level>` for example: `-lsync=debug`.
The list of possible targets is long and requires reading the code of the specific library you are targeting, but some common ones are listed under [Node Troubleshooting](./Troubleshooting.md).

## Local Instant Sealing

Used for local development.
This does not need any other servers or network and is completely self-contained.
It will produce a block as soon as a transaction has entered the queue.

- Binaries: `frequency-local.[arch]`
- Docker: [`frequencychain/instant-seal-node`](https://hub.docker.com/r/frequencychain/instant-seal-node)

### Easy Docker Start

If on macOS, you currently need to add `--platform=linux/amd64`

```
docker run --rm -p 9944:9944 frequencychain/standalone-node
```

### Force creation of an empty block

```
curl http://localhost:9933 -H "Content-Type:application/json;charset=utf-8" -d '{ \
    "jsonrpc":"2.0", \
    "id":1, \
    "method":"engine_createBlock", \
    "params": [true, true] \
}'
```
