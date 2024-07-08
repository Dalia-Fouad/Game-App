import { Ui } from './ui.js';

export class Details {
    constructor(id) {
        this.gameUI = new Ui();
        $(".btn-close").on("click",()=>{
            $("#homeSection").removeClass("d-none");
            $("#detailSection").addClass("d-none");
        })
         this.getDetails(id);
    };


    async getDetails(gameId) {
        $(".load").removeClass("d-none");
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`;
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
            // console.log(result);
            $(".load").addClass("d-none");
            this.gameUI.displayGameDetails(result);
           

        } catch (error) {
            console.error(error);
        }
    };

}