> Global Modules

     Globle modules are node package that are installed in our systam .when we setup in nodejs.
     these don't need to installed leter in our project and we can imprt then directly

-> User Defined Modules - User define
modules that are created by user

-> Third Party Libraries/Modules

        third party modules are any code .that has been writen by any third pary/ user .
        that are available inside the npm . that we install and use in our project

-> node_modules
node_modules in a folder .in which all paackage installed that we use in our project

-> package.json
package.json is a file .in witch all details of project metadat, dependencis and scripts .
(script filed is an object in package.json file .where you can custam script .these script can be
used to automate various task retlated to your package )
-> package-lock.json
Which locks the version of all the packages we have used in our project.
-> ~ and ^
NPM versions are written using three dots separated numbers the first number from the left shows
the major release and the second number from the left shows the minor release and the third number
shows the patch release of the package.

     Tilde (~) notation: It is used to match the most recent patch version
     Caret (^) notation: It is used for automatically updating the minor updates along with patch updates.

-> File System
To perform action on any file like create,update,read , delete we use file system
-> Streams
stream is a method of transferring large amounts of data on request by breaking the file or data down into manageable chunks.
some type of strem
Readable, Writable, Duplex, Transform

-> Event Emitter
Observer Design Pattern
Emitter, Listener, Handler
creat events ----
-> let event = new events.EventEmitter();
-> event.emit("");
-> .on

-> Readable events method
data, end, error, close
-> Writable events method
drain, finish

-> request query params
-> Http Status code ?  
-> Query param and Path Param
