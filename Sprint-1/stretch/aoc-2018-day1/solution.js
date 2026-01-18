const fs = require('fs');
const filePath = 'input.txt';
const content = fs.readFileSync(filePath, 'utf-8');
const lines = content.split(/\r?\n/);

let sum=0;
for(const line of lines){
    sum+=Number(line);
}

console.log(sum);