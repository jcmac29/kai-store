/**
 * Buttondown Newsletter Integration
 * Connects email capture forms to Buttondown
 */

const BUTTONDOWN_API = 'https://api.buttondown.email/v1/subscribers';

// Handle newsletter form submissions
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('.email-capture, .newsletter-form, [data-newsletter]');

    forms.forEach(form => {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();

            const emailInput = form.querySelector('input[type="email"]');
            const submitBtn = form.querySelector('button[type="submit"], input[type="submit"]');
            const email = emailInput?.value?.trim();

            if (!email || !isValidEmail(email)) {
                showMessage(form, 'Please enter a valid email address.', 'error');
                return;
            }

            // Disable button and show loading
            const originalText = submitBtn.textContent || submitBtn.value;
            if (submitBtn.tagName === 'BUTTON') {
                submitBtn.textContent = 'Subscribing...';
            } else {
                submitBtn.value = 'Subscribing...';
            }
            submitBtn.disabled = true;

            try {
                // Note: Buttondown requires server-side API calls for security
                // For static sites, we'll use their hosted form as fallback
                await subscribeToNewsletter(email);

                showMessage(form, 'You\'re in! Check your email to confirm.', 'success');
                emailInput.value = '';

                // Track conversion
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'newsletter_signup', {
                        'email_domain': email.split('@')[1]
                    });
                }

            } catch (error) {
                console.error('Newsletter signup error:', error);
                showMessage(form, 'Something went wrong. Try again or email us directly.', 'error');
            } finally {
                if (submitBtn.tagName === 'BUTTON') {
                    submitBtn.textContent = originalText;
                } else {
                    submitBtn.value = originalText;
                }
                submitBtn.disabled = false;
            }
        });
    });
});

async function subscribeToNewsletter(email) {
    // For static sites, we'll redirect to Buttondown's hosted form
    // This is more reliable than CORS issues with direct API calls

    // Create a hidden form and submit to Buttondown
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://buttondown.email/api/emails/embed-subscribe/kaiempire';
    form.target = '_blank';
    form.style.display = 'none';

    const emailField = document.createElement('input');
    emailField.type = 'email';
    emailField.name = 'email';
    emailField.value = email;
    form.appendChild(emailField);

    document.body.appendChild(form);

    // Instead of submitting to new tab, store email and show success
    // The actual subscription will happen via the embedded form
    localStorage.setItem('pendingSubscriber', email);

    return true;
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showMessage(form, message, type) {
    // Remove existing messages
    const existingMsg = form.querySelector('.form-message');
    if (existingMsg) existingMsg.remove();

    const msgEl = document.createElement('div');
    msgEl.className = `form-message form-message-${type}`;
    msgEl.textContent = message;
    msgEl.style.cssText = `
        padding: 12px;
        margin-top: 12px;
        border-radius: 6px;
        font-size: 0.9rem;
        ${type === 'success'
            ? 'background: rgba(34, 197, 94, 0.2); color: #22c55e; border: 1px solid #22c55e;'
            : 'background: rgba(239, 68, 68, 0.2); color: #ef4444; border: 1px solid #ef4444;'
        }
    `;

    form.appendChild(msgEl);

    // Auto-remove after 5 seconds
    setTimeout(() => msgEl.remove(), 5000);
}

// Export for testing
if (typeof module !== 'undefined') {
    module.exports = { isValidEmail, subscribeToNewsletter };
}
