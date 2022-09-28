mapboxgl.accessToken = MAPBOX_TOKEN;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: market.geometry.coordinates,
    zoom: 12
});

new mapboxgl.Marker()
    .setLngLat(market.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
        .setHTML(
            `<h3>${market.title}</h3>`
        )
    )
    .addTo(map)