let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showItem(index) {
    items[currentIndex].classList.remove('active');
    currentIndex = (index + totalItems) % totalItems;
    items[currentIndex].classList.add('active');
}

function nextItem() {
    showItem(currentIndex + 1);
}

function prevItem() {
    showItem(currentIndex - 1);
}

document.querySelector('.next').addEventListener('click', nextItem);
document.querySelector('.prev').addEventListener('click', prevItem);