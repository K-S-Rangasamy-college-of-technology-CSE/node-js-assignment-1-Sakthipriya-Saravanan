const fs = require('fs');
const data = fs.readFileSync('example.txt', 'utf8');
console.log('File content:', data);
console.log('This line will run AFTER the file has been read');



const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

console.log('This line runs IMMEDIATELY, before file is read');
