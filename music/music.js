// Основная работа
var music_directory = "../audio/";
var images_directory = music_directory + "img/";
var album_name = "";
var user_pos = ["Base"];
console.log(`Позиция ${user_pos}`);
var user_folder = {};
var folders = [];
var tracks = [];
var now_play = [];
var played = [];
var type_of_play = "posled";
var album_image_1 = document.getElementById("album_image_1");
var album_image_2 = document.getElementById("album_image_2");


// Принимаем Query String
// Пример запроса: ?path=/Русское/Аквариум/1983 - Радио Африка&track=музыка серебряных спиц
const params = new URLSearchParams(window.location.search);
var path = params.get('path').split("/").slice(1);
console.log(`Путь: ${path}`);
set_path(path);
var track = params.get('track');
console.log(`Трек для включения: ${track}`);
if (user_folder._tracks.indexOf(track) != -1) {
    set_track(track, false, true);
}


function set_path(path) {
    for (var f_index = 0; f_index < path.length; f_index++) {
        var folder = path[f_index];
        if (f_index == path.length - 1) {
            set_folder(folder, true);
        } else {
            set_folder(folder, false);
        }
    }
}


function next_track() {
    if (type_of_play == "posled") {
        if (tracks[tracks.indexOf(now_play.slice(-1)[0]) + 1]) {
            var track = tracks[tracks.indexOf(now_play.slice(-1)[0]) + 1];
            set_track(track, true, false);
        } else {
            var track = tracks[0];
            set_track(track, false, false);
        }
    }
    if (type_of_play == "random") {
        console.log(`tracks.length ${tracks.length}, played.length ${played.length}`)
        if (tracks.length > played.length) {
            min = 0;
            max = tracks.length;
            var random_int = Math.floor(Math.random() * (max - min) + min);
            while (played.indexOf(random_int) != -1) {
                if (played[played.indexOf(random_int)] + 1 < max) {
                    random_int = played[played.indexOf(random_int)] + 1;
                } else {
                    random_int = 0;
                }
            }
            played.push(random_int);
            var track = tracks[random_int];
            set_track(track, true, false);
        }
    }
}


function prev_track() {
    if (type_of_play == "posled") {
        if (tracks.indexOf(now_play.slice(-1)[0]) - 1 > -1) {
            var track = tracks[tracks.indexOf(now_play.slice(-1)[0]) - 1];
            set_track(track, true, false);
        }
    }
    if (type_of_play == "random") {
        played.pop();
        set_track(played[-1], true, false);
    }
}


function set_track(track_name, start_play, by_user) {
    if (by_user == true) {
        tracks = user_folder._tracks.slice(0);
        now_play = user_pos.slice(0);
        now_play.push(track_name);
        played = [tracks.indexOf(track_name)];
    } else {
        now_play.pop();
        now_play.push(track_name);
    }
    var h1 = document.getElementById("track-name");
    h1.setAttribute("class", "text now-track show");
    var h1_text = document.createTextNode(track_name.slice(0, -4));
    h1.removeChild(h1.firstChild);
    h1.appendChild(h1_text);

    var audio = document.getElementById("audio");
    var pleer = document.getElementById("pleer");

    track_name = music_directory + now_play.slice(1).join("/");

    pleer.setAttribute("src", track_name);

    // Ставим картинку
    album_image_1.setAttribute("src", images_directory + now_play.slice(1).join("/").slice(0, now_play.slice(1).join("/").lastIndexOf(".")) + ".png");

    audio.load();
    if (start_play) {
        audio.play();
    }
}


function set_folder(folder, show) {
    // var tracks_header = document.getElementById("tracks");
    // var tracks_a = document.querySelectorAll(".track");
    // for (track of tracks_a) {
    //     track.setAttribute("class", "track hide");
    // }

    // album = album_name;
    // album_tracks = albums[album];

    // Достаём треки из системы
    // album_name = folder;
    if (user_pos.indexOf(folder) == 0) {
        user_pos = ["Base"];
        album_name = folder;
    } else if (user_pos.indexOf(folder) != -1) {
        user_pos = user_pos.slice(0, user_pos.indexOf(folder) + 1);
        album_name = folder;
    }

    user_folder = files;
    for (var u_folder of user_pos) {
        user_folder = user_folder[u_folder];
    }

    if (Object.keys(user_folder).slice(0).indexOf(folder) != -1) {
        // user_pos.push(folder);
        user_pos.push(folder);
        user_folder = user_folder[folder]
        album_name = folder;
    } else {
        show = true;
    }
    
    // user_folder = files;

    // for (folder of user_pos) {
    //     user_folder = user_folder[folder];
    // }
    if (show == true) {
        show_folders_and_tracks(user_folder);
    }
}

function show_folders_and_tracks(user_folder) {
    album_image_2.setAttribute("src", music_directory + user_pos.slice(1).join("/") + "/cover.jpg");
    
    folders = Object.keys(user_folder).slice(0, -1);
    // Собираем плашку с папками справа
    var albums_header = document.getElementById("albums");
    while (albums_header.firstChild) {
        albums_header.removeChild(albums_header.firstChild);
    }

    var h1 = document.createElement("h1");
    var h1_text = document.createTextNode("Albums");
    h1.appendChild(h1_text);
    h1.setAttribute("class", "text albums-head");
    albums_header.appendChild(h1);

    for (var folder of user_pos.slice(0, -1)) {
        var br = document.createElement("br");
        var a = document.createElement("a");

        var a_text = document.createTextNode("{" + folder + "}");
        a.appendChild(a_text);

        // a.setAttribute("href", "#");
        a.setAttribute("onclick", "set_folder('" + folder + "', true)");
        a.setAttribute("class", "text track show");

        albums_header.appendChild(a);
        albums_header.appendChild(br)
    }

    for (var folder of folders) {
        var br = document.createElement("br");
        var a = document.createElement("a");

        var a_text = document.createTextNode("[" + folder + "]");
        a.appendChild(a_text);

        // a.setAttribute("href", "#");
        a.setAttribute("onclick", "set_folder('" + folder + "', true)");
        a.setAttribute("class", "text track show");

        albums_header.appendChild(a);
        albums_header.appendChild(br)
    }

    // Собираем плашку с треками по серёдке
    var tracks_header = document.getElementById("tracks");
    while (tracks_header.firstChild) {
        tracks_header.removeChild(tracks_header.firstChild);
    }

    var h1 = document.createElement("h1");
    var h1_text = document.createTextNode(album_name);
    h1.appendChild(h1_text);
    h1.setAttribute("class", "text album-name show");
    tracks_header.appendChild(h1);

    for (var track_name of user_folder._tracks) {
        var br = document.createElement("br");
        var a = document.createElement("a");

        var a_text = document.createTextNode("[" + track_name.slice(0, -4) + "]");
        a.appendChild(a_text);

        // a.setAttribute("href", "#");
        a.setAttribute("onclick", "set_track(`" + track_name + "`, true, true)");
        a.setAttribute("class", "text track show");

        tracks_header.appendChild(a);
        tracks_header.appendChild(br);
    }
}
