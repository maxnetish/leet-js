/**
 *  Integer to Roman
 * https://leetcode.com/problems/integer-to-roman/ter/
 * @type {*[]}
 */

const args = [
    [58, 'LVIII'],
    [1994, 'MCMXCIV'],
    [2019, 'unknown'],
    [1970, 'unknown'],
    [1394, 'unknown'],
    [1333, 'unknown'],
    [2003, 'unknown'],
    [1949, 'unknown']
];

export function runInToRoman() {
    console.log('intToRoman');
    args.forEach(arg => {
        console.log(`${arg[0]} -> ${intToRoman(arg[0])} expected ${arg[1]}`);
    });
}

export function intToRoman(num) {
    const romeDigitRanges = [
        {
            div: 100,
            tokens: ['C', 'CD', 'D', 'CM']
        },
        {
            div: 10,
            tokens: ['X', 'XL', 'L', 'XC']
        },
        {
            div: 1,
            tokens: ['I', 'IV', 'V', 'IX']
        }
    ];
    const romeDigitThousand = 'M';

    let result = '';
    let remaindToSpred = num;

    let remainder = remaindToSpred % 1000;
    let numberInRange = (remaindToSpred - remainder) / 1000;
    remaindToSpred = remainder;

    for (let ind = 0, len = numberInRange; ind < len; ind++) {
        result += romeDigitThousand;
    }

    function rangeToTokens(acc, range, remainderInRange) {
        if (remainderInRange === 9) {
            return acc + range.tokens[3];
        } else if (remainderInRange >= 5) {
            return rangeToTokens(acc + range.tokens[2], range, remainderInRange - 5);
        } else if (remainderInRange === 4) {
            return acc + range.tokens[1];
        } else if (remainderInRange > 0) {
            return rangeToTokens(acc + range.tokens[0], range, remainderInRange - 1);
        } else {
            return acc;
        }
    }

    romeDigitRanges.forEach(range => {
        if (remaindToSpred) {
            remainder = remaindToSpred % range.div;
            numberInRange = (remaindToSpred - remainder) / range.div;
            result += rangeToTokens('', range, numberInRange);
            remaindToSpred = remainder;
        }
    });

    return result;
}
