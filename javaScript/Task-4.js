// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

const statement = 'I am a hard working person';

let newStr = statement.split(" ");

let revStr = "";
for (let i of newStr) {
    revStr = i + " " + revStr;
}
console.log(revStr.trim());