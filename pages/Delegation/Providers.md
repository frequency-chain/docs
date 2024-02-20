# Providers

Providers are the on-chain representation of applications and services directly interacting with Frequency.
Providers must have their own MSAs, but a user may delegate to one or more Providers who may then submit data transactions on that user's behalf via delegated permissions.
Providers can use the Capacity economic system as an alternative to FRQCY Tokens to pay the transaction fees of the users that delegate to them.

## Provider Registration
Any entity that controls an MSA and wishes to be a Provider may follow the procedure to do so.
Providers must identify themselves by name (distinct from the optional User Handle for their MSA) and go through a registration process.

On Testnet, any MSA can register to be a Provider.
On Mainnet, any MSA can submit a request to be a Provider.
Currently, the request must be approved by a member of the Frequency Council.
Other approval mechanisms may be made available in the future to approve a Provider.

## No Provider De-registration

Once an MSA is registered as a Provider, the registration is permanent, and the MSA itself cannot be retired, in order to preserve the ability for applications to verify delegation of past transactions referencing off-chain data.
