#### question 1 . Api to register a student 
```
URL : www.wecodeacademy.in/api/v1/student
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
#### question 2 . Api to get all students details
```
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
```
URL : www.wecodeacademy.in/api/v1/student?id=3
Method type : GET,
Request Param : Yes ,
Path Param : No,
Request Body : No,
Responce Body : yes,
Response Headers  :Content Type : application/json
Response Body :
    status : true ,
    massage : student data get successfully
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
```
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

```
Api to get teacher details by id 
Api to get teacher details by name 
Api to get all batch details 
Api to get batch details by batchName

Api to update student Data 
Api to add teacher salary 
Api to add a new teacher 

Api to update batch details 
Api to delete batch 
Api to delete student 
Api to delete teacher

Api to get teacher details by id

URL : www.wecodeacademy.in/api/v1/teacher/3
Method Type : GET
Request Param : No 
Path Param : Teacher Id 
Request Boby : No 
Request Headers : No 
Response Headers  :Content Type : application/json

when Respnose Code is 200
Response Body : {
    name : "Sajid",
    id : 3,
    mobile : 943543545,
    email: "sajid@gmail.com",
    address : "Jaipur",
    subject : ["Nodejs", "Js", "Java"]
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


 