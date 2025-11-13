// ========= PRODUCT DATA (EDIT THESE FOR REAL ITEMS) =========

const productsBySeason = {
  winter: [
    {
      id: "w1",
      name: "Thermal Fleece-Lined Hoodie",
      description:
        "Heavyweight fleece hoodie with soft lining. Perfect for cold morning commutes.",
      price: 49.99,
      oldPrice: 69.99,
      tag: "Winter Essential",
      limited: true,
      image:
        "https://images.pexels.com/photos/7671166/pexels-photo-7671166.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "w2",
      name: "Touchscreen Winter Gloves",
      description:
        "Stay warm and still use your phone with conductive fingertips.",
      price: 24.99,
      oldPrice: 34.99,
      tag: "Gadget Pick",
      limited: false,
      image:
        "https://images.pexels.com/photos/4048598/pexels-photo-4048598.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "w3",
      name: "USB Heated Coffee Mug Warmer",
      description: "Keeps your coffee or tea warm at your desk all winter.",
      price: 19.99,
      oldPrice: 29.99,
      tag: "Desk Gadget",
      limited: true,
      image:
        "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "w4",
      name: "Sherpa-Lined Beanie",
      description: "Cozy beanie with soft sherpa lining for extra warmth.",
      price: 17.99,
      oldPrice: 24.99,
      tag: "Cozy Pick",
      limited: false,
      image:
        "https://images.pexels.com/photos/19784561/pexels-photo-19784561/free-photo-of-woman-in-winter-clothes-on-street.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "w5",
      name: "LED Snowflake String Lights",
      description: "Add winter vibes to your room or gaming setup.",
      price: 21.99,
      oldPrice: 32.99,
      tag: "Holiday Vibes",
      limited: true,
      image:
        "https://images.pexels.com/photos/3815759/pexels-photo-3815759.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: "w6",
      name: "Flannel Pajama Set",
      description:
        "Ultra-soft flannel PJ set for Netflix-and-chill winter nights.",
      price: 39.99,
      oldPrice: 54.99,
      tag: "Lounge Wear",
      limited: false,
      image:
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ],
  spring: [
    {
      id: "s1",
      name: "Lightweight Windbreaker",
      description: "Packable jacket for rainy spring days.",
      price: 44.99,
      oldPrice: 59.99,
      tag: "Spring Layer",
      limited: false,
      image:
        "https://images.pexels.com/photos/6311657/pexels-photo-6311657.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ],
  summer: [
    {
      id: "su1",
      name: "UV Protection Bucket Hat",
      description: "Stay shaded and cool all summer.",
      price: 24.99,
      oldPrice: 34.99,
      tag: "Summer Drop",
      limited: false,
      image:
        "https://images.pexels.com/photos/15389741/pexels-photo-15389741/free-photo-of-woman-wearing-a-bucket-hat.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ],
  fall: [
    {
      id: "f1",
      name: "Oversized Flannel Shirt",
      description: "Perfect layering piece for fall weather.",
      price: 39.99,
      oldPrice: 54.99,
      tag: "Fall Favorite",
      limited: false,
      image:
        "https://images.pexels.com/photos/6311579/pexels-photo-6311579.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ],
};

// ========= SEASON TEXT / COUNTDOWN CONFIG =========

const seasonConfig = {
  winter: {
    heading: "Winter Drops & Holiday Deals",
    subheading:
      "Limited-time winter-only styles, cozy fits, and giftable gadgets. When the season changes, these deals disappear.",
    productTitle: "Winter Featured Products",
    // Set this to whenever you want “winter” to end
    endDate: "2026-01-10T23:59:59",
    seoText: `
      Shop limited-time winter clothing, cozy loungewear, and holiday gadgets at Season Style Co.
      Every drop is curated for cold weather, gift-giving, and staying warm without losing your style.
      These winter items disappear when the season ends—no restocks until next year.
    `,
  },
  spring: {
    heading: "Fresh Spring Fits & Everyday Gear",
    subheading:
      "Lightweight layers and everyday gadgets for spring. Swap heavy winter gear for fresh, easygoing fits.",
    productTitle: "Spring Featured Products",
    endDate: "2026-04-01T23:59:59",
    seoText: `
      Explore spring-ready outfits, windbreakers, and fresh accessories. Perfect for layering, travel,
      and that in-between weather. New drops land as the seasons change.
    `,
  },
  summer: {
    heading: "Summer Heat Drops & Travel Essentials",
    subheading:
      "Breathable, travel-ready styles and gadgets built for hot days, festivals, and late-night hangs.",
    productTitle: "Summer Featured Products",
    endDate: "2026-08-31T23:59:59",
    seoText: `
      Find summer essentials like UV-protective hats, lightweight tops, and travel gadgets.
      Gear up for vacations, festivals, and long days in the sun.
    `,
  },
  fall: {
    heading: "Fall Layers & Cozy Tech",
    subheading:
      "Flannels, warm layers, and gadgets that match hoodie weather and early sunsets.",
    productTitle: "Fall Featured Products",
    endDate: "2026-11-30T23:59:59",
    seoText: `
      Shop fall flannels, transitional layers, and cozy desk gadgets.
      Perfect for back-to-school, work, or lazy weekends at home.
    `,
  },
};

// ========= DOM ELEMENTS =========

const productsGrid = document.getElementById("products-grid");
const seasonHeading = document.getElementById("season-heading");
const seasonSubheading = document.getElementById("season-subheading");
const productSectionTitle = document.getElementById("product-section-title");
const countdownEl = document.getElementById("countdown");
const seasonTabs = document.querySelectorAll(".season-tab");

const cartButton = document.getElementById("cart-button");
const cartSidebar = document.getElementById("cart-sidebar");
const cartOverlay = document.getElementById("cart-overlay");
const closeCartButton = document.getElementById("close-cart");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
const cartCountEl = document.getElementById("cart-count");
const checkoutButton = document.getElementById("checkout-button");
const yearSpan = document.getElementById("year");

// Optional SEO block (add this div in your HTML if you want JS to fill it)
const seasonSeoBlock = document.getElementById("season-seo-text");

let activeSeason = "winter";
let countdownInterval = null;

const cart = [];

// ========= RENDERING =========

function formatMoney(amount) {
  return `$${amount.toFixed(2)}`;
}

function renderProductsForSeason(season) {
  const products = productsBySeason[season] || [];
  productsGrid.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";

    card.innerHTML = `
      <div class="product-img-wrapper">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
      </div>
      <div class="product-badge-row">
        <span>${product.tag}</span>
        <span class="limited">${product.limited ? "Limited" : "Seasonal"}</span>
      </div>
      <div class="product-info">
        <h4 class="product-title">${product.name}</h4>
        <p class="product-desc">${product.description}</p>
      </div>
      <div class="product-footer">
        <div class="product-price">
          <span class="product-price-main">${formatMoney(product.price)}</span>
          <span class="product-price-old">${formatMoney(
            product.oldPrice
          )}</span>
        </div>
        <button class="product-add-btn" data-id="${product.id}">
          Add to Cart
        </button>
      </div>
    `;

    productsGrid.appendChild(card);
  });
}

function updateSeasonContent(season) {
  const config = seasonConfig[season];
  if (!config) return;

  seasonHeading.textContent = config.heading;
  seasonSubheading.textContent = config.subheading;
  productSectionTitle.textContent = config.productTitle;

  if (seasonSeoBlock) {
    seasonSeoBlock.textContent = ""; // clear
    seasonSeoBlock.innerText = config.seoText.trim();
  }

  // Update active tab styling
  seasonTabs.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.season === season);
  });

  // Reset and start countdown
  if (countdownInterval) clearInterval(countdownInterval);
  startCountdown(config.endDate);

  // Render products
  renderProductsForSeason(season);
}

// ========= COUNTDOWN =========

function startCountdown(endDateString) {
  const endDate = new Date(endDateString).getTime();

  function tick() {
    const now = Date.now();
    const diff = endDate - now;

    if (diff <= 0) {
      countdownEl.textContent = "Season ended – new drop coming soon.";
      clearInterval(countdownInterval);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    countdownEl.innerHTML = `
      <span>${days}d</span>
      <span>${hours}h</span>
      <span>${minutes}m</span>
    `;
  }

  tick();
  countdownInterval = setInterval(tick, 60000); // update every minute
}

// ========= CART LOGIC =========

function findCartItem(id) {
  return cart.find((item) => item.id === id);
}

function addToCart(productId) {
  const product = Object.values(productsBySeason)
    .flat()
    .find((p) => p.id === productId);

  if (!product) return;

  const existing = findCartItem(productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1,
    });
  }

  renderCart();
  openCart();
}

function updateCartQty(productId, delta) {
  const item = findCartItem(productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    const index = cart.findIndex((c) => c.id === productId);
    if (index !== -1) cart.splice(index, 1);
  }
  renderCart();
}

function removeCartItem(productId) {
  const index = cart.findIndex((c) => c.id === productId);
  if (index !== -1) {
    cart.splice(index, 1);
    renderCart();
  }
}

function renderCart() {
  cartItemsContainer.innerHTML = "";
  let total = 0;
  let count = 0;

  cart.forEach((item) => {
    total += item.price * item.qty;
    count += item.qty;

    const row = document.createElement("div");
    row.className = "cart-item";
    row.dataset.id = item.id;

    row.innerHTML = `
      <div class="cart-item-img">
        <img src="${item.image}" alt="${item.name}" />
      </div>
      <div class="cart-item-info">
        <p class="cart-item-title">${item.name}</p>
        <div class="cart-item-meta">${formatMoney(item.price)} x ${
      item.qty
    }</div>
        <div class="cart-item-actions">
          <button class="qty-button" data-action="decrease">-</button>
          <span>${item.qty}</span>
          <button class="qty-button" data-action="increase">+</button>
          <button class="qty-button" data-action="remove">x</button>
        </div>
      </div>
    `;

    cartItemsContainer.appendChild(row);
  });

  cartTotalEl.textContent = formatMoney(total);
  cartCountEl.textContent = count.toString();
}

// ========= CART OPEN/CLOSE =========

function openCart() {
  cartSidebar.classList.add("open");
  cartOverlay.classList.add("open");
}

function closeCart() {
  cartSidebar.classList.remove("open");
  cartOverlay.classList.remove("open");
}

// ========= CHECKOUT INTEGRATION =========

// TODO: replace with your deployed Netlify/Vercel function URL
const CHECKOUT_ENDPOINT =
  "https://YOUR-SITE.netlify.app/.netlify/functions/create-checkout-session";

async function handleCheckout() {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  try {
    const response = await fetch(CHECKOUT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cart }),
    });

    if (!response.ok) {
      console.error("Checkout error:", await response.text());
      alert("There was a problem starting checkout. Please try again.");
      return;
    }

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url; // Stripe Checkout URL
    } else {
      alert("Checkout session did not return a URL.");
    }
  } catch (err) {
    console.error(err);
    alert("Network error starting checkout.");
  }
}

// ========= EVENT LISTENERS =========

document.addEventListener("click", (e) => {
  const addBtn = e.target.closest(".product-add-btn");
  if (addBtn) {
    const id = addBtn.dataset.id;
    addToCart(id);
  }

  const cartActionBtn = e.target.closest(".qty-button");
  if (cartActionBtn) {
    const action = cartActionBtn.dataset.action;
    const cartItemRow = cartActionBtn.closest(".cart-item");
    if (!cartItemRow) return;
    const id = cartItemRow.dataset.id;

    if (action === "increase") updateCartQty(id, 1);
    if (action === "decrease") updateCartQty(id, -1);
    if (action === "remove") removeCartItem(id);
  }
});

seasonTabs.forEach((btn) => {
  btn.addEventListener("click", () => {
    const season = btn.dataset.season;
    activeSeason = season;
    updateSeasonContent(season);
  });
});

cartButton.addEventListener("click", openCart);
closeCartButton.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);
checkoutButton.addEventListener("click", handleCheckout);

// Footer year
// Footer year
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ========= INIT =========

// Only run seasonal hero / product setup on pages that actually have that layout
const hasSeasonLayout =
  productsGrid &&
  seasonHeading &&
  seasonSubheading &&
  productSectionTitle &&
  countdownEl;

if (hasSeasonLayout) {
  updateSeasonContent(activeSeason);
}

// Cart sidebar can exist on every page
renderCart();
