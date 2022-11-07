import { cleanData } from "./src/cleaner.js";
import { cleanPaginator } from "./src/cleaner.js";
// import {data} from "./list.js";
// const body = document.querySelector (`body`);
// body.innerHTML = `
// <header class="header">
//     <div class="header__wrapper">
//         <div class="header__container">
//             <h1 class="header__title">All Customers</h1>
//             <a href="/active" class="header__link">Active Members</a>
//         </div>
//             <form action="#" class="header__form">
//                     <button type="button"  class="header__search__label__icon">
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                             <path d="M21 21L16.65 16.65" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                         </svg>
//                     </button>
//
//                 <label for="search" class="header__search__label">
//                     <input type="text" name = "search" class="header__search" id="search" placeholder="Search">
//                 </label>
//             </form>
//     </div>
// </header>
//
// <section class="section">
//     <div class="container">
//         <div class="section__wrapper">
//
//         </div>
//     </div>
// </section>
//
// <footer class="footer">
//     <div class="footer__wrapper">
//         <p class="footer__text"></p>
//     </div>
// </footer>
// `


let currentPage = getCurrentPage()
// console.log(currentPage);

let rows = 8;
const sectionWrapper = document.querySelector(`.section__wrapper`);
const form = document.querySelector(`form`);

function getCurrentPage() {
    if(+location.pathname.includes(`active`)) {
        let currentPage = +location.pathname.replace(/active|\/|page/gi, ``);
        return currentPage
    }
    if(+location.pathname.includes(`page`)) {
        let currentPage = +location.pathname.replace(/serverHost|page|\//gi, ``);
        return currentPage
    }
    // return currentPage
}

// async function getActiveUsers() {
//     const activeUsers = document.querySelector(`.header__link`);
//
//     activeUsers.addEventListener(`click`, async () => {
//         // let newData = [];
//         // history.pushState({}, `active/page/`,`` )
//         // history.pushState({}, `active/page/`,`active/page/${currentPage}` )
//
//         // async function getActiveUsers() {
//         //     const response = await fetch('http://localhost:4020/active');
//         //     const data = await response.json();
//         //     console.log(data)
//         //     return data;
//         // }
//         // const activeUserData = await getActiveUsers();
//
//
//         // form.addEventListener(`keyup`, async event => {
//         //     cleanData();
//         //     cleanPaginator();
//         //     event.preventDefault();
//         //
//         //     const value = document.querySelector(`input`).value.toString();
//         //     activeUserData.filter((item) => {
//         //         if(
//         //             item.name.toLowerCase().includes(value.toLowerCase()) ||
//         //             item.company.toLowerCase().includes(value.toLowerCase()) ||
//         //             item.phone.toLowerCase().includes(value.toLowerCase()) ||
//         //             item.email.toLowerCase().includes(value.toLowerCase()) ||
//         //             item.country.toLowerCase().includes(value.toLowerCase())) {
//         //             return newData.push(item);
//         //         }
//         //     })
//         //     renderData(newData, rows, currentPage);
//         //     displayPagination(newData, rows);
//         //     newData = [];
//         // });
//
//
//         // cleanData();
//         // cleanPaginator();
//         // // renderData(activeUserData, rows, currentPage);
//         // displayPagination(activeUserData, rows);
//
//
//         // newData = [];
//     });
// }
// await getActiveUsers()

async function getUsers() {



    if(+location.pathname.includes(`active`)) {
        const response = await fetch('http://localhost:4020/active');
         return await response.json();

        // let currentPage = +location.pathname.replace(/active|\/|page/gi, ``);
        // console.log(location.pathname.replace(/active|\/|page/gi, ``));
        // console.log(location.pathname);

        // history.pushState({}, `active/page/${currentPage}`, `${currentPage}`);
        // console.log(response.json())
        // return await response.json()
    }

     if(+location.pathname.includes(`page`)) {
        const response = await fetch('http://localhost:4020');
        // console.log(response.headers.get('page'));
        let currentPage = +location.pathname.replace(/page|\//gi, ``);
        history.pushState({}, `page/${currentPage}`, currentPage);
        return await response.json()
    }

    // if(+location.pathname.includes(`search`)) {
    //     const response = await fetch('http://localhost:4020');
    //     // console.log(response.headers.get('page'));
    //     return await response.json()
    // }

}
const data = await getUsers();
console.log(data)

await renderSection();




// console.log(location.pathname.replace(/serverHost|page|\//gi, ``));

// console.log((+location.pathname.includes(`active`)))

// history.pushState({}, `page/${currentPage}`, currentPage);






form.addEventListener(`input`, async event => {
        cleanData();
        cleanPaginator();
        event.preventDefault();

    async function getSearchedUsers() {

        const value = document.querySelector(`input`).value.toString();
        history.pushState({}, `bla`,`search#${value.toString()}=` )
        const url = new URL(`http://localhost:4020/page/`);
        url.searchParams.append(`search`, value);
        const response = await fetch(url.href);
        return await response.json();
    }

        const searchData = await getSearchedUsers();
        renderData(searchData, rows, currentPage);
        displayPagination(searchData, rows);
    });




function renderUser({ name, company, phone, email, country, status }) {
    const userList = document.createElement(`ul`);
    userList.className = `section__texts`

    let statusClass = ``;
    let statusText = ``;

    if(status === true) {
        statusClass = `section__status__active`;
        statusText = `Active`;
    }
    if(status !== true) {
        statusClass = `section__status__inactive`;
        statusText = `Inactive`;
    }

    userList.innerHTML = `
                <li class="section__texts__text">${name}</li>
                <li class="section__texts__text">${company}</li>
                <li class="section__texts__text">${phone}</li>
                <li class="section__texts__text">${email}</li>
                <li class="section__texts__text">${country}</li>
                <li class="${statusClass}">${statusText}</li>
            `
    sectionWrapper.append(userList);
}

function renderData(arrData, rowPerPage, page) {
    page--;
    cleanData();
    sectionWrapper.innerHTML = `
            <ul class="section__texts">
                <li class="section__titles">Customer Name</li>
                <li class="section__titles">Company</li>
                <li class="section__titles">Phone Number</li>
                <li class="section__titles">Email</li>
                <li class="section__titles">Country</li>
                <li class="section__titles">status</li>
            </ul>`;

    const start = rowPerPage * page;
    const end = start + rowPerPage;

    let footerText = document.querySelector(`.footer__text`);
    footerText.innerText = `Showing data ${start + 1} to ${
        arrData.length > (currentPage * rowPerPage)
            ? (currentPage * rowPerPage)
            : arrData.length} of ${arrData.length} entries`

    const paginatedData = arrData.slice(start, end);

    paginatedData.forEach(renderUser)
}

function displayPagination(arrData, rowPerPage) {
    const paginationEl = document.querySelector('.footer__wrapper');

    const pagesCount = Math.ceil(arrData.length / rowPerPage);
    const ulEl = document.createElement("ul");
    ulEl.classList.add('footer__paginator');

    for (let i = 0; i < pagesCount; i++) {
        const liEl = displayPaginationBtn(i + 1);
        ulEl.append(liEl)
    }

    paginationEl.append(ulEl)

    const liRight = document.createElement(`li`);
    liRight.className = `footer__page right`;
    liRight.innerText = `>`;
    const liLeft = document.createElement(`li`);
    liLeft.className = `footer__page left hidden`;
    liLeft.innerText = `<`;
    ulEl.prepend(liLeft);
    ulEl.append(liRight);

    liRight.addEventListener(`click`, () => {
        let currentItemLi = document.querySelector('li.footer__page__active');
        currentItemLi.classList.remove('footer__page__active');
        currentItemLi.nextElementSibling.classList.add('footer__page__active');
        currentPage = currentPage + 1;
        history.pushState({}, `bla`, currentPage);
        if(pagesCount === currentPage || pagesCount === 1) {
            liRight.classList.add(`hidden`)
        }
        if(currentPage !== 1) {
            liLeft.classList.remove(`hidden`)
        }
        renderData(arrData, rows, currentPage);
    })

    liLeft.addEventListener(`click`, () => {
        let currentItemLi = document.querySelector('li.footer__page__active');
        currentItemLi.classList.remove('footer__page__active');
        currentItemLi.previousElementSibling.classList.add('footer__page__active');
        currentPage = currentPage - 1;
        history.pushState({}, `bla`, currentPage);
        if(currentPage === 1) {
            liLeft.classList.add(`hidden`)
        }
        if(pagesCount !== currentPage) {
            liRight.classList.remove(`hidden`)
        }
        renderData(arrData, rows, currentPage);
    })

    function displayPaginationBtn(page) {
        const liEl = document.createElement("li");
        liEl.classList.add('footer__page')
        liEl.innerText = page

        if (currentPage === page) liEl.classList.add('footer__page__active');

        liEl.addEventListener('click', () => {
            // let pageRoute = page
            currentPage = page;
            renderData(arrData, rows, currentPage);

            // console.log(currentPage);

            history.pushState({}, `bla`, page);
            let currentItemLi = document.querySelector('li.footer__page__active');
            currentItemLi.classList.remove('footer__page__active');
            liEl.classList.add('footer__page__active');

            console.log(currentItemLi);


            if(pagesCount === currentPage) {
                liRight.classList.add(`hidden`)
            }
            if(currentPage !== 1) {
                liLeft.classList.remove(`hidden`)
            }
            if(currentPage === 1) {
                liLeft.classList.add(`hidden`)
            }
            if(pagesCount !== currentPage) {
                liRight.classList.remove(`hidden`)
            }
        })
        return liEl;
    }
}

async function renderSection() {


console.log(data)
    cleanData();
    renderData(data, rows, currentPage);
    displayPagination(data, rows);
}





