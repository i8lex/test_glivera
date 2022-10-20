
import {data} from "./list.js";

const body = document.querySelector (`body`);
body.innerHTML = `
<header class="header">
    <div class="header__wrapper">
        <div class="header__container">
            <h1 class="header__title">All Customers</h1>
            <p class="header__link">Active Members</p>
        </div>
            <form action="#" class="header__form">
                    <button type="button"  class="header__search__label__icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21 21L16.65 16.65" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>

                <label for="search" class="header__search__label">
                    <input type="text" name = "search" class="header__search" id="search" placeholder="Search">
                </label>
            </form>
    </div>
</header>

<section class="section">
    <div class="container">
        <div class="section__wrapper">
            
        </div>
    </div>
</section>

<footer class="footer">
    <div class="footer__wrapper">
        <p class="footer__text"></p>
    </div>
</footer>
`

const sectionWrapper = document.querySelector(`.section__wrapper`);

function renderSection() {
    let currentPage = 1;
    let rows = 8;
    let newData = [];

    const form = document.querySelector(`form`);
    form.addEventListener(`keyup`, event => {
        cleanData();
        cleanPaginator();
        event.preventDefault();

        const value = document.querySelector(`input`).value;
            data.filter((item) => {
                if(
                    item.name.toLowerCase().includes(value.toLowerCase()) ||
                    item.company.toLowerCase().includes(value.toLowerCase()) ||
                    item.phone.toLowerCase().includes(value.toLowerCase()) ||
                    item.email.toLowerCase().includes(value.toLowerCase()) ||
                    item.country.toLowerCase().includes(value.toLowerCase())) {
                    return newData.push(item);
                }
            })
            renderData(newData, rows, currentPage);
            displayPagination(newData, rows);
            newData = [];
    });



    const active = document.querySelector(`.header__link`);
    active.addEventListener(`click`, () => {
        cleanData();
        cleanPaginator();

        data.filter((item) => {
            if(item.status === true) {
                return newData.push(item);
            }
        })
        renderData(newData, rows, currentPage);
        displayPagination(newData, rows);
        newData = [];
    });


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

        paginatedData.forEach((user) => renderUser(user))

        function renderUser(user) {
            const userList = document.createElement(`ul`);
            userList.className = `section__texts`
            sectionWrapper.append(userList);

            const name = document.createElement(`li`);
            name.className = `section__texts__text`;
            name.innerText = user.name;
            userList.append(name);

            const company = document.createElement(`li`);
            company.className = `section__texts__text`;
            company.innerText = user.company;
            userList.append(company);

            const phone = document.createElement(`li`);
            phone.className = `section__texts__text`;
            phone.innerText = user.phone;
            userList.append(phone);

            const email = document.createElement(`li`);
            email.className = `section__texts__text`;
            email.innerText = user.email;
            userList.append(email);

            const country = document.createElement(`li`);
            country.className = `section__texts__text`;
            country.innerText = user.country;
            userList.append(country);

            if(user.status === true) {
                const statusActive = document.createElement(`li`);
                statusActive.className = `section__status__active`;
                statusActive.innerText = `Active`;
                userList.append(statusActive);
            }
            if(user.status !== true) {
                const statusInactive = document.createElement(`li`);
                statusInactive.className = `section__status__inactive`;
                statusInactive.innerText = `Inactive`;
                userList.append(statusInactive);
            }
        }
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
        liLeft.className = `footer__page left`;
        liLeft.innerText = `<`;

        ulEl.prepend(liLeft);
        ulEl.append(liRight);

        // liRight.addEventListener(`click`, () => {
        //     currentPage = currentPage + 1;
        //     liEl.classList.add('footer__page__active')
        //     renderData(arrData, rows, currentPage);
        // })



        function displayPaginationBtn(page) {
            const liEl = document.createElement("li");
            liEl.classList.add('footer__page')
            liEl.innerText = page

            if (currentPage === page) liEl.classList.add('footer__page__active');

            liEl.addEventListener('click', () => {
                currentPage = page
                renderData(arrData, rows, currentPage)

                let currentItemLi = document.querySelector('li.footer__page__active');
                currentItemLi.classList.remove('footer__page__active');
                liEl.classList.add('footer__page__active');
            })
            return liEl;
        }
    }

    function cleanPaginator() {
        const ulEl = document.querySelectorAll(`.footer__paginator`);
        ulEl.forEach((item) => item.remove())
    }

    function cleanData() {
        sectionWrapper
            .querySelectorAll(`.section__texts__text`)
            .forEach(e => e.remove() );
        sectionWrapper
            .querySelectorAll(`.section__status__active`)
            .forEach(e => e.remove() );
        sectionWrapper
            .querySelectorAll(`.section__status__inactive`)
            .forEach(e => e.remove() );
    }

    cleanData();
    renderData(data, rows, currentPage);
    displayPagination(data, rows);
}

renderSection();




