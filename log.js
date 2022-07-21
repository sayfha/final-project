/*page login*/
var userName2=document.getElementById('user-name2')
var password2=document.getElementById('passw2')
var logIn=document.getElementById('buttn-log')
console.log(userName2)
console.log(password2)
console.log(logIn)



logIn.addEventListener("click",logbox)
function logbox(e) {

e.preventDefault()
var userName2value=userName2.value;
var password2value=password2.value;

if(userName2value===''){
    alert('User Name is required')
}
else if(password2value.length<8){
    alert('password must be at least 8 letters')
}
else{
    
    window.location.replace("second.html")
}
}