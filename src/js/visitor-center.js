import { getParkVisitorCenterDetails , getParkData } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { listTemplate , vcImageTemplate , vcAmenityTemplate , vcTitleTemplate , 
    vcAddressesListTemplate , vcContactsTemplate , vcDirectionsTemplate , vcInfoTemplate} from "./templates.mjs";
import '../css/style.css';
import '../css/visitor-center.css';

function getParam(param){
    const searchParam = new URLSearchParams(window.location.search).get(param);
    return searchParam;
}

async function init() {
    const parkData = await getParkData();
    const data = await getParkVisitorCenterDetails(getParam('id'));
    const galleryHTML = listTemplate(data.images, vcImageTemplate);
    document.querySelector('.vc-gallery').insertAdjacentHTML("beforeend", galleryHTML);
    document.querySelector('.vc-name').insertAdjacentHTML("afterbegin", vcTitleTemplate(data.name));
    document.querySelector('.vc-info').insertAdjacentHTML("afterbegin", vcInfoTemplate(data));
    document.querySelector('#vcAddresses').insertAdjacentHTML("beforeend", vcAddressesListTemplate(data.addresses));
    document.querySelector('#vcDirections').insertAdjacentHTML("beforeend", vcDirectionsTemplate(data.directionsInfo));
    document.querySelector('#vcAmenities').insertAdjacentHTML("beforeend", listTemplate(data.amenities, vcAmenityTemplate));
    document.querySelector('#vcContact').insertAdjacentHTML("beforeend", vcContactsTemplate(data.contacts));



    setHeaderFooter(parkData);
}

init();