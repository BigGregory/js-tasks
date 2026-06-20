# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running files

Each file is self-contained and executable directly:

```bash
node <filename>.js       # run a JS task
npx tsx <filename>.ts    # run a TS task
```

There is no build step, test runner, or lint config.

## What this repo is

A collection of standalone live-coding exercises, each in its own file. Every file contains the problem statement as a JSDoc comment at the top, the implementation, and inline test calls via `console.log`.

## Conventions

- Problem statement lives in the JSDoc block at the top of the file.
- Output is verified by `console.log` calls at the bottom — no test framework.
- TypeScript files use `tsx` to run directly without compilation.
- Runtime typeguards use `throw new TypeError(...)` directly (not wrapped in try/catch).
