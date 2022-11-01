const form = document.querySelector('#order-form');
const errorMessages = {
    required: 'This field is required',
    userName: 'The name must be between 3 and 25 characters',
    userPhone: 'This phone must be in the format 099 000 00 00',
    userEmail: 'Please enter a valid email address'
};

const validateEl = (el, setMessage = false) => {
    const validity = el.checkValidity();

    el.classList.toggle('is-invalid', !validity);
    el.classList.toggle('is-valid', validity);

    if (!validity && setMessage) {
        const name = el.name;
        const message = el.validity.valueMissing ? errorMessages.required : errorMessages[name];
        document.querySelector(`#${name}-warning`).querySelector('span').innerHTML = message;
    }
}

document.querySelector('#sendButton').addEventListener('click', (e) => {
    validateEl(form);

    form.querySelectorAll('input').forEach(el => {
        validateEl(el, true);
    })
});

form.querySelectorAll('input').forEach(el => {
    el.addEventListener('keyup', () => {
        validateEl(el, true);
    });
});
