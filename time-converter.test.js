const secondsToNearestFiveMin = require("./time-converter");

test("Rounds time in seconds to nearest 5 minute interval", () => {
    expect(secondsToNearestFiveMin(442)).toBe("10 minutes");
    expect(secondsToNearestFiveMin(0)).toBe("0 minutes");
    expect(secondsToNearestFiveMin(1)).toBe("5 minutes");
    expect(secondsToNearestFiveMin(300)).toBe("5 minutes");
    expect(secondsToNearestFiveMin(301)).toBe("10 minutes");
    expect(secondsToNearestFiveMin(3000)).toBe("50 minutes");
    expect(secondsToNearestFiveMin(6000)).toBe("100 minutes");
});

test("Invalid inputs will return error message", () => {
    expect(secondsToNearestFiveMin("hello")).toBe("Invalid input. Input must be a positive number.");
    expect(secondsToNearestFiveMin(-50)).toBe("Invalid input. Input must be a positive number.");
});