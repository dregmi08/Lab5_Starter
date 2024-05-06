// expose.js

window.addEventListener('DOMContentLoaded', init);
function init() {
  const horn_select = document.getElementById('horn-select');
  const button = document.querySelector('button');
  const audio = document.querySelector('audio');

  horn_select.addEventListener('change', () => {
    document.querySelector('img').src = `assets/images/${horn_select.value}.svg`;
    audio.src = `assets/audio/${horn_select.value}.mp3`;
  });


  button.addEventListener('click', () => {
    audio.play();
  });
}
