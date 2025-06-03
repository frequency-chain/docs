# Frequency Documentation

Technical documentation for the Frequency parachain.
The current documentation can be viewed in its compiled form at https://docs.frequency.xyz.
Alternatively, the latest iteration of the docs [can be viewed
non-formatted here](https://github.com/frequency-chain/docs/tree/main/pages).

For more information about Frequency, visit [frequency.xyz](https://www.frequency.xyz)
or [Frequency on GitHub](https://github.com/frequency-chain/frequency)

## Install

To build the generator locally, install [mdBook](https://github.com/rust-lang/mdBook.git).

```bash
cargo install mdbook@0.4.49
npm install
```

### Local Link Checking

Use [`mdbook linkcheck`](https://github.com/Michael-F-Bryan/mdbook-linkcheck).
The link checker will run during build process and throw warnings for any broken internal or external links.
Not run in CI due to a high number of false negatives.

## Run

### (Option 1) Active Build and Serve via HTTP

To run the doc generator locally, actively build after each change and serve them
via HTTP use the following command:

```bash
npm run serve
```

Once the local server is running, the site will automatically open
in the browser at <http://localhost:3000>. Note, it will not automatically refresh
browser page after each change.

### (Option 2) Manual Build

To run the doc generator locally and preview the formatted docs from local files, use the following:

```bash
npm run build
```

## Lint

```sh
npm run lint
```

## Release

The CI will automatically deploy what's merged into `main`.

## Tools and Frameworks

- [mdBook](https://rust-lang.github.io/mdBook/) — create books with Markdown
