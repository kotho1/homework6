var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log("Starting");
	console.log(video.volume);
	video.autoplay = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol = document.querySelector("#volume").innerHTML = (video.volume*100) + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	let bump = video.playbackRate;
	bump *= 0.1;
	video.playbackRate -= bump;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.duration - video.currentTime <= 5) {
		video.currentTime = 0;
	} else {
		video.currentTime += 5;
	}
	console.log("Current location " + video.currentTime);
	video.play();
});

document.querySelector("#mute").addEventListener("click", function() {	
	if (!video.muted) {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Muted");
	} else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Unmuted");
	}
});

document.querySelector("#volumeSlider").addEventListener("click", function() {
	video.volume = this.value/100;
	document.querySelector("#volume").innerHTML = (this.value) + "%";
	console.log(video.volume);
});

document.querySelector("#old").addEventListener("click", function() {
	document.querySelector("body").classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click", function() {
	document.querySelector("main").classList.remove("oldTime");
});