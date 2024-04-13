// res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

// Настройка плеера
// var player = new Playerjs({id:"player", file:"audio/something/Only You.mp3"});

// Работа с треками и переключением
var files = {
    "Base": {
        'Иностранное': {'Black Sabbath': {'1970. Black Sabbath': {'_tracks': ['01. Black Sabbath.mp3', '02. The Wizard.mp3', '03. Behind The Wall Of Sleep.mp3', '04. N.I.B..mp3', "05. Evil Woman, Don't Play Your Games With Me.mp3", '06. Sleeping Village.mp3', '07. Warning.mp3']}, '1970. Paranoid': {'_tracks': ['01. War Pigs.mp3', '02. Paranoid.mp3', '03. Planet Caravan.mp3', '04. Iron Man.mp3', '05. Electric Funeral.mp3', '06. Hand Of Doom.mp3', '07. Rat Salad.mp3', '08. Fairies Wear Boots.mp3']}, '_tracks': []}, 'Pink Floyd': {'1967 - The Piper At The Gates Of Dawn': {'_tracks': ['01. Astronomy Domine (Mono).mp3', '02. Lucifer Sam (Mono).mp3', '03. Matilda Mother (Mono).mp3', '04. Flaming (Mono).mp3', '05. Pow R. Toc H. (Mono).mp3', '06. Take Up Thy Stethoscope And Walk (Mono).mp3', '07. Interstellar Overdrive (Mono).mp3', '08. The Gnome (Mono).mp3', '09. Chapter 24 (Mono).mp3', '10. The Scarecrow (Mono).mp3', '11. Bike (Mono).mp3']}, '1970 - Atom Heart Mother': {'_tracks': ['01. Atom Heart Mother.mp3', '02. If.mp3', "03. Summer '68.mp3", '04. Fat Old Sun.mp3', "05. Alan's Psychedelic Breakfast.mp3"]}, '1973 - The Dark Side Of The Moon': {'_tracks': ['1. Speak To Me.mp3', '10. Eclipse.mp3', '2. Breathe (In The Air).mp3', '3. On The Run.mp3', '4. Time.mp3', '5. The Great Gig In The Sky.mp3', '6. Money.mp3', '7. Us And Them.mp3', '8. Any Colour You Like.mp3', '9. Brain Damage.mp3']}, '_tracks': []}, '_tracks': []}, 'Русское': {'Аквариум': {'1983 - Радио Африка': {'Covers': {'_tracks': []}, '_tracks': ['01. музыка серебряных спиц.mp3', '02. капитан африка.mp3', '03. песни вычерпывающих людей.mp3', '04. змея.mp3', '05. вана хойа.mp3', '06. рок-н-ролл мертв.mp3', '07. радио шао-линь.mp3', '08. искусство быть смирным.mp3', '09. тибетское танго.mp3', '10. время луны.mp3', '11. мальчик евграф.mp3', '12. твоей звезде.mp3', '13. с утра шел снег.mp3', '14. еще один упавший вниз.mp3', '15. Платан [бонус трек].mp3', '16. Сторож Сергеев [бонус трек].mp3', '17. Альтернатива [бонус трек].mp3']}, '_tracks': []}, 'АукцЫон': {'1990 - Жопа': {'_tracks': ['01. Колпак.mp3', '02. Немой.mp3', '03. Пионер.mp3', '04. Боюсь.mp3', '05. Ябеда.mp3', '06. Самолёт.mp3', '07. Любовь.mp3', '08. Вру.mp3', '09. Выжить.mp3', '10. Убьют.mp3']}, '1991 - Бодун': {'_tracks': ['01. В нелюди.mp3', '02. День Победы.mp3', '03. Ушла.mp3', '04. Сирота.mp3', '05. Слон.mp3', '06. Фа фа фа.mp3', '07. Warum.mp3', '08. Лётчик.mp3', '09. Песня про столбы.mp3', '10. Зима.mp3', '11. Отлюбил.mp3']}, '_tracks': []}, 'Самое большое простое число': {'_tracks': ['Злой.mp3']}, '_tracks': []}, '_tracks': []
    }
};

// var files = fetch("file:///home/ifan/projects/site/tests_and_helps/music/files.json");
console.log(files);


// var album = "Something";
// var album_tracks = files[album];

var album_name = "";
var user_pos = ["Base"];
var user_folder = {};
var folders = [];
var tracks = [];
var now_play = [];



function next_track() {
    console.log("Следующий трек");
    console.log(tracks);
    console.log(now_play);
    console.log(now_play.slice(-1));
    console.log(tracks.indexOf(now_play.slice(-1)));
    if (tracks[tracks.indexOf(now_play.slice(-1)[0]) + 1]) {
        var track = tracks[tracks.indexOf(now_play.slice(-1)[0]) + 1];
        set_track(track, true, false);
    } else {
        var track = tracks[0];
        set_track(track, false, false);
    }
}


function set_track(track_name, start_play, by_user) {
    console.log(user_pos);
    if (by_user == true) {
        now_play = user_pos.slice(0);
        now_play.push(track_name);
    } else {
        now_play.pop();
        now_play.push(track_name);
    }
    var h1 = document.getElementById("track-name");
    h1.setAttribute("class", "text now-track show");
    var h1_text = document.createTextNode(track_name.slice(0, -4));
    h1.removeChild(h1.firstChild);
    h1.appendChild(h1_text);
    // h1.setAttribute("class", "");
    // h1.setAttribute("class", "show");

    var audio = document.getElementById("audio");
    var pleer = document.getElementById("pleer");
    // console.log(now_play)
    track_name = "audio/" + now_play.slice(1).join("/");

    pleer.setAttribute("src", track_name);
    console.log(track_name);
    audio.load();
    if (start_play) {
        audio.play();
    }
}


function set_folder(folder) {
    // var tracks_header = document.getElementById("tracks");
    // var tracks_a = document.querySelectorAll(".track");
    // for (track of tracks_a) {
    //     track.setAttribute("class", "track hide");
    // }

    // album = album_name;
    // album_tracks = albums[album];

    // Достаём треки из системы
    album_name = folder;
    console.log(folder)
    if (user_pos.indexOf(folder) == 0) {
        user_pos = ["Base"];
    } else if (user_pos.indexOf(folder) != -1) {
        user_pos = user_pos.slice(0, user_pos.indexOf(folder) + 1);
    } else {
        user_pos.push(folder);
    }
    
    user_folder = files;

    for (folder of user_pos) {
        user_folder = user_folder[folder];
    }
    tracks = user_folder._tracks;
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

    for (folder of user_pos.slice(0, -1)) {
        var br = document.createElement("br");
        var a = document.createElement("a");

        var a_text = document.createTextNode("{" + folder + "}");
        a.appendChild(a_text);

        a.setAttribute("href", "#");
        a.setAttribute("onclick", "set_folder('" + folder + "')");
        a.setAttribute("class", "text track show");

        albums_header.appendChild(a);
        albums_header.appendChild(br)
    }

    for (folder of folders) {
        var br = document.createElement("br");
        var a = document.createElement("a");

        var a_text = document.createTextNode("[" + folder + "]");
        a.appendChild(a_text);

        a.setAttribute("href", "#");
        a.setAttribute("onclick", "set_folder('" + folder + "')");
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

    for (track_name of tracks) {
        var br = document.createElement("br");
        var a = document.createElement("a");

        var a_text = document.createTextNode("[" + track_name.slice(0, -4) + "]");
        a.appendChild(a_text);

        a.setAttribute("href", "#");
        a.setAttribute("onclick", "set_track(`" + track_name + "`, true, true)");
        a.setAttribute("class", "text track show");

        tracks_header.appendChild(a);
        tracks_header.appendChild(br)
    }
}
