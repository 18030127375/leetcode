/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length + nums2.length < 2) return nums1[0] || nums2[0] || 0;
  let len = nums1.length + nums2.length;
  let firstIndex = 0,
    secondIndex = 0,
    fVal,
    sVal;
  let flag = Math.ceil(len / 2);
  while (firstIndex + secondIndex <= flag) {
    if (nums1[firstIndex] < nums2[secondIndex]) {
      if (firstIndex + secondIndex == flag) {
        sVal =
          nums1[firstIndex] != undefined
            ? nums1[firstIndex++]
            : nums2[secondIndex++];
      } else {
        fVal =
          nums1[firstIndex] != undefined
            ? nums1[firstIndex++]
            : nums2[secondIndex++];
      }
    } else {
      if (firstIndex + secondIndex == flag) {
        sVal =
          nums2[secondIndex] != undefined
            ? nums2[secondIndex++]
            : nums1[firstIndex++];
      } else {
        fVal =
          nums2[secondIndex] != undefined
            ? nums2[secondIndex++]
            : nums1[firstIndex++];
      }
    }
  }
  return len % 2 === 0 ? (fVal + sVal) / 2 : fVal;
};

module.exports.findMedianSortedArrays = findMedianSortedArrays;
