(function () {
  window.___REDDIT_AUTO_EXPAND = false;
  window.___REDDIT_AUTO_EXPAND_ENABLED = true;

  var expandFunc = function () {
    if (autoExpand) {
      for (const e of document.getElementsByClassName(
        "expando-button hide-when-pinned video collapsed"
      )) {
        e.click();
      }
    }
  };

  var toggleFunc = function () {
    window.___REDDIT_AUTO_EXPAND_ENABLED =
      !window.___REDDIT_AUTO_EXPAND_ENABLED;
  };

  if (!window.___REDDIT_AUTO_EXPAND) {
    window.___REDDIT_AUTO_EXPAND = true;
    setInterval(expandFunc, 500);
  } else {
    toggleFunc();
  }
})();
