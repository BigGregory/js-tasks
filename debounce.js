/**
 * Debounce rule:
 * Run the function only once, after the last call, and only if no new calls happen during the delay
 */
function debounced(fn, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function handleUserInput(val) {
  console.log(`Searching: ${val}`);
}

const debouncedSearch = debounced(handleUserInput, 3000);

debouncedSearch('S');
debouncedSearch('St');
debouncedSearch('Ste');
debouncedSearch('Stev');
debouncedSearch('Steve');
