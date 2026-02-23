// STRIPE CHECKOUT INTEGRATION
// Handles payment flow for all products

// Initialize Stripe
let stripe;

document.addEventListener('DOMContentLoaded', function() {
    // Check if Stripe key is configured
    if (STRIPE_PUBLISHABLE_KEY && STRIPE_PUBLISHABLE_KEY !== 'pk_live_YOUR_KEY_HERE') {
        stripe = Stripe(STRIPE_PUBLISHABLE_KEY);
        initializeCheckoutButtons();
    } else {
        console.log('Stripe not configured yet. Buttons will show placeholder.');
        initializePlaceholderButtons();
    }
});

function initializeCheckoutButtons() {
    document.querySelectorAll('.buy-btn, .bundle-btn, .product-btn').forEach(btn => {
        btn.addEventListener('click', async function() {
            const productKey = this.dataset.product;
            const priceId = STRIPE_PRODUCTS[productKey];

            if (!priceId || priceId === 'price_XXXXXX') {
                alert('This product is being set up. Please check back shortly!');
                return;
            }

            // Disable button and show loading
            this.disabled = true;
            this.textContent = 'Loading...';

            try {
                // Redirect to Stripe Checkout
                const { error } = await stripe.redirectToCheckout({
                    lineItems: [{ price: priceId, quantity: 1 }],
                    mode: 'payment',
                    successUrl: SUCCESS_URL + '?product=' + productKey,
                    cancelUrl: CANCEL_URL
                });

                if (error) {
                    console.error('Stripe error:', error);
                    alert('Something went wrong. Please try again.');
                    this.disabled = false;
                    this.textContent = 'Buy Now';
                }
            } catch (err) {
                console.error('Checkout error:', err);
                alert('Unable to process checkout. Please try again.');
                this.disabled = false;
                this.textContent = 'Buy Now';
            }
        });
    });
}

function initializePlaceholderButtons() {
    document.querySelectorAll('.buy-btn, .bundle-btn, .product-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Payment processing coming soon! Check back shortly.');
        });
    });
}

// Track conversion for analytics
function trackPurchase(productKey, amount) {
    // Google Analytics event
    if (typeof gtag !== 'undefined') {
        gtag('event', 'purchase', {
            'transaction_id': Date.now(),
            'value': amount,
            'currency': 'USD',
            'items': [{
                'item_id': productKey,
                'item_name': productKey,
                'price': amount,
                'quantity': 1
            }]
        });
    }
}
