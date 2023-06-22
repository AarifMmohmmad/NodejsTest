#### question 1 . Api to register a student 
```sql
URL : www.wecodeacademy.in/api/v1/student
Method Type : post
Request Param : No 
Path Param : yes
Request Body : yes
Request Headers : No 
Response Headers  :Content Type : application/json

when Respnose Code is 200
request Body : {
    id : 1,
    Name :" aarif mohammad",
    class : 12
    age : 17,
    mobile : 12345,
    address : "jaipur",
}
Response Body : {
      status : true ,
      massage : "student addmission sucessfully"
      data : {
    id : 1,
    Name :" aarif mohammad",
    class : 12
    age : 17,
    mobile : 12345,
    address : "jaipur",
}
}
when Response Code is 404 API not Found
Response Body {
    errrorMessage : "Not Found",
    statusCode : 404
}
when Response code 500 Error in fetching data
Response Body{
    errrorMessage : "Erro while retrieving data",
    statusCode : 500
}
```
#### question 2 . Api to get all students details
```sql
URL : www.wecodeacademy.in/api/v1/student
Method Type : GET
Request Param : No 
Path Param : No
Request Body : No 
Request Headers : No 
Response Headers  :Content Type : application/json

when Respnose Code is 200
Response Body :[ {
    id : 1,
    name : "Aarif",
    class : 12
    age : 17
    mobile : 1234,
    address : "Jaipur",
},
{
    id : 1,
    name : "Aarif",
    class : 12
    age : 17
    mobile : 1234,
    address : "Jaipur",
}
]
when Response Code is 404 API not Found
Response Body {
    errrorMessage : "Not Found",
    statusCode : 404
}
when Response code 500 Error in fetching data
Response Body{
    errrorMessage : "Erro while retrieving data",
    statusCode : 500
}
```
#### question 3 . Api to get student detail by id 
```sql
URL : www.wecodeacademy.in/api/v1/student?id=3
Method type : GET,
Request Param : Yes ,
Path Param : No,
Request Body : No,
Responce Body : yes,
Response Headers  :Content Type : application/json

Response Body :
    status : true ,
    massage : "student data get successfully"
    data : {
    id : 1,
    name : "Aarif",
    class : 12
    age : 17
    mobile : 1234,
    address : "Jaipur",
}
when Response Code is 404 API not Found
Response Body {
    errrorMessage : "Not Found",
    statusCode : 404
}
when Response code 500 Error in fetching data
Response Body{
    errrorMessage : "Erro while retrieving data",
    statusCode : 500
}
```
#### Question 4. Api to get student detail by id, by name, by age 
```sql
URL : www.wecodeacademy.in/api/v1/student?id=3&name="aarif"&age=17
Method type : GET,
Request Param : Yes ,
Path Param : No,
Request Body : No,
Responce Body : yes,
Response Headers  :Content Type : application/json

when Respnose Code is 200
Response Body : {
    id : 3,
    name : "aarif",
    class : 12
    age : 17
    mobile : 1234,
    address : "Jaipur",
}
when Response Code is 404 API not Found
Response Body {
    errrorMessage : "Not Found",
    statusCode : 404
}
when Response code 500 Error in fetching data
Response Body{
    errrorMessage : "Erro while retrieving data",
    statusCode : 500
}
```
#### Question 5 . Api to get student detail by id, by name, by age, by mobile, by email, by fathername, by address, by pincode 
```sql
URL : www.wecodeacademy.in/api/v1/student?id=3&name="aarif"&age=17&email="aarifmohammad@gmail.com"&fathername="sherMohammad"&address="Jaipur"&pincode=341031

Method type : GET,
Request Param : Yes ,
Path Param : No,
Request Body : No,
Responce Body : yes,
Response Headers  :Content Type : application/json

when Respnose Code is 200
Response Body : {
    id : 3,
    name : "aarif",
    fathername="sherMohammad",
    email="aarifmohammad@gmail.com",
    class : 12
    age : 17
    mobile : 1234,
    pincode=341031,
    address : "Jaipur",
}
when Response Code is 404 API not Found
Response Body {
    errrorMessage : "Not Found",
    statusCode : 404
}
when Response code 500 Error in fetching data
Response Body{
    errrorMessage : "Erro while retrieving data",
    statusCode : 500
}
```
#### question 6. Api to get all teacher details 
```sql
URL : www.wecodeacademy.in/api/v1/teacher
Method type : GET,
Request Param : NO ,
Path Param : Yes,
Request Body : No,
Responce Body : yes,
Response Headers  :Content Type : application/json

Response Body :[ {
    id : 1,
    name : "sajid ali khan",
    email="sajid@gmail.com",
    age : 35
    mobile : 1234,
    address : "Jaipur",
    Batch : ["nodejs" , "javaScript"]
},
 {
    id : 2,
    name : "asfak khan",
    email="asfak@gmail.com",
    age : 30
    mobile : 1234,
    address : "Jaipur",
    Batch : "design"
},
]
when Response Code is 404 API not Found
Response Body {
    errrorMessage : "Not Found",
    statusCode : 404
}
when Response code 500 Error in fetching data
Response Body{
    errrorMessage : "Erro while retrieving data",
    statusCode : 500
}
```
#### question 7. Api to get teacher details by id 
```sql
URL : www.wecodeacademy.in/api/v1/teacher/id
Method type : GET,
Request Param : NO ,
Path Param : Yes,
Request Body : No,
Responce Body : yes,
Response Headers  :Content Type : application/json

Response Body :{
    id : 1,
    name : "sajid ali khan",
    email="sajid@gmail.com",
    age : 35
    mobile : 1234,
    address : "Jaipur",
    Batch : ["nodejs" , "javaScript"]
},
 
when Response Code is 404 API not Found
Response Body {
    errrorMessage : "Not Found",
    statusCode : 404
}
when Response code 500 Error in fetching data
Response Body{
    errrorMessage : "Erro while retrieving data",
    statusCode : 500
}
```
#### Question 8. Api to get teacher details by name 
```sql
URL : www.wecodeacademy.in/api/v1/teacher&name=sajid ali khan
Method type : GET,
Request Param : Yes ,
Path Param : No,
Request Body : No,
Responce Body : yes,
Response Headers  :Content Type : application/json

Response Body :{
    id : 1,
    name : "sajid ali khan",
    email="sajid@gmail.com",
    age : 35
    mobile : 1234,
    address : "Jaipur",
    Batch : ["nodejs" , "javaScript"]
}
 
when Response Code is 404 API not Found
Response Body {
    errrorMessage : "Not Found",
    statusCode : 404
}
when Response code 500 Error in fetching data
Response Body{
    errrorMessage : "Erro while retrieving data",
    statusCode : 500
}
```
#### Question 9. Api to get all batch details 
```sql
URL : www.wecodeacademy.in/api/v1/betch
Method type : GET,
Request Param : No ,
Path Param : Yes,
Request Body : No,
Responce Body : yes,
Response Headers  :Content Type : application/json


Response Body :[{
    Batch : "nodejs" ,
    teacher : "sajid ali khan",
    startDate : 21 jan 2023,
    fees :5000,
    TotelStudent :14
},
{
    Batch : "Design" ,
    teacher : "Asfak khan",
    startDate : 21 jun 2023,
    fees :12000,
    TotelStudent :40
},
]
when Response Code is 404 API not Found
Response Body {
    errrorMessage : "Not Found",
    statusCode : 404
}
when Response code 500 Error in fetching data
Response Body{
    errrorMessage : "Erro while retrieving data",
    statusCode : 500
}
```
#### Question 10. Api to get batch details by batchName
```sql
URL : www.wecodeacademy.in/api/v1/betch/batchName 
Method type : GET,
Request Param : No ,
Path Param : Yes,
Request Body : No,
Responce Body : yes,
Response Headers  :Content Type : application/json


Response Body :{
    Batch : "nodejs" ,
    teacher : "sajid ali khan",
    startDate : 21 jan 2023,
    fees :5000,
    TotelStudent :14
},

when Response Code is 404 API not Found
Response Body {
    errrorMessage : "Not Found",
    statusCode : 404
}
when Response code 500 Error in fetching data
Response Body{
    errrorMessage : "Erro while retrieving data",
    statusCode : 500
}
```
#### Question 11 . Api to update student Data 
```sql
URL : www.wecodeacademy.in/api/v1/student
Method type : put,
Request Param : No ,
Path Param : No,
Request Body : yes,
Responce Body : No,
Request Headers : No 
Response Headers  :Content Type : application/json

Request Body :{
    id : 1,
    name : "Aarif",
    class : 12
    age : 17
    mobile : 1234,
    address : "Jaipur",
}
when Respnose Code is 200
Responce Body :
     status : true ,
     massage : "data update successfully"
     data : {
    id : 1,
    name : "Aarif",
    class : 12
    age : 17
    mobile : 1234,
    address : "Jaipur",
}
when Response Code is 404 API not Found
Response Body {
    errrorMessage : "Not Found",
    statusCode : 404
}
when Response code 500 Error in fetching data
Response Body{
    errrorMessage : "Erro while uppdating data",
    statusCode : 500
}
```
#### Question 11 .Api to add teacher salary 
```sql
URL : www.wecodeacademy.in/api/v1/teaacher
Method type : put,
Request Param : No ,
Path Param : NO,
Request Body : yes,
Responce Body : No,
Request Headers : No 
Response Headers  :Content Type :Yes application/json

Request Body :{
    id : 1,
    name : "sajid ali khan",
    email="sajid@gmail.com",
    age : 35
    mobile : 1234,
    address : "Jaipur",
    Batch : ["nodejs" , "javaScript"]
    Salary : 100000
},
when Respnose Code is 200
Responce Body :
     status : true ,
     massage : "Salary update successfully"
     data :{
    id : 1,
    name : "sajid ali khan",
    email="sajid@gmail.com",
    age : 35
    mobile : 1234,
    address : "Jaipur",
    Batch : ["nodejs" , "javaScript"]
    Salary : 100000
},
when Response Code is 404 API not Found
Response Body {
    errrorMessage : "Not Found",
    statusCode : 404
}
when Response code 500 Error in fetching data
Response Body{
    errrorMessage : "Erro while uppdating data",
    statusCode : 500
}
```

#### Question 11. Api to add a new teacher 
```sql
URL : www.wecodeacademy.in/api/v1/teacher
Method Type : post
Request Param : No 
Path Param : No
Request Body : yes
Request Headers : No 
Response Headers  :Content Type : application/json

when Respnose Code is 
request Body : {
    id : 1,
    Name : aarif mohammad,
    class : 12
    age : 17,
    mobile : 12345,
    address : jaipur,
}
Response Body : {
      status : true ,
      massage : student addmission sucessfully
}
when Response Code is 404 API not Found
Response Body {
    errrorMessage : "Not Found",
    statusCode : 404
}
when Response code 500 Error in fetching data
Response Body{
    errrorMessage : "Erro while retrieving data",
    statusCode : 500
}
```
#### Question 12. Api to update batch details 
```sql
URL : www.wecodeacademy.in/api/v1/teacher
Method Type : put
Request Param : No 
Path Param : No
Request Body : yes
Request Headers : No 
Response Headers  :Content Type : application/json

request Body :{
    Batch : "nodejs" ,
    teacher : "sajid ali khan",
    startDate : 21 jan 2023,
    fees :5000,
    TotelStudent :14
}
when Respnose Code is 200
Response Body : {
      status : true ,
      massage : "sucessfully update Batch details "
      data : {
    Batch : "nodejs" ,
    teacher : "sajid ali khan",
    startDate : 21 jan 2023,
    fees :5000,
    TotelStudent :17
}
}
when Response Code is 404 API not Found
Response Body {
    errrorMessage : "Not Found",
    statusCode : 404
}
when Response code 500 Error in fetching data
Response Body{
    errrorMessage : "Erro while updating data",
    statusCode : 500
}
```
#### Question 13. Api to delete batch 
```sql
URL : www.wecodeacademy.in/api/v1/Betch
Method Type : Delet
Request Param : no
Path Param : No
Request Body : yes
Request Headers : No 
Response Headers  :Content Type : application/json


request Body :{
    id : 3
    Batch : "nodejs" ,
    teacher : "sajid ali khan",
    startDate : 21 jan 2023,
    fees :5000,
    TotelStudent :14
}

when Respnose Code is 200
request Body :
    massage : "Betch Deleted successfully"
    data : {
    id : 3
    Batch : "nodejs" ,
    teacher : "sajid ali khan",
    startDate : 21 jan 2023,
    fees :5000,
    TotelStudent :14
}

when Response Code is 404 API not Found
Response Body {
    errrorMessage : "Not Found",
    statusCode : 404
}
when Response code 500 Error in fetching data
Response Body{
    errrorMessage : "betch Not deleted. betch Not Exict",
    statusCode : 500
}
```
#### Question 14. Api to delete student 
```sql
URL : www.wecodeacademy.in/api/v1/studetn
Method Type : Delet
Request Param : No
Path Param : No
Request Body : yes
Request Headers : No 
Response Headers  :Content Type : application/json


request Body :{
    id : 1,
    Name :" aarif mohammad",
    class : 12
    age : 17,
    mobile : 12345,
    address : "jaipur",
}
when Respnose Code is 200
request Body :
    massage : "Student Successfully deleted"
    data : {
    id : 1,
    Name :" aarif mohammad",
    class : 12
    age : 17,
    mobile : 12345,
    address : "jaipur",
}

when Response Code is 404 API not Found
Response Body {
    errrorMessage : "Not Found",
    statusCode : 404
}
when Response code 500 Error in fetching data
Response Body{
    errrorMessage : "Student Not deleted. Student Not present",
    statusCode : 500
}
```
#### Question 15. Api to delete teacher
```sql
URL : www.wecodeacademy.in/api/v1/studetn
Method Type : Delet
Request Param : No
Path Param : No
Request Body : yes
Request Headers : No 
Response Headers  :Content Type : application/json


request Body :{
    id : 1,
    name : "sajid ali khan",
    email="sajid@gmail.com",
    age : 35
    mobile : 1234,
    address : "Jaipur",
    Batch : ["nodejs" , "javaScript"]
}
when Respnose Code is 200
request Body :
    massage : "Teacher Successfully deleted"
    data : {
    id : 1,
    name : "sajid ali khan",
    email="sajid@gmail.com",
    age : 35
    mobile : 1234,
    address : "Jaipur",
    Batch : ["nodejs" , "javaScript"]
}

when Response Code is 404 API not Found
Response Body {
    errrorMessage : "Not Found",
    statusCode : 404
}
when Response code 500 Error in fetching data
Response Body{
    errrorMessage : "Teacher Not deleted. Teacher  Not present",
    statusCode : 500
}
```