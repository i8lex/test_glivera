

const body = document.querySelector (`body`);

export function renderSection() {
    const section = document.createElement(`section`);
    section.className = `section`;
    const container = document.createElement(`div`);
    container.className = `container`;
    const sectionWrapper = document.createElement(`div`);
    sectionWrapper.className = `section__columns`;
    const table = document.createElement(`ul`);
    table.className = `section__texts`;
    body.append(section);
    section.append(container);
    container.append(sectionWrapper);
    sectionWrapper.append(table);
}



export function renderName(text) {
    const list = document.querySelector(`ul`);
    const name = document.createElement(`li`);
    name.className = `section__texts__text`;
    name.innerText = text;
    list.append(name);
    const separator = document.createElement(`li`);
    separator.className = `section__texts__separator`;
    list.append(separator);
}

export function renderCompany(text) {
    const list = document.querySelector(`ul:nth-child(2)`);
    const name = document.createElement(`li`);
    name.className = `section__texts__text`;
    name.innerText = text;
    list.append(name);
    const separator = document.createElement(`li`);
    separator.className = `section__texts__separator`;
    list.append(separator);
}

export function renderPhone(text) {
    const name = document.createElement(`li`);
    name.className = `section__texts__text`;
    name.innerText = text;
    phoneTable.append(name);
    const separator = document.createElement(`li`);
    separator.className = `section__texts__separator`;
    phoneTable.append(separator);
}

export function renderEmail(text) {
    const name = document.createElement(`li`);
    name.className = `section__texts__text`;
    name.innerText = text;
    emailTable.append(name);
    const separator = document.createElement(`li`);
    separator.className = `section__texts__separator`;
    emailTable.append(separator);
}

export function renderCountry(text) {
    const name = document.createElement(`li`);
    name.className = `section__texts__text`;
    name.innerText = text;
    countryTable.append(name);
    const separator = document.createElement(`li`);
    separator.className = `section__texts__separator`;
    countryTable.append(separator);
}