console.log(10 && 20);
console.log((19 < 29) + 20);


const fs = require("fs")

const folderName = 'nodejs';

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }else{
 console.log("folder already exict")
  }
} catch (err) {
  console.error(err);
}

// const folders = ["nodejs1 " ,"nodejs2","nodejs3
// nodejs4
// nodejs5"]



let num = "234567898989"

START=num.slice(0,3)
END = num.slice(7,10)
console.log(START.padEnd(7,"*").concat(END));

