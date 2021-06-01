async function AcceptButtonFunction(Jobrole,useremail)
{
    const email=useremail;
    const jobrole=Jobrole;
const res=await fetch('/applicationstatus',{
method:"POST",
headers:{
    "Content-Type":"application/json"
},
body:JSON.stringify({email,jobrole})
});
const data=await res.json();
console.log(data);
}
export default AcceptButtonFunction;