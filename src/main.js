import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { JournalEntry } from "./dino-journal.js";
import { DinoService } from './dino-service.js';

function createDinoIpsumBody(arrayNumberWordsInParagraph, arrayDinoIpsum) {
  let result = "";
  let start = 0;
  for(let i = 0; i < arrayNumberWordsInParagraph.length; i++) {
    let subString = ""; 
    let count = arrayNumberWordsInParagraph[i];
    while(count > 0) {
      subString += arrayDinoIpsum[0][start] + " ";
      start++;
      count--;
    }
    result += "<p>" + subString + "</p>";
  }
  return result;
}

$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    let title = $("#title").val();
    let body = $("#body").val();
    let journalEntry = new JournalEntry(title, body);
    let arrayForBody = journalEntry.numberOfWordsInEachParagraph();

    (async () => {
      let dinoService = new DinoService();
      let responseTitle = await dinoService.getDinoIpsum(journalEntry.numberOfWordsInTitle(), 1);
      let responseBody = await dinoService.getDinoIpsum(journalEntry.numberOfWordsInBody(), 1);
      addDinoIpsumEntry(responseTitle, responseBody);
    })();

    function addDinoIpsumEntry(responseTitle, responseBody) {
      let result = `<h3>${responseTitle[0].join(" ")}</h3>${createDinoIpsumBody(arrayForBody, responseBody)}`;
      $(".result").append(result);
    }
    $("#title").val("");
    $("#body").val("");
  });
  
});