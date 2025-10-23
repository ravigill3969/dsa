/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let res = new Array(temperatures.length).fill(0);
  let stack = [0];

  for (let i = 1; i < temperatures.length; i++) {

    while(stack.length > 0 && temperatures[i] > temperatures[stack.length - 1]){
      let index = stack.pop()
      res[index] = i - index
    }
    
    stack.push(i)
   

  }

  return res
};

let res = dailyTemperatures((temperatures = [73, 74, 75, 71, 69, 72, 76, 73]));
console.log(res);
