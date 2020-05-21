secondsToNearestFiveMin = (seconds) => {

    // Divide input by 300 to find number of 5 minute intervals
    let totalFiveMinIntervals = seconds/300;

    // Round up to whole number
    totalFiveMinIntervals = Math.ceil(totalFiveMinIntervals);

    // Multiply by 5 to get total minutes
    let totalMins = totalFiveMinIntervals*5;

    // Return total mins + 'minutes' string

    return totalMins + " minutes";
}

secondsToNearestFiveMin(442);

module.exports = secondsToNearestFiveMin;