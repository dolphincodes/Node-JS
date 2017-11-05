var fs=require("fs");   //creating file structure object
fs.readFile('a.txt',function(err,data){  //asynchronously reading data from a file 
  if (err) return console.error(err);
  console.log(data.toString());
});

console.log('ended');
