// 1. Function: This fulfills the 'functions' requirement
function handleOrder(foodName) {
    // 2. DOM Manipulation: Selecting the message area and changing its content
    const displayArea = document.getElementById('order-status');
    displayArea.innerHTML = `<div class="alert alert-success">Added <strong>${foodName}</strong> to your order!</div>`;
    
    // Auto-hide the message after 3 seconds
    setTimeout(() => { displayArea.innerHTML = ''; }, 3000);
}

// 3. Event Handling: Attaching clicks to all your 'Order Now' buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.order-btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Finding the specific dish name from the card
            const dish = this.closest('.menu-card').querySelector('h3').innerText;
            handleOrder(dish);
        });
    });
});