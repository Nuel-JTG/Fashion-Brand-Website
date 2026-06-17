// 1. Grab the main modal container from the HTML
const myModal = document.getElementById('productModal');

// 2. Grab the text elements inside the modal so we can change them
const myModalTitle = document.getElementById('modalTitle');
const myModalPrice = document.getElementById('modalPrice');
const myModalDesc = document.getElementById('modalDesc');

// 3. This function OPENS the modal and fills it with information
function openModal(name, price, description) {
    // Change the text inside the modal to match the clicked product
    myModalTitle.textContent = name;
    myModalPrice.textContent = price;
    myModalDesc.textContent = description;
    
    // Make the modal visible on screen
    myModal.style.display = 'flex';
}

// 4. This function CLOSES the modal
function closeModal() {
    // Hide the modal from the screen
    myModal.style.display = 'none';
}