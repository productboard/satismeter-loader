function createPlaceholder() {
  var q = [];
  function placeholder(/* ...arguments */) {
    q.push(arguments);
  };
  placeholder.q = q;

  return placeholder;
}

function satismeter(options) {
  if (!window.satismeter) {
    window.satismeter = createPlaceholder();

    var script = document.createElement("script");
    var parent = document.getElementsByTagName("script")[0].parentNode;
    script.async = 1;
    script.src = "https://app.satismeter.com/satismeter.js";
    parent.appendChild(script);
  }

  return window.satismeter(options);
}

module.exports = satismeter;
