const student = [{ "name": "Yash Shah", "number": 9780234567, "city": "Ahmedabad", "field": "React JS", "Colledge": "Indus University", "result": "Pass" },
{ "name": "Parv Gajipara", "number": 9780234567, "city": "Junagadh", "field": "Angular JS", "Colledge": "GIT University", "result": "Pass" },
{ "name": "Vikas Sonwane", "number": 9780234567, "city": "Ahmedabad", "field": ".Net", "Colledge": "GEC University", "result": "Pass" },
{ "name": "Harsh Shah", "number": 9780234567, "city": "Ahmedabad", "field": "Node JS", "Colledge": "GIDC University", "result": "Pass" },
{ "name": "Mihir Nirmal", "number": 9780234567, "city": "Rajkot", "field": "React JS", "Colledge": "Ahmedabad University", "result": "Pass" },
{ "name": "Nitish Tiwari", "number": 9780234567, "city": "Ahmedabad", "field": "React JS", "Colledge": "LD Colledge ", "result": "Fail" },
{ "name": "Vandit Vora", "number": 9780234567, "city": "Ahmedabad", "field": "PHP", "Colledge": "PDPU University", "result": "Fail" },
{ "name": "Meet Shah", "number": 9780234567, "city": "Ahmedabad", "field": "Python", "Colledge": "DAIICT University", "result": "Pass" },
{ "name": "Jay Prajapati", "number": 9780234567, "city": "Ahmedabad", "field": ".Net", "Colledge": "VGEC Colledge", "result": "Pass" },
{ "name": "Mit Shah", "number": 9780234567, "city": "Ahmedabad", "field": "React JS", "Colledge": "Nirma University", "result": "Fail" },
{ "name": "Nihar Talaviya", "number": 9780234567, "city": "Ahmedabad", "field": "React JS", "Colledge": "Indus University", "result": "Fail" }]


for (let i = 0; i < student.length; i++) {
    var table2 = document.getElementById("data2")!
    var table3 = document.getElementById("data3")!
    var table4 = document.getElementById("data4")!

    table2.innerHTML += `<tr><td>${i}</td><td>${student[i].name}</td><td>${student[i].number}</td><td>${student[i].city}</td><td>${student[i].field}</td><td>${student[i].Colledge}</td></tr>`
    table3.innerHTML += `<tr><td>${i}</td><td>${student[i].name}</td><td>${student[i].field}</td><td>${student[i].Colledge}</td><td><input type="datetime-local" id="dt${i}" class="form-control"></td><td><button class="btn btn-primary" id="schedule123${i}" onclick="schedule(${i})" data-bs-target="#schedule">Schedule</button></td></tr>`
    table4.innerHTML += `<tr><td>${i}</td><td>${student[i].name}</td><td>${student[i].field}</td><td>${student[i].Colledge}</td><td class="color">${student[i].result}</td><td><button id="hire${i}" class="btn btn-primary" onclick="hire(${i})">Hire</button></td></tr>`

}



function save() {
    var id2 = document.getElementById("id1")! as HTMLInputElement
    var dep = document.getElementById("department")! as HTMLInputElement
    var vac = document.getElementById("vacancy")! as HTMLInputElement
    var experience = document.getElementById("experience")! as HTMLInputElement
    var qual = document.getElementById("qualification")! as HTMLInputElement
    document.getElementById("data1")!.innerHTML += `<tr><td>${id2.value}</td><td>${dep.value}</td><td>${qual.value}</td><td>${experience.value}</td><td>${vac.value}</td></tr>`
}
function filter() {
    var student21 = student.filter((p) => {
        return p.result == "Pass"
    })
    table4.innerHTML = ' '
    for (let i = 0; i < student21.length; i++) {
        table4.innerHTML += `<tr><td>${i}</td><td>${student21[i].name}</td><td>${student21[i].field}</td><td>${student21[i].Colledge}</td><td class="color">${student21[i].result}</td><td><button id="hire${i}" class="btn btn-primary" onclick="hire(${i})">Hire</button></td></tr>`
    }
}
function hire(i) {
    var hire1 = document.getElementById(`hire${i}`) as HTMLInputElement
    alert(`Congratulations, ${student[i].name} is hired`)
    hire1.innerHTML = "Hired"
}

function schedule(i){
    var date = document.getElementById(`dt${i}`)! as HTMLInputElement
    var button = document.getElementById(`schedule123${i}`) as HTMLInputElement
    button.innerHTML=`Scheduled Interview on ${date.value}`
}


