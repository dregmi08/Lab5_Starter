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
    if(horn_select.value == "party-horn"){
      const jsConfetti = new JSConfetti()
      jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
     })
    }
  });

  const volume_button_select = document.getElementById('volume');
  const volume_img = document.querySelector('#volume-controls img');
  volume_button_select.addEventListener ('input', () => {
    if (volume_button_select.value == 0) {
      volume_img.src = 'assets/icons/volume-level-0.svg';
    } 
    else if(volume_button_select.value < 33){
      volume_img.src = 'assets/icons/volume-level-1.svg';
    } 
    else if(volume_button_select.value < 67){
      volume_img.src = 'assets/icons/volume-level-2.svg';
    }
    else{
      volume_img.src = 'assets/icons/volume-level-3.svg';
    }

  });
}
