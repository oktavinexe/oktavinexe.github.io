/* Page-only translations for Oktavin Flow.
   This file is loaded after existing site.js, before DOMContentLoaded.
   The global site language switcher does all the language switching. */
const FLOW_COPY = {
  en: {
    flStatus:'COMING SOON · ANDROID',
    flHeroTitle:'Less chaos.<br><span class="flow-gradient">More room to breathe.</span>',
    flHeroDesc:'Your tasks, plans and everyday routines in one calm space. Organize what matters, find your rhythm and get on with living.',
    flHeroButton:'Follow the launch',flExploreButton:'Discover the features',flHeroFoot:'Built for real days, not perfect schedules.',
    flFloatOne:'Make space for what matters',flFloatTwo:'Little wins add up',flPreviewNote:'Illustrative concept — not an actual app screenshot',
    flMockGreeting:'GOOD MORNING',flMockToday:'My day ✦',flMockCaption:'One thing at a time.',
    flMockProgress:"Today's progress",flMockProgressText:"You're doing great. Keep your pace.",flMockTasks:"Today's priorities",flMockView:'Today',
    flTaskA:'Morning routine',flTaskATime:'08:00 · Personal',flTaskB:'Plan the week',flTaskBTime:'09:30 · Planning',flTaskC:'Go for a walk',flTaskCTime:'17:00 · Wellbeing',flTaskD:'Prepare for tomorrow',flTaskDTime:'20:30 · Personal',
    flScroll:'Explore the flow',flIntroTag:'YOUR DAYS, REIMAGINED',flIntroTitle:'Life gets busy.<br><span class="flow-gradient">Planning shouldn\'t.</span>',
    flIntroDesc:'You have enough to think about. Oktavin Flow is being built to make daily planning feel lighter — so your next step is always a little clearer.',
    flPillOne:'Simple by design',flPillTwo:'Your own rhythm',flPillThree:'Everyday friendly',
    flFeatureTag:'THOUGHTFUL BY DESIGN',flFeatureTitle:'The little things that<br><span class="flow-gradient">make a big difference.</span>',flFeatureDesc:'Practical tools for the moments that fill your day. Nothing to learn the hard way, nothing to overcomplicate.',
    flFeature01Label:'CLARITY',flFeature01Title:'Everything in its place',flFeature01Desc:"Bring tasks, checklists and everyday plans together, so the important stuff doesn't get lost in the noise.",
    flFeature02Label:'PERSPECTIVE',flFeature02Title:'See the bigger picture',flFeature02Desc:"Move from today's priorities to your broader plans without losing sight of what comes next.",
    flFeature03Label:'CONSISTENCY',flFeature03Title:'A little progress, daily',flFeature03Desc:'Stay on top of routines and recurring tasks — with a calmer way to keep moving forward.',
    flFeature04Label:'PEACE OF MIND',flFeature04Title:'Keep what matters in sight',flFeature04Desc:'Plan ahead, break bigger tasks into smaller steps and build a rhythm that feels manageable.',
    flTogetherTag:'LOOKING AHEAD · PLANNED FEATURE',flTogetherTitle:'Some plans are<br><span class="flow-gradient">better together.</span>',
    flTogetherDesc:"Shared groceries, household tasks, weekend plans or bigger goals. We're designing a collaborative space to make organizing life with others feel easier.",
    flTogetherPoint1:'Create and organize shared tasks',flTogetherPoint2:'Keep everyone on the same page',flTogetherPoint3:'Make room for more than one perspective',
    flTogetherNote:'In development. Availability and access details will be announced closer to launch.',
    flSharedTitle:'Our little plans',flSharedPerson1:'Alex',flSharedPerson2:'Mia',flSharedFooter:'Better as a team',
    flAudienceTag:'MADE FOR REAL LIFE',flAudienceTitle:'For the busy.<br>For the dreamers.<br><span class="flow-gradient">For your everyday.</span>',
    flAudienceDesc:"For anyone juggling work, studies, family, personal goals or simply the little things that add up. You don't need a perfect routine to start feeling more organized.",flAudienceLink:'Stay close to the launch',
    flFinalTag:'THE NEXT CHAPTER IS COMING',flFinalTitle:'A little more flow.<br><span class="flow-gradient">Every single day.</span>',
    flFinalDesc:"Oktavin Flow is taking shape. Follow development, get first looks and hear about the Android release when we're ready to share it.",
    flFinalButton:'Follow Oktavin Flow',flFinalNote:'Pre-release preview. Features and availability may change during development.'
  },
  ru: {
    flStatus:'СКОРО · ANDROID',
    flHeroTitle:'Меньше хаоса.<br><span class="flow-gradient">Больше спокойствия.</span>',
    flHeroDesc:'Задачи, планы и ежедневные дела — в одном уютном пространстве. Разберитесь с важным, найдите свой ритм и освободите время для жизни.',
    flHeroButton:'Следить за запуском',flExploreButton:'Узнать о возможностях',flHeroFoot:'Для настоящей жизни, а не идеального расписания.',
    flFloatOne:'Место для самого важного',flFloatTwo:'Большое начинается с малого',flPreviewNote:'Демонстрационный макет — не скриншот приложения',
    flMockGreeting:'ДОБРОЕ УТРО',flMockToday:'Мой день ✦',flMockCaption:'Всё по порядку.',
    flMockProgress:'Прогресс за сегодня',flMockProgressText:'Отличный темп. Продолжайте в своём ритме.',flMockTasks:'Важное на сегодня',flMockView:'Сегодня',
    flTaskA:'Утренние дела',flTaskATime:'08:00 · Личное',flTaskB:'План на неделю',flTaskBTime:'09:30 · Планы',flTaskC:'Прогулка',flTaskCTime:'17:00 · Для себя',flTaskD:'Подготовка к завтра',flTaskDTime:'20:30 · Личное',
    flScroll:'Знакомьтесь с Flow',flIntroTag:'ПО-НОВОМУ О ЗНАКОМЫХ ДЕЛАХ',flIntroTitle:'Дел всегда много.<br><span class="flow-gradient">Пусть планировать будет легко.</span>',
    flIntroDesc:'У вас и так достаточно забот. Мы создаём Oktavin Flow, чтобы планирование стало проще, а каждый следующий шаг — понятнее.',
    flPillOne:'Ничего лишнего',flPillTwo:'Ваш собственный ритм',flPillThree:'Для каждого дня',
    flFeatureTag:'ПРОДУМАНО ДЛЯ ПОВСЕДНЕВНОЙ ЖИЗНИ',flFeatureTitle:'Маленькие удобства.<br><span class="flow-gradient">Большая разница.</span>',flFeatureDesc:'Полезные инструменты для повседневных задач. Без сложного обучения и бесконечных настроек.',
    flFeature01Label:'ПОРЯДОК',flFeature01Title:'Всё на своих местах',flFeature01Desc:'Собирайте задачи, чеклисты и планы вместе, чтобы важное не терялось среди повседневных забот.',
    flFeature02Label:'ОБЗОР',flFeature02Title:'Видеть картину целиком',flFeature02Desc:'Переключайтесь между делами на сегодня и планами на будущее, сохраняя фокус на главном.',
    flFeature03Label:'ПРИВЫЧНЫЙ РИТМ',flFeature03Title:'Немного прогресса каждый день',flFeature03Desc:'Следите за регулярными делами и повторяющимися задачами без лишнего давления.',
    flFeature04Label:'СПОКОЙСТВИЕ',flFeature04Title:'Важное всегда перед глазами',flFeature04Desc:'Планируйте наперёд, делите большие задачи на небольшие шаги и двигайтесь в удобном темпе.',
    flTogetherTag:'В ПЛАНАХ · СОВМЕСТНАЯ ФУНКЦИЯ',flTogetherTitle:'Некоторые планы<br><span class="flow-gradient">лучше делать вместе.</span>',
    flTogetherDesc:'Покупки, домашние дела, планы на выходные или общие цели. Мы проектируем совместное пространство, в котором проще организовывать жизнь с близкими.',
    flTogetherPoint1:'Создавать общие задачи и списки',flTogetherPoint2:'Понимать, кто и за что отвечает',flTogetherPoint3:'Планировать сообща, а не по отдельности',
    flTogetherNote:'Функция в разработке. Доступность и условия расскажем ближе к запуску.',
    flSharedTitle:'Наши общие планы',flSharedPerson1:'Алекс',flSharedPerson2:'Мия',flSharedFooter:'Вместе удобнее',
    flAudienceTag:'ДЛЯ РЕАЛЬНОЙ ЖИЗНИ',flAudienceTitle:'Для занятых.<br>Для мечтателей.<br><span class="flow-gradient">Для каждого дня.</span>',
    flAudienceDesc:'Работа, учёба, семья, личные цели и тысяча мелочей. Необязательно жить по идеальному расписанию, чтобы чувствовать больше порядка.',flAudienceLink:'Не пропустите запуск',
    flFinalTag:'СКОРО НОВАЯ ГЛАВА',flFinalTitle:'Меньше суеты.<br><span class="flow-gradient">Больше Flow каждый день.</span>',
    flFinalDesc:'Oktavin Flow постепенно обретает форму. Следите за разработкой, первыми демонстрациями и новостями о запуске на Android.',
    flFinalButton:'Следить за Oktavin Flow',flFinalNote:'Предрелизная презентация. Возможности и сроки могут измениться в ходе разработки.'
  },
  uk: {
    flStatus:'НЕЗАБАРОМ · ANDROID',
    flHeroTitle:'Менше хаосу.<br><span class="flow-gradient">Більше спокою.</span>',
    flHeroDesc:'Завдання, плани та щоденні справи — в одному затишному просторі. Впорядкуйте важливе, знайдіть власний ритм і звільніть час для життя.',
    flHeroButton:'Стежити за запуском',flExploreButton:'Дізнатися про можливості',flHeroFoot:'Для справжніх днів, а не ідеального розкладу.',
    flFloatOne:'Місце для найважливішого',flFloatTwo:'Маленькі перемоги важливі',flPreviewNote:'Ілюстративний макет — не скриншот застосунку',
    flMockGreeting:'ДОБРОГО РАНКУ',flMockToday:'Мій день ✦',flMockCaption:'Крок за кроком.',
    flMockProgress:'Прогрес за сьогодні',flMockProgressText:'Чудовий темп. Рухайтеся у своєму ритмі.',flMockTasks:'Важливе на сьогодні',flMockView:'Сьогодні',
    flTaskA:'Ранкові справи',flTaskATime:'08:00 · Особисте',flTaskB:'План на тиждень',flTaskBTime:'09:30 · Планування',flTaskC:'Прогулянка',flTaskCTime:'17:00 · Для себе',flTaskD:'Підготовка до завтра',flTaskDTime:'20:30 · Особисте',
    flScroll:'Знайомтеся з Flow',flIntroTag:'ЗВИЧНІ СПРАВИ ПО-НОВОМУ',flIntroTitle:'Справ завжди багато.<br><span class="flow-gradient">Планувати може бути легко.</span>',
    flIntroDesc:'У вас і так достатньо турбот. Ми створюємо Oktavin Flow, щоб планування було простішим, а кожен наступний крок — зрозумілішим.',
    flPillOne:'Нічого зайвого',flPillTwo:'Власний ритм',flPillThree:'На кожен день',
    flFeatureTag:'ПРОДУМАНО ДЛЯ ЩОДЕННОГО ЖИТТЯ',flFeatureTitle:'Маленькі зручності.<br><span class="flow-gradient">Велика різниця.</span>',flFeatureDesc:'Корисні інструменти для щоденних справ. Без складного навчання та нескінченних налаштувань.',
    flFeature01Label:'ПОРЯДОК',flFeature01Title:'Усе на своїх місцях',flFeature01Desc:'Зберігайте завдання, чеклісти й плани разом, щоб важливе не губилося серед щоденних турбот.',
    flFeature02Label:'ОГЛЯД',flFeature02Title:'Бачити повну картину',flFeature02Desc:'Переходьте від сьогоднішніх пріоритетів до майбутніх планів, не втрачаючи фокусу.',
    flFeature03Label:'РИТМ',flFeature03Title:'Трохи прогресу щодня',flFeature03Desc:'Слідкуйте за регулярними справами й повторюваними завданнями без зайвого тиску.',
    flFeature04Label:'СПОКІЙ',flFeature04Title:'Важливе завжди перед очима',flFeature04Desc:'Плануйте заздалегідь, розбивайте великі справи на менші кроки та рухайтеся у зручному темпі.',
    flTogetherTag:'У ПЛАНАХ · СПІЛЬНА ФУНКЦІЯ',flTogetherTitle:'Деякі плани<br><span class="flow-gradient">краще втілювати разом.</span>',
    flTogetherDesc:'Покупки, домашні справи, плани на вихідні або спільні цілі. Ми розробляємо простір, де легше організовувати життя разом із близькими.',
    flTogetherPoint1:'Створювати спільні завдання й списки',flTogetherPoint2:'Розуміти, хто за що відповідає',flTogetherPoint3:'Планувати разом, а не окремо',
    flTogetherNote:'Функція в розробці. Про доступність та умови повідомимо ближче до запуску.',
    flSharedTitle:'Наші спільні плани',flSharedPerson1:'Алекс',flSharedPerson2:'Мія',flSharedFooter:'Разом зручніше',
    flAudienceTag:'ДЛЯ СПРАВЖНЬОГО ЖИТТЯ',flAudienceTitle:'Для зайнятих.<br>Для мрійників.<br><span class="flow-gradient">Для кожного дня.</span>',
    flAudienceDesc:'Робота, навчання, сім’я, особисті цілі й тисяча дрібниць. Не обов’язково жити за ідеальним розкладом, щоб відчувати більше порядку.',flAudienceLink:'Не пропустіть запуск',
    flFinalTag:'НЕЗАБАРОМ НОВИЙ ЕТАП',flFinalTitle:'Менше метушні.<br><span class="flow-gradient">Більше Flow щодня.</span>',
    flFinalDesc:'Oktavin Flow поступово набуває форми. Стежте за розробкою, першими демонстраціями та новинами про запуск на Android.',
    flFinalButton:'Стежити за Oktavin Flow',flFinalNote:'Передрелізна презентація. Можливості й терміни можуть змінюватися під час розробки.'
  },
  de: {
    flStatus:'BALD VERFÜGBAR · ANDROID',
    flHeroTitle:'Weniger Chaos.<br><span class="flow-gradient">Mehr Raum zum Durchatmen.</span>',
    flHeroDesc:'Aufgaben, Pläne und tägliche Routinen an einem ruhigen Ort. Behalte das Wichtige im Blick, finde deinen Rhythmus und genieße den Alltag.',
    flHeroButton:'Zum Release informiert bleiben',flExploreButton:'Funktionen entdecken',flHeroFoot:'Für echte Tage, nicht für perfekte Zeitpläne.',
    flFloatOne:'Platz für das Wesentliche',flFloatTwo:'Kleine Erfolge zählen',flPreviewNote:'Illustratives Konzept — kein echter App-Screenshot',
    flMockGreeting:'GUTEN MORGEN',flMockToday:'Mein Tag ✦',flMockCaption:'Eins nach dem anderen.',
    flMockProgress:'Fortschritt heute',flMockProgressText:'Du bist gut unterwegs. Bleib in deinem Rhythmus.',flMockTasks:'Heute wichtig',flMockView:'Heute',
    flTaskA:'Morgenroutine',flTaskATime:'08:00 · Privat',flTaskB:'Woche planen',flTaskBTime:'09:30 · Planung',flTaskC:'Spazieren gehen',flTaskCTime:'17:00 · Wohlbefinden',flTaskD:'Morgen vorbereiten',flTaskDTime:'20:30 · Privat',
    flScroll:'Flow entdecken',flIntroTag:'DEIN ALLTAG, NEU GEDACHT',flIntroTitle:'Der Alltag ist voll.<br><span class="flow-gradient">Planung darf leicht sein.</span>',
    flIntroDesc:'Du hast schon genug im Kopf. Wir entwickeln Oktavin Flow, damit sich Tagesplanung leichter anfühlt und der nächste Schritt klarer wird.',
    flPillOne:'Einfach gedacht',flPillTwo:'Dein eigener Rhythmus',flPillThree:'Für jeden Tag',
    flFeatureTag:'MIT BEDACHT ENTWICKELT',flFeatureTitle:'Kleine Helfer.<br><span class="flow-gradient">Großer Unterschied.</span>',flFeatureDesc:'Praktische Werkzeuge für den Alltag. Ohne komplizierte Einarbeitung und unnötigen Ballast.',
    flFeature01Label:'ÜBERSICHT',flFeature01Title:'Alles an seinem Platz',flFeature01Desc:'Aufgaben, Checklisten und Alltagspläne an einem Ort sammeln, damit Wichtiges nicht untergeht.',
    flFeature02Label:'WEITBLICK',flFeature02Title:'Das große Ganze sehen',flFeature02Desc:'Wechsle zwischen heutigen Prioritäten und kommenden Plänen, ohne den Überblick zu verlieren.',
    flFeature03Label:'ROUTINE',flFeature03Title:'Jeden Tag ein Stück weiter',flFeature03Desc:'Behalte wiederkehrende Aufgaben und Routinen im Blick — ohne zusätzlichen Druck.',
    flFeature04Label:'GELASSENHEIT',flFeature04Title:'Das Wichtige im Blick',flFeature04Desc:'Plane voraus, teile große Vorhaben in kleine Schritte und finde ein Tempo, das zu dir passt.',
    flTogetherTag:'AUSBLICK · GEPLANTE FUNKTION',flTogetherTitle:'Manche Pläne sind<br><span class="flow-gradient">gemeinsam schöner.</span>',
    flTogetherDesc:'Einkäufe, Haushalt, Wochenenden oder gemeinsame Ziele: Wir entwickeln einen Bereich, der die Organisation mit anderen einfacher macht.',
    flTogetherPoint1:'Gemeinsame Aufgaben und Listen erstellen',flTogetherPoint2:'Alle auf dem gleichen Stand halten',flTogetherPoint3:'Pläne gemeinsam gestalten',
    flTogetherNote:'Noch in Entwicklung. Verfügbarkeit und Zugangsbedingungen geben wir vor dem Start bekannt.',
    flSharedTitle:'Unsere kleinen Pläne',flSharedPerson1:'Alex',flSharedPerson2:'Mia',flSharedFooter:'Zusammen geht’s leichter',
    flAudienceTag:'FÜR DAS ECHTE LEBEN',flAudienceTitle:'Für Vielbeschäftigte.<br>Für Träumer.<br><span class="flow-gradient">Für deinen Alltag.</span>',
    flAudienceDesc:'Arbeit, Studium, Familie, persönliche Ziele und die vielen kleinen Dinge. Für mehr Ordnung brauchst du keinen perfekten Zeitplan.',flAudienceLink:'Beim Start dabei sein',
    flFinalTag:'DAS NÄCHSTE KAPITEL KOMMT',flFinalTitle:'Mehr Leichtigkeit.<br><span class="flow-gradient">Mehr Flow im Alltag.</span>',
    flFinalDesc:'Oktavin Flow nimmt Gestalt an. Begleite die Entwicklung, entdecke erste Einblicke und erfahre, wann die Android-Version startet.',
    flFinalButton:'Oktavin Flow verfolgen',flFinalNote:'Vorabvorschau. Funktionen und Verfügbarkeit können sich während der Entwicklung ändern.'
  }
};

// Extend rather than replace the site's existing 4-language dictionary.
if (typeof DICT !== 'undefined') {
  for (const lang of ['en','ru','uk','de']) Object.assign(DICT[lang], FLOW_COPY[lang]);
}

// The demo is an illustration, but its progress bar is interactive and honest.
document.addEventListener('DOMContentLoaded', () => {
  const boxes = Array.from(document.querySelectorAll('.flow-mock-list input[type="checkbox"]'));
  const fill = document.getElementById('flow-progress-fill');
  const count = document.getElementById('flow-progress-count');
  const update = () => {
    const completed = boxes.filter(el => el.checked).length;
    if (fill) fill.style.width = `${100 * completed / boxes.length}%`;
    if (count) count.textContent = `${completed}/${boxes.length}`;
  };
  boxes.forEach(box => box.addEventListener('change', update));
  if (boxes.length) update();
});
