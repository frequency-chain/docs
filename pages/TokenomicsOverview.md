# Tokenomics
The Frequency mainnet token is called FRQCY. 
Frequency also utilizes Capacity, an alternative to using tokens to perform certain types of transactions. 
See the Capacity page for more detailed information. 
In this document, we outline the economics of the FRQCY token, it's functionality in the Frequency network, and the supply and demand dynamics. 

The Rococo Testnet token is notated as XRQCY - this token is only for testing and holds no value. 

## Goals:

Frequency aims to accomplish two goals:

* **To establish different classes of transactions:** Prioritize data-focused transactions centered around creating and sourcing new data. 
* **To become a force of democratization amongst a decentralized social network:** Distributing Capacity to users for delegation to Providers 

## FRQCY Token & Capacity

FRQCY is a utility token. Capacity is a non-transferable resource associated with an MSA account. 
Users can stake FRQCY tokens to generate Capacity through Maximized Capacity Staking or Rewards Capacity Staking. 
Visit here for more information regarding the Capacity Economic System

| Unit   | Decimal Places | Syntax        | Decimal FRQCY |
| -----  | -------------- | ------------- | ------------- |
| Planck | 0	   		      | 1/100,000,000 | 0.00000001    |
| Micro (uFRQCY) | 1	 	| 1/1,000		  | 0.00000010    |
| Milli (mFRQCY) | 5   	   | 1/1,000		  | 0.00100000    |
| Unit (FRQCY)   | 8   	   | 1/1			  | 1.00000000    |
| Million (MFRQCY) | 14		| 1,000,000/1	  | 1,000,000.00  |

## Frequency Users and Democratization:

On the Frequency network, end users do not need to access FRQCY tokens or Capacity to use the network. 
There are a few primary users on the Frequency network broken into the categories below.

* **Frequency Providers:**
Applications and services that use the Capacity Economic system are called Providers, and must have Capacity to serve the users that delegate to them. 
While Capacity isn’t like other costs, Providers are not dictated how to pay for Frequency. 

* **Coinless Users:**
People who don’t need tokens to interact with the blockchain. 
They still have wallets with private keys but instead of managing tokens these keys enable them to maintain control of their information and identity on-chain. 
While they may interact with tokens for other purposes, they are not required to. 

* **Direct Frequency Users:**
	Those who interact with the FRQCY token and are engaged in staking, governance, building new schemas, or other systems on Frequency. 
	These users overlap with [DSNP users](https://spec.dsnp.org/index.html).

## Frequency Incentives: 
Frequency utilizes a limited incentive model with minimal goals to accomplish three things outlined below. 
The limited reach and goals of each incentive provides a safeguard against misuse and allows for minor adjustments as consequences arise.

1. Encourage collaboration between Providers (Capacity) 
2. Produce the value necessary to support itself (Collator Rewards)
3. Decentralize system control over time (Capacity Token Rewards)


## Crowdloan: 
Details regarding Crowdloan are still under development.

## Vesting Schedules:
Details regarding Vesting Schedules are still under development.

* **Investor Vesting:**
	* Token Access:
	* Voting:  
*  **Crowdloan Vesting:**

## Useful Terms

* **Capacity:** Capacity is the ability to send messages every Capacity Epoch.

* **Capacity Epoch:** The Capacity Epoch is the number of blocks before capacity refills. 
In other words, it is a number of blocks before you reuse your Capacity.

* **Staking:** A stake is an amount of money that a person gives up temporarily when receiving a benefit, usually to shift some of the risk to the owner of the money.
Maximized Capacity: The amount of Capacity generated from Maximized Capacity Staking is balanced against Rewards Capacity Staking to ensure that it is almost always more capital efficient for an application to choose Maximized Capacity Staking. 
Because Providers have an amount of Capacity they need to operate, they care most about gaining the required Capacity while regular users don’t need a specific Capacity amount and can opt for the more useful token earnings instead.
Rewards Capacity: The stake generates capacity that the user must direct to a Provider they chose. 
However, the Rewards Capacity Staking is much less Capacity for the same amount of tokens staked. 
Instead, the user receives a periodic “reward” back to the Token Account of the stake.
 
* **Unstaking:** If someone who has staked wants to become liquid again in order to transfer or trade their tokens, they have to go through what is called a thaw period. 
This is a time interval where the tokens are not generating any rewards or Capacity, but cannot yet be used or transferred from the user’s account. 
After the thaw period ends, the user can use, transfer, or even re-stake their tokens.

* **Batching:** One on-chain message that points to lots of messages from different Message Source Accounts. 
In other words, it represents a shorthand that is a logical construct: off-chain payload reference + more than one MSA referenced as a sender in that off-chain data (aka a Parquet schema with payload location of IPFS).

* **Delegate:** The action of an MSA (the Delegator) delegating to a Provider. 
A verb only. DO NOT use as a noun!

* **Collators:** A Frequency node that generates blocks and submit them to the Relay Chain.

