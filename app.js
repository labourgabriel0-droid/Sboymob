const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const state = {
  route: 'chat',
  chat: JSON.parse(localStorage.getItem('wap_chat_log') || '[]'),
  history: JSON.parse(localStorage.getItem('wap_sessions') || '[]'),
  theme: localStorage.getItem('wap_theme') || 'green',
  compact: localStorage.getItem('wap_compact') === '1',
};

function saveState() {
  localStorage.setItem('wap_chat_log', JSON.stringify(state.chat));
  localStorage.setItem('wap_sessions', JSON.stringify(state.history));
  localStorage.setItem('wap_theme', state.theme);
  localStorage.setItem('wap_compact', state.compact ? '1' : '0');
}

function now() {
  return new Date().toLocaleString('ru-RU');
}

function routeFromHash() {
  const hash = location.hash.replace('#', '');
  if (['chat', 'history', 'settings'].includes(hash)) return hash;
  return 'chat';
}

function updateNav() {
  $$('.nav__link').forEach((a) => {
    a.classList.toggle('nav__link--active', a.dataset.route === state.route);
  });
}

function updateThemeClass() {
  document.body.classList.remove('theme-blue', 'theme-dark', 'compact');
  if (state.theme === 'blue') document.body.classList.add('theme-blue');
  if (state.theme === 'dark') document.body.classList.add('theme-dark');
  if (state.compact) document.body.classList.add('compact');
}

function renderMessage(item) {
  const div = document.createElement('div');
  div.className = 'msg';
  div.innerHTML = `
    <div class="msg__meta">${item.author} • ${item.time}${item.model ? ` • ${item.model}` : ''}</div>
    <div class="msg__text">${item.text}</div>
  `;
  return div;
}

function fakeAnswer({ prompt, model, thinking, webSearch, selfRefine, withPhoto }) {
  const mood = {
    fast: 'Коротко и по делу',
    balanced: 'Сбалансированный ответ',
    deep: 'Глубокий разбор по шагам',
  }[thinking];

  const web = webSearch ? 'С учётом веб-поиска' : 'Без веб-поиска';
  const photo = withPhoto ? 'С анализом прикреплённой фотографии' : 'Без фото';
  const refine = selfRefine ? 'Ответ дополнительно самопроверен.' : 'Ответ без самопроверки.';

  return `${mood} от ${model}.\n${web}. ${photo}.\nЗапрос: «${prompt}».\n${refine}`;
}

function ajaxDelay(ms = 700) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function sendMessage(form) {
  const prompt = $('#prompt', form).value.trim();
  if (!prompt) return;

  const thinking = $('#thinkingMode', form).value;
  const responseMode = $('#responseMode', form).value;
  const webSearch = $('#webSearch', form).checked;
  const selfRefine = $('#selfRefine', form).checked;
  const splitView = $('#splitView', form).checked;
  const withPhoto = !!$('#photoInput', form).files[0];

  const selectedModels = $$('.models input[type="checkbox"]:checked', form).map((i) => i.value);
  const models = responseMode === 'single' ? [selectedModels[0] || 'GPT-5.3-Codex'] : selectedModels;

  const userMsg = { author: 'Вы', text: prompt, time: now() };
  state.chat.push(userMsg);
  saveState();
  renderChatLog();

  $('#prompt', form).value = '';

  const loader = { author: 'Система', text: 'AJAX: запрашиваем модель...', time: now() };
  state.chat.push(loader);
  renderChatLog();

  await ajaxDelay(700 + Math.random() * 800);
  state.chat.pop();

  for (const model of models) {
    const answer = fakeAnswer({ prompt, model, thinking, webSearch, selfRefine, withPhoto });
    state.chat.push({ author: splitView ? 'AI (сравнение)' : 'AI', model, text: answer, time: now() });
  }

  state.history.unshift({
    id: Date.now(),
    at: now(),
    prompt,
    models,
    flags: { thinking, webSearch, selfRefine, splitView, withPhoto },
  });
  state.history = state.history.slice(0, 80);

  saveState();
  renderChatLog();
}

function renderChatLog() {
  const wrap = $('#chatLog');
  if (!wrap) return;
  wrap.innerHTML = '';
  state.chat.forEach((m) => wrap.appendChild(renderMessage(m)));
  wrap.scrollTop = wrap.scrollHeight;
}

function renderHistory() {
  const list = $('#historyList');
  if (!list) return;
  list.innerHTML = '';

  if (!state.history.length) {
    list.innerHTML = '<p class="muted">История пока пустая.</p>';
    return;
  }

  state.history.forEach((h) => {
    const card = document.createElement('article');
    card.className = 'history-card';
    card.innerHTML = `
      <div><strong>${h.at}</strong></div>
      <div><b>Запрос:</b> ${h.prompt}</div>
      <div><b>Модели:</b> ${h.models.join(', ')}</div>
      <div class="muted">Режим: ${h.flags.thinking}; Веб: ${h.flags.webSearch ? 'on' : 'off'}; Фото: ${h.flags.withPhoto ? 'on' : 'off'}</div>
    `;
    list.appendChild(card);
  });
}

function bindChatEvents() {
  const form = $('#chatForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    await sendMessage(form);
  });

  $('#photoInput', form).addEventListener('change', (e) => {
    $('#photoLabel').textContent = e.target.files[0]?.name || 'Файл не выбран';
  });
}

function bindHistoryEvents() {
  const btn = $('#clearHistory');
  if (!btn) return;
  btn.addEventListener('click', () => {
    state.history = [];
    saveState();
    renderHistory();
  });
}

function bindSettingsEvents() {
  const theme = $('#themeSelect');
  const compact = $('#compactMode');
  if (!theme || !compact) return;

  theme.value = state.theme;
  compact.checked = state.compact;

  theme.addEventListener('change', () => {
    state.theme = theme.value;
    updateThemeClass();
    saveState();
  });

  compact.addEventListener('change', () => {
    state.compact = compact.checked;
    updateThemeClass();
    saveState();
  });
}

async function transitionRender(route) {
  const app = $('#app');
  app.style.opacity = '0.45';
  await ajaxDelay(140);

  const tpl = $(`#tpl-${route}`);
  app.innerHTML = '';
  app.appendChild(tpl.content.cloneNode(true));

  app.style.opacity = '1';

  if (route === 'chat') {
    renderChatLog();
    bindChatEvents();
  }
  if (route === 'history') {
    renderHistory();
    bindHistoryEvents();
  }
  if (route === 'settings') {
    bindSettingsEvents();
  }
}

function initRouting() {
  window.addEventListener('hashchange', () => {
    state.route = routeFromHash();
    updateNav();
    transitionRender(state.route);
  });

  $$('.nav__link').forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      location.hash = a.dataset.route;
    });
  });
}

function startClock() {
  const clock = $('#clock');
  const tick = () => (clock.textContent = new Date().toLocaleTimeString('ru-RU'));
  tick();
  setInterval(tick, 1000);
}

function boot() {
  updateThemeClass();
  initRouting();
  startClock();

  state.route = routeFromHash();
  updateNav();
  transitionRender(state.route);
}

boot();
