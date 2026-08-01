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

    const width = 800;
    const height = 500;

    const margin = {
        top: 30,
        right: 30,
        bottom: 60,
        left: 70
    };

    const charWidth =
        width - margin.left - margin.right;

    const charHeight =
        height - margin.top - margin.bottom;

    // now draw area is 700

    const svg = d3.select("#scatter-plot")
        .append("svg")
        .attr("width", width)
        .attr("height", height)

        console.log("Scatter plot svg created:", svg)
    
        // g can be several shapes group
    const chart = svg
        .append("g")
        .attr(
            "transform",
            `translate(${margin.left}, ${margin.top})`
        );
    
    const xScale = d3.scaleLinear()
        .domain([
             0,
             d3.max(data, function (pokemon){
                return pokemon.attack;
            })
        ])
        .range([0, charWidth])
        .nice();
    
    const xAxis = d3.axisBottom(xScale);

    chart.append("g")
        .attr(
            "transform",
            `translate(0, ${charHeight})`
        )
        .call(xAxis)

    const yScale = d3.scaleLinear()
        .domain([
            0,
            d3.max(data, function(pokemon){
                return pokemon.defense
            })
        ])
        .range([charHeight, 0])
        .nice();
    
    const yAxis = d3.axisLeft(yScale);
    chart.append("g")
        .call(yAxis);

        const tooltip = d3.select("#tooltip");
        // add all data in circles 
    chart.selectAll("circle")
        .data(data)
        .join("circle")
        .attr("cx", function(pokemon){
            return xScale(pokemon.attack);
        })
        .attr("cy", function(pokemon){
            return yScale(pokemon.defense);
        })
        .attr("r", 4)
        .attr("fill", "steelblue")
        .attr("opacity", 0.7)
        .on("mouseover", function(event, pokemon){
            tooltip
                .style("display", "block")
                .html(`
                    <strong>${pokemon.name}</strong><br>
                    Type: ${pokemon.type1}<br>
                    Attack: ${pokemon.attack}<br>
                    Defence: ${pokemon.defense}
                    `);
        })
        .on("mousemove", function(event) {
            tooltip
                .style("left", `${event.pageX + 12}px`)
                .style("top", `${event.pageY + 12}px`);
        })
        .on("mouseout", function() {
            tooltip.style("display", "none");
        });
        
}

function createBarChart(data) {
    console.log(
        "Bar chart received:",
        data.length,
        "Pokémon"
    );

    // Group member 2 writes the bar chart here
}
