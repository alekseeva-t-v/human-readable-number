/**
 * Преобразует число в его строковое представление.
 *
 * @param {number} num Исходное число.
 * @return {string} строковое представление числа.
 */
module.exports = function toReadable(number) {
    const ones = {
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
    };

    const prefix = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    // Для чисел от 0 до 19
    if (number <= 19) {
        return ones[number];
    }

    // Для чисел от 20 до 99
    // Создаем массив, где будем хранить отдельные цифры числа
    const numArray = String(number).split("");

    //  Для чисел от 20 до 99
    if (numArray.length === 2 && number > 19) {
        if (+numArray[1] === 0) {
            return `${prefix[numArray[0]]}`; 
        } else {
            return `${prefix[numArray[0]]} ${ones[numArray[1]]}`;
        }
    }

    // Для чисел от 100 до 999
    if (numArray.length === 3) {
        // Для чисел у которых 2 и  3 цифры равны нулю
        if (+numArray[1] === 0 && +numArray[2] === 0) {
            return `${ones[numArray[0]]} hundred`;
        } if (+numArray[1] === 0) {
            return `${ones[numArray[0]]} hundred ${ones[numArray[2]]}`;
            // Для чисел от 110 до 119
        } else if (+numArray[1] < 2) {
            return `${ones[numArray[0]]} hundred ${
                ones[+[numArray[1], numArray[2]].join("")]
            }`;
            // Для чисел от 120 до 999
        } else {
            if (numArray[1] == 0 && numArray[2] == 0) {
                return `${ones[numArray[0]]} hundred`;
            } else if (numArray[2] == 0) {
                return `${ones[numArray[0]]} hundred ${prefix[numArray[1]]}`;
            } else {
                return `${ones[numArray[0]]} hundred ${prefix[numArray[1]]} ${
                    ones[numArray[2]]
                }`;
            }
        }
    }
};
