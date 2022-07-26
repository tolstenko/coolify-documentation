# Rust
Base docker image: [rust:latest](https://hub.docker.com/_/rust)

Rust build pack leverages `cargo-chef` to create a cache layer. The following builds will be significantly faster after the first build is successfully done.