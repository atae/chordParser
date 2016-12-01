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


    let lines = {
      1: [['E--'],['B--'],['G--'],['D--'],['A--'],['E--']],
      2: [['E--'],['B--'],['G--'],['D--'],['A--'],['E--']],
      3: [['E--'],['B--'],['G--'],['D--'],['A--'],['E--']]
    }
    // let lines2 = [['E'],['B'],['G'],['D'],['A'],['E']]
    // let lines3 = [['E'],['B'],['G'],['D'],['A'],['E']]
    let line_num = 1
    for (i in chords) {
      // debugger
      // $('.tabs').append(`<li>${chordBox([[4,1]])}</li>`)
      let chord = chordSpeller(chords[i])
      if (chord.length === 0) {

      } else {
      let tabs = tabMaker(chord)

      let spaces = " "

      let  maxlen = 0;
      for (let m=0; m < tabs.length; m++) {
        if ((tabs[m]+"").length>maxlen) {
          maxlen = (tabs[m]+"").length;
        }
      }
      for (var j = 0; j < tabs.length; j++) {
        console.log(maxlen);
        let dashes =  "---"
        // (maxlen == 2) ? "-" :
        // if (tabs[j].length == 1) {
        //   dashes += "-"
        // }

          // lines[j].push(`<span class=${chords[i]}>${tabs[j]}</span>${dashes}`)

        // } else {

        if (lines[line_num+""][j].length % 8 == 0) {
          line_num += 1
        }

        if (tabs[j] == "X" && maxlen == 2) {
          lines[line_num][j].push(`----`)
        } else if ((tabs[j]+"").length == 2) {
          lines[line_num][j].push(`<span class='${i}''>${tabs[j]}</span>--`)
        } else {
          lines[line_num][j].push(`<span class='${i}''>${tabs[j]}</span>${dashes}`)

        }
      }

      setTimeout(()=>{$(`.${i}`).hover(() => {
        $(`.${i}`).css("background-color", "yellow");
      }, ()=>{
        $(`.${i}`).css("background-color", "white");
      })},100)
      // var li = document.createElement('li');
      // li.className = `${i}`; // Class name
      // li.innerHTML = `${chords[i]}: ${}` // Text inside
      // document.getElementsByClassName('chords')[0].appendChild(li); // Append it
      // li.onmouseover = highlight; // Attach the event!
      // li.onmouseout = unhighlight;
      $('.chords').append(`<li class='${i}'>${chords[i]}: ${chord}</li>`)
      // console.log($(`.${i}`));
      // currChord = ``
    function highlight() {
          //stuff to do on mouse enter
          $(`.${i}`).css("background-color", "yellow");

      }

      function unhighlight() {

          $(`.${i}`).css("background-color", "white");
        }


      }
    }

    //
    //
    // $("chord1").hover(() => {
    // }, ()=>{
    // })


    // document.getElementsByClassName('chord1')[6].addEventListener('onMouseEnter', highlight)
    // debugger
    for (let l = 1; l < 4; l++ ) {
      if (lines[l][0].length >= 2) {
        for (var k = 0; k < lines[l].length; k++) {
          $('.tabs').append(`<li>${lines[l][k].join('')}</li>`)
        }
      }
      $('.tabs').append(`<br/>`)
    }
    //
    // $(`.chord1`).hover(() => {
    //   $(`.chord1`).css("background-color", "yellow");
    // }, ()=>{
    //   $(`.chord1`).css("background-color", "white");
    // })
    // console.log(lines);
  }


  $('.chordStringForm').on('submit', parseText)
  // $('.addChords').on('keyDown', () => {
  //   if (e.key == "Enter") {
  //
  //   }
  // })

})
