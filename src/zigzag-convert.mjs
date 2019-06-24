/**
 *  https://leetcode.com/problems/zigzag-conversion/
 *  ZigZag Conversion
 */

const args = [
    {
        s: 'PAYPALISHIRING',
        numRows: 3,
        expected: 'PAHNAPLSIIGYIR'
    },
    {
        s: 'PAYPALISHIRING',
        numRows: 4,
        expected: 'PINALSIGYAHRPI'
    }
];

export function runZigzagConverion() {
    console.log('Zigzag converion');
    args.forEach(arg => {
        console.log(`s:${arg.s} numRows:${arg.numRows} -> ${zigzagConvert(arg.s, arg.numRows)} expected:${arg.expected}`);
    })
}

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

export function zigzagConvert(s, numRows) {
    if (numRows === 1) {
        return s;
    }

    const cycleLen = numRows + numRows - 2;
    const resultAsArray = [];
    let positionInCycle;

    for (let ind = 0, len = numRows; ind < len; ind++) {
        resultAsArray[ind] = [];
    }

    for (let ind = 0, len = s.length; ind < len; ind++) {
        positionInCycle = ind % cycleLen;

        if (positionInCycle < numRows) {
            resultAsArray[positionInCycle].push(s[ind]);
        } else {
            resultAsArray[cycleLen - positionInCycle].push(s[ind]);
        }
    }

    return resultAsArray.reduce((acc, curr) => {
        return acc + curr.join('');
    }, '');
}
