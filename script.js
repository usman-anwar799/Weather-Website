let hot = document.querySelector("#hightmp")
let cool = document.querySelector("#low-temp")
let url = "https://api.open-meteo.com/v1/forecast?latitude=31.52&longitude=74.35&current=temperature_2m";
let temprature = document.querySelector("#temp")
let dateName = document.querySelector("#date-name")
let monName = document.querySelector("#month-name")
let yearName = document.querySelector("#year-name")
let daynm = document.querySelector("#direction")
let box = document.querySelector(".days-container")
let huminm = document.querySelector("#humidity")
let countrySearchbar = document.querySelector(".country-searchbar");
let BTN = document.querySelector("#submit-btn")
let outputShower = document.querySelector(".cun-temp")
async function weather() {
    let api = await fetch(url)
    let data = await api.json()
    temprature.innerText = data.current.temperature_2m + "°C"
    if (data.current.temperature_2m <= 30) {
        hot.style.display = "none"
        cool.style.display = "block"
    } else {
        hot.style.display = "block"
        cool.style.display = "none"
    }
}
weather()
// navigator.geolocation.getCurrentPosition(async (position) => {
//     const lat = position.coords.latitude;
//     const lon = position.coords.longitude;

//     const response = await fetch(
//         `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
//     );

//     const data = await response.json();

//     console.log("City:", data.address.city || data.address.town || data.address.village);
//     console.log("State:", data.address.state);
//     console.log("Country:", data.address.country);
// });
const today = new Date();
let date = today.getDate();
let day = today.getDay();
let year = today.getFullYear();
let month = today.getMonth() + 1;
if (month === 1) {
    console.log("January")
} else if (month === 2) {
    monName.innerText = "February"
} else if (month === 3) {
    monName.innerText = "March"
} else if (month === 4) {
    monName.innerText = "April"
} else if (month === 5) {
    monName.innerText = "May"
} else if (month === 6) {
    monName.innerText = "June"
} else if (month === 7) {
    monName.innerText = "July"
} else if (month === 8) {
    monName.innerText = "August"
} else if (month === 9) {
    monName.innerText = "September"
} else if (month === 10) {
    monName.innerText = "October"
} else if (month === 11) {
    monName.innerText = "November"
} else if (month === 12) {
    monName.innerText = "December"
}
dateName.innerText = date;
yearName.innerText = year;
console.log(year);
console.log(day);
const dayName = today.toLocaleDateString("en-US", {
    weekday: "long"
});

daynm.innerText = dayName;
let btn = document.querySelector("#more");
let btn2 = document.querySelector("#more1");
let dic = document.querySelector(".dic-container")
dic.style.display = "none"
// btn.addEventListener("click",()=>{
//     dic.style.display = "block"
//     btn.style.display = "none"
//     btn2.style.display = "block"
// })
// btn2.addEventListener("click",()=>{
//     dic.style.display = "none"
//     btn.style.display = "block"
//     btn2.style.display = "none"
// })
btn.addEventListener("click", () => {
    dic.style.display = "block";
    btn.style.display = "none";
    btn2.style.display = "block";
    setTimeout(() => {
        dic.style.opacity = "1";
        dic.style.transform = "translateY(-0)";
    }, 10);
});
dic.style.display = "none"
btn2.addEventListener("click", () => {
    btn.style.display = "block"
    btn2.style.display = "none"
    dic.style.opacity = "0";
    dic.style.transform = "translateY(20px)";
    setTimeout(() => {
        dic.style.display = "none";
    }, 500);
});
async function humidity() {
    let urlhumi = "https://api.open-meteo.com/v1/forecast?latitude=29.39&longitude=71.68&current=temperature_2m,relative_humidity_2m&timezone=auto";
    let apihumi = await fetch(urlhumi);
    let datahumi = await apihumi.json();
    huminm.innerText = datahumi.current.relative_humidity_2m + "%"
}
humidity()
let sunRise = document.querySelector("#sun-rise")
async function sunrise() {
    const urlSunrise = "https://api.open-meteo.com/v1/forecast?latitude=29.39&longitude=71.68&daily=sunrise&timezone=auto";
    let apiSunrise = await fetch(urlSunrise);
    let dataSunrise = await apiSunrise.json();
    let sunrisetime = await dataSunrise.daily.sunrise[0].split("T")[1];
    sunRise.innerText = "sunrise " + dataSunrise.daily.sunrise[0].split("T")[1];
}
sunrise()
let sunSet = document.querySelector("#sun-set")
async function sunset() {
    const urlSunset = "https://api.open-meteo.com/v1/forecast?latitude=29.39&longitude=71.68&daily=sunset&timezone=auto";
    let apiSunset = await fetch(urlSunset);
    let dataSunset = await apiSunset.json();
    let sunsetetime = await dataSunset.daily.sunset[0].split("T")[1];
    sunSet.innerText = "sunset " + dataSunset.daily.sunset[0].split("T")[1];
}
sunset()
let windspd = document.querySelector("#wind-speed")
async function windspeed() {
    let urlspeed = "https://api.open-meteo.com/v1/forecast?latitude=29.39&longitude=71.68&current=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=auto";
    let apispeed = await fetch(urlspeed)
    let speeddata = await apispeed.json()
    windspd.innerText += speeddata.current.wind_speed_10m + "km/h"
}
windspeed()
let modedark = document.querySelector("#dark")
let modelight = document.querySelector("#light")
let body = document.querySelector("body")
let sunriseimg = document.querySelector("#sunrise")
let sunsetimg = document.querySelector("#sunset")
let name = document.querySelector("#title")
let mode = true;

modedark.addEventListener("click", () => {
    body.style.background = "linear-gradient(to bottom,#016ecd,#01c8d2)";
    body.style.backgroundAttachment = "fixed";
    body.style.color = "white";
    modedark.style.backgroundColor = "white";
    modedark.style.color = "black";
    btn.style.color = "white";
    btn2.style.color = "white";
    dic.style.backgroundColor = "rgba(0, 0, 0, 0.717)";
    name.style.color = "white";
    mode = false;
    modedark.style.display = "none"
    modelight.style.display = "block"
    modelight.style.color = "black"
    modelight.style.backgroundColor = "white"
    BTN.style.color = "white"
    BTN.style.backgroundColor = "#006cca"
    countrySearchbar.style.backgroundColor = "rgba(241, 240, 240, 0.87)"
})
modelight.addEventListener("click", () => {
    countrySearchbar.style.backgroundColor = "rgb(255, 255, 255)"
    BTN.style.backgroundColor = "#43a1f3"
    BTN.style.color = "black"
    body.style.background = "linear-gradient(to bottom, #4facfe, #00f2fe)"
    body.style.backgroundAttachment = "fixed";
    body.style.color = "black"
    modedark.style.backgroundColor = "black";
    modedark.style.color = "white";
    btn.style.color = "black";
    btn2.style.color = "black";
    dic.style.backgroundColor = "rgba(255, 255, 255, 0.669)";
    name.style.color = "black";
    mode = false;
    modedark.style.display = "block"
    modelight.style.display = "none"
})
BTN.style.display = "inline-flex"
const state = async () => {
    outputShower.innerText = "loading..."
    let country = countrySearchbar.value.trim();
    let countryApi = `https://geocoding-api.open-meteo.com/v1/search?name=${country}`
    let countryAp = await fetch(countryApi)
    let countryoutput = await countryAp.json()
    if (!countryoutput.results) {
        outputShower.innerText = "❌ City not found!";
        return;
    }
    if (!countryoutput.results || countryoutput.results.length === 0) {
        outputShower.innerText = "❌ City not found!";
        return;
        const found = countryoutput.results.find(
            city => city.name.toLowerCase() === country.toLowerCase()
        );

        if (!found) {
            outputShower.innerText = "City not found!";
            return;
        }
    }
    let latitude = countryoutput.results[0].latitude;
    let longitude = countryoutput.results[0].longitude;
    // outputShower.innerText = latitude;
    let longLatiapi = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`
    let longLatiap = await fetch(longLatiapi)
    let longLatiData = await longLatiap.json()
    // outputShower.innerText = `Loading..`
    // console.log(longLatiData.current.temperature_2m)
    outputShower.innerText = `The temprature of ${country.toLowerCase()}  is  ${longLatiData.current.temperature_2m}°C`
}
BTN.addEventListener("click", state)
// state()