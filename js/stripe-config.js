// STRIPE CONFIGURATION - LIVE
const STRIPE_PUBLISHABLE_KEY = 'pk_live_51T3pwrFaSU6fEUF0oV1j2DROcuqBqC8mTF8pXlbkqogCEtZuV7AUY3WWEnFMIQns4iOJQY2td6DVBNNXRS0Xk1t500UoHpYpYe';

// Product Price IDs from Stripe
const STRIPE_PRODUCTS = {
    // Prompt Packs
    'business-prompts': 'price_1T3rnDFaSU6fEUF0Mx7jigib',
    'creator-prompts': 'price_1T3rnDFaSU6fEUF0ROCCnmp0',
    'dev-prompts': 'price_1T3rnEFaSU6fEUF0enTWKcyJ',
    'marketing-prompts': 'price_1T3rnFFaSU6fEUF0eHktmnOE',
    'freelancer-prompts': 'price_1T3rnFFaSU6fEUF0vjjN8zF7',
    'solo-prompts': 'price_1T3rnGFaSU6fEUF0ebmwZqnC',
    'job-prompts': 'price_1T3rnGFaSU6fEUF03y91LOtb',
    'social-prompts': 'price_1T3rnHFaSU6fEUF0KeFpLvRO',
    'real-estate-prompts': 'price_1T3rnIFaSU6fEUF0BtdNAROa',
    'student-prompts': 'price_1T3rnIFaSU6fEUF08hE8pXxx',
    'finance-prompts': 'price_1T3rnJFaSU6fEUF05VaWk3h4',
    'startup-prompts': 'price_1T3rnKFaSU6fEUF0E3YUYE3U',
    'writer-prompts': 'price_1T3rnKFaSU6fEUF08MZv5ORI',
    'ecommerce-prompts': 'price_1T3rnLFaSU6fEUF0EQSKnFSS',
    'manager-prompts': 'price_1T3rnMFaSU6fEUF0YOMlQ5xd',

    // Notion Templates
    'life-os': 'price_1T3rnMFaSU6fEUF0IvFWjklW',
    'budget-tracker': 'price_1T3rnNFaSU6fEUF074BFtGIW',
    'second-brain': 'price_1T3rnOFaSU6fEUF0LC9LxDN3',
    'habit-tracker': 'price_1T3rnOFaSU6fEUF0p1aOiD94',
    'client-tracker': 'price_1T3rnPFaSU6fEUF0a63RPGLP',
    'content-calendar': 'price_1T3rnPFaSU6fEUF0YDSbMF80',

    // Cheatsheets & Course
    'keyboard-shortcuts': 'price_1T3rnQFaSU6fEUF0OMQtufxQ',
    'prompt-formulas': 'price_1T3rnRFaSU6fEUF0iiehN07B',
    'ai-course': 'price_1T3rnRFaSU6fEUF0Bwq5VgQ9',

    // Bundle
    'complete-bundle': 'price_1T3rnSFaSU6fEUF0rR83WBKm'
};

// Success and Cancel URLs
const SUCCESS_URL = 'https://jcmac29.github.io/kai-store/success.html';
const CANCEL_URL = 'https://jcmac29.github.io/kai-store/';
