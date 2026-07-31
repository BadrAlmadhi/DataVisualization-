const DATA_PATH = "data/pokemon.csv";

d3.csv(DATA_PATH)
    .then(function(newData) {

        // Convert CSV text values into useful JavaScript values
        const pokemonData = newData.map(function(pokemon) {
            return {
                name: pokemon.name,
                type1: pokemon.type_1,
                type2: pokemon.type_2,
                hp: Number(pokemon.hp),
                attack: Number(pokemon.attack),
                defense: Number(pokemon.defense),
                specialAttack: Number(pokemon.sp_attack),
                specialDefense: Number(pokemon.sp_defense),
                speed: Number(pokemon.speed),
                generation: Number(pokemon.generation)
            };
        });

        console.log("Cleaned Pokémon data:");
        console.log(pokemonData);
        console.log("First cleaned Pokémon:", pokemonData[0]);

        createScatterPlot(pokemonData);
        createBarChart(pokemonData);
    })
    .catch(function(error) {
        console.error("Error loading dataset:", error);
    });

function createScatterPlot(data) {
    console.log(
        "Scatter plot received:",
        data.length,
        "Pokémon"
    );

    // Group member 1 writes the scatter plot here
}

function createBarChart(data) {
    console.log(
        "Bar chart received:",
        data.length,
        "Pokémon"
    );

    // Group member 2 writes the bar chart here
}