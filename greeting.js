// Accepts padded strings like "  Sam " — trimmed before use.
export function isTrimmedNonEmpty(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

// Greets a user by name, or with a general greeting if no name is provided.
export function greet(userName) {
  const name = isTrimmedNonEmpty(userName) ? userName.trim() : null;
  console.log(name ? `Hello, ${name}!` : 'Hello, stranger!');
}
