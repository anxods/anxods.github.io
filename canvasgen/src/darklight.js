function dlMode() {
    var element = document.body;
    element.classList.toggle("darkmode");

    var darklight = document.getElementById("dark_or_light");
    if (darklight.innerHTML == "Dark Mode") {
        darklight.innerHTML = "Light Mode";
    } else {
        darklight.innerHTML = "Dark Mode";
    }

    var button_text = document.getElementById("boton_main");

    if (darklight.innerHTML == "Dark Mode") {
        button_text.style.color = "#ffffff";
        button_text.style.border = "solid #ffffff"
    } else {
        button_text.style.color = "#000000";
        button_text.style.border = "solid #000000"
    }
    
}