
function addNewLineElement1(data)
{
  let td1=document.getElementById('companyName');
  const li1 = document.createElement("li");
  li1.className="lit";
  li1.appendChild(document.createTextNode(data.companyName));
  td1.appendChild(li1);
 
  let td2=document.getElementById('jobrole');
  const li2 = document.createElement("li");
  li2.className="lit";
  li2.appendChild(document.createTextNode(data.jobrole));
  td2.appendChild(li2);


  let td3=document.getElementById('jobtype');
  const li3 = document.createElement("li");
  li3.className="lit";
  li3.appendChild(document.createTextNode(data.jobtype));
  td3.appendChild(li3);

  let td4=document.getElementById('exp');
  const li4 = document.createElement("li");
  li4.className="lit";
  li4.appendChild(document.createTextNode(data.experience));
  td4.appendChild(li4);

  let td5=document.getElementById('date');
  const li5 = document.createElement("li");
  li5.className="lit";
  li5.appendChild(document.createTextNode(data.date));
  td5.appendChild(li5);


  const postedbutton = document.createElement("input");
  postedbutton.type = "button";
  postedbutton.value = "Posted";
  let td6=document.getElementById('button');
  const li6 = document.createElement("li");
  li6.className="lit";
  li6.appendChild(postedbutton);
  td6.appendChild(li6);
}
export default addNewLineElement1;