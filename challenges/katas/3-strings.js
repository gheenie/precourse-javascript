// Fill in the body of the functions following the instructions.
// Important! Don't change the name of the functions.

function getLength(str) {
  // return the length of the passed string

  return str.length;
}

function putNamesTogether(firstName, lastName) {
  // return the first and last names with a space between them

  return firstName + ' ' + lastName;
}

function capitaliseString(str) {
  // return the passed string with its first letter capitalised

  return str.charAt(0).toUpperCase() + str.substr(1);
}

function dontShoutSentence(SENTENCE) {
  // return the passed sentence (IN ALL CAPS) in lower case
  // keep the first character capitalised

  return SENTENCE.charAt(0) + SENTENCE.substr(1).toLowerCase();
}

function getMiddle(str) {
  // return the middle (or middle two) character(s) of the passed string
  
  const midIndex = Math.floor(str.length / 2);

  if (str.length % 2 === 1) {
    return str[midIndex];
  }

  return str[midIndex - 1] + str[midIndex];
}

function getLastWord(words) {
  // return the last word of a sentence
  // you can assume words doesn't have a period at the end

  const splitWords = words.split(' ');

  return splitWords[splitWords.length - 1];
}

function hyphenateWords(words) {
  // return the passed string with the spaces replaced by hyphens ("-")

  return words.replace(/ /g, '-');
}

function convertToCamelCase(words) {
  // convert the passed string of space-separated words to camel case
  // camel case looks like this --> camelCaseLooksLikeThis

  const separatedWords = words.toLowerCase().split(' ');
  let camelCaseWords = separatedWords[0];

  for (let i = 1; i < separatedWords.length; i++) {
    camelCaseWords += capitaliseString(separatedWords[i]);
  }

  return camelCaseWords;
}

function passwordValidation(password) {
  /*

  Northcoders takes security very seriously. We have a VERY robust password criteria. 

  Any password must include 'n' and 'c' (upper or lowercase) and must end with '1'.
  
  You need to design this function to check the password it is passed. If it fits all of the above criteria then you should return 'valid' else return 'invalid'.

*/

  if (password.charAt(password.length - 1) !== '1') {
    return 'invalid';
  }

  let hasN = false;
  let hasC = false;

  for (let i = 0; i < password.length; i++) {
    const passwordChar = password.charAt(i);
    
    if (
      passwordChar === 'n' ||
      passwordChar === 'N'
    ) {
      hasN = true;
    }

    if (
      passwordChar === 'c' ||
      passwordChar === 'C'
    ) {
      hasC = true;
    }
  }
  
  if (hasC && hasN) {
    return 'valid';
  }

  return 'invalid';
}

// ---------- Do not change the code below this line --------------
module.exports = {
  getLength,
  putNamesTogether,
  capitaliseString,
  dontShoutSentence,
  getMiddle,
  getLastWord,
  hyphenateWords,
  convertToCamelCase,
  passwordValidation,
};
