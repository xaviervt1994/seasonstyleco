"use strict";

/* ==============================
   CONFIG: SEASONS & PRODUCTS
   ============================== */

const SEASON_CONFIG = {
  winter: {
    label: "Winter",
    heroHeading: "Winter Drops & Holiday Deals",
    heroSubheading:
      "Limited-time winter-only styles, cozy fits, and holiday-ready gadgets. When the season changes, these deals disappear.",
    sectionTitle: "Winter Featured Products",
    productsIntro:
      "Hand-picked winter clothing and gadgets, curated just for this season’s drop.",
    seoHtml: `
      <p>
        Season Style Co drops limited-time winter collections with cozy hoodies, thermal sets,
        and holiday gadgets built for cold weather. Once this drop ends, these exact bundles
        won’t return—so if you see something you like, grab it before the timer hits zero.
      </p>
      <p>
        From comfy streetwear to giftable tech, our winter picks are curated to help you stay warm,
        look good, and get more out of the season.
      </p>
    `,
    // Set this to whatever date your winter drop ends
    countdownEnd: new Date("2025-01-10T23:59:59"),
  },
  spring: {
    label: "Spring",
    heroHeading: "Fresh Fits & Spring Reset",
    heroSubheading:
      "Lightweight layers, fresh colors, and simple gadgets for resetting your space and style this spring.",
    sectionTitle: "Spring Featured Products",
    productsIntro:
      "Refresh your closet and your setup with curated spring-only drops.",
    seoHtml: `
      <p>
        Spring at Season Style Co is all about clean colors, light layers, and easy upgrades.
        We focus on limited-time runs so your fits stay unique, not over-saturated.
      </p>
      <p>
        These products are here only for the spring drop—once the season flips, they rotate out.
      </p>
    `,
    countdownEnd: null, // no timer for now (we’ll show a message)
  },
  summer: {
    label: "Summer",
    heroHeading: "Heatwave Essentials & Travel Gear",
    heroSubheading:
      "Stay cool and ready for anything with seasonal tees, shorts, and travel-friendly tech.",
    sectionTitle: "Summer Featured Products",
    productsIntro:
      "Summer-only drops designed for hot days, late nights, and trips.",
    seoHtml: `
      <p>
        Our summer collections are built for long days, late nights, and trips that actually happen.
        Think breathable fabrics, bold graphics, and useful gadgets.
      </p>
      <p>
        When summer ends, this drop closes and a completely new lineup rotates in.
      </p>
    `,
    countdownEnd: null,
  },
  fall: {
    label: "Fall",
    heroHeading: "Cozy Layers & Autumn Essentials",
    heroSubheading:
      "Transition pieces, warm tones, and everyday gadgets built for the chill.",
    sectionTitle: "Fall Featured Products",
    productsIntro:
      "Layer up with limited-time fall essentials and cozy pieces.",
    seoHtml: `
      <p>
        Fall drops at Season Style Co focus on layering pieces, warm neutrals, and everyday gadgets
        that fit the season—without feeling generic.
      </p>
      <p>
        Once this fall drop ends, these exact combos don’t come back.
      </p>
    `,
    countdownEnd: null,
  },
};

// Simple product catalog – edit these, swap images, change prices, etc.
const PRODUCTS = [
  /* WINTER */
  {
    id: "winter-cozy-hoodie",
    season: "winter",
    name: "Cozy Fleece Hoodie",
    description:
      "Thick, ultra-soft fleece with a relaxed fit. Perfect for cold mornings.",
    price: 49.99,
    oldPrice: 69.99,
    badge: "Bestseller",
    limited: true,
    image: "assets/winter-hoodie.jpg",
  },
  {
    id: "winter-beanie-set",
    season: "winter",
    name: "Thermal Beanie & Gloves Set",
    description: "Matching knit set to keep your ears and hands warm.",
    price: 24.99,
    oldPrice: 34.99,
    badge: "Bundle Deal",
    limited: false,
    image: "assets/winter-beanie.jpg",
  },
  {
    id: "winter-led-lights",
    season: "winter",
    name: "Warm LED Room Lights",
    description: "Soft ambient LEDs to give your room a cozy holiday glow.",
    price: 19.99,
    oldPrice: 29.99,
    badge: "Holiday Vibes",
    limited: false,
    image: "assets/winter-lights.jpg",
  },
  {
    id: "winter-mug-warmer",
    season: "winter",
    name: "USB Mug Warmer",
    description:
      "Keeps your coffee, tea, or cocoa warm while you work or game.",
    price: 17.99,
    oldPrice: 24.99,
    badge: "Gift Favorite",
    limited: true,
    image: "assets/winter-mug-warmer.jpg",
  },

  /* SPRING */
  {
    id: "spring-crewneck",
    season: "spring",
    name: "Pastel Oversized Crewneck",
    description: "Lightweight fleece with soft spring colorways.",
    price: 39.99,
    oldPrice: 54.99,
    badge: "New Drop",
    limited: true,
    image: "assets/spring-crewneck.jpg",
  },
  {
    id: "spring-desk-plant",
    season: "spring",
    name: "Minimal Desk Plant (Artificial)",
    description: "Zero-maintenance greenery to refresh your workspace.",
    price: 14.99,
    oldPrice: 19.99,
    badge: "Easy Upgrade",
    limited: false,
    image: "assets/spring-plant.jpg",
  },

  /* SUMMER */
  {
    id: "summer-graphic-tee",
    season: "summer",
    name: "Oversized Graphic Tee",
    description: "Breathable cotton with limited-run artwork.",
    price: 29.99,
    oldPrice: 39.99,
    badge: "Drop Exclusive",
    limited: true,
    image: "assets/summer-tee.jpg",
  },
  {
    id: "summer-portable-fan",
    season: "summer",
    name: "Rechargeable Portable Fan",
    description: "Pocket-sized cooling with USB-C charging.",
    price: 21.99,
    oldPrice: 27.99,
    badge: "Stay Cool",
    limited: false,
    image: "assets/summer-fan.jpg",
  },

  /* FALL */
  {
    id: "fall-flannel",
    season: "fall",
    name: "Soft Plaid Flannel",
    description: "Relaxed-fit flannel that layers over any tee.",
    price: 44.99,
    oldPrice: 59.99,
    badge: "Fall Staple",
    limited: true,
    image: "assets/fall-flannel.jpg",
  },
  {
    id: "fall-candle-set",
    season: "fall",
    name: "Cozy Scent Candle Set",
    description: "Three-pack candles with warm autumn scents.",
    price: 26.99,
    oldPrice: 34.99,
    badge: "Cozy Pack",
    limited: false,
    image: "assets/fall-candles.jpg",
  },
];

// Quick lookup by id
const PRODUCT_INDEX = PRODUCTS.reduce((map, p) => {
  map[p.id] = p;
  return map;
}, {});

/* ==============================
   STATE
   ============================== */

let currentSeason = "winter";
let cart = [];
let countdownInterval = null;

/* ==============================
   DOM ELEMENTS
   ============================== */

const seasonTabs = document.querySelectorAll(".season-tab");
const heroHeadingEl = document.getElementById("season-heading");
const heroSubheadingEl = document.getElementById("season-subheading");
const productsSectionTitleEl = document.getElementById("product-section-title");
const productsIntroEl = document.querySelector(".products-intro");
const productsGridEl = document.getElementById("products-grid");
const seasonSeoTextEl = document.getElementById("season-seo-text");

const cartButtonEl = document.getElementById("cart-button");
const cartCountEl = document.getElementById("cart-count");
const cartSidebarEl = document.getElementById("cart-sidebar");
const cartOverlayEl = document.getElementById("cart-overlay");
const closeCartButtonEl = document.getElementById("close-cart");
const cartItemsEl = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
const checkoutButtonEl = document.getElementById("checkout-button");

const yearEl = document.getElementById("year");
const countdownEl = document.getElementById("countdown");

/* ==============================
   HELPERS
   ============================== */

function formatMoney(amount) {
  return `$${amount.toFixed(2)}`;
}

function getProductsForSeason(season) {
  return PRODUCTS.filter((p) => p.season === season);
}

/* ==============================
   SEASON RENDERING
   ============================== */

function renderSeason(season) {
  currentSeason = season;
  const config = SEASON_CONFIG[season];

  if (!config) return;

  // Update text content
  heroHeadingEl.textContent = config.heroHeading;
  heroSubheadingEl.textContent = config.heroSubheading;
  productsSectionTitleEl.textContent = config.sectionTitle;
  if (productsIntroEl) {
    productsIntroEl.textContent = config.productsIntro;
  }
  if (seasonSeoTextEl) {
    seasonSeoTextEl.innerHTML = config.seoHtml;
  }

  // Update active tab
  seasonTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.season === season);
  });

  // Render products for this season
  renderProducts(getProductsForSeason(season));

  // Update countdown
  startCountdownForSeason(config);
}

function renderProducts(products) {
  if (!productsGridEl) return;

  if (!products.length) {
    productsGridEl.innerHTML =
      "<p>No products for this season yet. New drops are coming soon.</p>";
    return;
  }

  const cardsHtml = products
    .map((product) => {
      const { id, name, description, price, oldPrice, badge, limited, image } =
        product;

      return `
      <article class="product-card">
        <div class="product-img-wrapper">
          <img src="${image}" alt="${name}" loading="lazy" />
        </div>

        <div class="product-badge-row">
          <span>${badge || "Season Drop"}</span>
          ${
            limited
              ? '<span class="limited">Limited Run</span>'
              : "<span>In Season</span>"
          }
        </div>

        <div class="product-info">
          <h4 class="product-title">${name}</h4>
          <p class="product-desc">${description}</p>
        </div>

        <div class="product-footer">
          <div class="product-price">
            <span class="product-price-main">${formatMoney(price)}</span>
            ${
              oldPrice
                ? `<span class="product-price-old">${formatMoney(
                    oldPrice
                  )}</span>`
                : ""
            }
          </div>
          <button
            type="button"
            class="product-add-btn"
            data-product-id="${id}"
          >
            Add to Cart
          </button>
        </div>
      </article>
    `;
    })
    .join("");

  productsGridEl.innerHTML = cardsHtml;
}

/* ==============================
   COUNTDOWN
   ============================== */

function startCountdownForSeason(config) {
  if (!countdownEl) return;

  // Clear any existing interval
  if (countdownInterval) {
    clearInterval(countdownInterval);
    countdownInterval = null;
  }

  if (!config.countdownEnd) {
    countdownEl.textContent = "New drops go live throughout the season.";
    return;
  }

  function updateCountdown() {
    const now = new Date();
    const diff = config.countdownEnd - now;

    if (diff <= 0) {
      clearInterval(countdownInterval);
      countdownEl.textContent = "This drop just ended. New styles coming soon.";
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    countdownEl.innerHTML = `
      <span>${String(days).padStart(2, "0")}d</span>
      <span>${String(hours).padStart(2, "0")}h</span>
      <span>${String(minutes).padStart(2, "0")}m</span>
      <span>${String(seconds).padStart(2, "0")}s</span>
    `;
  }

  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);
}

/* ==============================
   CART LOGIC
   ============================== */

function openCart() {
  cartSidebarEl.classList.add("open");
  cartOverlayEl.classList.add("open");
  cartSidebarEl.setAttribute("aria-hidden", "false");
  cartOverlayEl.setAttribute("aria-hidden", "false");
}

function closeCart() {
  cartSidebarEl.classList.remove("open");
  cartOverlayEl.classList.remove("open");
  cartSidebarEl.setAttribute("aria-hidden", "true");
  cartOverlayEl.setAttribute("aria-hidden", "true");
}

function addToCart(productId) {
  const product = PRODUCT_INDEX[productId];
  if (!product) return;

  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  }

  updateCartUI();
  openCart();
}

function changeCartQuantity(productId, delta) {
  const item = cart.find((i) => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter((i) => i.id !== productId);
  }

  updateCartUI();
}

function removeFromCart(productId) {
  cart = cart.filter((i) => i.id !== productId);
  updateCartUI();
}

function updateCartUI() {
  // Count + total
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  cartCountEl.textContent = totalItems;
  cartTotalEl.textContent = formatMoney(totalPrice);

  // Render list
  if (!cart.length) {
    cartItemsEl.innerHTML =
      "<p>Your cart is empty. Start by adding a seasonal pick.</p>";
    return;
  }

  const itemsHtml = cart
    .map((item) => {
      return `
      <div class="cart-item">
        <div class="cart-item-img">
          <img src="${item.image}" alt="${item.name}" />
        </div>
        <div class="cart-item-info">
          <p class="cart-item-title">${item.name}</p>
          <p class="cart-item-meta">
            ${item.quantity} × ${formatMoney(item.price)}
          </p>
          <div class="cart-item-actions">
            <button
              type="button"
              class="qty-button"
              data-action="decrease"
              data-product-id="${item.id}"
            >−</button>
            <span>${item.quantity}</span>
            <button
              type="button"
              class="qty-button"
              data-action="increase"
              data-product-id="${item.id}"
            >+</button>
            <button
              type="button"
              class="qty-button"
              data-action="remove"
              data-product-id="${item.id}"
            >&times;</button>
          </div>
        </div>
      </div>
    `;
    })
    .join("");

  cartItemsEl.innerHTML = itemsHtml;
}

/* ==============================
   CHECKOUT (NETLIFY FUNCTION)
   ============================== */

async function handleCheckout() {
  if (!cart.length) {
    alert("Your cart is empty.");
    return;
  }

  checkoutButtonEl.disabled = true;
  const originalText = checkoutButtonEl.textContent;
  checkoutButtonEl.textContent = "Redirecting...";

  try {
    const response = await fetch(
      "/.netlify/functions/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cart.map((item) => ({
            id: item.id,
            quantity: item.quantity,
          })),
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Checkout endpoint error");
    }

    const data = await response.json();

    if (data && data.url) {
      window.location.href = data.url; // Stripe Checkout URL
    } else {
      throw new Error("No checkout URL returned");
    }
  } catch (error) {
    console.error(error);
    alert(
      "Checkout isn’t fully connected yet. Once your Stripe/PayPal backend is live, this button will send customers to the payment page."
    );
  } finally {
    checkoutButtonEl.disabled = false;
    checkoutButtonEl.textContent = originalText;
  }
}

/* ==============================
   EVENT BINDINGS & INIT
   ============================== */

document.addEventListener("DOMContentLoaded", () => {
  // Year in footer
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Season tabs
  seasonTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const season = tab.dataset.season;
      if (season && season !== currentSeason) {
        renderSeason(season);
      }
    });
  });

  // Product add-to-cart (event delegation)
  if (productsGridEl) {
    productsGridEl.addEventListener("click", (event) => {
      const button = event.target.closest(".product-add-btn");
      if (!button) return;
      const productId = button.dataset.productId;
      if (productId) {
        addToCart(productId);
      }
    });
  }

  // Cart open/close
  if (cartButtonEl) {
    cartButtonEl.addEventListener("click", openCart);
  }

  if (closeCartButtonEl) {
    closeCartButtonEl.addEventListener("click", closeCart);
  }

  if (cartOverlayEl) {
    cartOverlayEl.addEventListener("click", closeCart);
  }

  // Close on ESC
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeCart();
    }
  });

  // Cart quantity & remove (delegation)
  if (cartItemsEl) {
    cartItemsEl.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-action]");
      if (!button) return;
      const action = button.dataset.action;
      const productId = button.dataset.productId;

      if (!productId) return;

      if (action === "increase") {
        changeCartQuantity(productId, 1);
      } else if (action === "decrease") {
        changeCartQuantity(productId, -1);
      } else if (action === "remove") {
        removeFromCart(productId);
      }
    });
  }

  // Checkout
  if (checkoutButtonEl) {
    checkoutButtonEl.addEventListener("click", handleCheckout);
  }

  // Initial render
  renderSeason(currentSeason);
  updateCartUI();
});
