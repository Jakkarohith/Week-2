var employee = [{ idno: "1", firstname: "Rohtih", lastname: "jakka", email: "jakkarohith@gmail.com", phone: "960337238", des: "clerk", sal: "50550" },
    { idno: "2", firstname: "abhi", lastname: "kakkreni", email: "kabhishekchandra@gmail.com", phone: "8465871769", des: "manager", sal: "100000" },
    { idno: "3", firstname: "gunith", lastname: "jakka", email: "jakkagunith@gmail.com", phone: "984992938", des: "employee", sal: "5000" },];
var Show = /** @class */ (function () {
    function Show() {
        var _this = this;
        this.table = document.getElementById("empdata");
        this.tbody = document.getElementById("empbody");
        this.sub = document.getElementById("submit");
        this.sub.addEventListener("click", function (e) { return _this.validate(); });
    }
    Show.prototype.create = function (empdata) {
        var thead = ["ID No", "First Name", "Last Name", "Email", "Phone", "Desgination", "Salary"];
        var tr = document.createElement('TR');
        this.tbody.appendChild(tr);
        for (var _i = 0, thead_1 = thead; _i < thead_1.length; _i++) {
            var h = thead_1[_i];
            var th = document.createElement('TH');
            th.appendChild(document.createTextNode(h));
            tr.appendChild(th);
        }
        for (var _a = 0, empdata_1 = empdata; _a < empdata_1.length; _a++) {
            var person = empdata_1[_a];
            tr = document.createElement('TR');
            var td1 = document.createElement('TD');
            var td2 = document.createElement('TD');
            var td3 = document.createElement('TD');
            var td4 = document.createElement('TD');
            var td5 = document.createElement('TD');
            var td6 = document.createElement('TD');
            var td7 = document.createElement('TD');
            td1.appendChild(document.createTextNode(person.idno.toString()));
            td2.appendChild(document.createTextNode(person.firstname.toString()));
            td3.appendChild(document.createTextNode(person.lastname.toString()));
            td4.appendChild(document.createTextNode(person.email.toString()));
            td5.appendChild(document.createTextNode(person.phone.toString()));
            td6.appendChild(document.createTextNode(person.des.toString()));
            td7.appendChild(document.createTextNode(person.sal.toString()));
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(td7);
            this.tbody.appendChild(tr);
        }
        this.table.appendChild(this.tbody);
    };
    Show.prototype.validate = function () {
        var idno = parseInt(document.getElementById("idno").value);
        var Firstname = document.getElementById("firstname").value;
        var lastname = document.getElementById("lastname").value;
        var email = document.getElementById("email").value;
        var phone = (document.getElementById("phone").value);
        var des = document.getElementById("des").value;
        var sal = parseInt(document.getElementById("sal").value);
        if (idno < 0 || idno == 0) {
            alert("Please Enter ID number(above 0)");
        }
        if (Firstname.length == 0 || Firstname.length < 3) {
            alert("please enter valid firstname");
        }
        if (lastname.length == 0 || lastname.length < 3) {
            alert("please enter valid lastname");
        }
        if (email.length == 0 || email.length < 3) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
                alert("please enter valid email");
        }
        if (phone.length == 0 || phone.length < 10) {
            alert("please enter valid phone number");
        }
        if (des != "clerk" || des != "manager" || des != "salesman" || des != "employee" || des != "boss") {
            alert("please enter valid college name");
        }
        if (sal < 0 || sal > 1000000) {
            alert("Please Enter valid percentage ");
        }
        this.insertdata();
    };
    Show.prototype.insertdata = function () {
        if ((document.getElementById("idno").value).length > 0 &&
            (document.getElementById("firstname").value).length > 0 &&
            (document.getElementById("lastname").value).length > 0 &&
            (document.getElementById("email").value).length > 0 &&
            (document.getElementById("phone").value).length > 0 &&
            (document.getElementById("des").value).length > 0 &&
            (document.getElementById("sal").value).length > 0) {
            var tr = document.createElement('TR');
            var td1 = document.createElement('TD');
            var td2 = document.createElement('TD');
            var td3 = document.createElement('TD');
            var td4 = document.createElement('TD');
            var td5 = document.createElement('TD');
            var td6 = document.createElement('TD');
            var td7 = document.createElement('TD');
            td1.appendChild(document.createTextNode((document.getElementById("idno").value).toString()));
            td2.appendChild(document.createTextNode((document.getElementById("firstname").value).toString()));
            td3.appendChild(document.createTextNode((document.getElementById("lastname").value).toString()));
            td4.appendChild(document.createTextNode((document.getElementById("email").value).toString()));
            td5.appendChild(document.createTextNode((document.getElementById("phone").value).toString()));
            td6.appendChild(document.createTextNode((document.getElementById("des").value).toString()));
            td7.appendChild(document.createTextNode((document.getElementById("sal").value).toString()));
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(td7);
            this.tbody.appendChild(tr);
            this.table.appendChild(this.tbody);
            document.getElementById("idno").value = "";
            document.getElementById("firstname").value = "";
            document.getElementById("lastname").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("des").value = "";
            document.getElementById("sal").value = "";
        }
        else {
            alert("Enter all the details");
        }
    };
    return Show;
}());
var p = new Show();
p.create(employee);
