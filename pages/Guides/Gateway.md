{{#title-image .02 pages/images/icons/bridge.svg "Frequency Developer Gateway"}}

# Frequency Developer Gateway

## Why Frequency Developer Gateway?

[Frequency Developer Gateway](https://projectlibertylabs.github.io/gateway/) provides simple blockchain integration for your applications–bridging the gap between your app and the decentralized web.

{{#svg-embed pages/images/Gateway.svg Gateway Diagram}}

Gateway offers a suite of tools and services hosted by you that make it easy to connect your applications to the Frequency blockchain.
This allows your development team to focus on building outstanding user experiences without managing the complexity of blockchain interactions.

## What is Frequency Developer Gateway?

**Frequency Developer Gateway** has a simple API to interact with the Frequency social layers (including identity, Universal Social Graph, user-generated content, and more).
It includes a suite of self-hosted tools you can select from to build the best applications for your users.

### Key Features:

#### Decentralize with Web2 API Simplicity:

- **Build Your Applications Faster:** Accelerate development with familiar Web2 tools and interfaces.
- **Own Your Infrastructure:** Deploy and manage your own services for greater control and customization.
- **OpenAPI/Swagger Out of the Box:** Utilize comprehensive documentation and standardized API definitions for seamless integration.
- **Automated Deployment with Docker:** Deploy services quickly using optimized Docker containers.

#### Customize for your users:

- **Add Authentication and Onboarding Workflows:** Integrate secure user authentication with ease.
- **Connect Your Users with Their Universal Social Graph:** Access and manage user relationships across the Frequency Ecosystem.
- **Read, Write, and Interact with Social Media Content:** Enable rich social interactions within your application.

## How Can I Integrate Frequency Developer Gateway?

Frequency Developer Gateway is composed of independent, self-hosted, standalone microservices, allowing you to use only those components you need.
These microservices include simple APIs for interacting with various aspects of the Frequency Ecosystem.

### Key Microservices:

#### 1. Account Service

The Account Service enables easy interaction with accounts on Frequency.
Accounts are defined with an `msaId` (64-bit identifier) and can contain additional information such as a handle, keys, and more.

[Account Service Docs](https://projectlibertylabs.github.io/gateway/Build/AccountService/AccountService.html)

##### Features:

- **Account Authentication and Single Sign-On:** Simplifies user onboarding with Sign-In with Frequency (SIWF).
- **Delegation Management:** Manages permissions and actions delegated by users.
- **User Handle Creation and Retrieval:** Creates and manages unique, user-selected user handles on Frequency.
- **User Key Retrieval and Management:** Accesses and securely manages user cryptographic keys.


#### 2. Universal Social Graph Service

The Graph Service enables easy interaction with social graphs on Frequency.
Each graph connection can be private or public and can be unidirectional (a follow) or bidirectional (mutually opted-in friend connection).

[Social Graph Service Docs](https://projectlibertylabs.github.io/gateway/Build/GraphService/GraphService.html)

##### Features:

- **Fetch User Graph:** Retrieves a user's social connections and relationships.
- **Update Delegated User Graphs:** Modifies social graphs on behalf of users with their permission.
- **Watch Graphs for External Updates:** Monitors changes in the Frequency Ecosystem to keep user data up to date in your application.

#### 3. Content Publishing Service

The Content Publishing Service enables the creation of new content-related activities on Frequency.
Content metadata is either published to Frequency or linked to content metadata in IPFS.
User-generated content can be stored using IPFS or other systems.

[Content Publishing Service Docs](https://projectlibertylabs.github.io/gateway/Build/ContentPublishing/ContentPublishing.html)

##### Features:

- **Create Posts to Publicly Broadcast:** Publishes links to content metadata to the chain.
- **Create Replies to Posts:** Facilitates conversations by allowing users to publish responses to user-generated content.
- **Create Reactions to Posts:** Enables users to react to user-generated content.
- **Create Updates to Existing Content:** Modifies or enhances previously published user-generated content.
- **Request Deletion of Content:** Manages the content lifecycle by publishing lists of content identifiers that the Frequency Ecosystem should delete.
- **Store and Attach Media with IPFS:** Allows Provider to utilize InterPlanetary File System (IPFS) links for decentralized media storage.

#### 4. Content Watcher Service

The Content Watcher Service helps your application process content from the Frequency Ecosystem by registering webhooks that are triggered when relevant activity is found on Frequency.

[Content Watcher Service Docs](https://projectlibertylabs.github.io/gateway/Build/ContentWatcher/ContentWatcher.html)

##### Features:

- **Parse and Validate Frequency Content:** Ensures content is well formed and complies with network standards.
- **Filterable Webhooks:** Receive notifications based on specific filters.
- **Scanning Control:** Manage how and when the service scans Frequency.

**[Start Using Frequency Developer Gateway](https://projectlibertylabs.github.io/gateway/)**
