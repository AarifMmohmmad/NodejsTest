## secondTest file systam


#### 1. What is the difference between fs.writeFile() and fs.appendFile() functions in Node.js?
```
writefile file ko write krta he or data add krta he uske sath hi data overwrites kr deta he 

appendfile file ko write krta he or data add krta he jo data add kiya he vhe data ko content krta he 

```
#### 2. How can you recursively create directories using the fs module?
```

```

#### 3. Write a Node.js program to create a new directory and then create a new file within that directory
```
```

#### 4. Write a Node.js program to check if a file exists, and if it does, display its size and last modified date
```
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
```
const fs = require("fs");

const path = require("path");
console.log(fs.readdirSync("./fff"));
```

#### 6. What is the difference between require() and import in Node.js?
```

One of the major differences between require() and import() is that require() can be called from anywhere inside the program whereas import() cannot be called conditionally, it always runs at the beginning of the file.

```

#### 7. Write difference between callbacks and promise?
```
Callbacks are functions passed as arguments into other functions to make sure mandatory variables are available within the callback-function's scope. 
 Promises are placeholder objects for data that's available in the future.

```
#### 8. Write a Node.js function that compares the contents of two directories and identifies any files that exist in one directory but not in the other.
```

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
```
```
#### 10. Print the last modified date of each file in a folder.
```


```