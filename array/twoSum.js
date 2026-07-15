// nums = [2, 7, 11, 15]
// target = 9

// Start
// ↓

// Map = {}

// Read 2
// Need 7
// Map doesn't have 7
// Store 2

// Map:
// 2 → 0

// ↓

// Read 7
// Need 2

// Map has 2 ✔

// Answer:
// 2 + 7 = 9

function twoSum(num, target){
    const map = new Map(); //stores in key-value pairs

    for(let i = 0; i < num.length; i++){
        const complement = target - num[i];
        if(map.has(complement)){
            // return [map.get(complement), i]; // to return indexes of the two numbers that add up to the target
            return [complement, num[i]] // to return array values of the two numbers that add up to the target
        }
        map.set(num[i], i);
    }
    return "No two sum solution found";
}

const nums = [2, 7, 11, 15];
console.log(twoSum(nums, 9)); // Output: [0, 1]