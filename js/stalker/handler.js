let walk_or_bolt = "walk";

document.getElementById("up_button").addEventListener("click", () => {
    if (walk_or_bolt === "walk") {
        game_step("w")
    } else if (walk_or_bolt === "bolt") {
        game_step("i")
    }
});

document.getElementById("down_button").addEventListener("click", () => {
    if (walk_or_bolt === "walk") {
        game_step("s")
    } else if (walk_or_bolt === "bolt") {
        game_step("k")
    }
});

document.getElementById("left_button").addEventListener("click", () => {
    if (walk_or_bolt === "walk") {
        game_step("a")
    } else if (walk_or_bolt === "bolt") {
        game_step("j")
    }
});

document.getElementById("right_button").addEventListener("click", () => {
    if (walk_or_bolt === "walk") {
        game_step("d")
    } else if (walk_or_bolt === "bolt") {
        game_step("l")
    }
});

document.getElementById("heal_button").addEventListener("click", () => {
    game_step("e")
});

document.getElementById("bolt_button").addEventListener("click", () => {
    walk_or_bolt = "bolt";

    document.getElementById("bolt_button").setAttribute("class", "my_hidden_button");
    document.getElementById("walk_button").setAttribute("class", "my_button");
});

document.getElementById("walk_button").addEventListener("click", () => {
    walk_or_bolt = "walk";

    document.getElementById("walk_button").setAttribute("class", "my_hidden_button");
    document.getElementById("bolt_button").setAttribute("class", "my_button");
});