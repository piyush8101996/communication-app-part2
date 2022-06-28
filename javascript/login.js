let btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  let username = document.getElementById("email");
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let pass = document.getElementById("password");

  //login feild validation
  if (username.value === "") {
    document.getElementById("error").innerHTML =
      "Email Feild Should not be empty";
    document.getElementById("email").classList.add("email");
  } else if (!username.value.match(mailformat)) {
    document.getElementById("error").innerHTML = "Email Format is not valid";
    document.getElementById("email").classList.add("email");
  } else {
    document.getElementById("error").innerHTML = "";
    document.getElementById("error").style.borderColor = "";
    document.getElementById("email").classList.remove("email");
  }

  if (pass.value === "") {
    document.getElementById("passerr").innerHTML =
      "Password feild should not be empty";
    document.getElementById("password").classList.add("email");
  } else {
    document.getElementById("passerr").innerHTML = "";
    document.getElementById("password").classList.remove("email");
  }

  //getting data from localstorage
  var user = JSON.parse(localStorage.getItem("registerusers"))
    ? JSON.parse(localStorage.getItem("registerusers"))
    : [];
  var loginuser = JSON.parse(localStorage.getItem("loginusers"))
    ? JSON.parse(localStorage.getItem("loginusers"))
    : [];

  //checked user exist or not
  let userfound = user.filter(({ email }) => email === username.value);
  const registeruser = userfound[0];



  //Authentication of user
  if (username.value.trim() && pass.value.trim()) {
    if (userfound.length === 0) {
      document.getElementById("notverified").innerHTML = "User is not Regsitered";
    } else if (registeruser.password === pass.value && registeruser.email === username.value) 
    {

      loginuser.push(userfound[0]);
      localStorage.setItem("loginusers", JSON.stringify(loginuser));
      window.location.href = "../pages/login_success.html"
      document.getElementById("notverifies").innerHTML = "";
    }

    else {
      console.log("password is not correct");
      document.getElementById("notverified").innerHTML = "Password is InCorrect";
    }
  }
})