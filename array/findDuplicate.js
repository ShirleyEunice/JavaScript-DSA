function findDuplicate(arr){
    let seen = new Set();
    let duplicate = new Set();

    for(let num of arr){
        if(seen.has(num)){
            duplicate.add(num);
        }
        seen.add(num);
    }
    return [...duplicate];
    //returing set in array format
}
const arr = [1,2,3,2,4,5,1,6];
console.log(findDuplicate(arr))