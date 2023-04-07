# Running a Node

## Releases

### Binaries

Releases are maintained on Frequency's [GitHub Repository](https://github.com/LibertyDSNP/frequency/releases).

Frequency currently builds releases for the AMD64 architecture only.

| Network | Binary Name |
| --- | --- |
| Frequency |  `frequency-mainnet.[arch]` |
| Frequency Rococo | `frequency-rococo.[arch]` |

### Docker Images

| Network | Docker Image |
| --- | --- |
| Frequency | [`frequencychain/parachain-node-mainnet`](https://hub.docker.com/r/frequencychain/parachain-node-mainnet) |
| Frequency Rococo | [`frequencychain/parachain-node-rococo`](https://hub.docker.com/r/frequencychain/parachain-node-rococo) |

## RPC Node

If you are running an RPC node there are several options to be aware of.
These are NOT all the options (see `--help`), but are the important ones.

See also:
- https://docs.substrate.io/deploy/prepare-to-deploy/
- https://docs.substrate.io/deploy/deployment-options/

### RPC Access Control

The node offers NO generalized options for access control.
If you need access control, you should proxy through a service that provides that security.

### RPC and WebSocket

Generally WebSockets are used to access the node, but there are both an RPC and WebSocket interfaces.

- External WebSocket Access: `--ws-external` (defualt is local only)
- External RPC Access: `--rpc-externa` (default is local only)
- WebSocket Connection Limit: `--ws-max-connections 250`
- RPC and WebSocket CORS: `--rpc-cors <ORIGINS>` (use `all` to disable)

### Archive vs State Pruning

*Option*: `--state-pruning`
*Default*: `--state-pruning 256`

Archive nodes are useful for accessing historical states, but Frequency is designed to make that need rare.

- `archive` will store all the historical states for the network, but will require more storage.
- `[number]` will store only the last `n` states.

### Ports

The node uses various ports (with defaults):

- RPC: `--ws-port 9933`
- WebSocket: `--rpc-port 9944`
- Gossip Protocol: `--port 30333`

### Monitoring

Nodes have a Prometheus exporter enabled by default.

- Prometheus Port: `--prometheus-port`
- Disable Prometheus: `--no-prometheus`

See: https://docs.substrate.io/maintain/monitor/ for more information on monitoring options.

### Other

- Public address if different: `--public-addr <IP Address>`
- Public name of the node: `--name <string>`
- Base path for chain data storage: `--base-path <PATH>`

### Logging and Troubleshooting

Logging is `--log <LOG_PATTERN>...` which is `<target>=<level>` for example: `-lsync=debug`.
The list of possible targets is long, but some common ones are listed under [Node Troubleshooting](./Troubleshooting.md).

## Local Instant Sealing

Used for local development on or against Frequency.
This does not need any other servers or network and is completely self-contained.
It will produce a block as soon as a transaction has entered the queue.

- Binaries: `frequency-local.[arch]`
- Docker: [`frequencychain/instant-seal-node`](https://hub.docker.com/r/frequencychain/instant-seal-node)

### Easy Docker Start
```
docker run --rm -p 9944:9944 -p 9933:9933 frequencychain/instant-seal-node
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
