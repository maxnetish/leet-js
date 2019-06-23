/**
 * Container With Most Water
 * https://leetcode.com/problems/container-with-most-water/
 * @type {number[][]}
 */

const args = [
    [
        1, 8, 6, 2, 5, 4, 8, 3, 7
    ]
];

export function runMaxArea() {
    console.log(`maxArea:`);
    args.forEach(arg => {
        console.log(`${arg} -> ${maxArea(arg)} expected: 49`);
    });
}

export function maxArea(height) {
    let result = 0;
    for (let indLeft = 0, maxLeft = height.length - 1; indLeft < maxLeft; indLeft++) {
        for (let indRight = indLeft + 1, maxRight = height.length; indRight < maxRight; indRight++) {
            let currentArea = (indRight - indLeft) * Math.min(height[indLeft], height[indRight]);
            result = Math.max(currentArea, result);
        }
    }
    return result;
}
