const sectionWrapper = document.querySelector(`.section__wrapper`);

export function cleanPaginator() {
    const ulEl = document.querySelectorAll(`.footer__paginator`);
    ulEl.forEach((item) => item.remove())
}

export function cleanData() {
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