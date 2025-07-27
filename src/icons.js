const mpp = {
    "Clear": "clear",
    "Partially cloudy": "partly-cloudy",
    "Overcast": "cloudy",
    "Rain": "rain",
    "Showers": "rain",
    "Light Rain": "rain",
    "Drizzle": "rain",
    "Snow": "snow",
    "Flurries": "snow",
    "Thunderstorm": "storm",
    "Fog": "fog",
    "Mist": "fog",
    "Windy": "wind",
    "Hot": "hot",
    "Cold": "cold"
};
// used gpt for this conditionmap lol

async function loadIcons(condition) {
    try{
        const trimmed= condition.split(",")[0]; 
        const name=mpp[trimmed] || "default";

        const icon=await import(`./logos/${name}.png`);      //it basically imports an object with the url of the actual image, so .default is the default url.   
        return icon.default;
    } catch(err){
        console.log(`Icon loading err: ${err}`);
        return "";
    }
}

export{loadIcons};