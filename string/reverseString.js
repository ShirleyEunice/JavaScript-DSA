function reverseString(str){
    let reverse = [];

    for(let i = str.length -1; i >=0; i--){
        reverse += str[i];
    }
    return reverse
}

const str = "Hello";
console.log(reverseString(str))