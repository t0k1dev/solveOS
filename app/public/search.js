(function () {
  var input = document.getElementById('search-input');
  var results = document.getElementById('search-results');
  if (!input || !results) return;

  var index = null;
  var focused = -1;

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

  function render(matches, term) {
    focused = -1;
    if (!term || term.length < 2) {
      results.hidden = true;
      results.innerHTML = '';
      return;
    }
    if (matches.length === 0) {
      results.innerHTML = '<p class="search-empty">No results for "' + escHtml(term) + '"</p>';
      results.hidden = false;
      return;
    }
    results.innerHTML = matches.map(function (p, i) {
      return (
        '<a class="search-result-item" href="' + p.url + '" data-idx="' + i + '">' +
        '<div class="search-result-title">' + escHtml(p.title) + '</div>' +
        '<div class="search-result-section">' + escHtml(p.section) + '</div>' +
        '<div class="search-result-excerpt">' + escHtml(p.excerpt) + '</div>' +
        '</a>'
      );
    }).join('');
    results.hidden = false;
  }

  function escHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function getItems() {
    return results.querySelectorAll('.search-result-item');
  }

  function setFocus(n) {
    var items = getItems();
    if (!items.length) return;
    if (focused >= 0 && focused < items.length) items[focused].classList.remove('focused');
    focused = Math.max(0, Math.min(n, items.length - 1));
    items[focused].classList.add('focused');
    items[focused].scrollIntoView({ block: 'nearest' });
  }

  input.addEventListener('input', function () {
    var term = input.value.trim();
    loadIndex(function () {
      render(query(term), term);
    });
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
})();
