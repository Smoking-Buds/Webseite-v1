const HeaderProductTitle = document.getElementsByClassName('header-product-title')
productTitle = fetch('/api/products', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    mode: 'cors',
    integrity: 'sha256-abcdef1234567890abcdef1234567890abcdef1234567890',
    keepalive: 'true',
});
HeaderProductTitle.innerHTML = productTitle;