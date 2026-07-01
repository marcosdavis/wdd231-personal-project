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
    </div>`;
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
        <h3><a href='visitor-center.html?id=${info.id}'>${info.name}</a></h3>
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

export function iconTemplate(iconId) {
  return `<svg class="icon" role="presentation" focusable="false">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/images/sprite.symbol.svg#${iconId}"
            ></use>
          </svg>`;
}

export function listTemplate(data, contentTemplate) {
  const html = data.map(contentTemplate);
  return `<ul>${html.join("")}</ul>`;
}

export function vcImageTemplate(data) {
  return `<li><img src="${data.url}" alt="${data.altText}" ><li>`;
}

export function vcAmenityTemplate(data) {
  return `<li>${data}</li>`;
}

export function vcTitleTemplate(info) {
    return `${iconTemplate("ranger-station")} ${info}`;
}

export function vcInfoTemplate(info) {
    return `<figure>
        <img src='${info.images[0].url}' alt='${info.images[0].altText}'>
        <figcaption>
            ${info.images[0].caption} <span>${info.images[0].credit}</span>
        </figcaption>
    </figure>
    <p>${info.description}</p>`;
}

function vcAddressesTemplate(info) {
    return `<section class='vc-addresses__${info.type}'>
        <h3>${info.type}</h3>
        <address>
            ${info.line1}<br />
            ${info.city}, ${info.stateCode} ${info.postalCode} 
        </address>
    </section>`;
}

export function vcAddressesListTemplate(info) {
    const physical = info.find((address) => address.type === "Physical");
    const mailing = info.find((address) => address.type === "Mailing");
    let addressInfo = vcAddressesTemplate(physical);
    if (mailing) {
        addressInfo += vcAddressesTemplate(mailing);
    }
    return addressInfo;
}

export function vcDirectionsTemplate(info) {
    return `<p>${info}</p>`;
}

export function vcContactsTemplate(info) {
    return `<section class='vc-contact__email'>
        <h3>Email Address</h3>
        <a href='email:${info.emailAddresses[0].emailAddress}'>Send this visitor center an email</a>
    </section>
    <section class='vc-contact__phone'>
        <h3>Phone numbers</h3>
        <a href='tel:${info.phoneNumbers[0].phoneNumber}'>${info.phoneNumbers[0].phoneNumber}</a>
    </section>`;
}