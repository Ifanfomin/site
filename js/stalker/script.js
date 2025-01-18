
let scw = 40;
let sch = 32;

let sc = new GameScreen(scw, sch);
let pl = new Player(Math.floor((sc.width - 1) / 2), 1);
let mp = new Maps(sc, pl);
sc.print_map(mp, pl);
let run = true;

function game_step(key) {
    // обрабатываем key
    if (key === "quit") {
        console.log("Thanks for playing! :)");
        run = false;
    } else if (key === "restart") {
        pl = new Player(Math.floor((sc.width - 1) / 2), 1);
        mp = new Maps(sc, pl);
        sc.print_map(mp, pl);
        run = true;

        walk_or_bolt = "walk";
        document.getElementById("walk_button").setAttribute("class", "my_button");
        document.getElementById("bolt_button").setAttribute("class", "hidden");

    } else if (key === "help") {
        sc.help_screen();
    } else if (run !== false) {
        // обрабатываем результаты шага в которых нужно менять html
        pl.take_to_do(key, mp, sc);
        sc.print_map(mp, pl);

        if (pl.game_over === true) {
            run = false;
            sc.death_screen();
        } else if (pl.game_win === true) {
            run = false;
            sc.win_screen();
        }
    }
}

