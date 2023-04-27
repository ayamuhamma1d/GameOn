import { Details } from "./details.js";
import { UI } from "./uiGames.js"


export class Games {
    constructor() {
        this.links = Array.from(document.querySelectorAll(".nav-item a"));
        for (var i = 0; i < this.links.length; i++) {
            this.links[i].addEventListener("click", (e) => {
                document.querySelector(".nav-item .active").classList.remove("active");
                e.target.classList.add("active")
                this.getGames(e.target.dataset.category)

            })
            this.getGames("mmorpg")
        }

        this.ui = new UI()
    }
    async getGames(category) {
        let load = document.querySelector("#spinner")
        load.classList.remove("d-none");

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7ff8eacd55msha41fd62d14ec11dp172c34jsnada4db98fe17',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        let Api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
        let result = await Api.json()
        if (result) {
            this.ui.displayGames(result)
            console.log(result);
            this.pageSwitch()
            load.classList.add("d-none");
            $("body").css("overflow", "auto")
        }


        //    console.log(result);
    }

    pageSwitch() {
        let cards = Array.from(document.querySelectorAll(".card"));
        // console.log(cards);
        for (var i = 0; i < cards.length; i++) {
            cards[i].addEventListener("click", (e) => {
                // console.log(e.currentTarget.getAttribute("data-id"))
                let id = e.currentTarget.getAttribute("data-id")
                if (id != null) {
                    console.log(id);
                    let ui = new Details(id)
                }

            })
        }
    }


    viewDetails(gameId) {

        document.querySelector("#homePage").classList.add("d-none")
        document.querySelector("#discription").classList.remove("d-none")
    }
}