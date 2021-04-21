/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let tld = [".us", ".com", ".net"];

  let domains = "";
  for (const p in pronoun) {
    for (const a in adj) {
      for (const n in noun) {
        for (const d in tld) {
          domains += pronoun[p] + adj[a] + noun[n] + tld[d] + "<br>";
        }
      }
    }
  }
  document.getElementById("domains").innerHTML = domains;
  this.console.log(domains);
};
