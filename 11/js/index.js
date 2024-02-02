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
