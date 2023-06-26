## secondTest file systam


#### 1. What is the difference between fs.writeFile() and fs.appendFile() functions in Node.js?
```
The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:
data overwrite kr detti h

The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:
DATA ke aage data content krti he


```
#### 2. How can you recursively create directories using the fs module?
```sql
-- copy that but smj aa gya 
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
 
```

#### 3. Write a Node.js program to create a new directory and then create a new file within that directory
```sql

try {
  const folder  = "newfolder"
  const file = "newfile"
fs.mkdirSync(folder)
console.log("folder creat success");
fs.open(path.join(folder ,file) ,"w",(err)=>{
  if(err){
    console.log(err);
  }else{
    console.log("successfully creat file");

  }
})
} catch (error) {
  console.log(error);
}


```

#### 4. Write a Node.js program to check if a file exists, and if it does, display its size and last modified date
```sql
const fs = require("fs");

try {
    const stats = fs.statSync("input.txt");
    if(stats.isFile()){
        console.log(stats.size / 1000) 
  console.log('sss',stats.mtime)
    }
  } catch (err) {
    console.error(err);
  }
```

#### 5. Write a Node.js program to list all files and directories within a given directory
```sql
const fs = require("fs");

const path = require("path");
console.log(fs.readdirSync("./fff"));
```

#### 6. What is the difference between require() and import in Node.js?
```sql

One of the major differences between require() and import() is that require() can be called from anywhere inside the program whereas import() cannot be called conditionally, it always runs at the beginning of the file.


Require is Non-lexical, it stays where they have put the file. Import is lexical, it gets sorted to the top of the file. It can be called at any time and place in the program. It canot be called conditionally, it always run in the beginning of the file.

Loading is synchronous in require 
Loading is asynchronous in import 
```

#### 7. Write difference between callbacks and promise?
```sql
promise - To manage asynchronous actions in JavaScript, promises are used
      It is an assurance that something will be done. The promise is used to keep track of whether 
      the asynchronous event has been executed or not and determines what happens after the event 
      has occurred.
It may create callback hell.	


callbacks - Callbacks are a great approach to dealing with something once another task has been 
    finished. Here, “something” refers to the execution of a function. Callbacks can be utilized 
    if wewish to run a function immediately following the return of another function.




Callbacks are functions passed as arguments into other functions to make sure mandatory variables are available within the callback-functions scope. 
 Promises are placeholder objects for data thats available in the future.

```
#### 8. Write a Node.js function that compares the contents of two directories and identifies any files that exist in one directory but not in the other.
```sql

const folder = fs.readdirSync("node")
const checkfoder= fs.readdirSync("nodejs")
exictingfile = []
for(let i =0;i<folder.length;i++){
  for(let j = 0 ;j<checkfoder.length ; j++){
  if(folder[i]  === checkfoder[j]){
    if(fs.lstatSync( path.join("nodejs" , checkfoder[j]) ).isFile()){
      exictingfile.push(checkfoder[j])
    }
  }
  }
}
console.log(exictingfile);

```
#### 9.  Question: Write a Node.js program that reads the contents of a text file, capitalizes the text, writes the modified content to a new file, prints the modified content on the console, renames the new file, and finally deletes the original file. Implement the solution using the fs module in Node.js.

Your program should perform the following steps:

Read the contents of a text file called "input.txt".
Convert the text to uppercase.
Write the modified content to a new file called "output.txt".
Print the modified content on the console.
Rename "output.txt" to "newfile.txt".
Delete the original file, "input.txt".
Implement the program in Node.js, ensuring error handling and appropriate logging of each step.
```sql

const readData = fs.readFileSync("input.txt" )  
const dataconved = readData.toString();
fs.writeFile("output.txt",dataconved,(error)=>{
  if(error){
    console.log(error);
  }else{
    console.log("data success fully writing");
  }
})

console.log(dataconved);
fs.rename("output.txt" , "newfile.txt",(error)=>{
  console.log(error);
})
try {
fs.rmSync("input.txt")
  console.log("successfuly delet");
} catch (error) {
  console.log(error);
}



```
#### 10. Print the last modified date of each file in a folder.
```sql

 
const checkfile= fs.readdirSync("nodejs")
.map(fileName => {
  return path.join("nodejs", fileName);
})
.filter(fileName => {
  return fs.lstatSync(fileName).isFile();
});

console.log(checkfile); 
for(let i = 0;i<checkfile.length;i++){

 fs.stat(checkfile[i],(err,stats)=>{
  if(err){
    console.log(err);
  }
  console.log(stats.mtime)
})

}
```