const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

//***MAP***
//1. Get array of all names
const allNames = characters.map((character) => "Name:" + character.name);
console.log(allNames);
//2. Get array of all heights
const allHieghts = characters.map((character) => "hieght:" + character.height);
console.log(allHieghts);
//3. Get array of objects with just name and height properties
const objectNameAndHieght = characters.map((character) => ({
  name: character.name,
  height: character.height,
}));
console.log(objectNameAndHieght);
//4. Get array of all first names
const firstName = characters.map((character) => character.name.split(" ")[0]);
console.log(firstName);
//***REDUCE***
//1. Get total mass of all characters
const sumOfMass = characters.reduce((totalMass, character) => {
  return totalMass + character.mass;
}, 0);
console.log(sumOfMass);
//2. Get total height of all characters
const getTotalHeight = characters.reduce(
  (totalHieght, charactHieght) => totalHieght + charactHieght.height,
  0
);
console.log(getTotalHeight);
//3. Get total number of characters by eye color
const totalCharracterByEyeColor = characters.reduce(
  (toalEyeColor, character) => {
    const color = character.eye_color;
    if (toalEyeColor[color]) {
      toalEyeColor[color]++;
    } else {
      toalEyeColor[color] = 1;
    }
    return toalEyeColor;
  },
  {}
);
console.log(totalCharracterByEyeColor);
//4. Get total number of characters in all the character names
const totalCharactersInName = characters.reduce((total, character) => {
  return total + character.name.length;
}, 0);
console.log(totalCharactersInName);
//***FILTER***
//1. Get characters with mass greater than 100
const charatersGreatearThan100Mass = characters.filter((value) => {
  return value.mass > 100;
});
console.log(charatersGreatearThan100Mass);
//2. Get characters with height less than 200
const characterLessThan200Height = characters.filter((value) => {
  return value.height < 200;
});
console.log(characterLessThan200Height);

//3. Get all male characters
const getMaleCharacter = characters.filter((value) => {
  return value.gender === "male";
});
console.log(getMaleCharacter);

//4. Get all female characters
const getFemaleCharacter = characters.filter((value) => {
  return value.gender === "female";
});
console.log(getFemaleCharacter);

//***SORT***
//1. Sort by mass
const sortByMass = characters.sort((a, b) => b.mass - a.mass);
console.log(sortByMass);

//2. Sort by height
const sortByHeight = characters.sort((a, b) => a.height - b.height);
console.log(sortByHeight);

//3. Sort by name
const sortByName = characters.slice().sort((a, b) => {
  if (a.name < b.name) return -1;
  return 1;
});
console.log(sortByName);

//***EVERY***
//1. Does every character have blue eyes?

const haveBlueEyes = characters.every((value) => value.eye_color === "blue");
console.log(haveBlueEyes);
//2. Does every character have mass more than 40?
const massMoreThanFourty = characters.every((value) => value.mass > 40);
console.log(massMoreThanFourty);
//3. Is every character shorter than 200?
const shorterThanTwoHundred = characters.every((value) => value.height < 200);
console.log(shorterThanTwoHundred);
//4. Is every character male?
const allCharacterMale = characters.every((value) => value.gender === "male");
console.log(allCharacterMale);

//***SOME***
//1. Is there at least one male character?
const atleastOneMaleCharacter = characters.some(
  (value) => value.gender === "male"
);
console.log(atleastOneMaleCharacter);
//2. Is there at least one character with blue eyes?
const isThereCharacterWithBlueEyes = characters.some(
  (value) => value.eye_color === "blue"
);
console.log(isThereCharacterWithBlueEyes);
//3. Is there at least one character taller than 210?
const TallerThan210 = characters.some((value) => value.height > 210);
console.log(TallerThan210);
//4. Is there at least one character that has mass less than 50?
const massLessThanFifty = characters.some((value) => value.mass < 50);
console.log(massLessThanFifty);
