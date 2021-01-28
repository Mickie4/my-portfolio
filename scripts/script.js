function toggleMenu(event) {
    event.preventDefault();
    let menuContent = document.querySelector('#toggleMenu');
    menuContent.classList.toggle('collapse');
}

let toggleBtn = document.querySelector('#toggler');

toggleBtn.addEventListener('click', toggleMenu);