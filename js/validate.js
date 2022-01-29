function validation() {
    var email = document.getElementById("email").value;
    var text;
    var errormsg1 = document.getElementById("errormsg1")
    var msg = document.getElementById("msg").value;
    var error4 = document.getElementById("error4")
    var subject = document.getElementById("subject").value;
    var errmsg3 = document.getElementById("errmsg3")
    var tel = document.getElementById("tel").value;
    var error2 = document.getElementById("error2")


    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Please enter valid email"
        errormsg1.innerHTML = text;
        return false;

    }
    if (msg.length < 10) {
        text = "minimum 10 words"
        error4.innerHTML = text;
        return false;
    }
    if (subject.length < 5) {
        text = "minimum 5 letters"
        errmsg3.innerText = text;
        return false;
    }
    if (isNaN(tel) || tel.length != 10) {
        text = "enter the correct number"
        error2.innerHTML = text;
        return false;
    }

    alert("submit succesfully");
    return true;
}