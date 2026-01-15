document.querySelectorAll('[data-modal]').forEach((el) => {
    const modal = document.getElementById(el.dataset.modal);

    el.addEventListener('click', () => {
        modal.showModal();
    })

    modal.addEventListener('click', (event) => {
        if (event.target.closest('[data-modal-close]')) {
            modal.close();
        }
    })
})
