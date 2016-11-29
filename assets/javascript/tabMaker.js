function tabMaker(chordSpelling) {
  //Define root

  function mod(n, m) {
          return ((n % m) + m) % m;
  }

  let starting_indices = {
    HE: 4,
    B: 11,
    G: 7,
    D: 2,
    A: 9,
    LE: 4
  }
  let tabs = {
    HE: "",
    B: "",
    G: "",
    D: "",
    A: "",
    LE: ""
  }
  let noteOrder = ['C', 'C/D' , 'D', 'D/E', 'E', 'F', 'F/G', 'G', 'G/A', 'A', 'A/B', 'B']
  debugger
  let parsed_notes = chordSpelling
  for (let i = 0; i < chordSpelling.length; i++) {
    if (chordSpelling[i] == "C#" || chordSpelling[i] == "Db") {
      chordSpelling[i] = 'C/D'
    } else if (chordSpelling[i] == "D#" || chordSpelling[i] == "Eb" ){
      chordSpelling[i] = 'D/E'
    } else if (chordSpelling[i] == "F#" || chordSpelling[i] == "Gb") {
      chordSpelling[i] = 'F/G'
    } else if (chordSpelling[i] == "G#" || chordSpelling[i] == "Ab") {
      chordSpelling[i] = 'G/A'
    } else if (chordSpelling[i] == "A#" || chordSpelling[i] == "Bb") {
      chordSpelling[i] = 'A/B'
    }
  }

  //Creating 6th String Chord
  let strings = Object.keys(tabs)
  for (let i = 0; i < chordSpelling.length; i++) {
    let notePosition = noteOrder.indexOf(chordSpelling[i])
      if (i == 0) {
        tabs['LE'] = mod((notePosition - starting_indices['LE']), 12)
        tabs['HE'] = mod((notePosition - starting_indices['HE']), 12)
        tabs['D'] = mod((notePosition - starting_indices['D']), 12)
      } else if (i == 1) {
        tabs['G'] = mod((notePosition - starting_indices['G']), 12)
      } else if (i == 2) {
        tabs['A'] = mod((notePosition - starting_indices['A']), 12)
        tabs['B'] = mod((notePosition - starting_indices['B']), 12)
      }
  }



  return Object.values(tabs)
  //6th string if
    // Barre Chord less than C
    // If greater than 4 notes(i.e. 9th chords), omit the 5th
      // If still can't fit all, move to 5th string
    // 11th Chords and 13th chords should be 6th string
    // Maybe most chords should be 6th string?


  // If 3 notes
    // 6th string until C
    // 5th String until F

  // if 7th or Dim Or 11th Or 13th (4 usuable notes)
    // 6th string until C
    // 5th String until F
    // if 6 notes or greater, omit 5th and

  // If 9 anywhere (5 notes total)
    // 5th string all the way
    // Figure out for between G and A



  //If root > C or greater and length < 3 notes, switch to 5th string root
  // If length > 3 notes and root < A, switch to 5th string root


  //Define 3rd


  //Define 5th

}
export default tabMaker
