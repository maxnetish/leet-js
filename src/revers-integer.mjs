/**
 *  https://leetcode.com/problems/reverse-integer/
 *  Reverse Integer
 *
 */

const args = [
    [123, 321],
    [-123, -321],
    [120, 21],
    [1147483649, 0],
    [-1147483649, 0]
];

export function runReverse() {
    console.log('reverse');
    args.forEach(arg => {
        console.log(`${arg[0]} -> ${reverse(arg[0])} expected: ${arg[1]}`);
    })
}

/**
 * @param {number} x
 * @return {number}
 */
export function reverse(x) {
    const valid = [-2147483647, 2147483646];

    if (x > valid[1] || x < valid[0]) {
        return 0;
    }

    const sign = x < 0 ? -1 : 1;
    const xWithoutSign = x * sign;
    const xWithoutSignAsString = xWithoutSign.toFixed();
    let xWithoutSignAsStringReversedArray = [];

    // make array with reversed digits
    for (let ind = xWithoutSignAsString.length - 1; ind >= 0; ind--) {
        xWithoutSignAsStringReversedArray.push(xWithoutSignAsString[ind]);
    }

    const result = parseInt(xWithoutSignAsStringReversedArray.join(''), 10) * sign;

    if (result > valid[1] || result < valid[0]) {
        return 0;
    }

    return result;
}
