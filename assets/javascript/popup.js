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
    // let chord;
    let i;
    $('.chords').replaceWith(`<ul class="chords"></ul>`)
    $('.tabs').replaceWith(`<ul class="tabs"></ul>`)
    let line1 = [];
    let line2 = [];
    let line3 = [];
    let line4 = [];
    let line5 = [];
    let line6 = [];
    let line7 = [];
    for (i in chords) {
      // debugger
      // $('.tabs').append(`<li>${chordBox([[4,1]])}</li>`)
      let chord = chordSpeller(chords[i])
      if (chord.length === 0) {

      } else {
      let tabs = tabMaker(chord)
      // $('.tabs').append(`<li>${tabMaker(chord)}</li>`)
      let dashes = "--"
      let spaces = " "
      // for (var j = 0; j < chords[i].length; j++) {
      //     dashes += "--"
      //     // if (i % 3 == 0) {
      //       spaces += " "
      //     // }
      // }

      line1.push(`${dashes}${tabs[0]}${dashes}`)
      line2.push(`${dashes}${tabs[1]}${dashes}`)
      line3.push(`${dashes}${tabs[2]}${dashes}`)
      line4.push(`${dashes}${tabs[3]}${dashes}`)
      line5.push(`${dashes}${tabs[4]}${dashes}`)
      line6.push(`${dashes}${tabs[5]}${dashes}`)
      // line7.push(`${spaces}${chords[i]}${spaces}`)
      $('.chords').append(`<li>${chords[i]}: ${chord}</li>`)
      }
    }
    $('.tabs').append(`<li>${line1.join('')}</li>`)
    $('.tabs').append(`<li>${line2.join('')}</li>`)
    $('.tabs').append(`<li>${line3.join('')}</li>`)
    $('.tabs').append(`<li>${line4.join('')}</li>`)
    $('.tabs').append(`<li>${line5.join('')}</li>`)
    $('.tabs').append(`<li>${line6.join('')}</li>`)
    // $('.tabs').append(`<li>${line7.join('|')}</li>`)


  }
  $('.chordStringForm').on('submit', parseText)
  // $('.addChords').on('keyDown', () => {
  //   if (e.key == "Enter") {
  //
  //   }
  // })

})
