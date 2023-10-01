// Get references to HTML elements
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

// Initialize variables to store time values
let hour = 0;
let minute = 0;
let second = 0;
let count = 0;

// Initialize a variable to control the timer
let timer = false;

// Event listener for the Start button
startBtn.addEventListener('click', function () {
	// Set the timer to true to start it
	timer = true;
	// Call the stopWatch function to start the timer
	stopWatch();
});

// Event listener for the Stop button
stopBtn.addEventListener('click', function () {
	// Set the timer to false to pause the timer
	timer = false;
});

// Event listener for the Reset button
resetBtn.addEventListener('click', function () {
	// Set the timer to false to stop it
	timer = false;
	// Reset all time values to zero
	hour = 0;
	minute = 0;
	second = 0;
	count = 0;
	// Update the displayed values to show "00"
	document.getElementById('hr').innerHTML = "00";
	document.getElementById('min').innerHTML = "00";
	document.getElementById('sec').innerHTML = "00";
	document.getElementById('count').innerHTML = "00";
});

// Function to update the stopwatch timer
function stopWatch() {
	if (timer) {
		// Increment the count by 1
		count++;

		// Handle rollover for seconds, minutes, and hours
		if (count == 100) {
			second++;
			count = 0;
		}

		if (second == 60) {
			minute++;
			second = 0;
		}

		if (minute == 60) {
			hour++;
			minute = 0;
			second = 0;
		}

		// Convert time values to strings with leading zeros if needed
		let hrString = hour < 10 ? "0" + hour : hour;
		let minString = minute < 10 ? "0" + minute : minute;
		let secString = second < 10 ? "0" + second : second;
		let countString = count < 10 ? "0" + count : count;

		// Update the displayed values
		document.getElementById('hr').innerHTML = hrString;
		document.getElementById('min').innerHTML = minString;
		document.getElementById('sec').innerHTML = secString;
		document.getElementById('count').innerHTML = countString;

		// Call the stopWatch function recursively after 10 milliseconds
		setTimeout(stopWatch, 10);
	}
}
