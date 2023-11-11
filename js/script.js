const form = document.getElementById('form');
const email = document.getElementById('email');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', e => {

  const emailValue = email.value.trim();

  if (emailValue === '' || !isEmail(emailValue)) {
    e.preventDefault();
    errorMessage.classList.add('error');
    email.classList.add('error');
    setTimeout(() => {
      errorMessage.classList.remove('error');
      email.classList.remove('error');
    }, 1500);
  } else {
    window.open("message.html", "_blank");
    //window.location.href = "message.html";
  }
})

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// display succesful message




