# Handles

## What are User Handles?
User Handles allow Frequency Users to select names for themselves in the Frequency Network. The User Handle has two parts: the Base (the part of the handle the User selects) and then the Suffix (a numerical code assigned by Frequency.)  So if user Alice chose the Base "AliceInWonderland", the User Handle format would be AliceInWonderland.356 with the suffix 356 assigned by Frequency.  

Each User Handle is unique, and is mapped 1:1 with a ```MessageSourceAccount``` (MSA). Users may choose to, but are not required to create handles for their MSAs.  The range of suffixes allowed for a given handle as well as the time period a handle must be retired before it is reused will be determined by governance.  Registering a time period before expiration (a specific number of blocks determined by governance) prevents replay attacks on the chain and implies a User may not change or retire their User Handle until the registration period retires.

## User Handle Goals
User handles are designed to meet the following goals:

* Support user ability to choose any valid handle and select a suffix from a set of options allowed by the chain.
* Ensure handles and suffixes are unique and non-conflicting.
* Make the system resistant to namespace exhaustion, homoglyphs and race conditions.
* Make the system easy to use and integrate with existing UI and wallet systems.

## User Handle Requirements
* User handles must be unique and each MSA can only be mapped to one handle.
* User handles must be between 2 and 32 characters (32-byte limit) long.
* User handles cannot contain the following substrings (or homoglyphs): @, #, :, ., ```
* User handles cannot be (@admin, @everyone, @all) as these are reserved by Frequency.
* Suffixes are u32 limited to a range defined by governance.
* Suffix will be randomly constrained.
* Homoglyph versions of handles should resolve to the same MSA.
* After a handle is released, it cannot be reused during a time window set by governance.

## Duplicate Handles
In the extremely unlikely scenario that two users attempt to claim the same handle and suffix combination within the same block, the transaction will fail to create the MSA and the app will receive a failure for the transaction rather than the expected MsaHandleCreated event.

## Frequency Functions for User Handles

* Translation: Given a self-defined User Handle and a seed, it will generate a suffix for the handle. The suffix will be created using the current seed and suffix range as well as a PRNG (pseudo-random number generator) helper function to generate a sequence of suffixes.
* Verification: Verify that a User Handle is valid and follows the Handle guidelines while checking for homoglyphs (characters that look very much alike and may be easily confused such as an uppercase O and the number 0).

## Suffix Generation
The suffix generation algorithm takes a seed and generates a sequence of suffixes. The sequence is generated lazily, meaning the algorithm generates a new suffix only when the previous suffix has been used. This will prevent the generation of a large number of suffixes that may not be used. Additionally, the governance window is minimal in size, (10k). This will prevent the generation of a large number of suffixes that may not be used, while keeping the performance within acceptable limits.


