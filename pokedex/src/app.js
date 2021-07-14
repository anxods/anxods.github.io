const form = document.getElementById('form');
const apiURL = 'https://pokeapi.co/api/v2/pokemon/';

form.addEventListener('submit', (e) =>{
    e.preventDefault(); 
    var poke_name = form.pokemon.value.trim().toLowerCase();
    makeRequest(poke_name);
    form.reset();
});

async function makeRequest(name){
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            
            eraseError();
            erasePokemon();
            loadingContent();
            setTimeout(eraseError, 1800);
            setTimeout(erasePokemon, 1800);

            if (xhr.status == 200) {

                setTimeout(createDiv, 1800, 'poke_img_div');

                var jsonResponse = JSON.parse(xhr.responseText);
                setTimeout(putImage, 1800, jsonResponse['sprites']['front_default']);
                
                setTimeout(createDiv, 1800, 'poke_info_div');

                var id_url = jsonResponse['species']['url'];
                var id = id_url.substring(42, id_url.length - 1);
                var name = jsonResponse['name'];
                setTimeout(putName, 1800, name, id);

                var types = jsonResponse['types'];
                setTimeout(selectTypes, 1800, types);

                var weight = parseInt(jsonResponse['weight']) / 10;
                var height = parseInt(jsonResponse['height']) / 10;
                setTimeout(putHW, 1800, height, weight);

                var stat1_name = jsonResponse['stats'][0]['stat']['name'];
                var stat1 = jsonResponse['stats'][0]['base_stat'];
                var stat2_name = jsonResponse['stats'][1]['stat']['name'];
                var stat2 = jsonResponse['stats'][1]['base_stat'];
                var stat3_name = jsonResponse['stats'][2]['stat']['name'];
                var stat3 = jsonResponse['stats'][2]['base_stat'];
                var stat4_name = jsonResponse['stats'][3]['stat']['name'];
                var stat4 = jsonResponse['stats'][3]['base_stat'];
                var stat5_name = jsonResponse['stats'][4]['stat']['name'];
                var stat5 = jsonResponse['stats'][4]['base_stat'];
                var stat6_name = jsonResponse['stats'][5]['stat']['name'];
                var stat6 = jsonResponse['stats'][5]['base_stat'];

                var stats = [stat1, stat2, stat3, stat4, stat5, stat6];
                var stats_names = [stat1_name + ": ", stat2_name + ": ", stat3_name + ": ",
                        stat4_name + ": ", stat5_name + ": ", stat6_name + ": "];
                setTimeout(putStats, 1800, stats, stats_names);

                var move1 = jsonResponse['moves'][0]['move']['name'];
                var move2 = jsonResponse['moves'][1]['move']['name'];
                var move3 = jsonResponse['moves'][2]['move']['name'];
                var moves = [move1, move2, move3];
                setTimeout(putInfo, 1800, moves);
                    
            }

            if (xhr.status == 404) {

                setTimeout(error404, 1800);
            
            }
        }        
    };

    xhr.open('get', apiURL + name, true);
    xhr.send();
}

function loadingContent() {
    if (document.getElementById('loading_img')) {

    } else {
        var img = document.createElement('img');
        img.src = "src/assets/loading.gif";
        img.alt = "Pokéball loading gif";
        img.classList.add('loading_img');
        img.setAttribute('id', 'loading_img');
        img.width = 60;
        var src = document.getElementById('body');
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

function putImage(imageURL) {
    if (document.getElementById('pokemon_img')) {
        var img = document.getElementById('pokemon_img');
        img.src = imageURL;
        img.alt = "Pokémon image";
        img.onload = function() {
            img.style.width = "30%";
            img.style.maxWidth = "220px";
            img.style.minWidth = "130px";
        }
        img.setAttribute('aria-pressed', 'false');
    } else {
        var img = document.createElement('img');
        img.src = imageURL;
        img.alt = "Pokémon image";
        img.onload = function() {
            img.style.width = "30%";
            img.style.maxWidth = "220px";
            img.style.minWidth = "130px";
        }
        img.classList.add('pokemon_img');
        img.setAttribute('id', 'pokemon_img');
        img.setAttribute('onclick', 'getShiny()');
        img.setAttribute('aria-pressed', 'false');
        var src = document.getElementById('poke_img_div');
        src.appendChild(img);
    }
}

function getShiny() {
    if (document.getElementById('pokemon_img')) {
        var url = document.getElementById('pokemon_img').src;
        if (url.includes("pokemon/shiny/")) {
            var newSrc = url.toString().replace("pokemon/shiny/", "pokemon/");
            document.getElementById('pokemon_img').src = newSrc;
            document.getElementById('pokemon_img').alt = "Pokémon image";
            document.getElementById('pokemon_img').setAttribute('aria-pressed', 'false');
        } else {
            var newSrc = url.toString().replace("pokemon/", "pokemon/shiny/");
            document.getElementById('pokemon_img').src = newSrc;
            document.getElementById('pokemon_img').alt = "Pokémon shiny image";
            document.getElementById('pokemon_img').setAttribute('aria-pressed', 'true');
        }
    }
}

function createDiv(div_name) {
    if (document.getElementById(div_name)) {

    } else {
        var element = document.createElement('div');
        element.className = div_name;
        element.id = div_name;
        var src = document.getElementById('body');
        src.appendChild(element);
    }
}

function putName(name, id) {
    if (document.getElementById('poke_name')){
        var element = document.getElementById('poke_name');
        element.remove();
        getName(name, id);
    } else {
        getName(name, id);
    }
}

function putHW(height, weight) {
    if (document.getElementById('poke_hw')) {
        var element = document.getElementById('poke_hw');
        element.remove();
        getHW(height, weight);
    } else {
        getHW(height, weight);
    }
}

function putInfo(moves) {
    if (document.getElementById('pokemon_info')) {
        var element = document.getElementById('pokemon_info');
        element.remove();
        getInfo(moves);
    } else {
        getInfo(moves);
    }
}

function putStats(stats, stats_names) {
    if (document.getElementById('pokemon_stats')) {
        var element = document.getElementById('pokemon_stats');
        element.remove();
        getStats(stats, stats_names);
    } else {
        getStats(stats, stats_names);
    }
}

function getName(name, id) {
    var info = document.createElement('p');
    info.setAttribute('id', 'poke_name');
    info.classList.add('poke_name');

    finalName = "# " + id + " " + name.charAt(0).toUpperCase() + name.slice(1);
    info.appendChild(document.createTextNode(finalName));
    info.appendChild(document.createElement("br"));

    var src = document.getElementById('poke_img_div');
    src.appendChild(info);
}

function getHW(height, weight) {
    var wh = document.createElement('p');
    wh.setAttribute('id', 'poke_hw');
    wh.classList.add('poke_hw');

    info = "Information:";

    finalWeight = "Weight: " + weight.toString() + "kg";
    finalHeight = "Height: " + height.toString() + "m";
    wh.appendChild(document.createTextNode(info));
    for (let i = 0; i < 3; i++) {
        wh.appendChild(document.createElement("br"));
    }
    wh.appendChild(document.createTextNode(finalHeight));
    wh.appendChild(document.createElement("br"));
    wh.appendChild(document.createTextNode(finalWeight));
    wh.appendChild(document.createElement("br"));

    var src = document.getElementById('poke_info_div');
    src.appendChild(wh);
}

function getInfo(moves) {
    var info = document.createElement('p');
    info.setAttribute('id', 'pokemon_info');
    info.classList.add('pokemon_info_stats');
    
    var args = ["Most common moves:", moves[0], moves[1], moves[2]]

    for (i = 0; i < args.length; i++) {
        info.appendChild(document.createTextNode(args[i]));
        info.appendChild(document.createElement("br"));
    }

    var src = document.getElementById('poke_info_div');
    src.appendChild(info);
}

function getStats(stats, stats_names) {
    var stats_info = document.createElement('p');
    stats_info.setAttribute('id', 'pokemon_stats');
    stats_info.classList.add('pokemon_info_stats');

    stats_info.appendChild(document.createTextNode("Base stats:"));
    stats_info.appendChild(document.createElement("br"));

    for (i = 0; i < stats.length; i++) {
        stats_info.appendChild(document.createTextNode(stats_names[i]));
        stats_info.appendChild(document.createTextNode(stats[i]));
        stats_info.appendChild(document.createElement("br"));
    }

    var src = document.getElementById('poke_info_div');
    src.appendChild(stats_info);    
}

function error404() {
    if (document.getElementById('errorNotFound')) {

    } else {
        var errorImg = document.createElement('img');
        errorImg.setAttribute('id', 'errorNotFound');
        errorImg.classList.add('pokemon_img');
    
        errorImg.src = "src/assets/error.png";
        errorImg.alt = "404 - Error image";
        errorImg.style.width = "50%";
        errorImg.style.maxWidth = "400px";
        errorImg.style.minWidth = "130px";

        var errorText = document.createElement('p');
        errorText.setAttribute('id', 'errorNotFountText');
        errorText.classList.add('poke_404error');

        errorText.appendChild(document.createTextNode('We couldn´t find anything...'));
        errorText.appendChild(document.createElement('br'));
        errorText.appendChild(document.createElement('br'));
        errorText.appendChild(
            document.createTextNode(
                'Check the spelling or the number introduced, and try again!'
            )
        );   
            
        document.getElementById('body').appendChild(errorImg);
        document.getElementById('body').appendChild(errorText);
    }
}

function eraseError() {
    if (document.getElementById('errorNotFound')) {
        document.getElementById('errorNotFound').remove();
    }

    if (document.getElementById('errorNotFountText')) {
        document.getElementById('errorNotFountText').remove();
    }
}

function erasePokemon() {
    if (document.getElementById('pokemon_img')) {
        document.getElementById('pokemon_img').remove();
    }

    if (document.getElementById('poke_hw')) {
        document.getElementById('poke_hw').remove();
    }

    if (document.getElementById('poke_type1')) {
        document.getElementById('poke_type1').remove();
    }

    if (document.getElementById('poke_type2')) {
        document.getElementById('poke_type2').remove();
    }

    if (document.getElementById('poke_name')) {
        document.getElementById('poke_name').remove();
    }

    if (document.getElementById('pokemon_info')) {
        document.getElementById('pokemon_info').remove();
    }

    if (document.getElementById('pokemon_stats')) {
        document.getElementById('pokemon_stats').remove();
    }
}