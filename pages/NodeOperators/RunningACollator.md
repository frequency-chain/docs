# Running a Collator

## Registration & Requirements

### Collator details are currently under development — more details will be released soon regarding instructions and implementation details.

Collator operators will have some technical and financial requirements to be able to serve as a candidate chosen to form the next block.

Collator nodes require fast enough hardware and bandwidth to service the network within the necessary block time.
If a Collator lags or drops offline for more than the minimum time, they will be kicked out of the Collator candidate pool.

Collators follow the same expectations outlined in Polkadot’s reference hardware.

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

The bond may be automatically slashed if a block is rejected by Polkadot’s relay chain.
The amount to the bond is set by governance but will evolve into a minimum such that it can be one factor in the rankings of who can serve as a Collator.

Bonds also assist with the decentralization of Collators.

Frequency requires the user who operates the Collator to control the tokens placed up for bond and does not provide any system for others to stake tokens to a Collator.
If the same person wants to bond multiple collators they must put up the same amount of bond for each collator.
If the bond requirement increases, it is multiplied by the number of Collators they run. 
