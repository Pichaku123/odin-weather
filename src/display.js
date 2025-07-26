import { api } from "./api";

const display=document.querySelector("#display");

const toCelcius= (f) => {
    return ((f-32)*5/9).toFixed(2);
};

const renderDetails = (apiData) => {
    display.innerHTML = "";

    const area = document.createElement("div");
    area.classList.add("area");
    area.textContent = apiData.resolvedAddress;

    const conditions = document.createElement("div");
    conditions.classList.add("conditions");
    conditions.textContent = apiData.currentConditions.conditions;

    const temp = document.createElement("div");
    temp.classList.add("temp");
    temp.textContent = `${apiData.currentConditions.temp}°F / ${toCelcius(apiData.currentConditions.temp)}°C`; // convert to celcius later

    const feelsTemp = document.createElement("div");
    feelsTemp.classList.add("feels-temp");
    feelsTemp.textContent = `Feels like- ${apiData.currentConditions.feelslike}°F / ${toCelcius(apiData.currentConditions.feelslike)}°C`;

    display.appendChild(area);
    display.appendChild(conditions);
    display.appendChild(temp);
    display.appendChild(feelsTemp);
};

const renderContent= () => {
    const formLocation = document.querySelector("#location");

    formLocation.addEventListener("submit", async (e) => {
        e.preventDefault();
        const searchQuery = document.querySelector("#search").value.trim();
        if(searchQuery === ""){
            alert("Please enter a location");
            return;
        }
        const apiData= await api(searchQuery);
        if(!apiData){
            alert("Location not found or network error. Try again.");
            return;
        }

        renderDetails(apiData);
    });
}



export {renderContent};