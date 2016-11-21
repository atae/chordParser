import underscore from "underscore";
import chordSpeller from "./chordSpeller"

function parser(text, all) {
  let parsed = text.split(/[\s,]+/)
  let notes = ["A", "B", "C", "D", "E", "F", "G"]
  // Parse By Letter
  let i;
  let chordLetters = []
  for (i in parsed){
    if (notes.includes(parsed[i][0])){
      chordLetters.push(parsed[i])
    }
  }

  //Parse by length vs. actualChordName
  let chordSized = []
  let chordQualities = ['m', 'M', '+', 'ø', '/']
  let twoLetterChordQualities = ['di, au']
  let j;
  for (j in chordLetters) {
    if (chordLetters[j].length <= 2 ||(chordLetters[j].length > 2 && chordQualities.includes(chordLetters[j][1]))|| (chordLetters[j].length > 3 && twoLetterChordQualities.includes(chordLetters[j].slice(1,3)))) {
      chordSized.push(chordLetters[j])
    }
    //remove any sequential alphabets from page Indexes
    if (chordLetters[j] === "G" && chordSized[0] === "A" && chordSized[1] === "B" && chordSized[2] === "C"){
      chordSized = [];
    }
  }
  if (all == true) {
    return chordSized
  } else {
  return underscore.uniq(chordSized)
  }

}

window.parser = parser;
window.chordSpeller = chordSpeller
