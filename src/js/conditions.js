import { getParkData, getAlertData , getVisitorCenterData } from "./parkService.mjs";
import { alertCardTemplate , visitorCenterTemplate , activitiesTemplate } from "./templates.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import '../css/style.css';
import '../css/conditions.css';

function setAlerts(data) {
    const alertList = document.querySelector(".alerts > ul");
    alertList.innerHTML = '';
    const html = data.map(alertCardTemplate);
    alertList.insertAdjacentHTML("afterbegin", html.join(""));
}

function setVisitorCenters(data) {
    const visitorList = document.querySelector(".visitor .details > ul");
    visitorList.innerHTML = '';
    const html = data.map(visitorCenterTemplate);
    visitorList.insertAdjacentHTML("afterbegin", html.join(""));
}

function setActivities(data) {
    const activitiesList = document.querySelector(".activities .details > ul");
    activitiesList.innerHTML = '';
    const html = data.map(activitiesTemplate);
    activitiesList.insertAdjacentHTML("afterbegin", html.join(''));
}

async function init() {
    const parkData = await getParkData();
    const alertData = await getAlertData();
    const visitorCenterData = await getVisitorCenterData("cany");

    setAlerts(alertData);
    setHeaderFooter(parkData);
    setVisitorCenters(visitorCenterData);
    setActivities(parkData.activities);

}

init();