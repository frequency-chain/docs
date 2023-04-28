# Manage Stateful Storage
This feature consists of one (or more) pallet(s) in runtime of a Substrate based blockchain used in all environments including production.

## Modes of Storage
- **Itemized**: In this mode we are storing each entity of that schemaId as an item in a blob with a
maximum size of `MAX_ITEMIZED_BLOB_SIZE`.
This is recommended for entities which have relatively small size compared to
`MAX_ITEMIZED_BLOB_SIZE` and there are more than a few of them.
- **Paginated**: In this mode we are storing each entity individually and inside a separate page.
This mode is recommended for entities that are relatively large and there are a few of them.

![image](https://user-images.githubusercontent.com/9152501/213291600-98229ee4-6358-4e0e-abe2-d6da9abe179e.png)

The rationale behind separating these modes is based on two reasons:
- _Performance_: **Itemized** mode always needs 1 on-chain DB_READ and 1 DB_WRITE but **Paginated**
mode might be done with only 1 DB_WRITE.
- _Composability_: **Itemized** mode allows better composability due to on-chain read requirement
and smaller size of each.

## Actions
1. **Append Item**
    - _Modes_: Itemized
    - _input_: `SchemaId` and serialized data as `vec<u8>`
    - _Purpose_: Appends a new item to existing blob
1. **Remove Item**
    - _Modes_: Itemized
    - _input_: `SchemaId` and Index of item in blob
    - _Purpose_: Removes an existing item from array
1. **Upsert**
    - _Modes_: Paginated
    - _input_: `SchemaId` and `PageNumber` and serialized data as `vec<u8>`
    - _Purpose_: Creates or updates an item
1. **RemovePage**
    - _Modes_: Paginated
    - _input_: `SchemaId` and `PageNumber`
    - _Purpose_: Removes a Page

## Pre Checks
1. Checking schema (id and structure) against submitted data
2. Checking schema permission and grants
3. Checking Hash of previous state to avoid data races

## Using Itemized Storage for keys
Requires a signature from valid control keys to ensure that requests have End User approval. Some schemas require signatures.

