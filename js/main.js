const sidebar = document.querySelector('.sidebar');
const sidebarToggleButton = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const showMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.card__link--hidden');
const widgets = document.querySelectorAll('.widget');
const widgetTitle = document.querySelectorAll('.widget__title');
const widgetBody = document.querySelectorAll('.widget__body');

sidebarToggleButton.addEventListener('click', () => {
    menuIcon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar__mobile--active');
})

showMoreCards.addEventListener('click', () => {
    hiddenCards.forEach(function(card) {
        card.classList.remove('card__link--hidden');
    })
})

widgets.forEach(function(widget){
    widget.addEventListener('click', (event) => {
        if(event.target.classList.contains('widget__title')) {
            event.target.classList.toggle('widget__title--active');
            event.target.nextElementSibling.classList.toggle('widget__body--hidden');
        }
    })
})
