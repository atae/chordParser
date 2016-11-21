import tonal from "tonal";

const chordSpeller = (chordName) => {
  // debugger
  if (chordName.charAt(chordName.length-2) == "/"){
    let chord = []
    chord[0] = chordName.charAt(chordName.length-1)
    chord = chord.concat(tonal.chord(chordName.slice(0,chordName.length-2)))
    return chord
  }

  return tonal.chord(chordName)
  // let noteOrder = ['C', 'C#','D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
  // // let noteOrder = ['C', ['C#','Db'],'D', ['D#','Eb'], 'E', 'F', ['F#','Gb'], 'G', ['G#','Ab'], 'A', ['A#','Bb'], 'B']
  // //Either go with 1 4 7 for fixed or add by intervals, 1, +
  // let roots = {
  //   C: 0,
  //   D: 2,
  //   E: 4,
  //   F: 5,
  //   G: 7,
  //   A: 9,
  //   B: 11
  // }
  //
  // let qualities = {
  //   M:[1,4,7],
  //   m:[1,3,7],
  //   a:[1,4,8],
  //   d:[1,3,7]
  // }
  // //
  // // let extensions = {
  // //   7:
  // //   9:
  // //   11:
  // //   13:
  // // }
  //
  // // let accidentals = {
  // //   '#' : 1,
  // //   'b' : -1
  // //  }
  //
  //  accidentals = ['#', 'b']
  //
  //  let chordSpelling = [];
  //  let root;
  //  if (accidentals.includes(chord.strAt(1)) {
  //   qualityFormula = qualities[chord.strAt(2)]
  // } else {
  //   qualityFormula = qualities[chord.strAt(1)]
  // }
  //  //For Non Sharps
  //
  //
  //  for(let i=0; i <= chord.length; i ++){
  //   // debugger
  //
  //   switch (i) {
  //   case 0:
  //       root = roots[`${chord.charAt(0)}`]
  //       chordSpelling.push(noteOrder[root])
  //   case 1:
  //       if (root + qualityFormula > 11) {
  //         qualityFormula =
  //       }
  //       chordSpelling.push(noteOrder[root+qualityFormula[1]])
  //       // if (Object.keys(accidentals).includes(chord.charAt(2))) {
  //       //   chordSpelling[0] += chord.charAt(2)
  //       // }
  //     }
  //   }
  //   return chordSpelling
   }






export default chordSpeller
