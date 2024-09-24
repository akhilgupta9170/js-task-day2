// /  Remove Duplicates from THE ARRAY 
function removeDuplicate(array){
  
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        if(newArray.indexOf(array[i]) === -1){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

let arr = [1, 2, 3, 2, 4, 5, 3];
console.log(removeDuplicate(arr));

