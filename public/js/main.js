
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const submitBtn = document.getElementById("submitBtn");
const temp_real_val = document.getElementById("temp_real_val");
const tempStatus = document.getElementById("temp_status");
const dataHide = document.querySelector(".middle_layer");


const getInfo = async(event)=>{
    event.preventDefault();

    let cityVal = cityName.value;
    console.log(cityVal);
    if(cityVal === "")
    {
        city_name.innerText = `Please write the name of the city before you search`;
        dataHide.classList.add("data_hide");
    } 
    else
    {
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=5d53b397741f8b16d3e4285d225bd068`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            tempStatus.innerText = arrData[0].weather[0].main;
            dataHide.classList.remove("data_hide");

        }
        catch{
            city_name.innerText = `Please enter the city name properly`;
            dataHide.classList.add("data_hide");
        }
    }
}

submitBtn.addEventListener("click",getInfo);