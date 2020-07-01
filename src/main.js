import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { dinoIpsum } from "./dino-journal.js"

$(document).ready(function() {
  dinoIpsum(5,5).then(data => console.log(data));
});