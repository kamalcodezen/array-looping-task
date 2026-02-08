// Given an array of student objects, print each student’s name and marks.

const student = [
    { name: "John", marks: 85 },
    { name: "Alice", marks: 90 }
];

for (let i of student) {
    console.log(`${i["name"]} scored ${i["marks"]}`);
}


/* output :> John scored 85
            Alice scored 90   */