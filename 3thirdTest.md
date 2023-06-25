#### Question 1. Ek folder bnana hai Nodejs 
```sql

fs.mkdir("Nodejs",(errr)=>{
  if(errr){
  console.log("errrr",errr);
  }else{
  console.log("success");
  }
})
```
#### Question 2.Nodejs folder me ab 5 new folder bnane hai 
nodejs1
nodejs2
nodejs3
nodejs4
nodejs5

```sql
  let folder = ["nodejs1","nodejs2","nodejs3","nodejs4","nodejs5"]
  for(let i = 0;i< folder.length ; i++){

      fs.mkdir(path.join("Nodejs", folder[i]) ,(err)=>{
          if(err){
              console.log(err);
          }else{
              console.log("success");
          }
      })

  }
```

#### Question 3.Nodejs folder ke andar jitne b folders hai unhe print krvana hai 
```sql
 console.log(fs.readdirSync("Nodejs"))

```
#### Question 4.Ab  5 files aur bnani hai Nodejs folder ke andar 
file1.html
file2.html
file3.html 
file4.html
file5.html 
```sql  
let filess = ["file1.html","file2.html", "file3.html" ,"file4.html","file5.html", ]

for(let i = 0 ; i<filess.length;i++){
    fs.open(path.join("Nodejs", filess[i]) ,'w',(err)=>{
        if(err) {
          console.log(err); 
        }else if(!fs.existsSync(filess[i])){
        console.log("already creaat");
    }else{
        console.log("success");
    }
    })
}
```
#### Question 5.Ab Nodejs folder ke andar jitne b folders and files hain unhe print krvana hai 
```sql
 console.log(fs.readdirSync("Nodejs"))

```
#### Question 6.Ab Nodejs folder ke andar jitne b folders hain sirf unhe hi print krvana hai 
```sql
const checkfolders= fs.readdirSync("Nodejs")
.map(fileName => {
  return path.join("Nodejs", fileName);
})
.filter(fileName => {
  return fs.lstatSync(fileName).isDirectory();
});

console.log(checkfolders); 

```
#### Question 7.Ab Nodejs folder ke andar jitni b files hain sirf unhe hi print krvana hai 
```sql 

const checkfile= fs.readdirSync("Nodejs")
.map(fileName => {
  return path.join("Nodejs", fileName);
})
.filter(fileName => {
  return fs.lstatSync(fileName).isFile();
});

console.log(checkfile);
```
#### Question 8.Ab tume Nodejs folder ke andar jitne b folders hain unke andar 1-1 file create krni hai file1.html 
```sql
const fifo = ["node1" , "node2","node3","node4","node5"]
for(let i = 0 ; i<fifo.length; i++){
fs.open(path.join("Nodejs" , fifo[i] , "file1.html") ,"w" ,(err)=>{
    if(err){
        console.log(err);

    }else if(!fs.existsSync(fifo[i])){
        console.log("already creaat") 
    }else{
        console.log("success");
    }
})

}  
```
#### Question 9.Nodejs folder ke andar file2.html ko delete kr dena hai, file3.html ko file8.html rename kr dena hai 
```sql

fs.rm("Nodejs/file2.html" , (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("successfully delet");
    }
})

fs.rename("Nodejs/file3.html" , "Nodejs/file8.html" ,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("successfully renems");
    }
})
```
#### Question 10.file1.html ka data file4.html me copy kr dena hai 
```sql
const data = fs.readFileSync("Nodejs/file1.html" )
console.log(data);

fs.writeFileSync("Nodejs/file4.html" , data)
```
#### Question 11.file5.html ko copy krna hai but nodejs2 folder ke andar 
```sql

[Error: ENOENT: no such file or directory, copyfile 'file5.html' -> 'node2/'] {
  errno: -2,
  code: 'ENOENT',
  syscall: 'copyfile',
  path: 'file5.html',
  dest: 'node2/'
}

folder ke ander aap file copy nhi kr skte he 
```
#### Question 12.nodejs3, nodejs4, nodejs5 folder ko delete kr dena hai 
```sql
  let deletfolder = ["nodejs3", "nodejs4", "nodejs5"]
for(let i = 0 ; i < deletfolder.length ; i++){
 fs.rm(path.join("Nodejs" ,  deletfolder[i] ),{ recursive: true, force: true }, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("successfully delet");
    }
})

}
```
#### Question 13.nodejs1 folder ke andar jo b files hain unhe copy krke nodejs2 folder me dal dena hai
```sql
fs.copyFile("Nodejs/nodejs1/file1.html","Nodejs/nodejs2/file1.html",(err)=>{
  if(err){
    console.log(err);
  }else{
    console.log("success");
  }
})

```