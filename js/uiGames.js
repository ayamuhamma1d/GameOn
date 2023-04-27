export class UI {
    constructor(response) {
            this.response = response;
            this.disc = "";
            if (this.response != undefined) {
                this.gameDiscr(this.response);
            }
        }
        //SectionOne
    displayGames(data) {
        let cartona = ``;
        for (let i = 0; i < data.length; i++) {
            cartona += `
       <div class="hover col-lg-4 col-lg-3 mb-3">
        <div data-id=${data[i].id} class="card " role="button">
       <div class="card bg-dark shadow ">
        <div class="p-3"> <img src=${
          data[i].thumbnail
        } class="card-img-top w-100 rounded-2" id="img" alt="..."></div>
         <div class="card-body bg-transparent">
           <div class="cont d-flex justify-content-between align-items-center mb-2"> 
             <span class=" card-title text-white handel" id="title">${
               data[i].title
             }</span>
             <span class="btn btn-primary fw-bold p-1">free</span>
           </div>
           <p class="card-text text-center handeling" id="context">free game ${data[
             i
           ].short_description.slice(-40)}</p>
         </div>
         <div class="card-footer d-flex justify-content-between px-2">
              <h6><span class="badge ">${data[i].genre}</span></h6>
             <h6> <span class="badge ">${data[i].platform}</span></h6>
         </div>
       </div>
       </div>
     </div>
       `;
        }
        document.getElementById("gameCards").innerHTML = cartona;
    }

    //SectionTwo
    gameDiscr(data) {
        console.log(data);
        this.disc = `
      <div class=" col-lg-5">
        <div class="images">
          <img src=${data.thumbnail} class="mt-1 mb-3 w-100" alt="">
        </div> 
      </div>
        <div class="disc-cont  col-lg-7 text-white">
         <h2>Title: ${data.title}</h2>
     <div class="game-details">
                        <p>Category:
                            <span class="badge bg-info text-black">${data.genre}</span>
                        </p>
                        <p>Platform: <span class="badge  bg-info text-black">${data.platform}</span> </p>
                        <p>Status: <span class="badge bg-info text-black">${data.status}</span></p>
         <p class="game-des">${data.description}</p>
         <a href="${data.game_url}" class="mt-3 btn btn-outline-warning text-white btn-size" target="_blank">Show game</a>
      </div>
      </div>`;
        document.getElementById("details").innerHTML = this.disc;
    }
}