document.getElementById("btn1").addEventListener("click", myName);
document.getElementById("btn2").addEventListener("click", mySchool);
document.getElementById("btn3").addEventListener("click", myCareer);
document.getElementById("btn4").addEventListener("click", myHobbies);


function myName() {
    var nameParagraph = document.getElementById("name");
    if (nameParagraph.innerHTML === "") {
        nameParagraph.innerHTML = "NAME GOES HERE";
    } else {
        nameParagraph.innerHTML = "";
    }
}

function mySchool() {
    var schoolParagraph = document.getElementById("school");
    if (schoolParagraph.innerHTML === "") {
        schoolParagraph.innerHTML = "SCHOOL INFO GOES HERE";
    } else {
        schoolParagraph.innerHTML = "";
    }
}

function myCareer() {
    var careerParagraph = document.getElementById("career");
    if (careerParagraph.innerHTML === "") {
        document.getElementById("career").innerHTML = "CAREER INFO GO HERE";
    } else {
        careerParagraph.innerHTML = "";
    }
}

function myHobbies() {
    var hobbiesParagraph = document.getElementById("hobbies");
    if (hobbiesParagraph.innerHTML === "") {
        document.getElementById("hobbies").innerHTML = "HOBBIES GO HERE";
    } else {
        hobbiesParagraph.innerHTML = "";
    }
}