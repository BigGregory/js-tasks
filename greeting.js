/**
 * Greets a user by name, or with a general greeting if no name is provided.
 * @param {string} [userName]
 */
export function greet(userName) {
  console.log(userName ? `Hello, ${userName}!` : 'Hello, stranger!');
}
