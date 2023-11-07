const contactForm = document.getElementById('contactForm');
const successModal = document.getElementById('successModal');
const errorModal = document.getElementById('errorModal');
const successModalButton = document.getElementById('successModalButton');
const errorModalButton = document.getElementById('errorModalButton');
const submitButton = document.getElementById('submitButton');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    submitButton.classList.remove("button");
    submitButton.classList.add("button-disable");
    submitButton.disabled = true;

    const jsonData = {
        name,
        email,
        message
    };
    fetch('https://email.logic-gate.online', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData)
    })
        .then(response => {
            if (response.status == 201) {
                openModal('successModal');
                contactForm.reset();
                submitButton.disabled = false;
                submitButton.classList.add("button");
                submitButton.classList.remove("button-disable");
            } else {
                openModal('errorModal');
                submitButton.disabled = false;
                submitButton.classList.add("button");
                submitButton.classList.remove("button-disable");
            }
        })
        .catch(error => {
            openModal('errorModal');
            submitButton.disabled = false;
            submitButton.classList.add("button");
            submitButton.classList.remove("button-disable");
        })
});

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

successModalButton.addEventListener("click", () => closeModal('successModal'));
errorModalButton.addEventListener("click", () => closeModal('errorModal'));