function validasi_login(){
    let username = document.getElementById("input_username").value
    let password = document.getElementById("input_password").value
    var a = 0
    var b = 0

    if (username == "") {
        document.getElementById("span_username").innerHTML = "Nama harus diisi"
        return false
    }
    else {
        document.getElementById("span_username").innerHTML = ""
        a = 1
    }
    if (password == "") {
        document.getElementById("span_password").innerHTML = "Password harus diisi"
        return false
    }
    else {
        document.getElementById("span_password").innerHTML = ""
        b = 1
    }
    if (a == 1 && b == 1) {
        window.location.href = "home.html"
        return false
    }
    return true
}

function validasi_register(){
    let username = document.getElementById("input_username").value
    let email = document.getElementById("input_email").value
    let password = document.getElementById("input_password").value
    let confirm_password = document.getElementById("input_confirm_password").value
    var a = 0
    var b = 0
    var c = 0
    var d = 0
     if (username == "") {
        document.getElementById("span_username").innerHTML = "Nama harus diisi"
        return false
    }
    else {
        document.getElementById("span_username").innerHTML = ""
        a = 1
    }
    if(email == ""){
        document.getElementById("span_email").innerHTML = "Email harus diisi"
        return false
    }
    else if (!email.endsWith("@gmail.com")) {
        document.getElementById("span_email").innerHTML = "Email harus diakhiri @gmail.com"
        return false
    }
    else {
        document.getElementById("span_email").innerHTML = ""
        b = 1
    }
    if (password == "") {
        document.getElementById("span_password").innerHTML = "Password harus diisi"
        return false
    }
    else {
        document.getElementById("span_password").innerHTML = ""
        c = 1
    }
    if(confirm_password == ""){
        document.getElementById("span_confirm_password").innerHTML = "Confirm password harus diisi"
        return false
    }
    else if(confirm_password != password){
        document.getElementById("span_confirm_password").innerHTML = "Password tidak sesuai"
        return false
    }
    else{
        document.getElementById("span_confirm_password").innerHTML = ""
        d = 1
    }
    if (a == 1 && b == 1 && c == 1 && d == 1) {
        window.location.href = "home.html"
        return false
    }
    return true
}