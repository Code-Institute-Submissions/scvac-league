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


/* Accordion */

let accordionItem = document.getElementsByClassName('accordionItem');
let accordionItemHeading = document.getElementsByClassName('accordionItemHeading');

for (i = 0; i < accordionItemHeading.length; i++) {
    accordionItemHeading[i].addEventListener('click', toggleItem, false);
}

function toggleItem() {
    let itemClass = this.parentNode.className;
    for (i = 0; i < accordionItem.length; i++) {
        accordionItem[i].className = 'accordionItem close';
    }
    if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
    }
}