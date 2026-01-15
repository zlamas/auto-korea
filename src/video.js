document.querySelectorAll('.video-container').forEach(el => {
    el.addEventListener(
        'click',
        () => {
            const video = el.querySelector('video');

            video.play().then(() => {
                el.querySelector('.video-play').remove();
                video.controls = true;
            })
        },
        { once: true }
    )
})
