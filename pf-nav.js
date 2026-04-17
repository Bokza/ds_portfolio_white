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
    'body{background:#0B1120!important;}',

    /* Shell */
    '.pf-shell{position:fixed;inset:0;display:flex;flex-direction:column;',
    'align-items:center;justify-content:center;background:#0B1120;',
    'overflow:hidden;z-index:9000;}',

    /* Row */
    '.pf-row{display:flex;align-items:center;gap:18px;flex-shrink:0;}',

    /* Viewport clips the scaled canvas */
    '.pf-vp{overflow:hidden;flex-shrink:0;border-radius:8px;',
    'box-shadow:0 30px 80px rgba(0,0,0,.6),0 0 0 1px rgba(255,255,255,.06);}',

    /* Canvas — JS applies scale transform */
    '.pf-canvas{width:1280px;height:720px;position:relative;',
    'transform-origin:top left;flex-shrink:0;}',

    /* Nav buttons */
    '.pf-btn{width:46px;height:46px;border-radius:50%;',
    'background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.13);',
    'color:rgba(255,255,255,.75);cursor:pointer;display:flex;',
    'align-items:center;justify-content:center;flex-shrink:0;outline:none;',
    'transition:background .2s,transform .15s,opacity .25s;user-select:none;}',
    '.pf-btn:hover:not(:disabled){background:rgba(255,255,255,.16);',
    'border-color:rgba(255,255,255,.3);transform:scale(1.08);}',
    '.pf-btn:active:not(:disabled){transform:scale(.93);}',
    '.pf-btn:disabled{opacity:.18;cursor:not-allowed;}',

    /* Bottom row */
    '.pf-bottom{display:flex;align-items:center;gap:20px;margin-top:13px;flex-shrink:0;}',
    '.pf-counter{font-size:12px;color:rgba(255,255,255,.3);font-weight:600;',
    'letter-spacing:.08em;min-width:46px;text-align:right;',
    "font-family:'Noto Sans KR',sans-serif;}",

    /* Dots */
    '.pf-dots{display:flex;gap:6px;align-items:center;}',
    '.pf-dot{width:7px;height:7px;border-radius:4px;',
    'background:rgba(255,255,255,.22);cursor:pointer;border:none;padding:0;',
    'outline:none;transition:width .32s cubic-bezier(.4,0,.2,1),background .28s ease;}',
    '.pf-dot.active{width:26px;background:#3B82F6;}',
    '.pf-dot:hover:not(.active){background:rgba(255,255,255,.5);}',

    /* Page transition keyframes */
    '@keyframes pfEnR{from{opacity:0;transform:translateX(55px)}to{opacity:1;transform:translateX(0)}}',
    '@keyframes pfEnL{from{opacity:0;transform:translateX(-55px)}to{opacity:1;transform:translateX(0)}}',
    '@keyframes pfExL{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(-65px)}}',
    '@keyframes pfExR{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(65px)}}',
    '.pf-enter-r{animation:pfEnR .44s cubic-bezier(.4,0,.2,1) both}',
    '.pf-enter-l{animation:pfEnL .44s cubic-bezier(.4,0,.2,1) both}',
    '.pf-exit-l{animation:pfExL .32s cubic-bezier(.4,0,.2,1) both}',
    '.pf-exit-r{animation:pfExR .32s cubic-bezier(.4,0,.2,1) both}',

    /* Content animations */
    '@keyframes pfFadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}',
    '._pf-up{animation:pfFadeUp .5s cubic-bezier(.4,0,.2,1) both}'
  ].join('');
  document.head.appendChild(style);

  /* Dark overlay — prevents flash of unstyled layout */
  var overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:#0B1120;z-index:99999;transition:opacity .35s ease;';
  document.body.appendChild(overlay);

  /* ── DOM READY: build shell ─────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    var slideEl = document.querySelector('#slide-container, .slide-container');
    if (!slideEl) { overlay.remove(); return; }

    var idx = getCurrentIndex();

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
    if (dir === 'next')  canvas.classList.add('pf-enter-r');
    else if (dir === 'prev') canvas.classList.add('pf-enter-l');

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
      canvas.classList.add(direction > 0 ? 'pf-exit-l' : 'pf-exit-r');
      sessionStorage.setItem('pf_dir', direction > 0 ? 'next' : 'prev');
      setTimeout(function () { location.href = PAGES[target]; }, 350);
    }

    prevBtn.addEventListener('click', function () { navigateTo(idx - 1, -1); });
    nextBtn.addEventListener('click', function () { navigateTo(idx + 1,  1); });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') navigateTo(idx + 1,  1);
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   navigateTo(idx - 1, -1);
    });

    /* ── Reveal & content animations ─────────────────── */
    setTimeout(function () {
      overlay.style.opacity = '0';
      setTimeout(function () {
        overlay.remove();
        triggerContentAnimations();
      }, 360);
    }, 60);
  });

  /* ── Number countUp ─────────────────────────────────── */
  function countUp(el, target, suffix, duration) {
    var isInt = (target === Math.floor(target));
    var t0 = performance.now();
    function tick(now) {
      var p    = Math.min((now - t0) / duration, 1);
      var ease = 1 - Math.pow(1 - p, 3);
      var val  = target * ease;
      el.textContent = (isInt ? Math.round(val).toLocaleString() : val.toFixed(1)) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ── Per-page content animations ───────────────────── */
  function triggerContentAnimations() {
    /* ① Number countUp */
    ['.stat-value', '.metric-value', '.number-value'].forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el) {
        if (el.dataset.pfCounted) return;
        var text  = el.textContent.trim();
        var match = text.match(/^([\d,]+(?:\.\d+)?)/);
        if (!match) return;
        var raw = parseFloat(match[1].replace(/,/g, ''));
        if (isNaN(raw) || raw <= 0) return;
        el.dataset.pfCounted = '1';
        countUp(el, raw, text.slice(match[0].length), 1100);
      });
    });

    /* ② Card / section fade-in-up */
    var delay = 80;
    [
      '.project-card', '.timeline-item', '.skill-bar-wrapper',
      '.metric-card',  '.stat-card',     '.glass-panel'
    ].forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el) {
        if (el.dataset.pfFaded) return;
        el.dataset.pfFaded = '1';
        el.style.opacity = '0';
        (function (d) {
          setTimeout(function () {
            el.style.opacity = '';
            el.style.animationDelay = d + 'ms';
            el.classList.add('_pf-up');
          }, 120);
        })(delay);
        delay += 55;
      });
    });

    /* ③ Progress bar fill */
    document.querySelectorAll('[class*="bar-fill"],[class*="progress-fill"]').forEach(function (el) {
      if (el.dataset.pfBar) return;
      el.dataset.pfBar = '1';
      var tw = el.style.width;
      el.style.width = '0%';
      el.style.transition = 'width 1s cubic-bezier(.4,0,.2,1)';
      setTimeout(function () { el.style.width = tw; }, 200);
    });
  }

})();
