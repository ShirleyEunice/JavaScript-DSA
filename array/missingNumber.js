// When array is starts from 1 to next, we can use this formula and find the missing element

// function missingNum(arr, n){
//     const expectedSum = (n *(n +1)) /2;

//     let actualSum =0;
//     for(let num of arr){
//         actualSum += num;
//     }
//     return expectedSum - actualSum;
// }
// const arr = [1, 2, 3, 5];
// console.log(missingNum(arr, 5))

//when the array is random and we have to find the random number
function missNum(arr, start, end){
    const set = new Set(arr);

    const missing = [];

    for(let i = start; i <=end; i++){
        if(!set.has(i)){
            missing.push(i);
        }
    }
    return missing;
}
const arr1=[11, 12, 13, 17, 20];
console.log(missNum(arr1, 11, 20))