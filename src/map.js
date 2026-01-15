function initMap() {
    let my_map = new ymaps.Map('map', {
        center: [55.976055, 37.494189],
        zoom: 16,
    });

    let my_placemark = new ymaps.Placemark(my_map.getCenter(), {}, {
        iconLayout: 'default#image',
    });

    my_map.geoObjects.add(my_placemark);
}

ymaps.ready(initMap);
