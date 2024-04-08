// res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

// Настройка плеера
// var player = new Playerjs({id:"player", file:"audio/something/Only You.mp3"});

// Работа с треками и переключением
var albums = {
    "Something": 
    [
        "I Loved Another Woman.mp3", 
        "Only You.mp3", 
        "Blood And Rockets.mp3", 
        "Satana.mp3", 
        "Aria Math (Phonk).mp3", 
        "Robots Outro.mp3"
    ],
    "Mindustry OST": 
    [
        '1. Boss 0.mp3', 
        '2. Boss 1.mp3', 
        '3. Boss 2.mp3', 
        '4. Day 1.mp3', 
        '5. Day 2.mp3', 
        '6. Day 3.mp3', 
        '7. Day 4.mp3', 
        '8. Day 5.mp3', 
        '9. Day 7.mp3', 
        '10. Day 9.mp3', 
        '11. Game 2.mp3', 
        '12. Game 3.mp3', 
        '13. Game 4.mp3', 
        '14. Game 5.mp3', 
        '15. Game 6.mp3', 
        '16. Game 7.mp3', 
        '17. launch.mp3', 
        '18. Editor.mp3'
    ]
};


var album = "Something";
var album_tracks = albums[album];


function next_track() {
    var track = document.getElementById("pleer").src;

    track = track.slice(track.lastIndexOf("/") + 1);
    track = track.replaceAll("%20", " ");
    track_index = album_tracks.indexOf(track) + 1
    if (track_index == album_tracks.length) {
        track_index = 0;
    }
    
    set_track(album_tracks[track_index], true);
}


function set_track(track_name, start_play) {
    var h1 = document.getElementById("track-name");
    var h1_text = document.createTextNode(track_name.slice(0, -4));
    h1.removeChild(h1.firstChild);
    h1.appendChild(h1_text);
    // h1.setAttribute("class", "");
    // h1.setAttribute("class", "show");

    var audio = document.getElementById("audio");
    var pleer = document.getElementById("pleer");

    track_name = "audio/" + album + "/" + track_name;

    pleer.setAttribute("src", track_name);

    audio.load();
    if (start_play) {
        audio.play();
    }
}


function set_album(album_name) {
    // var tracks_header = document.getElementById("tracks");
    // var tracks_a = document.querySelectorAll(".track");
    // for (track of tracks_a) {
    //     track.setAttribute("class", "track hide");
    // }

    album = album_name;
    album_tracks = albums[album];

    var tracks_header = document.getElementById("tracks");
    while (tracks_header.firstChild) {
        tracks_header.removeChild(tracks_header.firstChild);
    }

    var h1 = document.createElement("h1");
    var h1_text = document.createTextNode(album_name);
    h1.appendChild(h1_text);
    h1.setAttribute("class", "text album show");
    tracks_header.appendChild(h1);

    for (track_name of album_tracks) {
        var br = document.createElement("br");
        var a = document.createElement("a");

        var a_text = document.createTextNode("[" + track_name.slice(0, -4) + "]");
        a.appendChild(a_text);

        a.setAttribute("href", "#");
        a.setAttribute("onclick", "set_track('" + track_name + "', true)");
        a.setAttribute("class", "text track show");

        tracks_header.appendChild(a);
        tracks_header.appendChild(br)
    }
}
