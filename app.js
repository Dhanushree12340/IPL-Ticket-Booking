function showToast(message) {
    const toast = document.createElement("div");
    toast.innerText = message;
    toast.className = "toast";

    document.body.appendChild(toast);

    setTimeout(function () {
        toast.remove();
    }, 3000);
}

document.addEventListener("DOMContentLoaded", function () {

    // Get form elements
    const match = document.getElementById("match");
    const stand = document.getElementById("stand");
    const quantity = document.getElementById("tickets");

    // Get summary elements
    const summaryMatch = document.getElementById("summaryMatch");
    const summaryStand = document.getElementById("summaryStand");
    const summaryQuantity = document.getElementById("summaryQuantity");
    const summaryPrice = document.getElementById("summaryPrice");
    const summaryTotal = document.getElementById("summaryTotal");

    // Ticket prices
    const prices = {
        General: 500,
        Premium: 1000,
        VIP: 2000
    };

    function updateSummary() {

        const selectedMatch = match.value || "Not Selected";
        const selectedStand = stand.value || "Not Selected";
        const ticketCount = Number(quantity.value);

        const price = prices[stand.value] || 0;

        const validQuantity =
            Number.isInteger(ticketCount) &&
            ticketCount >= 1 &&
            ticketCount <= 10;

        const total = validQuantity ? price * ticketCount : 0;

        summaryMatch.textContent = selectedMatch;
        summaryStand.textContent = selectedStand;
        summaryQuantity.textContent = validQuantity ? ticketCount : 1;
        summaryPrice.textContent = price;
        summaryTotal.textContent = total;

        if (match.value && stand.value && validQuantity) {
            showToast("Booking Summary Updated!");
        }
    }

    // Add event listeners
    match.addEventListener("change", updateSummary);
    stand.addEventListener("change", updateSummary);
    quantity.addEventListener("input", updateSummary);

    showToast("Welcome! Please complete your booking form!");
});
// Activity 8: Hamburger Menu
document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    // Filter Match Cards
    const teamFilter = document.getElementById("teamFilter");
    const matchCards = document.querySelectorAll(".match-card");

    if (teamFilter) {
        teamFilter.addEventListener("change", function () {

            const selectedTeam = teamFilter.value;

            matchCards.forEach(function (card) {

                const teams = card.dataset.teams;

                if (selectedTeam === "all" ||
                    teams.split(" ").includes(selectedTeam)) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }

            });
        });
    }

    // Grid and List View
    const matchContainer = document.getElementById("matchContainer");
    const gridView = document.getElementById("gridView");
    const listView = document.getElementById("listView");

    if (matchContainer && gridView && listView) {

        gridView.addEventListener("click", function () {
            matchContainer.classList.remove("list-view");
        });

        listView.addEventListener("click", function () {
            matchContainer.classList.add("list-view");
        });
    }

});