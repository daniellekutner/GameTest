var text = "latitude, longitude \n";

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

  text += `${position.coords.latitude}, ${position.coords.longitude} \n`;
  document.getElementById("coords").innerHTML += `latitude: ${position.coords.latitude}, longitude: ${position.coords.longitude} <br>`;
  console.log(text)
}

function download() {
  var fileName = "data.csv";
  var pp = document.createElement('a');
  pp.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  pp.setAttribute('download', fileName);
  pp.click();
}

