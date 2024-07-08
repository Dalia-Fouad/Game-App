export class Ui {
   
    displayGames(gamesList) {
        let games = ``;
        for (let i = 0; i < gamesList.length; i++) {
              
            games += ` <div class=" col-md-6 col-lg-4 col-xl-3">
                            <div class="card h-100  bg-transparent text-white" data-id="${gamesList[i].id}" >
                                <img src="${gamesList[i].thumbnail}" class="m-3 rounded-top-2 " alt="game logo">
                                <div class="card-body">
                                    <div class="header d-flex justify-content-between">
                                        <h5 class="card-title fs-4">${gamesList[i].title}</h5>
                                        <span class="badge text-bg-primary p-2 h-25 ff">free</span>
                                    </div>
    
                                    <p class="card-text text-center my-2 ff opacity-50 small">${((gamesList[i].short_description).split(" ")).slice(0, 8).toString()}
                                    </p>
                                </div>
                                <div class="card-footer d-flex justify-content-between fs-6">
                                    <span class="badge text-white bag-bg">${gamesList[i].genre}</span>
                                    <span class="badge text-white bag-bg">${gamesList[i].platform}</span>
                                </div>
                            </div>
                        </div>`
    
        }
    
        document.querySelector(".allgames").innerHTML = games;
    
    }


    displayGameDetails(gameDetail) {
        $("#homeSection").addClass("d-none");
        $("#detailSection").removeClass("d-none");
        let game = ` <div class="row">
                        <div class="col-md-4">
                            <img src="${gameDetail.thumbnail}" class="w-100" alt="game image">
                        </div>
                        <div class="col-md-8">
                            <h3>Title: ${gameDetail.title}</h3>
                            <p>Category:  <span class="badge text-bg-info">${gameDetail.genre}</span></p> 
                            <p>Platform:  <span class="badge text-bg-info">${gameDetail.platform}</span></p>
                            <p>Status:  <span class="badge text-bg-info">${gameDetail.status}</span></p>
                            <p>${gameDetail.description}</p>
                            <a class="btn btn-outline-warning" href="${gameDetail.game_url}" target="_blank"> Show Game </a>
                        </div>
                    </div>`;
        document.querySelector(".gameDetail").innerHTML = game;
    
    }
    
}
