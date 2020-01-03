var vadeo = document.getElementById("vadeo");
var boton = document.getElementById("lolos"); //play/stop clickeando en el boton
var mut = document.getElementById("lolo");
var video = document.querySelector("video"); //play/stop clickeando el video

boton.onclick = function togglePlay() {
  if (vadeo.paused){
  	vadeo.play();
  } else {
  	vadeo.pause();
  } 
};

video.onclick = function toggleVideo() {
  if (video.paused){
  	video.play();
  } else {
  	video.pause();
  } 
};

vadeo.mute = function () {
	vadeo.muted = true;
}

vadeo.unmute = function () {
	vadeo.muted = false;
} 	

mut.onclick = function() {
	if (vadeo.muted){
		vadeo.unmute();	
	} else {
		vadeo.mute();
	}
}

vadeo.autoplay = true;
vadeo.load();
vadeo.mute();


// HASTA ACA EL MEDIAPLAYER ANDA BIEN

//  Intentando implementar el IntersectionObserver
const sectionOne = document.querySelector('video');

const options = {
	threshold: 0,
};

const observer = new IntersectionObserver (function(entries,
	observer) {
	entries.forEach(entry => {
		console.log(entry);	
	});	
}, options);

observer.observe(sectionOne);
