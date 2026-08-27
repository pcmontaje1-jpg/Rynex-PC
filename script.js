// ===== 25 PRODUCTS =====
const allProducts = [
    // Budget
    { id: 1, name: 'Rynex Starter', cpu: 'AMD Ryzen 3 3100', ram: '8GB DDR4 3200MHz', storage: '256GB NVMe SSD', gpu: 'GT 1030 2GB', price: 299, originalPrice: 399, profit: 100, rating: 4.2, reviews: 34, category: 'budget', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 2, name: 'Rynex Core', cpu: 'Intel Core i3-12100F', ram: '16GB DDR4 3200MHz', storage: '512GB NVMe SSD', gpu: 'RX 6600 8GB', price: 449, originalPrice: 599, profit: 150, rating: 4.5, reviews: 89, category: 'budget', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 3, name: 'Rynex Lite', cpu: 'AMD Ryzen 5 4500', ram: '16GB DDR4 3200MHz', storage: '512GB NVMe SSD', gpu: 'GTX 1650 4GB', price: 549, originalPrice: 699, profit: 150, rating: 4.3, reviews: 67, category: 'budget', img: 'https://images.unsplash.com/photo-1600068474554-9e3e8a1b1b5b?w=400&h=300&fit=crop&auto=format' },
    { id: 4, name: 'Rynex Play', cpu: 'Intel Core i5-11400F', ram: '16GB DDR4 3200MHz', storage: '1TB NVMe SSD', gpu: 'RX 6500 XT 4GB', price: 649, originalPrice: 849, profit: 200, rating: 4.4, reviews: 112, category: 'budget', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    // Gaming
    { id: 5, name: 'Rynex Gamer', cpu: 'AMD Ryzen 5 5600X', ram: '16GB DDR4 3600MHz', storage: '1TB NVMe SSD', gpu: 'RTX 3060 12GB', price: 849, originalPrice: 1099, profit: 250, rating: 4.7, reviews: 156, category: 'gaming', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 6, name: 'Rynex Pro', cpu: 'AMD Ryzen 7 5700X', ram: '32GB DDR4 3600MHz', storage: '1TB NVMe SSD', gpu: 'RTX 4060 8GB', price: 1149, originalPrice: 1499, profit: 350, rating: 4.8, reviews: 210, category: 'gaming', img: 'https://images.unsplash.com/photo-1600068474554-9e3e8a1b1b5b?w=400&h=300&fit=crop&auto=format' },
    { id: 7, name: 'Rynex Performance', cpu: 'AMD Ryzen 7 5800X', ram: '32GB DDR4 3600MHz', storage: '2TB NVMe SSD', gpu: 'RTX 4070 12GB', price: 1599, originalPrice: 2099, profit: 500, rating: 4.9, reviews: 312, category: 'gaming', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 8, name: 'Rynex Ultimate', cpu: 'AMD Ryzen 9 5900X', ram: '64GB DDR4 3600MHz', storage: '2TB NVMe SSD', gpu: 'RTX 4070 Ti 12GB', price: 1999, originalPrice: 2599, profit: 600, rating: 4.9, reviews: 189, category: 'gaming', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    // Home
    { id: 9, name: 'Rynex Home', cpu: 'AMD Ryzen 5 5500', ram: '16GB DDR4 3200MHz', storage: '512GB NVMe SSD', gpu: 'GTX 1660 6GB', price: 599, originalPrice: 749, profit: 150, rating: 4.5, reviews: 89, category: 'home', img: 'https://images.unsplash.com/photo-1600068474554-9e3e8a1b1b5b?w=400&h=300&fit=crop&auto=format' },
    { id: 10, name: 'Rynex Family', cpu: 'Intel Core i5-11400', ram: '16GB DDR4 3200MHz', storage: '1TB NVMe SSD', gpu: 'RTX 3050 8GB', price: 749, originalPrice: 949, profit: 200, rating: 4.6, reviews: 134, category: 'home', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 11, name: 'Rynex Studio', cpu: 'AMD Ryzen 7 5700G', ram: '32GB DDR4 3200MHz', storage: '1TB NVMe SSD', gpu: 'RTX 4060 8GB', price: 1099, originalPrice: 1399, profit: 300, rating: 4.7, reviews: 167, category: 'home', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 12, name: 'Rynex Creator', cpu: 'Intel Core i7-12700', ram: '32GB DDR4 3200MHz', storage: '2TB NVMe SSD', gpu: 'RTX 4070 12GB', price: 1549, originalPrice: 1999, profit: 450, rating: 4.8, reviews: 198, category: 'home', img: 'https://images.unsplash.com/photo-1600068474554-9e3e8a1b1b5b?w=400&h=300&fit=crop&auto=format' },
    // Advanced
    { id: 13, name: 'Rynex Imperial', cpu: 'AMD Ryzen 7 5700X', ram: '32GB DDR4 3600MHz', storage: '1TB NVMe SSD', gpu: 'RTX 5070 12GB', price: 1999, originalPrice: 2599, profit: 600, rating: 4.6, reviews: 523, category: 'advanced', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 14, name: 'Rynex Elite', cpu: 'AMD Ryzen 9 5900X', ram: '64GB DDR4 3600MHz', storage: '2TB NVMe SSD', gpu: 'RTX 5070 Ti 16GB', price: 2599, originalPrice: 3399, profit: 800, rating: 4.8, reviews: 178, category: 'advanced', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 15, name: 'Rynex Titan', cpu: 'Intel Core i7-13700K', ram: '64GB DDR5 6000MHz', storage: '2TB NVMe SSD', gpu: 'RTX 5080 16GB', price: 3599, originalPrice: 4699, profit: 1100, rating: 4.9, reviews: 96, category: 'advanced', img: 'https://images.unsplash.com/photo-1600068474554-9e3e8a1b1b5b?w=400&h=300&fit=crop&auto=format' },
    { id: 16, name: 'Rynex Dominator', cpu: 'AMD Ryzen 9 7950X', ram: '64GB DDR5 6000MHz', storage: '2TB NVMe SSD', gpu: 'RTX 5090 24GB', price: 4599, originalPrice: 5999, profit: 1400, rating: 4.9, reviews: 67, category: 'advanced', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    // Professional
    { id: 17, name: 'Rynex Workstation', cpu: 'AMD Ryzen 9 7900X', ram: '64GB DDR5 5200MHz', storage: '2TB NVMe SSD', gpu: 'RTX 4080 16GB', price: 2999, originalPrice: 3899, profit: 900, rating: 4.8, reviews: 145, category: 'professional', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 18, name: 'Rynex Render', cpu: 'Intel Core i9-13900K', ram: '128GB DDR5 5600MHz', storage: '4TB NVMe SSD', gpu: 'RTX 5090 24GB', price: 4999, originalPrice: 6499, profit: 1500, rating: 4.9, reviews: 89, category: 'professional', img: 'https://images.unsplash.com/photo-1600068474554-9e3e8a1b1b5b?w=400&h=300&fit=crop&auto=format' },
    { id: 19, name: 'Rynex AI', cpu: 'AMD Threadripper 7960X', ram: '128GB DDR5 5600MHz', storage: '4TB NVMe SSD', gpu: 'RTX 5090 Ti 24GB', price: 6999, originalPrice: 8999, profit: 2000, rating: 4.9, reviews: 54, category: 'professional', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 20, name: 'Rynex Ultimate Pro', cpu: 'AMD Threadripper 7980X', ram: '256GB DDR5 5600MHz', storage: '8TB NVMe SSD', gpu: 'RTX 5090 Ti 24GB', price: 8999, originalPrice: 11999, profit: 3000, rating: 5.0, reviews: 23, category: 'professional', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 21, name: 'Rynex Dual GPU', cpu: 'AMD Threadripper 7980X', ram: '256GB DDR5 5600MHz', storage: '8TB NVMe SSD', gpu: 'Dual RTX 5090', price: 10999, originalPrice: 14999, profit: 4000, rating: 5.0, reviews: 15, category: 'professional', img: 'https://images.unsplash.com/photo-1600068474554-9e3e8a1b1b5b?w=400&h=300&fit=crop&auto=format' },
    { id: 22, name: 'Rynex Quantum', cpu: 'Intel Xeon W9-3495X', ram: '256GB DDR5 5600MHz', storage: '8TB NVMe SSD', gpu: 'Dual RTX 5090', price: 12999, originalPrice: 16999, profit: 4000, rating: 5.0, reviews: 8, category: 'professional', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 23, name: 'Rynex Supernova', cpu: 'AMD Threadripper 7995WX', ram: '512GB DDR5 5600MHz', storage: '12TB NVMe SSD', gpu: 'Dual RTX 5090', price: 15999, originalPrice: 20999, profit: 5000, rating: 5.0, reviews: 5, category: 'professional', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 24, name: 'Rynex Nebula', cpu: 'AMD Threadripper 7995WX', ram: '512GB DDR5 5600MHz', storage: '16TB NVMe SSD', gpu: 'Quad RTX 5090', price: 19999, originalPrice: 25999, profit: 6000, rating: 5.0, reviews: 3, category: 'professional', img: 'https://images.unsplash.com/photo-1600068474554-9e3e8a1b1b5b?w=400&h=300&fit=crop&auto=format' },
    { id: 25, name: 'Rynex Enterprise', cpu: 'AMD Threadripper 7995WX', ram: '1TB DDR5 5600MHz', storage: '32TB NVMe SSD', gpu: 'Quad RTX 5090', price: 29999, originalPrice: 39999, profit: 10000, rating: 5.0, reviews: 2, category: 'professional', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' }
];

// ===== CART =====
function getCart() {
    try {
        return JSON.parse(localStorage.getItem('rynexCart')) || [];
    } catch {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem('rynexCart', JSON.stringify(cart));
    updateCartCount();
}

function addToCart(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;
    const cart = getCart();
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart(cart);
    alert(product.name + ' added to cart!');
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    renderCart();
}

function updateCartCount() {
    const cart = getCart();
    const total = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    document.querySelectorAll('.cart-count').forEach(el => el.textContent = total);
}

function getCartTotal() {
    const cart = getCart();
    return cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
}

function renderCart() {
    const container = document.getElementById('cartItems');
    if (!container) return;
    const cart = getCart();
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
                <a href="index.html" class="btn btn-primary" style="display:inline-block; padding: 10px 30px;">Go to Catalog</a>
            </div>
        `;
        const totalContainer = document.getElementById('cartTotal');
        if (totalContainer) totalContainer.innerHTML = '';
        return;
    }
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="img-box">
                <img src="${item.img}" alt="${item.name}" />
            </div>
            <div class="info">
                <h4>${item.name}</h4>
                <div class="price">${item.price.toLocaleString()} € × ${item.quantity || 1}</div>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i> Remove
            </button>
        </div>
    `).join('');
    const total = getCartTotal();
    const totalContainer = document.getElementById('cartTotal');
    if (totalContainer) {
        totalContainer.innerHTML = `
            <div class="cart-total">
                <p style="color:#888; font-size:14px;">Total</p>
                <div class="total-price">${total.toLocaleString()} €</div>
                <button class="btn btn-primary" style="margin-top:16px; display:inline-block; padding: 12px 40px;" onclick="checkout()">
                    <i class="fas fa-credit-card"></i> Checkout
                </button>
            </div>
        `;
    }
}

function checkout() {
    alert('Thank you for your order! 🎉');
    localStorage.removeItem('rynexCart');
    renderCart();
    updateCartCount();
}

// ===== SUPPORT =====
function sendSupport(e) {
    e.preventDefault();
    document.getElementById('supportForm').style.display = 'none';
    document.getElementById('chatSuccess').style.display = 'block';
}

function resetSupport() {
    document.getElementById('supportForm').style.display = 'block';
    document.getElementById('chatSuccess').style.display = 'none';
    document.getElementById('supportForm').reset();
}

// ===== CUSTOM =====
function sendCustom(e) {
    e.preventDefault();
    document.getElementById('customForm').style.display = 'none';
    document.getElementById('customSuccess').style.display = 'block';
}

function resetCustom() {
    document.getElementById('customForm').style.display = 'block';
    document.getElementById('customSuccess').style.display = 'none';
    document.getElementById('customForm').reset();
}

// ===== HOME PAGE (filters + pagination) =====
let currentFilter = 'all';
let currentPage = 1;
const itemsPerPage = 4;

function renderProducts() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    const filtered = currentFilter === 'all' ? allProducts : allProducts.filter(p => p.category === currentFilter);
    const total = filtered.length;
    const totalPages = Math.ceil(total / itemsPerPage);
    if (currentPage > totalPages) currentPage = Math.max(1, totalPages);
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = filtered.slice(start, end);
    if (pageItems.length === 0) {
        grid.innerHTML = '<p style="color:#666; text-align:center; padding:40px; width:100%;">No products found</p>';
    } else {
        grid.innerHTML = pageItems.map(p => `
            <div class="product-card">
                <div class="img-box">
                    <img src="${p.img}" alt="${p.name}" loading="lazy" />
                </div>
                <span class="tag water"><i class="fas fa-droplet"></i> Liquid Cooling</span>
                <span class="cpu-badge"><i class="fas fa-microchip"></i> ${p.cpu}</span>
                <h3>${p.name}</h3>
                <div class="rating">
                    <i class="fas fa-star"></i> ${p.rating} <span>(${p.reviews} reviews)</span>
                </div>
                <div class="specs-line">
                    <span><i class="fas fa-memory"></i> ${p.ram}</span>
                    <span><i class="fas fa-hdd"></i> ${p.storage}</span>
                    <span><i class="fas fa-tv"></i> ${p.gpu}</span>
                </div>
                <div class="price-row">
                    <span class="price">${p.price.toLocaleString()} €</span>
                    <span class="original">${p.originalPrice.toLocaleString()} €</span>
                    <span class="profit-badge"><i class="fas fa-coins"></i> +${p.profit}€</span>
                </div>
                <button class="btn btn-primary" onclick="addToCart(${p.id})">
                    <i class="fas fa-cart-plus"></i> Select
                </button>
            </div>
        `).join('');
    }
    const badge = document.getElementById('totalBadge');
    if (badge) badge.textContent = '🔥 ' + total + ' models';
    const pagination = document.getElementById('pagination');
    if (pagination) {
        if (totalPages <= 1) {
            pagination.innerHTML = '';
            return;
        }
        let html = '';
        for (let i = 1; i <= totalPages; i++) {
            html += `<a class="${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">${i}</a>`;
        }
        pagination.innerHTML = html;
    }
}

function goToPage(page) {
    currentPage = page;
    renderProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    // Home page
    if (document.getElementById('productGrid')) {
        const filterContainer = document.getElementById('filterContainer');
        if (filterContainer) {
            filterContainer.querySelectorAll('.pill').forEach(pill => {
                pill.addEventListener('click', function() {
                    filterContainer.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
                    this.classList.add('active');
                    currentFilter = this.dataset.filter;
                    currentPage = 1;
                    renderProducts();
                });
            });
        }
        renderProducts();
    }
    // Cart page
    if (document.getElementById('cartItems')) {
        renderCart();
    }
});
