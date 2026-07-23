function countVowels(str){
    let result = "";
    let result1=[];
    let count = 0;
    let vowels = "aeiouAEIOU";
    for(let char of str){
        if(vowels.includes(char)){
            count++;
            result += char;
            result1.push(char)
        }
    }
    return `The vowel characters are ${result} with count ${count} - ${result1}`;
}
console.log(countVowels('javascript'));
