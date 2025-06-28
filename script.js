function initMap() {
  const workerLocation = { lat: 44.4268, lng: 26.1025 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: workerLocation,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
      { featureType: "road", elementType: "geometry", stylers: [{ color: "#38414e" }] },
      { featureType: "water", elementType: "geometry", stylers: [{ color: "#17263c" }] }
    ]
  });

  const marker = new google.maps.Marker({
    position: workerLocation,
    map: map,
    title: "Your Fixer is here!"
  });
}
