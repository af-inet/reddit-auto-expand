(function () {
  if (typeof window.___REDDIT_AUTO_EXPAND === "undefined") {
    window.___REDDIT_AUTO_EXPAND = false;
    window.___REDDIT_AUTO_EXPAND_ENABLED = false;
  }
  var expandFunc = function () {
    if (window.___REDDIT_AUTO_EXPAND_ENABLED) {
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
  console.log(
    "reddit-expand: " + " ENABLED=" + window.___REDDIT_AUTO_EXPAND_ENABLED
  );
})();
