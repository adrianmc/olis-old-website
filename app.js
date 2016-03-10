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
require.register("components/AboutUsPage", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NavBar = require('./NavBar');

var _NavBar2 = _interopRequireDefault(_NavBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_NavBar2.default, null),
    'About Us'
  );
};
});

;require.register("components/App", function(exports, require, module) {
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

;require.register("components/Benefit", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var _ref$textColor = _ref.textColor;
  var textColor = _ref$textColor === undefined ? 'primaryText' : _ref$textColor;
  var _ref$bgColor = _ref.bgColor;
  var bgColor = _ref$bgColor === undefined ? 'white' : _ref$bgColor;
  var image = _ref.image;
  return _react2.default.createElement(
    'div',
    { className: 'benefit-container ' + bgColor },
    _react2.default.createElement(
      'div',
      { className: 'benefit-text' },
      _react2.default.createElement(
        'h3',
        { className: '' + textColor },
        'What a great benefit!'
      ),
      _react2.default.createElement(
        'p',
        { className: '' + textColor },
        'This benefit is so great because it helps you do a lot of things and that\'s great because we all have a lot of things to do and the days are getting shorter and shorter and then you\'re dead.'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'benefit-img' },
      _react2.default.createElement(
        'a',
        { href: '../img/overall.png', 'data-lightbox': 'feature-shots', 'data-title': 'Instantly translate chat messages.', className: 'img-responsive' },
        _react2.default.createElement('img', { src: '../img/overall.png', className: 'img-responsive feature-pic', alt: '', 'data-effect': 'slide-right' })
      )
    )
  );
};
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
            "It's a collaborative document for your conversations. Keep your team aligned on the same page. Easily work with your teammates to generate meeting minutes and key takeaways and decisions. Add tasks and assign them to people. Add comments to sections that you want clarification on."
          )
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "more-features" },
        _react2.default.createElement(
          "a",
          { className: "waves-effect waves-teal btn-flat link", href: "/benefits" },
          "Learn more about what Olis can do for you"
        )
      )
    )
  );
};
});

;require.register("components/BenefitsPage", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NavBar = require('./NavBar');

var _NavBar2 = _interopRequireDefault(_NavBar);

var _Benefit = require('./Benefit');

var _Benefit2 = _interopRequireDefault(_Benefit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_NavBar2.default, null),
    _react2.default.createElement(_Benefit2.default, null),
    _react2.default.createElement(_Benefit2.default, null),
    _react2.default.createElement(_Benefit2.default, null),
    _react2.default.createElement(_Benefit2.default, null)
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
        _react2.default.createElement(
          'div',
          { className: 'col l6 s12' },
          _react2.default.createElement(
            'a',
            { className: 'grey-text text-lighten-3', href: '/problems' },
            'Why chat?'
          ),
          _react2.default.createElement(
            'a',
            { className: 'grey-text text-lighten-3', href: '/benefits' },
            'Benefits'
          ),
          _react2.default.createElement(
            'a',
            { className: 'grey-text text-lighten-3', href: '/about' },
            'About Us'
          )
        ),
        _react2.default.createElement('div', { className: 'col l4 offset-l2 s12' })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'footer-copyright' },
      _react2.default.createElement(
        'div',
        { className: 'container' },
        '© 2016 OlisApp ',
        _react2.default.createElement(
          'a',
          { href: '#', style: { paddingLeft: '10px' } },
          'Terms and conditions'
        )
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Language = function Language(_ref) {
  var _ref$language = _ref.language;
  var language = _ref$language === undefined ? 'Elvish' : _ref$language;
  var _ref$tooltipText = _ref.tooltipText;
  var tooltipText = _ref$tooltipText === undefined ? 'This is a tooltip.' : _ref$tooltipText;
  return _react2.default.createElement(
    'li',
    null,
    _react2.default.createElement(
      'a',
      { href: '#', className: 'grey-text tooltipped', 'data-position': 'left', 'data-delay': '50', 'data-tooltip': tooltipText },
      language
    )
  );
};

var Languages = function (_React$Component) {
  _inherits(Languages, _React$Component);

  function Languages() {
    _classCallCheck(this, Languages);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Languages).apply(this, arguments));
  }

  _createClass(Languages, [{
    key: 'render',
    value: function render() {
      var tooltipText = 'This language isn\'t available yet.';
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
          _react2.default.createElement(Language, { language: '繁體中文', tooltipText: tooltipText }),
          _react2.default.createElement(Language, { language: '简体中文', tooltipText: tooltipText }),
          _react2.default.createElement(Language, { language: '한국어', tooltipText: tooltipText }),
          _react2.default.createElement(Language, { language: '日本語', tooltipText: tooltipText })
        )
      );
    }
  }]);

  return Languages;
}(_react2.default.Component);

exports.default = Languages;
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
        "h3",
        null,
        "Make chat productive."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Using our integrated chat and notepad solution, everyone in the team can now be on the same page no matter where they left off."
      ),
      _react2.default.createElement(
        "p",
        null,
        "Keep your chats and notes in the same place. Summarize your meetings into minutes or easily log important points and decisions for everyone to see. Assign tasks or brainstorm ideas."
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

;require.register("components/NavBar", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Items = function Items() {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "li",
      null,
      _react2.default.createElement(
        "a",
        { href: "/problems" },
        "Why chat?"
      )
    ),
    _react2.default.createElement(
      "li",
      null,
      _react2.default.createElement(
        "a",
        { href: "/benefits" },
        "Benefits"
      )
    ),
    _react2.default.createElement(
      "li",
      null,
      _react2.default.createElement(
        "a",
        { href: "/about" },
        "About Us"
      )
    )
  );
};

exports.default = function () {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "div",
      { className: "navbar-fixed" },
      _react2.default.createElement(
        "nav",
        null,
        _react2.default.createElement(
          "div",
          { className: "nav-wrapper primaryBg" },
          _react2.default.createElement(
            "a",
            { href: "/", className: "brand-logo" },
            "Olis"
          ),
          _react2.default.createElement(
            "a",
            { href: "#", "data-activates": "mobile-demo", className: "button-collapse" },
            _react2.default.createElement(
              "i",
              { className: "material-icons" },
              "menu"
            )
          ),
          _react2.default.createElement(
            "ul",
            { className: "right hide-on-med-and-down" },
            _react2.default.createElement(Items, null)
          ),
          _react2.default.createElement(
            "ul",
            { className: "side-nav", id: "mobile-demo" },
            _react2.default.createElement(Items, null)
          )
        )
      )
    )
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
    { className: "problem" },
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
      { className: 'problems-and-header' },
      _react2.default.createElement(
        'div',
        { className: 'header' },
        _react2.default.createElement(
          'h4',
          null,
          'What\'s wrong with existing team chat apps?'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'problems-list' },
        _react2.default.createElement(_Problem2.default, {
          text: 'Needing to be engaged in the chat all day and not being able to catch up after you step away.',
          iconName: 'ion-clock'
        }),
        _react2.default.createElement(_Problem2.default, {
          text: 'Not being able to find the relevant take away information, highlights, or key decisions.',
          iconName: 'ion-map'
        }),
        _react2.default.createElement(_Problem2.default, {
          text: 'Lacking actionable results and next steps after chat.',
          iconName: 'ion-heart-broken'
        })
      )
    ),
    _react2.default.createElement(
      'a',
      { className: 'waves-effect waves-teal btn-flat', href: '/problems' },
      'So why do I need a team chat solution?'
    )
  );
};
});

;require.register("components/ProblemsPage", function(exports, require, module) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NavBar = require('./NavBar');

var _NavBar2 = _interopRequireDefault(_NavBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProblemsPage = function (_React$Component) {
  _inherits(ProblemsPage, _React$Component);

  function ProblemsPage() {
    _classCallCheck(this, ProblemsPage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ProblemsPage).apply(this, arguments));
  }

  _createClass(ProblemsPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'g' },
        _react2.default.createElement(_NavBar2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'row nopadding' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-6 col-md-offset-3 centered mt' },
            _react2.default.createElement(
              'h1',
              null,
              'So why do I need a team chat solution?'
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement('div', { className: 'small-seg grey-bg' }),
              _react2.default.createElement('div', { className: 'small-seg grey-bg' }),
              _react2.default.createElement('div', { className: 'small-seg grey-bg' }),
              _react2.default.createElement('div', { className: 'small-seg grey-bg' }),
              _react2.default.createElement('div', { className: 'small-seg grey-bg' })
            ),
            _react2.default.createElement(
              'p',
              null,
              'Even the best companies are unproductive.'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row nopadding of' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-5 col-md-offset-1 centered mt data-text', 'data-effect': 'slide-left' },
            _react2.default.createElement(
              'h2',
              null,
              'At least ',
              _react2.default.createElement(
                'span',
                { className: 'lg-text spice1', 'data-effect': 'slide-bottom' },
                '40%'
              ),
              ' of time at work is unproductive'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-5 centered mt', 'data-effect': 'slide-right' },
            _react2.default.createElement(
              'h2',
              null,
              _react2.default.createElement('i', { className: 'ion-clock lg-text' }),
              _react2.default.createElement('br', null),
              'WASTED TIME'
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement('div', { className: 'small-seg spice1-bg' }),
              _react2.default.createElement('div', { className: 'small-seg spice1-bg' }),
              _react2.default.createElement('div', { className: 'small-seg spice1-bg' })
            ),
            _react2.default.createElement(
              'p',
              null,
              'People can seem busy for hours at a time. But how much of that is actually productive work?'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row nopadding of' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-5 col-md-offset-1 col-md-push-5 centered mt data-text', 'data-effect': 'slide-right' },
            _react2.default.createElement(
              'h2',
              null,
              'It takes ',
              _react2.default.createElement(
                'span',
                { className: 'lg-text spice2', 'data-effect': 'slide-bottom' },
                '16'
              ),
              ' minutes for workers to refocus after email alerts'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-5 col-md-pull-5 centered mt', 'data-effect': 'slide-left' },
            _react2.default.createElement(
              'h2',
              null,
              _react2.default.createElement('i', { className: 'ion-email lg-text' }),
              _react2.default.createElement('br', null),
              'EXCESSIVE EMAILS'
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement('div', { className: 'small-seg spice2-bg' }),
              _react2.default.createElement('div', { className: 'small-seg spice2-bg' }),
              _react2.default.createElement('div', { className: 'small-seg spice2-bg' })
            ),
            _react2.default.createElement(
              'p',
              null,
              'Workers check their email ',
              _react2.default.createElement(
                'strong',
                null,
                '35 times'
              ),
              ' per hour. Think about how much money is lost due to these interruptions.'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row nopadding of' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-5 col-md-offset-1 centered mt data-text', 'data-effect': 'slide-left' },
            _react2.default.createElement(
              'h2',
              null,
              'Up to ',
              _react2.default.createElement(
                'span',
                { className: 'lg-text spice5', 'data-effect': 'slide-bottom' },
                '80%'
              ),
              ' of all interruptions are considered trivial'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-5 centered mt', 'data-effect': 'slide-right' },
            _react2.default.createElement(
              'h2',
              null,
              _react2.default.createElement('i', { className: 'ion-arrow-graph-down-right lg-text' }),
              _react2.default.createElement('br', null),
              'CONSTANT INTERRUPTION'
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement('div', { className: 'small-seg spice5-bg' }),
              _react2.default.createElement('div', { className: 'small-seg spice5-bg' }),
              _react2.default.createElement('div', { className: 'small-seg spice5-bg' })
            ),
            _react2.default.createElement(
              'p',
              null,
              'Emails, phone calls, and other disruptions often derail a worker\'s productivity constantly throughout the workday.'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row nopadding of' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-5 col-md-offset-1 col-md-push-5 centered mt data-text', 'data-effect': 'slide-right' },
            _react2.default.createElement(
              'h2',
              null,
              _react2.default.createElement(
                'span',
                { className: 'lg-text spice3', 'data-effect': 'slide-bottom' },
                '39%'
              ),
              ' of workers fall asleep during meetings'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-5 col-md-pull-5 centered mt', 'data-effect': 'slide-left' },
            _react2.default.createElement(
              'h2',
              null,
              _react2.default.createElement('i', { className: 'ion-chatboxes lg-text' }),
              _react2.default.createElement('br', null),
              'INEFFECTIVE MEETINGS'
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement('div', { className: 'small-seg spice3-bg' }),
              _react2.default.createElement('div', { className: 'small-seg spice3-bg' }),
              _react2.default.createElement('div', { className: 'small-seg spice3-bg' })
            ),
            _react2.default.createElement(
              'p',
              null,
              'Half of all meetings is considered useless. The average worker spends ',
              _react2.default.createElement(
                'strong',
                null,
                '31 hours a month'
              ),
              ' in meetings. That\'s at least ',
              _react2.default.createElement(
                'strong',
                null,
                '12 hours sleeping'
              ),
              ' on the job!'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row nopadding' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-6 col-md-offset-3 centered mtb2' },
            _react2.default.createElement(
              'h2',
              null,
              'WHAT DOES THIS ALL MEAN?'
            ),
            _react2.default.createElement(
              'div',
              { className: 'lg-text spice4', 'data-effect': 'slide-bottom' },
              '37 Billion'
            ),
            _react2.default.createElement(
              'h4',
              null,
              'US Dollars Lost Per Year'
            ),
            _react2.default.createElement(
              'p',
              null,
              'And that\'s only in the United States alone.'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { id: 'problem-page-link-out', className: 'center' },
          _react2.default.createElement(
            'a',
            { className: 'waves-effect waves-light btn pink accent-2', href: '/' },
            'Find out how Olis can help'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row nopadding no-margin-bot' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-8 col-md-offset-2 centered' },
            _react2.default.createElement(
              'p',
              { className: 'view-sources' },
              'Sources'
            ),
            _react2.default.createElement(
              'div',
              { className: 'sources' },
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'a',
                  { href: 'http://emailstatcenter.com/Usage.html' },
                  'Email Usage/Penetrations'
                ),
                ' • EmailStatCounter'
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'a',
                  { href: 'http://www.ics.uci.edu/~gmark/Home_page/Research_files/CHI%202012.pdf' },
                  'A Pace Not Dictated by Electrons'
                ),
                ' • University of California'
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'a',
                  { href: 'http://research.microsoft.com/en-us/um/people/horvitz/chi_2007_iqbal_horvitz.pdf' },
                  'Disruption and Recovery of Computing Tasks'
                ),
                ' • Microsoft Research'
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'a',
                  { href: 'http://news.bbc.co.uk/1/hi/uk/4471607.stm' },
                  '\'Infomania\' worse than marijuana'
                ),
                ' • BBC News'
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'a',
                  { href: 'https://e-meetings.verizonbusiness.com/global/en/meetingsinamerica/uswhitepaper.php' },
                  'Meetings in America'
                ),
                ' • Verizon Business'
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'a',
                  { href: 'http://www.effectivemeetings.com/meetingbasics/meetstate.asp' },
                  'State of Meetings Today'
                ),
                ' • EffectiveMeetings'
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'a',
                  { href: 'http://business.salary.com/why-how-your-employees-are-wasting-time-at-work/' },
                  'Why & How Your Employees are Wasting Time at Work'
                ),
                ' • Salary.com'
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'a',
                  { href: 'http://www.keyorganization.com/time-management-statistics.php' },
                  'Time Management Statistics'
                ),
                ' • Key Organization Systyems'
              )
            )
          )
        )
      );
    }
  }]);

  return ProblemsPage;
}(_react2.default.Component);

exports.default = ProblemsPage;
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
      { className: "waves-effect waves-light btn-flat" },
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
        _react2.default.createElement('div', { className: 'shadow' }),
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
              'Effective team collaboration without all the noise.'
            ),
            _react2.default.createElement(
              'div',
              { className: 'long-desc' },
              _react2.default.createElement(
                'p',
                null,
                'Endless emails, meetings, and chats in the work place can be very unproductive. With Olis, easily chat and summarize the discussion, assign tasks, and highlight the key takeaways in one simple interface.'
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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _App = require('components/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  (0, _reactDom.render)(_react2.default.createElement(_App2.default, null), document.querySelector('#app'));
});
});

require.register("initialize_about", function(exports, require, module) {
'use strict';

var _reactDom = require('react-dom');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AboutUsPage = require('components/AboutUsPage');

var _AboutUsPage2 = _interopRequireDefault(_AboutUsPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  (0, _reactDom.render)(_react2.default.createElement(_AboutUsPage2.default, null), document.querySelector('#app'));
  $(".button-collapse").sideNav();
});
});

require.register("initialize_benefits", function(exports, require, module) {
'use strict';

var _reactDom = require('react-dom');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BenefitsPage = require('components/BenefitsPage');

var _BenefitsPage2 = _interopRequireDefault(_BenefitsPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  (0, _reactDom.render)(_react2.default.createElement(_BenefitsPage2.default, null), document.querySelector('#app'));
  $(".button-collapse").sideNav();
});
});

require.register("initialize_problems", function(exports, require, module) {
'use strict';

var _reactDom = require('react-dom');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ProblemsPage = require('components/ProblemsPage');

var _ProblemsPage2 = _interopRequireDefault(_ProblemsPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  (0, _reactDom.render)(_react2.default.createElement(_ProblemsPage2.default, null), document.querySelector('#app'));
  $(".button-collapse").sideNav();
});
});


//# sourceMappingURL=app.js.map