const menuData = {
  tacos: {
    feature: {
      name: "Quesabirria",
      kicker: "THE ICON",
      desc: "Crispy, cheesy, slow-braised bliss. Served with rich consommé for the perfect dip.",
      price: "18",
      image: "assets/birria.jpg"
    },
    items: [
      ["Street Tacos", "Three tacos · rice · beans · verde · picante", "16"],
      ["Ribeye", "Queso costra · chimichurri · avocado sauce", "24"],
      ["Al Pastor", "Onion · cilantro · pineapple · avocado sauce", "16"],
      ["Taco Flight", "Choose three styles · discover a favorite", "45"]
    ]
  },
  plates: {
    feature: {
      name: "Fajitas Aruma",
      kicker: "FROM THE FIRE",
      desc: "Steak, chicken, shrimp and chorizo with peppers, onions, rice, beans and warm tortillas.",
      price: "44",
      image: "assets/fajitas.jpg"
    },
    items: [
      ["Aruma Special", "Chicken · shrimp · peppers · squash · avocado crema", "19"],
      ["Carne Asada", "Skirt steak · peppers · onions · rice · beans", "22"],
      ["Pollo Chipotle", "Chicken · chipotle cream · mushrooms · rice", "18"],
      ["Supreme Burrito", "Ground beef · queso · lettuce · pico · crema", "15"]
    ]
  },
  drinks: {
    feature: {
      name: "Margarita Flight",
      kicker: "FOUR WAYS TO FLY",
      desc: "House, reposado, mango and strawberry—four bright pours made for the whole table.",
      price: "22",
      image: "assets/margarita.jpg"
    },
    items: [
      ["House Margarita", "Simple · no fuss · classic", "10"],
      ["Reposado Aruma", "Reposado · orange liqueur · lime · agave", "13"],
      ["Skinny", "Altos · orange · grapefruit · lime · agave", "12"],
      ["Dirty Horchata", "Rum · horchata · café · cinnamon", "12"]
    ]
  },
  sweets: {
    feature: {
      name: "Churros",
      kicker: "ONE MORE THING",
      desc: "Golden, cinnamon-sugar churros with cajeta and warm chocolate for dipping.",
      price: "15",
      image: "assets/churros.jpg"
    },
    items: [
      ["Fried Ice Cream", "Crunchy shell · vanilla ice cream · chocolate", "7"],
      ["Flan", "Silky custard · caramel", "7"],
      ["Tres Leches", "Three-milk cake · cream", "8"],
      ["Churros", "Cinnamon sugar · cajeta · chocolate", "15"]
    ]
  }
};

const fullMenuData = [
  ["Street Tacos", [
    ["Chicken", "Lettuce, curtido, chipotle sauce", "16"],
    ["Steak", "Onions, cilantro, avocado sauce", "17"],
    ["Carnitas", "Curtido, jalapeños", "16"],
    ["Walleye or Shrimp", "Cabbage, curtido, chipotle crema", "19"],
    ["Ribeye", "Queso costra, chimichurri, avocado sauce", "24"],
    ["Al Pastor", "Onions, cilantro, pineapple, avocado sauce", "16"]
  ]],
  ["House Favorites", [
    ["Aruma Special", "Chicken, shrimp, peppers, squash, poblano crema", "19"],
    ["Quesabirria", "Short rib, rice, beans, consommé", "18"],
    ["Chimichanga", "Queso, pico, beans, crema", "16"],
    ["Carnitas", "Fried pork, rice, beans, jalapeños", "16"],
    ["Carne Asada", "Skirt steak, peppers, onions, rice, beans", "22"]
  ]],
  ["Cocktails", [
    ["House Margarita", "Simple, no fuss, classic", "10"],
    ["Reposado Aruma", "Reposado tequila, orange liqueur, lime, agave", "13"],
    ["Cucumber Jalapeño", "Infused tequila, triple sec, lime, agave", "12"],
    ["Margarita Flight", "House, reposado, mango, strawberry", "22"],
    ["Patrón", "Barrel select, grapefruit, orange, lime, agave", "32"]
  ]],
  ["From Agaves", [
    ["Cantarito", "Barrel select, grapefruit, orange, lime, agave", "18"],
    ["Tequila Infused", "Pineapple and chile ancho infused", "11"],
    ["Vida Oaxaca", "Mezcal, gran gala, angostura, lime, agave", "11"],
    ["Clase Ancestral", "Mezcal, citrus, grapefruit, ginger", "22"],
    ["Clase Azul", "Premium tequila pour", "40"]
  ]],
  ["Fajitas", [
    ["Chicken", "Peppers, onions, tortillas and sides", "30"],
    ["Steak", "Peppers, onions, tortillas and sides", "33"],
    ["Shrimp", "Peppers, onions, tortillas and sides", "36"],
    ["Seafood", "Peppers, onions, tortillas and sides", "36"],
    ["Fajitas Aruma", "Steak, chicken, shrimp and chorizo for two", "44"]
  ]],
  ["Sweet Finish", [
    ["Churros", "Cinnamon sugar, cajeta, chocolate", "15"],
    ["Fried Ice Cream", "Crunchy shell, vanilla, chocolate", "7"],
    ["Flan", "Silky custard and caramel", "7"],
    ["Tres Leches", "Three-milk cake and cream", "8"],
    ["Kids Tenders & Fries", "A little something for the niños", "9"]
  ]]
];

const menuList = document.querySelector("#menu-list");
const featureImage = document.querySelector("#feature-image");
const featureName = document.querySelector("#feature-name");
const featureKicker = document.querySelector("#feature-kicker");
const featureDesc = document.querySelector("#feature-desc");
const featurePrice = document.querySelector("#feature-price");

function renderMenu(category) {
  const data = menuData[category];
  featureImage.style.opacity = 0;
  setTimeout(() => {
    featureImage.src = data.feature.image;
    featureImage.alt = data.feature.name;
    featureName.textContent = data.feature.name;
    featureKicker.textContent = data.feature.kicker;
    featureDesc.textContent = data.feature.desc;
    featurePrice.textContent = data.feature.price;
    featureImage.style.opacity = 1;
  }, 180);

  menuList.innerHTML = data.items.map((item, index) => `
    <div class="menu-item${index === 0 ? " active" : ""}" tabindex="0" data-index="${index}">
      <span>0${index + 1}</span>
      <div><strong>${item[0]}</strong><small>${item[1]}</small></div>
      <b>${item[2]}</b>
    </div>
  `).join("");
}

renderMenu("tacos");

document.querySelectorAll(".menu-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".menu-tab").forEach(t => {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    renderMenu(tab.dataset.category);
  });
});

menuList.addEventListener("pointerover", event => {
  const item = event.target.closest(".menu-item");
  if (!item) return;
  menuList.querySelectorAll(".menu-item").forEach(i => i.classList.remove("active"));
  item.classList.add("active");
});

menuList.addEventListener("focusin", event => {
  const item = event.target.closest(".menu-item");
  if (!item) return;
  menuList.querySelectorAll(".menu-item").forEach(i => i.classList.remove("active"));
  item.classList.add("active");
});

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

function closeMobileMenu() {
  mobileMenu.classList.remove("open");
  header.classList.remove("menu-active");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open menu");
  document.body.classList.remove("menu-open");
}

menuToggle.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  header.classList.toggle("menu-active", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  document.body.classList.toggle("menu-open", open);
});

mobileMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMobileMenu));

let lastScroll = 0;
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  header.classList.toggle("sticky", scrollY > 180);
  if (scrollY > lastScroll && scrollY > 600 && !mobileMenu.classList.contains("open")) {
    header.style.transform = "translateY(-110%)";
  } else {
    header.style.transform = "translateY(0)";
  }
  lastScroll = Math.max(0, scrollY);
}, { passive: true });

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const delay = Number(entry.target.dataset.delay || 0);
    setTimeout(() => entry.target.classList.add("visible"), delay);
    observer.unobserve(entry.target);
  });
}, { threshold: .12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const statObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const target = Number(entry.target.dataset.count);
    const start = performance.now();
    const duration = 1200;
    const tick = now => {
      const progress = Math.min((now - start) / duration, 1);
      entry.target.textContent = Math.round(target * (1 - Math.pow(1 - progress, 3)));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    statObserver.unobserve(entry.target);
  });
}, { threshold: .8 });

document.querySelectorAll("[data-count]").forEach(el => statObserver.observe(el));

if (window.matchMedia("(pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const glow = document.querySelector(".cursor-glow");
  window.addEventListener("pointermove", event => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
    glow.style.opacity = 1;
  });

  document.querySelectorAll(".tilt-card").forEach(card => {
    const initial = getComputedStyle(card).transform;
    card.addEventListener("pointermove", event => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      card.style.transform = `${initial === "none" ? "" : initial} rotateX(${-y * 4}deg) rotateY(${x * 5}deg) translateZ(8px)`;
    });
    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });

  window.addEventListener("scroll", () => {
    document.querySelectorAll(".parallax-image img").forEach(img => {
      const rect = img.parentElement.getBoundingClientRect();
      const move = (window.innerHeight / 2 - (rect.top + rect.height / 2)) * .045;
      img.style.translate = `0 ${Math.max(-30, Math.min(30, move))}px`;
    });
  }, { passive: true });
}

document.querySelectorAll(".cocktail-choice").forEach(choice => {
  choice.addEventListener("click", () => {
    document.querySelectorAll(".cocktail-choice").forEach(c => c.classList.remove("active"));
    choice.classList.add("active");
    const note = document.querySelector("#tasting-note");
    note.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 300 });
    note.textContent = choice.dataset.note;
  });
});

const reservationDialog = document.querySelector("#reservation-dialog");
const reservationForm = document.querySelector("#reservation-form");
const reservationSuccess = document.querySelector(".form-success");

document.querySelectorAll(".reserve-trigger").forEach(button => {
  button.addEventListener("click", () => {
    closeMobileMenu();
    reservationDialog.showModal();
    document.body.classList.add("modal-open");
  });
});

reservationForm.addEventListener("submit", event => {
  event.preventDefault();
  reservationForm.hidden = true;
  reservationSuccess.hidden = false;
});

const fullMenuDialog = document.querySelector("#full-menu-dialog");
document.querySelector("#full-menu-grid").innerHTML = fullMenuData.map(group => `
  <section class="full-menu-group">
    <h3>${group[0]}</h3>
    ${group[1].map(item => `<div class="full-menu-line"><strong>${item[0]}</strong><span>${item[2]}</span><small>${item[1]}</small></div>`).join("")}
  </section>
`).join("");

document.querySelector("#view-full-menu").addEventListener("click", () => {
  fullMenuDialog.showModal();
  document.body.classList.add("modal-open");
});

document.querySelectorAll("dialog").forEach(dialog => {
  dialog.querySelector(".modal-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => {
    const rect = dialog.getBoundingClientRect();
    const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
    if (!inside) dialog.close();
  });
  dialog.addEventListener("close", () => document.body.classList.remove("modal-open"));
});

const dateInput = document.querySelector('input[type="date"]');
const today = new Date();
today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
dateInput.min = today.toISOString().split("T")[0];
