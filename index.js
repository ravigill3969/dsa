/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  let s = tokens;

  for (let i = 0; i < tokens.length; i++) {
    console.log(stack)
    if (s[i] === "+") {
      let add = stack.pop() + stack.pop();
      stack.push(add);
    } else if (s[i] === "/") {
      let n2 = stack.pop();
      let n1 = stack.pop();

      let a = Math.trunc(n1 / n2);
      stack.push(a);
    } else if (s[i] === "*") {
      let n2 = stack.pop();
      let n1 = stack.pop();

      let p = n2 * n1;
      stack.push(p);
    } else if (s[i] === "-") {
      let n2 = stack.pop();
      let n1 = stack.pop();

      let p = n2 - n1;
      stack.push(p);
    } else {
      stack.push(Number(s[i]));
    }
  }

  return stack[0];
};

let res = evalRPN((tokens = ["4","13","5","/","+"]));
console.log(res);
