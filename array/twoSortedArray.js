function twoSortedArray(arr1, arr2){
    let i = 0;
    let j = 0;

    const result = [];

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        }else if(arr1[i] > arr2[j]){
            result.push(arr2[j]);
            j++;
        }else{
            result.push(arr1[i]);
            i++;
            j++;
        }
    }
    while(i < arr1.length){
        result.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        result.push(arr2[j]);
        j++;
    }
    return result;
}

const arr1 = [1, 3, 7];
const arr2 = [3, 4, 5, 9];
console.log(twoSortedArray(arr1, arr2)); // Output: [1, 2, 3, 3, 4, 13, 72]