const frieren = document.querySelector(".frieren");
const fern = document.querySelector(".fern");
const stark = document.querySelector(".stark");
const himmel = document.querySelector(".himmel");
const heiter = document.querySelector(".heiter");
const eisen = document.querySelector(".eisen");
const flamme = document.querySelector(".flamme");

const frierenVoice = document.getElementById("frieren-voice");
const fernVoice = document.getElementById("fern-voice");
const starkVoice = document.getElementById("stark-voice");
const himmelVoice = document.getElementById("himmel-voice");
const heiterVoice = document.getElementById("heiter-voice");
const eisenVoice = document.getElementById("eisen-voice");
const flammeVoice = document.getElementById("flamme-voice");

frieren.addEventListener("click", function() {
    frierenVoice.play();
})

fern.addEventListener("click", function() {
    fernVoice.play();
})

stark.addEventListener("click", function() {
    starkVoice.play();
})

himmel.addEventListener("click", function() {
    himmelVoice.play();
})

heiter.addEventListener("click", function() {
    heiterVoice.play();
})

eisen.addEventListener("click", function() {
    eisenVoice.play();
})

flamme.addEventListener("click", function() {
    flammeVoice.play();
})