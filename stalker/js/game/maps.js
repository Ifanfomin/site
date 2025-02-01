function random_choice(list) {
    let choice = Math.floor(list.length * Math.random());
    return list[choice];
}

function set_cells_vars() {
    if (0 <= settings.mode && settings.mode <= 4) {
        settings.cells_vars = ["+", "¥", "¥", "0", "0"];
    }
    else if (settings.mode === 5) {
        settings.cells_vars = ["+", "$", "$", "$", "$", "¥", "¥", "0", "0"]
    }
}

function update_cells(h) {
    if (settings.mode === 0 && h % Math.floor(sc.height / 4) === 0) {
        settings.cells_vars.push("$");
    }
    else if (settings.mode === 1 && h % Math.floor(sc.height / 6) === 0) {
        settings.cells_vars.push("$");
    }
    else if (settings.mode === 2 && h % Math.floor(sc.height / 8) === 0) {
        settings.cells_vars.push("$");
    }
    else if (settings.mode === 3 && h % Math.floor(sc.height / 12) === 0) {
        settings.cells_vars.push("$");
    }
    else if (settings.mode === 4) {
        settings.cells_vars.push("$");
        settings.cells_vars.push("$");
        settings.cells_vars.push("$");
    }
    if (settings.mode === 5) {

    }
}

class Maps {
    constructor(sc, pl) {
        this.close_map_gen(sc, pl);
        this.open_map_gen(sc);
    }

    close_map_gen(sc, pl) {
        let close_map = [];
        for (let h = 0; h < sc.height; h++) {
            close_map.push([]);
            for (let w = 0; w < sc.width; w++) {
                if (h === 1 && w === pl.xpos) {
                    close_map[h].push("@");
                } else {
                    close_map[h].push(".");
                }
            }
        }
        // console.log(close_map);
        this.player_map = close_map;
    }

    open_map_gen(sc) {
        let open_map = [];
        for (let h = 0; h < sc.height; h++) {
            open_map.push([]);
            update_cells(h);
            for (let w = 0; w < sc.width; w++) {
                if (h === sc.height - 1 && 0 < w < sc.width - 1) {
                    open_map[h].push("£");
                } else if (h === 1 && w === Math.floor((sc.width - 1) / 2) || h === 0 || w === 0 || h === sc.height - 1 || w === sc.width - 1) {
                    open_map[h].push("0");
                } else {
                    open_map[h].push(random_choice(settings.cells_vars));
                }
            }
        }
        // console.log(open_map);
        this.open_map = open_map;
    }

    opening_cell(x_cell, y_cell, cell_type) {
        let open_cell = this.open_map[y_cell][x_cell];
        if (open_cell === cell_type) {
            this.player_map[y_cell][x_cell] = open_cell;
        }
    }
}

