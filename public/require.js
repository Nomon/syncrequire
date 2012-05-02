(function(window) {
  var cache = {};
  window.require = require;

  function require(file) {
    if(!cache[file]) {
      var req = new XMLHttpRequest();
      req.open("GET", "/"+file+'.js',false);
      req.send();
      if (req.status === 200) {
	var module = {exports:{}};
	var exports = module.exports;
        var e = eval(req.responseText);
        cache[file] = module.exports;
      }
    }
    return cache[file];
  };

})(window);
