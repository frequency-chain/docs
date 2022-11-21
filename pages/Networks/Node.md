# Running a Node

## Releases

### Binaries

Releases are maintained on our [GitHub Repository](https://github.com/LibertyDSNP/frequency/releases).

We build releases for both arm64 and AMD64 architectures.

| Network | Binary Name |
| --- | --- |
| Frequency |  `frequency-mainnet.[arch]` |
| Frequency Rococo | `frequency-rococo.[arch]` |

### Docker Images

| Network | Docker Image |
| --- | --- |
| Frequency | [`frequencychain/parachain-node-mainnet`](https://hub.docker.com/r/frequencychain/parachain-node-mainnet) |
| Frequency Rococo | [`frequencychain/parachain-node-rococo`](https://hub.docker.com/r/frequencychain/parachain-node-rococo) |

## Local Instant Sealing

Used for local development on or against Frequency.
This does not need any other servers or network and is completely self-contained.
It will produce a block as soon as a transaction has entered the queue.

- Binaries: `frequency-local.amd64`,  `frequency-local.arm64`
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
