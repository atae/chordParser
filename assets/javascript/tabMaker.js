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
    HE: "X",
    B: "X",
    G: "X",
    D: "X",
    A: "X",
    LE: "X"
  }
  let noteOrder = ['C', 'C#' , 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
  debugger
  let parsed_notes = chordSpelling
  for (let i = 0; i < parsed_notes.length; i++) {
    if (parsed_notes[i] == "C#" || parsed_notes[i] == "Db") {
      parsed_notes[i] = 'C#'
    } else if (parsed_notes[i] == "D#" || parsed_notes[i] == "Eb" ){
      parsed_notes[i] = 'D#'
    } else if (parsed_notes[i] == "F#" || parsed_notes[i] == "Gb") {
      parsed_notes[i] = 'F#'
    } else if (parsed_notes[i] == "G#" || parsed_notes[i] == "Ab") {
      parsed_notes[i] = 'G#'
    } else if (parsed_notes[i] == "A#" || parsed_notes[i] == "Bb") {
      parsed_notes[i] = 'A#'
    }
  }

  let strings = Object.keys(tabs)
  //Creating 6th String Chord
  //Keep notes within a range of 3 frets
  console.log(noteOrder.slice(4,10));
  console.log(parsed_notes[0]);
  if (noteOrder.slice(4, 10).includes(parsed_notes[0])) {
    for (let i = 0; i < parsed_notes.length; i++) {
      let notePosition = noteOrder.indexOf(parsed_notes[i])
        if (i == 0) {
          tabs['LE'] = mod((notePosition - starting_indices['LE']), 12)
          tabs['HE'] = mod((notePosition - starting_indices['HE']), 12)
          tabs['D'] = mod((notePosition - starting_indices['D']), 12)
        } else if (i == 1) {
          tabs['G'] = mod((notePosition - starting_indices['G']), 12)
        } else if (i == 2) {
          tabs['A'] = mod((notePosition - starting_indices['A']), 12)
          tabs['B'] = mod((notePosition - starting_indices['B']), 12)
        } else if (i == 3) {
          debugger
          if (mod((notePosition - noteOrder.indexOf(parsed_notes[0])),12) == 10 ){
            tabs['D'] = mod((tabs['D'] - 2), 12)
          } else if (mod((notePosition - noteOrder.indexOf(parsed_notes[0])),12) == 11){
            tabs['A'] = 'X'
            tabs['D'] = mod((tabs['D'] - 1), 12)
            tabs['HE'] = 'X'
          }
        }


    }
  } else {
    for (let i = 0; i < parsed_notes.length; i++) {
    let notePosition = noteOrder.indexOf(parsed_notes[i])
      if (i == 0) {
        tabs['A'] = mod((notePosition - starting_indices['A']), 12)
        tabs['G'] = mod((notePosition - starting_indices['G']), 12)
      } else if (i == 1) {
        tabs['B'] = mod((notePosition - starting_indices['B']), 12)
      } else if (i == 2) {
        tabs['HE'] = mod((notePosition - starting_indices['HE']), 12)
        tabs['D'] = mod((notePosition - starting_indices['D']), 12)
      } else if (i == 3) {
        // debugger
        if (mod((notePosition - noteOrder.indexOf(parsed_notes[0])),12) == 10 ){
          tabs['G'] = mod((tabs['G'] - 2), 12)
        } else if (mod((notePosition - noteOrder.indexOf(parsed_notes[0])),12) == 11){
          tabs['G'] = mod((tabs['G'] - 1), 12)
        }
    }
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
