const secondsToNearestFiveMin = require("./time-converter");

test('Rounds time in seconds to nearest 5 minute interval', () => {
    expect(secondsToNearestFiveMin(442)).toBe("10 minutes");
});