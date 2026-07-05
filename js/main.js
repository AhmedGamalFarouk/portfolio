/* ═══════════════════════════════════════════════════════
   Ahmed Gamal Farouk – Portfolio JS
   Features: GSAP Animations, Bilingual i18n, Nav, Forms
   ═══════════════════════════════════════════════════════ */

'use strict';

// ═══════════════ TRANSLATIONS ═══════════════
const translations = {
  en: {
    // Nav
    navHome: 'Home', navProjects: 'Projects', navSkills: 'Skills', navAbout: 'About',
    // Hero
    heroBadge: 'Available for hire',
    heroLine1a: "Hello, I'm", heroName: 'Ahmed',
    heroLine2a: 'I build', heroLine2b: 'mobile', heroLine2c: 'and', heroLine2d: 'web',
    heroLine3: 'applications.',
    heroSub: 'Front-End & Cross-Platform Mobile Developer based in Cairo, Egypt.',
    heroCta: 'View my work', heroResume: 'Resume',
    scrollHint: 'Scroll down',
    // Process
    proc1: 'It starts with an <span class="accent">idea</span>…',
    proc2: 'Then I <span class="accent-blue">analyze</span> the problem…',
    proc3: 'Design & <span class="accent">architecture</span> take shape…',
    proc4: 'I <span class="accent-blue">code</span> it with precision…',
    proc5: 'And <span class="accent">ship</span> something remarkable.',
    // Projects
    projectsTitle: 'My best projects <span class="accent">★</span>',
    proj1Desc: 'A full e-commerce app with authentication, cart, product management, SQLite persistence, and Bloc state management.',
    proj2Desc: 'A social event platform that combats social drift by reducing the friction of planning group activities.',
    proj3Desc: 'A futuristic, sleek movies website with real-time data, category filtering, and an immersive dark UI.',
    proj4Desc: 'Full social platform with profiles, posts, likes, comments, real-time updates, and Firebase Authentication.',
    proj5Desc: 'Mobile event planning app with authentication, real-time features, and channel-based group messaging.',
    proj6Desc: 'A shared order management app to streamline group orders using real-time Firebase Firestore sync.',
    cardGithub: 'View on GitHub',
    // Skills
    skillsTitle: 'Stack & Skills',
    skillMobile: 'Mobile', skillWeb: 'Web', skillBackend: 'Backend & DB', skillTools: 'Tools',
    pubLabel: 'Publication — Springer',
    pubTitle: 'A Systematic Literature Review of Optimization Algorithms for the University Course Timetabling Problem',
    // About
    aboutRole: 'Front-End & Cross-Platform Mobile Developer',
    aboutDesc1: 'Results-driven developer with proven expertise in Flutter, React, and Angular. I specialize in building responsive, cross-platform applications with a strong foundation in UI/UX principles, clean architecture, and performance optimization.',
    aboutDesc2: 'Experienced in Agile/Scrum environments — collaborating with designers, product owners, and backend teams to deliver scalable, user-friendly solutions that make a real impact.',
    eduTitle: 'B.Sc. Computer Science',
    eduSchool: 'Future Academy · GPA 3.26/4.0',
    linkedinLink: 'My journey on LinkedIn',
    certsTitle: 'Certifications',
    footerLangAr: 'Arabic', footerLangEn: 'English',
    // Contact
    contactTitle: 'Contact', workBtn: 'Work\nwith me',
    formEmail: 'Your email', formName: 'Your name',
    formMessage: 'Your message', formSend: 'Send',
  },
  ar: {
    // Nav
    navHome: 'الرئيسية', navProjects: 'المشاريع', navSkills: 'المهارات', navAbout: 'عني',
    // Hero
    heroBadge: 'متاح للعمل',
    heroLine1a: 'مرحباً، أنا', heroName: 'أحمد',
    heroLine2a: 'أبني تطبيقات', heroLine2b: 'الجوال', heroLine2c: 'و', heroLine2d: 'الويب',
    heroLine3: 'بإتقان واحترافية.',
    heroSub: 'مطوّر واجهات أمامية وتطبيقات متعددة المنصات — القاهرة، مصر.',
    heroCta: 'اعرض أعمالي', heroResume: 'السيرة الذاتية',
    scrollHint: 'اسحب للأسفل',
    // Process
    proc1: 'يبدأ الأمر بـ<span class="accent">فكرة</span>…',
    proc2: 'ثم <span class="accent-blue">أحلّل</span> المشكلة…',
    proc3: 'يتشكّل التصميم و<span class="accent">المعمارية</span>…',
    proc4: 'أكتب <span class="accent-blue">الكود</span> بدقة…',
    proc5: 'وأُطلق شيئاً <span class="accent">رائعاً</span>.',
    // Projects
    projectsTitle: 'أبرز مشاريعي <span class="accent">★</span>',
    proj1Desc: 'تطبيق تسوق متكامل مع المصادقة، عربة الشراء، إدارة المنتجات، وتخزين SQLite.',
    proj2Desc: 'منصة تخطيط اجتماعي تُقلّل الاحتكاك في تنظيم الأنشطة الجماعية.',
    proj3Desc: 'موقع أفلام عصري بواجهة مظلمة رائعة، تصفية حسب الفئة، وبيانات فورية.',
    proj4Desc: 'منصة تواصل اجتماعي متكاملة مع ملفات شخصية، منشورات، وإشعارات فورية.',
    proj5Desc: 'تطبيق جوّال لتخطيط الفعاليات مع مصادقة ومراسلة جماعية فورية.',
    proj6Desc: 'تطبيق لإدارة الطلبات الجماعية المشتركة بمزامنة فورية عبر Firebase.',
    cardGithub: 'عرض على GitHub',
    // Skills
    skillsTitle: 'التقنيات والمهارات',
    skillMobile: 'الجوال', skillWeb: 'الويب', skillBackend: 'الخلفية وقواعد البيانات', skillTools: 'الأدوات',
    pubLabel: 'منشور علمي — Springer',
    pubTitle: 'مراجعة منهجية لخوارزميات التحسين لمشكلة جدولة المقررات الجامعية',
    // About
    aboutRole: 'مطوّر واجهات أمامية وتطبيقات متعددة المنصات',
    aboutDesc1: 'مطوّر محترف متخصص في Flutter وReact وAngular. أبني تطبيقات تفاعلية وسريعة ومتعددة المنصات بأسس قوية في تصميم UI/UX والمعمارية النظيفة.',
    aboutDesc2: 'خبرة في بيئات Agile/Scrum مع التعاون مع المصممين ومالكي المنتج وفرق الخلفية لتقديم حلول قابلة للتوسع وسهلة الاستخدام.',
    eduTitle: 'بكالوريوس علوم الحاسب',
    eduSchool: 'أكاديمية المستقبل · GPA 3.26/4.0',
    linkedinLink: 'تابع مسيرتي على LinkedIn',
    certsTitle: 'الشهادات والدورات',
    footerLangAr: 'العربية', footerLangEn: 'الإنجليزية',
    // Contact
    contactTitle: 'تواصل معي', workBtn: 'اعمل\nمعي',
    formEmail: 'بريدك الإلكتروني', formName: 'اسمك',
    formMessage: 'رسالتك', formSend: 'إرسال',
  }
};

// ═══════════════ LANGUAGE ═══════════════
let currentLang = localStorage.getItem('portfolio-lang') || 'en';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('portfolio-lang', lang);
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // Toggle font class on body
  document.body.style.fontFamily = lang === 'ar' ? "'Cairo', sans-serif" : "'Inter', sans-serif";

  // Update lang buttons
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');
  document.getElementById('lang-ar').classList.toggle('active', lang === 'ar');

  // Apply translations
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });
}

// ═══════════════ LOADING SCREEN ═══════════════
function initLoader() {
  const loading = document.getElementById('loading');
  const letters = loading.querySelectorAll('.loading-letters span');
  const bar = loading.querySelector('.loading-bar');
  const wipe = loading.querySelector('.loading-wipe');

  // Animate letters in
  gsap.to(letters, {
    opacity: 1, y: 0, duration: 0.6,
    stagger: 0.12, ease: 'power3.out',
    delay: 0.2
  });

  // Fill progress bar
  gsap.to(bar, {
    width: '100%', duration: 1.6,
    ease: 'power2.inOut', delay: 0.4,
    onComplete: () => {
      // Wipe away loading screen
      gsap.to(wipe, {
        scaleY: 1, duration: 0.5, ease: 'power3.inOut',
        transformOrigin: 'top',
        onComplete: () => {
          loading.classList.add('done');
          loading.style.display = 'none';
          initHeroAnimations();
        }
      });
    }
  });
}

// ═══════════════ HERO ANIMATIONS ═══════════════
function initHeroAnimations() {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  // Profile appear
  tl.to('.hero-profile-wrap', { opacity: 1, duration: 1.0 }, 0)

  // Text lines unmask — slower, more cinematic
  .to('.hero-text', { opacity: 1, duration: 0 }, 0.2)
  .to('.line-mask', {
    scaleX: 0, duration: 1.1,
    stagger: 0.26,
    ease: 'power4.inOut',
    transformOrigin: 'right'
  }, 0.3)

  // Subtitle + CTAs
  .from('.hero-sub', { y: 24, opacity: 0, duration: 0.8, ease: 'power2.out' }, 1.3)
  .from('.hero-ctas', { y: 24, opacity: 0, duration: 0.8, ease: 'power2.out' }, 1.45)

  // Scroll hint
  .to('.scroll-hint', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 1.6);

  // Work button
  gsap.from('.work-btn', { opacity: 0, x: 30, duration: 1.0, delay: 1.8, ease: 'power3.out' });
}

// ═══════════════ SCROLL ANIMATIONS ═══════════════
function initScrollAnimations() {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // Process lines
  const procLines = gsap.utils.toArray('.proc-line');
  procLines.forEach((line, i) => {
    const mask = line.querySelector('.line-mask');
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: line,
        start: 'top 82%',
        toggleActions: 'play none none reverse'
      }
    });
    tl.to(line, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
      .to(mask, { scaleX: 0, duration: 0.9, ease: 'power4.inOut', transformOrigin: 'right' }, 0.15);
  });

  // Project cards
  gsap.to('.project-card', {
    opacity: 1, y: 0, duration: 0.7,
    stagger: 0.13, ease: 'power3.out',
    scrollTrigger: {
      trigger: '.cards-wrapper',
      start: 'top 78%',
    }
  });

  // Skills groups
  gsap.to('.skill-group', {
    opacity: 1, y: 0, duration: 0.65,
    stagger: 0.13, ease: 'power3.out',
    scrollTrigger: { trigger: '.skills-grid', start: 'top 82%' }
  });

  // Publication card
  gsap.to('.publication-card', {
    opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
    scrollTrigger: { trigger: '.publication-card', start: 'top 87%' }
  });

  // About elements
  gsap.to('.about-text', {
    opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
    scrollTrigger: { trigger: '.about-inner', start: 'top 78%' }
  });
  gsap.to('.certs-grid', {
    opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out',
    scrollTrigger: { trigger: '.about-inner', start: 'top 78%' }
  });
  gsap.to('.cert-item', {
    opacity: 1, y: 0, duration: 0.5,
    stagger: 0.09, ease: 'power3.out',
    scrollTrigger: { trigger: '.cert-list', start: 'top 83%' }
  });

  // Scroll progress bar
  const progressBar = document.getElementById('progress-bar');
  const content = document.getElementById('content');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = progress + '%';
  }, { passive: true });
}

// ═══════════════ NAVIGATION ═══════════════
function initNav() {
  const sections = ['hero', 'process', 'projects', 'skills', 'about'];
  const sectionLabels = { hero: 'hero', process: 'hero', projects: 'projects', skills: 'skills', about: 'about' };
  const navItems = document.querySelectorAll('.nav-item[data-section], .bottom-btn[data-section]');

  // Scroll to section on click
  navItems.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-section');
      const el = document.getElementById(target);
      if (el) {
        gsap.to(window, { duration: 0.8, scrollTo: { y: el, offsetY: 20 }, ease: 'power3.inOut' });
      }
    });
  });

  // Hero CTA → projects
  const heroCta = document.getElementById('hero-cta');
  if (heroCta) {
    heroCta.addEventListener('click', () => {
      const el = document.getElementById('projects');
      if (el) gsap.to(window, { duration: 0.8, scrollTo: { y: el, offsetY: 20 }, ease: 'power3.inOut' });
    });
  }

  // Update active nav on scroll
  const updateActive = () => {
    let current = 'hero';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top <= 200) current = id;
    });

    const mapped = sectionLabels[current] || current;
    document.querySelectorAll('.nav-item[data-section]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-section') === mapped);
    });
    document.querySelectorAll('.bottom-btn[data-section]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-section') === mapped);
    });
  };

  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();
}

// ═══════════════ CONTACT PANEL ═══════════════
function initContact() {
  const panel = document.getElementById('contact-panel');
  const overlay = document.getElementById('contact-overlay');
  const closeBtn = document.getElementById('contact-close');
  const workBtn = document.getElementById('work-btn');
  const mobileContactBtn = document.getElementById('mobile-contact-btn');

  const openPanel = () => {
    panel.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    gsap.from(panel, { opacity: 0.5, duration: 0.3 });
  };
  const closePanel = () => {
    panel.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (workBtn) workBtn.addEventListener('click', openPanel);
  if (mobileContactBtn) mobileContactBtn.addEventListener('click', openPanel);
  if (closeBtn) closeBtn.addEventListener('click', closePanel);
  if (overlay) overlay.addEventListener('click', closePanel);

  // Escape key
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closePanel(); });

  // Form submit
  const form = document.getElementById('contact-form');
  const errEl = document.getElementById('form-error');
  const succEl = document.getElementById('form-success');
  const submitBtn = document.getElementById('submit-btn');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      errEl.textContent = '';
      succEl.textContent = '';
      submitBtn.disabled = true;
      submitBtn.querySelector('span').textContent = '…';

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          succEl.textContent = currentLang === 'ar' ? '✓ تم الإرسال بنجاح!' : '✓ Message sent!';
          form.reset();
          setTimeout(closePanel, 2500);
        } else {
          throw new Error();
        }
      } catch {
        errEl.textContent = currentLang === 'ar' ? 'حدث خطأ. يرجى المحاولة مرة أخرى.' : 'Something went wrong. Please try again.';
      } finally {
        submitBtn.disabled = false;
        submitBtn.querySelector('span').textContent = translations[currentLang].formSend;
      }
    });
  }
}

// ═══════════════ PROJECT CARDS NAV ═══════════════
function initCardsNav() {
  const track = document.getElementById('cards-track');
  const prevBtn = document.getElementById('cards-prev');
  const nextBtn = document.getElementById('cards-next');
  if (!track || !prevBtn || !nextBtn) return;

  const CARD_WIDTH = 320 + 24; // card width + gap

  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: CARD_WIDTH, behavior: 'smooth' });
  });
  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -CARD_WIDTH, behavior: 'smooth' });
  });

  // Update button visibility
  const updateNavBtns = () => {
    prevBtn.style.opacity = track.scrollLeft > 20 ? '1' : '0.3';
    nextBtn.style.opacity = track.scrollLeft < track.scrollWidth - track.clientWidth - 20 ? '1' : '0.3';
  };
  track.addEventListener('scroll', updateNavBtns, { passive: true });
  updateNavBtns();
}

// ═══════════════ CUSTOM CURSOR ═══════════════
function initCursor() {
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  // Hide cursors until mouse enters window
  dot.style.opacity = '0';
  ring.style.opacity = '0';

  let mouseX = 0, mouseY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Dot follows instantly
    gsap.to(dot, {
      x: mouseX, y: mouseY,
      duration: 0.08,
      ease: 'none'
    });

    // Ring lags smoothly behind
    gsap.to(ring, {
      x: mouseX, y: mouseY,
      duration: 0.55,
      ease: 'power2.out'
    });

    dot.style.opacity = '1';
    ring.style.opacity = '0.5';
  });

  // Hide when leaving window
  document.addEventListener('mouseleave', () => {
    gsap.to([dot, ring], { opacity: 0, duration: 0.3 });
  });
  document.addEventListener('mouseenter', () => {
    gsap.to(dot, { opacity: 1, duration: 0.3 });
    gsap.to(ring, { opacity: 0.5, duration: 0.3 });
  });

  // Expand ring on interactive elements
  const interactives = document.querySelectorAll('a, button, .pill, .project-card, .nav-item, .sidebar-avatar, .work-btn');
  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => {
      dot.classList.add('hovering');
      ring.classList.add('hovering');
    });
    el.addEventListener('mouseleave', () => {
      dot.classList.remove('hovering');
      ring.classList.remove('hovering');
    });
  });

  // Shrink on click
  document.addEventListener('mousedown', () => {
    gsap.to(dot, { scale: 0.6, duration: 0.1 });
    gsap.to(ring, { scale: 0.85, duration: 0.15 });
  });
  document.addEventListener('mouseup', () => {
    gsap.to(dot, { scale: 1, duration: 0.3, ease: 'elastic.out(1, 0.5)' });
    gsap.to(ring, { scale: 1, duration: 0.4, ease: 'elastic.out(1, 0.5)' });
  });
}

// ═══════════════ PILLS HOVER ═══════════════
function initPillsAnimation() {
  document.querySelectorAll('.pill').forEach(pill => {
    pill.addEventListener('mouseenter', () => {
      gsap.to(pill, { scale: 1.05, duration: 0.2, ease: 'power2.out' });
    });
    pill.addEventListener('mouseleave', () => {
      gsap.to(pill, { scale: 1, duration: 0.3, ease: 'elastic.out(1,0.5)' });
    });
  });
}

// ═══════════════ SIDEBAR AVATAR CLICK ═══════════════
function initAvatarScroll() {
  const avatar = document.getElementById('sidebar-avatar');
  if (avatar) {
    avatar.addEventListener('click', () => {
      gsap.to(window, { duration: 0.8, scrollTo: { y: 0 }, ease: 'power3.inOut' });
    });
  }
}

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  // Apply saved language
  setLang(currentLang);

  // Cursor runs immediately (before load)
  initCursor();

  // Init all modules
  initLoader();
  initNav();
  initContact();
  initCardsNav();
  initAvatarScroll();

  // Delay scroll animations until after load
  window.addEventListener('load', () => {
    initScrollAnimations();
    initPillsAnimation();
  });
});
