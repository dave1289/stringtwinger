const axios = require('axios')

const BASE_URL = 'https://api.uberchord.com/v1/chords/'

// every chord in every natural major and minor key
const keys = {
   A: ['A', 'B_m', 'Db', 'D', 'E', 'Gb_m', 'Ab_dim'],
   B: ['B', 'Db_m', 'Eb_m', 'Gb', 'Ab_m', 'Bb_dim'],
   C: ['C', 'D_m', 'E_m', 'F', 'G', 'A_m', 'B_dim'],
   D: ['D', 'E_m', 'Gb_m', 'G', 'A', 'B_m', 'Db_dim'],
   E: ['E', 'Gb_m', 'Ab_m', 'A', 'B', 'Db_m', 'Cb_dim'],
   F: ['F', 'G_m', 'A_m', 'Bb', 'C', 'D_m', 'E_dim'],
   G: ['G', 'A_m', 'B_m', 'C', 'D', 'E_m', 'Gb_dim'],
   A_m: ['A_m', 'B_dim', 'C', 'Dm', 'E_m', 'F', 'G'],
   B_m: ['B_m', 'Db_dim', 'D', 'E_m', 'Gb_m', 'G', 'A'],
   C_m: ['C_m', 'D_dim', 'Eb', 'F_m', 'G_m', 'Ab', 'Bb'],
   D_m: ['D_m', 'E_dim', 'F', 'G_m', 'A_m', 'Bb', 'C'],
   E_m: ['E_m', 'Gb_dim', 'G', 'A_m', 'B_m', 'C', 'D'],
   F_m: ['F_m', 'G_dim', 'Ab', 'Bb_m', 'C_m', 'Db', 'Eb'],
   G_m: ['G_m', 'A_dim', 'Bb', 'C_m', 'D_m', 'Eb', 'F']
}

// basic chord progressions
const progressions = [
   [1, 3, 5],
   [1, 4, 6, 5],
   [2, 5, 1],
   [1, 6, 2, 5],
   [1, 5, 6, 4],
   [1, 4, 6, 5],
   [1, 3, 4, 5],
   [1, 4, 1, 5],
   [1, 4, 2, 5]
]

// returns random key signature from object
function getRandomKeySig(obj) {
   const keys = Object.keys(obj);
   return keys[Math.floor(Math.random() * keys.length)];
}

//  returns random chord progression from array
function getRandomProg() {
   return progressions[Math.floor(Math.random() * progressions.length)]
}

//  uses nums in progression to pull chords from key signature
function ChordProgTest(){
   const progression = getRandomProg()
   const key = getRandomKeySig(keys)
   const chords = []
   // numbers in progression pulled from key signature
   for (let num of progression) {
      chords.push(keys[key][num - 1])
   }
   var result = chords.map(function(val) {
      return val;
    }).join(',');
   //  console.log(result, key, progression)
   //  console.log(`${BASE_URL}${result}`)
   return `${BASE_URL}${result}`
}

// brings helper functions together to pullChords from API
async function pullChords() {
   try {
      const response = await axios.get(ChordProgTest());
      // console.log(response.data)
      return response.data;
   } catch (error) {
      console.error(error);
      throw error;
   }
}


module.exports = { 
   ChordProgTest,
   keys,
   progressions,
   pullChords
};