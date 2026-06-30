# Project Function Summary

A collection of standalone live-coding exercises. Each file is self-contained and runnable directly (`node <file>.js` / `npx tsx <file>.ts`).

---

## greeting.js

### `greet(userName)`
Logs a personalised greeting to the console. If `userName` is provided it prints `"Hello, <name>!"`, otherwise falls back to `"Hello, stranger!"`. Exported as a named ES module export and consumed by `app.js`.

---

## app.js

Entry point — imports `greet` from `greeting.js` and calls it twice: once with `'Alice'` and once with no argument, exercising both branches of the function.

---

## calendar-events-merge.js

### `mergeCalendarEvents(events)`
Merges a list of `[start, end]` time intervals (integers in 24-hour format, e.g. `930` = 9:30 AM) into the minimal set of non-overlapping busy windows.

**Algorithm (O(n log n)):**
1. Sort intervals by start time.
2. Walk the sorted list, extending the current window when the next interval overlaps or is adjacent (`start <= currentEnd`).
3. Push a new window whenever a gap is found.

Returns the merged intervals sorted by start time, or `[]` for empty input.

---

## debounce.js

### `debounced(fn, delay)`
Higher-order function that wraps `fn` and returns a debounced version. The wrapped function resets a `setTimeout` on every call; `fn` only executes after `delay` milliseconds of silence (no new calls). Uses `fn.apply(this, args)` so `this` and all arguments are forwarded correctly.

### `handleUserInput(val)`
Demo callback used to show debouncing in action — logs `"Searching: <val>"`. Wrapped as `debouncedSearch` with a 3 000 ms delay; only the last call (`'Steve'`) will fire.

---

## flatten-array.js

### `flattenArray(arr)`
Recursively flattens an arbitrarily deep nested array into a single flat array. Iterates each element: if the element is an array it recurses and spreads the result; otherwise it pushes the value directly. Returns the flattened array without mutating the input.

---

## index.ts

### `getProperty<Type, Key extends keyof Type>(obj, key)`
TypeScript generic utility that retrieves `obj[key]` with full compile-time type safety. The constraint `Key extends keyof Type` ensures only valid keys of the object type are accepted, and the return type is inferred as `Type[Key]`. The test call `getProperty(x, 'c')` intentionally triggers a type error to demonstrate the constraint.

---

## promise-all.js

### `promiseAll(promises)`
A manual re-implementation of the native `Promise.all`. Wraps all input promises, collects resolved values at their original indices, and resolves the outer promise once every one has settled. Rejects immediately on the first rejection (fail-fast). Guards against non-array input with a `TypeError`. Handles the empty-array edge case by resolving with `[]` synchronously.

---

## valid-parenthesis.js

### `minRemoveToMakeValidParenthesis(str)`
Two-pass linear algorithm that removes the minimum number of parentheses to make a string valid.

- **Pass 1 (left → right):** track unmatched `(` with a counter (`open`). Keep every `)` that has a matching `(`; skip the rest.
- **Pass 2 (right → left):** remove the remaining unmatched `(` characters (counted by `open` from pass 1).

Returns the cleaned string via `Array.toReversed().join('')`. Examples: `'lee(t(c)o)de('` → `'lee(t(c)o)de'`, `'))((` → `''`.
