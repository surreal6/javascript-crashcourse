//(function() {

var subs = [[107250,110500,"Esta hoja tiene un pasado oscuro."],[111800,115800,"Ha derramado mucha sangre inocente."], [118000,121450,"Eres una tonta por viajar sola, sin ninguna preparación."],[121750,124800,"Tienes suerte de que aún corra sangre por tus venas."]]; 


video = document.getElementById("video");

console.log("hola");

$("#time").click(function(){
  console.log(video.currentTime);
});

$("#search").click(function(){
  video.currentTime = 100.000;
});

video.addEventListener("timeupdate", function(){
	//console.log(video.currentTime, subs[0][0]/1000)
	subs.forEach(function(i) {
		//console.log(i[0]/1000 , video.currentTime , i[1]/1000);
		if ((i[0]/1000 < video.currentTime) && (video.currentTime < i[1]/1000)) {
			$(".subtitle").html(i[2]);
		}
	});
});





//})

// https://developer.mozilla.org/en-US/Apps/Build/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video

// subtitulos con jquery
// http://v2v.cc/~j/jquery.srt/