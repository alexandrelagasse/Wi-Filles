document.getElementById("bouton").addEventListener("click", function() {
    const h1 = document.querySelector("h1");

    if (h1.style.color === "darkblue") {
        h1.style.color = "red";
    } else {
        h1.style.color = "darkblue";
    }
});
