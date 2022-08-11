# Frequency Documentation

Technical documentation for the Frequency parachain. 
The current documentation can be viewed in its compiled form at https://docs.frequency.xyz.
Alternatively, the latest iteration of the docs [can be viewed 
non-formatted here](https://github.com/LibertyDSNP/frequency-docs/tree/main/pages).

For more information about Frequency, visit [frequency.xyz](https://www.frequency.xyz) 
or [Frequency on GitHub](https://github.com/LibertyDSNP/frequency)

## Install

To build the generator locally, install [mdBook](https://github.com/rust-lang/mdBook.git) 
and [link checker](https://github.com/Michael-F-Bryan/mdbook-linkcheck). The link checker will run during build process and throw warnings for any broken internal 
or external links.
 
``` bash
cargo install mdbook
cargo install mdbook-linkcheck
npm install
```
## Run

### (Option 1) Hot Reload

To run the doc generator locally and also actively build after each change 
(a.k.a hot reload), use the following command:

``` bash
npm run serve
```

Once the local server is running, the site will automatically open in the browser. 
A live-reloading preview of the doc can also be viewed at <http://localhost:3000>.

### (Option 2) Static Rendering
To run the doc generator locally and preview the formatted docs from local files, use the following:

``` bash
npm run build
```

## Lint

```sh
npm run lint
```

## Release

The CI will automatically deploy what's merged into `main`.

## Tools and Frameworks

* [mdBook](https://rust-lang.github.io/mdBook/) — create books with Markdown


