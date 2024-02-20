# One-Time Delegation

Some actions are sensitive and may require direct user approval via the user's signature.
These actions may still be delegated and the token or Capacity cost of that action paid for by another.
Most of these actions are user account centric instead of user activity centric like the continuous delegation.
Examples include changes to Handles, addition or removal of Control Keys, and updates to delegations.
Developers of Schemas may also indicate that a Stateful Storage item requires a one-time signature instead of a continuous delegation.

While each one-time approval signature may be processed and secured from replay attacks in different ways depending on the action, the signature has two primary requirements: The data that expresses the action and a mortality window.

The required act of signing is designed to ensure that the user is aware of the details of the action.
An example is the act of forming a delegation.
The delegation must be agreed to by the user, and this agreement is captured in the form of a signature over a payload containing the Provider’s identifier as well as the specifics of the delegation permissions.

The mortality window ensures that a signature is valid only for a specific time period, and will be rejected after a certain block number.
Thus, the user may be certain that an action either has or has not happened after the end of the mortality window, and there is no risk of an old signature being acted on at a later time.
Frequency sets a maximum value for the mortality window of approximately 30 minutes.
