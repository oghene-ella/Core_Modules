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

/* 
! Question 2, Sub Question 3
! Update the Students directory to “Names”
*/
const UpdatedStudentName = path.join(__dirname, "Names");
fs.rename(studentDirectory, UpdatedStudentName, (error) => {
    if (error){
        console.log(`Could not rename folder: ${error}`);
    }
    console.log(`Successfully renamed "Students" folder to Names`)
})