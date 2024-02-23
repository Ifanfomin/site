function set_track(track_name) {
    var audio = document.getElementById("audio");
    var pleer = document.getElementById("pleer");
    track_name = "audio/" + track_name;
    pleer.setAttribute("src", track_name);
    audio.load();
}
