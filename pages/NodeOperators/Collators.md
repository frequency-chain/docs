# Collators
 
## What is a Collator 
Collators maintain parachains by collecting parachain transactions from users and producing state transition proofs for the Relay Chain validators. 
Essentially they serve as transaction censorship that generates blocks and submits them to the Relay Chain. 
They maintain a full node on both the parachain and Relay Chain. 
They retain all necessary information from the parachain and produce new block candidates to pass to the Relay Chain validators for verification and inclusion in the shared state of Polkadot. 
See more details about Collators on [Polkadot’s Wiki Page.](https://wiki.polkadot.network/docs/learn-collator)  

![Collator Architecture](https://wiki.polkadot.network/assets/images/polkadot-consensus-example-1-b4a05f2e5a4b991594612da57e1d6dfd.png)

## What purpose does it serve for Frequency 
Collators generate blocks on Frequency from transactions taken from the mempool and submit them to the Relay Chain on Polkadot. 

### Roll Out Plan: 
The goal is to ensure that everyone has access to be a Collator. 
Large numbers of Collators are not necessarily as good as they can slow the network; we aim to maintain network stability and operation while increasing decentralization and openness as quickly as possible. 
To accomplish this, we have three key initiatives to execute:

1. **Initialization:** Select Organizations
2. **Expansion and Testing:** Open Applications
3. **Public Collators:** Anyone can register as a Collator candidate

The initialization phase integrates Collators from select organizations. 
These organizations commit to guarantee access to all non-malicious transactions to the block and to public transparency when they do block access to malicious transactions. 
Additionally, they commit to keeping up with client updates to enable the chain to evolve quickly. 
These Collators will receive simple FRQCY token grants to assist with operational costs that will be transparently distributed through the genesis and governance. 

Once the network is bootstrapped and initial validation completed, Collator applications will be open to anyone. 
Once approved by governance these Collators will form the foundation of the public Collator set. 
Similar to step #1, these Collators will utilize the same token grant system. 
This phase will test the incentivization as Frequency progresses to fully public Collators in step #3. 

Collators are selected through a system of ranking based on bond, governance support, and uptime that will be developed. 
The progression to public Collators highly depends on the safety and security of our network. 
Our goal is to achieve public Collator access by the end of 2023. 
Post completion, Frequency plans to continue running Collators as well, to do our part to ensure the guarantees do state and access. 

## Registration & Requirements:
Collator operators will have a few technical and financial requirements to be able to serve as a candidate chosen to form the next block. 
Collator nodes require fast enough hardware and bandwidth to service the network within the necessary block time. 
If a collator lags or drops offline for more than the minimum time, they will be kicked out of the Collator candidate pool. 
Collators follow the same expectations outlined in [Polkadot’s reference hardware](https://wiki.polkadot.network/docs/maintain-guides-how-to-validate-polkadot/#reference-hardware).

### Bond Information
Collators are required to post a “bond” to register as a Collator candidate. 
A bond is a number of FRQCY tokens that can be slashed if the Collator acts in a malicious manner. 
The bond may be automatically slashed if a block is rejected by Polkadot’s relay chain. 
The amount to the bond is set by governance but will evolve into a minimum such that it can be one factor in the rankings of who can serve as a Collator once we have more offers to run Collators than we want.

Bonds also assist with the decentralization of Collators. 
Frequency requires the user who operates the Collator to control the tokens placed up for bond and does not provide any system for others to stake tokens to a Collator. 
If the same person wants to bond multiple Collators they must put up the same amount of bond for each Collator. 
If the bond requirement increases, it is multiplied by the number of Collators they run. 

### Selection: Public Collator Ranking
* **How selection works:**
	Once Frequency reaches the desired number of Collators, we need to know which Collator will be replaced if additional Collators wish to join. 
	It is critical for decentralization to allow new Collators to replace others or one user could fill all the Collator slots. 

* **Selection Criteria:**
Frequency will rank Collators based on criteria such as staking and longevity, their record of producing valid blocks, bond amount and uptime. 
Additional criteria may be considered in the future and is subject to change.

## Rewards:
Frequency rewards Collator services to both cover costs and spark competition between Collators for the job, further promoting decentralization. 
Any fees paid are removed from the supply, and the Collators receive newly created supply.

Collators have server and bandwidth expenses/costs to cover and provide the guarantees to the network and the work of forming blocks. 
Frequency incentivizes Collators by minting FRQCY tokens to reward their work. 
The design of these incentive rewards has three requirements. 

1. Must be large enough to cover operating costs and encourage participation 
2. Must be small enough such that the number of collators does not exceed the need for collators
3. They must be larger than the equivalent use of funds were they to participate in staking for rewards

Frequency uses a pair of rewards to meet these criteria. 
Collators are rewarded for their participation and forming blocks consistent with most parachain methodologies. 
The amount of the reward can eventually be determined by a combination of chain governance and the number of Collators operating. 
The source of the funds is not transaction fees. 
Transaction fees will be burned (removed entirely from the system) and regular levels of new tokens will be minted for Collators. 

Capacity’s fee-burning system (based on EIP-1559 on Ethereum) allows for Collators to form blocks with a reward independent of fees.  
While it can lead to an unreliable inflation rate from block to block, the average burn is limited by block size and should have a consistent average over time. 

Collators also receive rewards for their bonds. 
Since tokens in a bond could instead be used for staking, Collator bonds are paid out as participants in the token reward pool. 
This reward maintains a system to ensure that Collators are receiving the maximum amount of reward for their bonded tokens without needing to manipulate block production rewards to account for the alternative options. 
