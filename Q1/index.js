// ! Call all the inbuilt modules needed
const process = require("process");
const path = require("path");
const os = require("os");

/* 
! Question 1, Sub Question 1
! Print out the current working directory
*/

const workingDirectory = process.cwd();
console.log(`Prints the Current working directory: ${workingDirectory}`);


/* 
! Question 1, Sub Question 2
! Print out the separator of a given file path
*/
const filePathSeparator = path.sep;
console.log(`Prints a File Separator: ${filePathSeparator}`);


/* 
! Question 1, Sub Question 3
! Print out the extension name of a file path
*/
const extName = path.extname("Q1/index.js");
console.log(`Prints the extension of the file: ${extName}`);


/* 
! Question 1, Sub Question 4
! Print out the process id of the current running process
*/
const processId = process.pid;
console.log(`Prints the Process Id: ${processId}`);

/* 
! Question 1, Sub Question 5
! Print out the user information of the os
*/

const ownerInfo = os.userInfo();
// why did it not print using template literal? It's seeing it as an [object, object]
// I understand that its an object [Inside the curly braces and it has key and value pairs]

console.log("Prints the user information of the os: ", ownerInfo);

/* 
! Question 1, Sub Question 6
! Print out the platform of an operating system
*/

const osPlatform = os.platform();
console.log(`Prints the platform of my/an operating system: ${osPlatform}`);