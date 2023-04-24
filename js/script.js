const tabMenu = document.querySelectorAll('li a');
const tabContent = document.querySelectorAll('.nav-container');

function activeTab(index) {
    tabContent.forEach((section) => {
        section.classList.remove('ativo');
    });

    tabContent[index].classList.add('ativo');
}

tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
        activeTab(index);
    }) 
})

