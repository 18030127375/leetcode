/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let len = height.length,
    maxArea = -Infinity;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      maxArea = Math.max(maxArea, (j - i) * Math.min(height[i], height[j]));
    }
  }
  return maxArea;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea2 = function (height) {
  let start = 0,
    end = height.length - 1,
    maxArea = -Infinity;
  while (start < end) {
    maxArea = Math.max(
      maxArea,
      (end - start) * Math.min(height[start], height[end])
    );
    height[start] > height[end] ? --end : ++start;
  }
  return maxArea;
};
