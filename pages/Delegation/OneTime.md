# One-Time Delegation

Some actions are sensitive and may require direct user approval.
These actions may still be delegated and the token or capacity cost of that action paid for by a Provider.
Most of these actions are user account-centric instead of user activity-centric like the continuous delegation.
Some example actions are Handle changes, adding Control Keys, and creation of delegations.
Developers of Schemas may also indicate that a Stateful Storage requires a one-time signature instead of a continuous delegation.

While each one-time approval signature may be processed and secured from replay attacks in different ways depending on the action, the signature has two primary requirements: The data that expresses the action and a mortality.

The data expression of the action being signed means that the user is aware of the details of the action.
An example is the act of forming a delegation.
The delegation must be agreed to by the user and this agreement is captured in the form of the signature over the data containing the Provider’s identifier as well as the specifics of the delegation permissions.

The mortality time bounds the signature such that the signature is rejected after a certain block.
Thus, the user may be certain that the action either has or has not happened after the end of the mortality and there is no risk of an old signature being acted on.
Frequency also sets a maximum for the mortality of less than approximately 30 minutes.
