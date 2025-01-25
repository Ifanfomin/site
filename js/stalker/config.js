let settings = {
    width: 40,
    height: 32,
    cells_vars: ["+", "¥", "¥", "0", "0"],
    mode: 0,
    mode_name: "Easy"
};

let space = "";
for (let i = 0; i < settings.width; i++) {
    space += "_";
}
console.log(space.length);

settings.space = space;

let scw = 40;
let sch = 32;

let sc = new GameScreen(scw, sch);
let pl = new Player(Math.floor((sc.width - 1) / 2), 1);
let mp = new Maps(sc, pl, settings.cells_vars);
sc.print_map(mp, pl);
let run = true;