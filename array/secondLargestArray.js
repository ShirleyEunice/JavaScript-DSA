/* We don't want to sort because sorting takes O(n log n). Instead keep tracking largest and second largest 
Think about these edge cases too:
[5, 5, 5]
[10]
[-5, -1, -10]
[100, 90]
*
Initially set largest and secondLargest as -Infinity.
Case 1: num > largest, then secondLargest becomes the old largest, largest becomes num\
Case 2: If the number is smaller than largest but bigger than secondLargest. Update only secondLargest.
Case 3: If the number is equal to the largest, do nothing.This prevents duplicates.

Interview Tip:
This solution traverses the array once, so the time complexity is O(n). 
It uses only two variables, so the space complexity is O(1). 
It also correctly handles duplicate values by ensuring the second largest value is unique.
*/

function secondLargest(arr){
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let num of arr){
        if(num > largest){
            secondLargest = largest;
            largest = num;
        }else if(num > secondLargest && num !== largest){
            secondLargest = num;
        }
    }
    if(secondLargest === -Infinity){
        return null;
    }
    return secondLargest;

}
const arr = [10, 5, 20, 8, 20, 15];
console.log(secondLargest(arr));