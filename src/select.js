document.querySelectorAll('.select').forEach((select) => {
    const fieldBox = select.querySelector('.field-box');

    select.addEventListener('click', (event) => {
        const option = event.target.closest('.option');

        if (option) {
            fieldBox.textContent = option.innerText;
            select.querySelector('.selected')?.classList.remove('selected');
            option.classList.add('selected');
            select.open = false;
        }
    })
})

document.addEventListener('click', (event) => {
    let openSelect = document.querySelector('.select[open]');

    if (openSelect && !openSelect.contains(event.target)) {
        openSelect.open = false;
    }
})
