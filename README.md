# Frequency Documentation

Technical documentation for the Frequency parachain.
The current documentation can be viewed in its compiled form at TBD.
Alternatively, the latest iteration of the docs can be viewed non-formatted [here](https://github.com/LibertyDSNP/frequency-docs/tree/main/pages).
For more information about Frequency, visit [frequency.xyz](https://www.frequency.xyz) or [Frequency on GitHub](https://github.com/LibertyDSNP/frequency)

## Releases

1. Merge changes into `main`.
2. CI automatically deploys `main`.

## Running Locally

To build the generator locally, install [mdBook](https://github.com/rust-lang/mdBook.git) and [link checker](https://github.com/Michael-F-Bryan/mdbook-linkcheck). The link checker will run during build process and throw warnings for any broken internal or external links.

``` bash
cargo install mdbook
cargo install mdbook-linkcheck
```

To run the doc generator locally and preview the formatted doc website, use the following commands:

``` bash
npm install
npm run build
```

To run the doc generator locally and also actively build after each change, use the following command:

``` bash
npm run serve
```

Once the local server is running, the site will automatically open in the browser. A live-reloading preview of the doc can also be viewed at <http://localhost:3000>.

## Tools and frameworks used in this repo

* [mdBook](https://rust-lang.github.io/mdBook/)
