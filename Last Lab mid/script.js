var form = document.getElementById("studentForm");

form.onsubmit = function(e){

    e.preventDefault();

    var fn = document.getElementById("fname").value;
    var ln = document.getElementById("lname").value;
    var id = document.getElementById("sid").value;
    var mail = document.getElementById("email").value;
    var credit = document.getElementById("credit").value;
    var dept = document.getElementById("department").value;

    var msg = document.getElementById("error");
    msg.innerHTML = "";

    if(fn.trim() == ""){
        msg.innerHTML = "First Name is required";
        return;
    }

    if(ln.trim() == ""){
        msg.innerHTML = "Last Name is required";
        return;
    }

    if(id.indexOf("-") == -1){
        msg.innerHTML = "Student ID must contain -";
        return;
    }

    if(mail.indexOf("@student.aiub.edu") == -1){
        msg.innerHTML = "Invalid Email";
        return;
    }

    if(credit < 0 || credit >= 148){
        msg.innerHTML = "Credit must be 0 to 147";
        return;
    }

    if(dept == ""){
        msg.innerHTML = "Select Department";
        return;
    }

    var table = document.getElementById("studentTable");

    var row = table.insertRow();

    row.insertCell(0).innerHTML = fn;
    row.insertCell(1).innerHTML = ln;
    row.insertCell(2).innerHTML = id;
    row.insertCell(3).innerHTML = mail;
    row.insertCell(4).innerHTML = credit;
    row.insertCell(5).innerHTML = dept;

    form.reset();

}