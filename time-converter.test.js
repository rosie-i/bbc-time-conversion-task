const secondsToNearestFiveMin = require("./time-converter");

test('Rounds time in seconds to nearest 5 minute interval', () => {
    expect(secondsToNearestFiveMin(422)).toBe("10 minutes");
});