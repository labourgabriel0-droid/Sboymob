(function () {
  var seed = {
    profile: {
      id: 'me',
      name: 'SVOY Explorer',
      nick: 'svoy_explorer',
      avatar: 'SE',
      city: 'Киев',
      phone: '+380 67 *** ** 45',
      telegram: '@svoy_voice',
      joined: 'март 2026',
      about: 'Покупаю выгодно, тестирую сервисы, собираю подборки и веду форум о мобильных товарах.',
      level: 9,
      reputation: 874,
      visits: 39,
      bonusBalance: 540,
      streak: 6,
      followers: 182,
      following: 64,
      verified: true,
      deliveryRating: 4.8,
      responseTime: '11 мин',
      completionRate: 98,
      safeDeals: 46,
      miniGameBest: 17,
      savedFilters: [
        { name: 'eSIM для поездок', query: 'esim', city: 'Онлайн', delivery: 'Nova Poshta' },
        { name: 'Аксессуары до 700', query: 'power', city: 'Любой', delivery: 'Ukrposhta' }
      ],
      skills: ['Торг', 'Срочный выкуп', 'Гайды', 'Форум-куратор'],
      badges: ['Проверенный профиль', 'Голосовой мастер', 'Коллекционер бонусов', 'Форумный эксперт']
    },
    deliveryMethods: [
      { id: 'nova', title: 'Nova Poshta', eta: '1-2 дня', fee: 'от 80 грн', icon: 'NP' },
      { id: 'ukr', title: 'Ukrposhta', eta: '3-5 дней', fee: 'от 45 грн', icon: 'UP' },
      { id: 'courier', title: 'Курьер по городу', eta: 'в день заказа', fee: 'от 120 грн', icon: 'CR' },
      { id: 'pickup', title: 'Самовывоз', eta: 'по договорённости', fee: '0 грн', icon: 'SV' }
    ],
    users: [
      {
        id: 'admin',
        name: 'Admin Market',
        nick: 'admin_market',
        avatar: 'AM',
        city: 'Киев',
        rating: 4.9,
        response: '7 мин',
        registered: 'янв 2024',
        sales: 842,
        followers: 3220,
        about: 'Официальная витрина по SIM и eSIM. Работаем каждый день, поддерживаем безопасную сделку и быструю выдачу.',
        verified: true,
        specialities: ['SIM', 'eSIM', 'Подключение'],
        reviews: [
          { author: 'Mila', text: 'Быстро отправили Nova Poshta, всё активировалось без проблем.', score: 5 },
          { author: 'Artem', text: 'Ответили в чате за пару минут и помогли выбрать тариф.', score: 5 }
        ]
      },
      {
        id: 'chargehub',
        name: 'ChargeHub',
        nick: 'charge_hub',
        avatar: 'CH',
        city: 'Харьков',
        rating: 4.8,
        response: '13 мин',
        registered: 'май 2025',
        sales: 419,
        followers: 893,
        about: 'Павербанки, кабели, тревел-наборы и аксессуары под поездки, блогинг и работу в дороге.',
        verified: true,
        specialities: ['Powerbank', 'USB-C', 'Travel'],
        reviews: [
          { author: 'Serg', text: 'Павербанк приехал за 2 дня, всё как в описании.', score: 5 }
        ]
      },
      {
        id: 'medialab',
        name: 'MediaLab',
        nick: 'medialab',
        avatar: 'ML',
        city: 'Онлайн',
        rating: 4.7,
        response: '18 мин',
        registered: 'авг 2025',
        sales: 215,
        followers: 522,
        about: 'Цифровые продукты, шаблоны, инструменты для создателей контента и авторов каналов.',
        verified: false,
        specialities: ['Шаблоны', 'Софт', 'Контент'],
        reviews: [
          { author: 'Vika', text: 'Очень полезные шаблоны, активировалось мгновенно.', score: 5 }
        ]
      }
    ],
    listings: [
      {
        id: 'sim_ultra',
        title: 'Тариф «Ультра-Драйв»',
        category: 'Связь',
        city: 'Киев',
        sellerId: 'admin',
        price: 85,
        oldPrice: 99,
        exchange: false,
        safeDeal: true,
        promoted: true,
        desc: 'Стартовая SIM-карта с 100 ГБ трафика, безлимитом на мессенджеры и подробной инструкцией по быстрой активации.',
        thumb: 'SIM',
        color: '#4f6f98',
        condition: 'Новое',
        views: 1431,
        favorites: 214,
        tags: ['SIM', 'Интернет', 'Безлимит', 'Стартовый пакет'],
        delivery: ['nova', 'ukr', 'courier', 'pickup'],
        features: ['100 ГБ интернета', 'Безлимит на мессенджеры', 'Проверка номера перед отправкой'],
        created: 'сегодня',
        negotiable: true,
        topSearch: true,
        comments: [
          { author: 'Roma', text: 'Есть ли самовывоз сегодня вечером?', time: '09:34' },
          { author: 'Admin Market', text: 'Да, после 18:00. Можно и Nova Poshta день в день.', time: '09:37' }
        ]
      },
      {
        id: 'travel_esim',
        title: 'Travel eSIM Week',
        category: 'Связь',
        city: 'Онлайн',
        sellerId: 'admin',
        price: 159,
        oldPrice: 189,
        exchange: false,
        safeDeal: true,
        promoted: true,
        desc: 'Цифровая eSIM для Европы на 7 дней. Подходит для поездок, командировок и отпусков. QR-код приходит в личные сообщения.',
        thumb: 'eSIM',
        color: '#0d9a86',
        condition: 'Цифровой товар',
        views: 2102,
        favorites: 377,
        tags: ['eSIM', 'Путешествия', 'Роуминг'],
        delivery: ['nova', 'ukr', 'pickup'],
        features: ['QR-код за 15 минут', 'Поддержка 24/7', 'Гайд по установке'],
        created: 'сегодня',
        negotiable: false,
        topSearch: true,
        comments: [
          { author: 'Lena', text: 'Работает в Польше и Чехии?', time: '08:11' }
        ]
      },
      {
        id: 'power_go',
        title: 'PowerGo 20 000 mAh',
        category: 'Аксессуары',
        city: 'Харьков',
        sellerId: 'chargehub',
        price: 640,
        oldPrice: 710,
        exchange: true,
        safeDeal: true,
        promoted: false,
        desc: 'Ёмкий павербанк с быстрой зарядкой, индикатором, кабелем USB-C и чехлом для дороги.',
        thumb: 'PWR',
        color: '#7357d8',
        condition: 'Новое',
        views: 804,
        favorites: 96,
        tags: ['Powerbank', 'USB-C', 'Дорога'],
        delivery: ['nova', 'ukr', 'courier'],
        features: ['PD 22.5W', '3 выхода', '12 месяцев гарантии'],
        created: 'вчера',
        negotiable: true,
        topSearch: false,
        comments: [
          { author: 'Ira', text: 'Можно ли обмен на 10 000 + доплата?', time: 'вчера' }
        ]
      },
      {
        id: 'voice_pack',
        title: 'Набор голосов для сторис',
        category: 'Цифровое',
        city: 'Онлайн',
        sellerId: 'medialab',
        price: 129,
        oldPrice: 0,
        exchange: false,
        safeDeal: false,
        promoted: false,
        desc: 'Пакет текстовых шаблонов и голосовых сценариев для озвучки карточек товара, обзоров и объявлений.',
        thumb: 'VOC',
        color: '#d78c15',
        condition: 'Цифровой товар',
        views: 512,
        favorites: 88,
        tags: ['Озвучка', 'Контент', 'SMM'],
        delivery: ['pickup'],
        features: ['45 голосовых сценариев', 'Шаблоны рекламных текстов', 'Быстрый старт за 10 минут'],
        created: '2 дня назад',
        negotiable: false,
        topSearch: false,
        comments: [
          { author: 'Dima', text: 'Подходит ли для коротких продающих видео?', time: '2 дня назад' }
        ]
      },
      {
        id: 'club_plus',
        title: 'Клуб покупателя Plus',
        category: 'Сообщество',
        city: 'Онлайн',
        sellerId: 'admin',
        price: 49,
        oldPrice: 69,
        exchange: false,
        safeDeal: false,
        promoted: true,
        desc: 'Подписка на приватный форум, ранний доступ к скидкам, бонусным заданиям и закрытым распродажам.',
        thumb: 'CLB',
        color: '#efb11f',
        condition: 'Подписка',
        views: 1310,
        favorites: 199,
        tags: ['Клуб', 'Бонусы', 'Форум'],
        delivery: ['pickup'],
        features: ['Закрытый форум', 'Бонусные квесты', 'Ранний доступ к скидкам'],
        created: 'сегодня',
        negotiable: false,
        topSearch: true,
        comments: [
          { author: 'Maks', text: 'Есть ли еженедельные распродажи?', time: 'сегодня' }
        ]
      }
    ],
    forumTopics: [
      {
        id: 'topic_1',
        title: 'Как безопасно покупать SIM и eSIM через маркет?',
        author: 'Admin Market',
        tag: 'Безопасная сделка',
        messages: 14,
        views: 382,
        created: 'сегодня',
        pinned: true,
        text: 'Собрал чек-лист: проверка продавца, рейтинг доставки, видео-подтверждение и нюансы работы с Nova Poshta/Ukrposhta.',
        replies: [
          { author: 'SVOY Explorer', text: 'Добавьте ещё пункт про активацию после получения.', time: '10:02' },
          { author: 'Admin Market', text: 'Хорошая идея, обновлю инструкцию вечером.', time: '10:11' }
        ]
      },
      {
        id: 'topic_2',
        title: 'Лучшие формулы текста для голосовой озвучки объявления',
        author: 'MediaLab',
        tag: 'Voice',
        messages: 9,
        views: 177,
        created: 'вчера',
        pinned: false,
        text: 'Делимся шаблонами текста, которые хорошо звучат в синтезе речи и повышают вовлечённость в карточках товара.',
        replies: [
          { author: 'Roma', text: 'Короткие фразы звучат заметно лучше длинных абзацев.', time: 'вчера' }
        ]
      },
      {
        id: 'topic_3',
        title: 'Какие мини-игры реально удерживают аудиторию маркетплейса?',
        author: 'SVOY Club',
        tag: 'Геймификация',
        messages: 12,
        views: 295,
        created: '2 дня назад',
        pinned: false,
        text: 'Обсуждаем ежедневные бонусы, квесты, простые браузерные игры и систему наград за визиты.',
        replies: [
          { author: 'Lina', text: 'Кликер с сундуком и ежедневным лимитом заходит лучше всего.', time: '2 дня назад' }
        ]
      }
    ],
    chats: [
      {
        id: 'chat_admin',
        title: 'Чат с Admin Market',
        participant: 'Admin Market',
        unread: 2,
        relatedListingId: 'sim_ultra',
        messages: [
          { author: 'Admin Market', role: 'seller', text: 'Здравствуйте! Могу оформить Nova Poshta или самовывоз сегодня.', time: '09:43' },
          { author: 'Вы', role: 'user', text: 'Интересует безопасная сделка и оплата после проверки.', time: '09:44' },
          { author: 'System', role: 'system', text: 'Продавец поддерживает безопасную сделку SVOY Protect.', time: '09:44' }
        ]
      },
      {
        id: 'chat_charge',
        title: 'Чат с ChargeHub',
        participant: 'ChargeHub',
        unread: 0,
        relatedListingId: 'power_go',
        messages: [
          { author: 'ChargeHub', role: 'seller', text: 'Есть скидка при покупке комплектом с eSIM.', time: 'вчера' }
        ]
      }
    ],
    voice: {
      lastText: 'Здравствуйте! Продаю Travel eSIM Week. Быстрая выдача, поддержка 24/7 и удобная доставка.',
      lastVoice: '',
      lastRate: 1,
      lastPitch: 1,
      history: [
        { title: 'Рекламный анонс eSIM', voice: 'Авто', time: 'сегодня 09:00', text: 'Travel eSIM Week для поездок по Европе.' },
        { title: 'Голос для форума', voice: 'Авто', time: 'вчера 18:21', text: 'Новый пост про безопасную сделку уже на форуме.' }
      ]
    },
    bonuses: {
      lastClaim: '',
      streak: 6,
      coins: 540,
      wheelSpins: 1,
      tasks: [
        { id: 'task_visit', title: 'Открыть сайт 7 дней подряд', reward: 35, done: 6, target: 7 },
        { id: 'task_chat', title: 'Ответить в 3 чатах продавцам', reward: 20, done: 2, target: 3 },
        { id: 'task_forum', title: 'Создать тему на форуме', reward: 25, done: 0, target: 1 },
        { id: 'task_voice', title: 'Сгенерировать 2 голосовые озвучки', reward: 15, done: 1, target: 2 }
      ],
      rewardsLog: [
        'Получено 10 монет за вход на сайт.',
        'Получено 15 монет за первую голосовую озвучку.',
        'Получено 20 монет за успешный торг.'
      ]
    },
    games: {
      tapScore: 0,
      tapBest: 17,
      guessSecret: 5,
      guessAttempts: [],
      cratesOpened: 0
    },
    favorites: ['travel_esim', 'club_plus'],
    compare: ['sim_ultra', 'travel_esim'],
    activity: [
      'Пользователь Admin Market поднял объявление «Travel eSIM Week» в топ поиска.',
      'На форуме открыта новая тема о безопасных сделках и доставке через Nova Poshta.',
      'В разделе Voice добавлен новый сценарий озвучки товара.',
      'SVOY Club запустил недельный бонусный квест для активных пользователей.'
    ],
    visitsLog: ['Сегодня вы уже заходили на сайт и получили 10 бонусов.']
  };

  var App = {
    state: null,
    init: function () {
      this.state = this.load();
      this.bumpVisitBonus();
      this.renderShell();
      this.route();
      this.bindGlobal();
    },
    load: function () {
      try {
        var raw = localStorage.getItem('svoyWapSiteState');
        if (raw) {
          return JSON.parse(raw);
        }
      } catch (e) {}
      return JSON.parse(JSON.stringify(seed));
    },
    save: function () {
      try {
        localStorage.setItem('svoyWapSiteState', JSON.stringify(this.state));
      } catch (e) {}
    },
    todayKey: function () {
      var d = new Date();
      return d.getUTCFullYear() + '-' + String(d.getUTCMonth() + 1).padStart(2, '0') + '-' + String(d.getUTCDate()).padStart(2, '0');
    },
    query: function (name) {
      return new URLSearchParams(window.location.search).get(name) || '';
    },
    money: function (n) {
      return Number(n).toFixed(2) + ' грн';
    },
    initials: function (name) {
      var parts = String(name).split(' ');
      if (parts.length === 1) { return parts[0].slice(0, 2).toUpperCase(); }
      return (parts[0][0] + parts[1][0]).toUpperCase();
    },
    esc: function (text) {
      return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    },
    findListing: function (id) {
      return this.state.listings.find(function (item) { return item.id === id; }) || null;
    },
    findUser: function (id) {
      if (id === 'me') { return this.state.profile; }
      return this.state.users.find(function (item) { return item.id === id; }) || null;
    },
    findTopic: function (id) {
      return this.state.forumTopics.find(function (item) { return item.id === id; }) || null;
    },
    findChat: function (id) {
      return this.state.chats.find(function (item) { return item.id === id; }) || null;
    },
    deliveryLabel: function (id) {
      var found = this.state.deliveryMethods.find(function (m) { return m.id === id; });
      return found ? found.title : id;
    },
    listingCard: function (item, compact) {
      var seller = this.findUser(item.sellerId);
      var fav = this.state.favorites.indexOf(item.id) !== -1 ? '★' : '☆';
      var cmp = this.state.compare.indexOf(item.id) !== -1 ? '⇄ в сравнении' : '⇄ сравнить';
      var tags = item.tags.slice(0, compact ? 2 : 4).map(function (tag) {
        return '<span class="chip">' + App.esc(tag) + '</span>';
      }).join('');
      return '' +
        '<div class="list-item">' +
          '<table class="row-table"><tr>' +
            '<td width="60"><div class="thumb" style="background:' + this.esc(item.color) + ';">' + this.esc(item.thumb) + '</div></td>' +
            '<td>' +
              '<div><a href="item.xhtml?id=' + this.esc(item.id) + '"><b>' + this.esc(item.title) + '</b></a> ' + (item.promoted ? '<span class="badge-gold">TOP</span>' : '') + ' ' + (item.safeDeal ? '<span class="badge-green">SAFE</span>' : '') + '</div>' +
              '<div class="price">' + this.money(item.price) + (item.oldPrice ? ' <span class="grey tiny"><s>' + this.money(item.oldPrice) + '</s></span>' : '') + '</div>' +
              '<div class="grey small">' + this.esc(item.city) + ' • ' + this.esc(item.condition) + ' • ' + this.esc(item.created) + '</div>' +
              '<div class="grey tiny">Продавец: <a href="profile.xhtml?user=' + this.esc(item.sellerId) + '">' + this.esc(seller ? seller.name : 'Неизвестно') + '</a> • ★ ' + this.esc(String(seller && seller.rating ? seller.rating : this.state.profile.deliveryRating)) + '</div>' +
              '<div class="chips">' + tags + '</div>' +
              '<div class="offer-actions"><a href="item.xhtml?id=' + this.esc(item.id) + '" class="btn-grey">Открыть</a><a href="#" class="btn-grey js-favorite" data-id="' + this.esc(item.id) + '">' + fav + ' избранное</a><a href="#" class="btn-grey js-compare" data-id="' + this.esc(item.id) + '">' + cmp + '</a></div>' +
            '</td>' +
          '</tr></table>' +
        '</div>';
    },
    renderShell: function () {
      var page = document.body.getAttribute('data-page') || 'home';
      var crumbs = {
        home: 'Главная',
        market: 'Главная &gt; Маркет',
        item: 'Главная &gt; Маркет &gt; Объявление',
        forum: 'Главная &gt; Форум',
        chats: 'Главная &gt; Сообщения',
        profile: 'Главная &gt; Профиль',
        voices: 'Главная &gt; Голосовой синтез',
        bonuses: 'Главная &gt; Бонусы',
        games: 'Главная &gt; Мини-игры',
        sell: 'Главная &gt; Подать объявление'
      };
      var title = document.getElementById('dynamic_crumbs');
      if (title) { title.innerHTML = crumbs[page] || 'Раздел'; }
      var unread = this.state.chats.reduce(function (sum, c) { return sum + c.unread; }, 0);
      var count = document.getElementById('global_unread');
      if (count) { count.innerHTML = String(unread); }
      var bonus = document.getElementById('global_bonus');
      if (bonus) { bonus.innerHTML = String(this.state.bonuses.coins); }
      var profileBadge = document.getElementById('global_rank');
      if (profileBadge) { profileBadge.innerHTML = 'Lvl ' + this.state.profile.level; }
    },
    route: function () {
      var page = document.body.getAttribute('data-page') || 'home';
      if (page === 'home') { this.renderHome(); }
      if (page === 'market') { this.renderMarket(); }
      if (page === 'item') { this.renderItem(); }
      if (page === 'forum') { this.renderForum(); }
      if (page === 'chats') { this.renderChats(); }
      if (page === 'profile') { this.renderProfile(); }
      if (page === 'voices') { this.renderVoices(); }
      if (page === 'bonuses') { this.renderBonuses(); }
      if (page === 'games') { this.renderGames(); }
      if (page === 'sell') { this.renderSell(); }
    },
    bindGlobal: function () {
      document.body.addEventListener('click', this.handleClicks.bind(this));
      document.body.addEventListener('submit', this.handleSubmit.bind(this));
    },
    handleClicks: function (e) {
      var favorite = e.target.closest('.js-favorite');
      var compare = e.target.closest('.js-compare');
      var claim = e.target.closest('.js-claim-bonus');
      var wheel = e.target.closest('.js-spin-wheel');
      var tap = e.target.closest('.js-tap-crate');
      var guess = e.target.closest('.js-guess-number');
      var synth = e.target.closest('.js-speak-text');
      var stopSynth = e.target.closest('.js-stop-text');
      var saveVoice = e.target.closest('.js-save-voice');
      var quickChat = e.target.closest('.js-open-chat');
      if (favorite) {
        e.preventDefault();
        this.toggleFavorite(favorite.getAttribute('data-id'));
      }
      if (compare) {
        e.preventDefault();
        this.toggleCompare(compare.getAttribute('data-id'));
      }
      if (claim) {
        e.preventDefault();
        this.claimDailyBonus();
      }
      if (wheel) {
        e.preventDefault();
        this.spinWheel();
      }
      if (tap) {
        e.preventDefault();
        this.tapCrate();
      }
      if (guess) {
        e.preventDefault();
        this.guessNumber();
      }
      if (synth) {
        e.preventDefault();
        this.speakText();
      }
      if (stopSynth) {
        e.preventDefault();
        if (window.speechSynthesis) { window.speechSynthesis.cancel(); }
      }
      if (saveVoice) {
        e.preventDefault();
        this.saveVoicePreset();
      }
      if (quickChat) {
        e.preventDefault();
        this.quickChat(quickChat.getAttribute('data-id'));
      }
    },
    handleSubmit: function (e) {
      if (e.target.matches('.js-market-filter')) {
        e.preventDefault();
        this.renderMarket();
      }
      if (e.target.matches('.js-send-chat')) {
        e.preventDefault();
        this.sendChatMessage();
      }
      if (e.target.matches('.js-forum-topic')) {
        e.preventDefault();
        this.createForumTopic();
      }
      if (e.target.matches('.js-forum-reply')) {
        e.preventDefault();
        this.addForumReply();
      }
      if (e.target.matches('.js-sell-form')) {
        e.preventDefault();
        this.createListing();
      }
      if (e.target.matches('.js-item-question')) {
        e.preventDefault();
        this.addItemQuestion();
      }
      if (e.target.matches('.js-saved-filter')) {
        e.preventDefault();
        this.saveFilterPreset();
      }
    },
    renderHome: function () {
      var root = document.getElementById('page_content');
      if (!root) { return; }
      var topListings = this.state.listings.slice(0, 3).map(function (item) {
        return App.listingCard(item, true);
      }).join('');
      var storyHtml = [
        ['TOP', 'Топ дня'],
        ['SAFE', 'Безопасно'],
        ['NP', 'Nova'],
        ['UP', 'Ukr'],
        ['VOX', 'Voice'],
        ['FUN', 'Игры']
      ].map(function (row) {
        return '<div class="story-item"><div class="story-badge">' + row[0] + '</div>' + row[1] + '</div>';
      }).join('');
      var activities = this.state.activity.map(function (line) {
        return '<div class="link">' + App.esc(line) + '</div>';
      }).join('');
      var deliveryCards = this.state.deliveryMethods.map(function (item) {
        return '<div class="delivery-card"><b>' + App.esc(item.title) + '</b><div class="grey tiny">Срок: ' + App.esc(item.eta) + '</div><div class="grey tiny">Стоимость: ' + App.esc(item.fee) + '</div></div>';
      }).join('');
      root.innerHTML = '' +
        '<div class="hero-box"><h1>SVOY-MOBILE WAP 2026</h1><div>Полноценный WAP-сайт: объявления в стиле OLX, форум, чаты, голоса, бонусы, мини-игры и подробные профили продавцов.</div><div style="margin-top:8px;"><a href="market.xhtml" class="btn">Открыть маркет</a> <a href="sell.xhtml" class="btn-green">Подать объявление</a></div></div>' +
        '<div class="story-strip">' + storyHtml + '</div>' +
        '<div class="panel"><table class="row-table table-metrics"><tr><td><strong>' + this.state.listings.length + '</strong><span class="tiny grey">объявлений</span></td><td><strong>' + this.state.forumTopics.length + '</strong><span class="tiny grey">тем форума</span></td><td><strong>' + this.state.chats.length + '</strong><span class="tiny grey">чатов</span></td><td><strong>' + this.state.bonuses.coins + '</strong><span class="tiny grey">бонусов</span></td></tr></table></div>' +
        '<div class="notice-blue"><b>Что нового:</b> добавлен голосовой синтез объявлений, доставка Nova Poshta/Ukrposhta, сравнение карточек и профиль продавца с отзывами.</div>' +
        '<div class="header grey">Быстрые входы</div>' +
        '<div class="tile-grid">' +
          '<div class="soft-box"><b>Маркет как OLX</b><div class="grey small">Фильтры, поднятие в топ, избранное, сравнение, безопасная сделка.</div><div style="margin-top:6px;"><a href="market.xhtml" class="btn-grey">Перейти</a></div></div>' +
          '<div class="soft-box"><b>Voice синтез</b><div class="grey small">Вставьте текст, выберите голос и озвучьте карточку товара.</div><div style="margin-top:6px;"><a href="voices.xhtml" class="btn-grey">Открыть</a></div></div>' +
          '<div class="soft-box"><b>Форум и клуб</b><div class="grey small">Темы, ответы, закрепы и приватные обсуждения продавцов и покупателей.</div><div style="margin-top:6px;"><a href="forum.xhtml" class="btn-grey">На форум</a></div></div>' +
          '<div class="soft-box"><b>Бонусы и игры</b><div class="grey small">Ежедневные монеты, колесо подарков, квесты и мини-игры.</div><div style="margin-top:6px;"><a href="bonuses.xhtml" class="btn-grey">Смотреть</a></div></div>' +
        '</div>' +
        '<div class="header grey">Топ-объявления</div>' + topListings +
        '<div class="header grey">Доставка и логистика</div><div class="panel delivery-list">' + deliveryCards + '</div>' +
        '<div class="header grey">Живая активность</div><div class="list">' + activities + '</div>' +
        '<div class="header grey">Стимулы вернуться</div><div class="panel"><div class="reward-item"><b>Серия входов:</b> ' + this.state.bonuses.streak + ' дней подряд.</div><div class="reward-item"><b>Следующий бонус:</b> завтра +20 монет и 1 бесплатное поднятие объявления.</div><div class="reward-item"><b>Квест недели:</b> создать тему на форуме, сделать озвучку и поучаствовать в торге.</div></div>';
    },
    renderMarket: function () {
      var root = document.getElementById('page_content');
      if (!root) { return; }
      var query = this.query('q') || '';
      var cat = this.query('cat') || 'all';
      var delivery = this.query('delivery') || 'all';
      var list = this.state.listings.filter(function (item) {
        var seller = App.findUser(item.sellerId);
        var blob = [item.title, item.desc, item.tags.join(' '), item.city, seller ? seller.name : ''].join(' ').toLowerCase();
        var okSearch = !query || blob.indexOf(query.toLowerCase()) !== -1;
        var okCat = cat === 'all' || item.category === cat;
        var okDelivery = delivery === 'all' || item.delivery.indexOf(delivery) !== -1;
        return okSearch && okCat && okDelivery;
      });
      list.sort(function (a, b) {
        return (b.promoted === true) - (a.promoted === true) || b.views - a.views;
      });
      var html = list.map(function (item) { return App.listingCard(item); }).join('');
      if (!html) { html = '<div class="link">Ничего не найдено. Попробуйте другой запрос или доставку.</div>'; }
      var compareRows = this.state.compare.map(function (id) {
        var item = App.findListing(id);
        if (!item) { return ''; }
        return '<div class="mini-line"><b>' + App.esc(item.title) + '</b><div class="grey tiny">' + App.money(item.price) + ' • ' + item.delivery.map(function (x) { return App.deliveryLabel(x); }).join(', ') + '</div></div>';
      }).join('');
      var savedFilters = this.state.profile.savedFilters.map(function (row) {
        return '<div class="saved-filter"><b>' + App.esc(row.name) + '</b><div class="grey tiny">' + App.esc(row.query) + ' • ' + App.esc(row.city) + ' • ' + App.esc(row.delivery) + '</div></div>';
      }).join('');
      root.innerHTML = '' +
        '<div class="search-tools"><form class="js-market-filter" action="market.xhtml" method="get"><label>Поиск по объявлениям<input type="search" name="q" value="' + this.esc(query) + '" placeholder="SIM, powerbank, voice..." /></label><div class="flex-row"><div class="flex-col"><label>Категория<select name="cat"><option value="all">Все</option><option value="Связь"' + (cat === 'Связь' ? ' selected="selected"' : '') + '>Связь</option><option value="Аксессуары"' + (cat === 'Аксессуары' ? ' selected="selected"' : '') + '>Аксессуары</option><option value="Цифровое"' + (cat === 'Цифровое' ? ' selected="selected"' : '') + '>Цифровое</option><option value="Сообщество"' + (cat === 'Сообщество' ? ' selected="selected"' : '') + '>Сообщество</option></select></label></div><div class="flex-col"><label>Доставка<select name="delivery"><option value="all">Любая</option><option value="nova"' + (delivery === 'nova' ? ' selected="selected"' : '') + '>Nova Poshta</option><option value="ukr"' + (delivery === 'ukr' ? ' selected="selected"' : '') + '>Ukrposhta</option><option value="courier"' + (delivery === 'courier' ? ' selected="selected"' : '') + '>Курьер</option><option value="pickup"' + (delivery === 'pickup' ? ' selected="selected"' : '') + '>Самовывоз</option></select></label></div></div><input type="submit" value="Фильтровать" class="btn" /></form><form class="js-saved-filter" action="#" method="post" style="margin-top:8px;"><label>Сохранить текущий фильтр<input type="text" id="saved_filter_name" placeholder="Например: SIM с Nova Poshta" /></label><input type="submit" value="Сохранить фильтр" class="btn-grey" /></form></div>' +
        '<div class="header grey">Инструменты OLX-стиля</div><div class="market-kpis"><div class="kpi-box"><strong>' + list.length + '</strong>найдено объявлений</div><div class="kpi-box"><strong>' + this.state.favorites.length + '</strong>в избранном</div><div class="kpi-box"><strong>' + this.state.compare.length + '</strong>в сравнении</div><div class="kpi-box"><strong>' + this.state.profile.savedFilters.length + '</strong>сохранённых фильтров</div></div>' +
        '<div class="header grey">Сохранённые фильтры</div><div class="panel">' + (savedFilters || '<div class="grey">Фильтры пока не сохранены.</div>') + '</div>' +
        '<div class="header grey">Сравнение товаров</div><div class="panel">' + (compareRows || '<div class="grey">Добавьте товары в сравнение прямо из списка.</div>') + '</div>' +
        '<div class="header grey">Лента объявлений</div><div class="list">' + html + '</div>';
    },
    renderItem: function () {
      var root = document.getElementById('page_content');
      if (!root) { return; }
      var id = this.query('id') || this.state.listings[0].id;
      var item = this.findListing(id);
      if (!item) {
        root.innerHTML = '<div class="panel">Объявление не найдено.</div>';
        return;
      }
      var seller = this.findUser(item.sellerId);
      var deliveryRows = item.delivery.map(function (mid) {
        var method = App.state.deliveryMethods.find(function (m) { return m.id === mid; });
        return '<div class="delivery-card"><b>' + App.esc(method.title) + '</b><div class="grey tiny">Срок: ' + App.esc(method.eta) + '</div><div class="grey tiny">Тариф: ' + App.esc(method.fee) + '</div></div>';
      }).join('');
      var comments = item.comments.map(function (row) {
        return '<div class="forum-post"><b>' + App.esc(row.author) + ':</b> ' + App.esc(row.text) + '<div class="grey tiny">' + App.esc(row.time) + '</div></div>';
      }).join('');
      var related = this.state.listings.filter(function (l) { return l.id !== item.id && l.category === item.category; }).slice(0, 3).map(function (row) { return App.listingCard(row, true); }).join('');
      root.innerHTML = '' +
        '<div class="panel"><table class="row-table"><tr><td width="64"><div class="thumb" style="background:' + this.esc(item.color) + '; width:58px; height:58px; line-height:58px;">' + this.esc(item.thumb) + '</div></td><td><h1 style="font-size:16px; color:#2d5a86;">' + this.esc(item.title) + '</h1><div class="price">' + this.money(item.price) + '</div><div class="grey small">' + this.esc(item.city) + ' • ' + this.esc(item.condition) + ' • просмотров: ' + this.esc(String(item.views)) + '</div><div class="chips"><span class="chip">избранное ' + this.esc(String(item.favorites)) + '</span><span class="chip">торг ' + (item.negotiable ? 'доступен' : 'нет') + '</span><span class="chip">обмен ' + (item.exchange ? 'возможен' : 'нет') + '</span></div></td></tr></table><div style="margin-top:8px;">' + this.esc(item.desc) + '</div><div class="offer-actions" style="margin-top:8px;"><a href="#" class="btn-grey js-favorite" data-id="' + this.esc(item.id) + '">★ В избранное</a><a href="#" class="btn-grey js-compare" data-id="' + this.esc(item.id) + '">⇄ Сравнить</a><a href="#" class="btn js-open-chat" data-id="' + this.esc(item.id) + '">Написать продавцу</a></div></div>' +
        '<div class="header grey">Характеристики</div><div class="panel meta-list">' + item.features.map(function (feature) { return '<div>• ' + App.esc(feature) + '</div>'; }).join('') + '</div>' +
        '<div class="header grey">Способы доставки</div><div class="panel">' + deliveryRows + '<div class="notice-green" style="margin:8px 0 0 0;"><b>SVOY Protect:</b> безопасная сделка ' + (item.safeDeal ? 'доступна' : 'для этого товара отключена') + '. После выдачи номера накладной деньги резервируются до подтверждения получения.</div></div>' +
        '<div class="header grey">Продавец</div><div class="panel"><table class="row-table"><tr><td width="64"><div class="avatar">' + this.esc(seller ? seller.avatar : 'SV') + '</div></td><td><div><a href="profile.xhtml?user=' + this.esc(item.sellerId) + '"><b>' + this.esc(seller ? seller.name : 'Профиль') + '</b></a> ' + (seller && seller.verified ? '<span class="badge-green">VERIFIED</span>' : '') + '</div><div class="grey small">' + this.esc(seller ? seller.city : '') + ' • рейтинг ' + this.esc(String(seller ? seller.rating : 0)) + '</div><div class="grey small">Ответ: ' + this.esc(seller ? seller.response : '') + ' • продаж: ' + this.esc(String(seller ? seller.sales : 0)) + '</div><div class="offer-actions"><a href="profile.xhtml?user=' + this.esc(item.sellerId) + '" class="btn-grey">Открыть профиль</a><a href="#" class="btn js-open-chat" data-id="' + this.esc(item.id) + '">Открыть чат</a></div></td></tr></table></div>' +
        '<div class="header grey">Вопросы по объявлению</div><div class="panel">' + comments + '<form class="js-item-question" action="#" method="post" style="margin-top:8px;"><label>Новый вопрос продавцу<textarea id="item_question_text" placeholder="Спросите про доставку, торг, комплектацию..."></textarea></label><input type="submit" value="Отправить вопрос" class="btn" /></form></div>' +
        '<div class="header grey">Похожие объявления</div><div class="list">' + (related || '<div class="link">Пока нет похожих объявлений.</div>') + '</div>';
    },
    renderForum: function () {
      var root = document.getElementById('page_content');
      if (!root) { return; }
      var topicId = this.query('topic') || '';
      var current = topicId ? this.findTopic(topicId) : this.state.forumTopics[0];
      var listHtml = this.state.forumTopics.map(function (topic) {
        return '<a class="link" href="forum.xhtml?topic=' + App.esc(topic.id) + '"><b>' + App.esc(topic.title) + '</b> ' + (topic.pinned ? '<span class="badge-gold">PIN</span>' : '') + '<div class="grey tiny">' + App.esc(topic.author) + ' • #' + App.esc(topic.tag) + ' • ответов: ' + App.esc(String(topic.messages)) + ' • просмотров: ' + App.esc(String(topic.views)) + '</div></a>';
      }).join('');
      var replies = current ? current.replies.map(function (reply) {
        return '<div class="forum-post"><b>' + App.esc(reply.author) + '</b><div>' + App.esc(reply.text) + '</div><div class="grey tiny">' + App.esc(reply.time) + '</div></div>';
      }).join('') : '';
      root.innerHTML = '' +
        '<div class="tabs"><span class="active">Темы</span><a href="forum.xhtml">Форум</a><a href="bonuses.xhtml">Клуб</a></div>' +
        '<div class="header grey">Создать тему</div><div class="panel"><form class="js-forum-topic" action="#" method="post"><label>Заголовок<input type="text" id="forum_title" placeholder="Например: Как лучше отправлять eSIM клиенту?" /></label><label>Тег<select id="forum_tag"><option>Безопасная сделка</option><option>Voice</option><option>Доставка</option><option>Геймификация</option><option>Продавцы</option></select></label><label>Текст<textarea id="forum_text" placeholder="Опишите вопрос или поделитесь опытом."></textarea></label><input type="submit" value="Создать тему" class="btn" /></form></div>' +
        '<div class="header grey">Список тем</div><div class="list">' + listHtml + '</div>' +
        (current ? '<div class="header grey">Открытая тема</div><div class="panel"><h2 style="font-size:15px; color:#2d5a86;">' + App.esc(current.title) + '</h2><div class="grey small">Автор: ' + App.esc(current.author) + ' • #' + App.esc(current.tag) + ' • ' + App.esc(current.created) + '</div><div style="margin-top:8px;">' + App.esc(current.text) + '</div>' + replies + '<form class="js-forum-reply" action="#" method="post" style="margin-top:8px;"><input type="hidden" id="forum_reply_topic" value="' + App.esc(current.id) + '" /><label>Ваш ответ<textarea id="forum_reply_text" placeholder="Напишите ответ по теме"></textarea></label><input type="submit" value="Ответить" class="btn-grey" /></form></div>' : '') ;
    },
    renderChats: function () {
      var root = document.getElementById('page_content');
      if (!root) { return; }
      var currentId = this.query('chat') || this.state.chats[0].id;
      var current = this.findChat(currentId);
      var listHtml = this.state.chats.map(function (chat) {
        return '<a class="link" href="chats.xhtml?chat=' + App.esc(chat.id) + '"><b>' + App.esc(chat.title) + '</b> ' + (chat.unread ? '<span class="badge-red">' + App.esc(String(chat.unread)) + '</span>' : '') + '<div class="grey tiny">Сообщений: ' + App.esc(String(chat.messages.length)) + '</div></a>';
      }).join('');
      var msgHtml = current ? current.messages.map(function (msg) {
        return '<div class="message-bubble ' + App.esc(msg.role) + '"><b>' + App.esc(msg.author) + ':</b> ' + App.esc(msg.text) + '<div class="grey tiny">' + App.esc(msg.time) + '</div></div>';
      }).join('') : '';
      root.innerHTML = '' +
        '<div class="header grey">Диалоги</div><div class="list">' + listHtml + '</div>' +
        (current ? '<div class="header grey">Окно чата</div><div class="panel"><b>' + App.esc(current.title) + '</b><div class="grey tiny">Связано с объявлением: <a href="item.xhtml?id=' + App.esc(current.relatedListingId) + '">' + App.esc((this.findListing(current.relatedListingId) || {}).title || 'объявление') + '</a></div>' + msgHtml + '<form class="js-send-chat" action="#" method="post" style="margin-top:8px;"><input type="hidden" id="chat_current_id" value="' + App.esc(current.id) + '" /><label>Новое сообщение<textarea id="chat_message_text" placeholder="Напишите продавцу или покупателю"></textarea></label><input type="submit" value="Отправить" class="btn" /></form></div>' : '<div class="panel">Чатов пока нет.</div>') +
        '<div class="header grey">Готовые быстрые действия</div><div class="panel"><div class="mini-line">Можно отправить номер накладной Nova Poshta, предложить торг, запросить фото или подтвердить безопасную сделку.</div><div class="mini-line">Для цифровых товаров можно сразу прислать QR-код eSIM или ссылку на доступ.</div></div>';
      if (current) { current.unread = 0; this.save(); this.renderShell(); }
    },
    renderProfile: function () {
      var root = document.getElementById('page_content');
      if (!root) { return; }
      var userId = this.query('user') || 'me';
      var user = this.findUser(userId);
      var isSelf = userId === 'me' || !this.query('user');
      if (!user) {
        root.innerHTML = '<div class="panel">Профиль не найден.</div>';
        return;
      }
      var listingHtml = this.state.listings.filter(function (item) {
        return item.sellerId === (isSelf ? 'me' : userId);
      }).map(function (item) {
        return App.listingCard(item, true);
      }).join('');
      var reviews = (user.reviews || []).map(function (review) {
        return '<div class="review-item"><b>' + App.esc(review.author) + '</b> • ★ ' + App.esc(String(review.score)) + '<div>' + App.esc(review.text) + '</div></div>';
      }).join('');
      var badges = (user.badges || user.specialities || []).map(function (label) { return '<span class="chip">' + App.esc(label) + '</span>'; }).join('');
      root.innerHTML = '' +
        '<div class="panel"><table class="row-table"><tr><td width="68"><div class="avatar">' + App.esc(user.avatar || this.state.profile.avatar) + '</div></td><td><h1 style="font-size:16px; color:#2d5a86;">' + App.esc(user.name) + '</h1><div class="grey small">@' + App.esc(user.nick || this.state.profile.nick) + ' • ' + App.esc(user.city || this.state.profile.city) + '</div><div class="grey small">На сайте с ' + App.esc(user.registered || user.joined || '2026') + '</div><div class="chips">' + badges + '</div></td></tr></table><div style="margin-top:8px;">' + App.esc(user.about || this.state.profile.about) + '</div></div>' +
        '<div class="panel"><table class="row-table table-metrics"><tr><td><strong>' + App.esc(String(user.rating || this.state.profile.deliveryRating)) + '</strong><span class="tiny grey">рейтинг</span></td><td><strong>' + App.esc(String(user.sales || this.state.profile.safeDeals)) + '</strong><span class="tiny grey">сделок</span></td><td><strong>' + App.esc(String(user.followers || this.state.profile.followers)) + '</strong><span class="tiny grey">подписчиков</span></td><td><strong>' + App.esc(user.response || this.state.profile.responseTime) + '</strong><span class="tiny grey">ответ</span></td></tr></table></div>' +
        (isSelf ? '<div class="header grey">Подробный профиль пользователя</div><div class="panel"><div class="mini-line"><b>Телефон:</b> ' + App.esc(this.state.profile.phone) + '</div><div class="mini-line"><b>Telegram:</b> ' + App.esc(this.state.profile.telegram) + '</div><div class="mini-line"><b>Бонусный баланс:</b> ' + App.esc(String(this.state.profile.bonusBalance)) + '</div><div class="mini-line"><b>Серия посещений:</b> ' + App.esc(String(this.state.profile.streak)) + ' дней</div><div class="mini-line"><b>Лучший мини-игровой результат:</b> ' + App.esc(String(this.state.profile.miniGameBest)) + '</div></div>' : '') +
        '<div class="header grey">Объявления пользователя</div><div class="list">' + (listingHtml || '<div class="link">У этого профиля пока нет активных объявлений.</div>') + '</div>' +
        '<div class="header grey">Отзывы</div><div class="panel">' + (reviews || '<div class="grey">Отзывов пока нет.</div>') + '</div>';
    },
    renderVoices: function () {
      var root = document.getElementById('page_content');
      if (!root) { return; }
      var history = this.state.voice.history.map(function (row) {
        return '<div class="voice-card"><b>' + App.esc(row.title) + '</b><div class="grey tiny">' + App.esc(row.voice) + ' • ' + App.esc(row.time) + '</div><div>' + App.esc(row.text) + '</div></div>';
      }).join('');
      root.innerHTML = '' +
        '<div class="notice-blue"><b>Voice Synthesis:</b> вставьте текст объявления или поста, выберите голос, скорость и тон. Если браузер поддерживает Web Speech API, сайт озвучит текст вслух.</div>' +
        '<div class="header grey">Генератор аудио из текста</div><div class="panel"><label>Текст для озвучки<textarea id="voice_text">' + this.esc(this.state.voice.lastText) + '</textarea></label><div class="flex-row"><div class="flex-col"><label>Голос<select id="voice_select"><option value="">Автовыбор голоса</option></select></label></div><div class="flex-col"><label>Скорость<select id="voice_rate"><option value="0.8">0.8</option><option value="1" selected="selected">1.0</option><option value="1.2">1.2</option><option value="1.4">1.4</option></select></label></div><div class="flex-col"><label>Тон<select id="voice_pitch"><option value="0.8">0.8</option><option value="1" selected="selected">1.0</option><option value="1.2">1.2</option><option value="1.4">1.4</option></select></label></div></div><div class="offer-actions"><a href="#" class="btn js-speak-text">Озвучить</a><a href="#" class="btn-grey js-stop-text">Стоп</a><a href="#" class="btn-green js-save-voice">Сохранить в историю</a></div><div class="voice-preview" id="voice_status">Статус: готово к озвучке.</div></div>' +
        '<div class="header grey">Готовые сценарии</div><div class="panel"><div class="mini-line"><b>Продажа товара:</b> "Здравствуйте! Предлагаю выгодный лот с быстрой доставкой и безопасной сделкой."</div><div class="mini-line"><b>Форум-анонс:</b> "Новая тема на форуме уже открыта, заходите и оставляйте мнение."</div><div class="mini-line"><b>Бонусная акция:</b> "Сегодня начисляем дополнительные монеты за вход и активность на сайте."</div></div>' +
        '<div class="header grey">История озвучек</div><div class="panel">' + history + '</div>';
      this.populateVoiceList();
      var rate = document.getElementById('voice_rate');
      var pitch = document.getElementById('voice_pitch');
      if (rate) { rate.value = String(this.state.voice.lastRate); }
      if (pitch) { pitch.value = String(this.state.voice.lastPitch); }
    },
    populateVoiceList: function () {
      var select = document.getElementById('voice_select');
      if (!select) { return; }
      if (!window.speechSynthesis || !window.speechSynthesis.getVoices) {
        select.innerHTML = '<option value="">Web Speech API недоступен</option>';
        return;
      }
      var voices = window.speechSynthesis.getVoices();
      if (!voices.length) {
        setTimeout(this.populateVoiceList.bind(this), 250);
        return;
      }
      select.innerHTML = '<option value="">Автовыбор голоса</option>' + voices.map(function (voice) {
        return '<option value="' + App.esc(voice.name) + '">' + App.esc(voice.name + ' (' + voice.lang + ')') + '</option>';
      }).join('');
      if (this.state.voice.lastVoice) { select.value = this.state.voice.lastVoice; }
    },
    renderBonuses: function () {
      var root = document.getElementById('page_content');
      if (!root) { return; }
      var tasks = this.state.bonuses.tasks.map(function (task) {
        var progress = Math.min(100, Math.round((task.done / task.target) * 100));
        return '<div class="quest-item"><b>' + App.esc(task.title) + '</b><div class="grey tiny">Награда: +' + App.esc(String(task.reward)) + ' монет</div><div class="progress"><span style="width:' + progress + '%"></span></div><div class="grey tiny">' + App.esc(String(task.done)) + ' / ' + App.esc(String(task.target)) + '</div></div>';
      }).join('');
      var log = this.state.bonuses.rewardsLog.map(function (row) {
        return '<div class="reward-item">' + App.esc(row) + '</div>';
      }).join('');
      root.innerHTML = '' +
        '<div class="panel"><table class="row-table table-metrics"><tr><td><strong>' + this.state.bonuses.coins + '</strong><span class="tiny grey">монет</span></td><td><strong>' + this.state.bonuses.streak + '</strong><span class="tiny grey">дней подряд</span></td><td><strong>' + this.state.bonuses.wheelSpins + '</strong><span class="tiny grey">вращений</span></td><td><strong>' + this.state.profile.visits + '</strong><span class="tiny grey">визитов</span></td></tr></table></div>' +
        '<div class="header grey">Ежедневные бонусы</div><div class="panel"><div class="mini-line"><b>Вход дня:</b> получите монеты за регулярный визит и удержание серии.</div><div class="mini-line"><b>Маркет-квест:</b> открывайте объявления, общайтесь в чатах и форуме.</div><div style="margin-top:8px;"><a href="#" class="btn js-claim-bonus">Забрать ежедневный бонус</a></div></div>' +
        '<div class="header grey">Колесо наград</div><div class="panel"><div class="mini-line">Раз в день можно крутить бонусное колесо и выиграть монеты, поднятие объявления или значок профиля.</div><div style="margin-top:8px;"><a href="#" class="btn-green js-spin-wheel">Крутить колесо</a></div><div class="voice-preview" id="wheel_status">Статус: готово.</div></div>' +
        '<div class="header grey">Задания</div><div class="panel">' + tasks + '</div>' +
        '<div class="header grey">История наград</div><div class="panel">' + log + '</div>';
    },
    renderGames: function () {
      var root = document.getElementById('page_content');
      if (!root) { return; }
      root.innerHTML = '' +
        '<div class="notice-yellow"><b>Мини-игры:</b> помогают удержанию аудитории. За лучшие результаты начисляются бонусы, а прогресс сохраняется локально.</div>' +
        '<div class="header grey">1. Tap the Crate</div><div class="panel"><div class="games-score" id="tap_score">' + this.state.games.tapScore + '</div><div class="grey small">Открыто ящиков: ' + this.state.games.cratesOpened + ' • лучший результат: ' + this.state.games.tapBest + '</div><div style="margin-top:8px;"><a href="#" class="btn js-tap-crate">Открыть бонусный ящик</a></div><div class="voice-preview" id="tap_status">Нажимайте и собирайте монеты.</div></div>' +
        '<div class="header grey">2. Угадай число</div><div class="panel"><div class="mini-line">Система загадала число от 1 до 9. Угадайте и получите дополнительные монеты.</div><label>Ваш вариант<input type="text" id="guess_input" placeholder="Введите число от 1 до 9" /></label><a href="#" class="btn-grey js-guess-number">Проверить</a><div class="voice-preview" id="guess_status">Попыток: ' + this.state.games.guessAttempts.length + '</div></div>' +
        '<div class="header grey">Зачем это сайту</div><div class="panel"><div class="mini-line">Игры стимулируют возвращаемость, удержание и участие в бонусной экономике.</div><div class="mini-line">Лучшие результаты можно позже показывать в профиле, рейтингах и клубных ивентах.</div></div>';
    },
    renderSell: function () {
      var root = document.getElementById('page_content');
      if (!root) { return; }
      root.innerHTML = '' +
        '<div class="notice-green"><b>Подать объявление:</b> как в OLX, но с WAP-оформлением, клубными бонусами, чатом, форумным промо и синтезом речи для рекламного текста.</div>' +
        '<div class="header grey">Новое объявление</div><div class="panel"><form class="js-sell-form" action="#" method="post"><label>Название<input type="text" id="sell_title" placeholder="Например: eSIM Weekend" /></label><div class="flex-row"><div class="flex-col"><label>Цена<input type="text" id="sell_price" placeholder="159" /></label></div><div class="flex-col"><label>Категория<select id="sell_category"><option>Связь</option><option>Аксессуары</option><option>Цифровое</option><option>Сообщество</option></select></label></div></div><label>Город<input type="text" id="sell_city" placeholder="Киев" /></label><label>Описание<textarea id="sell_desc" placeholder="Подробно опишите предложение, состояние, условия доставки и торга."></textarea></label><label>Теги через запятую<input type="text" id="sell_tags" placeholder="eSIM, поездки, скидка" /></label><label>Доставка<select id="sell_delivery"><option value="nova,ukr">Nova Poshta + Ukrposhta</option><option value="nova,courier">Nova Poshta + курьер</option><option value="ukr,pickup">Ukrposhta + самовывоз</option><option value="pickup">Только самовывоз</option></select></label><label><input type="checkbox" id="sell_safe" checked="checked" /> Подключить безопасную сделку</label><label><input type="checkbox" id="sell_promote" /> Сразу поднять в топ за бонусы</label><input type="submit" value="Опубликовать объявление" class="btn-green" /></form></div>' +
        '<div class="header grey">После публикации система сделает</div><div class="panel"><div class="mini-line">1. Добавит объявление в маркет и в профиль продавца.</div><div class="mini-line">2. Откроет рекламный сценарий для голосовой озвучки.</div><div class="mini-line">3. Начислит бонусы за активность и предложит открыть форумную тему.</div></div>';
    },
    toggleFavorite: function (id) {
      var idx = this.state.favorites.indexOf(id);
      if (idx === -1) {
        this.state.favorites.push(id);
        this.state.bonuses.coins += 2;
        this.state.bonuses.rewardsLog.unshift('Получено 2 монеты за добавление товара в избранное.');
      } else {
        this.state.favorites.splice(idx, 1);
      }
      this.save();
      this.route();
      this.renderShell();
    },
    toggleCompare: function (id) {
      var idx = this.state.compare.indexOf(id);
      if (idx === -1) {
        if (this.state.compare.length >= 4) { this.state.compare.shift(); }
        this.state.compare.push(id);
      } else {
        this.state.compare.splice(idx, 1);
      }
      this.save();
      this.route();
    },
    addItemQuestion: function () {
      var text = document.getElementById('item_question_text');
      var id = this.query('id') || this.state.listings[0].id;
      var item = this.findListing(id);
      if (!text || !text.value.trim() || !item) { return; }
      item.comments.push({ author: this.state.profile.name, text: text.value.trim(), time: 'только что' });
      this.state.bonuses.tasks.forEach(function (task) {
        if (task.id === 'task_chat' && task.done < task.target) { task.done += 1; }
      });
      this.save();
      this.renderItem();
    },
    quickChat: function (listingId) {
      var existing = this.state.chats.find(function (chat) { return chat.relatedListingId === listingId; });
      var item = this.findListing(listingId);
      var seller = item ? this.findUser(item.sellerId) : null;
      if (!existing && item && seller) {
        this.state.chats.unshift({
          id: 'chat_' + Date.now(),
          title: 'Чат с ' + seller.name,
          participant: seller.name,
          unread: 0,
          relatedListingId: item.id,
          messages: [
            { author: 'System', role: 'system', text: 'Чат открыт по объявлению «' + item.title + '».', time: 'только что' }
          ]
        });
        this.save();
        window.location.href = 'chats.xhtml?chat=' + this.state.chats[0].id;
        return;
      }
      if (existing) {
        window.location.href = 'chats.xhtml?chat=' + existing.id;
      }
    },
    sendChatMessage: function () {
      var id = document.getElementById('chat_current_id');
      var text = document.getElementById('chat_message_text');
      var chat = id ? this.findChat(id.value) : null;
      if (!chat || !text || !text.value.trim()) { return; }
      chat.messages.push({ author: 'Вы', role: 'user', text: text.value.trim(), time: 'только что' });
      chat.messages.push({ author: chat.participant, role: 'seller', text: 'Спасибо, сообщение получено. Отвечу подробнее чуть позже.', time: 'только что' });
      text.value = '';
      this.state.bonuses.tasks.forEach(function (task) {
        if (task.id === 'task_chat' && task.done < task.target) { task.done += 1; }
      });
      this.state.bonuses.coins += 3;
      this.state.bonuses.rewardsLog.unshift('Получено 3 монеты за активность в чате.');
      this.save();
      this.renderChats();
    },
    createForumTopic: function () {
      var title = document.getElementById('forum_title');
      var tag = document.getElementById('forum_tag');
      var text = document.getElementById('forum_text');
      if (!title.value.trim() || !text.value.trim()) { return; }
      var topic = {
        id: 'topic_' + Date.now(),
        title: title.value.trim(),
        author: this.state.profile.name,
        tag: tag.value,
        messages: 1,
        views: 1,
        created: 'только что',
        pinned: false,
        text: text.value.trim(),
        replies: []
      };
      this.state.forumTopics.unshift(topic);
      this.state.bonuses.tasks.forEach(function (task) {
        if (task.id === 'task_forum' && task.done < task.target) { task.done = task.target; }
      });
      this.state.bonuses.coins += 25;
      this.state.bonuses.rewardsLog.unshift('Получено 25 монет за новую тему на форуме.');
      this.save();
      window.location.href = 'forum.xhtml?topic=' + topic.id;
    },
    addForumReply: function () {
      var topicId = document.getElementById('forum_reply_topic');
      var text = document.getElementById('forum_reply_text');
      var topic = topicId ? this.findTopic(topicId.value) : null;
      if (!topic || !text.value.trim()) { return; }
      topic.replies.push({ author: this.state.profile.name, text: text.value.trim(), time: 'только что' });
      topic.messages += 1;
      this.state.bonuses.coins += 4;
      this.state.bonuses.rewardsLog.unshift('Получено 4 монеты за ответ на форуме.');
      this.save();
      this.renderForum();
    },
    saveFilterPreset: function () {
      var input = document.getElementById('saved_filter_name');
      if (!input || !input.value.trim()) { return; }
      var params = new URLSearchParams(window.location.search);
      this.state.profile.savedFilters.unshift({
        name: input.value.trim(),
        query: params.get('q') || '',
        city: 'Любой',
        delivery: this.deliveryLabel(params.get('delivery') || 'all')
      });
      this.state.bonuses.coins += 5;
      this.state.bonuses.rewardsLog.unshift('Получено 5 монет за сохранение фильтра поиска.');
      this.save();
      this.renderMarket();
    },
    createListing: function () {
      var title = document.getElementById('sell_title').value.trim();
      var price = parseFloat(document.getElementById('sell_price').value || '0');
      var cat = document.getElementById('sell_category').value;
      var city = document.getElementById('sell_city').value.trim() || 'Киев';
      var desc = document.getElementById('sell_desc').value.trim();
      var tags = document.getElementById('sell_tags').value.split(',').map(function (t) { return t.trim(); }).filter(Boolean);
      var delivery = document.getElementById('sell_delivery').value.split(',');
      var safe = document.getElementById('sell_safe').checked;
      var promote = document.getElementById('sell_promote').checked;
      if (!title || !desc || isNaN(price)) { return; }
      var item = {
        id: 'listing_' + Date.now(),
        title: title,
        category: cat,
        city: city,
        sellerId: 'me',
        price: price,
        oldPrice: 0,
        exchange: false,
        safeDeal: safe,
        promoted: promote,
        desc: desc,
        thumb: title.slice(0, 3).toUpperCase(),
        color: '#55739a',
        condition: 'Новое объявление',
        views: 0,
        favorites: 0,
        tags: tags.length ? tags : ['Новинка'],
        delivery: delivery,
        features: ['Новое предложение', 'Локальная публикация', 'Поддержка чатов'],
        created: 'только что',
        negotiable: true,
        topSearch: !!promote,
        comments: []
      };
      this.state.listings.unshift(item);
      this.state.profile.bonusBalance += 15;
      this.state.bonuses.coins += promote ? 10 : 15;
      this.state.bonuses.rewardsLog.unshift('Получено ' + (promote ? '10' : '15') + ' монет за новое объявление.');
      this.save();
      window.location.href = 'item.xhtml?id=' + item.id;
    },
    claimDailyBonus: function () {
      var today = this.todayKey();
      var status = document.getElementById('wheel_status') || document.getElementById('voice_status');
      if (this.state.bonuses.lastClaim === today) {
        alert('Ежедневный бонус уже получен сегодня.');
        return;
      }
      var reward = 10 + this.state.bonuses.streak * 2;
      this.state.bonuses.coins += reward;
      this.state.bonuses.lastClaim = today;
      this.state.bonuses.streak += 1;
      this.state.bonuses.rewardsLog.unshift('Получено ' + reward + ' монет за ежедневный вход.');
      this.save();
      this.renderBonuses();
      this.renderShell();
      if (status) { status.innerHTML = 'Получено ' + reward + ' монет.'; }
    },
    spinWheel: function () {
      if (this.state.bonuses.wheelSpins <= 0) {
        document.getElementById('wheel_status').innerHTML = 'На сегодня вращения закончились.';
        return;
      }
      var prizes = [12, 18, 25, 30, 40];
      var win = prizes[Math.floor(Math.random() * prizes.length)];
      this.state.bonuses.coins += win;
      this.state.bonuses.wheelSpins -= 1;
      this.state.bonuses.rewardsLog.unshift('Колесо наград: +' + win + ' монет.');
      this.save();
      document.getElementById('wheel_status').innerHTML = 'Выпало: +' + win + ' монет.';
      this.renderShell();
    },
    tapCrate: function () {
      this.state.games.tapScore += 1;
      this.state.games.cratesOpened += 1;
      if (this.state.games.tapScore > this.state.games.tapBest) {
        this.state.games.tapBest = this.state.games.tapScore;
        this.state.profile.miniGameBest = this.state.games.tapBest;
      }
      this.state.bonuses.coins += 1;
      this.save();
      document.getElementById('tap_score').innerHTML = String(this.state.games.tapScore);
      document.getElementById('tap_status').innerHTML = 'Открыт ящик #' + this.state.games.cratesOpened + '. Получена 1 монета.';
    },
    guessNumber: function () {
      var input = document.getElementById('guess_input');
      var val = parseInt(input.value, 10);
      if (!val || val < 1 || val > 9) { return; }
      this.state.games.guessAttempts.push(val);
      if (val === this.state.games.guessSecret) {
        this.state.bonuses.coins += 9;
        document.getElementById('guess_status').innerHTML = 'Верно! Загаданное число: ' + val + '. +9 монет.';
        this.state.games.guessSecret = 1 + Math.floor(Math.random() * 9);
        this.state.games.guessAttempts = [];
      } else {
        document.getElementById('guess_status').innerHTML = 'Не угадали. Попытки: ' + this.state.games.guessAttempts.join(', ') + '.';
      }
      input.value = '';
      this.save();
      this.renderShell();
    },
    bumpVisitBonus: function () {
      var today = this.todayKey();
      if (this.state.visitsLog[0] && this.state.visitsLog[0].indexOf(today) !== -1) { return; }
      this.state.profile.visits += 1;
      this.state.bonuses.coins += 10;
      this.state.visitsLog.unshift(today + ': ежедневный вход, +10 монет.');
      this.state.bonuses.rewardsLog.unshift('Получено 10 монет за посещение сайта.');
      this.save();
    },
    speakText: function () {
      var textarea = document.getElementById('voice_text');
      var voiceName = document.getElementById('voice_select');
      var rate = document.getElementById('voice_rate');
      var pitch = document.getElementById('voice_pitch');
      var status = document.getElementById('voice_status');
      if (!textarea || !textarea.value.trim()) {
        if (status) { status.innerHTML = 'Введите текст для озвучки.'; }
        return;
      }
      this.state.voice.lastText = textarea.value.trim();
      this.state.voice.lastVoice = voiceName ? voiceName.value : '';
      this.state.voice.lastRate = rate ? parseFloat(rate.value) : 1;
      this.state.voice.lastPitch = pitch ? parseFloat(pitch.value) : 1;
      this.state.bonuses.tasks.forEach(function (task) {
        if (task.id === 'task_voice' && task.done < task.target) { task.done += 1; }
      });
      this.save();
      if (!window.speechSynthesis || typeof window.SpeechSynthesisUtterance === 'undefined') {
        if (status) { status.innerHTML = 'Браузер не поддерживает Web Speech API, но текст и настройки сохранены.'; }
        return;
      }
      window.speechSynthesis.cancel();
      var utter = new SpeechSynthesisUtterance(textarea.value.trim());
      var voices = window.speechSynthesis.getVoices();
      if (voiceName && voiceName.value) {
        var chosen = voices.find(function (v) { return v.name === voiceName.value; });
        if (chosen) { utter.voice = chosen; }
      }
      utter.rate = this.state.voice.lastRate;
      utter.pitch = this.state.voice.lastPitch;
      utter.onstart = function () {
        if (status) { status.innerHTML = 'Озвучка началась.'; }
      };
      utter.onend = function () {
        if (status) { status.innerHTML = 'Озвучка завершена.'; }
      };
      window.speechSynthesis.speak(utter);
    },
    saveVoicePreset: function () {
      var textarea = document.getElementById('voice_text');
      var voiceName = document.getElementById('voice_select');
      if (!textarea || !textarea.value.trim()) { return; }
      this.state.voice.history.unshift({
        title: textarea.value.trim().slice(0, 28) + (textarea.value.trim().length > 28 ? '...' : ''),
        voice: voiceName && voiceName.value ? voiceName.value : 'Авто',
        time: 'только что',
        text: textarea.value.trim()
      });
      this.state.bonuses.coins += 7;
      this.state.bonuses.rewardsLog.unshift('Получено 7 монет за сохранение голосовой озвучки.');
      this.save();
      this.renderVoices();
      this.renderShell();
    }
  };

  window.App = App;
  document.addEventListener('DOMContentLoaded', function () { App.init(); });
  if (window.speechSynthesis && window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = function () {
      if (window.App) { window.App.populateVoiceList(); }
    };
  }
}());
