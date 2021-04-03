console.log("Hello");

function initMap() {
  var location = {lat: 52.629045, lng: -1.143251};
  var map = new google.maps.Map(document.getElementById("googleMap"), {
    zoom: 10,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}
