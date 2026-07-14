// ==========================================================================
// main.js — точка входа. Навигация, плавный скролл, анимации при скролле,
// мобильное меню, кнопка "наверх", анимация полосок навыков.
// ==========================================================================

import { renderProjects } from './projects.js';

/* Помечаем, что JS реально запустился — включаем CSS-анимации fade-in.
   Без этого класса (если скрипт не выполнился) весь контент остаётся видимым. */
document.documentElement.classList.add('js');

/* ---------- Рендер карточек проектов ---------- */
try {
  renderProjects('projects-grid');
} catch (error) {
  console.error('Не удалось отрендерить карточки проектов:', error);
}

/* ---------- Мобильное меню ---------- */
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('is-open');
    navToggle.classList.toggle('is-active', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Закрываем меню при клике на пункт навигации (актуально для мобильных)
  navList.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      navList.classList.remove('is-open');
      navToggle.classList.remove('is-active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---------- Подсветка активного пункта навигации при скролле ---------- */
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNavLink() {
  let currentSectionId = '';
  const scrollY = window.scrollY + 120;

  sections.forEach((section) => {
    if (scrollY >= section.offsetTop) {
      currentSectionId = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${currentSectionId}`);
  });
}

window.addEventListener('scroll', updateActiveNavLink, { passive: true });
updateActiveNavLink();

/* ---------- Анимация появления блоков при скролле (Intersection Observer) ---------- */
const observerOptions = {
  root: null,
  rootMargin: '0px 0px -80px 0px',
  threshold: 0.1
};

if ('IntersectionObserver' in window) {
  const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Наблюдение подключаем после того, как карточки проектов уже отрендерены
  document.querySelectorAll('.fade-in').forEach((el) => fadeInObserver.observe(el));
} else {
  // Браузер не поддерживает IntersectionObserver — просто показываем всё сразу
  document.querySelectorAll('.fade-in').forEach((el) => el.classList.add('is-visible'));
}

/* ---------- Анимация полосок уровня навыков ---------- */
const skillBars = document.querySelectorAll('.skill-bar-fill');

if ('IntersectionObserver' in window) {
  const skillObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const value = target.dataset.level || '0';
        target.style.width = `${value}%`;
        observer.unobserve(target);
      }
    });
  }, { threshold: 0.4 });

  skillBars.forEach((bar) => skillObserver.observe(bar));
} else {
  skillBars.forEach((bar) => {
    bar.style.width = `${bar.dataset.level || '0'}%`;
  });
}

/* ---------- Кнопка "наверх" ---------- */
const backToTopBtn = document.querySelector('.back-to-top');

if (backToTopBtn) {
  window.addEventListener('scroll', () => {
    backToTopBtn.classList.toggle('is-visible', window.scrollY > 480);
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---------- Текущий год в футере ---------- */
const yearEl = document.getElementById('current-year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

/* ---------- Ленивая загрузка изображений (фолбэк для старых браузеров) ---------- */
if ('loading' in HTMLImageElement.prototype === false) {
  document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
    img.src = img.dataset.src || img.src;
  });
}
