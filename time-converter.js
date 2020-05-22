// This function rounds a time in seconds up to the nearest 5 minute interval and returns the result as a string

secondsToNearestFiveMin = (seconds) => {

    // Input should be a valid number of seconds
    if (isNaN(seconds) || seconds < 0) {
        return "Invalid input. Input must be a positive number.";
    }

    // Divide input by 300 to find number of 5 minute intervals
    // Round up to whole number
    let totalFiveMinIntervals = Math.ceil(seconds/300);

    // Multiply by 5 to get total minutes
    let totalMins = totalFiveMinIntervals*5;

    // Return total mins + 'minutes' string

    return totalMins + " minutes";
}

console.log(secondsToNearestFiveMin(600));

module.exports = secondsToNearestFiveMin;