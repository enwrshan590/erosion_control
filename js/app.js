$(document).foundation();



(function(){
var user = document.querySelector('#username');
var pass = document.querySelector('#password');
var signUser = document.querySelector('#signUpUsername');
var signPass = document.querySelector('#signUpPassword');
var signPassConfirm = document.querySelector('#signUpPassConfirm');
var noAccountForm = document.querySelector("#onNoAccountShouldYou");


function signUpOrIn(event){
var it = event.currentTarget;
if(it.innerHTML === "Sign up"){
  it.innerHTML = "Sign in";
  it.parentNode.querySelector('#dont').innerHTML.replace("Don't","");
}else if(it.innerHTML=== "Sign in"){
  it.innerHTML = "Sign up";
}
var forms = it.parentNode.parentNode.querySelectorAll('form');
for(i=0;i<forms.length;i++){
  forms[i].classList.toggle('hide');
  var shown;
  if(forms[i].classList.contains('hide')){
    shown = 0;
  }else{
    shown = 1;
  }
  TweenLite.to(forms[i], 1, {opacity:shown});
}
}

function checkPass(event){
var it = event.currentTarget;
if(it.value === it.parentNode.querySelector("#signUpPassword").value){
    it.style.color="inherit";
}else{
  it.style.color="#e11";
}
}

function valPass(){
  if(signPass.value != signPassConfirm.value) {
    signPassConfirm.setCustomValidity("Your passwords don't match.");
  } else {
    signPassConfirm.setCustomValidity('');
  }
}

noAccountForm.querySelector('#signUp').addEventListener('click',signUpOrIn,false);
signPassConfirm.addEventListener('input', checkPass, false);
signPass.addEventListener('change', valPass, false);
signPassConfirm.addEventListener('keyup', valPass, false);
})();
