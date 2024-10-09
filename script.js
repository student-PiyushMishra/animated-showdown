
function showLoader() {
    let txt = document.querySelector("#loader p");
    let loader = document.querySelector("#loader");
    setTimeout(() => {
        txt.style.opacity = "0"; // Start fading out
        setTimeout(() => {
            txt.textContent = "Environment"; // Change the text
            txt.style.opacity = "1"; // Fade back in
        }, 300); // Delay to allow fade out before changing text
    }, 1300);

    setTimeout(() => {
        txt.style.opacity = "0";
        setTimeout(() => {
            txt.textContent = "Experiences";
            txt.style.opacity = "1";
        }, 300);
    }, 2300);

    setTimeout(() => {
        txt.style.opacity = "0";
        setTimeout(() => {
            txt.textContent = "Content";
            txt.style.opacity = "1";
        }, 300);
    }, 3300);

    setTimeout(() => {
        loader.style.bottom = "100%"; 
    }, 4300);
}

showLoader();