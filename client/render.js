import {data} from "./list";

const body = document.querySelector (`body`);
const section = document.createElement(`section`);
section.className = `section`;
const container = document.createElement(`div`);
container.className = `container`;
const sectionWrapper = document.createElement(`div`);
sectionWrapper.className = `section__columns`;
const nameTable = document.createElement(`ul`);
nameTable.className = `section__texts`;
const companyTable = document.createElement(`ul`);
companyTable.className = `section__texts`;
const phoneTable = document.createElement(`ul`);
phoneTable.className = `section__texts`;
const emailTable = document.createElement(`ul`);
emailTable.className = `section__texts`;
const countryTable = document.createElement(`ul`);
countryTable.className = `section__texts`;
const statusTable = document.createElement(`ul`);
statusTable.className = `section__texts`;

const nameTitle = document.createElement(`li`);
nameTitle.className = `section__titles`;
nameTitle.innerText = `Customer Name`
const companyTitle = document.createElement(`li`);
companyTitle.className = `section__titles`;
companyTitle.innerText = `Company`;
const phoneTitle = document.createElement(`li`);
phoneTitle.className = `section__titles`;
phoneTitle.innerText = `Phone Number`;
const emailTitle = document.createElement(`li`);
emailTitle.className = `section__titles`;
emailTitle.innerText = `Email`
const countryTitle = document.createElement(`li`);
countryTitle.className = `section__titles`;
countryTitle.innerText = `Country`;
const statusTitle = document.createElement(`li`);
statusTitle.innerText = `Status`;
statusTitle.className = `section__titles section__titles__status`;

export function renderSection() {
    body.append(section);
    section.append(container);
    container.append(sectionWrapper);
    sectionWrapper.append(nameTable);
    nameTable.after(companyTable);
    nameTable.append(nameTitle);
    companyTable.after(phoneTable);
    companyTable.append(companyTitle);
    phoneTable.after(emailTable);
    phoneTable.append(phoneTitle);
    emailTable.after(countryTable);
    emailTable.append(emailTitle);
    countryTable.after(statusTable);
    countryTable.append(countryTitle);
    statusTable.append(statusTitle);
    data.forEach(( {
                       name,
                       company,
                       phone,
                       email,
                       country,
                       status}) =>
        renderName(
            name,
            company,
            phone,
            email,
            country,
            status)
    );
}

export function renderName(
    userName,
    userCompany,
    userPhone,
    userEmail,
    userCoutry,
    userStatus) {

    const name = document.createElement(`li`);
    name.className = `section__texts__text`;
    name.innerText = userName;
    nameTable.append(name);

    const company = document.createElement(`li`);
    company.className = `section__texts__text`;
    company.innerText = userCompany;
    companyTable.append(company);

    const phone = document.createElement(`li`);
    phone.className = `section__texts__text`;
    phone.innerText = userPhone;
    phoneTable.append(phone);

    const email = document.createElement(`li`);
    email.className = `section__texts__text`;
    email.innerText = userEmail;
    emailTable.append(email);

    const country = document.createElement(`li`);
    country.className = `section__texts__text`;
    country.innerText = userCoutry;
    countryTable.append(country);

    const statusContainer = document.createElement(`li`);
    const activeStatus = document.createElement(`div`);
    activeStatus.className = `section__status__active`;
    activeStatus.innerText = `Active`;
    const inactiveStatus = document.createElement(`div`);
    inactiveStatus.className = `section__status__inactive`;
    inactiveStatus.innerText = `Inactive`;
    statusTable.append(statusContainer);

    if(userStatus === true) {
        statusContainer.append(activeStatus);
    }
    else {
        statusContainer.append(inactiveStatus);
    }
}

