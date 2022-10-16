// import {renderName} from "./render.js";
// import {renderSection} from "./render.js";


const data = [
    {
        name:`Jane Cooper`,
        company:`Microsoft`,
        phone:`(225) 555-0118`,
        email:`jane@microsoft.com`,
        country:`United States`,
        status: true,
    },
    {
        name:`Floyd Miles`,
        company:`Yahoo`,
        phone:`(205) 555-0100`,
        email:`floyd@yahoo.com`,
        country:`Kiribati`,
        status:false,
    },
    {
        name:`Ronald Richards`,
        company:`Adobe`,
        phone:`(302) 555-0107`,
        email:`ronald@adobe.com`,
        country:`Israel`,
        status:false,
    },
    {
        name:`Marvin McKinney`,
        company:`Tesla`,
        phone:`(252) 555-0126`,
        email:`marvin@tesla.com`,
        country:`Iran`,
        status:true,
    },
    {
        name:`Jerome Bell`,
        company:`Google`,
        phone:`(629) 555-0129`,
        email:`jerome@google.com`,
        country:`Réunion`,
        status:true,
    },
    {
        name:`Kathryn Murphy`,
        company:`Microsoft`,
        phone:`(406) 555-0120`,
        email:`kathryn@microsoft.com`,
        country:`Curaçao`,
        status:true,
    },
    {
        name:`Jacob Jones`,
        company:`Yahoo`,
        phone:`(208) 555-0112`,
        email:`jacob@yahoo.com`,
        country:`Brazil`,
        status:true,
    },
    {
        name:`Kristin Watson`,
        company:`Facebook`,
        phone:`(704) 555-0127`,
        email:`kristin@facebook.com`,
        country:`Åland Islands`,
        status:false,
    },
]

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
statusTitle.className = `section__titles`;



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



renderSection();

