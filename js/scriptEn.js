var el = document.querySelector("#text");
var text = "Innovating your ideas."
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

$('.btnAbre').click(function(){
  $('header').toggleClass('mostra')
});
$('.btnFecha').click(function(){
  $('header').toggleClass('mostra')
});
$('.btnAbreProjeto').click(function(){
  $('aside').toggleClass('mostra')
});