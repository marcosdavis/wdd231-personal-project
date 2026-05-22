import { getParkData, getInfoLinks, getAlertData  } from "./parkService.mjs";
import { alertCardTemplate } from "./templates.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";

function setAlerts(data) {
    const alertList = document.querySelector(".alerts > ul")
    alertList.innerHTML = '';
    const html = data.map(alertCardTemplate)
    alertList.insertAdjacentHTML("afterbegin", html.join(""));
}

async function init() {
    const parkData = await getParkData();
    const alertData = await getAlertData();

    setAlerts(alertData);
    setHeaderFooter(parkData);
}

init();