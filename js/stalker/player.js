class Player {
    constructor(xpos, ypos) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.health = 3;
        this.bolts = 3;
        this.medics = 0;
        this.steps = 0;
        this.game_over = false;
        this.game_win = false;
    }
    take_to_do(key, mp, sc) {
        if ("wsad".indexOf(key) > -1) {
            this.replace_pos(key, mp, sc);
        } else if ("ikjl".indexOf(key) > -1 && this.bolts > 0) {
            this.throw_bolt(key, mp, sc);
        } else if (key.indexOf("e") > -1 && this.medics > 0) {
            this.medic_use();
        }
    }

    medic_use() {
        this.health += 1;
        this.medics -= 1;
    }

    throw_bolt(direct, mp, sc) {
        if (direct === "i") {
            let distance = (this.ypos + 1 < 4) ? this.ypos + 1 : 3;
            for (let ybpos = this.ypos - distance; ybpos < this.ypos; ybpos++) {
                mp.opening_cell(this.xpos, ybpos, "$");
            }
        } else if (direct === "k") {
            let distance = (sc.height - this.ypos < 5) ? sc.height - this.ypos : 4;
            for (let ybpos = this.ypos + 1; ybpos < this.ypos + distance; ybpos++) {
                mp.opening_cell(this.xpos, ybpos, "$");
            }
        } else if (direct === "j") {
            let distance = (this.xpos + 1 < 4) ? this.xpos + 1 : 3;
            for (let xbpos = this.xpos - distance; xbpos < this.xpos; xbpos++) {
                mp.opening_cell(xbpos, this.ypos, "$");
            }
        } else if (direct === "l") {
            let distance = (sc.width - this.xpos < 5) ? sc.width - this.xpos : 4;
            for (let xbpos = this.xpos + 1; xbpos < this.xpos + distance; xbpos++) {
                mp.opening_cell(xbpos, this.ypos, "$");
            }
        }
        this.bolts -= 1;
    }

    replace_pos(direct, mp, sc) {
        mp.player_map[this.ypos][this.xpos] = "_";
        if (direct === "w" && this.ypos - 1 > 0) {
            this.ypos -= 1;
        } else if (direct === "s" && this.ypos < sc.height - 1) {
            this.ypos += 1;
        } else if (direct === "a" && this.xpos - 1 > 0) {
            this.xpos -= 1;
        } else if (direct === "d" && this.xpos + 1 < sc.width - 1) {
            this.xpos += 1;
        }
        this.replace_simbol(mp, sc);
    }

    replace_simbol(mp) {
        let cell = mp.open_map[this.ypos][this.xpos];
        mp.open_map[this.ypos][this.xpos] = "_";
        mp.player_map[this.ypos][this.xpos] = "@";
        if (cell === "$") {
            this.health -= 1;
            if (this.health === 0) {
                this.game_over = true;
                // sc.death_screen();
            }
        } else if (cell === "+") {
            this.medics += 1;
        } else if (cell === "¥") {
            this.bolts += 1;
        } else if (cell === "£") {
            this.game_win = true;
            // sc.win_screen();
        }
        this.steps += 1;
    }
}