// Variable
const sendBtn = document.getElementById('sendBtn'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message'),
    resetBtn = document.getElementById('resetBtn'),
    sendEmailForm = document.getElementById('email-form');

// Event Listeners
    eventListeners();

    function eventListeners(){
        // App Init
        document.addEventListener('DOMContentLoaded',appInit);

        // Validate the form
            email.addEventListener('blur', validateField);
            subject.addEventListener('blur', validateField);
            message.addEventListener('blur', validateField);

            //Send Email & Reset Button
            sendEmailForm.addEventListener('submit', sendEmail);
            resetBtn.addEventListener('click', resetForm);
    }


// function
function appInit()
{
    sendBtn.disabled = true;
}
function sendEmail(e){
    e.preventDefault();

    //show the spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'block';

    // SHOW THE  IMAGE
    const sendEmailImg = document.createElement('img');
    sendEmailImg.src = 'img/mail.gif';
    sendEmailImg.style.display = 'block';
    //Hide spinner then show the send Email image
    setTimeout(function(){
        //Hide the spinner
        spinner.style.display = 'none';

        // showimage
        document.querySelector('#loaders').appendChild(sendEmailImg);

        //After 5 sec hide the image and reset the form
        setTimeout(function(){
            sendEmailForm.reset();
            sendEmailImg.remove();
        }, 5000);

    }, 3000);
}

//Validate the Fields
function validateField(){
   let errors;

   //Validate the Length of the Field
   validateLength(this);

   //Validate the email
   if(this.type === 'email'){
       validateEmail(this);
   }
   //Both will return errors, then checks of they're any errors
   errors = document.querySelectorAll('.error');

   //Check that the inputs are not empty
   if(email.value !== '' && subject.value !== '' && message.value !== ''){
       if(errors.length=== 0){
           //Button should be enabled
           sendBtn.disabled = false;
       }

   }
}
//Validate the Length  of the field
function validateLength(field){
    if(field.value.length > 0){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }
    else{
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}
//Validate email (checks for @ in the value)

function validateEmail(field){
    let emailText = field.value;
    //check if the emailText contains the @sign
    if(emailText.indexOf('@') !== -1){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }
    else{
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
    
}
// Reset the Form
function resetForm(){
    sendEmailForm.reset();
}