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
carCards.forEach(function (card) {
   card.addEventListener("click", function () {
      const carName = card.querySelector("h3").textContent;
      alert("You selected: " + carName);
   });
});
const detailsBox = document.getElementById("car-details");
carCards.forEach(function (card) {
   card.addEventListener("click", function () {
      const carName = card.querySelector("h3").textContent;
      document.getElementById("details-name").textContent = 
         "Car: " + carName;
      document.getElementById("details-name").textContent =
         "Price: $100,000";
      document.getElemenyById("details-info").textContent =
         "More specifications coming soon.";
      detailsBox.style.display = "block";
   });
});
