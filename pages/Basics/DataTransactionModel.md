# Frequency's Data Transaction Model

![alt text](https://github.com/LibertyDSNP/frequency-docs/blob/editing-session/pages/images/Low%20Cost%20and%20Friction%20vs%20Business-Friendly%20Dichotomy.png)

## The Low Cost/Friction vs Business-Friendly Dichotomy
Another problem with many blockchains is the trade-off between offering End Users low-friction and low- or no-cost solutions and offering businesses (Providers) a way to manage costs. Predictable costs are a key component to encourage businesses to participate in such an ecosystem. Financial transactions require significant rigor (such as defending against the double-spend attack). Since financial transactions are charged individually at the time of creation and must be validated by all parties before the transaction can go through, asynchronous batching is not feasible. In addition, blockchain transactions often require that the relevant data be permanently stored on chain. As the ecosystem grows, these on-chain costs also grow. The results of these requirements are slow transactions, high per-transaction costs, and high volatility in per-transaction pricing (i.e., marginal cost pricing). In order for Providers to sustain themselves in this collaborative ecosystem, the participation costs must be lower than the utility the Provider receives for participating.

Additionally, most blockchains prioritize individual financial transactions. Each transaction must be individually valuable, and each additional service paid for by the user transacting. While this provides incentives to lower the individual transaction costs, it still focuses on the value of the single transaction and disregards the cost and value of the transaction to the network. 

## Frequency's Data Transaction Model Solution
Frequency’s Data Transaction Model recognizes that while the bulk of available blockchains are built based on financial transactions, many potential blockchain applications (such as social media) do not require them. Frequency distinguishes between financial transactions and data-focused transactions. A major advantage of Frequency’s Data Transaction focus is the bulk of its data is stored off chain.

### Metadata and Payload Split
Frequency splits data into two parts: metadata and payload. The metadata declares the existence of the data and gives directions on how to access or read it. The payload stores the content. The metadata is tiny and is always on chain. Payloads can exist either on or off chain. Each option comes with different trade-offs. (See below) On-chain payloads increase security and availability at the expense of increasing costs. Introducing batching into off-chain payloads can improve the availability as the data can contain many different User actions. Off-chain payloads for individual Users carry a greater risk due to the limited number of parties who may be interested in preserving the availability of the data. Frequency allows protocols to choose the tiers that match the needs of their Users.



| Payload Location Options                    | Security | Availability | Cost |
|---------------------|:-------------:|:-----------------------:| :-----------------------------: |
| Tier 0: On-Chain (Data is stored and retrievable as part of the blockchain network state. Loss of data can result in invalidation of the chain.)    |    Best    |     Best      |  High    |
| Tier 1: Inside Batch (Data is secured via on-chain metadata and permissions. Availability is the responsibility of the batching actor, but the actor can be responsible to multiple users.)    |    Good    |     Good      |  Low    |
| Tier 2: Off-Chain References (Data is secured via on-chain metadata.  Availability is the responsibility of the user.)      |  Good   |    Low     |  Medium    |



### Batching
Batching is not practical for financial transactions as the elements must be processed sequentially in a very specific order (i.e., check the purchaser’s balance, check the product availability, collect the balance, deliver the product, etc.) While Layer 2 blockchain systems allow for some parallelization, they still require protection from double-spend and other attacks. Data-focused, non-financial use cases, paired with the Delegation Model for Frequency allow for parallel transactions in batches. Verification may be done asynchronously at read as well as write time. For example, a Provider could send and deliver a batch of messages from Users that are simultaneously sending messages through a different Provider. The batch and messages are verified partially at write time and fully when consumed. This allows Providers to batch messages and publish large quantities of data off chain at once, reducing the transaction cost and ensuring each additional message cost is marginal.
