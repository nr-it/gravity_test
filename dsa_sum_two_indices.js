function twoSum(nums, target) {
    if (!Array.isArray(nums) || typeof target !== "number") {
        throw new Error("Invalid input: nums must be an array and target must be a number.");
    }

    const numIndices = new Map();

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (numIndices.has(complement)) {
            return [numIndices.get(complement), i];
        }

        numIndices.set(nums[i], i);
    }

    throw new Error("No solution found: Ensure exactly one solution exists.");
}

const nums = [2, 7, 11, 15];
const target = 18;
console.log(twoSum(nums, target));
