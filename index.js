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

for(let i = 0 ; i <=12000000;i++){
console.log(i);

}