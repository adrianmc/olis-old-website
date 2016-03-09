(function() {
  'use strict';

  var globals = typeof window === 'undefined' ? global : window;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var aliases = {};
  var has = ({}).hasOwnProperty;

  var unalias = function(alias, loaderPath) {
    var result = aliases[alias] || aliases[alias + '/index.js'];
    return result || alias;
  };

  var _reg = /^\.\.?(\/|$)/;
  var expand = function(root, name) {
    var results = [], part;
    var parts = (_reg.test(name) ? root + '/' + name : name).split('/');
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function expanded(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var require = function(name, loaderPath) {
    if (loaderPath == null) loaderPath = '/';
    var path = unalias(name, loaderPath);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has.call(cache, dirIndex)) return cache[dirIndex].exports;
    if (has.call(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '" from ' + '"' + loaderPath + '"');
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  require.register = require.define = function(bundle, fn) {
    if (typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          require.register(key, bundle[key]);
        }
      }
    } else {
      modules[bundle] = fn;
    }
  };

  require.list = function() {
    var result = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        result.push(item);
      }
    }
    return result;
  };

  require.brunch = true;
  require._cache = cache;
  globals.require = require;
})();
require.register("components/App", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Top = require('./Top');

var _Top2 = _interopRequireDefault(_Top);

var _MainMockup = require('./MainMockup');

var _MainMockup2 = _interopRequireDefault(_MainMockup);

var _Problems = require('./Problems');

var _Problems2 = _interopRequireDefault(_Problems);

var _Benefits = require('./Benefits');

var _Benefits2 = _interopRequireDefault(_Benefits);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'content' },
        _react2.default.createElement(_Top2.default, null),
        _react2.default.createElement(_Problems2.default, null),
        _react2.default.createElement(_MainMockup2.default, null),
        _react2.default.createElement(_Benefits2.default, null),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;
});

;require.register("components/Benefits", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    "div",
    { id: "benefits" },
    _react2.default.createElement(
      "div",
      { id: "curious" },
      _react2.default.createElement(
        "div",
        { className: "row nopadding of" },
        _react2.default.createElement(
          "div",
          { className: "col-md-5 col-md-offset-right-1 pull-right-lg centered" },
          _react2.default.createElement(
            "a",
            { href: "./img/overall.png", "data-lightbox": "feature-shots", "data-title": "Instantly translate chat messages.", className: "img-responsive" },
            _react2.default.createElement("img", { src: "./img/overall.png", className: "img-responsive feature-pic", alt: "", "data-effect": "slide-right" })
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "col-md-5 col-md-offset-1 mt-md" },
          _react2.default.createElement(
            "h3",
            null,
            "The Notepad"
          ),
          _react2.default.createElement(
            "p",
            null,
            "The Notepad is a collaborative document for your conversations."
          ),
          _react2.default.createElement(
            "p",
            null,
            "You can easily work your teammates to generate efficient meeting minutes."
          ),
          _react2.default.createElement(
            "p",
            null,
            "You can add tasks and assign them to people."
          ),
          _react2.default.createElement(
            "p",
            null,
            "You can add comments to sections that you aren't sure of."
          )
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "more-features" },
        _react2.default.createElement(
          "a",
          { className: "waves-effect waves-teal btn-flat link" },
          "Learn more about our other features!"
        )
      )
    )
  );
};
});

;require.register("components/ContactCard", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var _ref$name = _ref.name;
  var name = _ref$name === undefined ? 'Nicky Cage' : _ref$name;
  var _ref$text = _ref.text;
  var text = _ref$text === undefined ? 'How\'d it get burned!?' : _ref$text;
  return _react2.default.createElement(
    'div',
    { className: 'contact' },
    _react2.default.createElement('img', {
      src: 'http://www.placecage.com/200/300',
      className: 'contact img-circle img-responsive'
    }),
    _react2.default.createElement(
      'h5',
      null,
      name
    ),
    _react2.default.createElement(
      'p',
      null,
      text
    )
  );
};
});

;require.register("components/CreateAccount", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    "div",
    { id: "create-account" },
    _react2.default.createElement(
      "a",
      { className: "waves-effect waves-light btn pink accent-2" },
      "Get on the waiting list!"
    )
  );
};
});

;require.register("components/Footer", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Team = require('./Team');

var _Team2 = _interopRequireDefault(_Team);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'footer',
    { className: 'page-footer' },
    _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(_Team2.default, null)
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col l6 s12' },
          _react2.default.createElement(
            'h5',
            null,
            'About Olis'
          ),
          _react2.default.createElement(
            'p',
            null,
            'The Olis team is composed of technology experts from San Francisco, Toronto, and Hong Kong. Olis is committed to empowering companies in Asia with the tools to be more productive.'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col l4 offset-l2 s12' },
          _react2.default.createElement(
            'h5',
            null,
            'Contact Info'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Unit 8, 3/f, Yue Fung Industrial Building',
            _react2.default.createElement('br', null),
            '35-45 Chai Wan Kok Street',
            _react2.default.createElement('br', null),
            'Tsuen Wan, Hong Kong',
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'a',
              { href: 'mailto:info@OlisApp.com' },
              'info@OlisApp.com'
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'footer-copyright' },
      _react2.default.createElement(
        'div',
        { className: 'container' },
        '© 2016 OlisApp'
      )
    )
  );
};
});

;require.register("components/Languages", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { className: 'lang-links' },
    _react2.default.createElement(
      'a',
      {
        className: 'dropdown-button btn-flat',
        href: '#',
        'data-activates': 'dropdown1',
        'data-beloworigin': 'true',
        'data-constrainwidth': 'false'
      },
      'En'
    ),
    _react2.default.createElement(
      'ul',
      { id: 'dropdown1', className: 'dropdown-content' },
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '#', className: 'grey-text' },
          '繁體中文'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '#', className: 'grey-text' },
          '简体中文'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '#', className: 'grey-text' },
          '한국어'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '#', className: 'grey-text' },
          '日本語'
        )
      )
    )
  );
};
});

;require.register("components/MainMockup", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    "div",
    { id: "main-mockup" },
    _react2.default.createElement(
      "div",
      { className: "text" },
      _react2.default.createElement(
        "h2",
        null,
        "Olis to the rescue."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Using the notepad, you can be on the same page as your teammates. Keep your chats and notes in the same place. Summarize your meetings into minutes. Assign tasks. Brainstorm. Don't get bogged down by chat."
      )
    ),
    _react2.default.createElement("img", {
      src: "./img/overall.png",
      className: "img-responsive aligncenter",
      alt: "",
      "data-effect": "slide-bottom"
    })
  );
};
});

;require.register("components/Problem", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var text = _ref.text;
  var iconName = _ref.iconName;
  return _react2.default.createElement(
    "div",
    { className: "problem col s12 m3 l3" },
    _react2.default.createElement("i", { className: "icon " + iconName }),
    _react2.default.createElement(
      "p",
      null,
      text
    )
  );
};
});

;require.register("components/Problems", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Problem = require('./Problem');

var _Problem2 = _interopRequireDefault(_Problem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { id: 'problems' },
    _react2.default.createElement(
      'div',
      { className: 'list row' },
      _react2.default.createElement(
        'div',
        { className: 'col s12 m3 l3 header' },
        _react2.default.createElement(
          'h4',
          null,
          'Existing team chat software has problems.'
        )
      ),
      _react2.default.createElement(_Problem2.default, {
        text: 'You can get easily caught up in chatting all day.',
        iconName: 'ion-clock'
      }),
      _react2.default.createElement(_Problem2.default, {
        text: 'You can\'t find the relevant information easily.',
        iconName: 'ion-map'
      }),
      _react2.default.createElement(_Problem2.default, {
        text: 'Your voice gets drowned out in the crowd.',
        iconName: 'ion-heart-broken'
      })
    ),
    _react2.default.createElement(
      'a',
      { className: 'waves-effect waves-teal btn-flat' },
      'So why do I need a team chat solution?'
    )
  );
};
});

;require.register("components/SignIn", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    "div",
    { id: "sign-in" },
    _react2.default.createElement(
      "a",
      { className: "waves-effect waves-teal btn-flat" },
      "Sign In"
    )
  );
};
});

;require.register("components/Team", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ContactCard = require('./ContactCard');

var _ContactCard2 = _interopRequireDefault(_ContactCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { id: 'about-us' },
    _react2.default.createElement(
      'h5',
      null,
      'The Team'
    ),
    _react2.default.createElement(
      'div',
      { className: 'contact-list' },
      _react2.default.createElement(_ContactCard2.default, null),
      _react2.default.createElement(_ContactCard2.default, null),
      _react2.default.createElement(_ContactCard2.default, null)
    )
  );
};
});

;require.register("components/Top", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Languages = require('./Languages');

var _Languages2 = _interopRequireDefault(_Languages);

var _SignIn = require('./SignIn');

var _SignIn2 = _interopRequireDefault(_SignIn);

var _CreateAccount = require('./CreateAccount');

var _CreateAccount2 = _interopRequireDefault(_CreateAccount);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Top = function (_React$Component) {
  _inherits(Top, _React$Component);

  function Top() {
    _classCallCheck(this, Top);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Top).apply(this, arguments));
  }

  _createClass(Top, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'h' },
        _react2.default.createElement(
          'div',
          { id: 'top', className: 'row' },
          _react2.default.createElement(_Languages2.default, null),
          _react2.default.createElement(
            'div',
            { className: 'col-md-10 col-md-offset-1 mt' },
            _react2.default.createElement(
              'h1',
              { className: 'logo-text' },
              'Olis'
            ),
            _react2.default.createElement(
              'p',
              { className: 'one-liner' },
              'A simple way to communicate with your team without all of the noise.'
            ),
            _react2.default.createElement(
              'div',
              { className: 'long-desc' },
              _react2.default.createElement(
                'p',
                null,
                'Chat can get messy. Forget about the endless meetings where nothing ever gets done. Easily summarize and highlight the key takeaways from your conversations so you can get back to work quicker.'
              )
            )
          )
        ),
        _react2.default.createElement(_CreateAccount2.default, null),
        _react2.default.createElement(_SignIn2.default, null)
      );
    }
  }]);

  return Top;
}(_react2.default.Component);

exports.default = Top;
});

;require.register("initialize", function(exports, require, module) {
'use strict';

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _App = require('components/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  _reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.querySelector('#app'));
});
});


//# sourceMappingURL=app.js.map