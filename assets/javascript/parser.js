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
  // Need to cover C7#5, CM7#11
  //Parse by length vs. actualChordName
  let chordSized = []
  let chordQualities = ['m', 'M', '+', 'ø', '/', '1']
  let twoLetterChordQualities = ['di', 'au']
  let j;
  for (j in chordLetters) {
    let check = (chordLetters[j][2] == '#' || chordLetters[j][2] == 'b') ? 0 : 1
    if (chordLetters[j].length <= 2 + check ||(chordLetters[j].length > 2 + check && chordQualities.includes(chordLetters[j][1 + check]))|| (chordLetters[j].length > 3 + check && twoLetterChordQualities.includes(chordLetters[j].slice(1+check,3+check)))) {
      debugger
      if (chordLetters[j][chordLetters[j].length-1] == '1' && chordLetters[j][chordLetters[j].length-2] != '1') {
      } else {
      chordSized.push(chordLetters[j])
      }
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

export default parser
