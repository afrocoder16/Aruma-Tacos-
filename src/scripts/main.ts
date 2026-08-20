import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const $ = <T extends Element>(selector: string, root: ParentNode = document) => root.querySelector<T>(selector);
const $$ = <T extends Element>(selector: string, root: ParentNode = document) => Array.from(root.querySelectorAll<T>(selector));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function splitWords(element: HTMLElement) {
  if (element.dataset.splitReady) return;

  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  const textNodes: Text[] = [];
  let node = walker.nextNode();

  while (node) {
    if (node.textContent?.trim()) textNodes.push(node as Text);
    node = walker.nextNode();
  }

  textNodes.forEach((textNode) => {
    const fragment = document.createDocumentFragment();
    const parts = textNode.textContent?.split(/(\s+)/) ?? [];

    parts.forEach((part) => {
      if (/^\s+$/.test(part)) {
        fragment.appendChild(document.createTextNode(part));
        return;
      }

      const mask = document.createElement('span');
      const word = document.createElement('span');
      mask.className = 'split-word-wrap';
      word.className = 'split-word';
      word.textContent = part;
      mask.appendChild(word);
      fragment.appendChild(mask);
    });

    textNode.parentNode?.replaceChild(fragment, textNode);
  });

  element.dataset.splitReady = 'true';
}

function closeMobileMenu() {
  const menu = $('[data-mobile-menu]');
  const toggle = $('[data-menu-toggle]');
  if (!menu || !menu.classList.contains('is-open')) return;

  toggle?.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('is-locked');

  if (reduceMotion) {
    menu.classList.remove('is-open');
    return;
  }

  gsap.to(menu, {
    autoAlpha: 0,
    y: -20,
    duration: 0.45,
    ease: 'power3.inOut',
    onComplete: () => menu.classList.remove('is-open'),
  });
}

function setupNavigation() {
  const header = $('[data-header]');
  const menu = $('[data-mobile-menu]');
  const toggle = $('[data-menu-toggle]');
  const close = $('[data-menu-close]');

  let lastY = window.scrollY;
  window.addEventListener('scroll', () => {
    if (!header) return;
    const currentY = window.scrollY;
    header.classList.toggle('is-sticky', currentY > 90);
    header.classList.toggle('is-hidden', currentY > 500 && currentY > lastY + 3);
    if (currentY < lastY - 3) header.classList.remove('is-hidden');
    lastY = currentY;
  }, { passive: true });

  toggle?.addEventListener('click', () => {
    if (!menu) return;
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('is-locked');

    if (!reduceMotion) {
      gsap.fromTo(menu, { autoAlpha: 0, y: -20 }, { autoAlpha: 1, y: 0, duration: .55, ease: 'power3.out' });
      gsap.fromTo($$('nav a', menu), { y: 35, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .55, stagger: .06, delay: .12, ease: 'power3.out' });
    }
  });

  close?.addEventListener('click', closeMobileMenu);
  $$<HTMLAnchorElement>('a', menu ?? document).forEach((link) => link.addEventListener('click', closeMobileMenu));
}

function setupDialogs() {
  const reservationDialog = $('[data-reservation-dialog]') as HTMLDialogElement | null;
  const reservationForm = $('[data-reservation-form]') as HTMLFormElement | null;
  const reservationSuccess = $('[data-reservation-success]') as HTMLElement | null;
  const menuDialog = $('[data-menu-dialog]') as HTMLDialogElement | null;

  const openReservation = () => {
    closeMobileMenu();
    if (!reservationDialog) return;
    if (reservationForm) reservationForm.hidden = false;
    if (reservationSuccess) reservationSuccess.hidden = true;
    reservationDialog.showModal();
    document.body.classList.add('is-locked');
    if (!reduceMotion) gsap.fromTo(reservationDialog, { y: 35, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .45, ease: 'power3.out' });
  };

  $$('[data-reserve-open]').forEach((button) => button.addEventListener('click', openReservation));
  $$('[data-dialog-close]').forEach((button) => button.addEventListener('click', () => {
    reservationDialog?.close();
    document.body.classList.remove('is-locked');
  }));

  const dateInput = $('input[type="date"]', reservationDialog ?? document) as HTMLInputElement | null;
  if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];

  reservationForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    reservationForm.hidden = true;
    if (reservationSuccess) reservationSuccess.hidden = false;
  });

  $('[data-full-menu-open]')?.addEventListener('click', () => {
    menuDialog?.showModal();
    document.body.classList.add('is-locked');
    if (!reduceMotion && menuDialog) gsap.fromTo(menuDialog, { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .5, ease: 'power3.out' });
  });

  $('[data-menu-dialog-close]')?.addEventListener('click', () => {
    menuDialog?.close();
    document.body.classList.remove('is-locked');
  });

  [reservationDialog, menuDialog].forEach((dialog) => {
    dialog?.addEventListener('click', (event) => {
      if (event.target !== dialog) return;
      dialog.close();
      document.body.classList.remove('is-locked');
    });
    dialog?.addEventListener('close', () => document.body.classList.remove('is-locked'));
  });
}

function setupMenu() {
  const tabs = $$<HTMLButtonElement>('[data-menu-tab]');
  const visuals = $$<HTMLElement>('[data-menu-visual]');
  const panels = $$<HTMLElement>('[data-menu-panel]');
  let activeKey = tabs[0]?.dataset.menuTab;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const key = tab.dataset.menuTab;
      if (!key || key === activeKey) return;
      activeKey = key;

      tabs.forEach((item) => {
        const active = item === tab;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-selected', String(active));
      });

      visuals.forEach((visual) => visual.classList.toggle('is-active', visual.dataset.menuVisual === key));
      panels.forEach((panel) => {
        const active = panel.dataset.menuPanel === key;
        panel.classList.toggle('is-active', active);
        if (active && !reduceMotion) {
          gsap.fromTo($$('.menu-item', panel), { x: 22, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: .48, stagger: .055, ease: 'power3.out' });
        }
      });
    });
  });
}

function setupCocktails() {
  const note = $('[data-tasting-note]');
  const mood = $('[data-tasting-mood]');

  $$<HTMLButtonElement>('.cocktail-choice').forEach((choice) => {
    choice.addEventListener('click', () => {
      $$('.cocktail-choice').forEach((item) => item.classList.toggle('is-active', item === choice));

      if (!note || !mood) return;
      const update = () => {
        note.textContent = choice.dataset.note ?? '';
        mood.textContent = choice.dataset.proof ?? '';
      };

      if (reduceMotion) {
        update();
      } else {
        gsap.to([note, mood], { y: -8, autoAlpha: 0, duration: .16, onComplete: () => {
          update();
          gsap.fromTo([note, mood], { y: 8 }, { y: 0, autoAlpha: 1, duration: .28, ease: 'power2.out' });
        }});
      }
    });
  });
}

function setupCursor() {
  if (reduceMotion || !window.matchMedia('(pointer: fine)').matches) return;
  const cursor = $('[data-cursor]') as HTMLElement | null;
  if (!cursor) return;
  const label = $('span', cursor);
  const xTo = gsap.quickTo(cursor, 'x', { duration: .45, ease: 'power3' });
  const yTo = gsap.quickTo(cursor, 'y', { duration: .45, ease: 'power3' });

  window.addEventListener('pointermove', (event) => {
    xTo(event.clientX);
    yTo(event.clientY);
  });

  $$<HTMLElement>('[data-cursor-label]').forEach((target) => {
    target.addEventListener('mouseenter', () => {
      if (label) label.textContent = target.dataset.cursorLabel ?? 'View';
      gsap.to(cursor, { autoAlpha: 1, scale: 1, duration: .3, ease: 'power3.out' });
    });
    target.addEventListener('mouseleave', () => gsap.to(cursor, { autoAlpha: 0, scale: .25, duration: .25 }));
  });
}

function setupScrollMotion() {
  if (reduceMotion) return;

  $$<HTMLElement>('[data-split]').forEach(splitWords);

  $$<HTMLElement>('[data-split]').forEach((heading) => {
    gsap.from($$('.split-word', heading), {
      yPercent: 115,
      rotate: 2,
      duration: 1.05,
      stagger: .035,
      ease: 'power4.out',
      scrollTrigger: { trigger: heading, start: 'top 83%', once: true },
    });
  });

  $$<HTMLElement>('[data-reveal]').forEach((element) => {
    gsap.from(element, {
      y: 34,
      autoAlpha: 0,
      duration: .9,
      ease: 'power3.out',
      scrollTrigger: { trigger: element, start: 'top 88%', once: true },
    });
  });

  $$<HTMLElement>('.image-reveal').forEach((element) => {
    gsap.from(element, {
      clipPath: 'inset(0 0 100% 0)',
      duration: 1.25,
      ease: 'power4.inOut',
      scrollTrigger: { trigger: element, start: 'top 86%', once: true },
    });
  });

  $$<HTMLElement>('[data-parallax]').forEach((element) => {
    const image = $('img', element);
    if (!image) return;
    const amount = Number(element.dataset.parallax ?? .08) * 100;
    gsap.fromTo(image, { yPercent: -Math.abs(amount) / 2 }, {
      yPercent: Math.abs(amount) / 2,
      ease: 'none',
      scrollTrigger: { trigger: element, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });

  $$<HTMLElement>('[data-count]').forEach((element) => {
    const target = Number(element.dataset.count ?? 0);
    const proxy = { value: 0 };
    gsap.to(proxy, {
      value: target,
      duration: 1.6,
      ease: 'power2.out',
      scrollTrigger: { trigger: element, start: 'top 88%', once: true },
      onUpdate: () => { element.textContent = Math.round(proxy.value).toString(); },
    });
  });

  const rail = $('[data-horizontal-rail]') as HTMLElement | null;
  if (rail) {
    gsap.to(rail, {
      x: () => -Math.max(0, rail.scrollWidth - window.innerWidth + 60),
      ease: 'none',
      scrollTrigger: { trigger: '.ritual', start: 'top 70%', end: 'bottom 25%', scrub: 1.1, invalidateOnRefresh: true },
    });
  }

  const gallery = $('[data-gallery-track]') as HTMLElement | null;
  if (gallery) {
    gsap.fromTo(gallery, { x: '8vw' }, {
      x: () => -Math.max(0, gallery.scrollWidth - window.innerWidth + 80),
      ease: 'none',
      scrollTrigger: { trigger: '.gallery', start: 'top bottom', end: 'bottom top', scrub: 1.2, invalidateOnRefresh: true },
    });
  }

  const manifestoLines = $$<HTMLElement>('[data-manifesto] > span');
  manifestoLines.forEach((line, index) => {
    gsap.from(line, {
      xPercent: index % 2 === 0 ? -13 : 13,
      autoAlpha: .2,
      ease: 'none',
      scrollTrigger: { trigger: '.manifesto', start: 'top bottom', end: 'bottom top', scrub: 1 },
    });
  });
}

function setupProgress() {
  const progress = $('[data-scroll-progress]') as HTMLElement | null;
  if (!progress) return;

  window.addEventListener('scroll', () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const value = max > 0 ? (window.scrollY / max) * 100 : 0;
    progress.style.width = `${value}%`;
  }, { passive: true });
}

async function playIntro() {
  const loader = $('[data-loader]') as HTMLElement | null;
  if (!loader) return;

  if (reduceMotion) {
    loader.remove();
    return;
  }

  await document.fonts.ready;
  const counter = $('[data-loader-count]') as HTMLElement | null;
  const proxy = { value: 0 };
  const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

  timeline
    .to(proxy, { value: 100, duration: 1.05, ease: 'power2.inOut', onUpdate: () => {
      if (counter) counter.textContent = Math.round(proxy.value).toString().padStart(2, '0');
    }}, 0)
    .to('[data-loader-line]', { scaleX: 1, duration: 1.05, ease: 'power2.inOut' }, 0)
    .to('.page-loader__brand', { y: -18, autoAlpha: 0, duration: .35 }, 1.05)
    .to(loader, { yPercent: -100, duration: .75, ease: 'power4.inOut' }, 1.15)
    .from('[data-hero-media] img', { scale: 1.2, duration: 1.6, ease: 'power3.out' }, 1.55)
    .from('.hero__title .split-line > span', { yPercent: 115, duration: 1.05, stagger: .09, ease: 'power4.out' }, 1.52)
    .from('[data-hero-item]', { y: 24, autoAlpha: 0, duration: .75, stagger: .09 }, 1.85)
    .from('.hero__stamp', { scale: .35, autoAlpha: 0, rotate: -20, duration: .8, ease: 'back.out(1.7)' }, 2.05)
    .add(() => loader.remove());
}

setupNavigation();
setupDialogs();
setupMenu();
setupCocktails();
setupCursor();
setupProgress();
setupScrollMotion();
playIntro().then(() => ScrollTrigger.refresh());

window.addEventListener('load', () => ScrollTrigger.refresh());
