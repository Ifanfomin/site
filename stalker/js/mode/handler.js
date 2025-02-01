mode_name = document.getElementById("mode_name");

function set_mode(num, name) {
    settings.mode = num;
    settings.mode_name = name;
    mode_name.innerHTML = "Mode: " + settings.mode_name;
    document.getElementById("menu_screen").setAttribute("class", "menu");
    document.getElementById("mode_screen").setAttribute("class", "hidden");
}

document.getElementById("easy_button").addEventListener("click", () => {
    set_mode(0, "Easy");
});

document.getElementById("medium_button").addEventListener("click", () => {
    set_mode(1, "Medium");
});

document.getElementById("hard_button").addEventListener("click", () => {
    set_mode(2, "Hard");
});

document.getElementById("violence_button").addEventListener("click", () => {
    set_mode(3, "Violence");
});

document.getElementById("kill_me_button").addEventListener("click", () => {
    set_mode(4, "KILL ME");
});

document.getElementById("classic_button").addEventListener("click", () => {
    set_mode(5, "Classic");
});