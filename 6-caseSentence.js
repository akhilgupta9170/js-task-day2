function caseSentence(sentence){
  //  let letters= sentence.split("")
//     // console.log(letters)
//     letters[0]=letters[0].toUpperCase();
//     // console.log(letters[0])
//     for(let i=0; i<letters.length; i++){
//        if(letters[i]==" "){
//         letters[i+1]=letters[i+1].toUpperCase()
//        }
//     }
//    return letters.join("")

//   let finalStr="";
//   finalStr += sentence[0].toUpperCase()
//   for(let i=1; i<sentence.length; i++){
//     if(sentence[i]==" "){
//         finalStr += " ";
//         char=sentence[i+1].toUpperCase()
//         finalStr += char
//         i++;
//     }else{
//         finalStr += sentence[i]
//     }
    
//   }
//   return finalStr;

// for (let i of letters){
//     let first=i[0].toUpperCase();
//     let last = i.slice(1)
//     let result=first+last;
//     final += first + last + " ";
// }
// return final
let letters= sentence.split(" ").map((x)=> x[0].toUpperCase() + x.slice(1)).join(" ")

//  letters= letters.map((x)=> x[0].toUpperCase() + x.slice(1)).join(" ")
// return letters.join(" ")
return letters
}
console.log(caseSentence("hello world"));