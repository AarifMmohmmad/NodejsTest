
const fs = require("fs")
const path = require("path")
// const folderName = 'nodejs';

// try {
//   if (!fs.existsSync(folderName)) {
//     fs.mkdirSync(folderName);
//   }else{
//  console.log("folder already exict")
//   }
// } catch (err) {
//   console.error(err);
// }

// const folders = ["nodejs1 " ,"nodejs2","nodejs3
// nodejs4
// nodejs5"]



// let num = "234567898989"

// START=num.slice(0,3)
// END = num.slice(7,10)
// console.log(START.padEnd(7,"*").concat(END));

// try {
//   const folder  = "rustallala"
//   const file = "khan"
// fs.mkdirSync(folder)
// console.log("folder creat success");
// fs.open(path.join(folder ,file) ,"w",(err)=>{
//   if(err){
//     console.log(err);
//   }else{
//     console.log("successfully creat file");

//   }
// })
// } catch (error) {
//   console.log(error);
// }


const dirArr = ["users", "data", "getData", "hello.html"];
let currentfolderName = "Instagram";
for (let i = 0; i <= dirArr.length; i++) {
  try{
    fs.mkdirSync(currentfolderName);
    currentfolderName = path.join(currentfolderName, dirArr[i]);
  } catch(er) { 
    console.log(er)
  }
} 
 