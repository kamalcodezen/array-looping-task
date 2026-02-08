// Use a for...of loop to concatenate all the elements of an array into a single string.


let numbers = ['Tom', 'Tim', 'Tin', 'Tik'];

let numStr = "";

for (let i of numbers) {
    numStr += i;
}

console.log(numStr);