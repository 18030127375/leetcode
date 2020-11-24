/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let end = nums1.length - 1,
    mindex = m - 1,
    nindex = n - 1;
  while (mindex >= 0 || nindex >= 0) {
    if (mindex < 0) {
      for (let i = 0; i <= nindex; i++) {
        nums1[i] = nums2[i];
      }
      nindex = -1;
    } else if (nindex < 0) {
      mindex = -1;
    } else if (nums1[mindex] > nums2[nindex]) {
      nums1[end--] = nums1[mindex--];
    } else {
      nums1[end--] = nums2[nindex--];
    }
  }
};

module.exports.merge = merge;
