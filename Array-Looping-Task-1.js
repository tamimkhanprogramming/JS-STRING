// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']

// Solution: Given Below:

const Food_Name = ['red', 'blue', 'green', 'yellow', 'orange'];

const reverse_Food_Name = [];

for(let i = Food_Name.length-1; i>=0; i--){

    reverse_Food_Name.push(Food_Name[i]);
}

console.log(reverse_Food_Name);