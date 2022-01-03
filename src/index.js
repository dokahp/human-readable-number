module.exports = function toReadable(number, result = "") {
    const numbs = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    let stringNumber = number.toString();
    if (stringNumber.length == 1) {
        result += numbs[stringNumber];
        return result;
    } else if (stringNumber.length == 2) {
        if (stringNumber[0] == 0 && stringNumber[1] > 0) {
            return toReadable(stringNumber.slice(1), result);
        } else if (stringNumber < 20) {
            result += numbs[stringNumber];
            return toReadable("", result);
        } else if (stringNumber % 10 === 0) {
            result += numbs[stringNumber[0] + "0"];
            return toReadable("", result);
        } else {
            result += `${numbs[stringNumber[0] + "0"]} `;
            return toReadable(stringNumber.slice(1), result);
        }
    } else if (stringNumber.length == 3) {
        return stringNumber[1] == 0 && stringNumber[2] == 0
            ? toReadable("", `${numbs[stringNumber[0]]} hundred`)
            : toReadable(
                  stringNumber.slice(1),
                  `${numbs[stringNumber[0]]} hundred `
              );
    } else {
        return result;
    }
};
