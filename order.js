document.addEventListener('DOMContentLoaded', function() {
    // Sample product data
    const products = [
        { id: 1, name: "Sourdough Loaf", price: 6.99, category: "bread" },
        { id: 2, name: "Baguette", price: 4.99, category: "bread" },
        { id: 3, name: "Croissant", price: 3.50, category: "pastry" },
        { id: 4, name: "Pain au Chocolat", price: 4.25, category: "pastry" },
        { id: 5, name: "Cinnamon Roll", price: 4.50, category: "dessert" },
        { id: 6, name: "Apple Tart", price: 5.75, category: "dessert" }
    ];

    let cart = [];
    let deliveryFee = 0;

    // Form submission
    document.getElementById('orderForm').addEventListener('submit', function(e) {
        e.preventDefault();
        if (cart.length === 0) {
            alert('Please add items to your cart before placing an order');
            return;
        }
        
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            delivery: document.getElementById('delivery').value,
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            items: cart,
            total: calculateTotal()
        };
        
        console.log('Order Submitted:', formData);
        alert('Order placed successfully! We will contact you to confirm.');
        this.reset();
        cart = [];
        updateOrderSummary();
    });

    // Delivery option change
    document.getElementById('delivery').addEventListener('change', function() {
        deliveryFee = this.value === 'delivery' ? 5 : 0;
        updateOrderSummary();
    });

    function calculateTotal() {
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        return subtotal + deliveryFee;
    }

    function updateOrderSummary() {
        const orderItems = document.getElementById('orderItems');
        const subtotalEl = document.getElementById('subtotal');
        const deliveryFeeEl = document.getElementById('deliveryFee');
        const totalEl = document.getElementById('total');

        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const total = subtotal + deliveryFee;

        orderItems.innerHTML = cart.length > 0 
            ? cart.map(item => `
                <div class="order-item">
                    <span>${item.name} x${item.quantity}</span>
                    <span>$${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            `).join('')
            : '<p>Your cart is empty</p>';

        subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
        deliveryFeeEl.textContent = `$${deliveryFee.toFixed(2)}`;
        totalEl.textContent = `$${total.toFixed(2)}`;
    }
});