# Frequency Gateway

## Why Frequency Gateway?

[Gateway](https://projectlibertylabs.github.io/gateway/) provides a Simple Blockchain Integration for Your Applications–bridging the gap between your app and the decentralized web.

Gateway offers a suite of tools and services that make it easy to connect your applications to the Frequency blockchain. This allows your development team to focus on building outstanding user experiences without managing the complexity of blockchain interactions.

## What is Frequency Gateway?

**Gateway** provides a simple API to interact with the Frequency social layers (including identity, Universal Social Graph, content, and more). It includes a suite of tools you can select to build the best applications for your users.

### Key Features:

#### Get Web2 API Simplicity with Decentralized Power:

- **Build Your Applications Faster:** Accelerate development with familiar Web2 tools and interfaces.
- **Own Your Infrastructure:** Deploy and manage your own services for greater control and customization.
- **OpenAPI/Swagger Out of the Box:** Utilize comprehensive documentation and standardized APIs for seamless integration.
- **Automated Deployment with Docker:** Deploy services quickly using optimized Docker containers.

#### Customize for your users:

- **Add Decentralized Authentication and Onboarding Workflows:** Integrate secure, decentralized user authentication with ease.
- **Connect Your Users with Their Universal Social Graph:** Access and manage user relationships across the decentralized network.
- **Read, Write, and Interact with Social Media Content:** Enable rich social interactions within your application.

## How Can I Integrate Frequency Gateway?

Gateway is composed of independent, standalone microservices, allowing you to use only those components you need. These microservices provide simple APIs for interacting with various aspects of the Frequency network.

### Key Microservices:

#### 1. Account Service

The Account Service enables easy interaction with accounts on Frequency. Accounts are defined with an `msaId` (64-bit identifier) and can contain additional information such as a handle, keys, and more.

[Account Service Docs](https://projectlibertylabs.github.io/gateway/Build/AccountService/AccountService.html)

##### Features:

- **Account Authentication and Single Sign-On:** Simplifies user onboarding with Sign-In with Frequency (SIWF).
- **Delegation Management:** Manages permissions and actions delegated by users.
- **User Handle Creation and Retrieval:** Creates and manages unique, user-selected user handles within the network.
- **User Key Retrieval and Management:** Accesses and securely manages user cryptographic keys.

#### 2. Universal Social Graph Service

The Graph Service enables easy interaction with social graphs on Frequency. Each graph connection can be private or public and can be unidirectional (a follow) or bidirectional (mutually opted-in friend connection).

[Social Graph Service Docs](https://projectlibertylabs.github.io/gateway/Build/GraphService/GraphService.html)

##### Features:

- **Fetch User Graph:** Retrieves a user's social connections and relationships.
- **Update Delegated User Graphs:** Modifies social graphs on behalf of users with their permission.
- **Watch Graphs for External Updates:** Monitors changes in the network to keep user data up to date.

#### 3. Content Publishing Service

The Content Publishing Service enables the creation of new content-related activities on Frequency.

[Content Publishing Service Docs](https://projectlibertylabs.github.io/gateway/Build/ContentPublishing/ContentPublishing.html)

##### Features:

- **Create Posts to Publicly Broadcast:** Publishes content that is visible across the entire network.
- **Create Replies to Posts:** Facilitates conversations by allowing users to reply to content.
- **Create Reactions to Posts:** Enables users to interact with content.
- **Create Updates to Existing Content:** Modifies or enhances previously published content.
- **Request Deletion of Content:** Manages the content lifecycle by allowing deletion requests.
- **Store and Attach Media with IPFS:** Utilizes InterPlanetary File System (IPFS) links for decentralized media storage.

#### 4. Content Watcher Service

The Content Watcher Service enables client applications to process content found on Frequency by registering for webhook notifications that are triggered when relevant content is found, eliminating the need to interact with or query the chain for new content.

[Content Watcher Service Docs](https://projectlibertylabs.github.io/gateway/Build/ContentWatcher/ContentWatcher.html)

##### Features:

- **Parse and Validate Frequency Content:** Ensures content integrity and compliance with network standards.
- **Filterable Webhooks:** Receive notifications based on specific content filters.
- **Scanning Control:** Manage how and when the service scans for new content.

**[Start Using Gateway](https://projectlibertylabs.github.io/gateway/)**
