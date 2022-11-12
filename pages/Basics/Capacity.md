# Capacity 

#### Capacity is currently under development - more details will be released soon regarding instructions and implementation details.

## What is Capacity 
Capacity is a value transaction that allows for the ability to send messages or do a consistent amount of work on the chain that continues over time. 
It is a non-transferable resource that acts as an alternative to using FRQCY tokens to perform certain transactions and is managed through a rate-limited continuous stream of transactions.

## Capacity Epoch 
A set amount of Capacity is available each [Capacity Epoch](#capacity-epoch). 
A Capacity Epoch acts as a cycle and refills Capacity each Capacity Epoch (see below visual) during which one can use any amount of Capacity for transactions/messages. 
An Epoch Period is composed of a set number of approximately 100 blocks and could be adjusted through governance. 

* **Generated Capacity:**
The amount of Capacity generated for a Provider from staking FRQCY tokens to the network.

![Capacity Epoch Diagram](https://global.discourse-cdn.com/standard11/uploads/unfinishedlabs/original/1X/6fadc75824cd238e5aa1decd06339f8f60d7978e.png)

## Purpose of Capacity for Frequency

### By Use Case

* Capacity can be used to perform transactions such as
* Create and [MSA](./MessageSourceAccounts.md)
* Add a key to an MSA
* Delegate permissions to another MSA
* Update [Delegate Permissions](#delegate-verb-ie-to-delegate)
* Send a [message](#message)
* Send a [batch message](#batch-message)

### By User Type

* **Providers:** 
Utilize Capacity to put towards user transitions for provider applications and services. 
This allows applications to increase their users by reducing costs. 
[Maximized Capacity Staking](#2-maximized-capacity-staking-for-applications-and-services) allows Providers to use FRQCY tokens as efficiently as possible, optimizing their Generated Capacity.

* **End Users:** 
Do not need to have Capacity directly. 
They can delegate to Providers who generate Capacity for them. 
Users can participate in [Rewards Capacity Staking](#1-rewards-capacity-staking-for-users) to support services and participate in on-chain governance with Capacity.

