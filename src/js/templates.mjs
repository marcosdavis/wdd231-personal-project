import spritePath from '../images/sprite.symbol.svg';

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

export function alertCardTemplate(alert) {
  let alertType = "";
  switch (alert.category) {
    case "Park Closure":
      alertType = "closure";
      break;
    default:
      alertType = alert.category.toLowerCase();
  }
  return `<li class="alert">
  <svg class="icon" focusable="false" aria-hidden="true">
    <use xlink:href="${spritePath}#alert-${alertType}"></use>  
  </svg>
  <div>
    <h3 class="alert-${alertType}">${alert.title}</h3>
    <p>${alert.description}</p>
  </div></li>`;
}

export function visitorCenterTemplate(info) {
    return `<li class='visitor-center'>
        <h3>${info.name}</h3>
        <p>${info.description}</p>
        <p>${info.directionsInfo}</p>
    </li>`;
}

export function activitiesTemplate(activites) {
    return `<li class='activity-name'>
        <div>${activites.name}</div>
    </li>`;
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