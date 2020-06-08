// function soundClickOff() {
//     var audio = new Audio(); // Создаём новый элемент Audio
//     audio.src = ''; // Указываем путь к звуку "клика"
//     audio.autoplay = true; // Автоматически запускаем
//     var sound = document.querySelector('.sound_play');
//     sound.textContent = 'SOUND';
// }
//
// function soundClickPlay() {
//     var audio = new Audio(); // Создаём новый элемент Audio
//     audio.src = 'video/sound.mp3'; // Указываем путь к звуку "клика"
//     audio.autoplay = true; // Автоматически запускаем
//     var sound = document.querySelector('.sound_play');
//     sound.textContent = 'PAUSE';
// }

const sound = new Audio();
sound.src = "video/sound.mp3";

document.querySelector('.soundPlay').onclick = function() {
    if (sound.paused === true) {
        sound.play();
        sound.autoplay = true;
        document.querySelector('.soundPlay').innerHTML = ' <br> <img src="img/Volume_Off.webp" alt="sound" height="50px" width="50px"></div>';
        $('.soundPlay').removeClass('play').addClass('off');
        sound.volume=0.15;
    } else {
        sound.pause();
        document.querySelector('.soundPlay').innerHTML = ' <br> <img src="img/sound-on.png" alt="sound" height="47px" width="47px"></div>';
        $('.soundPlay').removeClass('off').addClass('play');
    }
}
