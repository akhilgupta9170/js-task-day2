// Reverse the STRING.

function reverse(str){
  let len = str.length-1;
  let reversed = '';

  for(let i = len; i >= 0; i--){
    reversed += str[i];
  }
  return reversed;
     
}

 
console.log(reverse('aKHIL'))

