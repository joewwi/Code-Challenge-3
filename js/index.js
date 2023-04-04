document.addEventListener("DOMContentLoaded", () =>{
    fetch(`http://localhost:3000/films`)
    .then(res => res.json())
    .then(showMovies)

    function showMovies(films){
        films.forEach(film => {
            let availabletickets = film.capacity - film.tickets_sold  
            const card = document.createElement("ul")
            card.className = "list-group list-group-flush"
            card.innerHTML= `
            <div class="card" style="width: 18rem;">
                <img src="${film.poster}" class="card-img-top" alt="${film.title} ">
                <div class="card-body">
                    <h5 class="card-title">${film.title}</h5>
                    <p class="card-text">Showtime: ${film.showtime}</p>
                    <p class="card-text">Runtime: ${film.runtime}mins</p>
                    <p id="available-tickets">Available Tickets: ${availabletickets}</p>
                    <button type="submit" id="button">Buy Ticket</button>
                </div>
            </div>
            `
            let div = document.getElementById("movie-list")
            div.appendChild(card)

            let btn = card.querySelector("button") 
            btn.addEventListener('click', () => {
                availabletickets --
                if(availabletickets < 0){
                    btn.disabled = true
                }else{
                card.querySelector("#available-tickets").innerHTML = `Available Tickets: ${availabletickets}`
                }
            })
        });
    }

    // function displayMovie()}



})


