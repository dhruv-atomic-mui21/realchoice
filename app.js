/* ==========================================================================
   REAL CHOICE MENSWEAR — CLIENT DEMO INTERACTIVE ENGINE
   Catalog State, Live Store Status, Fit Engine, WhatsApp CRM, and Proposal ROI
   ========================================================================== */

(function () {
  'use strict';

  // --- STORE CONFIGURATION & DATA ---
  const STORE_CONFIG = {
    name: 'Real Choice Collection',
    tagline: "Ahmedabad's Premium Menswear & Streetwear Store",
    phone: '08469701926',
    phoneFormatted: '+91 84697 01926',
    whatsapp: '918469701926',
    address: 'Real choice collection, Vejalpur Road, Jivraj Cross Rd, opp. Sahjanand Complex, Jivraj Park, Ahmedabad, Gujarat 380051',
    landmark: 'Opposite Sahjanand Complex / Tower, Near Aarti Farsan',
    ratingGoogle: 4.9,
    reviewsCountGoogle: 63,
    ratingJustdial: 4.9,
    votesJustdial: 73,
    openHour: 10.5, // 10:30 AM
    closeHour: 22.0, // 10:00 PM
  };

  // --- CATALOG DATA WITH AUTHENTIC LOCAL MENSWEAR STYLES ---
  const PRODUCTS = [
    {
      id: 'rc-101',
      name: 'Textured Cuban Collar Resort Shirt',
      category: 'shirts',
      categoryLabel: 'Casual & Resort Shirts',
      price: 899,
      mrp: 1499,
      tag: 'Bestseller',
      tagType: 'bestseller',
      sizes: ['M', 'L', 'XL'],
      image: 'assets/products/cuban-shirt.jpg',
      fabric: '100% Breathable Waffle Cotton',
      fit: 'Relaxed Resort Fit',
      description: 'Ultra-comfortable textured open-collar casual shirt in cream ivory. Designed for Ahmedabad weather, perfect for casual evenings and outings.'
    },
    {
      id: 'rc-102',
      name: 'Retro Mustard Botanical Print Shirt',
      category: 'shirts',
      categoryLabel: 'Casual & Resort Shirts',
      price: 949,
      mrp: 1599,
      tag: 'Trending Fit',
      tagType: 'trending',
      sizes: ['M', 'L', 'XL', 'XXL'],
      image: 'assets/products/resort-print.jpg',
      fabric: 'Soft Rayon Blend with Matte Finish',
      fit: 'Comfort Fit',
      description: 'Vibrant modern floral resort shirt as featured on our storefront mannequins. Pairs effortlessly with dark denims or relaxed chinos.'
    },
    {
      id: 'rc-103',
      name: 'Heavyweight Boxy Drop-Shoulder Tee',
      category: 'streetwear',
      categoryLabel: 'Streetwear & Oversized',
      price: 699,
      mrp: 1199,
      tag: 'New Drop',
      tagType: 'new',
      sizes: ['M', 'L', 'XL', 'XXL'],
      image: 'assets/products/street-oversized.jpg',
      fabric: '240 GSM Combed Bio-Washed Cotton',
      fit: 'Oversized Streetwear Fit',
      description: 'Premium heavyweight streetwear tee with reinforced rib neckline. High-density street typography on the reverse.'
    },
    {
      id: 'rc-104',
      name: 'Acid Wash Vintage Graphic Sweatshirt',
      category: 'streetwear',
      categoryLabel: 'Streetwear & Oversized',
      price: 1099,
      mrp: 1899,
      tag: 'Store Favorite',
      tagType: 'bestseller',
      sizes: ['L', 'XL', 'XXL'],
      image: 'assets/products/heavyweight-tee.jpg',
      fabric: 'French Terry Cotton Knit',
      fit: 'Relaxed Drop-Shoulder',
      description: 'Exclusive mineral-washed graphic streetwear pull, directly styled on our display window at Jivraj Cross Road.'
    },
    {
      id: 'rc-105',
      name: 'Tactical Multi-Pocket Utility Cargo',
      category: 'bottoms',
      categoryLabel: 'Denim & Cargo Trousers',
      price: 1299,
      mrp: 2199,
      tag: 'Viral Style',
      tagType: 'trending',
      sizes: ['30', '32', '34', '36'],
      image: 'assets/products/cargo-pants.jpg',
      fabric: 'Durable Ripstop Cotton Twill',
      fit: 'Relaxed Straight Fit with Toggle Cuffs',
      description: 'Deep utility 6-pocket cargo trousers in olive tone. High-tensile stitching, pre-shrunk and built for heavy daily wear.'
    },
    {
      id: 'rc-106',
      name: 'Classic Vintage Wash Straight Jeans',
      category: 'bottoms',
      categoryLabel: 'Denim & Cargo Trousers',
      price: 1399,
      mrp: 2399,
      tag: 'Essential',
      tagType: 'bestseller',
      sizes: ['30', '32', '34', '36'],
      image: 'assets/products/denim-vintage.jpg',
      fabric: 'Authentic 12.5 oz Ring-Spun Denim',
      fit: 'Regular Straight Fit',
      description: 'Classic mid-indigo stone washed denims with natural whisker details. Comfortable stretch and timeless silhouette.'
    },
    {
      id: 'rc-107',
      name: 'Breathable Pure Linen Casual Overshirt',
      category: 'shirts',
      categoryLabel: 'Casual & Resort Shirts',
      price: 1199,
      mrp: 1999,
      tag: 'Premium Line',
      tagType: 'bestseller',
      sizes: ['M', 'L', 'XL'],
      image: 'assets/products/casual-linen.jpg',
      fabric: '100% European Flax Linen Blend',
      fit: 'Tailored Regular Fit',
      description: 'Elegant sage green lightweight linen shirt. Ideal for festive gatherings, summer evening outings, and semi-formal wear.'
    },
    {
      id: 'rc-108',
      name: 'Midnight Black Partywear Blazer Shirt',
      category: 'partywear',
      categoryLabel: 'Party & Festive Wear',
      price: 1599,
      mrp: 2799,
      tag: 'Party Collection',
      tagType: 'trending',
      sizes: ['M', 'L', 'XL'],
      image: 'assets/products/formal-blazer.jpg',
      fabric: 'Textured Poly-Viscose Satin Sheen',
      fit: 'Slim Sculpted Fit',
      description: 'Sharp occasion-ready piece tailored for wedding receptions, club nights, and festivals. Pairs with contrast white or black trousers.'
    }
  ];

  // --- REVIEWS DATA (AUTHENTIC CLIENT REVIEWS) ---
  const REVIEWS = [
    {
      author: 'Altaf Ansari',
      role: 'Verified Google Reviewer',
      rating: 5,
      date: 'Recent Visit',
      category: 'quality',
      quote: 'New design good quality nice staff behaviour. The collection of shirts and casual wear is best in Jivraj area.'
    },
    {
      author: 'Nagori Soheb',
      role: 'Local Guide',
      rating: 5,
      date: 'Recent Visit',
      category: 'staff',
      quote: 'Best clothing in our area b st experience. Honest pricing and very supportive staff when trying different sizes.'
    },
    {
      author: 'Sadil Khan',
      role: 'Verified Google Reviewer',
      rating: 5,
      date: 'Recent Visit',
      category: 'pricing',
      quote: 'Awesome collection👌🏻 best price💯 ❤️❤️❤️❤️❤️ Loved the oversized tees and jeans fitting.'
    },
    {
      author: 'Rahul Patel',
      role: 'Regular Customer',
      rating: 5,
      date: '2 weeks ago',
      category: 'quality',
      quote: 'Visited opposite Sahjanand Complex after seeing the mannequins. Got 3 shirts and 1 cargo. Fabric quality after wash is exceptional!'
    },
    {
      author: 'Meet Shah',
      role: 'Vejalpur Resident',
      rating: 5,
      date: '1 month ago',
      category: 'pricing',
      quote: 'Brilliant collection at genuine wholesale rates. No need to go all the way to CG Road or Relief Road when Real Choice is right at Jivraj Cross Road.'
    },
    {
      author: 'Hardik Prajapati',
      role: 'Verified Buyer',
      rating: 5,
      date: '2 months ago',
      category: 'staff',
      quote: 'Polite staff, great varieties in formal and partywear shirts. Quick alteration service provided right away.'
    }
  ];

  // --- APP STATE ---
  let activeCategory = 'all';
  let searchQuery = '';
  let selectedSizes = {}; // productId -> size string

  // Initialize default sizes
  PRODUCTS.forEach(p => {
    selectedSizes[p.id] = p.sizes[0];
  });

  // --- DOM READY INITIALIZATION ---
  document.addEventListener('DOMContentLoaded', () => {
    initLiveStoreStatus();
    renderProducts();
    initStoreViewSwitcher();
    initFitCalculator();
    renderReviews('all');
    initProposalDrawer();
    initRoiCalculator();
    initAddressCopy();
    initSmoothScroll();
  });

  // ==========================================================================
  // 1. DYNAMIC STORE HOURS & LIVE STATUS ENGINE
  // ==========================================================================
  function initLiveStoreStatus() {
    const statusPill = document.getElementById('storeLiveStatus');
    const hoursPill = document.getElementById('storeHoursPill');
    const tableRows = document.querySelectorAll('.hours-table tr');
    
    // Calculate current time
    const now = new Date();
    const currentHour = now.getHours() + now.getMinutes() / 60;
    const currentDay = now.getDay(); // 0 is Sunday, 1 is Monday...

    // Highlight today in hours table
    tableRows.forEach(tr => {
      const dayAttr = tr.getAttribute('data-day');
      if (parseInt(dayAttr) === currentDay) {
        tr.classList.add('today');
        const dayCell = tr.querySelector('td:first-child');
        if (dayCell) dayCell.innerHTML += ' <span style="color:var(--accent);font-size:0.7rem;font-weight:700;">(Today)</span>';
      }
    });

    const isOpen = (currentHour >= STORE_CONFIG.openHour && currentHour < STORE_CONFIG.closeHour);

    if (isOpen) {
      const closesIn = Math.floor(STORE_CONFIG.closeHour - currentHour);
      const label = `🟢 Open Today · Closes 10:00 PM (${closesIn > 0 ? closesIn + ' hrs left' : 'closing soon'})`;
      if (statusPill) statusPill.innerHTML = `<span class="pulse-dot"></span> <span><strong>Open Now</strong> · Closes 10:00 PM</span>`;
      if (hoursPill) {
        hoursPill.textContent = '🟢 Open Now · Closes 10 PM';
        hoursPill.style.color = 'var(--green)';
      }
    } else {
      if (statusPill) statusPill.innerHTML = `<span style="width:8px;height:8px;border-radius:50%;background:#f59e0b;"></span> <span><strong>Closed Now</strong> · Opens 10:30 AM</span>`;
      if (hoursPill) {
        hoursPill.textContent = 'Closed Now · Opens 10:30 AM';
        hoursPill.style.color = '#f59e0b';
      }
    }
  }

  // ==========================================================================
  // 2. PRODUCT CATALOG FILTERING & 5-STATE RENDERING
  // ==========================================================================
  window.filterCategory = function (category, buttonEl) {
    activeCategory = category;
    
    // Update active pill UI
    document.querySelectorAll('.filter-pill').forEach(btn => btn.classList.remove('active'));
    if (buttonEl) {
      buttonEl.classList.add('active');
    }
    
    renderProducts();
  };

  window.handleSearch = function (e) {
    searchQuery = e.target.value.toLowerCase().trim();
    renderProducts();
  };

  window.resetFilters = function () {
    activeCategory = 'all';
    searchQuery = '';
    const searchInput = document.getElementById('catalogSearch');
    if (searchInput) searchInput.value = '';
    
    document.querySelectorAll('.filter-pill').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-cat') === 'all');
    });
    
    renderProducts();
  };

  window.selectProductSize = function (productId, size, btnEl) {
    selectedSizes[productId] = size;
    const parent = btnEl.closest('.size-selector-row');
    if (parent) {
      parent.querySelectorAll('.size-chip').forEach(c => c.classList.remove('selected'));
      btnEl.classList.add('selected');
    }
  };

  function renderProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    // Filter logic
    const filtered = PRODUCTS.filter(item => {
      const matchCat = (activeCategory === 'all' || item.category === activeCategory);
      const matchSearch = (!searchQuery || 
        item.name.toLowerCase().includes(searchQuery) ||
        item.categoryLabel.toLowerCase().includes(searchQuery) ||
        item.fabric.toLowerCase().includes(searchQuery) ||
        item.description.toLowerCase().includes(searchQuery)
      );
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      // 5-State: Empty State
      grid.innerHTML = `
        <div class="catalog-empty-state">
          <svg class="empty-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
          <h3 class="empty-title">No styles found matching "${searchQuery || activeCategory}"</h3>
          <p class="empty-desc">We stock 200+ exclusive styles in our Jivraj Park store. Try clearing your search or explore all categories.</p>
          <button class="btn btn-secondary btn-sm" onclick="resetFilters()">
            Reset All Filters
          </button>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(item => {
      const currentSelectedSize = selectedSizes[item.id] || item.sizes[0];
      const discount = Math.round(((item.mrp - item.price) / item.mrp) * 100);

      return `
        <div class="product-card" data-id="${item.id}">
          <div class="product-thumb-wrapper">
            <img class="product-thumb" src="${item.image}" alt="${item.name}" loading="lazy" />
            <span class="product-tag ${item.tagType}">${item.tag}</span>
            <button class="quick-view-overlay-btn" onclick="openQuickView('${item.id}')">
              Quick View
            </button>
          </div>
          <div class="product-content">
            <div class="product-category-sub">${item.categoryLabel}</div>
            <h3 class="product-name">${item.name}</h3>
            
            <div class="product-price-row">
              <span class="current-price">₹${item.price}</span>
              <span class="mrp-price">₹${item.mrp}</span>
              <span class="discount-pill">${discount}% OFF</span>
            </div>

            <div class="size-selector-row">
              <span class="size-label">Size:</span>
              ${item.sizes.map(s => `
                <button 
                  class="size-chip ${s === currentSelectedSize ? 'selected' : ''}" 
                  onclick="selectProductSize('${item.id}', '${s}', this)"
                  title="Select size ${s}"
                >${s}</button>
              `).join('')}
            </div>

            <div class="product-actions-row">
              <button 
                class="btn btn-whatsapp btn-sm" 
                onclick="sendWhatsAppProductInquiry('${item.id}')"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
                Ask on WhatsApp
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // ==========================================================================
  // 3. WHATSAPP ENQUIRY ENGINE (HIGH CONVERSION MESSAGING)
  // ==========================================================================
  window.sendWhatsAppProductInquiry = function (productId) {
    const item = PRODUCTS.find(p => p.id === productId);
    if (!item) return;

    const size = selectedSizes[productId] || item.sizes[0];
    const message = `Hello Real Choice Menswear,\n\nI was looking at your website collection and loved this item:\n- Item: *${item.name}*\n- Selected Size: *${size}*\n- Store Price: *₹${item.price}*\n- Ref Code: *${item.id.toUpperCase()}*\n\nIs this in stock right now at your Jivraj Park store? Can I visit today to try it on?`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${STORE_CONFIG.whatsapp}?text=${encoded}`;
    
    showToast(`Opening WhatsApp for ${item.name} (${size})...`);
    window.open(url, '_blank');
  };

  window.sendWhatsAppGeneralInquiry = function () {
    const message = `Hello Real Choice Menswear!\nI am planning to visit your Jivraj Cross Road store today. Can you share your current active offers and new arrivals?`;
    const url = `https://wa.me/${STORE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // ==========================================================================
  // 4. QUICK VIEW MODAL
  // ==========================================================================
  window.openQuickView = function (productId) {
    const item = PRODUCTS.find(p => p.id === productId);
    if (!item) return;

    const modal = document.getElementById('quickViewModal');
    const content = document.getElementById('quickViewContent');
    if (!modal || !content) return;

    const currentSelectedSize = selectedSizes[item.id] || item.sizes[0];
    const discount = Math.round(((item.mrp - item.price) / item.mrp) * 100);

    content.innerHTML = `
      <div class="modal-grid">
        <div class="modal-image-col">
          <img src="${item.image}" alt="${item.name}" />
        </div>
        <div class="modal-body-col">
          <div>
            <div class="product-category-sub">${item.categoryLabel} • REF: ${item.id.toUpperCase()}</div>
            <h2 style="font-size:1.45rem;font-weight:800;color:#fff;margin-bottom:0.75rem;">${item.name}</h2>
            
            <div class="product-price-row" style="margin-bottom:1.25rem;">
              <span class="current-price" style="font-size:1.5rem;">₹${item.price}</span>
              <span class="mrp-price" style="font-size:1.05rem;">₹${item.mrp}</span>
              <span class="discount-pill">${discount}% OFF</span>
            </div>

            <p style="font-size:0.9rem;color:var(--fg-secondary);line-height:1.6;margin-bottom:1.25rem;">
              ${item.description}
            </p>

            <div style="background:var(--surface-raised);border:1px solid var(--border);border-radius:var(--radius-md);padding:1rem;margin-bottom:1.5rem;">
              <div style="font-size:0.8rem;color:var(--muted);margin-bottom:0.35rem;"><strong>Fabric:</strong> ${item.fabric}</div>
              <div style="font-size:0.8rem;color:var(--muted);margin-bottom:0.35rem;"><strong>Fit Style:</strong> ${item.fit}</div>
              <div style="font-size:0.8rem;color:var(--green);"><strong>Availability:</strong> In Stock at Jivraj Park (Ready for Trial)</div>
            </div>

            <div class="size-selector-row" style="margin-bottom:1.5rem;">
              <span class="size-label">Select Size:</span>
              ${item.sizes.map(s => `
                <button 
                  class="size-chip ${s === currentSelectedSize ? 'selected' : ''}" 
                  onclick="selectProductSize('${item.id}', '${s}', this)"
                >${s}</button>
              `).join('')}
            </div>
          </div>

          <div style="display:flex;gap:0.75rem;flex-wrap:wrap;">
            <button class="btn btn-whatsapp" style="flex:1;" onclick="sendWhatsAppProductInquiry('${item.id}')">
              Reserve & Ask on WhatsApp
            </button>
            <button class="btn btn-secondary" onclick="closeModal()">
              Close
            </button>
          </div>
        </div>
      </div>
    `;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.closeModal = function () {
    const modal = document.getElementById('quickViewModal');
    if (modal) modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  // Close modal on click outside
  window.addEventListener('click', (e) => {
    const modal = document.getElementById('quickViewModal');
    if (modal && e.target === modal) {
      closeModal();
    }
  });

  // ==========================================================================
  // 5. STOREFRONT INTERACTIVE VIEW SWITCHER (AUTHENTIC PHOTOS)
  // ==========================================================================
  function initStoreViewSwitcher() {
    const storeImg = document.getElementById('storefrontHeroImg');
    const captionEl = document.getElementById('storefrontViewCaption');
    const tabs = document.querySelectorAll('.view-tab-btn');

    const views = {
      front: {
        src: 'assets/store-front.jpg',
        caption: 'Storefront at Jivraj Cross Rd (Opp. Sahjanand Complex)'
      },
      interior: {
        src: 'assets/store-interior.jpg',
        caption: 'Luxury Boutique Interior & Display Racks'
      },
      street: {
        src: 'assets/store-street.jpg',
        caption: 'Vejalpur Road Streetfront View'
      }
    };

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const viewKey = tab.getAttribute('data-view');
        if (!views[viewKey] || !storeImg) return;

        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        storeImg.style.opacity = '0.3';
        setTimeout(() => {
          storeImg.src = views[viewKey].src;
          storeImg.style.opacity = '1';
          if (captionEl) captionEl.textContent = views[viewKey].caption;
        }, 150);
      });
    });
  }

  // ==========================================================================
  // 6. SMART FIT & SIZE CALCULATOR ENGINE
  // ==========================================================================
  function initFitCalculator() {
    const heightSlider = document.getElementById('calcHeight');
    const weightSlider = document.getElementById('calcWeight');
    const heightVal = document.getElementById('heightVal');
    const weightVal = document.getElementById('weightVal');
    const fitRadios = document.querySelectorAll('.fit-radio-card');

    let currentPreference = 'regular'; // slim, regular, relaxed

    fitRadios.forEach(radio => {
      radio.addEventListener('click', () => {
        fitRadios.forEach(r => r.classList.remove('active'));
        radio.classList.add('active');
        currentPreference = radio.getAttribute('data-fit');
        recalculateFit();
      });
    });

    if (heightSlider && heightVal) {
      heightSlider.addEventListener('input', (e) => {
        const cm = parseInt(e.target.value);
        const feet = Math.floor(cm / 30.48);
        const inches = Math.round((cm % 30.48) / 2.54);
        heightVal.textContent = `${cm} cm (${feet}'${inches}")`;
        recalculateFit();
      });
    }

    if (weightSlider && weightVal) {
      weightSlider.addEventListener('input', (e) => {
        weightVal.textContent = `${e.target.value} kg`;
        recalculateFit();
      });
    }

    function recalculateFit() {
      const weight = parseInt(weightSlider ? weightSlider.value : 72);
      const height = parseInt(heightSlider ? heightSlider.value : 175);

      // BMI proxy estimation
      const heightM = height / 100;
      const bmi = weight / (heightM * heightM);

      let baseSize = 'M';
      let chestInches = 38;
      let shirtLength = 28;

      if (weight < 62 || bmi < 21) {
        baseSize = 'S/M';
        chestInches = 38;
        shirtLength = 27.5;
      } else if (weight <= 73 || bmi < 24.5) {
        baseSize = 'M';
        chestInches = 40;
        shirtLength = 28.5;
      } else if (weight <= 84 || bmi < 28) {
        baseSize = 'L';
        chestInches = 42;
        shirtLength = 29.5;
      } else if (weight <= 95) {
        baseSize = 'XL';
        chestInches = 44;
        shirtLength = 30.5;
      } else {
        baseSize = 'XXL';
        chestInches = 46;
        shirtLength = 31.5;
      }

      // Adjust for preference
      let finalSize = baseSize;
      if (currentPreference === 'relaxed' && baseSize === 'M') finalSize = 'L';
      if (currentPreference === 'relaxed' && baseSize === 'L') finalSize = 'XL';
      if (currentPreference === 'slim' && baseSize === 'XL') finalSize = 'L';

      const sizeTag = document.getElementById('calcResultSize');
      const descTag = document.getElementById('calcResultDesc');
      const chestTag = document.getElementById('calcChestSpec');
      const lengthTag = document.getElementById('calcLengthSpec');

      if (sizeTag) sizeTag.textContent = finalSize;
      if (descTag) {
        descTag.textContent = `Based on ${weight}kg & ${height}cm with ${currentPreference} fit preference`;
      }
      if (chestTag) chestTag.textContent = `Chest: ${chestInches}"`;
      if (lengthTag) lengthTag.textContent = `Length: ${shirtLength}"`;
    }

    recalculateFit();
  }

  window.sendSizeAdviceWhatsApp = function () {
    const size = document.getElementById('calcResultSize') ? document.getElementById('calcResultSize').textContent : 'L';
    const msg = `Hello Real Choice! I used your online size finder. My recommended size is *${size}*. Do you have the latest drop-shoulder and printed shirts available in this size?`;
    window.open(`https://wa.me/${STORE_CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  // ==========================================================================
  // 7. VERIFIED REVIEWS CAROUSEL & CATEGORY FILTER
  // ==========================================================================
  window.filterReviews = function (category, btn) {
    document.querySelectorAll('.review-filter-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    renderReviews(category);
  };

  function renderReviews(filterCat) {
    const container = document.getElementById('reviewsContainer');
    if (!container) return;

    const filtered = REVIEWS.filter(r => filterCat === 'all' || r.category === filterCat);

    container.innerHTML = filtered.map(rev => `
      <div class="review-card ${rev.rating === 5 ? 'featured' : ''}">
        <div>
          <div class="review-card-header">
            <div class="reviewer-profile">
              <div class="reviewer-avatar">${rev.author.charAt(0)}</div>
              <div>
                <div class="reviewer-name">${rev.author}</div>
                <div class="reviewer-badge">${rev.role}</div>
              </div>
            </div>
            <div class="stars-row">
              ${'★'.repeat(rev.rating)}
            </div>
          </div>
          <p class="review-quote">"${rev.quote}"</p>
        </div>
        <div class="review-date-source">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="color:var(--accent);">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <span>Verified Visit • Google Reviews</span>
        </div>
      </div>
    `).join('');
  }

  // ==========================================================================
  // 8. CLIENT PROPOSAL DRAWER & INTERACTIVE ROI CALCULATOR
  // ==========================================================================
  function initProposalDrawer() {
    const drawer = document.getElementById('proposalDrawer');
    const triggers = document.querySelectorAll('.open-proposal-trigger');
    const closeBtn = document.getElementById('closeProposalDrawer');

    triggers.forEach(t => {
      t.addEventListener('click', () => {
        if (drawer) drawer.classList.add('open');
      });
    });

    if (closeBtn && drawer) {
      closeBtn.addEventListener('click', () => {
        drawer.classList.remove('open');
      });
    }
  }

  function initRoiCalculator() {
    const walkinSlider = document.getElementById('roiWalkins');
    const billSlider = document.getElementById('roiBill');
    const walkinVal = document.getElementById('roiWalkinsVal');
    const billVal = document.getElementById('roiBillVal');
    const outputEl = document.getElementById('roiTotalRevenue');

    function updateRoi() {
      const walkins = parseInt(walkinSlider ? walkinSlider.value : 4);
      const bill = parseInt(billSlider ? billSlider.value : 1500);

      if (walkinVal) walkinVal.textContent = `+${walkins} shoppers / day`;
      if (billVal) billVal.textContent = `₹${bill.toLocaleString('en-IN')}`;

      // Monthly extra revenue
      const monthlyTotal = walkins * bill * 30;
      if (outputEl) {
        outputEl.textContent = `+₹${monthlyTotal.toLocaleString('en-IN')} / month`;
      }
    }

    if (walkinSlider) walkinSlider.addEventListener('input', updateRoi);
    if (billSlider) billSlider.addEventListener('input', updateRoi);

    updateRoi();
  }

  window.scheduleContractMeeting = function () {
    const walkins = document.getElementById('roiWalkins') ? document.getElementById('roiWalkins').value : 4;
    const msg = `Hello! I reviewed the interactive website demo prepared for Real Choice Menswear (Jivraj Park). I would like to discuss implementing this website, custom domain, and WhatsApp ordering system for my store.`;
    window.open(`https://wa.me/${STORE_CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  // ==========================================================================
  // 9. UTILITIES: TOAST NOTIFICATIONS & ADDRESS COPY
  // ==========================================================================
  function initAddressCopy() {
    const copyBtns = document.querySelectorAll('.copy-address-trigger');
    copyBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(STORE_CONFIG.address).then(() => {
          showToast('📍 Store address copied to clipboard!');
        }).catch(() => {
          showToast(STORE_CONFIG.address);
        });
      });
    });
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  function showToast(message) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
      </svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 20);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  window.showToast = showToast;

})();
