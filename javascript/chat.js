
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
authenticate()  ;

// values
let sendbutton=document.getElementById('send')
let app = document.querySelector('#list');
let logoutbtn=document.getElementById('logout')
let refereshbtn=document.getElementById('refresh')


//displaying username with unput box
document.getElementById('username').innerHTML=loginuser[0].fullname;;


//getting chat info from localstorage
var userchat = JSON.parse(localStorage.getItem("chatmsg"))
? JSON.parse(localStorage.getItem("chatmsg"))
: [];

//display msg using localstorage
userchat.map(({fullname,date,msg})=>{
  console.log(fullname,date,msg)
  let li = document.createElement('li');
  li.textContent = date+"  "+fullname+" : "+ msg;
  app.append(li);
})


//function to dispay msg in chatbox after clicking
sendbutton.addEventListener('click',function(e){
      e.preventDefault();
      let msg=document.getElementById('text') ;
      const d = new Date();
      const date=d.getDate()+"/"+eval(d.getMonth()+1)+"/"+d.getDate();
      if(msg.value.trim()){
            
        //to display the msg in chatbox;
            let li = document.createElement('li');
            li.textContent = date+"  "+loginuser[0].fullname+" : "+ msg.value;
            app.append(li);
             

          //to stoe the data in localstorage
            userchat.push({date:date,msg:msg.value,fullname:loginuser[0].fullname})  
            localStorage.setItem("chatmsg", JSON.stringify(userchat));

            msg.value=''  //to clear the input box


      }else{
        window.alert("please Enter your msg")
      }


})

//referesh the chat section
refereshbtn.addEventListener('click',function(){
  document.querySelector('#list').innerHTML=` `
})

//logout 
logoutbtn.addEventListener('click', function () {
  localStorage.removeItem('loginusers');
});



