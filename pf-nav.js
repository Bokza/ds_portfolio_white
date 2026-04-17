/**
 * Portfolio Navigation & Animation
 * 각 HTML 페이지에 네비게이션 쉘을 동적으로 삽입합니다.
 */
(function () {
  'use strict';

  /* ── Page list ──────────────────────────────────────── */
  var PAGES = [
    'index.html',
    'p2.html', 'p3.html', 'p4.html',  'p5.html',  'p6.html',
    'p7.html', 'p8.html', 'p9.html', 'p10.html', 'p11.html', 'p12.html'
  ];
  var N = PAGES.length;

  /* ── Determine current page index ──────────────────── */
  function getCurrentIndex() {
    var path = location.pathname;
    var file = path.split('/').pop();
    if (!file || file === '') file = 'index.html';
    var idx = PAGES.indexOf(file);
    return idx === -1 ? 0 : idx;
  }

  /* ── SYNC: inject base styles immediately ──────────── */
  var style = document.createElement('style');
  style.textContent = [
    /* ── 바디 & 쉘 배경: 슬라이드 톤과 동일한 라이트 그레이 ── */
    'body{background:#EEF2F7!important;}',

    /* Shell */
    '.pf-shell{position:fixed;inset:0;display:flex;flex-direction:column;',
    'align-items:center;justify-content:center;background:#EEF2F7;',
    'overflow:hidden;z-index:9000;}',

    /* Row */
    '.pf-row{display:flex;align-items:center;gap:20px;flex-shrink:0;}',

    /* Viewport — 화이트 슬라이드에 어울리는 부드러운 그림자 */
    '.pf-vp{overflow:hidden;flex-shrink:0;border-radius:10px;',
    'box-shadow:0 8px 40px rgba(15,23,42,.12),0 2px 8px rgba(15,23,42,.06),',
    '0 0 0 1px rgba(203,213,225,.6);}',

    /* Canvas */
    '.pf-canvas{width:1280px;height:720px;position:relative;',
    'transform-origin:top left;flex-shrink:0;}',

    /* Nav buttons: 흰 배경 + 슬레이트 아이콘 */
    '.pf-btn{width:42px;height:42px;border-radius:50%;',
    'background:#FFFFFF;border:1px solid #CBD5E1;',
    'color:#475569;cursor:pointer;display:flex;',
    'align-items:center;justify-content:center;flex-shrink:0;outline:none;',
    'box-shadow:0 1px 4px rgba(15,23,42,.08);',
    'transition:background .18s,border-color .18s,box-shadow .18s,transform .15s,opacity .2s;',
    'user-select:none;}',
    '.pf-btn:hover:not(:disabled){background:#F8FAFC;border-color:#94A3B8;',
    'box-shadow:0 3px 10px rgba(15,23,42,.12);transform:scale(1.07);}',
    '.pf-btn:active:not(:disabled){transform:scale(.93);}',
    '.pf-btn:disabled{opacity:.3;cursor:not-allowed;box-shadow:none;}',

    /* Bottom row */
    '.pf-bottom{display:flex;align-items:center;gap:16px;margin-top:12px;flex-shrink:0;}',
    '.pf-counter{font-size:12px;color:#94A3B8;font-weight:600;',
    'letter-spacing:.08em;min-width:42px;text-align:right;',
    "font-family:'Noto Sans KR',sans-serif;}",

    /* Dots */
    '.pf-dots{display:flex;gap:6px;align-items:center;}',
    '.pf-dot{width:7px;height:7px;border-radius:4px;',
    'background:#CBD5E1;cursor:pointer;border:none;padding:0;',
    'outline:none;transition:width .32s cubic-bezier(.4,0,.2,1),background .28s ease;}',
    '.pf-dot.active{width:26px;background:#2563EB;}',
    '.pf-dot:hover:not(.active){background:#94A3B8;}',

    /* Page transition keyframes */
    '@keyframes pfEnR{from{opacity:0;transform:translateX(50px)}to{opacity:1;transform:translateX(0)}}',
    '@keyframes pfEnL{from{opacity:0;transform:translateX(-50px)}to{opacity:1;transform:translateX(0)}}',
    '@keyframes pfExL{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(-60px)}}',
    '@keyframes pfExR{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(60px)}}',
    '.pf-enter-r{animation:pfEnR .42s cubic-bezier(.4,0,.2,1) both}',
    '.pf-enter-l{animation:pfEnL .42s cubic-bezier(.4,0,.2,1) both}',
    '.pf-exit-l{animation:pfExL .22s cubic-bezier(.4,0,.2,1) both}',
    '.pf-exit-r{animation:pfExR .22s cubic-bezier(.4,0,.2,1) both}',

    /* 첫 로드용 페이드업 (방향 정보 없을 때) */
    '@keyframes pfEnFade{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}',
    '.pf-enter-fade{animation:pfEnFade .45s cubic-bezier(.4,0,.2,1) both}'
  ].join('');
  document.head.appendChild(style);

  /* Light overlay — prevents flash of unstyled layout */
  var overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:#EEF2F7;z-index:99999;transition:opacity .3s ease;';
  document.body.appendChild(overlay);

  /* ── SYNC: preconnect to CDN domains ───────────────── */
  ['https://fonts.googleapis.com','https://fonts.gstatic.com',
   'https://cdnjs.cloudflare.com','https://cdn.jsdelivr.net',
   'https://cdn.tailwindcss.com'].forEach(function (origin) {
    var l = document.createElement('link');
    l.rel = 'preconnect'; l.href = origin; l.crossOrigin = '';
    document.head.appendChild(l);
  });

  /* ── DOM READY: build shell ─────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    var slideEl = document.querySelector('#slide-container, .slide-container');
    if (!slideEl) { overlay.remove(); return; }

    var idx = getCurrentIndex();

    /* ── Prefetch adjacent pages immediately ──────────── */
    /* 현재 페이지 로드 직후, 앞뒤 + 그 다음 페이지까지 백그라운드 다운로드 */
    [idx - 1, idx + 1, idx + 2].forEach(function (i) {
      if (i >= 0 && i < N) {
        var l = document.createElement('link');
        l.rel = 'prefetch'; l.as = 'document'; l.href = PAGES[i];
        document.head.appendChild(l);
      }
    });

    /* Canvas */
    var canvas = document.createElement('div');
    canvas.className = 'pf-canvas';
    canvas.id = 'pfCanvas';
    canvas.appendChild(slideEl);

    /* Viewport */
    var vp = document.createElement('div');
    vp.className = 'pf-vp';
    vp.id = 'pfVp';
    vp.appendChild(canvas);

    /* Prev button */
    var prevBtn = document.createElement('button');
    prevBtn.className = 'pf-btn';
    prevBtn.id = 'pfPrev';
    prevBtn.disabled = idx === 0;
    prevBtn.setAttribute('aria-label', '이전 슬라이드');
    prevBtn.innerHTML = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>';

    /* Next button */
    var nextBtn = document.createElement('button');
    nextBtn.className = 'pf-btn';
    nextBtn.id = 'pfNext';
    nextBtn.disabled = idx === N - 1;
    nextBtn.setAttribute('aria-label', '다음 슬라이드');
    nextBtn.innerHTML = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';

    /* Row */
    var row = document.createElement('div');
    row.className = 'pf-row';
    row.appendChild(prevBtn);
    row.appendChild(vp);
    row.appendChild(nextBtn);

    /* Counter */
    var counter = document.createElement('div');
    counter.className = 'pf-counter';
    counter.textContent = (idx + 1) + ' / ' + N;

    /* Dots */
    var dotsWrap = document.createElement('div');
    dotsWrap.className = 'pf-dots';
    PAGES.forEach(function (_, i) {
      var d = document.createElement('button');
      d.className = 'pf-dot' + (i === idx ? ' active' : '');
      d.title = '슬라이드 ' + (i + 1);
      (function (target) {
        d.addEventListener('click', function () {
          navigateTo(target, target > idx ? 1 : -1);
        });
      })(i);
      dotsWrap.appendChild(d);
    });

    /* Bottom row */
    var bottom = document.createElement('div');
    bottom.className = 'pf-bottom';
    bottom.appendChild(counter);
    bottom.appendChild(dotsWrap);

    /* Shell */
    var shell = document.createElement('div');
    shell.className = 'pf-shell';
    shell.appendChild(row);
    shell.appendChild(bottom);
    document.body.appendChild(shell);

    /* ── Enter animation ──────────────────────────────── */
    var dir = sessionStorage.getItem('pf_dir');
    sessionStorage.removeItem('pf_dir');
    if (dir === 'next')       canvas.classList.add('pf-enter-r');
    else if (dir === 'prev')  canvas.classList.add('pf-enter-l');
    else                      canvas.classList.add('pf-enter-fade'); // 직접 접근·새로고침

    /* ── Scale to viewport ────────────────────────────── */
    function applyScale() {
      var BTN_W = (46 + 18) * 2;
      var BOT_H = 13 + 34;
      var availW = Math.max(window.innerWidth  - BTN_W - 24, 320);
      var availH = Math.max(window.innerHeight - BOT_H - 24, 240);
      var scale  = Math.min(availW / 1280, availH / 720);
      canvas.style.transform = 'scale(' + scale + ')';
      vp.style.width  = Math.round(1280 * scale) + 'px';
      vp.style.height = Math.round(720  * scale) + 'px';
    }
    applyScale();
    window.addEventListener('resize', applyScale);

    /* ── Navigation ───────────────────────────────────── */
    function navigateTo(target, direction) {
      if (target < 0 || target >= N || target === idx) return;

      /* 이동 대상 페이지의 인접 페이지도 미리 prefetch */
      [target - 1, target + 1].forEach(function (i) {
        if (i >= 0 && i < N && i !== idx) {
          var l = document.createElement('link');
          l.rel = 'prefetch'; l.as = 'document'; l.href = PAGES[i];
          document.head.appendChild(l);
        }
      });

      canvas.classList.add(direction > 0 ? 'pf-exit-l' : 'pf-exit-r');
      sessionStorage.setItem('pf_dir', direction > 0 ? 'next' : 'prev');
      /* 애니메이션과 navigation을 거의 동시에 시작 — 체감 대기 최소화 */
      setTimeout(function () { location.href = PAGES[target]; }, 220);
    }

    prevBtn.addEventListener('click', function () { navigateTo(idx - 1, -1); });
    nextBtn.addEventListener('click', function () { navigateTo(idx + 1,  1); });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') navigateTo(idx + 1,  1);
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   navigateTo(idx - 1, -1);
    });

    /* ── 오버레이가 덮고 있는 동안 콘텐츠 요소를 미리 숨김 ── */
    /* → 오버레이 제거 후 요소가 이미 보이는 "스포" 현상 방지 */
    var contentEls = buildStaggerGroups(slideEl);

    /* ── 오버레이 페이드와 동시에 애니메이션 시작 ───────── */
    setTimeout(function () {
      overlay.style.opacity = '0';         /* 오버레이 퇴장 시작 */
      triggerStaggerAnimations(contentEls); /* 동시에 콘텐츠 등장 */
      triggerCountUp();                     /* 숫자 카운트업 */
      setTimeout(function () { overlay.remove(); }, 380);
    }, 80);
  });

  /* ── ① 콘텐츠 요소 수집 및 즉시 숨김 (오버레이 아래) ── */
  /* 모든 페이지 공통 data-object="true" 요소를 세로 위치 기준으로 그룹화 */
  function buildStaggerGroups(slideEl) {
    var els = Array.from(slideEl.querySelectorAll('[data-object="true"]'));
    if (els.length === 0) return [];

    /* top 값 기준 정렬 */
    els.sort(function (a, b) {
      return (parseInt(a.style.top) || 0) - (parseInt(b.style.top) || 0);
    });

    /* 세로 50px 이내는 같은 그룹 (동시 등장) */
    var groups = [];
    var group  = [];
    var lastTop = -9999;
    els.forEach(function (el) {
      var top = parseInt(el.style.top) || 0;
      if (top - lastTop > 50) {
        if (group.length) groups.push(group);
        group   = [el];
        lastTop = top;
      } else {
        group.push(el);
      }
    });
    if (group.length) groups.push(group);

    /* 오버레이가 덮고 있는 동안 즉시 숨김 → 스포 방지 */
    els.forEach(function (el) {
      el.style.opacity   = '0';
      el.style.transform = 'translateY(14px)';
      el.style.transition = 'none';
    });

    return groups;
  }

  /* ── ② 오버레이와 동시에 그룹별 순차 등장 ─────────────── */
  function triggerStaggerAnimations(groups) {
    if (!groups || groups.length === 0) return;
    groups.forEach(function (group, gi) {
      var delay = gi * 70; /* 그룹 간 70ms 간격 */
      group.forEach(function (el) {
        el.style.transition =
          'opacity .5s ease ' + delay + 'ms,' +
          'transform .5s cubic-bezier(.4,0,.2,1) ' + delay + 'ms';
        /* 한 프레임 뒤에 목표값 적용 → transition 발동 보장 */
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            el.style.opacity   = '1';
            el.style.transform = 'translateY(0)';
          });
        });
      });
    });
  }

  /* ── ③ 숫자 카운트업 ─────────────────────────────────── */
  function triggerCountUp() {
    ['.stat-value', '.metric-value', '.number-value'].forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el) {
        if (el.dataset.pfCounted) return;
        var text  = el.textContent.trim();
        var match = text.match(/^([\d,]+(?:\.\d+)?)/);
        if (!match) return;
        var raw = parseFloat(match[1].replace(/,/g, ''));
        if (isNaN(raw) || raw <= 0) return;
        el.dataset.pfCounted = '1';
        var suffix = text.slice(match[0].length);
        var isInt  = (raw === Math.floor(raw));
        var t0     = performance.now();
        (function tick(now) {
          var p   = Math.min((now - t0) / 1100, 1);
          var val = raw * (1 - Math.pow(1 - p, 3));
          el.textContent = (isInt ? Math.round(val).toLocaleString() : val.toFixed(1)) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        })(performance.now());
      });
    });
  }

})();
