const routes = [
  { key: 'home', label: 'Головна', file: 'pages/home.html' },
  { key: 'tariffs', label: 'Тарифи', file: 'pages/tariffs.html' },
  { key: 'numbers', label: 'Красиві номери', file: 'pages/numbers.html' },
  { key: 'coverage', label: 'Покриття та BTS', file: 'pages/coverage.html' },
  { key: 'phones', label: 'Магазин телефонів', file: 'pages/phones.html' },
  { key: 'roaming', label: 'Роумінг', file: 'pages/roaming.html' },
  { key: 'mnp', label: 'Перенесення номера', file: 'pages/mnp.html' },
  { key: 'account', label: 'Мій Гудок', file: 'pages/account.html' },
  { key: 'support', label: 'Підтримка', file: 'pages/support.html' },
  { key: 'business', label: 'Бізнес', file: 'pages/business.html' },
  { key: 'news', label: 'Новини', file: 'pages/news.html' },
  { key: 'documents', label: 'Документи', file: 'pages/documents.html' },
  { key: 'contacts', label: 'Контакти', file: 'pages/contacts.html' }
];

const tariffs = [
  { id: 'zn-start', name: 'За Ноги Старт', fee: 45, onnet: 300, offnet: 60, sms: 30 },
  { id: 'zn-basic', name: 'За Ноги Базовий', fee: 95, onnet: 500, offnet: 150, sms: 100 },
  { id: 'zn-family', name: 'За Ноги Родинний', fee: 130, onnet: 900, offnet: 220, sms: 150 },
  { id: 'zn-forever', name: 'Вічний Пакет', fee: 200, onnet: 300, offnet: 0, sms: 0, period: '12 міс' }
];

const phoneCatalog = [
  { sku: 'N105-2026', name: 'Nokia 105 2026', price: 1299, sos: true, torch: true, battery: '18 днів', stock: 22 },
  { sku: 'PX-E172', name: 'Philips Xenium E172', price: 1999, sos: true, torch: true, battery: '21 день', stock: 15 },
  { sku: 'AL-1068', name: 'Alcatel 1068D', price: 1099, sos: false, torch: true, battery: '9 днів', stock: 38 },
  { sku: 'SM-C50', name: 'Sigma Comfort 50', price: 1499, sos: true, torch: false, battery: '16 днів', stock: 12 }
];

const btsData = [
  { region: 'Київ', prefix: '010', sites: 142, mos: 4.4 },
  { region: 'Запоріжжя', prefix: '092', sites: 167, mos: 4.6 },
  { region: 'Львів', prefix: '070', sites: 121, mos: 4.5 },
  { region: 'Одеса', prefix: '039', sites: 108, mos: 4.3 },
  { region: 'Дніпро', prefix: '092', sites: 136, mos: 4.4 }
];

const newsList = [
  { date: '2026-04-01', title: 'За Ноги запускає нові голосові пакети для сіл', tag: 'тарифи' },
  { date: '2026-03-25', title: 'Відкрито 56 нових точок поповнення готівкою', tag: 'сервіс' },
  { date: '2026-03-12', title: 'BTS-модернізація у Київській та Черкаській областях', tag: 'мережа' },
  { date: '2026-02-28', title: 'Пряма лінія директора на Українському Радіо: підсумки', tag: 'компанія' }
];

const documents = [
  { id: 'offer', name: 'Публічна оферта', updated: '2026-03-10' },
  { id: 'privacy', name: 'Політика конфіденційності', updated: '2026-02-16' },
  { id: 'roaming', name: 'Правила голосового роумінгу', updated: '2026-01-30' },
  { id: 'mnp', name: 'Порядок перенесення номера (MNP)', updated: '2026-03-01' },
  { id: 'quality', name: 'Параметри якості голосу та MOS', updated: '2026-03-22' }
];

const appState = {
  cart: JSON.parse(localStorage.getItem('zn-cart') || '[]'),
  usersOnline: 18124,
  talkHours: 72419
};

const nav = document.getElementById('mainNav');
const view = document.getElementById('routeView');
const breadcrumbs = document.getElementById('breadcrumbs');
const liveUsers = document.getElementById('liveUsers');
const talkHours = document.getElementById('talkHours');
const cartInfo = document.getElementById('cartInfo');
const themeToggle = document.getElementById('themeToggle');

function init() {
  renderNav();
  runLiveStats();
  updateCart();
  go('home');
  themeToggle.addEventListener('click', () => document.body.classList.toggle('nokia'));
}

function renderNav() {
  routes.forEach((r, idx) => {
    const btn = document.createElement('button');
    btn.textContent = r.label;
    btn.dataset.route = r.key;
    if (idx === 0) btn.classList.add('active');
    btn.addEventListener('click', () => go(r.key));
    nav.appendChild(btn);
  });
}

async function go(key) {
  const route = routes.find((r) => r.key === key) || routes[0];
  view.classList.add('leaving');
  await wait(140);
  const html = await (await fetch(route.file)).text();
  view.innerHTML = html;
  view.classList.remove('leaving');

  document.querySelectorAll('.main-nav button').forEach((b) => {
    b.classList.toggle('active', b.dataset.route === route.key);
  });
  breadcrumbs.textContent = `Головна / ${route.label}`;
  bindRoute(route.key);
}

function bindRoute(key) {
  if (key === 'home') bindHome();
  if (key === 'tariffs') bindTariffs();
  if (key === 'numbers') bindNumbers();
  if (key === 'coverage') bindCoverage();
  if (key === 'phones') bindPhones();
  if (key === 'roaming') bindRoaming();
  if (key === 'mnp') bindMnp();
  if (key === 'account') bindAccount();
  if (key === 'support') bindSupport();
  if (key === 'business') bindBusiness();
  if (key === 'news') bindNews();
  if (key === 'documents') bindDocuments();
  if (key === 'contacts') bindContacts();
}

function bindHome() {
  const slider = document.getElementById('bazikaSlider');
  const out = document.getElementById('bazikaOut');
  const saveBtn = document.getElementById('calcSavingBtn');
  const gbInput = document.getElementById('gbInput');
  const savingOut = document.getElementById('savingOut');
  const weatherCity = document.getElementById('weatherCity');
  const weatherOut = document.getElementById('weatherOut');
  const lineCountdown = document.getElementById('lineCountdown');

  slider.addEventListener('input', () => {
    const min = Number(slider.value);
    const fee = (min * 0.15).toFixed(0);
    out.textContent = `${min} хв = ${fee} грн/міс. І жодного мегабайту.`;
  });

  saveBtn.addEventListener('click', () => {
    const gb = Number(gbInput.value) || 0;
    const annual = gb * 28 * 12;
    savingOut.textContent = `Оцінка річної переплати за непотрібний трафік: ${annual} грн.`;
  });

  weatherCity.addEventListener('change', () => {
    const map = {
      kyiv: 'Київ: хмарно, +12°C. Візьміть парасольку та зателефонуйте онукам.',
      lviv: 'Львів: дощ, +9°C. Тепла куртка не завадить.',
      odesa: 'Одеса: ясно, +14°C. Ввечері прохолодніше біля моря.'
    };
    weatherOut.textContent = map[weatherCity.value];
  });

  const launch = Date.now() + 5400000;
  const timer = setInterval(() => {
    if (!document.getElementById('lineCountdown')) return clearInterval(timer);
    const diff = Math.max(launch - Date.now(), 0);
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    lineCountdown.textContent = `${h}г ${m}хв ${s}с`;
  }, 1000);
}

function bindTariffs() {
  const table = document.getElementById('tariffTableBody');
  table.innerHTML = tariffs.map((t) => `
    <tr><td>${t.name}</td><td>${t.fee} грн${t.period ? ` / ${t.period}` : '/міс'}</td><td>${t.onnet}</td><td>${t.offnet}</td><td>${t.sms}</td></tr>
  `).join('');

  const calcBtn = document.getElementById('tariffCalcBtn');
  const select = document.getElementById('tariffSelect');
  const offnet = document.getElementById('offnetMinutes');
  const result = document.getElementById('tariffCalcOut');

  select.innerHTML = tariffs.map((t) => `<option value="${t.id}">${t.name}</option>`).join('');
  calcBtn.addEventListener('click', () => {
    const t = tariffs.find((x) => x.id === select.value);
    const off = Number(offnet.value) || 0;
    const extra = Math.max(off - t.offnet, 0) * 0.7;
    result.textContent = `Орієнтовно: ${(t.fee + extra).toFixed(2)} грн. Понадпакетні хвилини: ${Math.max(off - t.offnet, 0)}.`;
  });
}

function bindNumbers() {
  const prefix = document.getElementById('numberPrefix');
  const out = document.getElementById('numberOut');
  const timer = document.getElementById('reserveOut');
  let reserveUntil = 0;

  document.getElementById('generateNumberBtn').addEventListener('click', () => {
    const endings = ['11 22', '22 33', '55 00', '12 12', '77 77'];
    const number = `${prefix.value} ${Math.floor(100 + Math.random() * 900)} ${endings[Math.floor(Math.random() * endings.length)]}`;
    reserveUntil = Date.now() + 15 * 60000;
    out.textContent = `Номер: ${number}. Резерв на 15 хв.`;
  });

  document.getElementById('reserveNumberBtn').addEventListener('click', () => {
    if (reserveUntil < Date.now()) {
      timer.textContent = 'Спочатку згенеруйте номер.';
      return;
    }
    appState.cart.push({ type: 'number', label: out.textContent, price: 150 });
    persistCart();
    updateCart();
    timer.textContent = 'Номер додано в кошик. Менеджер звʼяжеться для підтвердження.';
  });

  setInterval(() => {
    if (!document.getElementById('reserveOut')) return;
    if (reserveUntil < Date.now()) return (timer.textContent = 'Резерв неактивний');
    const left = reserveUntil - Date.now();
    const m = Math.floor(left / 60000);
    const s = Math.floor((left % 60000) / 1000);
    timer.textContent = `Резерв діє: ${m}:${String(s).padStart(2, '0')}`;
  }, 1000);
}

function bindCoverage() {
  const region = document.getElementById('coverageRegion');
  const out = document.getElementById('coverageOut');
  const table = document.getElementById('btsTableBody');
  table.innerHTML = btsData.map((x) => `<tr><td>${x.region}</td><td>${x.prefix}</td><td>${x.sites}</td><td>${x.mos}</td></tr>`).join('');

  region.addEventListener('change', () => {
    const data = btsData.find((x) => x.region === region.value);
    out.textContent = `${data.region}: MOS ${data.mos}, станцій ${data.sites}, префікс-навантаження ${data.prefix}.`;
  });
}

function bindPhones() {
  const filter = document.getElementById('phoneFilter');
  const onlySos = document.getElementById('onlySos');
  const onlyTorch = document.getElementById('onlyTorch');
  const list = document.getElementById('phoneCards');

  function render() {
    const q = filter.value.toLowerCase();
    let items = phoneCatalog.filter((x) => x.name.toLowerCase().includes(q));
    if (onlySos.checked) items = items.filter((x) => x.sos);
    if (onlyTorch.checked) items = items.filter((x) => x.torch);

    list.innerHTML = items.map((x) => `
      <article class="block">
        <h3>${x.name}</h3>
        <p>Ціна: ${x.price} грн · Наявність: ${x.stock} шт.</p>
        <p class="muted">SOS: ${x.sos ? 'так' : 'ні'} · Ліхтарик: ${x.torch ? 'так' : 'ні'} · Батарея: ${x.battery}</p>
        <button class="btn btn--primary" data-sku="${x.sku}">Додати в кошик</button>
      </article>
    `).join('') || '<p>Нічого не знайдено.</p>';

    list.querySelectorAll('button[data-sku]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const item = phoneCatalog.find((p) => p.sku === btn.dataset.sku);
        appState.cart.push({ type: 'phone', label: item.name, price: item.price });
        persistCart();
        updateCart();
      });
    });
  }

  filter.addEventListener('input', render);
  onlySos.addEventListener('change', render);
  onlyTorch.addEventListener('change', render);
  render();
}

function bindRoaming() {
  const btn = document.getElementById('callbackBtn');
  const number = document.getElementById('callbackNumber');
  const country = document.getElementById('callbackCountry');
  const out = document.getElementById('callbackOut');

  btn.addEventListener('click', () => {
    if (number.value.trim().length < 10) {
      out.innerHTML = '<span class="error">Вкажіть коректний номер у міжнародному форматі.</span>';
      return;
    }
    out.textContent = `Заявка на callback з ${country.value} зареєстрована. Оператор передзвонить до 15 хв.`;
  });
}

function bindMnp() {
  const btn = document.getElementById('mnpBtn');
  const out = document.getElementById('mnpOut');
  const current = document.getElementById('mnpCurrent');
  const target = document.getElementById('mnpTarget');

  btn.addEventListener('click', () => {
    if (!current.value || !target.value) {
      out.innerHTML = '<span class="error">Заповніть поточний номер та бажаний префікс.</span>';
      return;
    }
    const ticket = `MNP-${Math.floor(100000 + Math.random() * 900000)}`;
    out.textContent = `Заявка прийнята. Номер звернення ${ticket}. Статус оновиться протягом 1 робочого дня.`;
  });
}

function bindAccount() {
  const btn = document.getElementById('ussdLoginBtn');
  const out = document.getElementById('ussdLoginOut');
  const callWall = document.getElementById('callWall');

  btn.addEventListener('click', () => {
    const code = Math.floor(1000 + Math.random() * 9000);
    out.textContent = `Наберіть *109*${code}# на телефоні. Сесію буде відкрито автоматично.`;
  });

  callWall.innerHTML = [
    '08:15 → 092 555 44 11 · 3 хв · Якість: 4/5',
    '10:07 → 070 222 20 20 · 9 хв · Якість: 5/5',
    '15:42 → 039 888 10 10 · 2 хв · Якість: 4/5',
    '19:31 → 010 700 00 05 · 6 хв · Якість: 5/5'
  ].map((x) => `<li>${x}</li>`).join('');

  document.getElementById('spamSwitch').addEventListener('change', (e) => {
    document.getElementById('spamOut').textContent = e.target.checked
      ? 'Режим «Тільки живі люди» активовано: 0800 та короткі банківські номери блокуються.'
      : 'Режим вимкнено.';
  });

  document.getElementById('cashRefreshBtn').addEventListener('click', () => {
    document.getElementById('cashOut').textContent = 'Найближчі точки: Київ, м. Дарниця (кіоск Преса), Львів, пл. Ринок (партнерська точка).';
  });
}

function bindSupport() {
  const faqInput = document.getElementById('faqSearch');
  const faqList = document.getElementById('faqList');
  const faqs = [
    'Як вставити SIM у Nokia 105?',
    'Як вручну вибрати GSM-900/1800?',
    'Що робити, якщо немає мережі в підвалі?',
    'Як підключити SOS-кнопку для швидкого набору?',
    'Як отримати баланс голосом без USSD?'
  ];

  const renderFaq = (q = '') => {
    faqList.innerHTML = faqs.filter((f) => f.toLowerCase().includes(q.toLowerCase())).map((f) => `<li>${f}</li>`).join('');
  };

  faqInput.addEventListener('input', () => renderFaq(faqInput.value));
  renderFaq();

  document.getElementById('ringBtn').addEventListener('click', () => {
    const ring = document.getElementById('ringSelect').value;
    document.getElementById('ringOut').textContent = `Гудок «${ring}» успішно підключено.`;
  });

  document.getElementById('voiceMsgBtn').addEventListener('click', () => {
    document.getElementById('voiceMsgOut').textContent = 'Голосове звернення записано (демо). Відповідь надійде дзвінком.';
  });
}

function bindBusiness() {
  const seats = document.getElementById('bizSeats');
  const ext = document.getElementById('bizExt');
  const out = document.getElementById('bizOut');

  document.getElementById('bizCalcBtn').addEventListener('click', () => {
    const s = Number(seats.value) || 0;
    const e = Number(ext.value) || 0;
    const total = s * 79 + e * 0.45;
    out.textContent = `Оцінка для бізнесу: ${total.toFixed(2)} грн/міс. + SLA 99.5% та API деталізації викликів.`;
  });
}

function bindNews() {
  const search = document.getElementById('newsSearch');
  const list = document.getElementById('newsList');

  function render(q = '') {
    list.innerHTML = newsList
      .filter((n) => `${n.title} ${n.tag}`.toLowerCase().includes(q.toLowerCase()))
      .map((n) => `<article class="block"><h3>${n.title}</h3><p>${n.date} · тег: ${n.tag}</p><p class="muted">Повна новина доступна в архіві прес-центру.</p></article>`)
      .join('');
  }

  search.addEventListener('input', () => render(search.value));
  render();
}

function bindDocuments() {
  const list = document.getElementById('docList');
  list.innerHTML = documents
    .map((d) => `<tr><td>${d.name}</td><td>${d.updated}</td><td><button class="btn btn--primary" data-id="${d.id}">Відкрити</button></td></tr>`)
    .join('');

  list.querySelectorAll('button[data-id]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.getElementById('docOut').textContent = `Документ «${btn.dataset.id}» відкрито в режимі попереднього перегляду.`;
    });
  });
}

function bindContacts() {
  const city = document.getElementById('officeCity');
  const out = document.getElementById('officeOut');
  const offices = {
    Київ: 'вул. Хрещатик, 22 · 08:00–20:00 · сервіс, продаж SIM, MNP',
    Львів: 'пр. Свободи, 10 · 09:00–19:00 · сервіс, готівкове поповнення',
    Одеса: 'вул. Дерибасівська, 8 · 09:00–19:00 · сервіс, корпоративні підключення',
    Дніпро: 'пр. Яворницького, 71 · 08:30–19:30 · сервіс, перевидача SIM'
  };

  city.addEventListener('change', () => {
    out.textContent = offices[city.value];
  });
}

function runLiveStats() {
  setInterval(() => {
    appState.usersOnline += Math.floor(Math.random() * 11 - 4);
    appState.talkHours += Math.floor(Math.random() * 8 + 1);
    liveUsers.textContent = `${appState.usersOnline.toLocaleString('uk-UA')} абонентів`;
    talkHours.textContent = `${appState.talkHours.toLocaleString('uk-UA')} годин з 00:00`;
  }, 5000);
}

function updateCart() {
  const total = appState.cart.reduce((acc, item) => acc + item.price, 0);
  cartInfo.textContent = `${appState.cart.length} товарів / ${total} грн`;
}

function persistCart() {
  localStorage.setItem('zn-cart', JSON.stringify(appState.cart));
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

init();
