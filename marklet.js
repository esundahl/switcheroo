(function() {
  var ToggleEnvironment, toggle,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  ToggleEnvironment = (function() {

    function ToggleEnvironment() {
      this.tryReady = __bind(this.tryReady, this);      this.url = window.location;
      this.hostname = window.location.hostname;
      this.script = document.createElement("script");
      this.loadjQuery();
    }

    ToggleEnvironment.prototype.loadjQuery = function() {
      if (typeof jQuery === "undefined") {
        this.script.type = "text/javascript";
        this.script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js";
        document.body.appendChild(this.script);
      }
      return this.tryReady();
    };

    ToggleEnvironment.prototype.tryReady = function() {
      if (typeof jQuery === "undefined") {
        setTimeout(this.tryReady, 200);
      } else {
        this.getConfig();
      }
      return console.log("Waiting for jQuery");
    };

    ToggleEnvironment.prototype.getConfig = function() {
      var _this = this;
      return jQuery.getJSON('/environments.json', function(data) {
        return _this.toggle(data);
      });
    };

    ToggleEnvironment.prototype.toggle = function(data) {
      var environment, i, next, _ref, _results;
      _ref = data[0].environments;
      _results = [];
      for (i in _ref) {
        environment = _ref[i];
        if (environment === this.hostname) {
          next = parseInt(i) + 1;
          if (!(next < data[0].environments.length)) next = 0;
          _results.push(window.location.hostname = data[0].environments[next]);
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    return ToggleEnvironment;

  })();

  toggle = new ToggleEnvironment();

}).call(this);
