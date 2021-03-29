function eraseMainScreenElements() {
    if (document.getElementById("slider_dl")) {
        document.getElementById("slider_dl").remove();
    }

    if (document.getElementById("div_button")) {
        document.getElementById("div_button").remove();
    }

    if (document.getElementById("github_div")) {
        document.getElementById("github_div").remove();
    }

    if (document.getElementById("canvas-container")) {
        document.getElementById("canvas-container").remove();
    }

    if (document.getElementById("refresh_container")) {
        document.getElementById("refresh_container").remove();
    }   
}