function generateCanvas() {
    eraseMainScreenElements();
    loadingPaint();
    setTimeout(setCanvas, 1600);
}

/* Cargando contenido */

function loadingPaint() {
    if (document.getElementById('loading_img')) {

    } else {
        var img = document.createElement('img');
        img.src = "src/assets/painting.gif";
        img.alt = "Painting loading gif";
        img.classList.add('loading_img');
        img.setAttribute('id', 'loading_img');
        img.width = 150;
        var src = document.body;
        src.appendChild(img);
        setTimeout(removeLoading, 1600);
    }
}

function removeLoading() {
    if (document.getElementById('loading_img')) {
        var element = document.getElementById('loading_img');
        element.remove();
    }
}

/* Generando Canvas */

function setCanvas() {
    var body = document.body;
    var cnvs_div = document.createElement("div");
    cnvs_div.id = "canvas-container";
    var cnvs = document.createElement("canvas");
    cnvs.width = 320;
    cnvs.height = 320;
    var ctx = cnvs.getContext("2d");
    for (i = 0; i < 120; i++) {
        for (j = 0; j < 120; j++) {
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            ctx.fillStyle = "#" + randomColor;
            ctx.fillRect(10*j, 10*i, 10, 10);
            cnvs_div.appendChild(cnvs);
            body.appendChild(cnvs_div);
        }
    }
    refreshButton();
}

/* Botón */

function refreshButton() {
    var body = document.body;
    var refresh_div = document.createElement("div");
    var refresh_button = document.createElement("button");
    refresh_button.className = "boton_main";
    refresh_div.id = "refresh_container";
    refresh_button.innerHTML = "Regenerar";
    refresh_button.onclick = function() {
        generateCanvas();
    }
    refresh_div.appendChild(refresh_button);
    body.appendChild(refresh_div);
}