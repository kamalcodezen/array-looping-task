// Write a JavaScript code to reverse the array colors without using the reverse method.

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

let newColors = [];
for (let i of colors) {
    newColors.unshift(i);
}
console.log(newColors);