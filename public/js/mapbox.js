/* eslint-disable */
export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZXJpY2NsYXNzIiwiYSI6ImNrZGY2dXRtazEwc2syc3FxNW40enZleGwifQ.K8eRiNXk7sqVyMg8x7a5RA';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/ericclass/ckdf74ma6074d1iqs9r11gsc7',
    scrollZoom: false,
    // center: [-118.113491, 34.111745],
    // zoom: 10,
    // interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    // new mapboxgl.Popup({
    //   offset: 30,
    // })
    //   .setLngLat(loc.coordinates)
    //   .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
    //   .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
