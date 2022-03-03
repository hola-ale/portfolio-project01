const arrowLabel = document.getElementById("arrow-label")
const arrow = document.getElementById("arrow")

arrow.addEventListener("mouseover", function() {
    arrowLabel.style.display = "inline";
});
arrow.addEventListener("mouseleave", function() {
    arrowLabel.style.display = "none";
})
