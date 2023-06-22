## fristtest intro node js 

#### 1. Nodejs hm kyu use krte hain? Nodejs ke benefits?
 ```
 because
. Node.js JavaScript ke ek runtime environment hai, jisse aap JavaScript code ko web browser ke bahar bhi execute kar sakte hain. 
 . node js open source he jiski vjh se eske pas open-source modules aur libraries npm (Node Package Manager) ke through available hain
 Nodejs ko use hm esliy krte he kyuki nodejs  single-threaded, 
 . node js google v8 engine ka istemal krta he jiski vjh se ye bhut sari request ko ak stha hendal kr skta he jis vjh sr hm node use krte he 
 . nodejs me realtime communication aasani se hp jata he 
 . nodejs front-end back-end ke bich me achi trike se communication kr pata he eske sath hi yhe dono trf se upyag me lay jati he jis vjh se hm eska use krte  he 
 . nodejs me microService architecture ko bdi aasani se follow kr pata he kyuki nodejs me chote or independent services hote he 

 ```

#### 2. Nodejs and JavaScipt me kya difference hai?
```
. javaScript ak programing language he likin nodejs ak javaScript ka  runtime envirment he 
. JavaScript  primarily used for client-side scripting in web browsers. It allow    you to add interactivity and dynamic behavior to web pages.
lakin nodejs JavaScript ko  server-side, enabling the development of server-side applications. Node.js provides an event-driven, non-blocking I/O model that makes it efficient and scalable for building network applications.

. javaScript broser ke ander run krti he likin nodejs javaScript ko
broser ke bahr run krvane me maded krta he 

```

#### 3. Module kya hota hai ? Nodejs me module kitni trah se import kr skte hain ?
```
Module ek programming concept hai jo code ko modular, organized aur reusable banane ke liye use hota hai. Ek module ek code ka logical group hota hai jo related functions, variables, classes, aur/ya data structures ko ek saath rakhta hai.

 Module mein ek set of functions, classes aur variables hoti hai jo dusre programs se access ki ja sakti hai. Isse code duplication kam hota hai aur code maintenance aur development process mei aasani hoti hai.

1. Built-in Modules : Ye modules Node.js ke saath pre-installed aate hain aur aap unhe bina kisi external installation ke upyog kar sakte hain.

  fs (File System): File aur directory ke sath sambandhit operations ke liye.
  http aur https: HTTP aur HTTPS protokol ke upyog se server banane ke liye.
  path: File path ko manipulate karne ke liye.
  util: Utility functions jaise ki error handling aur debugging ke liye.


2. External Modules (Bahari Modules): Ye modules Node Package Manager (npm) ke madhyam se install kiye jaate hain. Aap unhe apne project me require ya import statement ka upyog karke import kar sakte hain. Kuch bahari modules ke udaharan hain:

express: Web application development ke liye.
lodash: Utility functions aur data manipulation ke liye.
mongoose: MongoDB database se interact karne ke liye.
axios: HTTP requests bhejne ke liye.

```

#### 4. Nodjes ke feature ke bare me likho 
```
Node.js ke kuch pramukh features niche diye gaye hain:

1. **Asynchronous and Event-Driven:** Node.js single-threaded event loop model par kaam karta hai, jiske karan asynchronous aur non-blocking I/O operations efficiently handle kar sakta hai. Isse Node.js high concurrency, scalability, aur performance achieve kar sakta hai.

2. **Server-Side JavaScript Execution:** Node.js allows server-side JavaScript execution, which means you can write JavaScript code that runs on the server. This enables developers to use JavaScript for both client-side and server-side development, providing a unified language and development experience.

3. **Vast Ecosystem and Package Manager:** Node.js has a vast ecosystem of open-source modules and libraries available through the Node Package Manager (npm). npm provides a convenient way to discover, install, and manage dependencies for your Node.js projects.

4. **Fast and Lightweight:** Node.js is built on the V8 JavaScript engine, which is known for its speed and performance. It provides a lightweight runtime environment and has a small memory footprint, making it suitable for building scalable and efficient applications.

5. **Cross-Platform Compatibility:** Node.js is cross-platform and runs on various operating systems such as Windows, macOS, and Linux. This allows developers to write code once and run it on multiple platforms without significant modifications.

6. **Event-Driven Architecture:** Node.js follows an event-driven architecture, where callbacks and event emitters are used to handle asynchronous operations. This enables efficient handling of I/O operations and promotes a non-blocking and scalable approach to development.

7. **Streaming Support:** Node.js has built-in support for streaming data, allowing you to process and manipulate large amounts of data in chunks. This is particularly useful for handling file system operations, network communication, and real-time applications.

8. **Scalability and Real-Time Applications:** Node.js is well-suited for building scalable and real-time applications, such as chat applications, collaborative tools, and streaming services. Its non-blocking I/O model and event-driven architecture enable handling a large number of concurrent connections efficiently.

9. **Community Support:** Node.js has a vibrant and active community of developers, contributing to the growth and improvement of the platform. The community provides extensive documentation, tutorials, libraries, and frameworks, making it easier to learn and develop with Node.js.

These are some of the key features of Node.js that have contributed to its popularity and success as a platform for server-side development.

```
5. File System module ka kya use hai ?
```

fs (File System) module Node.js ka ek built-in module hai, jise file aur directory ke sath sambandhit operations karne ke liye use kiya jata hai. Is module ka upyog karke aap file create, read, write, update, delete aur directory ke sath operations jaise ki create, read, write, delete, move, etc. kar sakte hain.
```
6. Encoding kya hoti hai ? UTF-8 encoding ke bare me btayen 
```
Encoding ek process hai jisme characters aur symbols ko machine-readable form me represent kiya jata hai. Is process me characters ko binary (0s aur 1s) form me convert kiya jata hai, jise computer samajh sakta hai. Encoding ki madad se text, audio, video, images, aur anya data ko computer systems me store, transmit aur process kiya ja sakta hai.

UTF-8 -- 
   . UTF-8 (Unicode Transformation Format 8-bit) ek character encoding standard hai. 
  . internationalization aur multilingual content ko support karta hai.
  .  Isme sabhi major languages ke characters, symbols aur diacritical marks ko represent karne ke liye flexibility hai
```
7. Absolute and Relative path me kya differences hain 
```

A relative path describes the location of a file relative to the current (working) directory*.

An absolute path describes the location from the root directory
```
8. File and Folder me kya differnce hai ?
```
bhut sari file milker ak folder ka nirman krte he 
```
9.  Differnce between callback and promise. Explain with example
```

```
10. readFile and readFileSync me kya differences hain? Explain with example
```

```
11.  writeFile and writeFileSync me kya differences hain? Explain with example
