const routes = [
  { key: 'home', label: 'Головна', file: 'pages/home.html' },
  { key: 'tariffs', label: 'Тарифи. Чесно про гроші', file: 'pages/tariffs.html' },
  { key: 'cabinet', label: 'Мій Гудок', file: 'pages/cabinet.html' },
  { key: 'support', label: 'Підтримка', file: 'pages/support.html' },
  { key: 'tech', label: 'Технічна фішка / SEO', file: 'pages/tech.html' }
];

const nav = document.getElementById('topNav');
const view = document.getElementById('view');
const liveUsersEl = document.getElementById('liveUsers');
const talkHoursEl = document.getElementById('talkHours');
const themeToggle = document.getElementById('themeToggle');

let usersOnline = 18124;
let countryTalkHours = 72419;
let reserveUntil = 0;

function renderNav() {
  routes.forEach((route, index) => {
    const button = document.createElement('button');
    button.textContent = route.label;
    button.dataset.route = route.key;
    if (index === 0) button.classList.add('active');
    button.addEventListener('click', () => go(route.key));
    nav.appendChild(button);
  });
}

async function go(routeKey) {
  const route = routes.find((r) => r.key === routeKey) || routes[0];
  view.classList.add('leaving');
  await new Promise((resolve) => setTimeout(resolve, 160));

  const response = await fetch(route.file);
  const html = await response.text();
  view.innerHTML = html;

  document.querySelectorAll('.top-nav button').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.route === route.key);
  });

  bindPageEvents(route.key);
  view.classList.remove('leaving');
}

function runLiveCounters() {
  setInterval(() => {
    usersOnline += Math.floor(Math.random() * 15 - 5);
    countryTalkHours += Math.floor(Math.random() * 8 + 2);
    liveUsersEl.textContent = `Ефір зараз: ${usersOnline.toLocaleString('uk-UA')} абонентів говорять у мережі`;
    talkHoursEl.textContent = `Час розмов країни: ${countryTalkHours.toLocaleString('uk-UA')} годин від 00:00`;
  }, 10000);
}

function bindPageEvents(routeKey) {
  if (routeKey === 'home') bindHome();
  if (routeKey === 'tariffs') bindTariffs();
  if (routeKey === 'cabinet') bindCabinet();
  if (routeKey === 'support') bindSupport();
  if (routeKey === 'tech') bindTech();
}

function bindHome() {
  const talkSlider = document.getElementById('talkSlider');
  const sliderResult = document.getElementById('sliderResult');
  const pref = document.getElementById('magicPrefix');
  const genBtn = document.getElementById('generateNumberBtn');
  const genResult = document.getElementById('generatedNumber');
  const reserveTimer = document.getElementById('reserveTimer');
  const gbInput = document.getElementById('gbInput');
  const saveBtn = document.getElementById('calcSaveBtn');
  const saveResult = document.getElementById('saveResult');
  const phoneFilter = document.getElementById('phoneFilter');
  const phoneList = document.getElementById('phoneList');
  const callTestBtn = document.getElementById('callTestBtn');
  const callTestResult = document.getElementById('callTestResult');
  const balanceBtn = document.getElementById('voiceBalanceBtn');
  const balanceInput = document.getElementById('balanceNumber');
  const balanceResult = document.getElementById('balanceResult');
  const weatherSelect = document.getElementById('weatherSelect');
  const weatherText = document.getElementById('weatherText');
  const referralBtn = document.getElementById('refBtn');
  const referralOut = document.getElementById('refOut');
  const lineTimer = document.getElementById('lineTimer');

  const phones = [
    'Nokia 105 (ліхтарик, SOS)',
    'Philips Xenium E172 (акумулятор 14 днів)',
    'Alcatel 1068D (базова кнопкова класика)',
    'Sigma mobile Comfort 50 (великі кнопки)'
  ];
  phoneList.innerHTML = phones.map((p) => `<li>${p}</li>`).join('');

  talkSlider.addEventListener('input', () => {
    const min = Number(talkSlider.value);
    const price = (min * 0.15).toFixed(0);
    sliderResult.textContent = `${min} хв = ${price} грн/міс. І жодного мегабайту.`;
  });

  genBtn.addEventListener('click', () => {
    const variants = ['11 22', '22 33', '33 22', '55 00', '77 77', '12 12'];
    const mid = Math.floor(100 + Math.random() * 900);
    const end = variants[Math.floor(Math.random() * variants.length)];
    const number = `${pref.value} ${mid} ${end}`;
    reserveUntil = Date.now() + 15 * 60 * 1000;
    genResult.textContent = `Знайдено: ${number}. Заброньовано на 15 хвилин.`;
    updateReserveTimer(reserveTimer);
  });

  setInterval(() => updateReserveTimer(reserveTimer), 1000);

  saveBtn.addEventListener('click', () => {
    const gb = Number(gbInput.value) || 0;
    const yearLoss = gb * 26 * 12;
    saveResult.textContent = `Оцінка переплати: близько ${yearLoss} грн/рік за невикористаний трафік. У «За Ноги» ці витрати = 0.`;
  });

  phoneFilter.addEventListener('input', () => {
    const val = phoneFilter.value.toLowerCase();
    const filtered = phones.filter((x) => x.toLowerCase().includes(val));
    phoneList.innerHTML = filtered.map((p) => `<li>${p}</li>`).join('') || '<li>Нічого не знайдено</li>';
  });

  callTestBtn.addEventListener('click', () => {
    callTestResult.textContent = 'Тестовий виклик на 070 *** ** ** ініційовано. Демо: кодек HD Voice активний.';
  });

  balanceBtn.addEventListener('click', () => {
    const num = balanceInput.value.replace(/\D/g, '');
    if (!num) {
      balanceResult.textContent = 'Введіть номер для голосового озвучення балансу.';
      return;
    }
    balanceResult.textContent = `Автообдзвін запущено на ${num}. Голосовий бот продиктує баланс протягом 20 сек.`;
  });

  weatherSelect.addEventListener('change', () => {
    const texts = {
      kyiv: 'У Києві: хмарно, візьміть парасольку. І не забудьте зателефонувати онукам з 092.',
      lviv: 'У Львові: дощ і вітер. Краще візьміть теплу куртку та зарядіть ліхтарик.',
      odesa: 'В Одесі: ясно, але ввечері прохолодно. Море гарне, дзвінки ще кращі.'
    };
    weatherText.textContent = texts[weatherSelect.value];
  });

  referralBtn.addEventListener('click', () => {
    const code = `070-ZA-NOGI-${Math.floor(100 + Math.random() * 900)}`;
    referralOut.textContent = `Ваш промокод: ${code}. Друг активує — обом по 50 хв.`;
  });

  const launchAt = new Date(Date.now() + 1000 * 60 * 90);
  setInterval(() => {
    const diff = Math.max(launchAt - Date.now(), 0);
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    lineTimer.textContent = `До «Прямої лінії»: ${h}г ${m}хв ${s}с`;
  }, 1000);
}

function updateReserveTimer(target) {
  if (!target) return;
  const left = reserveUntil - Date.now();
  if (left <= 0) {
    target.textContent = 'Резерв неактивний';
    return;
  }
  const m = Math.floor(left / 60000);
  const s = Math.floor((left % 60000) / 1000);
  target.textContent = `Бронь діє: ${m}:${String(s).padStart(2, '0')}`;
}

function bindTariffs() {
  const packType = document.getElementById('packType');
  const extMinutes = document.getElementById('extMinutes');
  const packBtn = document.getElementById('packBtn');
  const packOut = document.getElementById('packOut');
  const monthlyOut = document.getElementById('monthlyOut');

  packBtn.addEventListener('click', () => {
    const ext = Number(extMinutes.value) || 0;
    const internal = packType.value === 'inside' ? 0 : 50;
    const extCost = packType.value === 'mixed' ? ext * 0.6 : 0;
    const total = (internal + extCost).toFixed(2);
    packOut.textContent = `Мій пакет: внутрішня мережа 0 грн/хв, чужі мережі ${ext} хв. Разом: ${total} грн/міс.`;
    monthlyOut.textContent = `Альтернатива: «Вічний пакет» 300 хв за 200 грн на 12 міс (без абонплати).`;
  });
}

function bindCabinet() {
  const msisdn = document.getElementById('cabinetNumber');
  const ussdBtn = document.getElementById('ussdBtn');
  const ussdOut = document.getElementById('ussdOut');
  const spamToggle = document.getElementById('spamToggle');
  const spamOut = document.getElementById('spamOut');
  const volBtn = document.getElementById('volumeBtn');
  const volOut = document.getElementById('volumeOut');

  ussdBtn.addEventListener('click', () => {
    const code = Math.floor(1000 + Math.random() * 9000);
    ussdOut.textContent = `Наберіть на телефоні: *109*${code}# — сесія відкриється без пароля.`;
  });

  spamToggle.addEventListener('change', () => {
    spamOut.textContent = spamToggle.checked
      ? 'Режим «Тільки живі люди» увімкнено: 0800 та короткі банківські номери блокуються.'
      : 'Режим вимкнено: вхідні виклики приймаються без фільтра.';
  });

  volBtn.addEventListener('click', () => {
    const num = msisdn.value || 'ваш номер';
    volOut.textContent = `USSD-прапорець гучності активовано для ${num}. Підвищений рівень застосують у наступному виклику.`;
  });
}

function bindSupport() {
  const ringSelect = document.getElementById('ringSelect');
  const ringBtn = document.getElementById('ringBtn');
  const ringOut = document.getElementById('ringOut');
  const voiceBtn = document.getElementById('voiceBtn');
  const voiceOut = document.getElementById('voiceOut');

  ringBtn.addEventListener('click', () => {
    ringOut.textContent = `Гудок «${ringSelect.value}» підключено безкоштовно.`;
  });

  voiceBtn.addEventListener('click', () => {
    voiceOut.textContent = 'Мікрофонний відгук збережено (демо). Оператор прослухає і відповість дзвінком.';
  });
}

function bindTech() {
  const btsFilter = document.getElementById('btsFilter');
  const btsOut = document.getElementById('btsOut');
  const data = {
    '092': 'Найбільша щільність BTS у Запорізькій області.',
    '039': 'Концентрація в приміських зонах Києва та транспортних коридорах.',
    '070': 'Сильне покриття центральних та західних регіонів.',
    '010': 'Історичний код Києва, використаний як данина міській телефонії.'
  };

  btsFilter.addEventListener('change', () => {
    btsOut.textContent = data[btsFilter.value];
  });
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('nokia');
});

renderNav();
go('home');
runLiveCounters();
