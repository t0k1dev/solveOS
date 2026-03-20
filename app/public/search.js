(function () {
  var index = null;

  function loadIndex(cb) {
    if (index) { cb(); return; }
    fetch('/search-index.json')
      .then(function (r) { return r.json(); })
      .then(function (data) { index = data; cb(); })
      .catch(function () { index = []; cb(); });
  }

  function query(term) {
    if (!term || term.length < 2) return [];
    var t = term.toLowerCase();
    return (index || []).filter(function (p) {
      return (
        p.title.toLowerCase().indexOf(t) !== -1 ||
        (p.section && p.section.toLowerCase().indexOf(t) !== -1) ||
        (p.excerpt && p.excerpt.toLowerCase().indexOf(t) !== -1) ||
        (p.keywords && p.keywords.toLowerCase().indexOf(t) !== -1)
      );
    });
  }

  function escHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function buildItems(matches, term) {
    if (!term || term.length < 2) return null; // nothing to show
    if (matches.length === 0) {
      return '<p class="search-empty">No results for "' + escHtml(term) + '"</p>';
    }
    return matches.map(function (p, i) {
      return (
        '<a class="search-result-item" href="' + p.url + '" data-idx="' + i + '">' +
        '<div class="search-result-title">' + escHtml(p.title) + '</div>' +
        '<div class="search-result-section">' + escHtml(p.section) + '</div>' +
        '<div class="search-result-excerpt">' + escHtml(p.excerpt) + '</div>' +
        '</a>'
      );
    }).join('');
  }

  // ── Desktop search ──────────────────────────────────────
  var input = document.getElementById('search-input');
  var results = document.getElementById('search-results');

  if (input && results) {
    var focused = -1;

    function getItems() { return results.querySelectorAll('.search-result-item'); }

    function setFocus(n) {
      var items = getItems();
      if (!items.length) return;
      if (focused >= 0 && focused < items.length) items[focused].classList.remove('focused');
      focused = Math.max(0, Math.min(n, items.length - 1));
      items[focused].classList.add('focused');
      items[focused].scrollIntoView({ block: 'nearest' });
    }

    function render(matches, term) {
      focused = -1;
      var html = buildItems(matches, term);
      if (html === null) {
        results.hidden = true;
        results.innerHTML = '';
        return;
      }
      results.innerHTML = html;
      results.hidden = false;
    }

    input.addEventListener('input', function () {
      var term = input.value.trim();
      loadIndex(function () { render(query(term), term); });
    });

    input.addEventListener('keydown', function (e) {
      var items = getItems();
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (!results.hidden && items.length) setFocus(focused + 1);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (!results.hidden && items.length) setFocus(focused - 1);
      } else if (e.key === 'Enter') {
        if (!results.hidden && focused >= 0 && focused < items.length) {
          e.preventDefault();
          window.location.href = items[focused].href;
        }
      } else if (e.key === 'Escape') {
        results.hidden = true;
        results.innerHTML = '';
        input.blur();
      }
    });

    document.addEventListener('click', function (e) {
      if (!results.contains(e.target) && e.target !== input) {
        results.hidden = true;
      }
    });
  }

  // ── Mobile search (modal) ───────────────────────────────
  var mobileInput = document.getElementById('search-input-mobile');
  var mobileResults = document.getElementById('search-results-mobile');

  if (mobileInput && mobileResults) {
    var mFocused = -1;

    function getMItems() { return mobileResults.querySelectorAll('.search-result-item'); }

    function mSetFocus(n) {
      var items = getMItems();
      if (!items.length) return;
      if (mFocused >= 0 && mFocused < items.length) items[mFocused].classList.remove('focused');
      mFocused = Math.max(0, Math.min(n, items.length - 1));
      items[mFocused].classList.add('focused');
      items[mFocused].scrollIntoView({ block: 'nearest' });
    }

    function mRender(matches, term) {
      mFocused = -1;
      var html = buildItems(matches, term);
      if (html === null) {
        mobileResults.innerHTML = '';
        return;
      }
      mobileResults.innerHTML = html;
    }

    mobileInput.addEventListener('input', function () {
      var term = mobileInput.value.trim();
      loadIndex(function () { mRender(query(term), term); });
    });

    mobileInput.addEventListener('keydown', function (e) {
      var items = getMItems();
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (items.length) mSetFocus(mFocused + 1);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (items.length) mSetFocus(mFocused - 1);
      } else if (e.key === 'Enter') {
        if (mFocused >= 0 && mFocused < items.length) {
          e.preventDefault();
          window.location.href = items[mFocused].href;
        }
      }
    });
  }
})();
