export default function validationIndex () {
  const form = document.forms.authorization;
  const login = form.elements.login;
  const loginWrap = document.getElementById('loginWrap');
  const loginValidator = document.getElementById('loginValidator');
  const password = form.elements.password;
  const passwordWrap = document.getElementById('passwordWrap');
  const passwordValidator = document.getElementById('passwordValidator');
  const button = form.elements.button;

  function errorShow () {
    if (login.value.length < 1) {
        loginWrap.classList.add('form-auth__wrap-input_error');
        loginValidator.classList.add('form-validator_active');
        
    } else {
        loginWrap.classList.remove('form-auth__wrap-input_error');
        loginValidator.classList.remove('form-validator_active');
    }

    if (password.value.length < 7) {
      passwordWrap.classList.add('form-auth__wrap-input_error');
      passwordValidator.classList.add('form-validator_active');
    } else {
      passwordWrap.classList.remove('form-auth__wrap-input_error');
      passwordValidator.classList.remove('form-validator_active');
    }
  }

  button.addEventListener('click', errorShow); 
}