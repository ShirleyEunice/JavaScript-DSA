// function countFrequenccy(arr){
//     let result = {};

//     for(let num of arr){
//         if(result[num]){
//             result[num]++;
//         }else{
//             result[num] = 1;
//         }
//     }
//     return result;
// }

// function countFrequencyMap(arr){
//     const map =new Map();

//     for(let num of arr){
//         map.set(num, (map.get(num) || 0) + 1);
//     }
//     return map;
// }

/*How would you find the element that appears the most? */
function mostFrequentElement(arr){
    const obj = {};

    for(let item of arr){
        obj[item] = (obj[item] || 0) + 1;
    }

    let maxCount = 0;
    let maxElement = null;

    for(let key in obj){
        if(obj[key] > maxCount){
            maxCount = obj[key];
            maxElement = key;
    }
    }
    console.log(`The most frequent element is ${maxElement} with a count of ${maxCount}`);
}

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// console.log(countFrequenccy(fruits));
// console.log(countFrequencyMap(fruits));
console.log(mostFrequentElement(fruits));