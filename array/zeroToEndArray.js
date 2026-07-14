function zeroToEnd(arr){
    let index = 0;

    for(let i = 0 ; i<arr.length; i++){
        if(arr[i] !== 0){ // 0 !== 0 (f), 1 !==0 (t), 0 !== 0 (f), 3 !== 0 (t), 12 !== 0 (t)
            arr[index] = arr[i]; // arr[0] = 1 - [1,1,0,3,12], arr[1] = 3 - [1,3,0,3,12], arr[2] = 12 - [1,3,12,3,12]
            index++; //0->1->2->3
        }
    }
    while(index < arr.length){ //3<5 (t) -> 4 < 5 (t) -> 5 < 5 (f)
        arr[index] = 0; // [1,3,12,0,12] -> [1,3,12,0,0]
        index++;
    }
    return arr;
}
const arr = [0,1,0,3,12];
console.log(zeroToEnd(arr));

