


console.log("its working")
function validateName() {

    console.log('hello')

    var name = document.getElementById('name').value;
  
    if(name.length == 0) {
  
      producePrompt('Name is required', 'name-error' , 'red')
      return false;
  
    }
  
    if (!name.match(/^[A-Za-z]+$/)) {
  
      producePrompt('Only Alphabets allowed','name-error', 'red');
      return false;
  
    }
 
  
    producePrompt('', 'name-error', 'green');
    return true;
  
  }


  function validateEmail () {
      console.log('emal validation')
    var email = document.getElementById('contact-email').value;
  
    if(email.length == 0) {
  
      producePrompt('Email Required','email-error', 'red');
      return false;
  
    }
  
    if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      producePrompt('Invalid Email', 'email-error', 'red');
      return false;
  
    }
  
    producePrompt('', 'email-error', 'green');
    return true;
  
  }

  function validatePhone() {

    var phone = document.getElementById('contact-phone').value;
      if(phone.length == 0) {
        producePrompt('Phone number is required.', 'phone-error', 'red');
        return false;
      }

      if(phone.length != 10) {
        producePrompt('Enter a valid number', 'phone-error', 'red');
        return false;
      }
  
      if(!phone.match(/^[0-9]{10}$/)) {
        producePrompt('Only numbers Allowed' ,'phone-error', 'red');
        return false;
      }
  
      
      producePrompt('', 'phone-error', 'green');
      return true;
  
  }





  function producePrompt(message, promptLocation, color) {
  
    document.getElementById(promptLocation).innerHTML = message;
    document.getElementById(promptLocation).style.color = color;
  
  
  }