const btnRating = document.querySelectorAll('.ratings button');
const btnSubmit = document.querySelector('#submit');
let lastClicked;

btnRating.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (lastClicked)
            lastClicked.classList.remove('selected');

        btn.classList.add('selected');
        lastClicked = btn;
    });
});

btnSubmit.addEventListener('click', () => {
    if (!lastClicked)
        return window.alert("Please select a number");

    document.querySelector('.card-thank').classList.remove('d-none');
    document.getElementById('rating').innerText = lastClicked.innerText;
    document.querySelector('.card-rating').classList.add('d-none');
});

