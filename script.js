var student_name = [];

function submit(){

    var student1 = document.getElementById("name_1").value;
    var student2 = document.getElementById("name_2").value;
    var student3 = document.getElementById("name_3").value;
    var student4 = document.getElementById("name_4").value;

    student_name.push(student1);
    student_name.push(student2);
    student_name.push(student3);
    student_name.push(student4);

    console.log(student_name);
    
    document.getElementById("display_attendance").innerHTML=student_name;
    document.getElementById("submit_btn").style.display="none";
    document.getElementById("sort_btn").style.display="inline-block";
}

function sort(){
    student_name.sort();
    console.log(student_name);
    document.getElementById("display_attendance").innerHTML=student_name;
}

