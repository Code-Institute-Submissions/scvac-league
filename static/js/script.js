/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger icon */
function reveal() {
    var x = document.getElementById("links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } 
    else {
        x.style.display = "block";
    }
}