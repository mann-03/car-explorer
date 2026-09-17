Javascript
const searchInput = document.getElementById("search");
const carCards = document.querySelectorAll(".car-card");

searchInput.addEventListener("input", function () {
   const searchText = searchInput.value.toLowerCase();
   carCards.forEach(function (card) {
     const carName = card.querySelector("h3").textContent.toLowerCase();
     if (carName.includes(searchText)) {
         card.style.display = "block";
     } else {
         card.style.display = "none";
     }
   });
});
