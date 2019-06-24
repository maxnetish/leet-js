/**
 *  https://leetcode.com/problems/median-of-two-sorted-arrays/
 *  Median of Two Sorted Arrays
 */

const args = [
    {
        nums1: [1, 3],
        nums2: [2],
        expected: 2,
    },
    {
        nums1: [1, 2],
        nums2: [3, 4],
        expected: 2.5,
    }
];

export function runFindMedianSortedArrays() {
    console.log('findMedianSortedArrays');
    args.forEach(arg => {
        console.log(`nums1:${arg.nums1} nums2:${arg.nums2} -> ${findMedianSortedArrays(arg.nums1, arg.nums2)} expected:${arg.expected}`);
    })
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
export function findMedianSortedArrays(nums1, nums2) {
    const combinedLen = nums1.length + nums2.length;
    const medLength = Math.floor(combinedLen / 2) + 1;
    const mergedArray = [];
    let ind1 = 0, ind2 = 0;

    for (let ind = 0; ind < medLength; ind++) {
        if (ind1 >= nums1.length && ind2 < nums2.length) {
            mergedArray.push(nums2[ind2]);
            ind2++;
        } else if (ind2 >= nums2.length && ind1 < nums1.length) {
            mergedArray.push(nums1[ind1]);
            ind1++;
        } else if (nums1[ind1] < nums2[ind2]) {
            mergedArray.push(nums1[ind1]);
            ind1++;
        } else {
            mergedArray.push(nums2[ind2]);
            ind2++;
        }
    }

    if (combinedLen % 2) {
        return mergedArray[medLength - 1];
    } else {
        return (mergedArray[medLength - 1] + mergedArray[medLength - 2]) / 2;
    }
}
