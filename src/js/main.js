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

// Update park name and description
const parkName = document.querySelector("#main > h1");
parkName.innerHTML = parkData.fullName;

const parkDescription = document.querySelector(".description");
parkDescription.innerHTML = parkData.description;

// Update the section images
const conditionImg = document.querySelector(".conditions-container img");
conditionImg.src = parkData.images[2].url;

const feesAndPassesImg = document.querySelector(".fees-and-passes-container img");
feesAndPassesImg.src = parkData.images[3].url;

const visitorImg = document.querySelector(".visitor-container img");
visitorImg.src = parkData.images[9].url;

// Update footer information
const parkAddress = document.querySelector(".contact-info-container")
parkAddress.innerHTML = parkAddressTemplate(parkData);

function parkAddressTemplate(info) {
    return `<div>${info.addresses[1].line1}</div>
    <div>${info.addresses[1].city}, ${info.addresses[1].stateCode} ${info.addresses[1].postalCode}</div>`
};

const parkPhoneNumber = document.querySelector(".phone-container");
parkPhoneNumber.innerHTML = parkPhoneNumberTemplate(parkData);

function parkPhoneNumberTemplate(info) {
    return `<div>${info.contacts.phoneNumbers[0].phoneNumber}</div>`
};


console.log(parkData);