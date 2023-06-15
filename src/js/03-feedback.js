import throttle from 'lodash.throttle';
// 
// 
const LOCAL_KEY = 'feedback-form-state';
// 
form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);

let formData = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
const { email, message } = form.elements;
reloadPage();

function onInputData(e) {
  formData = { email: email.value, message: message.value };
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

function reloadPage() {
  if (formData) {
    email.value = formData.email || '';
    message.value = formData.message || '';
  }
}


function onFormSubmit(e) {
  e.preventDefault();
  console.log({ email: email.value, message: message.value });
  
       if (email.value === "" || message.value === "") {
           return alert(`Please fill in all the fields!`);
       }
  
  localStorage.removeItem(LOCAL_KEY);
  e.currentTarget.reset();
  formData = {};
}
