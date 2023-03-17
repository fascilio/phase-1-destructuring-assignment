const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

//const muppet = {
  //muppetName: 'Miss Piggy',
  //color: 'pink',
  //song: 'Never Before, Never Again',
  //job: 'Cast member of The Muppet Show',
 // partner: 'Kermit'
//};

//const nestedMuppet = {
//  nestedName: 'Kermit',
//  nestedColor: 'green',
//  album: {
//    theMuppetMovie: {
//      song1: 'Rainbow Connection',
//      song2: 'Moving Right Along',
//      song3: 'Never Before, Never Again',
   ///   song4: 'I Hope That Something Better Comes Along',
 //   },
//  },
//  nestedJob: 'Host of The Muppet Show',
 // nestedPartner: 'Miss Piggy'
//};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
//const [moo, neigh, baa, oink, cluck] = 'cow horse sheep pig chicken'.split(' ');
// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
//const {0: bessie, 2: dolly, 3: babe, 4: little} = 'cow horse sheep pig chicken'.split(' ');
// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
//const {0: blackAndWhite, 2: black, 3: pink} = 'cow sheep'.split(' ');

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.
//const [red, orange, yellow, green, blue, indigo, violet] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
//const [r, o, y, g, b, v] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'].map(color => color.charAt(0));
// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 
//const [, , , , , indg] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names
//const {muppetName, color, song, job, partner} = {
 // muppetName: 'Miss Piggy',
 // color: 'pink',
  //song: 'Never Before, Never Again',
 // job: 'Cast member of The Muppet Show',
  //partner: 'Kermit'
//};
// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
//const {song2,  song4, job: nestedJob, partner: nestedPartner} = {
 // song1: 'Rainbow Connection',
 // song2: 'Moving Right Along',
 // song3: 'Can You Picture That?',
 // song4: 'I Hope That Something Better Comes Along',
 // job: {title: 'Host of The Muppet Show'},
  //partner: {name: 'Miss Piggy'}
//};
const [moo, neigh, baa, oink, cluck] = 'cow horse sheep pig chicken'.split(' ');
const [bessie, , dolly, babe, little] = 'cow horse sheep pig chicken'.split(' ');
const [blackAndWhite, , black, pink] = 'cow horse sheep pig chicken'.split(' ');
const [red, orange, yellow, green, blue, indigo, violet] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [r, o, y, g, b, indg, v] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const {muppetName, color, song, job, partner} = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};
const {song2,  song4, nestedJob: {nestedJob}, nestedPartner: {nestedPartner}} = {
  song1: 'Rainbow Connection',
  song2: 'Moving Right Along',
  song3: 'Can You Picture That?',
  song4: 'I Hope That Something Better Comes Along',
  nestedJob: {
    nestedJob: 'Host of The Muppet Show'
  },
  nestedPartner: {
    nestedPartner: 'Miss Piggy'
  }
};
