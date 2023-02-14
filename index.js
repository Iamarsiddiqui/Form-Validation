const form=document.getElementById('form')
const username=document.getElementById('username')
const password=document.getElementById('password')
const email=document.getElementById('email')
const passwordcheck=document.getElementById('passwordcheck')

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    checkInput();
});

function checkInput(){
    //get value from the inputs
   const usernameValue= username.value.trim();
   const passwordValue =password.value.trim();
   const emailValue=email.value.trim();
   const passwordcheckValue=passwordcheck.value.trim();
   
   if(usernameValue==''){
    // show error
    //add error 
    setErrorFor(username, 'useename cannot be blanck')
   }else{
    //add success class
    setSuccessFor(username)
   }
}