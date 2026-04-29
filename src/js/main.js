import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

setHeaderInfo(parkData);

function parkInfoTemplate(info) {
    return `<a href="#" class="hero-ban-title">${info.name}</a>
    <p class="hero-ban-subtitles"> 
        <span>${info.designation}</span>
        <span>${info.states}</span>
    </p>`;
}

function setHeaderInfo(data) {
    // insert data into disclaimer section
    const disclaimer = document.querySelector(".disclaimer > a");
    disclaimer.href = data.url;
    disclaimer.innerHTML = data.fullName;

    // update the title of the site. Notice that we can select things in the head just like in the body with querySelector
    document.querySelector("head > title").textContent = data.fullName;

    // Set the banner image
    document.querySelector(".hero-ban > img").src = data.images[0].url;

    // Use the template function above to set the rest of the park specific info in the header
    document.querySelector(".hero-ban-title-container").innerHTML = parkInfoTemplate(data);
}

mediaCardTemplate(parkInfoLinks);

function mediaCardTemplate(info) {
    return `<div>
        <a href="${info.link}">
            <img src="${info.image}">
        </a>
        <a href="${info.link}">
            <h3>${info.name}<h3>
        </a>
        <p>${info.description}</p>
    </div>`
};

const parkInfoLinks = [
    {
        name: "Current Conditions &#x203A;",
        link: "conditions.html",
        image: parkData.images[2].url,
        description: 
            "See what conditions to expect in the park before leaving on your trip!"
    },
    {
        name: "Fees and Passes &#x203A;",
        link: "fees.html",
        image: parkData.images[3].url,
        description:
            "Learn about the fees and passes that are available."
    },
    {
        name: "Visitor Centers &#x203A;",
        link: "visitor_centers.html",
        image: parkData.images[9].url,
        description:
            "Learn about the visitor centers in the park."
    }
];



// // Update footer information
// const parkAddress = document.querySelector(".contact-info-container")
// parkAddress.innerHTML = parkAddressTemplate(parkData);

function parkAddressTemplate(info) {
    return `<div>${info.addresses[1].line1}</div>
    <div>${info.addresses[1].city}, ${info.addresses[1].stateCode} ${info.addresses[1].postalCode}</div>`
};

// const parkPhoneNumber = document.querySelector(".phone-container");
// parkPhoneNumber.innerHTML = parkPhoneNumberTemplate(parkData);

function parkPhoneNumberTemplate(info) {
    return `<div>${info.contacts.phoneNumbers[0].phoneNumber}</div>`
};