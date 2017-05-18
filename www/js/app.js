(function() {

  'use strict';

  var obj = {};
  var store = [];

  Function.prototype.render = function(obj) {

    if (typeof obj === "object") {
      store.push(obj);
    }
  };

  function init(el) {
    if (el) {
      for (var i in store) {
        if (store.hasOwnProperty(i)) {
          if (store[i][el]) {
            store[i][el]();
          }
        }
      }
    }
  };

  function helper(e) {
    var route = document.getElementById('views');
    var currentUrl = e;
    var el = currentUrl.substring(currentUrl.indexOf('#') + 2);
    if (el.trim() != 0) {
      var a = document.getElementById(el);
      var node = document.createElement('div');
      node.innerHTML = a.firstChild.textContent;
      route.removeChild(route.firstChild);
      route.appendChild(node);
      init(el);
    }
  }

  function router() {
    window.addEventListener('load', function(e) {
      window.location.href = window.location.origin + "/#/logowanie";
      helper(window.location.origin + "/#/logowanie");
      window.loged = "";
    }, false)
    window.addEventListener("hashchange", function(e) {
      helper(e.newURL);
    }, false);
  }
  router();

})();
