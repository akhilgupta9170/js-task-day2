// Check if the string is palindrome

function palindrome(str){
    let len = str.length-1;
    let reversed = '';
  
    for(let i = len; i >= 0; i--){
      reversed += str[i];
    }
    if (reversed===str)
        return true;
    else
    return false;
}

console.log(palindrome('akhil'));