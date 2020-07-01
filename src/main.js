import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { JournalEntry } from "./dino-journal.js"
import { DinoService } from './dino-service.js';

function createDinoIpsumBody(arrayOfArrays) {
  let result = "";
  for(let i = 0; i < arrayOfArrays.length; i++) {
    let subString = arrayOfArrays[i].join(" ");
    result += " " + subString;
  }
  return result;
}

$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    let title = $("#title").val();
    let body = $("#body").val();
    let journalEntry = new JournalEntry(title, body);

    (async () => {
      let dinoService = new DinoService();
      const responseTitle = await dinoService.getDinoIpsum(journalEntry.numberOfWordsInTitle(), 1);
      const responseBody = await dinoService.getDinoIpsum(journalEntry.numberOfWordsInEntry(), journalEntry.numberOfParagraphsInBody());
      addDinoIpsumEntry(responseTitle, responseBody);
    })();

    function addDinoIpsumEntry(responseTitle, responseBody) {
      let result = `<h3>${responseTitle[0].join(" ")}</h3><p>${createDinoIpsumBody(responseBody)}</p>`;
      $(".result").append(result);
    }
    $("#title").val("");
    $("#body").val("");
  });
  
});