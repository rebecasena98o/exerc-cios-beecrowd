const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim();
const n = parseInt(input, 10);
const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];
console.log(months[n-1]);
