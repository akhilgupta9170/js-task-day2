//Reverse Words of the sentence

function reverseWords(words){
    let sentence = words.split(' ');
        let len = sentence.length;


        if(len%2 == 0){
        mid= Math.floor(len/2);
        while(mid<=len-1){
            let temp = sentence[mid];
            sentence[mid] = sentence[len-1-mid];
            sentence[len-1-mid] = temp;
            mid++;

        }

        }else{
            mid= Math.floor(len/2);
            while(mid<len-1){
                let temp = sentence[mid];
                sentence[mid] = sentence[len-1-mid];
                sentence[len-1-mid] = temp;
                mid++;

            }

        }
        return sentence;
}


console.log(reverseWords("Hello World"));