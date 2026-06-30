# CLAUDE.md

Standalone live-coding exercises — one problem per file, no build step, no test runner, no lint config.

## Commands

```bash
node <filename>.js      # run a JS exercise
npx tsx <filename>.ts   # run a TS exercise
```

## Conventions

- File names: kebab-case
- Problem statement in a JSDoc block at the top of each file
- Verification via `console.log` calls at the bottom — no test framework
- ES modules throughout (`"type": "module"` in package.json); always named exports, never default exports
- Numbered inline comments (`// 1.`, `// 2.`) mark major algorithm phases — the only comments allowed in implementation bodies
- Update `summarize.md` when adding a new exercise

## Architecture

- All exercises sit flat at the repo root — no subdirectory grouping
- `index.ts` intentionally has a type error to demonstrate generic constraints — do not fix it
- `summarize.md` is the function-level reference index for all exercises
