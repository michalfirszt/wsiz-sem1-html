// #1
const eventStartInput = document.getElementById('start-input');
const eventEndInput = document.getElementById('end-input');

const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', () => {
    const start = eventStartInput.value;
    const end = eventEndInput.value;

    if (start > end) {
        eventStartInput.setAttribute('class', 'form-control border border-danger');
        eventEndInput.setAttribute('class', 'form-control border border-danger');
    } else {
        eventStartInput.setAttribute('class', 'form-control');
        eventEndInput.setAttribute('class', 'form-control');
    }
})

// #2
const form = document.getElementById('custom-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputIds = ['name-input', 'email-input', 'content-input'];

    inputIds.forEach((inputId) => {
        const input = document.getElementById(inputId);
        const inputErrorMessage = document.getElementById(`${inputId}-error`);

        console.log(inputErrorMessage);

        if (input.getAttribute('required') !== null && input.value === '') {
            input.setAttribute('class', 'form-control border border-danger');
        } else {
            input.setAttribute('class', 'form-control');
        }
    })
});
