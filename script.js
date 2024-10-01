
const sendEmail = (e) => {
  e.preventDefault();

  
};

// form submit event listner 
 document.getElementById('emailForm').addEventListener('submit',(e)=>{
  e.preventDefault()
 const form =  document.getElementById('emailForm')

//  console.log(email.value)
//  console.log(message.value)
// console.log(form)

// contact service from emailJs library 
emailjs
    .sendForm('service_7034rdc', 'template_mwybras', form, {
      publicKey: 'eZs_1JGJBa7Dj7XjM',
    })
    .then(
      () => {
        document.getElementById('notfi').classList.add('show-notification')
        // alert('Message has been sent successfully')
      },
      (error) => {
        alert('FAILED...', error.text);
      },
    );

})


// add event listner for notification button to close the modle

document.getElementById('notfi-btn').addEventListener('click',()=>{
  document.getElementById('notfi').classList.remove('show-notification')
})
