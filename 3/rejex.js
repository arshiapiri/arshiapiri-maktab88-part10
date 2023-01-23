function validation() {
  const fname = document.getElementById('fname').value;
  const lname = document.getElementById('lname').value;
  const email = document.getElementById('email').value;
  const psw = document.getElementById('psw').value;

  const fnamecheck = /^[A-Za-z. ]{3,30}$/;
  const lnamecheck = /^[A-Za-z. ]{3,20}$/;
  const emailcheck = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const pswcheck = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  if (fnamecheck.test(fname)) {
    document.getElementById('fnameerror').innerHTML = "";
  } else {
    document.getElementById('fnameerror').innerHTML ='Required, Only Characters and Maximum 30 Characters!';
    return false;
  }
  if (lnamecheck.test(lname)) {
    document.getElementById('lnameerror').innerHTML = "";
  } else {
    document.getElementById('lnameerror').innerHTML = "Required, Only Characters and Maximum 30 Characters!";
    return false;
  }
  if (emailcheck.test(email)) {
    document.getElementById('mail').innerHTML = "";
  } else {
    document.getElementById('mail').innerHTML = "example@domain.com";
    return false;
  }
  if (pswcheck.test(psw)) {
    document.getElementById('pass').innerHTML = "";
  } else {
    document.getElementById('pass').innerHTML = "Minimum 8 characters, at least 1 letter, 1 number and 1 specialcharacter (@$!%*#?&).";
    return false;
  }
}