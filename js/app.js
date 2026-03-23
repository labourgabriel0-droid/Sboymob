(function() {
  var DAY_KEY = new Date().toISOString().slice(0, 10);
  var pages = {
    home: { title: 'Главная', crumb: 'Главная' },
    catalog: { title: 'Каталог объявлений', crumb: 'Главная &gt; Маркет' },
    product: { title: 'Карточка объявления', crumb: 'Главная &gt; Маркет &gt; Товар' },
    profile: { title: 'Профиль продавца', crumb: 'Главная &gt; Пользователь' },
    messages: { title: 'Сообщения и торг', crumb: 'Главная &gt; Сообщения' },
    forum: { title: 'Форум сообщества', crumb: 'Главная &gt; Форум' },
    voice: { title: 'Синтез голоса', crumb: 'Главная &gt; AI-инструменты &gt; Голос' },
    games: { title: 'Мини-игры', crumb: 'Главная &gt; Игры' },
    bonuses: { title: 'Бонусный центр', crumb: 'Главная &gt; Бонусы' },
    sell: { title: 'Подать объявление', crumb: 'Главная &gt; Продать' },
    checkout: { title: 'Оформление сделки', crumb: 'Главная &gt; Сделка' }
  };

  var seed = {
    currentUser: {
      id: 'u_me',
      nick: 'SVOY_WAP',
      avatar: 'SW',
      city: 'Киев',
      phone: '+380 67 700 00 77',
      role: 'Покупатель и продавец',
      about: 'Собираю полезные объявления, тестирую доставку и веду мини-клуб по выгодным покупкам.',
      rating: 4.92,
      deals: 38,
      followers: 214,
      following: 63,
      registerDate: '2025-11-02',
      bonusCoins: 420,
      streak: 6,
      lastVisit: '',
      promoLevel: 'Silver',
      reviews: [
        { author: 'NomadNet', text: 'Быстрая оплата и вежливое общение.', score: 5 },
        { author: 'ChargeHub', text: 'Хороший покупатель, без лишних вопросов.', score: 5 }
      ],
      badges: ['Проверенный профиль', 'Любимец сообщества', 'Безопасные сделки'],
      interests: ['Связь', 'Гаджеты', 'WAP-дизайн', 'Голосовые сервисы']
    },
    users: [
      {
        id: 'u_admin', nick: 'Admin', avatar: 'AD', city: 'Киев', role: 'Топ-продавец SIM', rating: 4.96,
        deals: 183, response: '6 мин', followers: 1120, about: 'Специализируюсь на SIM, eSIM и быстрых сделках.',
        badges: ['Premium', 'OLX-style топ', 'Nova Poshta Fast'], reviews: [
          { author: 'Mila', text: 'Очень быстро отправил номер ТТН.', score: 5 },
          { author: 'Roma', text: 'Честный продавец, всё совпало.', score: 5 }
        ]
      },
      {
        id: 'u_nomad', nick: 'NomadNet', avatar: 'NN', city: 'Львов', role: 'Цифровые eSIM', rating: 4.88,
        deals: 91, response: '12 мин', followers: 630, about: 'Помогаю подключаться в дороге без лишней бюрократии.',
        badges: ['Travel Pro', 'Онлайн 24/7'], reviews: [
          { author: 'Anton', text: 'Активация за 15 минут.', score: 5 }
        ]
      },
      {
        id: 'u_charge', nick: 'ChargeHub', avatar: 'CH', city: 'Харьков', role: 'Аксессуары', rating: 4.79,
        deals: 144, response: '20 мин', followers: 504, about: 'Павербанки, кабели, зарядки и тревел-наборы.',
        badges: ['Доставка день-в-день'], reviews: [
          { author: 'Rita', text: 'Качественный товар, всё запаковано.', score: 5 }
        ]
      }
    ],
    products: [
      {
        id: 'sim_ultra', title: 'Тариф «Ультра-Драйв»', price: 85, currency: 'грн', category: 'Связь', promoted: true,
        sellerId: 'u_admin', city: 'Киев', condition: 'Новый', posted: 'сегодня', views: 413, favorites: 88,
        description: 'Стартовый SIM-пакет с большим интернетом и приоритетной поддержкой в чате.',
        specs: ['100 ГБ / месяц', 'Безлимитные мессенджеры', 'Активация по инструкции'],
        tags: ['sim', 'интернет', 'безопасная сделка'],
        delivery: ['Нова Пошта', 'Укрпошта', 'Самовывоз'],
        payment: ['Безопасная сделка', 'На карту', 'Наложенный платеж'],
        safeDeal: true,
        gallery: ['SIM', '4G', '100'],
        forumTopicId: 'thr_1'
      },
      {
        id: 'travel_esim', title: 'Travel eSIM Week', price: 159, currency: 'грн', category: 'Связь', promoted: true,
        sellerId: 'u_nomad', city: 'Львов', condition: 'Новый', posted: 'вчера', views: 522, favorites: 134,
        description: 'eSIM на неделю для поездок по Европе. QR и инструкция отправляются сразу после оплаты.',
        specs: ['7 стран', 'Поддержка 24/7', 'Цифровая доставка'],
        tags: ['esim', 'travel', 'роуминг'],
        delivery: ['Мгновенная цифровая доставка'],
        payment: ['Безопасная сделка', 'Apple Pay / Google Pay'],
        safeDeal: true,
        gallery: ['eSIM', 'EU', 'QR'],
        forumTopicId: 'thr_2'
      },
      {
        id: 'power_go', title: 'PowerGo 20000', price: 640, currency: 'грн', category: 'Аксессуары', promoted: false,
        sellerId: 'u_charge', city: 'Харьков', condition: 'Новый', posted: '2 дня назад', views: 260, favorites: 53,
        description: 'Павербанк с дисплеем, кабелем USB-C и защитой от перегрева.',
        specs: ['22.5W', '20 000 mAh', 'Гарантия 12 месяцев'],
        tags: ['powerbank', 'энергия', 'travel'],
        delivery: ['Нова Пошта', 'Укрпошта', 'Курьер'],
        payment: ['Безопасная сделка', 'Наложенный платеж'],
        safeDeal: true,
        gallery: ['PWR', '22W', 'USB'],
        forumTopicId: 'thr_3'
      },
      {
        id: 'club_support', title: 'Клуб покупателей SVOY+', price: 49, currency: 'грн', category: 'Сообщество', promoted: true,
        sellerId: 'u_me', city: 'Киев', condition: 'Цифровой доступ', posted: 'сегодня', views: 178, favorites: 31,
        description: 'Закрытый клуб: ранний доступ к подборкам, бонусам, совместным закупкам и форумным раздачам.',
        specs: ['Закрытый чат', 'Ранние офферы', 'Гайды и шаблоны'],
        tags: ['club', 'community', 'bonus'],
        delivery: ['Мгновенная цифровая доставка'],
        payment: ['Безопасная сделка', 'На бонусный счёт'],
        safeDeal: true,
        gallery: ['VIP', 'CHAT', 'BON'],
        forumTopicId: 'thr_4'
      },
      {
        id: 'voice_pack', title: 'Пакет голосов для озвучки объявлений', price: 199, currency: 'грн', category: 'Цифровое', promoted: false,
        sellerId: 'u_me', city: 'Киев', condition: 'Цифровой доступ', posted: '3 дня назад', views: 95, favorites: 19,
        description: 'Шаблоны голосовых подач и пресеты интонации для описаний товаров и форумных объявлений.',
        specs: ['6 пресетов', 'Инструкции', 'Подходит для Web Speech'],
        tags: ['voice', 'tts', 'ai'],
        delivery: ['Мгновенная цифровая доставка'],
        payment: ['На карту', 'Безопасная сделка'],
        safeDeal: true,
        gallery: ['TTS', 'AI', 'WAP'],
        forumTopicId: 'thr_5'
      }
    ],
    forumSections: [
      { id: 'sec_market', title: 'Маркет и доставка', desc: 'Безопасные сделки, OLX-подобные функции, споры и лайфхаки.' },
      { id: 'sec_voice', title: 'Голос и AI', desc: 'Синтез, шаблоны объявлений, озвучка витрин.' },
      { id: 'sec_games', title: 'Игры и бонусы', desc: 'Мини-игры, стрики, подарки за посещения.' }
    ],
    forumThreads: [
      { id: 'thr_1', sectionId: 'sec_market', title: 'Какая доставка лучше для SIM: Нова Пошта или Укрпошта?', author: 'Admin', replies: [
        { author: 'Mila', text: 'Для города быстрее Нова Пошта.', time: 'сегодня 09:12' },
        { author: 'SVOY_WAP', text: 'А для небольших населённых пунктов Укрпошта часто дешевле.', time: 'сегодня 09:20' }
      ], views: 210, lastPost: 'сегодня 09:20' },
      { id: 'thr_2', sectionId: 'sec_voice', title: 'Какие голоса лучше подходят для описания товаров?', author: 'NomadNet', replies: [
        { author: 'Roma', text: 'Спокойные женские голоса читаются приятнее.', time: 'вчера 20:11' }
      ], views: 84, lastPost: 'вчера 20:11' },
      { id: 'thr_3', sectionId: 'sec_games', title: 'Какие бонусы мотивируют вас заходить каждый день?', author: 'ChargeHub', replies: [
        { author: 'Rita', text: 'Стрик + бесплатная доставка после 7 дней подряд.', time: 'вчера 18:03' }
      ], views: 131, lastPost: 'вчера 18:03' },
      { id: 'thr_4', sectionId: 'sec_market', title: 'Как оформлять premium-объявления без навязчивости?', author: 'SVOY_WAP', replies: [], views: 52, lastPost: 'сегодня 11:00' },
      { id: 'thr_5', sectionId: 'sec_voice', title: 'Готовые пресеты голоса для форумных анонсов', author: 'SVOY_WAP', replies: [], views: 27, lastPost: 'сегодня 08:48' }
    ],
    chats: [
      {
        id: 'chat_admin', userId: 'u_admin', subject: 'Торг по тарифу «Ультра-Драйв»', unread: 1,
        messages: [
          { from: 'Admin', text: 'Могу отправить Новой Поштой сегодня после 17:00.', time: '09:42' },
          { from: 'SVOY_WAP', text: 'Если безопасная сделка, то беру.', time: '09:46' }
        ]
      },
      {
        id: 'chat_nomad', userId: 'u_nomad', subject: 'Вопрос по Travel eSIM', unread: 0,
        messages: [
          { from: 'NomadNet', text: 'QR-код придёт сразу после оплаты.', time: 'вчера 19:04' }
        ]
      }
    ],
    favorites: ['travel_esim', 'sim_ultra'],
    compare: ['sim_ultra', 'travel_esim'],
    recentViews: [],
    savedSearches: ['sim Киев', 'esim Европа', 'powerbank 20000'],
    cart: ['sim_ultra'],
    orders: [
      { id: 'ord_1001', productId: 'converter_tool_legacy', title: 'VIP-доступ к конвертеру контента', total: 0, delivery: 'Цифровая выдача', status: 'Выполнен' }
    ],
    bonus: {
      coins: 420,
      streak: 6,
      lastCheckin: '',
      wheelUsed: false,
      tasks: [
        { id: 'task_visit_catalog', title: 'Посетить каталог', reward: 10, done: false },
        { id: 'task_open_forum', title: 'Открыть форум', reward: 8, done: false },
        { id: 'task_voice', title: 'Сгенерировать голос', reward: 15, done: false },
        { id: 'task_game', title: 'Сыграть в мини-игру', reward: 12, done: false }
      ]
    },
    games: {
      guessTarget: 7,
      guessBest: 0,
      tapScore: 0,
      tapBest: 0,
      memorySequence: ['A', 'B', 'A', 'C'],
      memoryBest: 0
    },
    voice: {
      history: [],
      presets: [
        { id: 'sale', title: 'Продажный оффер', text: 'Скидка действует только сегодня. Безопасная сделка и отправка Новой Поштой.' },
        { id: 'forum', title: 'Форумный анонс', text: 'Приглашаем в тему обсуждения доставки и отзывов о продавцах.' },
        { id: 'premium', title: 'Premium-витрина', text: 'Объявление поднято в топ. Пишите в чат, отвечаем быстро.' }
      ]
    },
    visitHistory: []
  };

  var App = {
    state: null,
    page: null,
    init: function() {
      this.page = document.body.getAttribute('data-page') || 'home';
      this.state = this.loadState();
      this.applyDailyVisit();
      this.renderFrame();
      this.renderPage();
      this.bindGlobalActions();
    },
    loadState: function() {
      var saved = null;
      try {
        saved = localStorage.getItem('svoyWapFullState');
      } catch (e) {}
      if (saved) {
        try { return JSON.parse(saved); } catch (e2) {}
      }
      return JSON.parse(JSON.stringify(seed));
    },
    save: function() {
      try {
        localStorage.setItem('svoyWapFullState', JSON.stringify(this.state));
      } catch (e) {}
    },
    applyDailyVisit: function() {
      if (this.state.currentUser.lastVisit !== DAY_KEY) {
        this.state.currentUser.lastVisit = DAY_KEY;
        this.state.visitHistory.unshift('Заход ' + DAY_KEY + ': получен ежедневный бонус.');
        this.state.bonus.coins += 5;
        if (this.state.bonus.lastCheckin && this.diffDays(this.state.bonus.lastCheckin, DAY_KEY) === 1) {
          this.state.bonus.streak += 1;
        }
        if (!this.state.bonus.lastCheckin || this.diffDays(this.state.bonus.lastCheckin, DAY_KEY) > 1) {
          this.state.bonus.streak = Math.max(this.state.bonus.streak, 1);
        }
        this.save();
      }
    },
    diffDays: function(from, to) {
      var a = new Date(from).getTime();
      var b = new Date(to).getTime();
      return Math.round((b - a) / 86400000);
    },
    renderFrame: function() {
      var top = '' +
        '<div class="top"><a href="bonuses.xhtml">Бонусы: ' + this.state.bonus.coins + '</a><span class="right"><a href="messages.xhtml">Чаты (' + this.countUnread() + ')</a></span><div class="clear"></div></div>' +
        '<div class="logo-panel"><table class="row-table" summary="top"><tr><td><div class="logo">SVOY-MOBILE.WAP</div><div class="meta-line">WAP-маркет, форум, синтез речи, игры и безопасные сделки</div></td><td style="width:80px;" align="right"><a class="icon-box" href="profile.xhtml">☺ ' + this.escape(this.state.currentUser.nick) + '</a></td></tr></table></div>' +
        '<div class="navi-theme"><a href="index.xhtml">Главная</a> | <a href="catalog.xhtml">Маркет</a> | <a href="forum.xhtml">Форум</a> | <a href="voice.xhtml">Голос</a> | <a href="games.xhtml">Игры</a> | <a href="sell.xhtml">Продать</a></div>';
      var pageInfo = pages[this.page] || pages.home;
      var footer = '' +
        '<div class="footer"><div><a href="index.xhtml">Главная</a> | <a href="catalog.xhtml">Поиск</a> | <a href="messages.xhtml">Сообщения</a> | <a href="bonuses.xhtml">Бонусы</a> | <a href="sell.xhtml">Подать объявление</a></div><div class="tiny" style="margin-top:6px;">© 2026 SVOY-MOBILE.WAP — WAP-дизайн, локальное хранилище, Web Speech API, бонусы и многстраничная структура.</div></div>';
      document.getElementById('site_top').innerHTML = top;
      document.getElementById('site_breadcrumbs').innerHTML = '<div class="navi-theme">' + pageInfo.crumb + '</div><div class="header grey">' + pageInfo.title + '</div>';
      document.getElementById('site_footer').innerHTML = footer;
    },
    renderPage: function() {
      var mount = document.getElementById('page_mount');
      if (!mount) { return; }
      if (this.page === 'home') { mount.innerHTML = this.renderHome(); }
      else if (this.page === 'catalog') { mount.innerHTML = this.renderCatalog(); }
      else if (this.page === 'product') { mount.innerHTML = this.renderProduct(); }
      else if (this.page === 'profile') { mount.innerHTML = this.renderProfile(); }
      else if (this.page === 'messages') { mount.innerHTML = this.renderMessages(); }
      else if (this.page === 'forum') { mount.innerHTML = this.renderForum(); }
      else if (this.page === 'voice') { mount.innerHTML = this.renderVoice(); }
      else if (this.page === 'games') { mount.innerHTML = this.renderGames(); }
      else if (this.page === 'bonuses') { mount.innerHTML = this.renderBonuses(); }
      else if (this.page === 'sell') { mount.innerHTML = this.renderSell(); }
      else if (this.page === 'checkout') { mount.innerHTML = this.renderCheckout(); }
      this.afterRender();
    },
    afterRender: function() {
      if (this.page === 'catalog') { this.bindCatalog(); }
      if (this.page === 'product') { this.bindProduct(); }
      if (this.page === 'messages') { this.bindMessages(); }
      if (this.page === 'forum') { this.bindForum(); }
      if (this.page === 'voice') { this.bindVoice(); }
      if (this.page === 'games') { this.bindGames(); }
      if (this.page === 'bonuses') { this.bindBonuses(); }
      if (this.page === 'sell') { this.bindSell(); }
      if (this.page === 'checkout') { this.bindCheckout(); }
    },
    renderHome: function() {
      var promoted = this.state.products.filter(function(item) { return item.promoted; }).slice(0, 3);
      var recent = this.getRecentProducts();
      var tasks = this.state.bonus.tasks;
      return '' +
        '<div class="hero"><h1>Полноценный WAP-сайт с OLX-подобным маркетом и соцмеханиками</h1><div class="desc">Объявления, избранное, сравнение, безопасная сделка, разные методы доставки, чаты, форум, голосовой синтез, мини-игры и ежедневные бонусы.</div><div class="hero-actions"><a class="btn2" href="catalog.xhtml">Купить / искать</a> <a class="btn" href="sell.xhtml">Подать объявление</a> <a class="btn-flat" href="voice.xhtml">Озвучить текст</a></div></div>' +
        '<div class="panel"><table class="stat-grid" summary="stats"><tr><td><span class="stat-num">' + this.state.products.length + '</span>объявлений</td><td><span class="stat-num">' + this.state.forumThreads.length + '</span>тем форума</td><td class="last"><span class="stat-num">' + this.state.currentUser.followers + '</span>подписчиков</td></tr></table></div>' +
        '<div class="tip tip-blue"><b>Что уже работает:</b> избранное, сравнение, saved search, торг, доставка Нова Пошта / Укрпошта / курьер / самовывоз, форум, бонусы, голосовой синтез и мини-игры.</div>' +
        '<div class="header grey">Быстрые разделы</div>' +
        '<a class="link-btn" href="catalog.xhtml"><b>Маркет OLX-style</b><br /><span class="grey small">Поиск, фильтры, premium-объявления, доставка, сравнение и безопасная сделка</span></a>' +
        '<a class="link-btn" href="messages.xhtml"><b>Чаты и торг</b><br /><span class="grey small">Личные сообщения, предложения цены и быстрые ответы продавцов</span></a>' +
        '<a class="link-btn" href="forum.xhtml"><b>Форум сообщества</b><br /><span class="grey small">Разделы по маркету, голосу, играм, доставке и отзывам</span></a>' +
        '<a class="link-btn" href="voice.xhtml"><b>Синтез голоса</b><br /><span class="grey small">Вставьте текст и получите озвучку разными браузерными голосами</span></a>' +
        '<a class="link-btn" href="games.xhtml"><b>Мини-игры</b><br /><span class="grey small">Получайте монеты и скидочные бонусы за активность</span></a>' +
        '<div class="header grey">Premium-объявления</div>' + this.renderProductList(promoted, true) +
        '<div class="header grey">Бонусные задания дня</div>' + this.renderTasks(tasks) +
        '<div class="header grey">Недавно просмотренные</div>' + (recent || '<div class="block grey">Пока пусто — откройте несколько товаров.</div>') +
        '<div class="header grey">Сейчас обсуждают</div>' + this.renderForumDigest();
    },
    renderCatalog: function() {
      var search = this.param('q') || '';
      var category = this.param('cat') || 'all';
      var delivery = this.param('delivery') || 'all';
      var city = this.param('city') || '';
      var min = parseFloat(this.param('min') || '0');
      var max = parseFloat(this.param('max') || '999999');
      var safe = this.param('safe') === '1';
      var filtered = this.filterProducts(search, category, delivery, city, min, max, safe);
      return '' +
        '<div class="tabs"><span class="current">Все объявления</span><a href="catalog.xhtml?cat=Связь">Связь</a><a href="catalog.xhtml?cat=Аксессуары">Аксессуары</a><a href="catalog.xhtml?cat=Цифровое">Цифровое</a></div>' +
        '<div class="market-box"><form id="catalog_form" action="catalog.xhtml" method="get"><div><b>Поиск по OLX-стилю</b></div><input type="text" id="q" name="q" class="form" value="' + this.escapeAttr(search) + '" placeholder="SIM, eSIM, павербанк, голос" /><div class="grid2"><div class="col"><label class="small">Категория<select id="cat" name="cat" class="form"><option value="all">Все</option><option value="Связь">Связь</option><option value="Аксессуары">Аксессуары</option><option value="Цифровое">Цифровое</option><option value="Сообщество">Сообщество</option></select></label></div><div class="col"><label class="small">Доставка<select id="delivery" name="delivery" class="form"><option value="all">Любая</option><option value="Нова Пошта">Нова Пошта</option><option value="Укрпошта">Укрпошта</option><option value="Курьер">Курьер</option><option value="Самовывоз">Самовывоз</option><option value="Мгновенная цифровая доставка">Цифровая</option></select></label></div></div><div class="grid2"><div class="col"><input type="text" id="city" name="city" class="form" value="' + this.escapeAttr(city) + '" placeholder="Город" /></div><div class="col"><table class="row-table" summary="price"><tr><td><input type="text" id="min" name="min" class="form" value="' + (min ? this.escapeAttr(String(min)) : '') + '" placeholder="от" /></td><td style="width:6px;"></td><td><input type="text" id="max" name="max" class="form" value="' + (max !== 999999 ? this.escapeAttr(String(max)) : '') + '" placeholder="до" /></td></tr></table></div></div><label class="checkbox-line"><input type="checkbox" id="safe" name="safe" value="1"' + (safe ? ' checked="checked"' : '') + ' /> Только безопасная сделка</label><div style="margin-top:6px;"><input type="submit" class="form_button" value="Искать" /> <a class="btn-flat" href="#" id="save_search">Сохранить поиск</a> <a class="btn-flat" href="catalog.xhtml">Сбросить</a></div></form></div>' +
        '<div class="tip"><b>Сохранённые поиски:</b> ' + this.state.savedSearches.map(this.escape).join(', ') + '</div>' +
        '<div class="header grey">Найдено объявлений: ' + filtered.length + '</div>' + this.renderProductList(filtered, false) +
        '<div class="header grey">Сравнение</div>' + this.renderCompareBox();
    },
    renderProductList: function(list, compact) {
      var self = this;
      if (!list.length) {
        return '<div class="block grey">Ничего не найдено.</div>';
      }
      return list.map(function(item) {
        var seller = self.getUser(item.sellerId);
        return '<a class="product-line" href="product.xhtml?id=' + self.escapeAttr(item.id) + '"><table class="row-table" summary="product"><tr><td style="width:58px;"><span class="thumb">' + self.escape(item.gallery[0]) + '</span></td><td><b>' + self.escape(item.title) + '</b> ' + (item.promoted ? '<span class="badge badge-gold">TOP</span>' : '') + '<br /><span class="price">' + self.money(item.price) + '</span><div class="market-meta small grey">' + self.escape(item.city) + ' • ' + self.escape(item.condition) + ' • продавец ' + self.escape(seller.nick) + ' ★' + seller.rating + '</div><div>' + item.delivery.map(function(d) { return '<span class="chip">' + self.escape(d) + '</span>'; }).join('') + '</div>' + (!compact ? '<div class="small grey">' + self.escape(item.description) + '</div>' : '') + '</td></tr></table></a>';
      }).join('');
    },
    renderProduct: function() {
      var id = this.param('id') || this.state.products[0].id;
      var item = this.getProduct(id);
      if (!item) { return '<div class="block">Товар не найден.</div>'; }
      this.pushRecent(id);
      var seller = this.getUser(item.sellerId);
      var fav = this.state.favorites.indexOf(item.id) !== -1;
      var cmp = this.state.compare.indexOf(item.id) !== -1;
      return '' +
        '<div class="market-box"><table class="row-table" summary="product"><tr><td style="width:62px;">' + item.gallery.map(function(g) { return '<div class="thumb thumb-small" style="margin-bottom:4px;">' + App.escape(g) + '</div>'; }).join('') + '</td><td><h3>' + this.escape(item.title) + '</h3><div class="price">' + this.money(item.price) + '</div><div class="small grey">' + this.escape(item.city) + ' • ' + this.escape(item.posted) + ' • просмотров: ' + item.views + '</div><div>' + (item.safeDeal ? '<span class="chip">Безопасная сделка</span>' : '') + '<span class="chip">Категория: ' + this.escape(item.category) + '</span><span class="chip">Избранное: ' + item.favorites + '</span></div></td></tr></table></div>' +
        '<div class="panel"><b>Описание</b><div class="quote">' + this.escape(item.description) + '</div><div style="margin-top:6px;">' + item.specs.map(function(s) { return '<span class="chip">' + App.escape(s) + '</span>'; }).join('') + '</div></div>' +
        '<div class="header grey">Доставка и оплата</div><div class="delivery-line"><b>Способы доставки</b><br />' + item.delivery.map(function(d) { return '<span class="chip">' + App.escape(d) + '</span>'; }).join('') + '</div><div class="delivery-line"><b>Оплата</b><br />' + item.payment.map(function(p) { return '<span class="chip">' + App.escape(p) + '</span>'; }).join('') + '</div><div class="delivery-line"><b>Быстрый переход к сделке</b><br /><a class="btn2" href="checkout.xhtml?id=' + this.escapeAttr(item.id) + '">Купить / оформить</a> <a class="btn-flat" href="messages.xhtml?chat=' + this.ensureChatForSeller(seller.id, item.title, true) + '">Написать продавцу</a></div>' +
        '<div class="header grey">Действия как на OLX</div><div class="block"><a class="btn-flat" href="#" id="fav_toggle">' + (fav ? 'Убрать из избранного' : 'В избранное') + '</a> <a class="btn-flat" href="#" id="cmp_toggle">' + (cmp ? 'Убрать из сравнения' : 'Сравнить') + '</a> <a class="btn-flat" href="#" id="bargain_btn">Предложить цену</a> <a class="btn-flat" href="#" id="report_btn">Пожаловаться</a></div>' +
        '<div class="header grey">Профиль продавца</div>' + this.renderSellerCard(seller, item) +
        '<div class="header grey">Связанный форум</div><a class="thread-line" href="forum.xhtml?thread=' + this.escapeAttr(item.forumTopicId) + '"><b>' + this.escape(this.getThread(item.forumTopicId).title) + '</b><br /><span class="grey small">Открыть обсуждение доставки, отзывов и вопросов по товару</span></a>';
    },
    renderSellerCard: function(seller, item) {
      return '<a class="profile-card" href="profile.xhtml?user=' + this.escapeAttr(seller.id) + '"><table class="row-table" summary="seller"><tr><td style="width:58px;"><span class="avatar">' + this.escape(seller.avatar) + '</span></td><td><b>' + this.escape(seller.nick) + '</b> <span class="badge badge-green">★ ' + seller.rating + '</span><br /><span class="small grey">' + this.escape(seller.role) + ' • ' + this.escape(seller.city) + ' • ответ ' + this.escape(seller.response || 'быстро') + '</span><div>' + seller.badges.map(function(b) { return '<span class="chip">' + App.escape(b) + '</span>'; }).join('') + '</div><div class="small grey">' + this.escape(seller.about) + '</div></td></tr></table></a>' +
        '<div class="review-line"><b>Последние отзывы</b><br />' + seller.reviews.map(function(r) { return '<div class="notice"><b>' + App.escape(r.author) + ':</b> ' + App.escape(r.text) + '</div>'; }).join('') + '</div>';
    },
    renderProfile: function() {
      var id = this.param('user') || 'u_me';
      var user = this.getUser(id);
      var ads = this.state.products.filter(function(p) { return p.sellerId === id; });
      return '' +
        '<div class="profile-card"><table class="row-table" summary="profile"><tr><td style="width:64px;"><span class="avatar">' + this.escape(user.avatar) + '</span></td><td><h3>' + this.escape(user.nick) + '</h3><div class="small grey">' + this.escape(user.role || 'Пользователь') + ' • ' + this.escape(user.city) + '</div><div class="small grey">Сделок: ' + (user.deals || this.state.currentUser.deals) + ' • Подписчики: ' + (user.followers || 0) + ' • Рейтинг: ' + user.rating + '</div></td></tr></table><div class="divider"></div><div>' + (user.badges || []).map(function(b) { return '<span class="chip">' + App.escape(b) + '</span>'; }).join('') + '</div><div class="quote">' + this.escape(user.about || this.state.currentUser.about) + '</div></div>' +
        '<div class="header grey">Подробная анкета</div><div class="block"><div><span class="grey">Телефон:</span> ' + this.escape(user.phone || 'доступен после сделки') + '</div><div><span class="grey">Дата регистрации:</span> ' + this.escape(user.registerDate || '2025-01-01') + '</div><div><span class="grey">Интересы:</span> ' + ((user.interests || ['маркет', 'доставка']).map(function(i) { return App.escape(i); }).join(', ')) + '</div><div><span class="grey">Уровень промо:</span> ' + this.escape(user.promoLevel || 'Seller Pro') + '</div></div>' +
        '<div class="header grey">Активные объявления</div>' + this.renderProductList(ads, false) +
        '<div class="header grey">Отзывы</div>' + (user.reviews || []).map(function(r) { return '<div class="review-line"><b>' + App.escape(r.author) + '</b> <span class="badge badge-green">' + r.score + '/5</span><br />' + App.escape(r.text) + '</div>'; }).join('') +
        '<div class="header grey">Действия</div><div class="block"><a class="btn2" href="messages.xhtml?chat=' + this.ensureChatForSeller(id, 'Прямой чат с профиля', true) + '">Написать</a> <a class="btn-flat" href="forum.xhtml">Позвать на форум</a> <a class="btn-flat" href="bonuses.xhtml">Отправить подарок</a></div>';
    },
    renderMessages: function() {
      var current = this.param('chat') || (this.state.chats[0] ? this.state.chats[0].id : '');
      var list = this.state.chats.map(function(chat) {
        var user = App.getUser(chat.userId);
        return '<a class="chat-line" href="messages.xhtml?chat=' + App.escapeAttr(chat.id) + '"><b>' + App.escape(user.nick) + '</b> ' + (chat.unread ? '<span class="badge">' + chat.unread + '</span>' : '') + '<br /><span class="small grey">' + App.escape(chat.subject) + '</span></a>';
      }).join('');
      var chat = this.getChat(current);
      var thread = chat ? chat.messages.map(function(m) {
        return '<div class="notice"><b>' + App.escape(m.from) + ':</b> ' + App.escape(m.text) + '<br /><span class="tiny grey">' + App.escape(m.time) + '</span></div>';
      }).join('') : '<div class="block grey">Чат не выбран.</div>';
      return '<div class="tabs"><span class="current">Диалоги</span><a href="messages.xhtml">Все</a><a href="messages.xhtml?chat=chat_admin">Торг</a></div><div class="grid2"><div class="col">' + list + '</div><div class="col"><div class="chat-box"><b>Окно переписки</b><div id="chat_thread">' + thread + '</div><div class="divider"></div><form id="chat_form" action="#" method="post"><input type="hidden" id="chat_id" value="' + this.escapeAttr(current) + '" /><textarea id="chat_text" class="form" placeholder="Написать сообщение или предложение цены"></textarea><div style="margin-top:6px;"><input type="submit" class="form_button" value="Отправить" /> <a class="btn-flat" href="#" id="quick_bargain">Быстрый торг -10%</a></div></form></div></div></div>';
    },
    renderForum: function() {
      var threadId = this.param('thread') || '';
      var sectionDigest = this.state.forumSections.map(function(sec) {
        var count = App.state.forumThreads.filter(function(t) { return t.sectionId === sec.id; }).length;
        return '<div class="thread-line"><b>' + App.escape(sec.title) + '</b><br /><span class="small grey">' + App.escape(sec.desc) + ' • тем: ' + count + '</span></div>';
      }).join('');
      var threads = this.state.forumThreads.map(function(t) {
        return '<a class="thread-line" href="forum.xhtml?thread=' + App.escapeAttr(t.id) + '"><b>' + App.escape(t.title) + '</b><br /><span class="small grey">Автор: ' + App.escape(t.author) + ' • ответов: ' + t.replies.length + ' • просмотров: ' + t.views + ' • последнее: ' + App.escape(t.lastPost) + '</span></a>';
      }).join('');
      var topicHtml = '';
      if (threadId) {
        var thread = this.getThread(threadId);
        if (thread) {
          topicHtml = '<div class="header grey">Тема: ' + this.escape(thread.title) + '</div>' + thread.replies.map(function(r) {
            return '<div class="post"><b>' + App.escape(r.author) + '</b><br />' + App.escape(r.text) + '<br /><span class="tiny grey">' + App.escape(r.time) + '</span></div>';
          }).join('') + '<div class="post"><form id="forum_reply_form" action="#" method="post"><input type="hidden" id="reply_thread_id" value="' + this.escapeAttr(thread.id) + '" /><textarea id="forum_reply_text" class="form" placeholder="Ответить в тему"></textarea><div style="margin-top:6px;"><input type="submit" class="form_button" value="Ответить" /></div></form></div>';
        }
      }
      return '<div class="tip tip-blue"><b>Форум</b> объединяет отзывы, советы по доставке, AI-озвучку, предложения по интерфейсу и игровые бонусы.</div><div class="header grey">Разделы</div>' + sectionDigest + '<div class="header grey">Темы</div>' + threads + topicHtml + '<div class="header grey">Создать тему</div><div class="post"><form id="forum_new_form" action="#" method="post"><input type="text" id="forum_title" class="form" placeholder="Название темы" /><select id="forum_section" class="form"><option value="sec_market">Маркет и доставка</option><option value="sec_voice">Голос и AI</option><option value="sec_games">Игры и бонусы</option></select><textarea id="forum_text" class="form" placeholder="Первое сообщение темы"></textarea><div style="margin-top:6px;"><input type="submit" class="form_button" value="Создать тему" /></div></form></div>';
    },
    renderVoice: function() {
      return '<div class="voice-box"><b>Синтез текста в голос</b><div class="small grey">Используется современный браузерный движок SpeechSynthesis. Голоса зависят от устройства пользователя.</div><textarea id="voice_text" class="form" placeholder="Вставьте сюда описание товара, анонс форума или рекламный оффер"></textarea><select id="voice_preset" class="form"><option value="">Выбрать готовый шаблон</option>' + this.state.voice.presets.map(function(p) { return '<option value="' + App.escapeAttr(p.id) + '">' + App.escape(p.title) + '</option>'; }).join('') + '</select><select id="voice_select" class="form"><option value="">Загрузка голосов…</option></select><div class="grid2"><div class="col"><label class="small">Скорость<input type="range" id="voice_rate" min="0.6" max="1.6" step="0.1" value="1" class="form" /></label></div><div class="col"><label class="small">Тон<input type="range" id="voice_pitch" min="0.5" max="1.7" step="0.1" value="1" class="form" /></label></div></div><div style="margin-top:6px;"><a class="btn2" href="#" id="voice_play">Озвучить</a> <a class="btn-flat" href="#" id="voice_stop">Стоп</a> <a class="btn-flat" href="#" id="voice_save_preset">Сохранить в историю</a></div><div id="voice_status" class="notice">Готово к синтезу.</div></div><div class="header grey">История озвучек</div>' + this.renderVoiceHistory();
    },
    renderVoiceHistory: function() {
      if (!this.state.voice.history.length) {
        return '<div class="block grey">История пока пуста.</div>';
      }
      return this.state.voice.history.map(function(h) {
        return '<div class="voice-box"><b>' + App.escape(h.voice || 'Системный голос') + '</b><br /><span class="small grey">' + App.escape(h.time) + ' • rate ' + h.rate + ' • pitch ' + h.pitch + '</span><div class="quote">' + App.escape(h.text) + '</div></div>';
      }).join('');
    },
    renderGames: function() {
      return '<div class="game-box"><b>Игра №1: угадай число</b><div class="small grey">Угадайте число от 1 до 10. За успех +15 монет.</div><form id="guess_form" action="#" method="post"><input type="text" id="guess_input" class="form" placeholder="Введите число" /><div style="margin-top:6px;"><input type="submit" class="form_button" value="Проверить" /></div></form><div id="guess_status" class="notice">Лучший счёт: ' + this.state.games.guessBest + '</div></div>' +
        '<div class="game-box"><b>Игра №2: быстрый тап</b><div class="small grey">Нажмите кнопку 10 раз как можно быстрее. За новый рекорд +20 монет.</div><a class="btn2" href="#" id="tap_start">Старт</a> <a class="btn-flat" href="#" id="tap_hit">Тапнуть</a><div id="tap_status" class="notice">Рекорд: ' + this.state.games.tapBest + ' тапов за раунд.</div></div>' +
        '<div class="game-box"><b>Игра №3: память</b><div class="small grey">Повторите последовательность символов A/B/C. За верную попытку +18 монет.</div><div class="quote">Последовательность: ' + this.state.games.memorySequence.join(' - ') + '</div><form id="memory_form" action="#" method="post"><input type="text" id="memory_input" class="form" placeholder="Например: A B A C" /><div style="margin-top:6px;"><input type="submit" class="form_button" value="Проверить" /></div></form><div id="memory_status" class="notice">Лучший результат: ' + this.state.games.memoryBest + '</div></div>';
    },
    renderBonuses: function() {
      var completed = this.state.bonus.tasks.filter(function(t) { return t.done; }).length;
      return '<div class="panel"><b>Бонусный центр</b><div class="small grey">Стимулируем ежедневные визиты: стрик, колесо удачи, задания и скидочные монеты.</div><div class="divider"></div><div><span class="chip">Монеты: ' + this.state.bonus.coins + '</span><span class="chip">Стрик: ' + this.state.bonus.streak + ' дней</span><span class="chip">Выполнено заданий: ' + completed + '/' + this.state.bonus.tasks.length + '</span></div></div>' +
        '<div class="header grey">Ежедневный чек-ин</div><div class="block"><a class="btn2" href="#" id="daily_checkin">Забрать ежедневный бонус</a><div class="notice" id="checkin_status">Последний чек-ин: ' + (this.state.bonus.lastCheckin || 'ещё не получен') + '</div></div>' +
        '<div class="header grey">Колесо удачи</div><div class="block"><a class="btn" href="#" id="bonus_wheel">Крутить колесо</a><div class="notice" id="wheel_status">Сегодня: ' + (this.state.bonus.wheelUsed ? 'уже использовано' : 'ещё не крутилось') + '</div></div>' +
        '<div class="header grey">Задания</div>' + this.renderTasks(this.state.bonus.tasks) +
        '<div class="header grey">История посещений</div>' + (this.state.visitHistory.length ? this.state.visitHistory.map(function(v) { return '<div class="list-item">' + App.escape(v) + '</div>'; }).join('') : '<div class="block grey">История пуста.</div>');
    },
    renderTasks: function(tasks) {
      return tasks.map(function(t) {
        return '<div class="list-item"><b>' + App.escape(t.title) + '</b> <span class="badge ' + (t.done ? 'badge-green' : 'badge-blue') + '">' + (t.done ? 'готово' : '+' + t.reward + ' монет') + '</span></div>';
      }).join('');
    },
    renderSell: function() {
      return '<div class="panel"><b>Новое объявление</b><div class="small grey">Форма ближе к OLX: категория, цена, состояние, описание, доставка, безопасная сделка и автопубликация в профиль.</div></div><div class="market-box"><form id="sell_form" action="#" method="post"><input type="text" id="sell_title" class="form" placeholder="Название товара" /><div class="grid2"><div class="col"><input type="text" id="sell_price" class="form" placeholder="Цена" /></div><div class="col"><select id="sell_category" class="form"><option value="Связь">Связь</option><option value="Аксессуары">Аксессуары</option><option value="Цифровое">Цифровое</option><option value="Сообщество">Сообщество</option></select></div></div><input type="text" id="sell_city" class="form" placeholder="Город" value="' + this.escapeAttr(this.state.currentUser.city) + '" /><select id="sell_condition" class="form"><option value="Новый">Новый</option><option value="Б/у">Б/у</option><option value="Цифровой доступ">Цифровой доступ</option></select><textarea id="sell_desc" class="form" placeholder="Подробное описание"></textarea><input type="text" id="sell_tags" class="form" placeholder="Теги через запятую" /><div class="divider"></div><b>Доставка</b><label class="checkbox-line"><input type="checkbox" name="sell_delivery" value="Нова Пошта" checked="checked" /> Нова Пошта</label><label class="checkbox-line"><input type="checkbox" name="sell_delivery" value="Укрпошта" checked="checked" /> Укрпошта</label><label class="checkbox-line"><input type="checkbox" name="sell_delivery" value="Курьер" /> Курьер</label><label class="checkbox-line"><input type="checkbox" name="sell_delivery" value="Самовывоз" /> Самовывоз</label><label class="checkbox-line"><input type="checkbox" id="sell_safe" checked="checked" /> Доступна безопасная сделка</label><div style="margin-top:6px;"><input type="submit" class="form_button" value="Опубликовать" /></div></form><div id="sell_status" class="notice">После публикации объявление появится в каталоге и профиле.</div></div>';
    },
    renderCheckout: function() {
      var id = this.param('id') || this.state.cart[0] || this.state.products[0].id;
      var item = this.getProduct(id);
      return '<div class="panel"><b>Оформление сделки</b><div class="small grey">Поддерживаются Нова Пошта, Укрпошта, курьер, самовывоз и цифровая выдача.</div></div><div class="order-line"><b>' + this.escape(item.title) + '</b><div class="price">' + this.money(item.price) + '</div><div class="small grey">Продавец: ' + this.escape(this.getUser(item.sellerId).nick) + '</div></div><div class="market-box"><form id="checkout_form" action="#" method="post"><input type="hidden" id="checkout_product_id" value="' + this.escapeAttr(item.id) + '" /><label>Получатель<input type="text" id="checkout_name" class="form" value="' + this.escapeAttr(this.state.currentUser.nick) + '" /></label><label>Телефон<input type="text" id="checkout_phone" class="form" value="' + this.escapeAttr(this.state.currentUser.phone) + '" /></label><label>Доставка<select id="checkout_delivery" class="form"><option value="Нова Пошта">Нова Пошта</option><option value="Укрпошта">Укрпошта</option><option value="Курьер">Курьер</option><option value="Самовывоз">Самовывоз</option><option value="Мгновенная цифровая доставка">Мгновенная цифровая доставка</option></select></label><label>Город / отделение<input type="text" id="checkout_city" class="form" placeholder="Киев, отделение №3" /></label><label>Оплата<select id="checkout_payment" class="form"><option value="Безопасная сделка">Безопасная сделка</option><option value="Наложенный платеж">Наложенный платеж</option><option value="На карту">На карту</option></select></label><label>Комментарий<textarea id="checkout_comment" class="form" placeholder="Пожелания по доставке"></textarea></label><div style="margin-top:6px;"><input type="submit" class="form_button" value="Подтвердить" /></div></form><div id="checkout_status" class="notice">Средства будут зарезервированы до получения.</div></div>';
    },
    renderCompareBox: function() {
      var items = this.state.compare.map(this.getProduct.bind(this)).filter(Boolean);
      if (!items.length) {
        return '<div class="block grey">Список сравнения пуст.</div>';
      }
      return items.map(function(item) {
        return '<div class="list-item"><b>' + App.escape(item.title) + '</b><br /><span class="price">' + App.money(item.price) + '</span><br /><span class="small grey">' + item.delivery.join(', ') + '</span></div>';
      }).join('');
    },
    renderForumDigest: function() {
      return this.state.forumThreads.slice(0, 3).map(function(t) {
        return '<a class="thread-line" href="forum.xhtml?thread=' + App.escapeAttr(t.id) + '"><b>' + App.escape(t.title) + '</b><br /><span class="small grey">' + App.escape(t.author) + ' • ответов: ' + t.replies.length + '</span></a>';
      }).join('');
    },
    bindGlobalActions: function() {
      var saveBtn = document.getElementById('save_search');
      if (saveBtn) {
        saveBtn.onclick = function() {
          var q = document.getElementById('q').value || 'без названия';
          App.state.savedSearches.unshift(q);
          App.markTask('task_visit_catalog');
          App.save();
          alert('Поиск сохранён.');
          return false;
        };
      }
    },
    bindCatalog: function() {
      var cat = document.getElementById('cat');
      var delivery = document.getElementById('delivery');
      if (cat) { cat.value = this.param('cat') || 'all'; }
      if (delivery) { delivery.value = this.param('delivery') || 'all'; }
    },
    bindProduct: function() {
      var id = this.param('id') || this.state.products[0].id;
      var item = this.getProduct(id);
      var favBtn = document.getElementById('fav_toggle');
      var cmpBtn = document.getElementById('cmp_toggle');
      var bargainBtn = document.getElementById('bargain_btn');
      var reportBtn = document.getElementById('report_btn');
      if (favBtn) {
        favBtn.onclick = function() {
          App.toggleArrayItem(App.state.favorites, item.id);
          App.save();
          App.renderPage();
          return false;
        };
      }
      if (cmpBtn) {
        cmpBtn.onclick = function() {
          App.toggleArrayItem(App.state.compare, item.id);
          App.save();
          App.renderPage();
          return false;
        };
      }
      if (bargainBtn) {
        bargainBtn.onclick = function() {
          var offer = prompt('Введите вашу цену:', String(Math.max(1, item.price - 10)));
          if (offer) {
            var chatId = App.ensureChatForSeller(item.sellerId, 'Торг по товару «' + item.title + '»', false);
            var chat = App.getChat(chatId);
            chat.messages.push({ from: App.state.currentUser.nick, text: 'Предлагаю ' + offer + ' грн за «' + item.title + '».', time: 'только что' });
            chat.unread += 1;
            App.save();
            alert('Предложение отправлено в чат.');
          }
          return false;
        };
      }
      if (reportBtn) {
        reportBtn.onclick = function() {
          alert('Жалоба отправлена модерации.');
          return false;
        };
      }
      this.markTask('task_visit_catalog');
    },
    bindMessages: function() {
      var form = document.getElementById('chat_form');
      var quick = document.getElementById('quick_bargain');
      if (form) {
        form.onsubmit = function() {
          var id = document.getElementById('chat_id').value;
          var text = document.getElementById('chat_text').value;
          if (!text) { return false; }
          var chat = App.getChat(id);
          if (!chat) { return false; }
          chat.messages.push({ from: App.state.currentUser.nick, text: text, time: 'только что' });
          chat.unread = 0;
          App.save();
          App.renderPage();
          return false;
        };
      }
      if (quick) {
        quick.onclick = function() {
          var id = document.getElementById('chat_id').value;
          var chat = App.getChat(id);
          if (chat) {
            chat.messages.push({ from: App.state.currentUser.nick, text: 'Предлагаю скидку 10% при безопасной сделке.', time: 'только что' });
            App.save();
            App.renderPage();
          }
          return false;
        };
      }
    },
    bindForum: function() {
      var replyForm = document.getElementById('forum_reply_form');
      var newForm = document.getElementById('forum_new_form');
      if (replyForm) {
        replyForm.onsubmit = function() {
          var id = document.getElementById('reply_thread_id').value;
          var text = document.getElementById('forum_reply_text').value;
          if (!text) { return false; }
          var thread = App.getThread(id);
          thread.replies.push({ author: App.state.currentUser.nick, text: text, time: 'только что' });
          thread.lastPost = 'только что';
          App.markTask('task_open_forum');
          App.save();
          App.renderPage();
          return false;
        };
      }
      if (newForm) {
        newForm.onsubmit = function() {
          var title = document.getElementById('forum_title').value;
          var section = document.getElementById('forum_section').value;
          var text = document.getElementById('forum_text').value;
          if (!title || !text) { return false; }
          App.state.forumThreads.unshift({ id: 'thr_' + Date.now(), sectionId: section, title: title, author: App.state.currentUser.nick, replies: [{ author: App.state.currentUser.nick, text: text, time: 'только что' }], views: 1, lastPost: 'только что' });
          App.markTask('task_open_forum');
          App.save();
          window.location.href = 'forum.xhtml';
          return false;
        };
      }
    },
    bindVoice: function() {
      var voices = [];
      var select = document.getElementById('voice_select');
      var preset = document.getElementById('voice_preset');
      function loadVoices() {
        if (!window.speechSynthesis || !select) { return; }
        voices = window.speechSynthesis.getVoices();
        if (!voices.length) { return; }
        select.innerHTML = voices.map(function(v, i) { return '<option value="' + i + '">' + App.escape(v.name + ' (' + v.lang + ')') + '</option>'; }).join('');
      }
      if (window.speechSynthesis) {
        loadVoices();
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
          window.speechSynthesis.onvoiceschanged = loadVoices;
        }
      }
      if (preset) {
        preset.onchange = function() {
          var chosen = App.state.voice.presets.filter(function(p) { return p.id === preset.value; })[0];
          if (chosen) { document.getElementById('voice_text').value = chosen.text; }
        };
      }
      var play = document.getElementById('voice_play');
      var stop = document.getElementById('voice_stop');
      var saveBtn = document.getElementById('voice_save_preset');
      if (play) {
        play.onclick = function() {
          var text = document.getElementById('voice_text').value;
          var status = document.getElementById('voice_status');
          if (!text) { status.innerHTML = 'Введите текст для озвучки.'; return false; }
          if (!window.speechSynthesis) { status.innerHTML = 'SpeechSynthesis недоступен в этом браузере.'; return false; }
          var utter = new SpeechSynthesisUtterance(text);
          var idx = parseInt(select.value || '0', 10);
          if (voices[idx]) { utter.voice = voices[idx]; }
          utter.rate = parseFloat(document.getElementById('voice_rate').value);
          utter.pitch = parseFloat(document.getElementById('voice_pitch').value);
          window.speechSynthesis.cancel();
          window.speechSynthesis.speak(utter);
          status.innerHTML = 'Озвучивание запущено.';
          App.markTask('task_voice');
          return false;
        };
      }
      if (stop) {
        stop.onclick = function() {
          if (window.speechSynthesis) { window.speechSynthesis.cancel(); }
          document.getElementById('voice_status').innerHTML = 'Озвучивание остановлено.';
          return false;
        };
      }
      if (saveBtn) {
        saveBtn.onclick = function() {
          var text = document.getElementById('voice_text').value;
          if (!text) { return false; }
          var voiceName = select && select.options.length ? select.options[select.selectedIndex].text : 'Системный голос';
          App.state.voice.history.unshift({ text: text, voice: voiceName, rate: document.getElementById('voice_rate').value, pitch: document.getElementById('voice_pitch').value, time: 'только что' });
          App.save();
          App.renderPage();
          return false;
        };
      }
    },
    bindGames: function() {
      var guess = document.getElementById('guess_form');
      var tapStart = document.getElementById('tap_start');
      var tapHit = document.getElementById('tap_hit');
      var memory = document.getElementById('memory_form');
      if (guess) {
        guess.onsubmit = function() {
          var value = parseInt(document.getElementById('guess_input').value || '0', 10);
          if (value === App.state.games.guessTarget) {
            App.reward(15, 'Угадано число');
            App.state.games.guessBest += 1;
            document.getElementById('guess_status').innerHTML = 'Верно! +15 монет.';
          } else {
            document.getElementById('guess_status').innerHTML = 'Не угадали. Попробуйте снова.';
          }
          App.state.games.guessTarget = Math.floor(Math.random() * 10) + 1;
          App.markTask('task_game');
          App.save();
          return false;
        };
      }
      if (tapStart && tapHit) {
        tapStart.onclick = function() {
          App.state.games.tapScore = 0;
          document.getElementById('tap_status').innerHTML = 'Раунд начат. Нажмите 10 раз.';
          App.save();
          return false;
        };
        tapHit.onclick = function() {
          App.state.games.tapScore += 1;
          if (App.state.games.tapScore >= 10) {
            if (App.state.games.tapBest < App.state.games.tapScore) {
              App.state.games.tapBest = App.state.games.tapScore;
              App.reward(20, 'Новый рекорд в тап-игре');
            }
            document.getElementById('tap_status').innerHTML = 'Раунд завершён. Рекорд: ' + App.state.games.tapBest;
            App.state.games.tapScore = 0;
            App.markTask('task_game');
            App.save();
          } else {
            document.getElementById('tap_status').innerHTML = 'Нажатий: ' + App.state.games.tapScore + ' из 10';
          }
          return false;
        };
      }
      if (memory) {
        memory.onsubmit = function() {
          var value = document.getElementById('memory_input').value.replace(/\s+/g, ' ').trim();
          var need = App.state.games.memorySequence.join(' ');
          if (value.toUpperCase() === need.toUpperCase()) {
            App.state.games.memoryBest += 1;
            App.reward(18, 'Победа в игре на память');
            document.getElementById('memory_status').innerHTML = 'Правильно! +18 монет.';
          } else {
            document.getElementById('memory_status').innerHTML = 'Последовательность неверна.';
          }
          App.markTask('task_game');
          App.save();
          return false;
        };
      }
    },
    bindBonuses: function() {
      var check = document.getElementById('daily_checkin');
      var wheel = document.getElementById('bonus_wheel');
      if (check) {
        check.onclick = function() {
          if (App.state.bonus.lastCheckin === DAY_KEY) {
            document.getElementById('checkin_status').innerHTML = 'Сегодня бонус уже получен.';
            return false;
          }
          App.state.bonus.lastCheckin = DAY_KEY;
          App.state.bonus.coins += 25;
          App.state.visitHistory.unshift('Чек-ин: +25 монет за ' + DAY_KEY);
          App.save();
          App.renderPage();
          return false;
        };
      }
      if (wheel) {
        wheel.onclick = function() {
          if (App.state.bonus.wheelUsed) {
            document.getElementById('wheel_status').innerHTML = 'Колесо уже использовано сегодня.';
            return false;
          }
          var rewards = [5, 10, 20, 30, 50];
          var reward = rewards[Math.floor(Math.random() * rewards.length)];
          App.state.bonus.wheelUsed = true;
          App.reward(reward, 'Колесо удачи');
          document.getElementById('wheel_status').innerHTML = 'Выпало: +' + reward + ' монет.';
          App.save();
          return false;
        };
      }
    },
    bindSell: function() {
      var form = document.getElementById('sell_form');
      if (!form) { return; }
      form.onsubmit = function() {
        var title = document.getElementById('sell_title').value;
        var price = parseFloat(document.getElementById('sell_price').value || '0');
        var category = document.getElementById('sell_category').value;
        var city = document.getElementById('sell_city').value;
        var condition = document.getElementById('sell_condition').value;
        var desc = document.getElementById('sell_desc').value;
        var tags = document.getElementById('sell_tags').value.split(',').map(function(s) { return s.replace(/^\s+|\s+$/g, ''); }).filter(Boolean);
        var delivery = [];
        var checks = document.getElementsByName('sell_delivery');
        var i;
        for (i = 0; i < checks.length; i += 1) { if (checks[i].checked) { delivery.push(checks[i].value); } }
        if (!title || !desc || !price) {
          document.getElementById('sell_status').innerHTML = 'Заполните название, цену и описание.';
          return false;
        }
        var id = 'prod_' + Date.now();
        App.state.products.unshift({
          id: id, title: title, price: price, currency: 'грн', category: category, promoted: false,
          sellerId: 'u_me', city: city, condition: condition, posted: 'только что', views: 0, favorites: 0,
          description: desc, specs: ['Новое объявление', 'WAP-витрина', 'Готово к безопасной сделке'],
          tags: tags.length ? tags : ['новинка'], delivery: delivery.length ? delivery : ['Самовывоз'],
          payment: ['Безопасная сделка', 'На карту'], safeDeal: document.getElementById('sell_safe').checked,
          gallery: [title.substring(0, 3).toUpperCase(), category.substring(0, 2).toUpperCase(), 'NEW'], forumTopicId: 'thr_' + Date.now()
        });
        App.reward(10, 'Опубликовано объявление');
        App.save();
        window.location.href = 'product.xhtml?id=' + id;
        return false;
      };
    },
    bindCheckout: function() {
      var form = document.getElementById('checkout_form');
      if (!form) { return; }
      form.onsubmit = function() {
        var id = document.getElementById('checkout_product_id').value;
        var item = App.getProduct(id);
        var delivery = document.getElementById('checkout_delivery').value;
        var name = document.getElementById('checkout_name').value;
        var city = document.getElementById('checkout_city').value;
        if (!name || !city) {
          document.getElementById('checkout_status').innerHTML = 'Заполните имя и город / отделение.';
          return false;
        }
        App.state.orders.unshift({ id: 'ord_' + Date.now(), productId: item.id, title: item.title, total: item.price, delivery: delivery, status: 'Новая безопасная сделка' });
        App.reward(25, 'Оформлена покупка');
        document.getElementById('checkout_status').innerHTML = 'Сделка оформлена. Доставка: ' + App.escape(delivery) + '.';
        App.save();
        setTimeout(function() { window.location.href = 'messages.xhtml'; }, 700);
        return false;
      };
    },
    filterProducts: function(search, category, delivery, city, min, max, safe) {
      return this.state.products.filter(function(item) {
        var hay = [item.title, item.description, item.category, item.city, item.tags.join(' ')].join(' ').toLowerCase();
        var okSearch = !search || hay.indexOf(search.toLowerCase()) !== -1;
        var okCategory = category === 'all' || item.category === category;
        var okDelivery = delivery === 'all' || item.delivery.join('|').indexOf(delivery) !== -1;
        var okCity = !city || item.city.toLowerCase().indexOf(city.toLowerCase()) !== -1;
        var okPrice = item.price >= (isNaN(min) ? 0 : min) && item.price <= (isNaN(max) ? 999999 : max);
        var okSafe = !safe || item.safeDeal;
        return okSearch && okCategory && okDelivery && okCity && okPrice && okSafe;
      });
    },
    ensureChatForSeller: function(userId, subject, quiet) {
      var existing = this.state.chats.filter(function(c) { return c.userId === userId; })[0];
      if (existing) { return existing.id; }
      var id = 'chat_' + Date.now();
      this.state.chats.unshift({ id: id, userId: userId, subject: subject, unread: 0, messages: [{ from: this.getUser(userId).nick, text: 'Здравствуйте! Чем могу помочь?', time: 'только что' }] });
      if (!quiet) { this.save(); }
      return id;
    },
    pushRecent: function(id) {
      this.state.recentViews = this.state.recentViews.filter(function(v) { return v !== id; });
      this.state.recentViews.unshift(id);
      this.state.recentViews = this.state.recentViews.slice(0, 5);
      this.save();
    },
    getRecentProducts: function() {
      var html = '';
      var i;
      for (i = 0; i < this.state.recentViews.length; i += 1) {
        var item = this.getProduct(this.state.recentViews[i]);
        if (item) {
          html += '<a class="list-item" href="product.xhtml?id=' + this.escapeAttr(item.id) + '"><b>' + this.escape(item.title) + '</b><br /><span class="small grey">' + this.money(item.price) + '</span></a>';
        }
      }
      return html;
    },
    countUnread: function() {
      var total = 0;
      this.state.chats.forEach(function(c) { total += c.unread; });
      return total;
    },
    reward: function(amount, reason) {
      this.state.bonus.coins += amount;
      this.state.visitHistory.unshift(reason + ': +' + amount + ' монет.');
      this.save();
    },
    markTask: function(id) {
      var task = this.state.bonus.tasks.filter(function(t) { return t.id === id; })[0];
      if (task && !task.done) {
        task.done = true;
        this.reward(task.reward, 'Выполнено задание «' + task.title + '»');
      }
    },
    toggleArrayItem: function(arr, value) {
      var idx = arr.indexOf(value);
      if (idx === -1) { arr.push(value); }
      else { arr.splice(idx, 1); }
    },
    getProduct: function(id) {
      return this.state.products.filter(function(p) { return p.id === id; })[0] || null;
    },
    getUser: function(id) {
      if (id === 'u_me') { return this.state.currentUser; }
      return this.state.users.filter(function(u) { return u.id === id; })[0] || this.state.currentUser;
    },
    getThread: function(id) {
      return this.state.forumThreads.filter(function(t) { return t.id === id; })[0] || this.state.forumThreads[0];
    },
    getChat: function(id) {
      return this.state.chats.filter(function(c) { return c.id === id; })[0] || null;
    },
    param: function(name) {
      var params = new URLSearchParams(window.location.search || '');
      return params.get(name);
    },
    money: function(value) {
      return new Intl.NumberFormat('ru-RU', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value) + ' грн';
    },
    escape: function(text) {
      return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    },
    escapeAttr: function(text) {
      return this.escape(text).replace(/\\/g, '&#92;');
    }
  };

  window.App = App;
  window.addEventListener('load', function() {
    App.init();
  }, false);
}());
