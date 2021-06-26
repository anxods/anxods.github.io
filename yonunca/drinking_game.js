// Aquí irían las preguntas

var json_data = `
{
    "data_dg" : [
        {
            "YN": "Yo nunca he vuelto con mi ex",
            "P": "Déjale tu móvil desbloqueado a la persona que tengas delante durante 1 minuto.",
            "V": "¿Qué es lo que más miedo te da?"
        }
    ]
}`;

var obj = JSON.parse(json_data);

var players = [];

function start() {

    cleanScreen();

    page = document.getElementById("content");

    var explicacion = document.createElement("p");
    explicacion.id = "explicacion";
    explicacion.innerHTML = "Introduce los nombres de los jugadores si queréis tener frases de Reto o Verdad, a parte de las de Yo Nunca, y dale a "
    
    var botont = document.createElement("em");
    botont.innerHTML = "¡Jugar!";
    explicacion.appendChild(botont);

    page.appendChild(explicacion);

    var br1 = document.createElement("br");
    br1.id = "br1";
    page.appendChild(br1);

    var input = document.createElement("input");
    input.type = "text";
    input.id = "age";
    page.appendChild(input);

    var br2 = document.createElement("br");
    br2.id = "br2";
    page.appendChild(br2);

    var inputb = document.createElement("input");
    inputb.type = "button";
    inputb.value = "Añadir jugador";
    inputb.onclick = function() {
        addPlayer();
    }
    inputb.id = "player_button";
    inputb.className = "submit_button";
    page.appendChild(inputb);

    var parag = document.createElement("p");
    parag.id = "players";
    page.appendChild(parag);

    var jugar = document.createElement("button");
    jugar.id = "play_button";
    jugar.className = "play_button";
    jugar.innerHTML = "¡Jugar!"
    jugar.onclick = function() {
        play();
    }
    page.appendChild(jugar);

}

function addPlayer(){

    var newArray = document.getElementById("age").value;

    if (newArray == "" || newArray == null || newArray == " ") {

    } else {
        newArray = newArray.trim();
        players.push(newArray);
        document.getElementById("age").value = " ";
        document.getElementById("players").innerHTML = players;
    }

}

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
            if (players.length == 0) {
                setTimeout(yoNunca, 770*2.5, obj["data_dg"][random_1]["YN"]);
            } else {
                var random_name = Math.floor(Math.random() * players.length);
                var player_selected = players[random_name];
                setTimeout(pruebaOReto, 770*2.5, random_1, player_selected);
            }
            break;
    
        default:
            break;
    }
    
}

function cleanScreen() {

    if (document.getElementById("age")) {
        var form = document.getElementById("age");
        form.remove();
    }

    if (document.getElementById("player_button")) {
        var form = document.getElementById("player_button");
        form.remove();
    }

    if (document.getElementById("players")) {
        var form = document.getElementById("players");
        form.remove();
    }

    if (document.getElementById("players_div")) {
        var form = document.getElementById("players_div");
        form.remove();
    }

    if (document.getElementById("player_text")) {
        var form = document.getElementById("player_text");
        form.remove();
    }

    if (document.getElementById("play_button")) {
        var button = document.getElementById("play_button");
        button.remove();
    }

    if (document.getElementById("play_button_div")) {
        var button = document.getElementById("play_button_div");
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

    if (document.getElementById("br2")) {
        var br1 = document.getElementById("br2");
        br1.remove()
    }

    if (document.getElementById("br3")) {
        var br1 = document.getElementById("br3");
        br1.remove()
    }

    if (document.getElementById("explicacion")) {
        var br1 = document.getElementById("explicacion");
        br1.remove()
    }

    if (document.getElementById("explicacion2")) {
        var br1 = document.getElementById("explicacion2");
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
    
    if (document.getElementById("prueba_button_div")) {
        var pruebaButton = document.getElementById("prueba_button_div");
        pruebaButton.remove()
    }

    if (document.getElementById("reto_button_div")) {
        var retoButton = document.getElementById("reto_button_div");
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
    nextButtonDiv.id = "play_button_div"; 
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

function pruebaOReto(index, player_selected) {

    // First we delete the main screen
    cleanScreen();
    
    var playerDiv = document.createElement("div");
    var playerContent = document.createTextNode(player_selected);
    playerDiv.appendChild(playerContent);
    playerDiv.classList = "player_text";
    playerDiv.id = "player_text";

    document.getElementById("content").appendChild(playerDiv);

    var br1 = document.createElement("br");
    br1.id = "br1";
    document.getElementById("content").appendChild(br1);

    // Then we put:
    //  1. Button Prueba
    var pruebaButtonDiv = document.createElement("div");
    var pruebaButton = document.createElement("button");
    pruebaButton.onclick = function() {
        pruebaPlay(index, player_selected);
    };
    pruebaButton.classList = "play_button";
    pruebaButton.id = "prueba_button";
    pruebaButton.innerHTML = "Prueba";
    pruebaButtonDiv.id = "prueba_button_div"
    pruebaButtonDiv.appendChild(pruebaButton);

    document.getElementById("content").appendChild(pruebaButtonDiv);

    //  1. Button Reto
    var retoButtonDiv = document.createElement("div");
    var retoButton = document.createElement("button");
    retoButton.onclick = function() {
        verdadPlay(index, player_selected);
    };
    retoButton.classList = "play_button";
    retoButton.id = "reto_button";
    retoButton.innerHTML = "Verdad";
    retoButtonDiv.id = "reto_button_div"
    retoButtonDiv.appendChild(retoButton);

    document.getElementById("content").appendChild(retoButtonDiv);
    
}

function prText(pr_text, pr, index, player_selected) {

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

function pruebaPlay(index, player_selected) {
    
    // First we delete the main screen
    cleanScreen()

    // Then we put:
    //  1. Text
    prText("Prueba: ", "P", index, player_selected);

    //  2. Button
    putNextButton();

}

function verdadPlay(index, player_selected) {

    // First we delete the main screen
    cleanScreen()

    // Then we put:
    //  1. Text
    prText("Verdad: ", "V", index, player_selected);

    //  2. Button
    putNextButton();

}