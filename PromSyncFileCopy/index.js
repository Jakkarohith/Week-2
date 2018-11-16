const fr = require('fs');
const read=require('readline-sync');
console.log("1.file1.txt");
console.log("2.file2.txt");
console.log("3.file3.txt");
console.log("3.file4.txt");
console.log("3.file5.txt");
console.log("3.file6.txt");
console.log("3.file7.txt");
let input=read.question('Enter the number of files \n');
console.log("Enter the File names");
let filearr=[];
for(let i=0;i<input;i++)
{
filearr[i]=read.question();
if(!(filearr[i]=='file1.txt'||filearr[i]=='file2.txt'||filearr[i]=='file3.txt'||filearr[i]=='file4.txt'||filearr[i]=='file5.txt'||filearr[i]=='file6.txt'||filearr[i]=='file7.txt'))
{
throw new Error("Enter valid file name again")    
}
}
filearr.forEach(function(filecopy){
    copydataSync('result.txt',filecopy);
});
function copydataSync(result,file)
{
    let pr = new Promise((resolve,reject)=>
        {
           let d=fr.readFileSync(file)                
           if(err){
                    reject(err);
                }
                    resolve(d.toString());
        });
        pr.then((filedata)=>{
            fr.appendFileSync(result,filedata+"\n");
         pr.catch((error)=>{
            console.log(error);
        });
    });    
} 