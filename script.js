const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('number');
const pokemonImage = document.querySelector('.imgpokemon');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');

const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('btn-next');

let searchPokemon = 1;


const fetchPokemon = async(pokemon) =>{
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if(APIResponse.status === 200){
        const data = await APIResponse.json();
        return data;
    }
}

const renderPokemon = async (pokemon) =>{
    const data = await fetchPokemon(pokemon);

    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data ['sprites']['versions']['generation-v']['black-white']['animated']['front-default'];
}
renderPokemon('20');

 form.addEventListener(
    'submit', (event) =>{
        event.preventDefault();

        renderPokemon(input.value);
        //console.log(input.value);
    });