/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build out functions */
function togglePlay() {
	if (video.paused) {
		video.play();
		toggle.innerHTML = '❚ ❚';
		console.log('paused');
	} else {
		video.pause();
		toggle.innerHTML = '►';
	}
}

function skip() {
	video.currentTime += parseFloat(this.dataset.skip);
}

function handleProgress() {
	//so that the progress bar reflects where the video is at!
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
}

function handleProgressUpdate(e) {
	const percentage = Math.round((e.offsetX / progress.offsetWidth) * video.duration);
	console.log(percentage);
	video.currentTime = percentage;
}

function handleRangeChange() {
	video[this.name] = this.value;
	console.log(this.name);
	console.log(video);
	console.log(video[this.name]);
}

/* Hook up the event listeners to the functions*/
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(skipButton => {
	skipButton.addEventListener('click', skip);
});
ranges.forEach(range => {
	range.addEventListener('change', handleRangeChange);
});
progress.addEventListener('click', handleProgressUpdate);
