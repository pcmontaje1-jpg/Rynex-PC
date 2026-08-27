// База данных сборок
const builds = [
    {
        id: 1,
        name: "Starter Basic",
        category: "budget",
        price: 399,
        originalPrice: 449,
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600",
        specs: [
            "CPU: AMD Ryzen 3 3200G",
            "GPU: Integrated Radeon Vega 8",
            "RAM: 8GB DDR4 2666MHz",
            "Storage: 256GB SSD SATA",
            "Motherboard: A320M",
            "PSU: 450W 80+ Bronze",
            "Case: Basic ATX"
        ]
    },
    {
        id: 2,
        name: "Office Pro",
        category: "work",
        price: 549,
        originalPrice: 619,
        image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600",
        specs: [
            "CPU: Intel Core i3-12100",
            "GPU: Intel UHD Graphics 730",
            "RAM: 16GB DDR4 3200MHz",
            "Storage: 500GB NVMe SSD",
            "Motherboard: B660M",
            "PSU: 500W 80+ Bronze",
            "Case: Compact Office"
        ]
    },
    {
        id: 3,
        name: "Gaming Entry",
        category: "gaming",
        price: 899,
        originalPrice: 999,
        image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=600",
        specs: [
            "CPU: AMD Ryzen 5 5600",
            "GPU: GTX 1660 Super 6GB",
            "RAM: 16GB DDR4 3600MHz",
            "Storage: 1TB NVMe SSD",
            "Motherboard: B550M",
            "PSU: 650W 80+ Gold",
            "Case: Mid Tower RGB"
        ]
    },
    {
        id: 4,
        name: "Gaming Workstation",
        category: "gaming",
        price: 1299,
        originalPrice: 1449,
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600",
        specs: [
            "CPU: Intel Core i5-14600K",
            "GPU: RTX 4060 8GB",
            "RAM: 32GB DDR5 6000MHz",
            "Storage: 1TB NVMe Gen4",
            "Motherboard: Z790",
            "PSU: 750W 80+ Gold",
            "Case: Mid Tower RGB"
        ]
    },
    {
        id: 5,
        name: "Gaming Pro",
        category: "gaming",
        price: 1899,
        originalPrice: 2149,
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600",
        specs: [
            "CPU: Intel Core i5-14600K",
            "GPU: RTX 4070 Super 12GB",
            "RAM: 32GB DDR5 6000MHz",
            "Storage: 2TB NVMe Gen4",
            "Motherboard: Z790 Aorus",
            "PSU: 750W 80+ Gold",
            "Case: Premium RGB"
        ]
    },
    {
        id: 6,
        name: "Gaming Elite",
        category: "gaming",
        price: 2499,
        originalPrice: 2849,
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600",
        specs: [
            "CPU: AMD Ryzen 7 7800X3D",
            "GPU: RTX 4070 Ti Super 16GB",
            "RAM: 32GB DDR5 6400MHz",
            "Storage: 2TB NVMe Gen4",
            "Motherboard: X670E",
            "PSU: 850W 80+ Gold",
            "Case: Premium RGB"
        ]
    },
    {
        id: 7,
        name: "Gaming Ultimate",
        category: "gaming",
        price: 3299,
        originalPrice: 3749,
        image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=600",
        specs: [
            "CPU: AMD Ryzen 7 7800X3D",
            "GPU: RTX 4080 Super 16GB",
            "RAM: 64GB DDR5 6400MHz",
            "Storage: 2TB NVMe Gen4 + 2TB HDD",
            "Motherboard: X670E Hero",
            "PSU: 1000W 80+ Platinum",
            "Case: Full Tower RGB"
        ]
    },
    {
        id: 8,
        name: "Creator Pro",
        category: "pro",
        price: 4999,
        originalPrice: 5699,
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600",
        specs: [
            "CPU: Intel Core i9-14900K",
            "GPU: RTX 4090 24GB",
            "RAM: 64GB DDR5 6400MHz",
            "Storage: 4TB NVMe Gen4",
            "Motherboard: Z790 Aorus Master",
            "PSU: 1000W 80+ Platinum",
            "Case: Full Tower Premium"
        ]
    },
    {
        id: 9,
        name: "Ultimate Workstation",
        category: "pro",
        price: 9999,
        originalPrice: 11999,
        image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=600",
        specs: [
            "CPU: AMD Threadripper 7960X",
            "GPU: RTX 4090 24GB",
            "RAM: 128GB DDR5 ECC",
            "Storage: 8TB NVMe Gen4",
            "Motherboard: TRX50",
            "PSU: 1500W 80+ Titanium",
            "Case: Full Tower Workstation"
        ]
    }
];

// Отображение сборок
function displayBuilds(category = 'all') {
    const grid = document.getElementById('builds-grid');
    if (!grid) return;
    
    const filtered = category === 'all' ? builds : builds.filter(b => b.category === category);
    
    grid.innerHTML = filtered.map(build => `
        <div class="build-card">
            <img src="${build.image}" alt="${build.name}">
            <div class="build-content">
                <h3>${build.name}</h3>
                <div class="price">€${build.price.toLocaleString()}</div>
                <div class="savings">Save €${(build.originalPrice - build.price).toLocaleString()}!</div>
                <ul class="specs">
                    ${build.specs.map(spec => `<li>${spec}</li>`).join('')}
                </ul>
                <a href="#" class="order-btn" onclick="orderBuild('${build.name}', ${build.price}, '${build.specs.join(' | ')}')">Order Now</a>
            </div>
        </div>
    `).join('');
}

// Фильтрация
function filterBuilds(category) {
    displayBuilds(category);
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Заказ сборки
function orderBuild(name, price, specs) {
    const subject = encodeURIComponent(`Order: ${name} - €${price}`);
    const body = encodeURIComponent(`Hello Rynex PC,\n\nI would like to order:\n\n${name}\nPrice: €${price}\n\nSpecifications:\n${specs}\n\nPlease contact me for payment details.\n\nThank you.`);
    
    window.location.href = `mailto:pcmontaje1@gmail.com?subject=${subject}&body=${body}`;
}

// Обработка форм
document.addEventListener('DOMContentLoaded', function() {
    // Показываем сборки
    displayBuilds('all');
    
    // Custom form
    const customForm = document.getElementById('custom-form');
    if (customForm) {
        customForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const subject = 'Custom PC Build Request';
            const body = `Usage: ${document.getElementById('usage').value}\nBudget: €${document.getElementById('budget-range').value}\nBrands: ${document.getElementById('brands').value}\nName: ${document.getElementById('name').value}\nEmail: ${document.getElementById('email').value}\n\nRequirements:\n${document.getElementById('requirements').value}`;
            window.location.href = `mailto:pcmontaje1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        });
    }
    
    // Support form
    const supportForm = document.getElementById('support-form');
    if (supportForm) {
        supportForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const subject = 'Support Request';
            const body = `Name: ${document.getElementById('support-name').value}\nEmail: ${document.getElementById('support-email').value}\n\nIssue:\n${document.getElementById('support-message').value}`;
            window.location.href = `mailto:pcmontaje1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        });
    }
    
    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const subject = 'Contact from Website';
            const body = `Name: ${document.getElementById('contact-name').value}\nEmail: ${document.getElementById('contact-email').value}\n\nMessage:\n${document.getElementById('contact-message').value}`;
            window.location.href = `mailto:pcmontaje1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        });
    }
    
    // Проверка URL параметров
    const urlParams = new URLSearchParams(window.location.search);
    const cat = urlParams.get('cat');
    if (cat && window.location.pathname.includes('builds.html')) {
        filterBuilds(cat);
    }
});
