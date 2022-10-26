import Throttle from 'lodash.throttle';

const refs = {
  formEl: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
  STORAGE_KEY: 'feedback-form-state',
};

getFormData();

function getFormData() {
  const comingObj = JSON.parse(localStorage.getItem(refs.STORAGE_KEY));
  if (comingObj) {
    refs.input.value = comingObj.email;
    refs.textarea.value = comingObj.message;
  }
}

refs.formEl.addEventListener('input', Throttle(storFormData,500));
refs.formEl.addEventListener('submit', onFormSubmit);

const objToSave = {};

function storFormData(event) {
  objToSave[event.target.name] = event.target.value;
  localStorage.setItem(refs.STORAGE_KEY, JSON.stringify(objToSave));
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log(objToSave);
  localStorage.removeItem(refs.STORAGE_KEY);
  event.currentTarget.reset();
  // refs.input.value = "";
  // refs.textarea.value = "";
}
