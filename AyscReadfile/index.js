var read=require('readline-sync');
var fr = require("fs");
console.log("1.file1.txt");
console.log("2.file2.txt");
console.log("3.file3.txt");
var input=read.question('Enter the file name with extension\n');
if(input=='file1.txt'||input=='file2.txt'||input=='file3.txt')
{
    fr.readFile(input, function (err, data) {
        if (err) return console.error(err);
        console.log(data.toString());
     });
     console.log("This statement will be executed in middle of file execution\n\n");}
else{
    console.log("Wrong input");
}
