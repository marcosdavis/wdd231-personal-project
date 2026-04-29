export function parkInfoTemplate(info) {
    return `<a href="#" class="hero-ban-title">${info.name}</a>
    <p class="hero-ban-subtitles"> 
        <span>${info.designation}</span>
        <span>${info.states}</span>
    </p>`;
}

export function mediaCardTemplate(info) {
    return `<div class="info-container">
        <a href="${info.link}">
            <img src="${info.image}" alt="${info.name}">
            <h3>${info.name}</h3>
        </a>
        <p>${info.description}</p>
    </div>`
}

function getMailingAddress(addresses) {
    const mailing = addresses.find((addresses) => addresses.type === "Mailing");
    return mailing;
};

function getVoicePhone(phoneNumbers) {
    const voice = phoneNumbers.find((phoneNumbers) => phoneNumbers.type === "Voice");
    return voice;
};

export function footerTemplate(info) {
    const mailing = getMailingAddress(info.addresses);
    const voice = getVoicePhone(info.contacts.phoneNumbers);

    return `<section class="contact">
    <h3>Contact Info</h3>
    <h4>Mailing Address:</h4>
    <div><p>${mailing.line1}</p>
    <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p></div>
    <h4>Phone:</h4>
    <p>${voice.phoneNumber}</p>
    </section>`;
}