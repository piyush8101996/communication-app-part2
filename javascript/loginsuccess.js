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


var email=loginuser[0].email;
console.log(email)
document.getElementById('user').innerHTML= email


//logout
let logoutbtn=document.getElementById('logout')
logoutbtn.addEventListener('click', function () {
    localStorage.removeItem('loginusers');
  });



  ///////////////////////////////////////////////////////////////


  