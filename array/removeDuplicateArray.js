
// Set stores only unique values
// (...) - converts the Set back into an array
function removeDuplicate(arr){
    return [...new Set(arr)];
}


//without set
function removeDuplicateWithoutSet(arr){
    const uniqueArr = [];

    for(let num of arr){
        if(!uniqueArr.includes(num)){
            uniqueArr.push(num);
        }
    }
    return uniqueArr;
}

const arr = ["a", "b", "a", "c", "b", "d"];
console.log(removeDuplicate(arr)); // Output: [1, 2, 3, 4, 5]
console.log(removeDuplicateWithoutSet(arr)); // Output: [1, 2, 3, 4, 5]