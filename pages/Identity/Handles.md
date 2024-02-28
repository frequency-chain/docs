# User Handles

User Handles allow Frequency Users to select human-readable names for their MSAs, providing a user-friendly way to interact in application contexts.
Each User Handle is unique and is mapped one-to-one with a MSA.
Handles are optional, and no aspects of Frequency usage require a handle; Users may choose but are not required to create handles for their MSAs.

Frequency's User Handle system was designed to make it easy to use and integrate handles with existing user interfaces and wallet systems while remaining fully decentralized.
User Handles also provide an important usability affordance, allowing users to interact with MSAs without relying on the need to recognize a Control Key or MSA Id digits.

## Handle Creation

A User Handle has two parts: the Base (the part of the handle the user selects) and the Suffix (a numerical code assigned by Frequency).
The Handle Display is constructed by adding a "." character to the Base, followed by the decimal representation of the Suffix.
For example, if a user chooses the Base "AliceInWonderland", her Handle Display might be AliceInWonderland.356, with the Suffix 356 assigned by Frequency.
This allows users the ability to claim the Base they prefer without competing with one another for scarce resources, while keeping the Handle Display unique and non-conflicting.

The User Handle Base consists of UTF-8 characters (with certain restrictions), allowing for the full range of languages and character sets to be represented.
The Base chosen by the user is additionally subject to a canonicalization algorithm that removes capitalization as well as any homoglyphs (characters that look the same or similar but have different Unicode codepoints) to a single canonical form.
This does not affect the Handle Display (allowing users a high level of expressiveness within applications), while ensuring that the same Suffix is not assigned to two Handles that could be deceptively similar.
In the above example, if "AliceInWonderland.356" has been allocated, a user requesting "AliceinWonder1and" (or any similar variations) would never get the "356" Suffix.
This is intended to prevent users from attempting to impersonate other identities and ensures all Handles can be visually distinguished.

The suffix-generation algorithm serves to make the system resistant to namespace exhaustion and avoid race conditions.
It also uses a pseudorandom seed to permute the order in which Suffixes for a given Handle Base will be assigned in order to discourage users from attempting to acquire a specific Suffix for vanity purposes.
The range of Suffixes that will be assigned for a given Handle Base is determined by the Frequency Runtime parameters set by governance.
At inception, Frequency Governance instituted two-digit Suffixes ranging from 10 to 99.
As this namespace becomes more scarce for popular Handle Bases over time, the configuration can be changed to generate three-digit Suffixes, and so on.

## Handle Retirement

While a user can only have one Handle at any point in time, Handles can be changed by retiring the old Handle and then creating a new one.

After a Handle is released, that specific unique combination of Handle Base and Handle Suffix cannot be reused.
This is intended to prevent confusion that might otherwise arise in a social networking context if the same Handle was used with multiple identities over time.
