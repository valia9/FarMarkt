mapboxgl.accessToken = 'pk.eyJ1IjoiZXh0ZXJuYWwtbWFzdGVycGllY2UiLCJhIjoiY2t2OGp1MDV2MWc3NDJyb2t1Nng1cW9meiJ9.122aI9wm7M9QEVAywCfXyA';
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