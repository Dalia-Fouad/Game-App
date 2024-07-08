import { Ui } from './ui.js';
import { Details } from './details.js';



export class Games {
    constructor() {
        this.getGames("mmorpg");

        $(".nav-item .nav-link").on("click", (e) => {
            let active = document.querySelector(".active");
            $(active).removeClass("active");
            $(e.target).addClass("active");
            let Category = $(e.target).attr("id");
            console.log(Category);
            this.getGames(Category);
        });
        this.gameUI = new Ui();
    }


    async getGames(category) {

        $(".load").removeClass("d-none");
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'c66dcd1cdcmsh13aa46b9e00fec0p1d8028jsn2fdb2b944d9f',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            this.gameUI.displayGames(result);
            this.onCardClick();
            $(".load").addClass("d-none");
        } catch (error) {
            console.error(error);
        }
    }

    onCardClick() {
        document.querySelectorAll(".card").forEach((card) => {
            card.addEventListener("click", () => {
                const id = card.getAttribute("data-id");
                const details = new Details(id);
            });
        });
    }
}
