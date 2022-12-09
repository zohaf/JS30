let countdown;

const displayerTimeLeft = document.querySelector('.display__time-left');
const displayerEndTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

// how does a timer works?
// the amount of seconds we wish to put the timer for
// and we set interval to count down, from the given time.

function timer(seconds) {
	clearInterval(countdown);
	const now = Date.now();
	const then = now + seconds * 1000;
	displayTimeLeft(seconds);
	displayEndTime(then);

	countdown = setInterval(() => {
		const secondsLeft = Math.floor((then - Date.now()) / 1000);

		if (secondsLeft < 0) {
			clearInterval(countdown);
			return;
		}
		//display it
		displayTimeLeft(secondsLeft);
	}, 1000);
}

function displayTimeLeft(seconds) {
	const minutes = Math.floor(seconds / 60);
	const remainderSeconds = seconds % 60;

	const display = `${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
	document.title = display;

	displayerTimeLeft.textContent = display;
}

function displayEndTime(timestamp) {
	const end = new Date(timestamp);
	const hour = end.getHours();
	const minutes = end.getMinutes();
	const seconds = end.getSeconds();
	const display = `be back at ${hour}:${minutes}:${seconds}`;
	displayerEndTime.textContent = display;
}
function startTimer() {
	secondsLeft = parseInt(this.dataset.time);
	timer(secondsLeft);
}
buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function (e) {
	e.preventDefault();
	const mins = this.minutes.value;
	timer(mins * 60);
	this.reset();
	console.log(mins);
});
