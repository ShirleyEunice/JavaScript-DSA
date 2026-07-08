function countFrequenccy(arr){
    let result = {};

    for(let num of arr){
        if(result[num]){
            result[num]++;
        }else{
            result[num] = 1;
        }
    }
    return result;
}

function countFrequencyMap(arr){
    const map =new Map();

    for(let num of arr){
        map.set(num, (map.get(num) || 0) + 1);
    }
    return map;
}

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
console.log(countFrequenccy(fruits));
console.log(countFrequencyMap(fruits));