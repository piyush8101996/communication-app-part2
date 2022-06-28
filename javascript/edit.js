var loginuser = JSON.parse(localStorage.getItem("loginusers"))
    ? JSON.parse(localStorage.getItem("loginusers"))
    : [];
//protected routing
function authenticate(){
  if(loginuser.length===0){
    alert('User is not logedin ')
    window.location.href="welcome.html"
  }
}
authenticate() 

//url info
var Url = (window.location).href; 
var Id = Url.substring(Url.lastIndexOf('=') + 1);


let user_records = JSON.parse(localStorage.getItem("registerusers"))
      

let userfind=user_records.filter((user)=>user.id===parseInt(Id))   

document.querySelector("#fullname").value=userfind[0].fullname;
document.querySelector('#email').value=userfind[0].email;
        
      
//edit the user
let editbtn=document.getElementById('edit')
editbtn.addEventListener('click',function(){
let fullname=document.querySelector("#fullname").value;
let email=document.querySelector('#email').value

if(fullname===""){
      window.alert('Fullname feild should not be empty')
}
if(email===""){
      window.alert('email feild should not be empty')
}
if(fullname&&email){
      user_records.map((user,index)=>{
            if(user.id==Id){
                  user.fullname=fullname;
                  user.email=email;
            }
      })
      localStorage.setItem("registerusers", JSON.stringify(user_records));  //updating in localstorage
}


})
