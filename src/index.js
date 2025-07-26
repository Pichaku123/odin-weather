import "./styles.css";

const API_KEY = "AXV7XFLJ7D2JLFHNQKEMJ76C7";
const formLocation = document.querySelector("#location");

async function api(searchQuery) {
    try {
        const response = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchQuery}?unitGroup=us&key=${API_KEY}&contentType=json`,
            { mode: "cors" }
        );
        const data = await response.json();
        console.log(data);
        console.log(`Current Temperature- ${data.currentConditions.temp} deg F`);
    } catch (error) {
        console.log(`Error- ${error}`);
    }
}

formLocation.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchQuery = document.querySelector("#search").value;
    api(searchQuery);
});

// side note- things to show=> resolvedaddress, conditions, some sort of logo(optional), current temp, feels like temp
// also- api returns in F, convert to C in a bit.
