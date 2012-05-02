(function(window) {
  var cache = {};
  window.require = require;

  function require(file) {
    if(!cache['file']) {
      var req = new XMLHttpRequest();
      req.open("GET", "/"+file+'.js',false);
      req.send();
      if (req.status === 200) {
        window.exports = {};
        var e = eval(req.responseText);
        cache[file] = {};
        for(var i in window.exports) {
           cache[file][i] = window.exports[i];
        }
        window.exports  = {};
      }
    }
    return cache[file];
  };

})(window);
