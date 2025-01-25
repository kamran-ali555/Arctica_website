const bar = document.getElementById("fa-solid");
const unItem = document.querySelector(".nav-bar-items"); // Use querySelector for a single element

function clickBar() {
    // Ensure unItem exists before accessing its properties
    if (unItem) {
        const currentLeft = window.getComputedStyle(unItem).left; // Use getComputedStyle to get the actual computed style
        if (currentLeft === '0px') {
            unItem.style.left = '-200px';
        } else {
            unItem.style.left = '0px';
        }
    }
}

bar.addEventListener("click", clickBar);