// Given a string S and an integer K, the task is to generate lexicographically the
//largest string possible from the given string, by removing characters also, that consists of at most K consecutive similar characters.

// Input: S = “baccc”, K = 2
// Output: ccbca

// Input: S = “ccbbb”, K = 2
// Output: ccbb

function getLargestString(s, k) {
  let n = s.length;
  let charset = new Array(26);
  let obj = {};
  let alph = "abcdefghijklmnopqrstuvwxyz";

  // stores the frecuency of characters
  for (let i = 0; i < 26; i++) {
    charset[i] = 0;
    // obj[alph[i]] = 0;
  }
  // Traverse the string
  for (let i = 0; i < n; i++) {
    charset[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;
    obj[s[i]] = obj[s[i]] ? obj[s[i]] + 1 : 1;
  }
  console.log(obj);

  // Stores the resultant string
  let newString = [];

  for (let i = 25; i >= 0; i--) {
    let count = 0;

    // Append larger character
    while (charset[i] > 0) {
      newString.push(String.fromCharCode(i + "a".charCodeAt(0)));
      charset[i]--;
      count++;

      //check if char frecuency reach the limit
      if (charset[i] > 0 && count === k) {
        //call the method nextAvailableChar for the nearest lower char
        let next = nextAvailableChar(charset, i);

        //if no char can be appended
        if (next == null) return newString.join("");

        //append nearest lower char
        newString.push(next);

        //reset counter for next iteration
        count = 0;
      }
    }
  }

  return newString.join("");
}

function nextAvailableChar(charset, start) {
  // Traverse charset from start-1
  for (let i = start - 1; i >= 0; i--) {
    if (charset[i] > 0) {
      charset[i]--;
      return String.fromCharCode(i + "a".charCodeAt(0));
    }
  }
  // If no character can be appended
  return null;
}

let s = "wwwwtooasdffsss";
let k = 2;

console.log(getLargestString(s, k));
