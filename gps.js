function initGeolocation() {
  
  if (navigator && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  } else {
    console.log('Geolocation is not supported');
  }
}
 
function errorCallback() {}
 
function successCallback(position) {
  
  var mapUrl = "http://maps.google.com/maps/api/staticmap?center=";
  mapUrl = mapUrl + position.coords.latitude + ',' + position.coords.longitude;
  mapUrl = mapUrl + '&zoom=15&size=512x512&maptype=roadmap&sensor=false';
  var imgElement = document.getElementById("static-map");
  imgElement.src = mapUrl;
  alert("hi:",position.coords.latitude,position.coords.longitude)
}