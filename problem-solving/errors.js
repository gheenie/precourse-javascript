// Work through these challenges in order, regularly running the tests until they all pass!

// TASK 1
function getFirstItem(arr) {
  // getFirstItem returns the first item in the array
  const firstItem = arr[0];

  return firstItem;
}

//TASK 2
function splitString(string) {
  // splitString separates a string into letters and returns it as an array
  return string.split('');
}

// TASK3
function addBread(person, bread) {
  // addBread adds a favourite bread to the person object and returns the updated object
  //person['loaf'] = 'sourdough';
  person.faveBread = bread;

  return person;
}

//TASK 4
function countTheChars(array, char) {
  // countTheChars counts the occurrences of the char in the array and returns the count
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === char) {
      count++;
    }
  }
  
  return count;
}

//TASK 5
function addGuestsToParty(peopleArray) {
  // addGuestsToParty looks for anyone in the peopleArray who have RSVP's yes
  // and adds them to the guests array in the party object.
  // It then returns the guest array.
  const party = {
    host: 'Paul Copley',
    venue: 'Hatch',
    theme: 'Under the sea',
    guests: [{ name: 'Rose' }, { name: 'Eli' }],
  };

  peopleArray.forEach((person) => {
    if (person.RSVP === 'yes') {
      party.guests.push({ name: person.name });
    }
  });

  return party.guests;
}

// ---------- Do not change the code below this line --------------
module.exports = {
  getFirstItem,
  countTheChars,
  splitString,
  addBread,
  addGuestsToParty,
};
