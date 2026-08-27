// =============================================
// 35 PC BUILDS (AMD + NVIDIA, с акцентом на AMD Ryzen и RX)
// =============================================
const allProducts = [
    // ===== BUDGET (AMD) =====
    { id: 1, name: 'Rynex Starter', cpu: 'AMD Ryzen 3 3100', ram: '8GB DDR4 3200MHz', storage: '256GB NVMe SSD', gpu: 'RX 550 2GB', price: 299, originalPrice: 399, rating: 4.2, reviews: 34, category: 'budget', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 2, name: 'Rynex Core', cpu: 'AMD Ryzen 5 4500', ram: '16GB DDR4 3200MHz', storage: '512GB NVMe SSD', gpu: 'RX 6500 XT 4GB', price: 449, originalPrice: 599, rating: 4.5, reviews: 89, category: 'budget', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 3, name: 'Rynex Lite', cpu: 'AMD Ryzen 5 5500', ram: '16GB DDR4 3200MHz', storage: '512GB NVMe SSD', gpu: 'RX 6600 8GB', price: 549, originalPrice: 699, rating: 4.3, reviews: 67, category: 'budget', img: 'https://images.unsplash.com/photo-1600068474554-9e3e8a1b1b5b?w=400&h=300&fit=crop&auto=format' },
    { id: 4, name: 'Rynex Play', cpu: 'AMD Ryzen 5 5600X', ram: '16GB DDR4 3600MHz', storage: '1TB NVMe SSD', gpu: 'RX 6600 XT 8GB', price: 649, originalPrice: 849, rating: 4.4, reviews: 112, category: 'budget', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },

    // ===== GAMING (AMD) =====
    { id: 5, name: 'Rynex Gamer', cpu: 'AMD Ryzen 7 5700X', ram: '16GB DDR4 3600MHz', storage: '1TB NVMe SSD', gpu: 'RX 6700 XT 12GB', price: 849, originalPrice: 1099, rating: 4.7, reviews: 156, category: 'gaming', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 6, name: 'Rynex Pro', cpu: 'AMD Ryzen 7 5800X', ram: '32GB DDR4 3600MHz', storage: '1TB NVMe SSD', gpu: 'RX 6800 16GB', price: 1149, originalPrice: 1499, rating: 4.8, reviews: 210, category: 'gaming', img: 'https://images.unsplash.com/photo-1600068474554-9e3e8a1b1b5b?w=400&h=300&fit=crop&auto=format' },
    { id: 7, name: 'Rynex Performance', cpu: 'AMD Ryzen 7 5800X3D', ram: '32GB DDR4 3600MHz', storage: '2TB NVMe SSD', gpu: 'RX 6900 XT 16GB', price: 1599, originalPrice: 2099, rating: 4.9, reviews: 312, category: 'gaming', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 8, name: 'Rynex Ultimate', cpu: 'AMD Ryzen 9 5900X', ram: '64GB DDR4 3600MHz', storage: '2TB NVMe SSD', gpu: 'RX 6950 XT 16GB', price: 1999, originalPrice: 2599, rating: 4.9, reviews: 189, category: 'gaming', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },

    // ===== HOME (AMD) =====
    { id: 9, name: 'Rynex Home', cpu: 'AMD Ryzen 5 5600G', ram: '16GB DDR4 3200MHz', storage: '512GB NVMe SSD', gpu: 'RX 6400 4GB', price: 599, originalPrice: 749, rating: 4.5, reviews: 89, category: 'home', img: 'https://images.unsplash.com/photo-1600068474554-9e3e8a1b1b5b?w=400&h=300&fit=crop&auto=format' },
    { id: 10, name: 'Rynex Family', cpu: 'AMD Ryzen 7 5700G', ram: '16GB DDR4 3200MHz', storage: '1TB NVMe SSD', gpu: 'RX 6600 8GB', price: 749, originalPrice: 949, rating: 4.6, reviews: 134, category: 'home', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 11, name: 'Rynex Studio', cpu: 'AMD Ryzen 7 5800X', ram: '32GB DDR4 3600MHz', storage: '1TB NVMe SSD', gpu: 'RX 6700 XT 12GB', price: 1099, originalPrice: 1399, rating: 4.7, reviews: 167, category: 'home', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 12, name: 'Rynex Creator', cpu: 'AMD Ryzen 9 5900X', ram: '32GB DDR4 3600MHz', storage: '2TB NVMe SSD', gpu: 'RX 6800 XT 16GB', price: 1549, originalPrice: 1999, rating: 4.8, reviews: 198, category: 'home', img: 'https://images.unsplash.com/photo-1600068474554-9e3e8a1b1b5b?w=400&h=300&fit=crop&auto=format' },

    // ===== ADVANCED (AMD) =====
    { id: 13, name: 'Rynex Imperial', cpu: 'AMD Ryzen 7 5700X', ram: '32GB DDR4 3600MHz', storage: '1TB NVMe SSD', gpu: 'RX 7600 8GB', price: 1999, originalPrice: 2599, rating: 4.6, reviews: 523, category: 'advanced', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 14, name: 'Rynex Elite', cpu: 'AMD Ryzen 9 5900X', ram: '64GB DDR4 3600MHz', storage: '2TB NVMe SSD', gpu: 'RX 7700 XT 12GB', price: 2599, originalPrice: 3399, rating: 4.8, reviews: 178, category: 'advanced', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 15, name: 'Rynex Titan', cpu: 'AMD Ryzen 9 7950X', ram: '64GB DDR5 6000MHz', storage: '2TB NVMe SSD', gpu: 'RX 7800 XT 16GB', price: 3599, originalPrice: 4699, rating: 4.9, reviews: 96, category: 'advanced', img: 'https://images.unsplash.com/photo-1600068474554-9e3e8a1b1b5b?w=400&h=300&fit=crop&auto=format' },
    { id: 16, name: 'Rynex Dominator', cpu: 'AMD Ryzen 9 7950X', ram: '64GB DDR5 6000MHz', storage: '2TB NVMe SSD', gpu: 'RX 7900 GRE 16GB', price: 4599, originalPrice: 5999, rating: 4.9, reviews: 67, category: 'advanced', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },

    // ===== PROFESSIONAL (AMD) =====
    { id: 17, name: 'Rynex Workstation', cpu: 'AMD Ryzen 9 7900X', ram: '64GB DDR5 5200MHz', storage: '2TB NVMe SSD', gpu: 'RX 7900 XT 20GB', price: 2999, originalPrice: 3899, rating: 4.8, reviews: 145, category: 'professional', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 18, name: 'Rynex Render', cpu: 'AMD Ryzen 9 7950X', ram: '128GB DDR5 5600MHz', storage: '4TB NVMe SSD', gpu: 'RX 7900 XTX 24GB', price: 4999, originalPrice: 6499, rating: 4.9, reviews: 89, category: 'professional', img: 'https://images.unsplash.com/photo-1600068474554-9e3e8a1b1b5b?w=400&h=300&fit=crop&auto=format' },
    { id: 19, name: 'Rynex AI', cpu: 'AMD Threadripper 7960X', ram: '128GB DDR5 5600MHz', storage: '4TB NVMe SSD', gpu: 'RX 7900 XTX 24GB (Dual)', price: 6999, originalPrice: 8999, rating: 4.9, reviews: 54, category: 'professional', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 20, name: 'Rynex Ultimate Pro', cpu: 'AMD Threadripper 7980X', ram: '256GB DDR5 5600MHz', storage: '8TB NVMe SSD', gpu: 'Dual RX 7900 XTX', price: 8999, originalPrice: 11999, rating: 5.0, reviews: 23, category: 'professional', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 21, name: 'Rynex Dual GPU', cpu: 'AMD Threadripper 7980X', ram: '256GB DDR5 5600MHz', storage: '8TB NVMe SSD', gpu: 'Dual RX 7900 XTX', price: 10999, originalPrice: 14999, rating: 5.0, reviews: 15, category: 'professional', img: 'https://images.unsplash.com/photo-1600068474554-9e3e8a1b1b5b?w=400&h=300&fit=crop&auto=format' },
    { id: 22, name: 'Rynex Quantum', cpu: 'AMD Threadripper 7980X', ram: '256GB DDR5 5600MHz', storage: '8TB NVMe SSD', gpu: 'Dual RX 7900 XTX', price: 12999, originalPrice: 16999, rating: 5.0, reviews: 8, category: 'professional', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 23, name: 'Rynex Supernova', cpu: 'AMD Threadripper 7995WX', ram: '512GB DDR5 5600MHz', storage: '12TB NVMe SSD', gpu: 'Dual RX 7900 XTX', price: 15999, originalPrice: 20999, rating: 5.0, reviews: 5, category: 'professional', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 24, name: 'Rynex Nebula', cpu: 'AMD Threadripper 7995WX', ram: '512GB DDR5 5600MHz', storage: '16TB NVMe SSD', gpu: 'Quad RX 7900 XTX', price: 19999, originalPrice: 25999, rating: 5.0, reviews: 3, category: 'professional', img: 'https://images.unsplash.com/photo-1600068474554-9e3e8a1b1b5b?w=400&h=300&fit=crop&auto=format' },
    { id: 25, name: 'Rynex Enterprise', cpu: 'AMD Threadripper 7995WX', ram: '1TB DDR5 5600MHz', storage: '32TB NVMe SSD', gpu: 'Quad RX 7900 XTX', price: 29999, originalPrice: 39999, rating: 5.0, reviews: 2, category: 'professional', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },

    // ===== НОВЫЕ СБОРКИ (AMD + RX) =====
    { id: 26, name: 'Rynex Speed', cpu: 'AMD Ryzen 5 7600X', ram: '16GB DDR5 5200MHz', storage: '1TB NVMe SSD', gpu: 'RX 7600 8GB', price: 899, originalPrice: 1149, rating: 4.6, reviews: 45, category: 'gaming', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 27, name: 'Rynex XT', cpu: 'AMD Ryzen 7 7700X', ram: '32GB DDR5 6000MHz', storage: '1TB NVMe SSD', gpu: 'RX 7700 XT 12GB', price: 1299, originalPrice: 1699, rating: 4.8, reviews: 78, category: 'gaming', img: 'https://images.unsplash.com/photo-1600068474554-9e3e8a1b1b5b?w=400&h=300&fit=crop&auto=format' },
    { id: 28, name: 'Rynex 3D', cpu: 'AMD Ryzen 7 7800X3D', ram: '32GB DDR5 6000MHz', storage: '2TB NVMe SSD', gpu: 'RX 7800 XT 16GB', price: 1899, originalPrice: 2499, rating: 4.9, reviews: 112, category: 'advanced', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 29, name: 'Rynex GRE', cpu: 'AMD Ryzen 9 7900X', ram: '64GB DDR5 6000MHz', storage: '2TB NVMe SSD', gpu: 'RX 7900 GRE 16GB', price: 2399, originalPrice: 3099, rating: 4.9, reviews: 67, category: 'advanced', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 30, name: 'Rynex XTX', cpu: 'AMD Ryzen 9 7950X', ram: '64GB DDR5 6000MHz', storage: '4TB NVMe SSD', gpu: 'RX 7900 XTX 24GB', price: 3499, originalPrice: 4599, rating: 5.0, reviews: 34, category: 'professional', img: 'https://images.unsplash.com/photo-1600068474554-9e3e8a1b1b5b?w=400&h=300&fit=crop&auto=format' },
    { id: 31, name: 'Rynex Max', cpu: 'AMD Ryzen 9 7950X3D', ram: '128GB DDR5 6000MHz', storage: '8TB NVMe SSD', gpu: 'RX 7900 XTX 24GB (Dual)', price: 5999, originalPrice: 7999, rating: 5.0, reviews: 21, category: 'professional', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 32, name: 'Rynex Ultra', cpu: 'AMD Threadripper 7970X', ram: '256GB DDR5 5600MHz', storage: '8TB NVMe SSD', gpu: 'Quad RX 7900 XTX', price: 11999, originalPrice: 15999, rating: 5.0, reviews: 12, category: 'professional', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 33, name: 'Rynex Titan X', cpu: 'AMD Threadripper 7980X', ram: '256GB DDR5 5600MHz', storage: '12TB NVMe SSD', gpu: 'Quad RX 7900 XTX', price: 14999, originalPrice: 19999, rating: 5.0, reviews: 7, category: 'professional', img: 'https://images.unsplash.com/photo-1600068474554-9e3e8a1b1b5b?w=400&h=300&fit=crop&auto=format' },
    { id: 34, name: 'Rynex Extreme', cpu: 'AMD Threadripper 7995WX', ram: '512GB DDR5 5600MHz', storage: '16TB NVMe SSD', gpu: 'Quad RX 7900 XTX', price: 24999, originalPrice: 32999, rating: 5.0, reviews: 4, category: 'professional', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 35, name: 'Rynex Infinity', cpu: 'AMD Threadripper 7995WX', ram: '1TB DDR5 5600MHz', storage: '32TB NVMe SSD', gpu: 'Octa RX 7900 XTX', price: 39999, originalPrice: 52999, rating: 5.0, reviews: 2, category: 'professional', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' }
];

// =============================================
// 32 COMPONENTS with REAL photos (each component type)
// =============================================
const allComponents = [
    // CPU
    { id: 101, name: 'AMD Ryzen 5 5600X', category: 'cpu', price: 199, originalPrice: 249, img: 'https://images.unsplash.com/photo-1591799265444-d66432b9c5a6?w=400&h=300&fit=crop&auto=format' },
    { id: 102, name: 'AMD Ryzen 7 5800X', category: 'cpu', price: 299, originalPrice: 379, img: 'https://images.unsplash.com/photo-1591799265444-d66432b9c5a6?w=400&h=300&fit=crop&auto=format' },
    { id: 103, name: 'AMD Ryzen 9 5900X', category: 'cpu', price: 449, originalPrice: 569, img: 'https://images.unsplash.com/photo-1591799265444-d66432b9c5a6?w=400&h=300&fit=crop&auto=format' },
    { id: 104, name: 'AMD Ryzen 7 7800X3D', category: 'cpu', price: 449, originalPrice: 569, img: 'https://images.unsplash.com/photo-1591799265444-d66432b9c5a6?w=400&h=300&fit=crop&auto=format' },
    { id: 105, name: 'AMD Ryzen 9 7950X', category: 'cpu', price: 599, originalPrice: 749, img: 'https://images.unsplash.com/photo-1591799265444-d66432b9c5a6?w=400&h=300&fit=crop&auto=format' },
    // GPU (RX series)
    { id: 201, name: 'RX 6600 8GB', category: 'gpu', price: 249, originalPrice: 319, img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 202, name: 'RX 6700 XT 12GB', category: 'gpu', price: 399, originalPrice: 499, img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 203, name: 'RX 6800 XT 16GB', category: 'gpu', price: 549, originalPrice: 699, img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 204, name: 'RX 6900 XT 16GB', category: 'gpu', price: 699, originalPrice: 899, img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 205, name: 'RX 7600 8GB', category: 'gpu', price: 279, originalPrice: 359, img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 206, name: 'RX 7700 XT 12GB', category: 'gpu', price: 449, originalPrice: 579, img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 207, name: 'RX 7800 XT 16GB', category: 'gpu', price: 549, originalPrice: 699, img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 208, name: 'RX 7900 GRE 16GB', category: 'gpu', price: 599, originalPrice: 769, img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 209, name: 'RX 7900 XT 20GB', category: 'gpu', price: 799, originalPrice: 999, img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    { id: 210, name: 'RX 7900 XTX 24GB', category: 'gpu', price: 999, originalPrice: 1299, img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&h=300&fit=crop&auto=format' },
    // RAM
    { id: 301, name: 'Corsair Vengeance 16GB DDR4 3200MHz', category: 'ram', price: 79, originalPrice: 99, img: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=300&fit=crop&auto=format' },
    { id: 302, name: 'Corsair Vengeance 32GB DDR4 3600MHz', category: 'ram', price: 149, originalPrice: 189, img: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=300&fit=crop&auto=format' },
    { id: 303, name: 'G.Skill Trident Z5 32GB DDR5 6000MHz', category: 'ram', price: 199, originalPrice: 249, img: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=300&fit=crop&auto=format' },
    { id: 304, name: 'G.Skill Trident Z5 64GB DDR5 6000MHz', category: 'ram', price: 349, originalPrice: 429, img: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=300&fit=crop&auto=format' },
    // Storage
    { id: 401, name: 'Samsung 980 500GB NVMe SSD', category: 'storage', price: 59, originalPrice: 79, img: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop&auto=format' },
    { id: 402, name: 'Samsung 980 1TB NVMe SSD', category: 'storage', price: 109, originalPrice: 139, img: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop&auto=format' },
    { id: 403, name: 'Samsung 990 Pro 2TB NVMe SSD', category: 'storage', price: 229, originalPrice: 289, img: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop&auto=format' },
    { id: 404, name: 'Seagate FireCuda 4TB NVMe SSD', category: 'storage', price: 449, originalPrice: 569, img: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop&auto=format' },
    // Motherboard
    { id: 501, name: 'ASUS ROG Strix B550-F Gaming', category: 'motherboard', price: 189, originalPrice: 239, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 502, name: 'MSI MAG X570S Tomahawk Max WiFi', category: 'motherboard', price: 249, originalPrice: 319, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 503, name: 'ASUS ROG Crosshair X670E Hero', category: 'motherboard', price: 499, originalPrice: 629, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    // PSU
    { id: 601, name: 'Corsair RM750x 750W Gold', category: 'psu', price: 129, originalPrice: 169, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 602, name: 'Corsair RM850x 850W Gold', category: 'psu', price: 159, originalPrice: 209, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 603, name: 'Seasonic Prime TX-1000 1000W Titanium', category: 'psu', price: 329, originalPrice: 429, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    // Case
    { id: 701, name: 'NZXT H510 Elite', category: 'case', price: 149, originalPrice: 189, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 702, name: 'Lian Li PC-O11 Dynamic', category: 'case', price: 159, originalPrice: 199, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 703, name: 'Corsair 5000D Airflow', category: 'case', price: 169, originalPrice: 219, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    // Cooling
    { id: 801, name: 'NZXT Kraken X63 280mm AIO', category: 'cooling', price: 149, originalPrice: 189, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 802, name: 'Corsair iCUE H150i Elite 360mm AIO', category: 'cooling', price: 179, originalPrice: 229, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' },
    { id: 803, name: 'Noctua NH-D15 Air Cooler', category: 'cooling', price: 99, originalPrice: 129, img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&h=300&fit=crop&auto=format' }
];

// =============================================
// CART (shared) - no profit display
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
// HOME PAGE (builds)
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
    const filtered = currentComponentFilter === 'all' ? allComponents : allComponents.filter(c => c.category === currentComponentFilter);
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
