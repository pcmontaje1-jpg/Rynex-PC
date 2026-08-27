const products = [
    { id: 1, name: 'Rynex Mini Ryzen 3 3100 / 8GB / 256GB SSD / GT 1030', price: 99, rating: 4.2, reviews: 34, img: 'https://via.placeholder.com/400x300/222/666?text=PC' },
    { id: 2, name: 'Rynex Core i3-12100F / 16GB / 512GB SSD / RX 6600', price: 349, rating: 4.5, reviews: 89, img: 'https://via.placeholder.com/400x300/222/666?text=PC' },
    { id: 3, name: 'Rynex Ryzen 5 5600X / 16GB / 1TB SSD / RTX 3060', price: 649, rating: 4.7, reviews: 156, img: 'https://via.placeholder.com/400x300/222/666?text=PC' },
    { id: 4, name: 'Rynex Ryzen 7 5700X / 32GB / 1TB SSD / RTX 4060', price: 949, rating: 4.8, reviews: 210, img: 'https://via.placeholder.com/400x300/222/666?text=PC' },
    { id: 5, name: 'Rynex Ryzen 7 5800X / 32GB / 1TB NVMe / RTX 4070', price: 1249, rating: 4.9, reviews: 312, img: 'https://via.placeholder.com/400x300/222/666?text=PC' },
    { id: 6, name: 'Rynex Imperial Ryzen 7 5700X / 32GB / 1TB SSD / RTX 5070', price: 1699, rating: 4.6, reviews: 523, img: 'https://via.placeholder.com/400x300/222/666?text=PC' },
    { id: 7, name: 'Rynex Ryzen 9 5900X / 64GB / 2TB NVMe / RTX 5070 Ti', price: 2199, rating: 4.8, reviews: 178, img: 'https://via.placeholder.com/400x300/222/666?text=PC' },
    { id: 8, name: 'Rynex Core i7-13700K / 64GB / 2TB SSD / RTX 5080', price: 3099, rating: 4.9, reviews: 96, img: 'https://via.placeholder.com/400x300/222/666?text=PC' },
    { id: 9, name: 'Rynex Ryzen 9 7950X / 128GB / 4TB NVMe / RTX 5090', price: 4499, rating: 5.0, reviews: 43, img: 'https://via.placeholder.com/400x300/222/666?text=PC' },
    { id: 10, name: 'Rynex Core i9-14900KS / 128GB / 4TB SSD / RTX 5090 Ti', price: 6199, rating: 4.9, reviews: 27, img: 'https://via.placeholder.com/400x300/222/666?text=PC' },
    { id: 11, name: 'Rynex Threadripper 7980X / 256GB / 8TB NVMe / RTX 5090 Ti', price: 7999, rating: 5.0, reviews: 12, img: 'https://via.placeholder.com/400x300/222/666?text=PC' },
    { id: 12, name: 'Rynex Ultimate Dual RTX 5090 / Threadripper / 256GB', price: 9999, rating: 5.0, reviews: 8, img: 'https://via.placeholder.com/400x300/222/666?text=PC' }
];

function renderProducts() {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = products.map(p => `
        <div class="product-card">
            <div class="img-box">
                <img src="${p.img}" alt="${p.name}">
            </div>
            <span class="tag water"><i class="fas fa-droplet"></i> Liquid Cooling</span>
            <h3>${p.name}</h3>
            <div class="rating">
                <i class="fas fa-star"></i> ${p.rating} <span>${p.reviews} reviews</span>
            </div>
            <div class="price">${p.price.toLocaleString()} €</div>
            <div class="delivery"><i class="fas fa-truck"></i> Free · tomorrow</div>
            <a href="product.html?id=${p.id}" class="btn btn-primary"><i class="fas fa-cart-plus"></i> Select</a>
        </div>
    `).join('');
}

renderProducts();

let cartCount = 0;
document.addEventListener('click', (e) => {
    if (e.target.closest('.btn-primary')) {
        cartCount++;
        document.querySelector('.cart-count').textContent = cartCount;
    }
});
