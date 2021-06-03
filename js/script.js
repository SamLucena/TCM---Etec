var el = document.querySelector("h1");
var text = "Inovando suas idéias."
var interval = 150;
function showtext(el, text, interval) {
  var char = text.split("").reverse();
  var typer = setInterval(function() {
    if (!char.length) {
        return clearInterval(typer)
    }
    
    var next = char.pop();
    if(next == " "){
        el.innerHTML += "<br>"
    }
    el.innerHTML += next;
  }, interval);
}
showtext(el, text, interval);
