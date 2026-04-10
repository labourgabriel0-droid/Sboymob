const app = document.getElementById('app');
const navButtons = [...document.querySelectorAll('.nav-btn')];
const minutesRange = document.getElementById('minutesRange');
const minutesOut = document.getElementById('minutesOut');
const recommendedPack = document.getElementById('recommendedPack');
const estimatedPrice = document.getElementById('estimatedPrice');

const pageMap = {
  home: 'pages/home.html',
  tariffs: 'pages/tariffs.html',
  coverage: 'pages/coverage.html',
  numbers: 'pages/numbers.html',
  business: 'pages/business.html',
  support: 'pages/support.html',
  concept: 'pages/concept.html'
};

async function loadPage(page) {
  const url = pageMap[page] || pageMap.home;
  try {
    const response = await fetch(url, { headers: { 'X-Requested-With': 'XMLHttpRequest' } });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const html = await response.text();
    app.innerHTML = html;
    wireLocalActions(page);
  } catch (error) {
    app.innerHTML = `<p class="notice">Не вдалося завантажити сторінку (${error.message}). Спробуйте оновити сайт.</p>`;
  }
}

function setActiveButton(targetPage) {
  navButtons.forEach((btn) => btn.classList.toggle('is-active', btn.dataset.page === targetPage));
}

navButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const page = btn.dataset.page;
    setActiveButton(page);
    loadPage(page);
    history.pushState({ page }, '', `#${page}`);
  });
});

window.addEventListener('popstate', (event) => {
  const page = event.state?.page || location.hash.replace('#', '') || 'home';
  setActiveButton(page);
  loadPage(page);
});

function calculatePackage(minutes) {
  if (minutes <= 300) return { name: 'Базовий 300', price: 99 };
  if (minutes <= 500) return { name: 'Говори 500', price: 135 };
  if (minutes <= 1000) return { name: 'Робочий 1000', price: 220 };
  if (minutes <= 1800) return { name: 'Сімейний 1800', price: 360 };
  return { name: 'Максі 3000', price: 520 };
}

minutesRange.addEventListener('input', () => {
  const minutes = Number(minutesRange.value);
  const pkg = calculatePackage(minutes);
  minutesOut.textContent = String(minutes);
  recommendedPack.textContent = pkg.name;
  estimatedPrice.textContent = `${pkg.price} ₴`;
});

const prefixInfo = {
  '070': 'Префікс КОІОРАЧ для масового підключення фізичних осіб.',
  '092': 'Префікс резерву для перенесених номерів MNP.',
  '039': 'Префікс для бізнес-ліній та диспетчерських груп.',
  '010': 'Спеціальний сервісний префікс для коротких номерів.'
};

const phoneInput = document.getElementById('phoneInput');
const prefixResult = document.getElementById('prefixResult');
document.getElementById('checkPrefix').addEventListener('click', () => {
  const raw = phoneInput.value.replace(/\D/g, '');
  const ua = raw.startsWith('380') ? raw.slice(3) : raw;
  const prefix = ua.slice(0, 3);
  prefixResult.textContent = prefixInfo[prefix]
    ? `✅ ${prefixInfo[prefix]}`
    : 'ℹ️ Номер не належить до зазначених префіксів 070/092/039/010.';
});

const callbackForm = document.getElementById('callbackForm');
const callbackResult = document.getElementById('callbackResult');
callbackForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(callbackForm);
  const name = data.get('name');
  callbackResult.textContent = `Дякуємо, ${name}! Запит прийнято. Ми передзвонимо у вибраний проміжок.`;
  callbackForm.reset();
});

document.getElementById('quickConnect').addEventListener('click', () => {
  setActiveButton('tariffs');
  loadPage('tariffs');
  history.pushState({ page: 'tariffs' }, '', '#tariffs');
});

document.getElementById('openTariffCalc').addEventListener('click', () => {
  minutesRange.scrollIntoView({ behavior: 'smooth', block: 'center' });
  minutesRange.focus();
});

function wireLocalActions(page) {
  if (page === 'support') {
    const form = document.getElementById('ticketForm');
    const out = document.getElementById('ticketOut');
    if (!form || !out) return;
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const fd = new FormData(form);
      out.textContent = `Заявка #K${Math.floor(Math.random() * 90000 + 10000)} створена для ${fd.get('topic')}.`;
      form.reset();
    });
  }
}

const initialPage = location.hash.replace('#', '') || 'home';
setActiveButton(initialPage);
loadPage(initialPage);
