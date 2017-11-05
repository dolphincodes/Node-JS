var fs=require("fs");         //creating file structure object
var data=fs.readFileSync('a.txt');  //synchronously reading data from a file
console.log(data.toString());
console.log('ended');
