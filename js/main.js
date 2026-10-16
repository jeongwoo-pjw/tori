(() => {
  const slides = [...document.querySelectorAll('.slide')];
  const total = slides.length;
  const pad = (n) => String(n).padStart(2, '0');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // 페이지 번호: 실제 순서대로 자동 정렬 (표지 제외) — 섹션 추가·이동 시 번호를 손으로 고치지 않도록
  slides.forEach((s, i) => {
    if (i === 0) return;
    s.dataset.idx = pad(i);
    const num = s.querySelector('.eyebrow > span:first-child');
    if (num) num.textContent = pad(i);
  });

  // 고정 크롬: 현재 섹션 · 페이지 · 진행 바
  const $idx = document.querySelector('.chrome__idx');
  const $title = document.querySelector('.chrome__title');
  const $section = document.querySelector('.chrome__section');
  const $toTop = document.querySelector('.to-top');
  const $cur = document.querySelector('.chrome__cur');
  const $bar = document.querySelector('.chrome__bar');
  // 표지를 00번으로: 하단 카운터가 각 페이지 아이브로우 번호와 같도록
  document.querySelector('.chrome__total').textContent = pad(total - 1);

  // 하단 각주 메뉴: 번호 없이 주요 페이지만. 디자인①~④와 각 UX 상세는 '디자인' 하나로 묶고, 마무리·끝은 제외
  const $menu = document.querySelector('.chrome__menu');
  const EXCLUDE = ['마무리', '끝'];
  const menuLinks = [];     // [a 요소]
  const menuOf = [];        // 슬라이드 index → 메뉴 a (현재 위치 표시용)
  let designLink = null;
  slides.forEach((slide, i) => {
    const title = slide.dataset.title;
    if (!title || EXCLUDE.includes(title)) return;
    if (/^디자인\s?[①-④\d]/.test(title)) {
      if (designLink) { menuOf[i] = designLink; return; }
    }
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${slide.id}`;
    a.textContent = /^디자인\s?[①-④\d]/.test(title) ? '디자인' : title;
    a.addEventListener('click', (e) => { e.preventDefault(); slide.scrollIntoView({ behavior: 'smooth' }); a.blur(); });
    li.appendChild(a);
    $menu.appendChild(li);
    menuLinks.push(a);
    menuOf[i] = a;
    if (a.textContent === '디자인') designLink = a;
  });

  let current = 0;
  const setActive = (i) => {
    current = i;
    const s = slides[i];
    $idx.textContent = s.dataset.idx || pad(i);
    $title.textContent = s.dataset.title || '';
    // 표지에서는 섹션 각주를 숨김
    $section.style.visibility = s.classList.contains('slide--hero') ? 'hidden' : '';
    $toTop.classList.toggle('is-visible', i > 0);
    menuLinks.forEach((a) => (a === menuOf[i] ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current')));
    $cur.textContent = pad(i);
    $bar.style.width = `${(i / (total - 1)) * 100}%`;
    document.body.classList.toggle('on-dark', s.classList.contains('is-dark'));
  };
  // 화면 중앙선에 걸친 섹션을 현재 섹션으로 (한 화면보다 긴 섹션 대응)
  const activeIO = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && setActive(slides.indexOf(e.target))),
    { rootMargin: '-50% 0px -50% 0px' }
  );
  slides.forEach((s) => activeIO.observe(s));
  setActive(0);

  // 키보드로 슬라이드 넘기기 — 긴 섹션은 끝까지 읽은 뒤 다음으로
  const go = (i) => slides[Math.max(0, Math.min(total - 1, i))].scrollIntoView({ behavior: 'smooth' });
  const step = (dir) => {
    const r = slides[current].getBoundingClientRect();
    const vh = window.innerHeight;
    if (dir > 0 && r.bottom > vh + 2) window.scrollBy({ top: Math.min(vh * 0.85, r.bottom - vh), behavior: 'smooth' });
    else if (dir < 0 && r.top < -2) window.scrollBy({ top: Math.max(-vh * 0.85, r.top), behavior: 'smooth' });
    else go(current + dir);
  };
  $toTop.addEventListener('click', () => go(0));
  document.addEventListener('keydown', (e) => {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    if (['ArrowDown', 'ArrowRight', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); step(1); }
    else if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(e.key)) { e.preventDefault(); step(-1); }
    else if (e.key === 'Home') { e.preventDefault(); go(0); }
    else if (e.key === 'End') { e.preventDefault(); go(total - 1); }
  });

  // 히어로: 최초 진입 시 텍스트가 순차적으로 약하게 등장
  const hero = document.querySelector('.slide--hero');
  requestAnimationFrame(() => requestAnimationFrame(() => hero.classList.add('is-ready')));

  // 히어로 아치: 세로는 아이브로우 상단 ~ 프로젝트 메타 하단과 동일,
  // 우측 여백은 텍스트 좌측 여백과 동일하게 맞춰 좌우 균형 유지
  const frame = hero.querySelector('.hero__frame');
  const heroText = hero.querySelector('.hero__text');
  const heroMeta = hero.querySelector('.hero__meta');
  const placeFrame = () => {
    if (getComputedStyle(frame).display === 'none') return;
    // 등장 애니메이션(transform) 영향을 받지 않도록 레이아웃 좌표(offsetTop)로 측정
    const wrap = heroText.offsetParent;
    const wrapTop = wrap.offsetTop;
    const H = hero.offsetHeight;
    const Hi = Math.max(H, hero.offsetWidth / 2);
    const top = wrapTop + heroText.offsetTop;
    const bottom = wrapTop + heroMeta.offsetTop + heroMeta.offsetHeight;
    const height = bottom - top;
    const width = Math.min(Hi * 0.62, height * 0.92);
    const right = wrap.offsetLeft;
    Object.assign(frame.style, {
      bottom: `${H - bottom}px`, height: `${height}px`, width: `${width}px`, right: `${right}px`,
    });
  };
  placeFrame();
  window.addEventListener('resize', placeFrame);
  if (document.fonts) document.fonts.ready.then(placeFrame);

  // 이미지 레이어: 섹션 위치에 따른 아주 미세한 parallax (transform과 분리된 translate 사용)
  const layers = [...document.querySelectorAll('[data-depth]')].map((el) => ({
    el, depth: parseFloat(el.dataset.depth), section: el.closest('.slide'),
  }));
  let ticking = false;
  const parallax = () => {
    ticking = false;
    const vh = window.innerHeight;
    layers.forEach(({ el, depth, section }) => {
      if (reduceMotion.matches) { el.style.translate = ''; return; }
      const top = section.getBoundingClientRect().top;
      if (top > vh || top < -section.offsetHeight) return;
      el.style.translate = `0 ${(-top * depth).toFixed(1)}px`;
    });
  };
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(parallax); }
  }, { passive: true });

  // 등장 효과: 슬라이드 제목 → 본문 / Overview는 요소별(.rv) 순차 등장
  const targets = [];
  document.querySelectorAll('.head, .end').forEach((el) => targets.push(el));
  document.querySelectorAll('.body').forEach((el) => { el.classList.add('d1'); targets.push(el); });
  targets.forEach((el) => el.classList.add('reveal'));
  document.querySelectorAll('.rv').forEach((el) => targets.push(el));
  const revealIO = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('is-in'); revealIO.unobserve(e.target); }
    }),
    { threshold: 0.12 }
  );
  targets.forEach((el) => revealIO.observe(el));

  // SHOWCASE → UX DESIGN DETAIL
  // 상세 페이지의 실제 이미지(.ux__shot)를 쇼케이스 이미지 위치에서 출발시켜, 스크롤 진행도에 맞춰
  // 상세 페이지의 자리로 축소·이동 (FLIP). 쇼케이스 원본은 전환 중에만 숨겨 하나의 이미지가 움직이는 것처럼 보임
  // 스냅이 켜지는 데스크톱에서만 동작하고, 그 외 환경과 모션 최소화 설정에서는 완성 상태를 바로 표시
  const flightMQ = window.matchMedia('(min-width: 1024px) and (min-height: 700px)');
  const pairs = [...document.querySelectorAll('.slide--ux[data-pair]')].map((detail) => {
    const show = document.getElementById(detail.dataset.pair);
    const fliers = [...detail.querySelectorAll('.ux__shot[data-fly]')]
      .map((el) => ({ el, src: show.querySelector(`[data-fly="${el.dataset.fly}"]`) }))
      .filter((f) => f.src);
    return { detail, show, wrap: show.querySelector(':scope > .wrap'), fliers, flying: false };
  });
  // transform의 영향을 받지 않는 레이아웃 좌표 (슬라이드 기준)
  const relRect = (el, slide) => {
    let x = 0, y = 0;
    for (let n = el; n && n !== slide; n = n.offsetParent) { x += n.offsetLeft; y += n.offsetTop; }
    return { x, y, w: el.offsetWidth };
  };
  const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const land = (pr) => {
    if (!pr.flying) return;
    pr.flying = false;
    pr.fliers.forEach(({ el, src }) => { el.style.transform = ''; el.classList.remove('is-flying'); src.style.visibility = ''; });
    pr.wrap.style.opacity = '';
  };
  const updateFlight = () => {
    const on = flightMQ.matches && !reduceMotion.matches;
    pairs.forEach((pr) => {
      const { detail, show } = pr;
      if (!on) { land(pr); detail.classList.add('is-on', 'is-settled'); return; }
      const H = show.offsetHeight;
      const T = detail.getBoundingClientRect().top;
      // 스냅 위치의 소수점 오차(1px 이내)는 완료 상태로 간주
      const p = T <= 1 ? 1 : T >= H - 1 ? 0 : 1 - T / H;
      if (p <= 0 || p >= 1) land(pr);
      else {
        pr.flying = true;
        const e = ease(p);
        pr.wrap.style.opacity = String(Math.max(0, 1 - p * 1.8));
        pr.fliers.forEach(({ el, src }) => {
          const s = relRect(src, show);
          const d = relRect(el, detail);
          if (!s.w || !d.w) return;
          // 쇼케이스가 화면 상단에 있을 때의 위치(s) → 상세가 화면 상단에 있을 때의 위치(d)
          const x = s.x + (d.x - s.x) * e;
          const y = s.y + (d.y - s.y) * e;
          const w = s.w + (d.w - s.w) * e;
          el.style.transform = `translate(${(x - d.x).toFixed(2)}px, ${(y - T - d.y).toFixed(2)}px) scale(${(w / d.w).toFixed(4)})`;
          el.classList.add('is-flying');
          src.style.visibility = 'hidden';
        });
      }
      // 설명은 전환 후반부터 순차 등장, 콜아웃은 이미지가 자리 잡은 뒤 — 역방향이면 다시 사라짐
      if (p > 0.55) detail.classList.add('is-on');
      else if (p < 0.4) detail.classList.remove('is-on');
      detail.classList.toggle('is-settled', p > 0.97);
    });
  };
  let flightTick = false;
  const requestFlight = () => { if (!flightTick) { flightTick = true; requestAnimationFrame(() => { flightTick = false; updateFlight(); }); } };
  window.addEventListener('scroll', requestFlight, { passive: true });
  window.addEventListener('resize', requestFlight);
  window.addEventListener('load', requestFlight);
  flightMQ.addEventListener('change', requestFlight);
  reduceMotion.addEventListener('change', requestFlight);
  updateFlight();
})();
