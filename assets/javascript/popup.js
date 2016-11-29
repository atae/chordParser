import parser from './parser';
// import chordParser from './chordParser';
import chordSpeller from './chordSpeller';
// import $ from 'jquery'
// import chordBox from './chord';
import tabMaker from './tabMaker';

document.addEventListener("DOMContentLoaded", () => {
  window.parser = parser;
  window.chordSpeller = chordSpeller

  const parseText = (e) => {
    e.preventDefault()
    let chords;
    console.log(document.getElementsByClassName("chordString")[0].value);
    chords = parser(`${document.getElementsByClassName("chordString")[0].value}`)
    let chord;
    let i;
    $('.chords').replaceWith(`<ul class="chords"></ul>`)
    for (i in chords) {
      // debugger
      chord = chordSpeller(chords[i])
      // $('.tabs').append(`<li>${chordBox([[4,1]])}</li>`)
      $('.tabs').append(`<li>${tabMaker(chord)}</li>`)
      $('.chords').append(`<li>${chords[i]}: ${chord}</li>`)
    }
  }
  $('.chordStringForm').on('submit', parseText)
  // $('.addChords').on('keyDown', () => {
  //   if (e.key == "Enter") {
  //
  //   }
  // })

})
