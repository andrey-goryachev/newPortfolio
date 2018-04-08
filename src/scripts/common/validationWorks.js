export default function validationWorks() {
  const form = document.forms.formFeedBack;
  const button = form.elements.button;
  const name = form.elements.name;
  const nameValidator = document.getElementById('nameValidator');
  const email = form.elements.email;
  const emailValidator = document.getElementById('emailValidator');
  const message = form.elements.message;
  const messageValidator = document.getElementById('messageValidator');


  function errorShow() {
    if (name.value.length < 2) {
      name.classList.add('error');
      nameValidator.classList.add('comments-form-validator_active');
    } else {
      name.classList.remove('error');
      nameValidator.classList.remove('comments-form-validator_active');
    }

    if (email.value.indexOf('@') == -1) {
      email.classList.add('error');
      emailValidator.classList.add('comments-form-validator_active');
    } else {
      email.classList.remove('error');
      emailValidator.classList.remove('comments-form-validator_active');
    }

    if (message.value.length < 5) {
      message.classList.add('error');
      messageValidator.classList.add('comments-form-validator_active');
    } else {
      message.classList.remove('error');
      messageValidator.classList.remove('comments-form-validator_active');
    }
  }

  button.addEventListener('click', errorShow);
}