const routes = {
  home: 'pages/home.html',
  tariffs: 'pages/tariffs.html',
  features: 'pages/features.html',
  coverage: 'pages/coverage.html',
  support: 'pages/support.html',
  about: 'pages/about.html'
};

const tips = [
  'Для літніх абонентів активуйте автовідповідь на пропущені виклики.',
  'Тариф «За Ноги Сімейний» дозволяє внутрішньомережеві дзвінки без ліміту.',
  'Номер 010 зручний для сервісних ліній і коротких візиток.',
  'У роумінгу пріоритет — голос, тому батарея тримає довше.'
];

const appRoot = document.getElementById('app-root');
const statusBox = document.getElementById('ajax-status');
const navButtons = [...document.querySelectorAll('.nav-link')];
const tipBox = document.getElementById('tip-box');
const modal = document.getElementById('join-modal');
const joinForm = document.getElementById('join-form');

async function loadRoute(routeName) {
  const url = routes[routeName] || routes.home;
  statusBox.textContent = `Завантаження розділу: ${routeName}...`;

  try {
    const html = await fetch(url).then((r) => r.text());
    appRoot.innerHTML = html;
    statusBox.textContent = `Розділ «${routeName}» завантажено через AJAX.`;

    if (routeName === 'tariffs') {
      await mountTariffs();
    }
  } catch (error) {
    statusBox.textContent = 'Помилка завантаження сторінки.';
    appRoot.innerHTML = `<p>Не вдалося завантажити контент: ${error.message}</p>`;
  }
}

async function mountTariffs() {
  const host = document.getElementById('tariff-data-host');
  if (!host) return;
  const data = await fetch('data/tariffs.json').then((r) => r.json());
  host.innerHTML = data
    .map(
      (item) => `
      <article class="small-card">
        <h4>${item.name}</h4>
        <p><strong>${item.price}</strong> / місяць</p>
        <ul>
          ${item.points.map((p) => `<li>${p}</li>`).join('')}
        </ul>
      </article>
    `
    )
    .join('');
}

function activateNav(route) {
  navButtons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.route === route);
  });
}

navButtons.forEach((btn) => {
  btn.addEventListener('click', async () => {
    const route = btn.dataset.route;
    activateNav(route);
    await loadRoute(route);
    history.pushState({ route }, '', `#${route}`);
  });
});

document.getElementById('btn-load-tariff').addEventListener('click', async () => {
  activateNav('tariffs');
  await loadRoute('tariffs');
});

document.getElementById('btn-toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

document.getElementById('btn-random-tip').addEventListener('click', () => {
  tipBox.textContent = tips[Math.floor(Math.random() * tips.length)];
});

document.getElementById('btn-open-modal').addEventListener('click', () => {
  modal.showModal();
});

joinForm.addEventListener('close', () => {
  if (joinForm.returnValue === 'submit') {
    statusBox.textContent = 'Заявку прийнято. Менеджер передзвонить протягом 15 хвилин.';
  }
});

window.addEventListener('popstate', (event) => {
  const route = event.state?.route || location.hash.replace('#', '') || 'home';
  activateNav(route);
  loadRoute(route);
});

const initialRoute = location.hash.replace('#', '') || 'home';
activateNav(initialRoute);
loadRoute(initialRoute);
