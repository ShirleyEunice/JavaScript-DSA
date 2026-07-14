function rotateArray(arr, k){
    k = k % arr.length;

    return [...arr.slice(-k), ...arr.slice(0, arr.length - k)];

}
const arr = [12, 13, 14, 2, 34,  12];
const k = 3;
console.log(rotateArray(arr,k));
