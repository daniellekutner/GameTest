function initGeolocation() {
  console.log("fn initGeolocation")
  if (navigator && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  } else {
    console.log('Geolocation is not supported');
  }
}
 
function errorCallback() {}
 
function successCallback(position) {
  console.log("fn: successCallback",position)
}