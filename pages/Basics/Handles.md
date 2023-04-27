# Handles

## What are User Handles?
User Handles allow Frequency Users to select names for themselves in the Frequency Nework.  The User Handle system enforces guidelines to ensure that handles are user-friendly and easy to remember while preventing misuse and abuse. The User Handle has two parts: the Base (the part of the handle the User selects for themself) followed by a dot and then the Suffix (a numerical code assigned by Frequency.  So in the case where Alice chose the Base name AliceInWonderland, her User Handle might read AliceInWonderland.356 with the suffix 356 assigned by Frequency.  Each User Handle is unique, and is mapped 1:1 with a ```MessageSourceAccount``` (MSA). Users are not required to create handles for their MSAs.  The range of suffixes allowed for a given handle as well as the time period a handle must be retired before it is reused will be determined by governance.  Registering a time period before expiration (a specific number of blocks determined by governance)prevents replay attacks on the chain and implies a User may not change or retire their User Handle until the registration period retires.

## User Handle Goals
User handles are designed to meet the following goals:

* Support user ability to choose any valid handle and select a suffix from a set of options allowed by the chain.
* Ensure handles and suffixes are unique and non-conflicting.
* Make the system resistant to namespace exhaustion, homoglyphs and race conditions.
* Make the system easy to use and integrate with existing UI and wallet systems.

## User Handle Requirements
* User handles must be unique and each msa can only be be mapped to one handle.
* User handles must be between 2 and 32 characters (32b limit) long.
* User handles cannot contain the following substrings (or homoglyphs): @, #, :, ., ```
* User handles cannot be (@admin, @everyone, @all) *blocklist of handles we reserve
* Suffixes are u32 limited to a range defined by governance
* Suffix will be randomly constrained.
* Homoglyph versions of handles should still resolve to the same MSA.
* After a handle is released, it cannot be reused by a time block set by governance.

## Duplicate Handles
In the extremely unlikely scenario that two users attempt to claim the same handle and suffix combination within the same block, the transaction will fail to create the MSA and the app will recieve a failure for the transaction rather than the expected MsaHandleCreated event.

## Frequency Functions for User Handles

* Translation: Given a self-defined User Handle and a seed, generate a suffix for the handle. The suffix will be created using the current seed and suffix range as well as a PRNG (pseudo-random number generator) helper function to generate a sequence of suffixes)
* Verification: Given a 

## Claiming a User Handle (Move to How To Section? Use Code snippets rather than directions from the demo?)
A User Handle may be claimed using the following steps:

* Open the associated MSA for the given user.
* Go to the Handles Pallet and choose Claim Handle.
* Select the Schnorrkel Ristretto signature.
* Enter the desired User Handle. (in Pascal Case?)
* Enter the Expiration Block Number (i.e. the number of blocks before expiration as determined by governance.)   
* Copy the Base Handle and Expiration Block Number.  
* Move to the sign and verify function and paste the Base Handle followed by a space followed by the Expiration Block Number.
* Select Sign message.
* Copy the signature and paste it in the Signature box and submit the transaction.

## Verifying a User Handle has been Claimed
* Select the handles pallet.
* Select msaid ```ToDisplayName```.
* Execute the query.
* Verify that the MSA ID matches the User Handle and appropriate Expiration Block Number.

## Retiring a User Handle
* Note that a User Handle may not be retired until it has reached its Expiration Block Number.
* Go to the appropriate User Account and select Handles.
* Select  Retire Handle.
* Select Submit Transaction.
* Select Sign and Submit.
* The User Handle should now be retired.

## Verifying a User Handle has been Retired
* Go to Chain state and select handles.
* Select msaid ```ToDisplayName```
* Execute the query.
* The selected MSA ID should no longer have a User Handle or Expiration Block Number listed.
