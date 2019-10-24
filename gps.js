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

$('#download').on("click", function() {
  function download() {
    var jsonObject = {
      "name": "John",
      "age": 31,
      "city": "New York"
    };
    var fileContents = JSON.stringify(jsonObject, null, 2);
    var fileName = "data.json";
    var pp = document.createElement('a');
    pp.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(fileContents));
    pp.setAttribute('download', fileName);
    pp.click();
  }
  setTimeout(function() {
    download()
  }, 500);
});