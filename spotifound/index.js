var elements = document.getElementsByClassName("bb");

for(var i = 0; i < elements.length; i++) {
    var time = Math.sin(i*Math.PI/6);
    elements[i].style.animation = `flicker 1s ease alternate ${time}s infinite`;
}
