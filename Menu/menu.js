document.addEventListener('DOMContentLoaded', function () {
    const popupOverlay = document.getElementById('popupOverlay');
    const closePopup = document.getElementById('closePopup');
    const popupImage = document.getElementById('popupImage');
    
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            const itemName = item.querySelector('h3').textContent;
            const itemDetails = item.querySelector('.item-details').innerHTML;
            popupImage.src = imgSrc;
            popupImage.alt = itemName;
            popupImage.title = itemName;
            popupOverlay.style.display = 'flex';
            popupOverlay.querySelector('.popup-details').innerHTML = itemDetails;
        });
    });
    
    closePopup.addEventListener('click', () => {
        popupOverlay.style.display = 'none';
    });
    
    popupOverlay.addEventListener('click', (event) => {
        if (event.target === popupOverlay) {
            popupOverlay.style.display = 'none';
        }
    });
});
