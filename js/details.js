import { UI } from "./uiGames.js";

export class Details {
    constructor(id) {
        this.id = id;
        console.log(this.id);

        document.querySelector(".closebtn").addEventListener("click", () => {
            document.querySelector("#homePage").classList.remove("d-none");
            document.querySelector("#gameCards").classList.remove("d-none");
            document.querySelector("#discription").classList.add("d-none");
        });

        this.getDetails(id);
    }
    async getDetails(gameId) {
        let load = document.querySelector("#spinner");
        load.classList.remove("d-none");
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "7ff8eacd55msha41fd62d14ec11dp172c34jsnada4db98fe17",
                "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            },
        };

        let detailsAPI = await fetch(
            `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`,
            options
        );
        let response = await detailsAPI.json();
        if (response) {
            console.log(response);
            let ui = new UI(response);
            document.querySelector("#homePage").classList.add("d-none");
            document.querySelector("#discription").classList.remove("d-none");
            document.querySelector("#details").classList.remove("d-none");
            load.classList.add("d-none");
        }
    }
}