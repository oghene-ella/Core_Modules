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
        return
    }
    console.log(`Successfully renamed "Students" folder to Names`)
})

/* 
! Question 2, Sub Question 4
! Add your name as content to the file user.js
*/

const userNameContent = "Oghenekaro Emmanuella Avwerosuoghene";
const userFileNew = path.join(__dirname, "Names", "user.js");

fs.writeFile(userFileNew, userNameContent, (error) => {
    if (error){
        console.log(`Could not write to a file`)
        return
    }
    console.log(`Successfully written my name to the file`)
})

/* 
! Question 2, Sub Question 5
! Update the file and add your age, sex, nationality, phone number and any other information about yourself
*/

const otherUserContent = "\n21\nFemale\nNigerian\n08183238338\nFun Fact: I'm a Chelsea Fan";
fs.appendFile(userFileNew, otherUserContent, (error) => {
    if (error) {
        console.log(`Could not update the user.js file`);
        return
    }
    console.log(`Successfully updated the user.js file`)
});


/* 
! Question 2, Sub Question 6
! Update the file user.js to {your_name}.js eg daniel_adesoji.js
*/

const UpdatedUserFile = path.join(__dirname, "Names/oghenekaro.js");
// console.log(UpdatedUserFile, userFileNew);
fs.rename(userFileNew, UpdatedUserFile, (error) => {
  if (error) {
    console.log(`Could not rename folder: ${error}`);
    return;
  }
  console.log(`Successfully renamed "Students" folder to Names`);
});