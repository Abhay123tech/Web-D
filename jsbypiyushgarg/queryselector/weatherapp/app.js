
const button = document.getElementById("search-button");
const input = document.getElementById("city-input");

const cityName = document.getElementById("cityname");
const cityTime = document.getElementById("citytime");
const cityTemperature = document.getElementById("citytemperature");

async function getData(cityName) {
    const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=930971becfa941f882053344220412&q=${cityName}&aqi=yes`
    );
    const data = await res.json();   // ✅ yahan sahi parsing
    return data;
}

button.addEventListener("click", async () => {
    const value = input.value;
    const result = await getData(value);
    // console.log(result);  // ✅ ab console pe weather JSON aayega

    cityName.innerText= `${result.location.name}, ${result.location.name}, ${result.location.region} -${result.location.country}`
    cityTime.innerText=result.location.localtime  //not required of ` $ 
    cityTemperature.innerText=result.current.temp_c

});
