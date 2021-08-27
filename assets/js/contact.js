
// form validation

const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
  const isValidPhone = (phone) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(phone).toLowerCase());
  };

  
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
//   const phoneInput = document.querySelector('#phone');
  const form = document.querySelector('.contact-form');
  const thankMessage = document.querySelector('.thank-message');

  let isFormValid = false
  let isValidationOn = false

  const inputs = [nameInput, emailInput]

  const resetElement = (element) => {
        element.classList.remove('invalid')
        element.nextElementSibling.classList.add('hidden')
  }

  const invalidateElement = (element) => {
    element.classList.add('invalid')
    element.nextElementSibling.classList.remove('hidden')
  }


  const validateInputs = () => {
        if (!isValidationOn) return

        isFormValid = true
        
        inputs.forEach(input => resetElement(input))

      if(!nameInput.value) {
        invalidateElement(nameInput)
        isFormValid = false
      }

      if(!isValidEmail(emailInput.value)) {
        invalidateElement(emailInput)
        isFormValid =false
      }

    //   if(!isValidPhone(phoneInput.value)) {
    //     invalidateElement(phoneInput)
    //     isFormValid = false
    //   }


  }

  form.addEventListener('submit', e => {
      e.preventDefault();
      isValidationOn = true
      validateInputs()
      if(isFormValid) {
          form.remove();
          
          thankMessage.classList.remove('hidden');
      }
  })

  inputs.forEach(input => {
      input.addEventListener('input', () => {
          validateInputs();
      })
  })

  
// send function
// function sendMail(params) {

//     const name = document.getElementById('name');
//     const email = document.getElementById('email');
//     const msg = document.getElementById('message');
    
//     let tempParams = {
//         from_name: name.value,
//         to_name: email.value,
//         message: msg.value
//     }

//     emailjs.send('service_t2fm9w7', 'template_5zp3dkh', tempParams)
//     .then((res) => {
//         console.log('success', res.status);
//         name.value = "";
//         email.value = "";
//         msg.value = "";
//     })
// }