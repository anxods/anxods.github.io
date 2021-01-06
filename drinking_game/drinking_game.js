function play() {

    var random_1 = Math.floor(Math.random() * obj["data_dg"].length);

    var random_2 = Math.floor(Math.random() * 2);

    cleanScreen();
    loadingContent();

    switch (random_2) {
        case 0:
            setTimeout(yoNunca, 770*2.5, obj["data_dg"][random_1]["YN"]);
            break;
        
        case 1:
            setTimeout(pruebaOReto, 770*2.5, random_1);
            break;
    
        default:
            break;
    }
    
}

function cleanScreen() {
    if (document.getElementById("play_button")) {
        var button = document.getElementById("play_button");
        button.remove();
    }

    if (document.getElementById("github_div")) {
        var githubDiv = document.getElementById("github_div");
        githubDiv.remove()
    }

    if (document.getElementById("yn_title_text")) {
        var ynTitleDiv = document.getElementById("yn_title_text");
        ynTitleDiv.remove()
    }

    if (document.getElementById("br1")) {
        var br1 = document.getElementById("br1");
        br1.remove()
    }

    if (document.getElementById("yn_text")) {
        var ynDiv = document.getElementById("yn_text");
        ynDiv.remove()
    }

    if (document.getElementById("prueba_button")) {
        var pruebaButton = document.getElementById("prueba_button");
        pruebaButton.remove()
    }

    if (document.getElementById("reto_button")) {
        var retoButton = document.getElementById("reto_button");
        retoButton.remove()
    }
    
}

function loadingContent() {
    if (document.getElementById('loading_img')) {

    } else {
        var img = document.createElement('img');
        img.src = "assets/beer.gif";
        img.alt = "Beer loading gif";
        img.classList.add('loading_img');
        img.setAttribute('id', 'loading_img');
        img.width = 60;
        var src = document.getElementById('content');
        src.appendChild(img);
        setTimeout(removeLoading, 1800);
    }
}

function removeLoading() {
    if (document.getElementById('loading_img')) {
        var element = document.getElementById('loading_img');
        element.remove();
    }
}

function putNextButton() {
    
    var nextButtonDiv = document.createElement("div");
    var nextButton = document.createElement("button");
    nextButton.onclick = function() {
        play();
    };
    nextButton.classList = "play_button";
    nextButton.id = "play_button";
    nextButton.innerHTML = "Siguiente";
    nextButtonDiv.appendChild(nextButton);

    document.getElementById("content").appendChild(nextButtonDiv);

}

function yoNunca(text) {
    
    // First we delete the main screen
    cleanScreen()

    // Then we put:
    //  1. Text
    var textYNDiv = document.createElement("div");
    var textYNDivContent = document.createTextNode("Yo Nunca...");
    textYNDiv.appendChild(textYNDivContent);
    textYNDiv.classList = "yn_title_text";
    textYNDiv.id = "yn_title_text";

    document.getElementById("content").appendChild(textYNDiv);

    var br1 = document.createElement("br");
    br1.id = "br1";
    document.getElementById("content").appendChild(br1);

    var textDiv = document.createElement("div");
    var textContent = document.createTextNode(text);
    textDiv.appendChild(textContent);
    textDiv.classList = "yn_text";
    textDiv.id = "yn_text";

    document.getElementById("content").appendChild(textDiv);

    //  2. Button
    putNextButton();
}

function pruebaOReto(index) {

    // First we delete the main screen
    cleanScreen()

    // Then we put:
    //  1. Button Prueba
    var pruebaButtonDiv = document.createElement("div");
    var pruebaButton = document.createElement("button");
    pruebaButton.onclick = function() {
        pruebaPlay(index);
    };
    pruebaButton.classList = "play_button";
    pruebaButton.id = "prueba_button";
    pruebaButton.innerHTML = "Prueba";
    pruebaButtonDiv.appendChild(pruebaButton);

    document.getElementById("content").appendChild(pruebaButtonDiv);

    //  1. Button Reto
    var retoButtonDiv = document.createElement("div");
    var retoButton = document.createElement("button");
    retoButton.onclick = function() {
        retoPlay(index);
    };
    retoButton.classList = "play_button";
    retoButton.id = "reto_button";
    retoButton.innerHTML = "Reto";
    retoButtonDiv.appendChild(retoButton);

    document.getElementById("content").appendChild(retoButtonDiv);
    
}

function prText(pr_text, pr, index) {

    var textPDiv = document.createElement("div");
    var textPDivContent = document.createTextNode(pr_text);
    textPDiv.appendChild(textPDivContent);
    textPDiv.classList = "yn_title_text";
    textPDiv.id = "yn_title_text";

    document.getElementById("content").appendChild(textPDiv);

    var br1 = document.createElement("br");
    br1.id = "br1";
    document.getElementById("content").appendChild(br1);

    var textDiv = document.createElement("div");
    var textContent = document.createTextNode(obj["data_dg"][index][pr]);
    textDiv.appendChild(textContent);
    textDiv.classList = "yn_text";
    textDiv.id = "yn_text";

    document.getElementById("content").appendChild(textDiv);

}

function pruebaPlay(index) {
    
    // First we delete the main screen
    cleanScreen()

    // Then we put:
    //  1. Text
    prText("Prueba: ", "P", index);

    //  2. Button
    putNextButton();

}

function retoPlay(index) {

    // First we delete the main screen
    cleanScreen()

    // Then we put:
    //  1. Text
    prText("Reto: ", "R", index);

    //  2. Button
    putNextButton();

}