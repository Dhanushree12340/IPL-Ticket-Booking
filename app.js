
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

    showToast("Welcome! Please complete your booking form!");

});
