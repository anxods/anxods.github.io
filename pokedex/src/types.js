function selectTypes (response_types) {

    var type = [];

    for (i = 0; i < response_types.length; i++) {
        type.push(response_types[i]["type"]["name"]);
    }

    for (i in type) {
        getType(type[i]);
    }
}

function getType(type) {
    switch (type) {
        case "bug":
            putType("src/assets/types/pokemonType-bug.png");
            break;
        case "dark":
            putType("src/assets/types/pokemonType-dark.png");
            break;
        case "dragon":
            putType("src/assets/types/pokemonType-dragon.png");
            break;
        case "electric":
            putType("src/assets/types/pokemonType-electric.png");
            break;
        case "fairy":
            putType("src/assets/types/pokemonType-fairy.png");
            break;
        case "fighting":
            putType("src/assets/types/pokemonType-fighting.png");
            break;
        case "fire":
            putType("src/assets/types/pokemonType-fire.png");
            break;
        case "flying":
            putType("src/assets/types/pokemonType-flying.png");
            break;
        case "ghost":
            putType("src/assets/types/pokemonType-ghost.png");
            break;
        case "grass":
            putType("src/assets/types/pokemonType-grass.png");
            break;
        case "ground":
            putType("src/assets/types/pokemonType-ground.png");
            break;
        case "ice":
            putType("src/assets/types/pokemonType-ice.png");
            break;
        case "normal":
            putType("src/assets/types/pokemonType-normal.png");
            break;
        case "poison":
            putType("src/assets/types/pokemonType-poison.png");
            break;
        case "psychic":
            putType("src/assets/types/pokemonType-psychic.png");
            break;
        case "rock":
            putType("src/assets/types/pokemonType-rock.png");
            break;
        case "steel":
            putType("src/assets/types/pokemonType-steel.png");
            break;
        case "water":
            putType("src/assets/types/pokemonType-water.png");
            break;
    }
}

function putType(image) {
    if (document.getElementById('poke_type1')) {
        var img = document.createElement('img');
        img.src = image;
        img.alt = "Pokémon type #2";
        img.classList.add('poke_type');
        img.setAttribute('id', 'poke_type2');
        img.style.width = "30%";
        img.style.maxWidth = "120px";
        img.style.minWidth = "80px";
        var src = document.getElementById('body');
        src.appendChild(img);
    } else {
        var img = document.createElement('img');
        img.src = image;
        img.alt = "Pokémon type #1";
        img.classList.add('poke_type');
        img.setAttribute('id', 'poke_type1');
        img.style.width = "30%";
        img.style.maxWidth = "120px";
        img.style.minWidth = "80px";
        var src = document.getElementById('body');
        src.appendChild(img);
    }
}