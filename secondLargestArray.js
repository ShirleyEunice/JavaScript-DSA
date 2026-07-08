/* We don't want to sort because sorting takes O(n log n). Instead keep tracking largest and second largest 
Think about these edge cases too:
[5, 5, 5]
[10]
[-5, -1, -10]
[100, 90]
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