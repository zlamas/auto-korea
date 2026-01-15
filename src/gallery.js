document.querySelectorAll('.gallery').forEach((gallery) => {
    let selectedIndex = 0;
    let items = gallery.querySelectorAll('.gallery-item');
    let galleryView = gallery.querySelector('.gallery-view');

    function updateGallery() {
        selectedIndex = (selectedIndex + items.length) % items.length;
        gallery.querySelector('.selected')?.classList.remove('selected');
        items[selectedIndex].classList.add('selected');
        galleryView.src = items[selectedIndex].src;
    }

    gallery.addEventListener('click', (event) => {
        if (event.target.matches('.gallery-prev')) {
            selectedIndex -= 1;
            updateGallery();
        } else if (event.target.matches('.gallery-next')) {
            selectedIndex += 1;
            updateGallery();
        } else if (event.target.matches('.gallery-item')) {
            selectedIndex = Array.prototype.indexOf.call(items, event.target);
            updateGallery();
        } else if (event.target.closest('.gallery-more')) {
            items.forEach((item) => item.classList.remove('hidden', 'lg:hidden'));
            event.target.closest('.gallery-more').remove();
        }
    });

    updateGallery();
})
