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

