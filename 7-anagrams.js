// Check Anagrams

function anagrams(s1, s2) {
  let l1 = s1.length;
  let l2 = s2.length;

  if (l1 !== l2) return false;

  let count1 = {};
  let count2 = {};

  for (let i = 0; i < l1; i++) {
    count1[s1[i]] = (count1[s1[i]] || 0) + 1;
    count2[s2[i]] = (count2[s2[i]] || 0) + 1;
  }
  for (let key in count1) {
    if (count1[key] !== count2[key]) 
        return false;
  }

  return true;
}

console.log(anagrams("listen", "silent"));

