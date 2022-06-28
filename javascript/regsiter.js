let registerHandler = document.getElementById("registerbtn");

registerHandler.addEventListener("click", function (e) {
  e.preventDefault();
  let fullname = document.getElementById("fullname");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let cpassword = document.getElementById("cpassword");
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  
  //fullname validation
  if (fullname.value.trim() === "") {
    document.getElementById("fnameerror").innerHTML =
      "Fullname Feild Should not be empty";
    document.getElementById("fullname").classList.add("email");
  } else if (fullname.value.length < 6) {
    document.getElementById("fnameerror").innerHTML =
      "Fullname should be greater than 6";
    return document.getElementById("fullname").classList.add("email");
  } else {
    document.getElementById("fnameerror").innerHTML = "";
    document.getElementById("fullname").classList.remove("email");
  }

  //email validation
  console.log(email);
  if (email.value === "") {
    document.getElementById("emailerror").innerHTML =
      "Email feild should not be empty";
    document.getElementById("email").classList.add("email");
  } else if (!email.value.match(mailformat)) {
    document.getElementById("emailerror").innerHTML =
      "Email Format is not valid";
    document.getElementById("email").classList.add("email");
  } else {
    document.getElementById("emailerror").innerHTML = "";
    document.getElementById("email").classList.remove("email");
  }

  //password validation
  if (password.value === "") {
    document.getElementById("passerr").innerHTML =
      "Password feild should not be empty";
    document.getElementById("password").classList.add("email");
  } else if (password.value.length < 6) {
    document.getElementById("passerr").innerHTML =
      "password should be greater than 6";
   return  document.getElementById("password").classList.add("email");
  } else {
    document.getElementById("passerr").innerHTML = "";
    document.getElementById("password").classList.remove("email");
  }

  //confirmpasswordvalidation
  if (cpassword.value === "") {
    document.getElementById("cpasserr").innerHTML =
      "Confirm Password feild should not be empty";
    document.getElementById("cpassword").classList.add("email");
  } else if (cpassword.value !== password.value) {
    document.getElementById("cpasserr").innerHTML =
      "password and confirm password doesnt match";
    document.getElementById("cpassword").classList.add("email");
  } else {
    document.getElementById("cpasserr").innerHTML = "";
    document.getElementById("cpassword").classList.remove("email");
  }

  if (
    fullname.value.trim()  &&
    password.value.trim() &&
    password.value.trim() === cpassword.value.trim() &&
    email.value.match(mailformat)
  ) {
  
    let user_records = JSON.parse(localStorage.getItem("registerusers"))
      ? JSON.parse(localStorage.getItem("registerusers"))
      : [];
    console.log(user_records);
    const usersdetail = {
      fullname: fullname.value,
      email: email.value.toLowerCase(),
      password: password.value,
      id: Date.now(),
    };
  
    //exist user is checked
    const existarray = user_records.filter(
      (user) => user.email === email.value
    );
    
    if (existarray.length) {
      document.getElementById("exist").innerHTML = "user is already exist";
    } else {
      document.getElementById("exist").innerHTML = "";
  
      user_records.push(usersdetail);
      // console.log(result)
      localStorage.setItem("registerusers", JSON.stringify(user_records));
  
      window.location.href = "../pages/register_success.html";
    }
  }
  console.log(fullname.value);
});


