/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let numStack = [];
  let strStack = [];

  let curStr = "";
  let num = 0;

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (!isNaN(Number(s[i]))) {
      num = num * 10 + Number(s[i]);
    } else if (s[i] === "[") {
      numStack.push(num);
      strStack.push(curStr);

      num = 0;
      curStr = "";
    } else if (s[i] === "]") {
      let repeatTimes = numStack.pop();
      let prevStr = strStack.pop();
      curStr = prevStr + curStr.repeat(repeatTimes);
    } else {
      curStr = curStr + ch;
    }
  }

  console.log(curStr);
};

let res = decodeString((s = "3[a]2[bc]"));
console.log(res);
