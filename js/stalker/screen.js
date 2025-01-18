class GameScreen {
    constructor(width, height) {
        this.screen = document.getElementById("map_screen");
        this.height = Math.floor(height / 1.6);
        this.width = width;
        this.help_screen();
    }

    help_screen() {
        console.log("Help Screen");
    }

    win_screen() {
        console.log("Win Screen");
        this.print_open_map();
    }

    death_screen() {
        console.log("Death Screen");
        this.print_open_map();
    }

    print_open_map() {
        let text = "";
        for (let x_i = 0; x_i < mp.open_map.length; x_i++) {
            for (let y_i = 0; y_i < mp.open_map[0].length; y_i++) {
                text += mp.open_map[x_i][y_i];
            }
            text += "<br>";
        }
        text += "Health: " + pl.health + "<br>";
        text += "Medics: " + pl.medics + "<br>";
        text += "Bolts: " + pl.bolts + "<br>";
        this.screen.innerHTML = text;
    }

    print_map(mp, pl) {
        let text = "";
        for (let x_i = 0; x_i < mp.player_map.length; x_i++) {
            for (let y_i = 0; y_i < mp.player_map[0].length; y_i++) {
                text += mp.player_map[x_i][y_i];
            }
            text += "<br>";
        }
        text += "Health: " + pl.health + "<br>";
        text += "Medics: " + pl.medics + "<br>";
        text += "Bolts: " + pl.bolts + "<br>";
        this.screen.innerHTML = text;
    }
}