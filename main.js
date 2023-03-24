var student = [{ "name": "Yash Shah", "number": 9780234567, "city": "Ahmedabad", "field": ".Net", "Colledge": "Indus University", "result": "Pass" },
    { "name": "Parv Gajipara", "number": 9780234567, "city": "Junagadh", "field": ".Net", "Colledge": "Indus University", "result": "Pass" },
    { "name": "Vikas Sonwane", "number": 9780234567, "city": "Ahmedabad", "field": ".Net", "Colledge": "Indus University", "result": "Pass" },
    { "name": "Harsh Shah", "number": 9780234567, "city": "Ahmedabad", "field": ".Net", "Colledge": "Indus University", "result": "Pass" },
    { "name": "Mihir Nirmal", "number": 9780234567, "city": "Rajkot", "field": "React", "Colledge": "Ahmedabad University", "result": "Pass" },
    { "name": "Nitish Tiwari", "number": 9780234567, "city": "Ahmedabad", "field": "React", "Colledge": "Indus University", "result": "Fail" },
    { "name": "Vandit Vora", "number": 9780234567, "city": "Ahmedabad", "field": "Python", "Colledge": "Indus University", "result": "Fail" },
    { "name": "Meet Shah", "number": 9780234567, "city": "Ahmedabad", "field": "Python", "Colledge": "Indus University", "result": "Pass" },
    { "name": "Jay Prajapati", "number": 9780234567, "city": "Ahmedabad", "field": ".Net", "Colledge": "Vishwakarma Engineering Colledge", "result": "Pass" },
    { "name": "Mit Shah", "number": 9780234567, "city": "Ahmedabad", "field": "React", "Colledge": "Indus University", "result": "Fail" },
    { "name": "Nihar Talaviya", "number": 9780234567, "city": "Ahmedabad", "field": "React", "Colledge": "Indus University", "result": "Fail" }];
for (var i = 0; i < student.length; i++) {
    var table2 = document.getElementById("data2");
    var table3 = document.getElementById("data3");
    var table4 = document.getElementById("data4");
    table2.innerHTML += "<tr><td>".concat(i, "</td><td>").concat(student[i].name, "</td><td>").concat(student[i].number, "</td><td>").concat(student[i].city, "</td><td>").concat(student[i].field, "</td><td>").concat(student[i].Colledge, "</td></tr>");
    table3.innerHTML += "<tr><td>".concat(i, "</td><td>").concat(student[i].name, "</td><td>").concat(student[i].field, "</td><td>").concat(student[i].Colledge, "</td><td><input type=\"datetime-local\" id=\"dt").concat(i, "\" class=\"form-control\"></td><td><button class=\"btn btn-primary\" id=\"schedule123").concat(i, "\" onclick=\"schedule(").concat(i, ")\" data-bs-target=\"#schedule\">Schedule</button></td></tr>");
    table4.innerHTML += "<tr><td>".concat(i, "</td><td>").concat(student[i].name, "</td><td>").concat(student[i].field, "</td><td>").concat(student[i].Colledge, "</td><td class=\"color\">").concat(student[i].result, "</td><td><button id=\"hire").concat(i, "\" class=\"btn btn-primary\" onclick=\"hire(").concat(i, ")\">Hire</button></td></tr>");
}
function save() {
    var id2 = document.getElementById("id1");
    var dep = document.getElementById("department");
    var vac = document.getElementById("vacancy");
    var experience = document.getElementById("experience");
    var qual = document.getElementById("qualification");
    document.getElementById("data1").innerHTML += "<tr><td>".concat(id2.value, "</td><td>").concat(dep.value, "</td><td>").concat(qual.value, "</td><td>").concat(experience.value, "</td><td>").concat(vac.value, "</td></tr>");
    // dep.innerHTML = "plz enter field"
    // vac.innerHTML = ' '
    // qual.innerHTML = ' '
}
function filter() {
    var student21 = student.filter(function (p) {
        return p.result == "Pass";
    });
    console.log(student21);
    table4.innerHTML = ' ';
    for (var i = 0; i < student21.length; i++) {
        table4.innerHTML += "<tr><td>".concat(i, "</td><td>").concat(student21[i].name, "</td><td>").concat(student21[i].field, "</td><td>").concat(student21[i].Colledge, "</td><td class=\"color\">").concat(student21[i].result, "</td><td><button id=\"hire").concat(i, "\" class=\"btn btn-primary\" onclick=\"hire(").concat(i, ")\">Hire</button></td></tr>");
    }
}
function hire(i) {
    var hire1 = document.getElementById("hire".concat(i));
    alert("Congratulations, ".concat(student[i].name, " is hired"));
    hire1.innerHTML = "Hired";
}
function schedule(i) {
    // var time = document.getElementById("time")! as HTMLInputElement
    var date = document.getElementById("dt".concat(i));
    // console.log(date.value)
    var button = document.getElementById("schedule123".concat(i));
    button.innerHTML = "Scheduled on ".concat(date.value);
}
// function schedule(i){
//     alert(`<input type="text"/>`)
// }
