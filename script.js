document.addEventListener('DOMContentLoaded', () => {
    const statusArea = document.getElementById('order-status');
    const buttons = document.querySelectorAll('.order-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Find the name of the food in the card where the button was clicked
            const foodName = this.parentElement.querySelector('h5').innerText;
            
            // DOM Manipulation: Injecting a Bootstrap alert message
            statusArea.innerHTML = `
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Success!</strong> ${foodName} has been added to your order.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `;
            
            // Optional: Scroll back to the message so the user sees it
            statusArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    });
});