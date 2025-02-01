document.getElementById("start_button").addEventListener("click", () => {
    game_step("restart");
    document.getElementById("menu_screen").setAttribute("class", "hidden");
    document.getElementById("game_screen").setAttribute("class", "");
})

document.getElementById("game_menu_button").addEventListener("click", () => {
    document.getElementById("menu_screen").setAttribute("class", "menu");
    document.getElementById("game_screen").setAttribute("class", "hidden");
    game_step("restart");
})


document.getElementById("mode_button").addEventListener("click", () => {
    document.getElementById("menu_screen").setAttribute("class", "hidden");
    document.getElementById("mode_screen").setAttribute("class", "mode");
    game_step("restart");
})

document.getElementById("mode_menu_button").addEventListener("click", () => {
    document.getElementById("menu_screen").setAttribute("class", "menu");
    document.getElementById("mode_screen").setAttribute("class", "hidden");
})

document.getElementById("story_button").addEventListener("click", () => {
    document.getElementById("menu_screen").setAttribute("class", "hidden");
    document.getElementById("story_screen").setAttribute("class", "story");
})

document.getElementById("story_menu_button").addEventListener("click", () => {
    document.getElementById("menu_screen").setAttribute("class", "menu");
    document.getElementById("story_screen").setAttribute("class", "hidden");
})