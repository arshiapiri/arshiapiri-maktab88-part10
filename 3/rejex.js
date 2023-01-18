function validation() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var psw = document.getElementById('psw').value;

    var fnamecheck = /^[A-Za-z. ]{3,30}$/;
    var lnamecheck = /^[A-Za-z. ]{3,20}$/;
    var emailcheck = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var pswcheck = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>).{8,32}$/;

    if (fnamecheck.test(fname)) {
      document.getElementById('fnameerror').innerHTML = "";
    } else {
      document.getElementById('fnameerror').innerHTML = "**Should not contain digits and special characters";
      return false;
    }
    if (lnamecheck.test(lname)) {
      document.getElementById('lnameerror').innerHTML = "";
    } else {
      document.getElementById('lnameerror').innerHTML = "**Should not contain digits and special characters";
      return false;
    }
    if (emailcheck.test(email)) {
      document.getElementById('mail').innerHTML = "";
    } else {
      document.getElementById('mail').innerHTML = "**Email-id is invalid";
      return false;
    }
    if (pswcheck.test(psw)) {
      document.getElementById('pass').innerHTML = "";
    } else {
      document.getElementById('pass').innerHTML = "**Should not contain digits and special characters";
      return false;
    }
  }