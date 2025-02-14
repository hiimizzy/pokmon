const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.number');
const pokemonImage = document.querySelector('.imgpokemon');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');

const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

//let searchPokemon = 1;


const fetchPokemon = async(pokemon) =>{
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
    //no caso de digitar valores invalidos
    if(APIResponse.status === 200){
        const data = await APIResponse.json();
        return data;
    }
    
    }


const renderPokemon = async (pokemon) =>{

    pokemonName.innerHTML = 'Loading...';
    pokemonNumber.innerHTML = ''
    const data = await fetchPokemon(pokemon);

        if(data){
            pokemonName.innerHTML = data.name;
            pokemonNumber.innerHTML = data.id;
            pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front-default'];
            input.value = '';
        }else{
            pokemonName.innerHTML = "Not Found";
            pokemonNumber.innerHTML = '';
        }
    
}
//pesquisa no formulario 
 form.addEventListener(
    'submit', (event) =>{
        event.preventDefault();

        renderPokemon(input.value.toLowerCase()); //no caso de escrever com a letra Maiuscul
        
        //console.log(input.value);
    });