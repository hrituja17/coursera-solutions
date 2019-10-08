var helloSpeaker = {};

(function (window) {
    var speakWord = "Hello";

helloSpeaker.speak = function(name) {
  console.log(speakWord + " " + name);
}
  window.helloSpeaker = helloSpeaker;
})(window);

// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
