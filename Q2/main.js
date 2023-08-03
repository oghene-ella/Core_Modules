// ! Call the fs inbuilt module
const fs = require("fs");
const path = require("path");

/* 
! Question 2, Sub Question 1
! Create directory/folder named: “Students”
*/
const studentDirectory = path.join(__dirname, "Students");

fs.mkdir(studentDirectory, (error) => {
    if (error) {
        console.log(`Could not create directory: ${error}`)
        return;
    }
    else{
        console.log(`Successfully created 'Student' directory.`)
    }
});


/* 
! Question 2, Sub Question 2
! In the Students directory, create a file named user.js
*/

const userFile = path.join(__dirname, "Students", "user.js");
fs.writeFile(userFile, "", (error) => {
    if (error){
        console.log(`Could not create file: ${error}`);
        return
    }
    console.log(`Successfully created file: ${userFile}`)
})

