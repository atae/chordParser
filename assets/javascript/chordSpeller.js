import tonal from "tonal";

const chordSpeller = (chordName) => {
  if (chordName.charAt(chordName.length-2) == "/"){
    let chord = []
    chord[0] = chordName.charAt(chordName.length-1)
    chord = chord.concat(tonal.chord(chordName.slice(0,chordName.length-2)))
    return chord
  }
    return tonal.chord(chordName)
 }






export default chordSpeller
