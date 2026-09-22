/* =====================================================================
   1) COORDONNÉES — remplacez ces valeurs par les vôtres
   ===================================================================== */
const CONTACT = {
  phoneDisplay: '+972 5X-XXX-XXXX',   // numéro affiché sur le site
  phoneLink: '+972500000000',         // même numéro, sans espaces (pour l'appel)
  email: 'contact@votre-domaine.com',
  whatsapp: '972500000000'            // format international sans + ni espaces
};

/* Afficher ou non la bulle WhatsApp flottante */
const SHOW_WA_FLOAT = true;

/* =====================================================================
   2) BIENS À LA UNE — exemples fictifs à remplacer
   type: 'sale' (vente) ou 'rent' (location, prix mensuel)
   Photo attendue : images/biens/<id>.jpg
   ===================================================================== */
const PROPERTIES = [
  { id: 1, type: 'sale', price: 4850000, rooms: 4, area: 110,
    hood:  { fr: 'Rehavia', en: 'Rehavia', he: 'רחביה' },
    title: { fr: 'Appartement lumineux avec balcon', en: 'Bright apartment with balcony', he: 'דירה מוארת עם מרפסת' },
    desc:  { fr: 'Troisième étage avec ascenseur, vue dégagée, rue calme à deux pas du centre.', en: 'Third floor with lift, open view, quiet street close to the centre.', he: 'קומה שלישית עם מעלית, נוף פתוח, רחוב שקט קרוב למרכז.' } },
  { id: 2, type: 'sale', price: 6200000, rooms: 5, area: 145,
    hood:  { fr: 'Moshava Germanit', en: 'German Colony', he: 'המושבה הגרמנית' },
    title: { fr: 'Appartement de caractère avec jardin', en: 'Character apartment with garden', he: 'דירת גן בבניין לשימור' },
    desc:  { fr: 'Plafonds hauts, pierre de Jérusalem, jardin privatif de 60 m².', en: 'High ceilings, Jerusalem stone, 60 m² private garden.', he: 'תקרות גבוהות, אבן ירושלמית, גינה פרטית של 60 מ״ר.' } },
  { id: 3, type: 'rent', price: 9500, rooms: 3, area: 80,
    hood:  { fr: 'Baka', en: 'Baka', he: 'בקעה' },
    title: { fr: 'Trois-pièces rénové', en: 'Renovated three-room flat', he: 'דירת 3 חדרים משופצת' },
    desc:  { fr: 'Entièrement rénové, cuisine équipée, proche de la rue Beit Lehem.', en: 'Fully renovated, fitted kitchen, near Beit Lechem Road.', he: 'משופצת מהיסוד, מטבח מאובזר, סמוך לרחוב בית לחם.' } },
  { id: 4, type: 'sale', price: 8900000, rooms: 6, area: 190,
    hood:  { fr: 'Talbieh', en: 'Talbiyeh', he: 'טלביה' },
    title: { fr: 'Duplex avec terrasse panoramique', en: 'Duplex with panoramic terrace', he: 'דופלקס עם מרפסת גג פנורמית' },
    desc:  { fr: 'Vue sur la Vieille Ville, parking, deux terrasses.', en: 'Old City views, parking, two terraces.', he: 'נוף לעיר העתיקה, חניה, שתי מרפסות.' } },
  { id: 5, type: 'rent', price: 6800, rooms: 2.5, area: 60,
    hood:  { fr: 'Nahlaot', en: 'Nachlaot', he: 'נחלאות' },
    title: { fr: 'Appartement de charme au cœur de Nahlaot', en: 'Charming flat in the heart of Nachlaot', he: 'דירה ציורית בלב נחלאות' },
    desc:  { fr: 'À quelques minutes du marché Mahané Yehouda, cour intérieure.', en: 'Minutes from Mahane Yehuda market, inner courtyard.', he: 'דקות ספורות משוק מחנה יהודה, חצר פנימית.' } },
  { id: 6, type: 'sale', price: 3650000, rooms: 4, area: 100,
    hood:  { fr: 'Arnona', en: 'Arnona', he: 'ארנונה' },
    title: { fr: 'Quatre-pièces familial', en: 'Family four-room apartment', he: 'דירת 4 חדרים למשפחה' },
    desc:  { fr: 'Immeuble récent, mamad, parking et cave.', en: 'Recent building, safe room, parking and storage.', he: 'בניין חדש יחסית, ממ״ד, חניה ומחסן.' } }
];

/* =====================================================================
   3) TEXTES DU SITE — une rubrique par langue (fr / en / he)
   ===================================================================== */
const T = {
  fr: {
    brand: 'Yalouche Immobilier', arrow: '→',
    nav: { about: 'À propos', properties: 'Biens à la une', why: 'Pourquoi moi', contact: 'Contact' },
    hero: {
      eyebrow: 'Courtage immobilier à Jérusalem',
      title: 'Votre prochain bien à Jérusalem, avec un accompagnement sur mesure',
      subtitle: 'Achat, vente et location à Jérusalem : une connaissance fine des quartiers, une écoute attentive de vos besoins et une transparence totale à chaque étape.',
      ctaPrimary: 'Prendre contact', ctaSecondary: 'Voir les biens'
    },
    about: {
      eyebrow: 'À propos',
      title: 'Une approche attentive, entièrement consacrée à Jérusalem',
      p1: "Je m'appelle [Votre nom] et j'accompagne les particuliers dans leurs projets immobiliers à Jérusalem : achat, vente ou location. Ma démarche repose sur l'écoute, la rigueur et une connaissance concrète de chaque quartier, de Rehavia à Baka, de la Moshava Germanit à Arnona.",
      p2: "Travailler sur une seule ville me permet de suivre le marché au plus près, de connaître les prix réels et de vous conseiller avec précision, que vous viviez en Israël ou à l'étranger.",
      statusLabel: 'Parcours professionnel',
      status: "Actuellement en formation avancée en vue de l'obtention de la licence de courtier immobilier israélienne (רישיון תיווך). Chaque accompagnement est mené avec le sérieux et l'exigence qu'impose la profession."
    },
    props: {
      eyebrow: 'Sélection', title: 'Biens à la une',
      subtitle: 'Une sélection de biens à Jérusalem. Contactez-moi pour organiser une visite ou recevoir le dossier complet.',
      rooms: 'pièces', area: 'm²', sale: 'Vente', rent: 'Location', perMonth: ' / mois',
      cta: 'Demander des informations',
      requestMsg: 'Bonjour, je souhaite recevoir plus d\'informations sur le bien : '
    },
    why: {
      eyebrow: 'Mon engagement', title: 'Pourquoi me faire confiance',
      items: [
        { title: 'Connaissance du marché de Jérusalem', text: 'Une expertise concentrée sur une seule ville : quartiers, prix réels, projets à venir et spécificités de chaque rue.' },
        { title: 'Accompagnement personnalisé', text: 'Un interlocuteur unique, de la première visite à la signature, attentif à vos priorités et à votre budget.' },
        { title: 'Réactivité', text: 'Des réponses rapides, des visites organisées sans délai et un suivi régulier de votre dossier.' },
        { title: 'Trois langues, une même exigence', text: 'Un accompagnement en hébreu, en français ou en anglais, pour que chaque détail soit parfaitement compris.' }
      ]
    },
    contact: {
      eyebrow: 'Contact', title: 'Parlons de votre projet',
      subtitle: 'Achat, vente ou location : décrivez-moi votre projet, je vous réponds rapidement.',
      name: 'Nom complet', email: 'Email', phone: 'Téléphone', message: 'Votre message',
      send: 'Envoyer le message', again: 'Envoyer un autre message',
      sent: 'Merci, votre message est prêt à être envoyé. Je vous réponds dans les plus brefs délais.',
      phoneLabel: 'Téléphone', emailLabel: 'Email', areaLabel: 'Secteur', area: 'Jérusalem et ses quartiers',
      whatsapp: 'Contacter sur WhatsApp',
      waText: 'Bonjour, je vous contacte depuis votre site Yalouche Immobilier.',
      mailSubject: 'Demande depuis le site'
    },
    footer: {
      tagline: 'Courtage immobilier à Jérusalem', rights: 'Tous droits réservés.', langLabel: 'Langue',
      disclaimer: "En formation avancée pour l'obtention de la licence de courtier immobilier (רישיון תיווך). Les biens présentés sur ce site sont donnés à titre d'exemple."
    }
  },
  en: {
    brand: 'Yalouche Real Estate', arrow: '→',
    nav: { about: 'About', properties: 'Featured', why: 'Why me', contact: 'Contact' },
    hero: {
      eyebrow: 'Real estate brokerage in Jerusalem',
      title: 'Your next home in Jerusalem, with personal, professional guidance',
      subtitle: 'Buying, selling and renting in Jerusalem: in-depth knowledge of every neighbourhood, careful attention to your needs, and full transparency at every step.',
      ctaPrimary: 'Get in touch', ctaSecondary: 'View properties'
    },
    about: {
      eyebrow: 'About',
      title: 'A thoughtful approach, dedicated entirely to Jerusalem',
      p1: 'My name is [Your name], and I help private clients buy, sell and rent property in Jerusalem. My approach is built on listening, rigour and first-hand knowledge of each neighbourhood, from Rehavia to Baka and from the German Colony to Arnona.',
      p2: 'Focusing on a single city lets me follow the market closely, know real prices and advise you precisely, whether you live in Israel or abroad.',
      statusLabel: 'Professional path',
      status: 'Currently in advanced training toward the Israeli real estate brokerage license (Rishyon Tivuch). Every client is served with the care and standards the profession demands.'
    },
    props: {
      eyebrow: 'Selection', title: 'Featured properties',
      subtitle: 'A selection of properties in Jerusalem. Get in touch to arrange a viewing or receive the full details.',
      rooms: 'rooms', area: 'm²', sale: 'For sale', rent: 'For rent', perMonth: ' / month',
      cta: 'Request details',
      requestMsg: 'Hello, I would like more information about the property: '
    },
    why: {
      eyebrow: 'My commitment', title: 'Why trust me',
      items: [
        { title: 'In-depth knowledge of the Jerusalem market', text: 'Expertise focused on one city: neighbourhoods, real prices, upcoming projects and the character of each street.' },
        { title: 'Personal guidance', text: 'A single point of contact from the first viewing to the signing, attentive to your priorities and budget.' },
        { title: 'Responsiveness', text: 'Quick answers, viewings arranged without delay and regular updates on your file.' },
        { title: 'Three languages, one standard', text: 'Guidance in Hebrew, French or English, so every detail is clearly understood.' }
      ]
    },
    contact: {
      eyebrow: 'Contact', title: "Let's talk about your project",
      subtitle: "Buying, selling or renting: tell me about your plans and I'll get back to you promptly.",
      name: 'Full name', email: 'Email', phone: 'Phone', message: 'Your message',
      send: 'Send message', again: 'Send another message',
      sent: "Thank you, your message is ready to send. I'll get back to you shortly.",
      phoneLabel: 'Phone', emailLabel: 'Email', areaLabel: 'Area', area: 'Jerusalem and its neighbourhoods',
      whatsapp: 'Contact on WhatsApp',
      waText: "Hello, I'm contacting you from the Yalouche Real Estate website.",
      mailSubject: 'Website enquiry'
    },
    footer: {
      tagline: 'Real estate brokerage in Jerusalem', rights: 'All rights reserved.', langLabel: 'Language',
      disclaimer: 'In advanced training toward the Israeli real estate brokerage license. Properties shown on this site are examples only.'
    }
  },
  he: {
    brand: 'יוני נדל"ן ירושלים', arrow: '←',
    nav: { about: 'אודות', properties: 'נכסים נבחרים', why: 'למה אני', contact: 'צור קשר' },
    hero: {
      eyebrow: 'תיווך נדל״ן בירושלים',
      title: 'הבית הבא שלכם בירושלים, בליווי אישי ומקצועי',
      subtitle: 'קנייה, מכירה והשכרה של נכסים בירושלים: היכרות מעמיקה עם השכונות, הקשבה לצרכים שלכם ושקיפות מלאה בכל שלב.',
      ctaPrimary: 'לתיאום שיחה', ctaSecondary: 'לנכסים הנבחרים'
    },
    about: {
      eyebrow: 'אודות',
      title: 'גישה קשובה, המוקדשת כולה לירושלים',
      p1: 'שמי [השם שלך], ואני מלווה לקוחות פרטיים בעסקאות נדל״ן בירושלים: קנייה, מכירה והשכרה. הגישה שלי מבוססת על הקשבה, יסודיות והיכרות מעשית עם כל שכונה, מרחביה ועד בקעה ומהמושבה הגרמנית ועד ארנונה.',
      p2: 'ההתמקדות בעיר אחת מאפשרת לי לעקוב מקרוב אחר השוק, להכיר את המחירים האמיתיים ולייעץ לכם בדייקנות, בין אם אתם גרים בישראל ובין אם בחו״ל.',
      statusLabel: 'מסלול מקצועי',
      status: 'נמצא כעת בשלב מתקדם של הכשרה לקראת קבלת רישיון תיווך במקרקעין. כל ליווי נעשה ברצינות ובמקצועיות שהתחום מחייב.'
    },
    props: {
      eyebrow: 'מבחר', title: 'נכסים נבחרים',
      subtitle: 'מבחר נכסים בירושלים. צרו קשר לתיאום ביקור או לקבלת פרטים מלאים.',
      rooms: 'חדרים', area: 'מ״ר', sale: 'למכירה', rent: 'להשכרה', perMonth: ' לחודש',
      cta: 'לפרטים נוספים',
      requestMsg: 'שלום, אשמח לקבל פרטים נוספים על הנכס: '
    },
    why: {
      eyebrow: 'המחויבות שלי', title: 'למה לבחור בי',
      items: [
        { title: 'היכרות מעמיקה עם שוק ירושלים', text: 'מומחיות שמתמקדת בעיר אחת: שכונות, מחירים אמיתיים, פרויקטים עתידיים ואופי של כל רחוב.' },
        { title: 'ליווי אישי', text: 'איש קשר אחד מהביקור הראשון ועד החתימה, קשוב לסדרי העדיפויות ולתקציב שלכם.' },
        { title: 'זמינות ומענה מהיר', text: 'תשובות מהירות, תיאום ביקורים ללא עיכובים ומעקב שוטף אחר התהליך.' },
        { title: 'שלוש שפות, אותה רמת מחויבות', text: 'ליווי בעברית, בצרפתית או באנגלית, כדי שכל פרט יהיה ברור לחלוטין.' }
      ]
    },
    contact: {
      eyebrow: 'צור קשר', title: 'בואו נדבר על הפרויקט שלכם',
      subtitle: 'קנייה, מכירה או השכרה: ספרו לי מה אתם מחפשים ואחזור אליכם בהקדם.',
      name: 'שם מלא', email: 'אימייל', phone: 'טלפון', message: 'ההודעה שלכם',
      send: 'שליחת הודעה', again: 'שליחת הודעה נוספת',
      sent: 'תודה, ההודעה שלכם מוכנה לשליחה. אחזור אליכם בהקדם.',
      phoneLabel: 'טלפון', emailLabel: 'אימייל', areaLabel: 'אזור פעילות', area: 'ירושלים ושכונותיה',
      whatsapp: 'שליחת הודעה בוואטסאפ',
      waText: 'שלום, אני פונה אליך דרך האתר.',
      mailSubject: 'פנייה מהאתר'
    },
    footer: {
      tagline: 'תיווך נדל״ן בירושלים', rights: 'כל הזכויות שמורות.', langLabel: 'שפה',
      disclaimer: 'בהכשרה מתקדמת לקראת קבלת רישיון תיווך במקרקעין. הנכסים המוצגים באתר הם לדוגמה בלבד.'
    }
  }
};

const LANGS = [
  { code: 'he', short: 'עב', name: 'עברית', locale: 'he-IL' },
  { code: 'fr', short: 'FR', name: 'Français', locale: 'fr-FR' },
  { code: 'en', short: 'EN', name: 'English', locale: 'en-US' }
];
const WHY_ICONS = ['icon-map-pin', 'icon-handshake', 'icon-clock', 'icon-languages'];
const STORE_KEY = 'yalouche-lang';

/* =====================================================================
   Logique du site (pas besoin d'y toucher)
   ===================================================================== */
(function () {
  let lang = (localStorage.getItem(STORE_KEY)) || 'fr';
  if (!T[lang]) lang = 'fr';
  let sent = false;
  let message = '';

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const get = (obj, path) => path.split('.').reduce((o, k) => (o == null ? o : o[k]), obj);

  function money(n, localeCode) {
    return new Intl.NumberFormat(localeCode, { style: 'currency', currency: 'ILS', maximumFractionDigits: 0 }).format(n);
  }

  function renderLangSwitch(container, variant) {
    container.innerHTML = '';
    LANGS.forEach(l => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.setAttribute('aria-pressed', String(l.code === lang));
      btn.lang = l.code;
      btn.textContent = variant === 'footer' ? l.name : l.short;
      if (l.code === lang) btn.classList.add('active');
      btn.addEventListener('click', () => setLang(l.code));
      container.appendChild(btn);
    });
  }

  function renderProperties() {
    const t = T[lang];
    const meta = LANGS.find(l => l.code === lang);
    const grid = $('#properties-grid');
    grid.innerHTML = '';
    PROPERTIES.forEach(p => {
      const typeLabel = p.type === 'rent' ? t.props.rent : t.props.sale;
      const priceLabel = money(p.price, meta.locale) + (p.type === 'rent' ? t.props.perMonth : '');
      const card = document.createElement('div');
      card.setAttribute('data-reveal', '');
      card.innerHTML = `
        <article class="property-card">
          <div class="property-media">
            <img src="images/biens/${p.id}.jpg" alt="" onerror="this.style.display='none'">
            <div class="hero-placeholder">Photo du bien — images/biens/${p.id}.jpg</div>
            <span class="property-tag">${typeLabel}</span>
          </div>
          <div class="property-body">
            <div class="property-hood"><i class="icon-map-pin"></i>${p.hood[lang]}</div>
            <h3>${p.title[lang]}</h3>
            <p class="property-desc">${p.desc[lang]}</p>
            <div class="property-meta">
              <span><i class="icon-bed-double"></i>${p.rooms} ${t.props.rooms}</span>
              <span><i class="icon-ruler"></i>${p.area} ${t.props.area}</span>
            </div>
            <div class="property-foot">
              <span class="property-price">${priceLabel}</span>
              <button type="button" class="property-cta" data-id="${p.id}">${t.props.cta}<span class="arrow">${t.arrow}</span></button>
            </div>
          </div>
        </article>`;
      grid.appendChild(card);
      card.querySelector('.property-cta').addEventListener('click', () => {
        message = t.props.requestMsg + p.title[lang] + ' (' + p.hood[lang] + ')';
        sent = false;
        render();
        const el = document.getElementById('contact');
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
      });
    });
    initReveal(grid);
  }

  function renderWhy() {
    const t = T[lang];
    const grid = $('#why-grid');
    grid.innerHTML = '';
    t.why.items.forEach((w, i) => {
      const item = document.createElement('div');
      item.setAttribute('data-reveal', '');
      item.className = 'why-item';
      item.innerHTML = `
        <div class="why-icon"><i class="${WHY_ICONS[i] || 'icon-check'}"></i></div>
        <h3>${w.title}</h3>
        <p>${w.text}</p>`;
      grid.appendChild(item);
    });
    initReveal(grid);
  }

  function applyI18n() {
    const t = T[lang];
    $$('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = get(t, key);
      if (typeof val === 'string') el.textContent = val;
    });
  }

  function applyDynamicFields() {
    const t = T[lang];
    $('#phone-display').textContent = CONTACT.phoneDisplay;
    $('#email-display').textContent = CONTACT.email;
    $('#tel-link').href = 'tel:' + CONTACT.phoneLink;
    $('#mail-link').href = 'mailto:' + CONTACT.email;
    const waHref = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(t.contact.waText)}`;
    $('#wa-link').href = waHref;
    const waFloat = $('#wa-float');
    waFloat.href = waHref;
    waFloat.hidden = !SHOW_WA_FLOAT;
    waFloat.style.display = SHOW_WA_FLOAT ? 'flex' : 'none';
    waFloat.setAttribute('aria-label', t.contact.whatsapp);
    $('#footer-year').textContent = new Date().getFullYear();
    $('#contact-message').value = message;
    $('#contact-sent').hidden = !sent;
    $('#contact-form').hidden = sent;
  }

  function render() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
    document.title = T[lang].brand;
    applyI18n();
    applyDynamicFields();
    renderProperties();
    renderWhy();
    renderLangSwitch($('#lang-switch-header'), 'header');
    renderLangSwitch($('#lang-switch-footer'), 'footer');
  }

  function setLang(code) {
    if (code === lang) return;
    document.body.style.transition = 'opacity .22s ease';
    document.body.style.opacity = '0';
    setTimeout(() => {
      lang = code;
      try { localStorage.setItem(STORE_KEY, code); } catch (e) {}
      closeMobileMenu();
      render();
      document.body.style.opacity = '1';
    }, 220);
  }

  /* Header scroll state */
  const header = $('#site-header');
  function onScroll() {
    header.classList.toggle('solid', window.scrollY > 40 || !navMobile.hidden);
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Mobile menu */
  const navMobile = $('#nav-mobile');
  const menuToggle = $('#menu-toggle');
  const menuIcon = $('#menu-icon');
  function closeMobileMenu() {
    navMobile.hidden = true;
    menuIcon.className = 'icon-menu';
    onScroll();
  }
  menuToggle.addEventListener('click', () => {
    navMobile.hidden = !navMobile.hidden;
    menuIcon.className = navMobile.hidden ? 'icon-menu' : 'icon-x';
    onScroll();
  });
  $$('#nav-mobile a').forEach(a => a.addEventListener('click', closeMobileMenu));

  /* Contact form */
  $('#contact-form').addEventListener('submit', e => {
    e.preventDefault();
    const f = new FormData(e.target);
    const t = T[lang];
    const body = `${f.get('name')}\n${f.get('email')}\n${f.get('phone') || ''}\n\n${f.get('message')}`;
    const a = document.createElement('a');
    a.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(t.contact.mailSubject)}&body=${encodeURIComponent(body)}`;
    a.click();
    sent = true;
    applyDynamicFields();
  });
  $('#contact-message').addEventListener('input', e => { message = e.target.value; });
  $('#contact-again').addEventListener('click', () => {
    sent = false;
    message = '';
    applyDynamicFields();
  });

  /* Reveal-on-scroll */
  let io = null;
  const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function initReveal(root) {
    if (reducedMotion || !('IntersectionObserver' in window)) {
      $$('[data-reveal]', root).forEach(el => el.classList.add('revealed'));
      return;
    }
    if (!io) {
      io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    }
    $$('[data-reveal]', root).forEach(el => {
      if (!el.classList.contains('revealed')) io.observe(el);
    });
  }

  render();
  initReveal(document);
  onScroll();
})();
