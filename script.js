// =============================================
// 35 PC BUILDS — УНИКАЛЬНЫЕ ФОТО
// =============================================
const allProducts = [
    // BUDGET (4)
    { id: 1, name: 'Rynex Starter', cpu: 'AMD Ryzen 3 3100', ram: '8GB DDR4 3200MHz', storage: '256GB NVMe SSD', gpu: 'GT 1030 2GB', price: 420, originalPrice: 550, rating: 4.2, reviews: 34, category: 'budget', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 2, name: 'Rynex Core', cpu: 'Intel Core i3-12100F', ram: '16GB DDR4 3200MHz', storage: '512GB NVMe SSD', gpu: 'RX 6600 8GB', price: 720, originalPrice: 890, rating: 4.5, reviews: 89, category: 'budget', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 3, name: 'Rynex Lite', cpu: 'AMD Ryzen 5 4500', ram: '16GB DDR4 3200MHz', storage: '512GB NVMe SSD', gpu: 'GTX 1650 4GB', price: 580, originalPrice: 720, rating: 4.3, reviews: 67, category: 'budget', img: 'https://images.unsplash.com/photo-1600068474554-9e3e8a1b1b5b?w=400&h=300&fit=crop&auto=format' },
    { id: 4, name: 'Rynex Play', cpu: 'Intel Core i5-11400F', ram: '16GB DDR4 3200MHz', storage: '1TB NVMe SSD', gpu: 'RX 6500 XT 4GB', price: 790, originalPrice: 960, rating: 4.4, reviews: 112, category: 'budget', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    // GAMING (8)
    { id: 5, name: 'Rynex Gamer', cpu: 'AMD Ryzen 5 5600X', ram: '16GB DDR4 3600MHz', storage: '1TB NVMe SSD', gpu: 'RTX 3060 12GB', price: 980, originalPrice: 1200, rating: 4.7, reviews: 156, category: 'gaming', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 6, name: 'Rynex Pro', cpu: 'AMD Ryzen 7 5700X', ram: '32GB DDR4 3600MHz', storage: '1TB NVMe SSD', gpu: 'RTX 4060 8GB', price: 1250, originalPrice: 1550, rating: 4.8, reviews: 210, category: 'gaming', img: 'https://images.unsplash.com/photo-1600068474554-9e3e8a1b1b5b?w=400&h=300&fit=crop&auto=format' },
    { id: 7, name: 'Rynex Performance', cpu: 'AMD Ryzen 7 5800X', ram: '32GB DDR4 3600MHz', storage: '2TB NVMe SSD', gpu: 'RTX 4070 12GB', price: 1750, originalPrice: 2150, rating: 4.9, reviews: 312, category: 'gaming', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 8, name: 'Rynex Ultimate', cpu: 'AMD Ryzen 9 5900X', ram: '64GB DDR4 3600MHz', storage: '2TB NVMe SSD', gpu: 'RTX 4070 Ti 12GB', price: 2200, originalPrice: 2700, rating: 4.9, reviews: 189, category: 'gaming', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    // HOME (4)
    { id: 9, name: 'Rynex Home', cpu: 'AMD Ryzen 5 5500', ram: '16GB DDR4 3200MHz', storage: '512GB NVMe SSD', gpu: 'GTX 1660 6GB', price: 650, originalPrice: 800, rating: 4.5, reviews: 89, category: 'home', img: 'https://images.unsplash.com/photo-1600068474554-9e3e8a1b1b5b?w=400&h=300&fit=crop&auto=format' },
    { id: 10, name: 'Rynex Family', cpu: 'Intel Core i5-11400', ram: '16GB DDR4 3200MHz', storage: '1TB NVMe SSD', gpu: 'RTX 3050 8GB', price: 850, originalPrice: 1050, rating: 4.6, reviews: 134, category: 'home', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 11, name: 'Rynex Studio', cpu: 'AMD Ryzen 7 5700G', ram: '32GB DDR4 3200MHz', storage: '1TB NVMe SSD', gpu: 'RTX 4060 8GB', price: 1200, originalPrice: 1500, rating: 4.7, reviews: 167, category: 'home', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 12, name: 'Rynex Creator', cpu: 'Intel Core i7-12700', ram: '32GB DDR4 3200MHz', storage: '2TB NVMe SSD', gpu: 'RTX 4070 12GB', price: 1700, originalPrice: 2100, rating: 4.8, reviews: 198, category: 'home', img: 'https://images.unsplash.com/photo-1600068474554-9e3e8a1b1b5b?w=400&h=300&fit=crop&auto=format' },
    // ADVANCED (4)
    { id: 13, name: 'Rynex Imperial', cpu: 'AMD Ryzen 7 5700X', ram: '32GB DDR4 3600MHz', storage: '1TB NVMe SSD', gpu: 'RTX 5070 12GB', price: 2100, originalPrice: 2600, rating: 4.6, reviews: 523, category: 'advanced', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 14, name: 'Rynex Elite', cpu: 'AMD Ryzen 9 5900X', ram: '64GB DDR4 3600MHz', storage: '2TB NVMe SSD', gpu: 'RTX 5070 Ti 16GB', price: 2800, originalPrice: 3500, rating: 4.8, reviews: 178, category: 'advanced', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 15, name: 'Rynex Titan', cpu: 'Intel Core i7-13700K', ram: '64GB DDR5 6000MHz', storage: '2TB NVMe SSD', gpu: 'RTX 5080 16GB', price: 3800, originalPrice: 4700, rating: 4.9, reviews: 96, category: 'advanced', img: 'https://images.unsplash.com/photo-1600068474554-9e3e8a1b1b5b?w=400&h=300&fit=crop&auto=format' },
    { id: 16, name: 'Rynex Dominator', cpu: 'AMD Ryzen 9 7950X', ram: '64GB DDR5 6000MHz', storage: '2TB NVMe SSD', gpu: 'RTX 5090 24GB', price: 4800, originalPrice: 6000, rating: 4.9, reviews: 67, category: 'advanced', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    // PROFESSIONAL (19 шт)
    { id: 17, name: 'Rynex Workstation', cpu: 'AMD Ryzen 9 7900X', ram: '64GB DDR5 5200MHz', storage: '2TB NVMe SSD', gpu: 'RTX 4080 16GB', price: 3200, originalPrice: 4000, rating: 4.8, reviews: 145, category: 'professional', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 18, name: 'Rynex Render', cpu: 'Intel Core i9-13900K', ram: '128GB DDR5 5600MHz', storage: '4TB NVMe SSD', gpu: 'RTX 5090 24GB', price: 5200, originalPrice: 6600, rating: 4.9, reviews: 89, category: 'professional', img: 'https://images.unsplash.com/photo-1600068474554-9e3e8a1b1b5b?w=400&h=300&fit=crop&auto=format' },
    { id: 19, name: 'Rynex AI', cpu: 'AMD Threadripper 7960X', ram: '128GB DDR5 5600MHz', storage: '4TB NVMe SSD', gpu: 'RTX 5090 Ti 24GB', price: 7200, originalPrice: 9000, rating: 4.9, reviews: 54, category: 'professional', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 20, name: 'Rynex Ultimate Pro', cpu: 'AMD Threadripper 7980X', ram: '256GB DDR5 5600MHz', storage: '8TB NVMe SSD', gpu: 'RTX 5090 Ti 24GB', price: 9500, originalPrice: 12000, rating: 5.0, reviews: 23, category: 'professional', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 21, name: 'Rynex Speed', cpu: 'AMD Ryzen 5 7600X', ram: '16GB DDR5 5200MHz', storage: '1TB NVMe SSD', gpu: 'RX 7600 8GB', price: 899, originalPrice: 1149, rating: 4.6, reviews: 45, category: 'gaming', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 22, name: 'Rynex XT', cpu: 'AMD Ryzen 7 7700X', ram: '32GB DDR5 6000MHz', storage: '1TB NVMe SSD', gpu: 'RX 7700 XT 12GB', price: 1299, originalPrice: 1699, rating: 4.8, reviews: 78, category: 'gaming', img: 'https://images.unsplash.com/photo-1600068474554-9e3e8a1b1b5b?w=400&h=300&fit=crop&auto=format' },
    { id: 23, name: 'Rynex 3D', cpu: 'AMD Ryzen 7 7800X3D', ram: '32GB DDR5 6000MHz', storage: '2TB NVMe SSD', gpu: 'RX 7800 XT 16GB', price: 1899, originalPrice: 2499, rating: 4.9, reviews: 112, category: 'advanced', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 24, name: 'Rynex GRE', cpu: 'AMD Ryzen 9 7900X', ram: '64GB DDR5 6000MHz', storage: '2TB NVMe SSD', gpu: 'RX 7900 GRE 16GB', price: 2399, originalPrice: 3099, rating: 4.9, reviews: 67, category: 'advanced', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 25, name: 'Rynex XTX', cpu: 'AMD Ryzen 9 7950X', ram: '64GB DDR5 6000MHz', storage: '4TB NVMe SSD', gpu: 'RX 7900 XTX 24GB', price: 3499, originalPrice: 4599, rating: 5.0, reviews: 34, category: 'professional', img: 'https://images.unsplash.com/photo-1600068474554-9e3e8a1b1b5b?w=400&h=300&fit=crop&auto=format' },
    { id: 26, name: 'Rynex Max', cpu: 'AMD Ryzen 9 7950X3D', ram: '128GB DDR5 6000MHz', storage: '8TB NVMe SSD', gpu: 'RX 7900 XTX 24GB (Dual)', price: 5999, originalPrice: 7999, rating: 5.0, reviews: 21, category: 'professional', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 27, name: 'Rynex Ultra', cpu: 'AMD Threadripper 7970X', ram: '256GB DDR5 5600MHz', storage: '8TB NVMe SSD', gpu: 'Quad RX 7900 XTX', price: 11999, originalPrice: 15999, rating: 5.0, reviews: 12, category: 'professional', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 28, name: 'Rynex Titan X', cpu: 'AMD Threadripper 7980X', ram: '256GB DDR5 5600MHz', storage: '12TB NVMe SSD', gpu: 'Quad RX 7900 XTX', price: 14999, originalPrice: 19999, rating: 5.0, reviews: 7, category: 'professional', img: 'https://images.unsplash.com/photo-1600068474554-9e3e8a1b1b5b?w=400&h=300&fit=crop&auto=format' },
    { id: 29, name: 'Rynex Extreme', cpu: 'AMD Threadripper 7995WX', ram: '512GB DDR5 5600MHz', storage: '16TB NVMe SSD', gpu: 'Quad RX 7900 XTX', price: 24999, originalPrice: 32999, rating: 5.0, reviews: 4, category: 'professional', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 30, name: 'Rynex Infinity', cpu: 'AMD Threadripper 7995WX', ram: '1TB DDR5 5600MHz', storage: '32TB NVMe SSD', gpu: 'Octa RX 7900 XTX', price: 39999, originalPrice: 52999, rating: 5.0, reviews: 2, category: 'professional', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 31, name: 'Rynex Apex', cpu: 'AMD Ryzen 7 5800X3D', ram: '32GB DDR4 3600MHz', storage: '1TB NVMe SSD', gpu: 'RX 6800 XT 16GB', price: 1399, originalPrice: 1799, rating: 4.8, reviews: 89, category: 'gaming', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 32, name: 'Rynex Prime', cpu: 'Intel Core i7-13700KF', ram: '32GB DDR5 6000MHz', storage: '2TB NVMe SSD', gpu: 'RTX 4080 16GB', price: 2999, originalPrice: 3799, rating: 4.9, reviews: 56, category: 'advanced', img: 'https://images.unsplash.com/photo-1600068474554-9e3e8a1b1b5b?w=400&h=300&fit=crop&auto=format' },
    { id: 33, name: 'Rynex Vision', cpu: 'AMD Ryzen 9 7900X', ram: '64GB DDR5 6000MHz', storage: '4TB NVMe SSD', gpu: 'RX 7900 XTX 24GB', price: 3299, originalPrice: 4199, rating: 4.9, reviews: 43, category: 'professional', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 34, name: 'Rynex Sigma', cpu: 'AMD Threadripper 7960X', ram: '128GB DDR5 5600MHz', storage: '8TB NVMe SSD', gpu: 'Dual RTX 5090', price: 8999, originalPrice: 11500, rating: 5.0, reviews: 18, category: 'professional', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 35, name: 'Rynex Omega', cpu: 'AMD Threadripper 7980X', ram: '512GB DDR5 5600MHz', storage: '16TB NVMe SSD', gpu: 'Quad RTX 5090', price: 22999, originalPrice: 28999, rating: 5.0, reviews: 6, category: 'professional', img: 'https://images.unsplash.com/photo-1600068474554-9e3e8a1b1b5b?w=400&h=300&fit=crop&auto=format' }
];

// =============================================
// МНОГО КОМПОНЕНТОВ (более 100) с уникальными фото
// =============================================
const allComponents = [
    // ===== CPU (10 шт) =====
    { id: 101, name: 'AMD Ryzen 5 5600X', category: 'cpu', price: 199, originalPrice: 249, img: 'https://images.unsplash.com/photo-1591799265444-d66432b9c5a6?w=400&h=300&fit=crop&auto=format' },
    { id: 102, name: 'AMD Ryzen 7 5800X', category: 'cpu', price: 299, originalPrice: 379, img: 'https://images.unsplash.com/photo-1591799265444-d66432b9c5a6?w=400&h=300&fit=crop&auto=format' },
    { id: 103, name: 'AMD Ryzen 9 5900X', category: 'cpu', price: 449, originalPrice: 569, img: 'https://images.unsplash.com/photo-1591799265444-d66432b9c5a6?w=400&h=300&fit=crop&auto=format' },
    { id: 104, name: 'Intel Core i7-12700K', category: 'cpu', price: 349, originalPrice: 429, img: 'https://images.unsplash.com/photo-1591799265444-d66432b9c5a6?w=400&h=300&fit=crop&auto=format' },
    { id: 105, name: 'Intel Core i9-13900K', category: 'cpu', price: 629, originalPrice: 789, img: 'https://images.unsplash.com/photo-1591799265444-d66432b9c5a6?w=400&h=300&fit=crop&auto=format' },
    { id: 106, name: 'AMD Ryzen 7 5700X', category: 'cpu', price: 279, originalPrice: 349, img: 'https://images.unsplash.com/photo-1591799265444-d66432b9c5a6?w=400&h=300&fit=crop&auto=format' },
    { id: 107, name: 'AMD Ryzen 5 5600G', category: 'cpu', price: 159, originalPrice: 199, img: 'https://images.unsplash.com/photo-1591799265444-d66432b9c5a6?w=400&h=300&fit=crop&auto=format' },
    { id: 108, name: 'Intel Core i5-12600K', category: 'cpu', price: 289, originalPrice: 359, img: 'https://images.unsplash.com/photo-1591799265444-d66432b9c5a6?w=400&h=300&fit=crop&auto=format' },
    { id: 109, name: 'Intel Core i5-13600K', category: 'cpu', price: 329, originalPrice: 409, img: 'https://images.unsplash.com/photo-1591799265444-d66432b9c5a6?w=400&h=300&fit=crop&auto=format' },
    { id: 110, name: 'AMD Ryzen 9 7950X', category: 'cpu', price: 599, originalPrice: 749, img: 'https://images.unsplash.com/photo-1591799265444-d66432b9c5a6?w=400&h=300&fit=crop&auto=format' },

    // ===== GPU (15 шт) =====
    { id: 201, name: 'NVIDIA RTX 3060 12GB', category: 'gpu', price: 349, originalPrice: 429, img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 202, name: 'NVIDIA RTX 4060 8GB', category: 'gpu', price: 499, originalPrice: 629, img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 203, name: 'NVIDIA RTX 4070 12GB', category: 'gpu', price: 599, originalPrice: 749, img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 204, name: 'NVIDIA RTX 4080 16GB', category: 'gpu', price: 1199, originalPrice: 1499, img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 205, name: 'NVIDIA RTX 4090 24GB', category: 'gpu', price: 1599, originalPrice: 1999, img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 206, name: 'AMD RX 6600 8GB', category: 'gpu', price: 249, originalPrice: 319, img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 207, name: 'AMD RX 6700 XT 12GB', category: 'gpu', price: 399, originalPrice: 499, img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 208, name: 'AMD RX 6800 XT 16GB', category: 'gpu', price: 549, originalPrice: 699, img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 209, name: 'AMD RX 6900 XT 16GB', category: 'gpu', price: 699, originalPrice: 899, img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 210, name: 'NVIDIA RTX 4070 Ti 12GB', category: 'gpu', price: 799, originalPrice: 999, img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 211, name: 'NVIDIA RTX 4080 Super 16GB', category: 'gpu', price: 1299, originalPrice: 1599, img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 212, name: 'AMD RX 7800 XT 16GB', category: 'gpu', price: 549, originalPrice: 699, img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 213, name: 'AMD RX 7900 GRE 16GB', category: 'gpu', price: 599, originalPrice: 769, img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 214, name: 'AMD RX 7900 XT 20GB', category: 'gpu', price: 799, originalPrice: 999, img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 215, name: 'AMD RX 7900 XTX 24GB', category: 'gpu', price: 999, originalPrice: 1299, img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },

    // ===== RAM (12 шт) =====
    { id: 301, name: 'Corsair Vengeance 16GB DDR4 3200MHz', category: 'ram', price: 79, originalPrice: 99, img: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=300&fit=crop&auto=format' },
    { id: 302, name: 'Corsair Vengeance 32GB DDR4 3600MHz', category: 'ram', price: 149, originalPrice: 189, img: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=300&fit=crop&auto=format' },
    { id: 303, name: 'G.Skill Trident Z5 32GB DDR5 6000MHz', category: 'ram', price: 199, originalPrice: 249, img: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=300&fit=crop&auto=format' },
    { id: 304, name: 'G.Skill Trident Z5 64GB DDR5 6000MHz', category: 'ram', price: 349, originalPrice: 429, img: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=300&fit=crop&auto=format' },
    { id: 305, name: 'Kingston Fury Beast 16GB DDR4 3200MHz', category: 'ram', price: 69, originalPrice: 89, img: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=300&fit=crop&auto=format' },
    { id: 306, name: 'Kingston Fury Renegade 32GB DDR5 6000MHz', category: 'ram', price: 189, originalPrice: 239, img: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=300&fit=crop&auto=format' },
    { id: 307, name: 'Crucial Ballistix 16GB DDR4 3600MHz', category: 'ram', price: 89, originalPrice: 109, img: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=300&fit=crop&auto=format' },
    { id: 308, name: 'Crucial Pro 32GB DDR5 5600MHz', category: 'ram', price: 169, originalPrice: 209, img: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=300&fit=crop&auto=format' },
    { id: 309, name: 'TeamGroup T-Force Delta 16GB DDR4 3200MHz', category: 'ram', price: 75, originalPrice: 95, img: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=300&fit=crop&auto=format' },
    { id: 310, name: 'TeamGroup T-Force Vulcan 32GB DDR5 6000MHz', category: 'ram', price: 179, originalPrice: 229, img: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=300&fit=crop&auto=format' },
    { id: 311, name: 'Corsair Dominator Platinum 64GB DDR5 6000MHz', category: 'ram', price: 449, originalPrice: 569, img: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=300&fit=crop&auto=format' },
    { id: 312, name: 'G.Skill Ripjaws V 16GB DDR4 3200MHz', category: 'ram', price: 69, originalPrice: 89, img: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=300&fit=crop&auto=format' },

    // ===== Storage (10 шт) =====
    { id: 401, name: 'Samsung 980 500GB NVMe SSD', category: 'storage', price: 59, originalPrice: 79, img: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop&auto=format' },
    { id: 402, name: 'Samsung 980 1TB NVMe SSD', category: 'storage', price: 109, originalPrice: 139, img: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop&auto=format' },
    { id: 403, name: 'Samsung 990 Pro 2TB NVMe SSD', category: 'storage', price: 229, originalPrice: 289, img: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop&auto=format' },
    { id: 404, name: 'Seagate FireCuda 4TB NVMe SSD', category: 'storage', price: 449, originalPrice: 569, img: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop&auto=format' },
    { id: 405, name: 'WD Black SN770 1TB NVMe SSD', category: 'storage', price: 99, originalPrice: 129, img: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop&auto=format' },
    { id: 406, name: 'WD Black SN850X 2TB NVMe SSD', category: 'storage', price: 219, originalPrice: 279, img: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop&auto=format' },
    { id: 407, name: 'Crucial P3 500GB NVMe SSD', category: 'storage', price: 49, originalPrice: 69, img: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop&auto=format' },
    { id: 408, name: 'Crucial P5 Plus 1TB NVMe SSD', category: 'storage', price: 89, originalPrice: 119, img: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop&auto=format' },
    { id: 409, name: 'Seagate BarraCuda 2TB 3.5" HDD', category: 'storage', price: 59, originalPrice: 79, img: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop&auto=format' },
    { id: 410, name: 'Seagate BarraCuda 4TB 3.5" HDD', category: 'storage', price: 89, originalPrice: 119, img: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop&auto=format' },

    // ===== Motherboard (10 шт) =====
    { id: 501, name: 'ASUS ROG Strix B550-F Gaming', category: 'motherboard', price: 189, originalPrice: 239, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 502, name: 'MSI MAG Z690 Tomahawk WiFi', category: 'motherboard', price: 269, originalPrice: 339, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 503, name: 'ASUS ROG Maximus Z790 Hero', category: 'motherboard', price: 499, originalPrice: 629, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 504, name: 'Gigabyte X570S AORUS Master', category: 'motherboard', price: 349, originalPrice: 439, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 505, name: 'ASRock B660M Steel Legend', category: 'motherboard', price: 159, originalPrice: 199, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 506, name: 'MSI MPG X670E Carbon WiFi', category: 'motherboard', price: 399, originalPrice: 499, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 507, name: 'ASUS TUF Gaming B550-Plus', category: 'motherboard', price: 169, originalPrice: 209, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 508, name: 'Gigabyte B760M DS3H', category: 'motherboard', price: 139, originalPrice: 169, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 509, name: 'ASRock Z790 Pro RS', category: 'motherboard', price: 219, originalPrice: 269, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 510, name: 'MSI MAG B550 Tomahawk', category: 'motherboard', price: 189, originalPrice: 239, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },

    // ===== PSU (10 шт) =====
    { id: 601, name: 'Corsair RM750x 750W Gold', category: 'psu', price: 129, originalPrice: 169, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 602, name: 'Corsair RM850x 850W Gold', category: 'psu', price: 159, originalPrice: 209, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 603, name: 'Seasonic Prime TX-1000 1000W Titanium', category: 'psu', price: 329, originalPrice: 429, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 604, name: 'EVGA SuperNOVA 850 G5', category: 'psu', price: 149, originalPrice: 189, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 605, name: 'Be Quiet! Straight Power 11 750W', category: 'psu', price: 139, originalPrice: 179, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 606, name: 'Corsair HX1200 1200W Platinum', category: 'psu', price: 399, originalPrice: 499, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 607, name: 'Seasonic Focus GX-850 850W Gold', category: 'psu', price: 169, originalPrice: 219, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 608, name: 'EVGA 650 B5 650W Bronze', category: 'psu', price: 89, originalPrice: 119, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 609, name: 'Be Quiet! Dark Power 13 1000W', category: 'psu', price: 279, originalPrice: 349, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 610, name: 'Corsair RM1000x 1000W Gold', category: 'psu', price: 199, originalPrice: 249, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },

    // ===== Case (10 шт) =====
    { id: 701, name: 'NZXT H510 Elite', category: 'case', price: 149, originalPrice: 189, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 702, name: 'Lian Li PC-O11 Dynamic', category: 'case', price: 159, originalPrice: 199, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 703, name: 'Corsair 5000D Airflow', category: 'case', price: 169, originalPrice: 219, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 704, name: 'Fractal Design Meshify C', category: 'case', price: 99, originalPrice: 129, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 705, name: 'Phanteks Eclipse P400A', category: 'case', price: 89, originalPrice: 119, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 706, name: 'NZXT H7 Flow', category: 'case', price: 129, originalPrice: 169, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 707, name: 'Corsair 4000D Airflow', category: 'case', price: 129, originalPrice: 169, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 708, name: 'Lian Li Lancool II Mesh', category: 'case', price: 119, originalPrice: 149, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 709, name: 'Fractal Design Define 7', category: 'case', price: 159, originalPrice: 199, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 710, name: 'Phanteks Eclipse G360A', category: 'case', price: 109, originalPrice: 139, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },

    // ===== Cooling (10 шт) =====
    { id: 801, name: 'NZXT Kraken X63 280mm AIO', category: 'cooling', price: 149, originalPrice: 189, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 802, name: 'Corsair iCUE H150i Elite 360mm AIO', category: 'cooling', price: 179, originalPrice: 229, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 803, name: 'Noctua NH-D15 Air Cooler', category: 'cooling', price: 99, originalPrice: 129, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 804, name: 'Cooler Master Hyper 212 Black', category: 'cooling', price: 49, originalPrice: 69, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 805, name: 'Arctic Liquid Freezer II 360mm', category: 'cooling', price: 139, originalPrice: 179, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 806, name: 'NZXT Kraken Z63 280mm LCD', category: 'cooling', price: 199, originalPrice: 249, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 807, name: 'Corsair H100i RGB 240mm AIO', category: 'cooling', price: 149, originalPrice: 189, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 808, name: 'Noctua NH-U12A', category: 'cooling', price: 89, originalPrice: 119, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 809, name: 'Be Quiet! Dark Rock Pro 4', category: 'cooling', price: 89, originalPrice: 119, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 810, name: 'Cooler Master MasterLiquid ML360R', category: 'cooling', price: 159, originalPrice: 199, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' }
];

// =============================================
// ПОИСК ПО КОМПОНЕНТАМ + ДИНАМИЧЕСКОЕ СОЗДАНИЕ ПОЛЯ
// =============================================
let componentSearchQuery = '';

function searchComponents() {
    const input = document.getElementById('componentSearch');
    if (input) {
        componentSearchQuery = input.value.toLowerCase().trim();
        currentComponentPage = 1;
        renderComponents();
    }
}

// Если поля поиска нет в HTML — создаём его
function ensureSearchBar() {
    const container = document.querySelector('.container');
    if (!container) return;
    let searchBar = document.getElementById('componentSearch');
    if (!searchBar) {
        const wrapper = document.createElement('div');
        wrapper.className = 'search-bar';
        wrapper.innerHTML = `
            <input type="text" id="componentSearch" placeholder="🔍 Search components by name..." oninput="searchComponents()" />
        `;
        // Вставляем перед фильтрами
        const filters = document.getElementById('componentFilterContainer');
        if (filters) {
            container.insertBefore(wrapper, filters);
        } else {
            container.prepend(wrapper);
        }
    }
}

// =============================================
// КОРЗИНА
// =============================================
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
    let product = allProducts.find(p => p.id === productId);
    if (!product) {
        product = allComponents.find(c => c.id === productId);
    }
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

// =============================================
// SUPPORT & CUSTOM
// =============================================
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

// =============================================
// HOME PAGE (сборки)
// =============================================
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
                </div>
                <div style="font-size: 11px; color: #666; margin: 6px 0 10px; line-height: 1.3;">
                    <i class="fas fa-info-circle"></i> Prices may change. The site does not update prices automatically.
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

// =============================================
// COMPONENTS PAGE
// =============================================
let currentComponentFilter = 'all';
let currentComponentPage = 1;
const componentItemsPerPage = 6;

function renderComponents() {
    const grid = document.getElementById('componentGrid');
    if (!grid) return;

    let filtered = allComponents;
    if (currentComponentFilter !== 'all') {
        filtered = filtered.filter(c => c.category === currentComponentFilter);
    }
    if (componentSearchQuery) {
        filtered = filtered.filter(c => c.name.toLowerCase().includes(componentSearchQuery));
    }

    const total = filtered.length;
    const totalPages = Math.ceil(total / componentItemsPerPage);
    if (currentComponentPage > totalPages) currentComponentPage = Math.max(1, totalPages);
    const start = (currentComponentPage - 1) * componentItemsPerPage;
    const end = start + componentItemsPerPage;
    const pageItems = filtered.slice(start, end);

    if (pageItems.length === 0) {
        grid.innerHTML = '<p style="color:#666; text-align:center; padding:40px; width:100%;">No components found</p>';
    } else {
        grid.innerHTML = pageItems.map(c => `
            <div class="product-card">
                <div class="img-box">
                    <img src="${c.img}" alt="${c.name}" loading="lazy" />
                </div>
                <span class="tag" style="background:#1a2630; color:#6aafef; border-color:#2a3a4a; text-transform:uppercase; font-size:11px;">
                    <i class="fas fa-tag"></i> ${c.category}
                </span>
                <h3>${c.name}</h3>
                <div class="price-row">
                    <span class="price">${c.price.toLocaleString()} €</span>
                    <span class="original">${c.originalPrice.toLocaleString()} €</span>
                </div>
                <div style="font-size: 11px; color: #666; margin: 6px 0 10px; line-height: 1.3;">
                    <i class="fas fa-info-circle"></i> Prices may change. The site does not update prices automatically.
                </div>
                <button class="btn btn-primary" onclick="addToCart(${c.id})">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        `).join('');
    }

    const badge = document.getElementById('componentBadge');
    if (badge) badge.textContent = '🔥 ' + total + ' items';
    const pagination = document.getElementById('componentPagination');
    if (pagination) {
        if (totalPages <= 1) {
            pagination.innerHTML = '';
            return;
        }
        let html = '';
        for (let i = 1; i <= totalPages; i++) {
            html += `<a class="${i === currentComponentPage ? 'active' : ''}" onclick="goToComponentPage(${i})">${i}</a>`;
        }
        pagination.innerHTML = html;
    }
}

function goToComponentPage(page) {
    currentComponentPage = page;
    renderComponents();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// =============================================
// INIT
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    // Создаём поиск, если его нет
    ensureSearchBar();

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

    // Components page
    if (document.getElementById('componentGrid')) {
        const filterContainer = document.getElementById('componentFilterContainer');
        if (filterContainer) {
            filterContainer.querySelectorAll('.pill').forEach(pill => {
                pill.addEventListener('click', function() {
                    filterContainer.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
                    this.classList.add('active');
                    currentComponentFilter = this.dataset.filter;
                    currentComponentPage = 1;
                    renderComponents();
                });
            });
        }
        renderComponents();
    }

    // Cart page
    if (document.getElementById('cartItems')) {
        renderCart();
    }
});
