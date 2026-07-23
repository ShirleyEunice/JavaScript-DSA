// I love Javascript programming
// longest word - programming

function longestWord(sentence){
    const words = sentence.split(" ");
    let longest = "";

    for(let word of words){
        if(word.length > longest.length){
            longest = word;
        }
    }
    return longest;
}
console.log(longestWord("I Love JavaScript Programming"));
