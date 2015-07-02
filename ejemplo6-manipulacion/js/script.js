(function(){


  // var webcamStream;
  var video = document.querySelector("#video");
  var canvas = document.querySelector("#canvas");
  var context = canvas.getContext("2d");

  function startVideo() {
     navigator.webkitGetUserMedia({audio: true, video: true},
       successCallback, errorCallback);
     function successCallback(stream) {
         video.src = window.URL.createObjectURL(stream);
         // webcamStream = stream;
     }
     function errorCallback(error) {
         console.error('An error occurred: [CODE ' + error.code + ']');
     }
  }

  function stopVideo() {
    video.src = "";
  }


  function drawVideoToCanvas(){
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    var pixelData = context.getImageData(0, 0, canvas.width, canvas.height);
    
    pixelData.data = convertToGrayScale(pixelData.data);
    
    
    context.putImageData(pixelData, 0, 0);

    setTimeout(drawVideoToCanvas, 50);
  }

  function captureImage() {

    var src = canvas.toDataURL();
    var img = document.querySelector("#capture");
    img.src = src;

  }
  

  // Event handlers
  $("#start-button").click(function(){
    startVideo();
    drawVideoToCanvas();
  });

  $("#stop-button").click(function(){
    stopVideo();
  });

  $("#capture-button").click(function(){
    captureImage();
  });


})();