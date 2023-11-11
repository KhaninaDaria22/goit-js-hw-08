import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
const timePl = "videoplayer-current-time";

player.on('timeupdate', throttle(setTime, 1000));

let time = localStorage.getItem(timePl);

if(time !== null) {
    player.setCurrentTime(time);
}

function setTime({seconds}) {
    localStorage.setItem(timePl, seconds);
}