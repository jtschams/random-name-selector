const callButton = document.getElementById("call");
const student = document.getElementById("student");
const rainCheck = document.getElementById("rain-check");

//  TODO: Add ability to add/remove names.  Potientially option to clear name list
const studentList = ["Alvin", "Andrew", "Beth-Ann", "Bryce", "Erika", "Francisco", "Janani", "Joshua", "J.T.", "Lee", "Lindsey", "Max", "Nell", "Parker", "Samantha", "Sunny"]

let i = studentList.length;
let availableStudents = [];
availableStudents.push(...studentList);
const selectStudent = function() {
    availableStudents.splice(i, 1);
    shuffleStudent();
}

const shuffleStudent = function() {
    if (availableStudents.length > 0) {
    i = Math.floor(Math.random() * availableStudents.length);
    student.textContent = availableStudents[i];
    } else {
        availableStudents.push(...studentList);
        i = studentList.length;
        selectStudent();
    }
}


rainCheck.addEventListener("click", shuffleStudent);

callButton.addEventListener("click", selectStudent);