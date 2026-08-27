// ===== 30 PRODUCTS =====
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
    alert(product.name + '
