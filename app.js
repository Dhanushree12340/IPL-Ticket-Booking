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