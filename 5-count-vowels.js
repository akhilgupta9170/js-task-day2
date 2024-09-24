// Count Vowels in string

function countVowels(sentence){
    let len=sentence.length;
    let count=0;
    for (let i = 0; i < len; i++) {
        let char = sentence[i].toLowerCase();
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            count++;
        }

    
}
    return count;   

}

console.log(countVowels("Hello"));