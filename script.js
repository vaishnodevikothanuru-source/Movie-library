function searchContent() {

    let input = document.getElementById("searchInput").value.toLowerCase();

    let cards = document.querySelectorAll(
        ".movie-card, .series-card, .anime-card, .cartoon-card"
    );

    cards.forEach(function(card) {

        let title = card.querySelector("h3").innerText.toLowerCase();

        if (title.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}



function addFavorite(movieName) {
    alert(movieName + " added to favorites!");
}



function showDetails(movieName) {
    alert("You selected: " + movieName);
}



function submitForm(event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
}

document.addEventListener("DOMContentLoaded", function () {

    let links = document.querySelectorAll("nav a");

    links.forEach(function(link) {

        if (link.href === window.location.href) {
            link.style.color = "#e50914";
        }

    });
   

});