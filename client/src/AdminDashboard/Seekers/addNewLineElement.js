import AcceptButtonFunction from './AcceptButtonFunction';
function addNewLineElement(data)
  {

    let td1=document.getElementById('userName');
    const li1 = document.createElement("li");
    li1.className="lit";
    li1.appendChild(document.createTextNode(data.name));
    td1.appendChild(li1);
   
    let td2=document.getElementById('phone');
    const li2 = document.createElement("li");
    li2.className="lit";
    li2.appendChild(document.createTextNode(data.phone));
    td2.appendChild(li2);

    let td3=document.getElementById('email');
    const li3 = document.createElement("li");
    li3.className="lit";
    li3.appendChild(document.createTextNode(data.email));
    td3.appendChild(li3);

    let td4=document.getElementById('location');
    const li4 = document.createElement("li");
    li4.className="lit";
    li4.appendChild(document.createTextNode(data.location));
    td4.appendChild(li4);

    let td5=document.getElementById('jobrole');
    const li5 = document.createElement("li");
    li5.className="lit";
    li5.appendChild(document.createTextNode(data.JobRole));
    td5.appendChild(li5);

    const acceptbutton = document.createElement("input");
    acceptbutton.type = "button";
    acceptbutton.value = "Accept";
    acceptbutton.addEventListener("click",function(){
    AcceptButtonFunction(data.JobRole,data.email)},false);
    let td6=document.getElementById('button');
    const li6 = document.createElement("li");
    li6.className="lit";
    li6.appendChild(acceptbutton);
    td6.appendChild(li6);
  }
  export default addNewLineElement;