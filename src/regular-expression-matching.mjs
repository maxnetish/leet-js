import {intToRoman} from "./integer-to-roman";

/**
 * Regular expression matching
 * https://leetcode.com/problems/regular-expression-matching/
 *
 */


const args = [
    {
        s: 'aa',
        p: 'a',
        expected: false,
    },
    {
        s: 'aab',
        p: 'c*a*b',
        expected: true,
    }
];

export function runIsMatch() {
    console.log('isMatch');
    args.forEach(arg => {
        console.log(`s:"${arg.s}" p:"${arg.p}" -> ${isMatch(arg.s, arg.p)} expected ${arg.expected}`);
    })
}

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
export function isMatch(s, p) {
    const stringLen = s.length;
    const patternLen = p.length;
    const map = {};

    return check(0, 0);

    function getFromMap(stringIndex, patternIndex) {
        return map[stringIndex + ':' + patternIndex];
    }

    function setToMap(stringIndex, patternIndex, val) {
        map[stringIndex + ':' + patternIndex] = val;
    }

    function check(stringIndex, patternIndex) {
        if (getFromMap(stringIndex, patternIndex) !== undefined) {
            return getFromMap(stringIndex, patternIndex);
        }
        if (stringIndex > stringLen) {
            return false;
        }
        if (stringIndex === stringLen && patternIndex === patternLen) {
            return true;
        }
        if (p[patternIndex] === '.' || p[patternIndex] === s[stringIndex]) {
            // if pattern . (any single char) or pattern char same as string char
            // (exact literal match), go to next check
            setToMap(
                stringIndex,
                patternIndex,
                p[patternIndex + 1] === '*' ?
                    // if next pattern '*' ->
                    // first alt - if char repeated ones, second alt - if char zero repeatted times
                    check(stringIndex + 1, patternIndex) || check(stringIndex, patternIndex + 2) :
                    // next pattern not '*', go to check next string and pattern char
                    check(stringIndex + 1, patternIndex + 1),
            );
        } else {
            // not exact match AND pattern not '.'
            setToMap(
                stringIndex,
                patternIndex,
                p[patternIndex + 1] === '*' ?
                    // if next pattern is '*', got skip pattern with * - it is zero repeated chars
                    check(stringIndex, patternIndex + 2) :
                    // else string mismatch!
                    false,
            );
        }
        return getFromMap(stringIndex, patternIndex);
    }
}
