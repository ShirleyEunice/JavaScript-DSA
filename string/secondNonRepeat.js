function secondNonRepeat(str){
    let obj = {};
    for(let char of str){
        obj[char] = (obj[char] || 0) + 1;
    }
    let count = 0;
    for (let char of str) {
      if (obj[char] === 1) {
        count++;

        if (count === 2) {
          return char;
        }
      }
    }
    return null;
}
console.log(secondNonRepeat('aabbcde'));
