import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

// Update the href and park name in the disclaimer
const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

// Update the title 
const parkTitle = document.querySelector("head > title");
parkTitle.innerHTML = parkData.fullName;

// Update the hero banner image
const heroImg = document.querySelector(".hero-ban > img");
heroImg.src = parkData.images[0].url;

// Update the title and subtitle of the hero
const heroBanTitles = document.querySelector(".hero-ban-title-container");
heroBanTitles.innerHTML = parkInfoTemplate(parkData);

function parkInfoTemplate(info) {
    return `<a href="#" class="hero-ban-title">${info.name}</a>
    <p class="hero-ban-subtitles"> 
        <span>${info.designation}</span>
        <span>${info.states}</span>
    </p>`;
}