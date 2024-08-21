#!/usr/bin/env bash

set -ex

# setup environment
sh -c "$(curl -sSfL https://release.wickandbergamot.org/edge/install)"
PATH="$HOME/.local/share/solana/install/active_release/bin:$PATH"
solana --version
