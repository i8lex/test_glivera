import { names } from "./data/names.mjs"
import { countries } from "./data/countries.mjs"
import { companies } from "./data/companies.mjs"

const namesArr = names.split(`, `)
//
// console.log(namesArr)
// console.log(countries[1])

const randomizer = (from, to) => {
    return +(Math.floor(Math.random() * (to - from + 1)) + from);
};
// console.log(randomizer(0, 252))


// console.log()


const companiesArr = companies.split(`\n`)

// console.log(companiesArr)

export let users = [];

function createUsers() {
    let r2000 = randomizer(0, 1999);
    let r252 = randomizer(0, 251);

    let r2 = randomizer(0, 1);

    const name = namesArr[r2000];
    const company = companiesArr[r2000];
    const countryObj = countries[r252];
    const country = countryObj.name;
    const countryCode = countryObj.phone;
    const statusArr = [true, false];
    const status = statusArr[r2];

    new User(name, company, countryCode, country, status)
}


function User(name, company, countryCode, country, status) {
    this.name = name;
    this.company = company;
    this.phone = `(${countryCode}) ${randomizer(0, 9)}${randomizer(0, 9)}${randomizer(0, 9)}-${randomizer(0, 9)}${randomizer(0, 9)}${randomizer(0, 9)}${randomizer(0, 9)}`;
    this.email = `${name.toLowerCase().replace(/\s/g,``)}@${company.toLowerCase().replace(/\s/g,``)}.com`;
    this.country = country;
    this.status = status;

    users.push(this);
}

for (let i = 0; i < 100; i++) {
    createUsers()
}

console.log(users)



// async function getData() {
//     const response = await fetch('http://localhost:4020');
//     const data = await response.json();
//     return data;
// }

// const data = await getData();





