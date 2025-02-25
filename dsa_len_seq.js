function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;

    let dp = [];

    for (let num of nums) {
        let left = 0, right = dp.length;

    
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (dp[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        if (left < dp.length) {
            dp[left] = num;
        } else {
            dp.push(num);
        }
    }

    return dp.length;
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
