// Import 'isEmail' do validator
import isEmail from 'validator/lib/isEmail';

// Salvamos na 'const' a classe com a mensagem de error
const SHOW_ERROR_MESSAGES = 'show-error-message';

// Seleção do form e dos campos que precisamos validar
const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

// Captura de evento de submit do form
form.addEventListener('submit', function (e: Event) {
  e.preventDefault();
  // Função para ocultar as error messages
  hideErrorMessages(this);
  // Função para checar campos vazios
  checkForEmptyFields(username, email, password, password2);
  // Função para checar o campo email vazio
  checkEmail(email);
  // Função de check equal password
  checkEqualPasswords(password, password2);
  // Condição para verificar se podemos enviar o form
  if (shouldSendForm(this)) console.log('FORM SENT');
});

// Função showErrorMessage
function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

// Função para check de email
function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, 'Invalid email');
}

// Função para check de strins dos passwords
function checkEqualPasswords(
  password: HTMLInputElement,
  password2: HTMLInputElement,
): void {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'The passwords entered are not the same');
    showErrorMessage(password2, 'The passwords entered are not the same');
  }
}

// Função de check de campos vazios
function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'Field cannot be empty');
  });
}

// Função hideErrorMessages
function hideErrorMessages(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
}

// Função para verificar se há algum input com meessagem de error, para o form ser enviado
function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;
  form
    // Se na verifição houver uma messagem de error, mudaremos a flag para 'false'
    .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .forEach((element) => (send = false));
  return send;
}

showErrorMessage(username, 'message');
hideErrorMessages(form);
