var byeSpeaker = {};

// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
(function (window) {
  var speakWord = "Good Bye";

byeSpeaker.speak = function(name) {
  console.log(speakWord + " " + name);
}
window.byeSpeaker = byeSpeaker;
})(window);
