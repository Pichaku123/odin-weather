const API_KEY = "AXV7XFLJ7D2JLFHNQKEMJ76C7";

async function api(searchQuery) {
    try {
        const response = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchQuery}?unitGroup=us&key=${API_KEY}&contentType=json`,
            { mode: "cors" }
        );

        if(!response.ok){
            console.log(`Error- ${response.status}`);
            return null;
        }

        const data = await response.json();
        console.log(data);
        console.log(`Current Temperature- ${data.currentConditions.temp} deg F`);
        return data;
    } catch (error) {
        console.log(`API Error- ${error}`);
        return null;
    }
}

export { api };
