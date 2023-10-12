// Gets random integer: [1...6]
function randomNum() {
    return Math.floor(Math.random() * 6) + 1;
};

// Get n rolls
function getRolls(n) {
    return Array.from({ length: n }, () => randomNum())
}

// Get sum of nums
function sum(nums) {
    return nums.reduce((prev, cur) => prev + cur, 0)
}

export { randomNum, getRolls, sum };