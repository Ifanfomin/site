let scw = 40;
let sch = 32;

let sc = new GameScreen(scw, sch);
let pl = new Player(Math.floor((sc.width - 1) / 2), 1);
let mp = new Maps(sc, pl);
sc.print_map(mp, pl);
let run = true;

// document.getElementById("submit").addEventListener("click", game_step);

function game_step(key) {
    if (run !== false) {
        // let key = document.getElementById('input_id').value;
        pl.take_to_do(key, mp, sc);
        sc.print_map(mp, pl);
        if (key === "quit") {
            console.log("Thanks for playing! :)");
            run = false;
        } else if (key === "restart") {
            sc.width = scw;
            sc.health = sch;
            pl.xpos = Math.floor((sc.width - 1) / 2);
            pl.ypos = 1;
        } else if (key === "help") {
            sc.help_screen();
        } else if (pl.game_over === true) {
            run = false;
            sc.death_screen()
        }
    }
}

