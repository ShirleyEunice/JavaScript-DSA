function isAnagram(str1, str2){
    if(str1.length !== str2.length) return;

    let obj = {};

    for(let char of str1){
        obj[char] = (obj[char] || 0) + 1;
    }
    for(let char of str2){
        if(!obj[char]){
            return false;
        }
        obj[char]--;
    }
    return true;
}
console.log(isAnagram('listen','silent'));
