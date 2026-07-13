function reverseArray(arr){
    let left = 0;
    let right = arr.length - 1;

        while(left < right){
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;

            left++;
            right--;
        }

        return arr;
}

let arr = [10, 20, 30, 40, 50];
console.log(reverseArray(arr)); // Output: [5, 4, 3, 2, 1]