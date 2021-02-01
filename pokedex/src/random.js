const randomBtn = document.getElementById('search_btn_random');

function randomPokemon() {
    var poke_id = Math.floor(Math.random() * 807);
    makeRequest(poke_id)
}

randomBtn.addEventListener('click', randomPokemon);