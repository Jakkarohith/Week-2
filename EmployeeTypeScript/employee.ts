
interface Empdata{
    idno:String,
    firstname:String,
    lastname:String,
    email:String,
    phone:String,
    des:String,
    sal:String
}
var employee:Empdata[] =[{idno:"1",firstname:"Rohtih",lastname:"jakka",email:"jakkarohith@gmail.com",phone:"960337238",des:"clerk",sal:"50550"},
                        {idno:"2",firstname:"abhi",lastname:"kakkreni",email:"kabhishekchandra@gmail.com",phone:"8465871769",des:"manager",sal:"100000"},
                        {idno:"3",firstname:"gunith",lastname:"jakka",email:"jakkagunith@gmail.com",phone:"984992938",des:"employee",sal:"5000"}, ];
class Show
{
    table: HTMLTableElement = (document.getElementById("empdata")as HTMLTableElement);
    tbody: HTMLTableElement = (document.getElementById("empbody")as HTMLTableElement);
    sub:HTMLButtonElement = (document.getElementById("submit")as HTMLButtonElement);
    constructor()
    {
    this.sub.addEventListener("click",(e:Event) => this.validate());
    }
    create(empdata:Array<Empdata>)
    {
        let thead:string[]=["ID No","First Name","Last Name","Email","Phone","Desgination","Salary"];
        var tr = document.createElement('TR');
        this.tbody.appendChild(tr);
        for (let h of thead) 
        {
            let th = document.createElement('TH')
            th.appendChild(document.createTextNode(h));
            tr.appendChild(th);
        }
        for (let person of empdata)
         {
           tr = document.createElement('TR');        
                let td1 = document.createElement('TD');
                let td2 = document.createElement('TD');
                let td3 = document.createElement('TD');
                let td4 = document.createElement('TD');
                let td5 = document.createElement('TD');
                let td6 = document.createElement('TD');
                let td7 = document.createElement('TD');
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
    }
    validate()
    {
        var idno:number=parseInt((document.getElementById("idno")as HTMLInputElement).value);
        var Firstname:String=(document.getElementById("firstname")as HTMLInputElement).value;
        var lastname:String=(document.getElementById("lastname")as HTMLInputElement).value;
        var email:string=(document.getElementById("email")as HTMLInputElement).value;
        var phone:String=((document.getElementById("phone")as HTMLInputElement).value);
        var des:String=(document.getElementById("des")as HTMLInputElement).value;
        var sal:number=parseInt((document.getElementById("sal")as HTMLInputElement).value);
        if(idno<0||idno==0)
        {
            alert("Please Enter ID number(above 0)");
        }
        if(Firstname.length==0||Firstname.length<3)
        {
          alert("please enter valid firstname");  
        }
        if(lastname.length==0||lastname.length<3)
        {
          alert("please enter valid lastname");  
        }
        if(email.length==0||email.length<3)
        {
         if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))  
             alert("please enter valid email");  
        }
        if(phone.length==0||phone.length<10)
        {
          alert("please enter valid phone number");  
        }
        if(des!="clerk"||des!="manager"||des!="salesman"||des!="employee"||des!="boss")
        {
          alert("please enter valid designation");  
        }
        if(sal<0||sal>1000000)
        {
            alert("Please Enter valid percentage ");
        }
        this.insertdata();          
    }
    insertdata() 
    {
        if(((<HTMLInputElement>document.getElementById("idno")).value).length>0 && 
        ((<HTMLInputElement>document.getElementById("firstname")).value).length>0 &&
         ((<HTMLInputElement>document.getElementById("lastname")).value).length>0 &&
         ((<HTMLInputElement>document.getElementById("email")).value).length>0 &&
         ((<HTMLInputElement>document.getElementById("phone")).value).length>0 &&
         ((<HTMLInputElement>document.getElementById("des")).value).length>0 &&
         ((<HTMLInputElement>document.getElementById("sal")).value).length>0)
         {
            var tr = document.createElement('TR');
            let td1 = document.createElement('TD');
            let td2 = document.createElement('TD');
            let td3 = document.createElement('TD');
            let td4 = document.createElement('TD');
            let td5 = document.createElement('TD');
            let td6 = document.createElement('TD');
            let td7 = document.createElement('TD');
            td1.appendChild(document.createTextNode(((<HTMLInputElement>document.getElementById("idno")).value).toString()));
            td2.appendChild(document.createTextNode(((<HTMLInputElement>document.getElementById("firstname")).value).toString()));
            td3.appendChild(document.createTextNode(((<HTMLInputElement>document.getElementById("lastname")).value).toString()));
            td4.appendChild(document.createTextNode(((<HTMLInputElement>document.getElementById("email")).value).toString()));
            td5.appendChild(document.createTextNode(((<HTMLInputElement>document.getElementById("phone")).value).toString()));
            td6.appendChild(document.createTextNode(((<HTMLInputElement>document.getElementById("des")).value).toString()));
            td7.appendChild(document.createTextNode(((<HTMLInputElement>document.getElementById("sal")).value).toString()));
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(td7);
            this.tbody.appendChild(tr);
            this.table.appendChild(this.tbody);
            (<HTMLInputElement>document.getElementById("idno")).value="";
            (<HTMLInputElement>document.getElementById("firstname")).value="";
            (<HTMLInputElement>document.getElementById("lastname")).value="";
            (<HTMLInputElement>document.getElementById("email")).value="";
            (<HTMLInputElement>document.getElementById("phone")).value="";
            (<HTMLInputElement>document.getElementById("des")).value="";
            (<HTMLInputElement>document.getElementById("sal")).value="";
        }
        else{
            alert("Enter all the details");
            }
    }
}

var p = new Show();
p.create(employee);
