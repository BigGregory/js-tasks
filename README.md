# bluebird-js

Standalone live-coding exercises in JavaScript and TypeScript — one problem per file, no build step.

## Running

```bash
node <filename>.js      # JS exercise
npx tsx <filename>.ts   # TS exercise
```

## Exercises

| File | Problem |
|------|---------|
| `greeting.js` | Greet a user by name; type guard for padded input |
| `flatten-array.js` | Recursively flatten a nested array |
| `debounce.js` | Implement a debounce higher-order function |
| `promise-all.js` | Re-implement `Promise.all` from scratch |
| `calendar-events-merge.js` | Merge overlapping calendar time intervals |
| `valid-parenthesis.js` | Remove minimum brackets to make a string valid |
| `index.ts` | Generic `getProperty` with a compile-time constraint |

## Stack

- ES modules (`"type": "module"`)
- TypeScript via [`tsx`](https://github.com/privatenumber/tsx) (no compilation step)
- Verification through `console.log` — no test framework
