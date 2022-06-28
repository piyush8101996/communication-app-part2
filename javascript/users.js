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
//for logout
let logoutbtn=document.getElementById('logout')
logoutbtn.addEventListener('click', function () {
    localStorage.removeItem('loginusers');
  });

//manage users data
let user_records = JSON.parse(localStorage.getItem("registerusers"))
      ? JSON.parse(localStorage.getItem("registerusers"))
      : [];
console.log(user_records)

let table = `
<table class="table table-striped">
<thead class="theader">
  <tr>
    <th scope="col" class="column">Name</th>
    <th scope="col" class="column">User Email Id</th>
    <th scope="col"></th>
  </tr>
</thead>
<tbody >
  `
user_records.map(({email,fullname,id})=>{
    table=table+`
    <td class="column">${fullname}</td>
    <td class="column">${email}</td>
    <td class="action">
      <p><a class="hyperlink" href="edit-user.html?userid=${id}">Edit </a></p>
      <span>|</span>

      <!--Delete btn for prompt-->
      <button
        type="button"
        class="deletebtn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick="deletion(${id})"
      >
        Delete
      </button>

      
    </td>
  </tr>`
    
})

table=table+` </tbody>
</table>`

let tabledata=document.getElementById('tablecontainer');
tabledata.innerHTML=table

function deletion (userid){
  console.log(userid)
  let deletebtn=document.getElementById("okbtn")
  console.log(deletebtn)
  deletebtn.onclick=function(){
    console.log('user...............')
    if(loginuser[0].id===userid){
      window.alert('User cant be deleted')
      window.location.href="users.html"
     
    }
    else{
      user_records.map((user,index)=>{
        console.log('user......')
        console.log(user.id===userid,index)
  
        if(user.id===userid){
          user_records.splice(index,1)
        }
        localStorage.setItem("registerusers", JSON.stringify(user_records));
      window.location.href="users.html"
      })
      
    }
    

  }
 
}