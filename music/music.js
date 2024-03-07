var music_deque = {
    "I Loved Another Woman.mp3": "Only You.mp3",
    "Only You.mp3": "Blood And Rockets.mp3",
    "Blood And Rockets.mp3": "Сатана.mp3",
    "Сатана.mp3": "Aria Math (Phonk).mp3",
    "Aria Math (Phonk).mp3": "Robots Outro.mp3",
    "Robots Outro.mp3": "I Loved Another Woman.mp3",
};

function next_track() {
    var audio = document.getElementById("audio");
    var pleer = document.getElementById("pleer");
    var track = document.getElementById("pleer").src;
    track = track.slice(track.lastIndexOf("/") + 1);
    track = track.replaceAll("%20", " ");
    var new_track = "audio/" + music_deque[track];
    pleer.setAttribute("src", new_track);
    audio.load();
    audio.play();
}

function set_track(track_name) {
    var audio = document.getElementById("audio");
    var pleer = document.getElementById("pleer");
    track_name = "audio/" + track_name;
    pleer.setAttribute("src", track_name);
    audio.load();
}
