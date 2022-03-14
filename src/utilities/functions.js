export const paddingNumber = (num) => {
    if (num != 0 && !num) return;
    return num < 10 ? `0${num}` : `${num}`;
};

export const debounce = (func, delay) => {
    let debounceTimer;
    return function() {
        const context = this;
        const args = arguments;

        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
    }
};

export const throttle = (func, limit) => {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
};

export const wait = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

export const templateSelector = (selector, all = false) => {
    all = all ? 'querySelectorAll' : 'querySelector';
    if (process.env.NODE_ENV == 'production') {
        return document.querySelector('#template-wrapper').shadowRoot[all](selector);
    }
    return document[all](selector);
};