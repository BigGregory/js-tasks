const example1 = 'lee(t(c)o)de('; // Expected output: "lee(t(c)o)de"
const example2 = 'a)b(c)d'; // Expected Output: "ab(c)d"
const example3 = '))(('; // Expected output: ""

function minRemoveToMakeValidParenthesis(str) {
  let open = 0;
  let firstPass = [];

  // Pass 1: Remove invalid ")"
  for (const char of str) {
    if (char === '(') {
      open++;
      firstPass.push(char);
    } else if (char === ')') {
      if (open > 0) {
        open--;
        firstPass.push(char);
      }
      // else skip invalid ")"
    } else {
      firstPass.push(char);
    }
  }
  console.log(firstPass);
  console.log(open);

  // Pass 2: Remove extra "("
  let result = [];
  let openToRemove = open;

  for (let i = firstPass.length - 1; i >= 0; i--) {
    if (firstPass[i] === '(' && openToRemove > 0) {
      openToRemove--;
      continue; // skip it
    }
    result.push(firstPass[i]);
  }

  return result.toReversed().join('');
}

console.log(minRemoveToMakeValidParenthesis(example1));
