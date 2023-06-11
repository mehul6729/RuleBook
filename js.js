var button = document.getElementById('sound');

// Add a click event listener to the button
button.addEventListener('click', function() {
  var audio = new Audio('sound/audio.mp3');
  audio.play();
});