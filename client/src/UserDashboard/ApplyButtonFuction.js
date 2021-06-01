async function ApplyButtonFunction(jobrole,companyname)
{
    const res=await fetch("/getdata",{
        method:"GET",
        headers:{
          "Content-Type":"application/json"
        }
      });
      const data=await res.json();
      const name=data.name;
      const email=data.email;
      const phone=data.phone;
      const location=data.location;
      const companyName=companyname;
      const JobRole=jobrole;
   const res2=await fetch("/seekers",{
       method:"POST",
       headers:{
           "Content-Type":"application/json"
       },
       body:JSON.stringify({name,phone,email,companyName,JobRole,location})
   });
   const data2=await res2.json();
   console.log(data2);
    if(data2.status===422|| !data)
    {
      window.alert("Already Applied");
      console.log("Invalid");
    }
    else{
      window.alert("Applied Successfully");
      console.log("Applied Successfully");
    }
}
export default ApplyButtonFunction;