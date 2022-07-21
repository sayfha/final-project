/*page sign up*/
var email=document.getElementById('email1')
console.log(email)
var fullName=document.getElementById('fulname')
console.log(fullName)
var userName =document.getElementById('usrname')
console.log(userName)
var password =document.getElementById('passw')
console.log(password)
var signUp=document.getElementById('sign')
console.log(signUp)   


signUp.addEventListener("click",loginbox)
function loginbox(e) {

e.preventDefault()

    console.log(email.value)
    var usernameValue = userName.value;
	var emailValue = email.value;
	var passwordValue = password.value;
	var fullNameValue = fullName.value;
    

    if (emailValue!='sayf.harrabi15@gmail.com' ){
        alert('Email is required')
    }
    else if(fullNameValue===''){
        alert( 'FullName is required')
    }
    else if(usernameValue===''){
        alert('User Name is required')
    }
    else if(passwordValue.length<8){
        alert('password must be at least 8 letters')
    }
    else{
        console.log("success")
        window.location.replace("log.html")
    }
}
