var pleer = document.getElementById("audio");

var play_button = document.getElementById("play");
var pause_button = document.getElementById("pause");

var vol_up_button = document.getElementById("volume_up");
var vol_down_button = document.getElementById("volume_down");
var vol_text = document.getElementById("volume_text");
var volume = 100;
var volume_before = 100;
var vol_step = 10;

var score_up_button = document.getElementById("score_up");
var score_down_button = document.getElementById("score_down");
var score = 0;
var duration = pleer.duration;
var score_step = 10;

var score_time_element = document.getElementById("score_time");
var score_time = "[00:00]"

var copy_path = document.getElementById("copy_path");
var copy_song = document.getElementById("copy_song");
var copied = document.getElementById("copied");


function play_track() {
    pleer.play();
}

function pause_track() {
    pleer.pause();
}

play_button.addEventListener("click", play_track);
pause_button.addEventListener("click", pause_track);


function volume_up() {
    if (volume + vol_step > 100) {
        volume = 100;
    } else {
        volume = volume + vol_step;
    }
    pleer.volume = volume / 100;
    vol_text.innerHTML = "[" + volume + "]";

}

function volume_down() {
    if (volume - vol_step < 0) {
        volume = 0;
    } else {
        volume = volume - vol_step;
    }
    pleer.volume = volume / 100;
    vol_text.innerHTML = "[" + volume + "]";
}

function volume_on_off() {
    if (volume == 0) {
        volume = volume_before;
    } else {
        volume_before = volume;
        volume = 0;
    }
    pleer.volume = volume / 100;
    vol_text.innerHTML = "[" + volume + "]";
}

vol_up_button.addEventListener("click", volume_up);
vol_down_button.addEventListener("click", volume_down);
vol_text.addEventListener("click", volume_on_off);


function score_up() {
    score = pleer.currentTime;
    if (score + score_step > duration) {
        volume = duration;
    } else {
        score = score + score_step;
    }
    pleer.currentTime = score;
}

function score_down() {
    score = pleer.currentTime;
    if (score - score_step < 0) {
        score = 0;
    } else {
        score = score - score_step;
    }
    pleer.currentTime = score;
}

score_up_button.addEventListener("click", score_up);
score_down_button.addEventListener("click", score_down);


function score_time_update() {
    time = Math.floor(pleer.currentTime);
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time - minutes * 60);
    var minutes_val = minutes;
    var seconds_val = seconds;
    if (minutes  < 10) {
        minutes_val = "0" + minutes;
    }
    if (seconds < 10) {
        seconds_val = "0" + seconds;
    }
    score_time = "[" + minutes_val + ":" + seconds_val + "]";
    score_time_element.innerHTML = score_time;
}

pleer.addEventListener("timeupdate", score_time_update);


function space_stop_start(e) {
    if (e.code == "Space") {
        if (pleer.paused) {
            play_track();
        } else {
            pause_track();
        }
    }
}

document.addEventListener("keydown", space_stop_start);


function copy(str){
    var tmp   = document.createElement('INPUT');
    var focus = document.activeElement;
  
    tmp.value = str;
  
    document.body.appendChild(tmp);
    tmp.select();
    document.execCommand('copy');
    document.body.removeChild(tmp);
    focus.focus();
}

function copy_album_path() {
    var url_to_copy = "http://ifanfomin.ru/music/music.html?path=/" + user_pos.slice(1).join("/");
    console.log(`Путь: ${url_to_copy}`);
    copy(url_to_copy);
    copied.setAttribute("class", "text copied-text");
    void copied.offsetParent;
    copied.setAttribute("class", "text copied-text show-and-hide");
}

function copy_album_song() {
    console.log(`Сейчас играет: ${now_play[now_play.length - 1]}`)
    var url_to_copy = "http://ifanfomin.ru/music/music.html?path=/" + user_pos.slice(1).join("/") + "&track=" + now_play[now_play.length - 1];
    console.log(`Путь: ${url_to_copy}`);
    copy(url_to_copy);

    copied.setAttribute("class", "text copied-text");
    void copied.offsetParent;
    copied.setAttribute("class", "text copied-text show-and-hide");
}

copy_path.addEventListener("click", copy_album_path);
copy_song.addEventListener("click", copy_album_song);
