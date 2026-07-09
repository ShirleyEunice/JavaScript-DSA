function twoSum(num, target){
    const map = new Map();

    for(let i = 0; i < num.length; i++){
        const complement = target - num[i];
        if(map.has(complement)){
            return [map.get(complement), i]; // to return indexes of the two numbers that add up to the target
            // return [complement, num[i]] // to return array values of the two numbers that add up to the target
        }
        map.set(num[i], i);
    }
    return "No two sum solution found";
}

const nums = [2, 9, 11, 15];
console.log(twoSum(nums, 9)); // Output: [0, 1]