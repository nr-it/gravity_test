function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;

    let dp = []; // Stores the increasing subsequence

    for (let num of nums) {
        let left = 0, right = dp.length;

        // Binary search for the correct position to replace or insert
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (dp[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        // Replace or add
        if (left < dp.length) {
            dp[left] = num;
        } else {
            dp.push(num);
        }
    }

    return dp.length;
}

// Example usage
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // Output: 4
