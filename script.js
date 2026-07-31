d3.csv("data/pokemon.csv")
    .then(function(data) {
        console.log("Dataset loaded successfully!");
        console.log(data);
        console.log("Number of rows:", data.length);
        console.log("Columns:", data.columns);
    })
    .catch(function(error) {
        console.error("Error loading dataset:", error);
    });