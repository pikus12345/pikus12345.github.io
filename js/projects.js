// ==========================================================================
// projects.js — данные о проектах и рендеринг карточек в секции "Проекты"
// Экспортируется как ES-модуль и подключается в main.js
// ==========================================================================

/**
 * Массив с данными о проектах.
 * type: 'pet' | 'gamejam' | 'commercial' | 'legacy' — влияет на цвет лейбла карточки
 */
export const projects = [
  {
    id: 'psx-horror',
    title: 'PSX-Horror',
    type: 'pet',
    typeLabel: 'Pet-проект',
    description:
      'Технический стенд-шаблон для 3D-хоррора в стиле PSX. Реализованы MVC-архитектура, ' +
      'внедрение зависимостей через VContainer, управление корутинами и объектный пул.',
    tags: ['Unity', 'C#', 'MVC', 'VContainer', 'DOTween'],
    links: [
      { label: 'GitHub', url: 'https://github.com/your-account/psx-horror', icon: '🔗' }
    ],
    anchor: '#project-psx-horror'
  },
  {
    id: 'inquisitor',
    title: 'Инквизитор',
    type: 'gamejam',
    typeLabel: 'GameJam',
    description:
      'Игра, созданная за 48 часов на геймджеме. Стейт-машина для ИИ противников, ' +
      'система сохранения прогресса через JSON.',
    tags: ['GameJam', 'State Machine', 'JSON Save', 'Unity'],
    links: [
      { label: 'Freelance.ru', url: 'https://freelance.ru/portfolio/project/view/1649844', icon: '🌐' },
      { label: 'GitHub', url: 'https://github.com/your-account/inquisitor', icon: '🔗' }
    ],
    anchor: '#project-inquisitor'
  },
  {
    id: 'ural-heart',
    title: 'Сердце Урала',
    type: 'commercial',
    typeLabel: 'Коммерческий',
    description:
      'Ритм-RPG, разработанная в команде. Моя зона ответственности — игровые механики и ' +
      'интеграция систем прогрессии персонажа.',
    tags: ['Commercial', 'Team', 'Steam', 'Git'],
    links: [
      { label: 'Steam', url: 'https://store.steampowered.com/', icon: '🎮' }
    ],
    anchor: '#project-ural-heart'
  },
  {
    id: 'tanchiki',
    title: 'Танчики',
    type: 'legacy',
    typeLabel: 'История роста',
    description:
      'Мой первый проект в Unity. Наглядный пример того, как НЕ надо строить архитектуру — ' +
      'и как я вырос с тех пор.',
    tags: ['Legacy', 'Learning', 'Refactoring'],
    links: [
      { label: 'GitHub (архив)', url: 'https://github.com/your-account/tanchiki-legacy', icon: '🔗' }
    ],
    anchor: '#project-tanchiki'
  }
];

/**
 * Создаёт DOM-элемент карточки проекта на основе данных.
 * @param {Object} project
 * @returns {HTMLElement}
 */
function createProjectCard(project) {
  const card = document.createElement('article');
  card.className = 'card project-card fade-in';

  const linksHtml = project.links
    .map(
      (link) =>
        `<a class="btn btn-secondary btn-small" href="${link.url}" target="_blank" rel="noopener noreferrer">
          <span aria-hidden="true">${link.icon}</span> ${link.label}
        </a>`
    )
    .join('');

  const tagsHtml = project.tags.map((tag) => `<span class="tag">${tag}</span>`).join('');

  card.innerHTML = `
    <div class="project-card-header">
      <h3 class="project-card-title">${project.title}</h3>
      <span class="project-type ${project.type}">${project.typeLabel}</span>
    </div>
    <p class="project-card-description">${project.description}</p>
    <div class="tag-list">${tagsHtml}</div>
    <div class="project-card-footer">
      <a class="btn btn-primary btn-small" href="${project.anchor}">Подробнее</a>
      ${linksHtml}
    </div>
  `;

  return card;
}

/**
 * Рендерит все карточки проектов в контейнер с указанным id.
 * @param {string} containerId
 */
export function renderProjects(containerId = 'projects-grid') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const fragment = document.createDocumentFragment();
  projects.forEach((project) => {
    fragment.appendChild(createProjectCard(project));
  });

  container.appendChild(fragment);
}
