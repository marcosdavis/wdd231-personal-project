import { getParkData, getInfoLinks  } from "./parkService.mjs";
import { mediaCardTemplate } from "./templates.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";

function setParkIntro(info) {
    const introEl = document.querySelector(".intro")
    introEl.innerHTML = `<h1>${info.fullName}</h1>
    <p>${info.description}</p>`;
}

function setParkInfoLinks(data) {
    const infoEl = document.querySelector(".info")
    const html = data.map(mediaCardTemplate)
    infoEl.insertAdjacentHTML("afterbegin", html.join(""));
}

async function init() {
    const parkData = await getParkData();
    const links = getInfoLinks(parkData.images);

    setHeaderFooter(parkData);
    setParkIntro(parkData);
    setParkInfoLinks(links);
}

init();