import parser from './parser';
// import chordParser from './chordParser';
import chordSpeller from './chordSpeller';
// import $ from 'jquery'

document.addEventListener("DOMContentLoaded", () => {
  window.parser = parser;
  window.chordSpeller = chordSpeller

  $('.addChords').on('click', () => {
    // debugger
    let chords;
    console.log(document.getElementsByClassName("chordString")[0].value);
    chords = parser(`${document.getElementsByClassName("chordString")[0].value}`)
    let chord;
    let i;
    $('.chords').replaceWith(`<ul class="chords"></ul>`)
    for (i in chords) {
      debugger
      chord = chordSpeller(chords[i])
      $('.chords').append(`<li>${chord}</li>`)
    }

  })

})
