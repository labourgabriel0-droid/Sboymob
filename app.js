const siteSections = [
  'Головна / позиціонування бренду',
  'Тарифи без інтернету',
  'Мапа голосового покриття',
  'Префікси та номерна база',
  'Портування номера (MNP)',
  'Корпоративні голосові пакети',
  'Домашній телефон + мобільний',
  'Підключення eSIM/SIM',
  'Міжнародні дзвінки',
  'Архів розмов (деталізація)',
  'Особистий кабінет абонента',
  'Оплата і автоплатежі',
  'Підтримка 24/7',
  'Сервісний статус мережі',
  'Блог про голосові технології',
  'FAQ і база знань',
  'Вакансії та карʼєра',
  'Партнерська програма',
  'Пресцентр',
  'Контакти та офіси'
];

const featureItems = [
  '1) AJAX-навігація між контентними сторінками без reload.',
  '2) Конструктор тарифу «За Ноги» з підрахунком хвилин.',
  '3) Перевірка префіксів 070/092/039/010 у введеному номері.',
  '4) Порівняння тарифів у форматі таблиці з фільтрами.',
  '5) Калькулятор щомісячних витрат для родини або бізнесу.',
  '6) Майстер підключення SIM/eSIM покроково.',
  '7) Онлайн-заявка на перенесення номера (MNP).',
  '8) Кнопка швидкого повторного поповнення балансу.',
  '9) Підтвердження платежів через push/SMS-код.',
  '10) Віджет стану мережі та аварій у регіоні.',
  '11) Карта покриття голосу з якісними зонами.',
  '12) Історія дзвінків з експортом у PDF/CSV.',
  '13) Чорний список номерів із правилами блокування.',
  '14) Антиспам-фільтр підозрілих викликів.',
  '15) Розклад "тихих годин" і режиму "не турбувати".',
  '16) Відновлення SIM при втраті з верифікацією.',
  '17) Сімейні групи з безкоштовними внутрішніми хвилинами.',
  '18) Бізнес-кабінет для керування працівниками.',
  '19) Кастомні голосові привітання для компаній.',
  '20) Вибір красивого номера з префіксами бренду.',
  '21) Архів тарифів і прозора історія змін умов.',
  '22) Динамічні FAQ-сторінки з пошуком та тегами.',
  '23) Сценарії самообслуговування (бот + живий оператор).',
  '24) Онлайн-черга в офіси обслуговування.',
  '25) Пакети міжнародних хвилин по країнах.',
  '26) Підключення додаткових номерів для пристроїв.',
  '27) Збережені шаблони оплат для бухгалтера.',
  '28) A/B-блоки маркетингових сторінок для аналітики.',
  '29) Рейтинг якості дзвінка після завершення виклику.',
  '30) Мікроаналітика в особистому кабінеті (ARPU, хвилини, відтік).'
];

const ajaxPages = {
  home: {
    title: 'Головна',
    blocks: [
      'Місія: чесний голосовий зв’язок без нав’язаного мобільного інтернету.',
      'УТП: фокус на дзвінках, якості з’єднання, простих тарифах та прозорих цінах.',
      'Ключовий продукт: тариф «За Ноги» — багато хвилин, нуль МБ за замовчуванням.'
    ]
  },
  tariff: {
    title: 'Тариф «За Ноги»',
    blocks: [
      'Абонплата: 95 грн/міс.',
      'Включено: 500 хвилин на Коїорач + 150 хвилин на інші мережі України.',
      'Після пакета: 0.70 грн/хв.',
      'SMS: 0.50 грн/шт. Додаткові хвилини: пакети 50/100/300 хв.'
    ]
  },
  business: {
    title: 'Бізнес-сторінка',
    blocks: [
      'Корпоративні групи номерів з єдиним рахунком.',
      'SLA для контакт-центрів та служб доставки.',
      'API деталізації викликів для внутрішньої CRM.'
    ]
  },
  support: {
    title: 'Підтримка',
    blocks: [
      'Канали: номер 010, чат, Telegram-бот, callback.',
      'Типові сценарії: відновлення SIM, блокування, фінансові питання.',
      'Цільове SLA: перша відповідь у чаті до 90 секунд.'
    ]
  },
  coverage: {
    title: 'Покриття',
    blocks: [
      'Шари карти: відмінне / стабільне / базове покриття голосу.',
      'Окремо показуються зони перевантаження у пікові години.',
      'Можливість залишити заявку на покращення мережі в населеному пункті.'
    ]
  },
  legal: {
    title: 'Правила та документи',
    blocks: [
      'Публічна оферта, політика конфіденційності, умови MNP.',
      'Архів змін тарифів із датами набрання чинності.',
      'Юридичні контакти та порядок подачі претензій.'
    ]
  },
  careers: {
    title: 'Карʼєра',
    blocks: [
      'Відділи: мережа, контакт-центр, аналітика, маркетинг.',
      'Форми: швидка анкета + прикріплення CV через AJAX.',
      'Прозорий етапинг найму: скрінінг → тест → офер.'
    ]
  },
  press: {
    title: 'Пресцентр',
    blocks: [
      'Оперативні пресрелізи про оновлення голосової мережі.',
      'Медіакіт бренду з логотипами та брендбуком.',
      'Календар публічних подій і галузевих конференцій.'
    ]
  }
};

const menu = document.getElementById('menu');
const layoutList = document.getElementById('layoutList');
const featureList = document.getElementById('featureList');
const featureSearch = document.getElementById('featureSearch');
const pageSelect = document.getElementById('pageSelect');
const ajaxPage = document.getElementById('ajaxPage');

const prefixInput = document.getElementById('prefixInput');
const checkPrefixBtn = document.getElementById('checkPrefixBtn');
const prefixResult = document.getElementById('prefixResult');

const baseMinutes = document.getElementById('baseMinutes');
const otherMinutes = document.getElementById('otherMinutes');
const calcBtn = document.getElementById('calcBtn');
const calcResult = document.getElementById('calcResult');

const allowedPrefixes = ['070', '092', '039', '010'];

siteSections.forEach((section) => {
  const li = document.createElement('li');
  li.textContent = section;
  layoutList.appendChild(li);
});

function renderFeatures(query = '') {
  featureList.innerHTML = '';
  featureItems
    .filter((item) => item.toLowerCase().includes(query.toLowerCase()))
    .forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      featureList.appendChild(li);
    });
}

Object.entries(ajaxPages).forEach(([key, page], index) => {
  const button = document.createElement('button');
  button.textContent = page.title;
  button.dataset.page = key;
  if (index === 0) button.classList.add('active');
  button.addEventListener('click', () => {
    document.querySelectorAll('.menu button').forEach((b) => b.classList.remove('active'));
    button.classList.add('active');
    pageSelect.value = key;
    loadAjaxPage(key);
  });
  menu.appendChild(button);

  const option = document.createElement('option');
  option.value = key;
  option.textContent = page.title;
  pageSelect.appendChild(option);
});

function loadAjaxPage(key) {
  ajaxPage.innerHTML = '<p>Завантаження...</p>';

  setTimeout(() => {
    const data = ajaxPages[key];
    ajaxPage.innerHTML = `
      <h4>${data.title}</h4>
      <ul>${data.blocks.map((b) => `<li>${b}</li>`).join('')}</ul>
    `;
  }, 280);
}

featureSearch.addEventListener('input', (event) => {
  renderFeatures(event.target.value);
});

pageSelect.addEventListener('change', (event) => {
  const key = event.target.value;
  loadAjaxPage(key);
  document.querySelectorAll('.menu button').forEach((b) => {
    b.classList.toggle('active', b.dataset.page === key);
  });
});

checkPrefixBtn.addEventListener('click', () => {
  const normalized = prefixInput.value.replace(/\D/g, '');
  const prefix = normalized.slice(0, 3);
  if (!normalized) {
    prefixResult.textContent = 'Введіть номер телефону.';
    return;
  }

  if (allowedPrefixes.includes(prefix)) {
    prefixResult.textContent = `Префікс ${prefix} підтримується Коїорач.`;
  } else {
    prefixResult.textContent = `Префікс ${prefix || '---'} не входить до пулу 070/092/039/010.`;
  }
});

calcBtn.addEventListener('click', () => {
  const onNet = Number(baseMinutes.value) || 0;
  const offNet = Number(otherMinutes.value) || 0;

  const baseFee = 95;
  const includedOffNet = 150;
  const extraOffNet = Math.max(offNet - includedOffNet, 0);
  const extraCost = extraOffNet * 0.7;
  const total = (baseFee + extraCost).toFixed(2);

  calcResult.textContent = `Орієнтовна сума: ${total} грн/міс. (внутрішні хв: ${onNet}, інші мережі: ${offNet}).`;
});

renderFeatures();
loadAjaxPage('home');
