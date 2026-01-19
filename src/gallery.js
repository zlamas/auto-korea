document.querySelectorAll('.gallery').forEach((gallery) => {
    let selectedIndex = 0;
    let items = gallery.querySelectorAll('.gallery-item');
    let galleryView = gallery.querySelector('.gallery-view');
    let galleryVideoView = gallery.querySelector('.gallery-video-view');

    function updateGallery() {
        gallery.querySelector('.selected')?.classList.remove('selected');

        if (selectedIndex !== null) {
            galleryVideoView.classList.add('hidden');
            galleryView.classList.remove('hidden');

            selectedIndex = (selectedIndex + items.length) % items.length;
            items[selectedIndex].classList.add('selected');
            galleryView.src = items[selectedIndex].src;
        } else {
            galleryView.classList.add('hidden');
            galleryVideoView.classList.remove('hidden');
            galleryVideoView.play();
        }
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
        } else if (
            event.target.closest('.gallery-video') &&
            selectedIndex !== null
        ) {
            galleryVideoView.src = event.target.closest('.gallery-video').dataset.src;
            selectedIndex = null;
            updateGallery();
        }
    });

    updateGallery();
})
