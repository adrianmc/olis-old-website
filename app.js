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

var _Email = require('./Email');

var _Email2 = _interopRequireDefault(_Email);

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
        _react2.default.createElement(_Email2.default, null),
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
  var _ref$header = _ref.header;
  var header = _ref$header === undefined ? 'What a great benefit!' : _ref$header;
  var _ref$text = _ref.text;
  var text = _ref$text === undefined ? 'This benefit is so great because it helps you\n   do a lot of things and that\'s great because we all \n   have a lot of things to do and the days are \n   getting shorter and shorter and then you\'re dead.' : _ref$text;
  var _ref$textColor = _ref.textColor;
  var textColor = _ref$textColor === undefined ? 'primaryText' : _ref$textColor;
  var _ref$bgColor = _ref.bgColor;
  var bgColor = _ref$bgColor === undefined ? 'white' : _ref$bgColor;
  var _ref$image = _ref.image;
  var image = _ref$image === undefined ? 'overall.png' : _ref$image;
  return _react2.default.createElement(
    'div',
    { className: 'benefit-container ' + bgColor },
    _react2.default.createElement(
      'div',
      { className: 'benefit-text' },
      _react2.default.createElement(
        'h3',
        { className: '' + textColor },
        header
      ),
      _react2.default.createElement(
        'p',
        { className: '' + textColor },
        text
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'benefit-img' },
      _react2.default.createElement(
        'a',
        { href: '../img/' + image, 'data-lightbox': 'feature-shots', 'data-title': 'Instantly translate chat messages.', className: 'img-responsive' },
        _react2.default.createElement('img', { src: '../img/' + image, className: 'img-responsive feature-pic', alt: '', 'data-effect': 'slide-right' })
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
    _react2.default.createElement(_Benefit2.default, {
      header: 'The notes',
      text: '102103213',
      textColor: 'primaryText',
      bgColor: 'white',
      image: 'overall.png'
    }),
    _react2.default.createElement(_Benefit2.default, {
      header: 'The collab',
      text: 'wtfroflcopter',
      textColor: 'primaryText',
      bgColor: 'white',
      image: 'overall.png'
    }),
    _react2.default.createElement(_Benefit2.default, {
      header: 'The notifications',
      text: 'haha',
      textColor: 'primaryText',
      bgColor: 'white',
      image: 'overall.png'
    }),
    _react2.default.createElement(_Benefit2.default, {
      header: 'The teams',
      text: 'sdas',
      textColor: 'lightText',
      bgColor: 'primaryBg',
      image: 'overall.png'
    }),
    _react2.default.createElement(_Benefit2.default, {
      header: 'The convos',
      text: 'asd1111',
      textColor: 'primaryText',
      bgColor: 'white',
      image: 'overall.png'
    })
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

;require.register("components/Email", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Email = function (_React$Component) {
  _inherits(Email, _React$Component);

  function Email() {
    _classCallCheck(this, Email);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Email).apply(this, arguments));
  }

  _createClass(Email, [{
    key: "handleSubmit",
    value: function handleSubmit() {
      console.log("handleSubmit " + this.input.value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        { className: "email-container" },
        _react2.default.createElement(
          "div",
          { className: "input-field" },
          _react2.default.createElement(
            "i",
            { className: "material-icons prefix" },
            "email"
          ),
          _react2.default.createElement("input", {
            id: "email",
            type: "email",
            className: "validate",
            ref: function ref(_ref) {
              return _this2.input = _ref;
            }
          }),
          _react2.default.createElement(
            "label",
            {
              "for": "email",
              "data-error": "Invalid.",
              "data-success": "Ok!"
            },
            "Email"
          )
        ),
        _react2.default.createElement(
          "a",
          {
            className: "waves-effect waves-light btn pink accent-2",
            onClick: this.handleSubmit.bind(this)
          },
          "Get on the waiting list!"
        )
      );
    }
  }]);

  return Email;
}(_react2.default.Component);

exports.default = Email;
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
            'h5',
            { 'class': 'white-text' },
            'Contact Us'
          ),
          _react2.default.createElement(
            'p',
            { 'class': 'grey-text text-lighten-4' },
            _react2.default.createElement(
              'a',
              { href: 'mailto:info@OlisApp.com' },
              'info@OlisApp.com'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col l4 offset-l2 s12' },
          _react2.default.createElement(
            'h5',
            { 'class': 'white-text' },
            'Links'
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'a',
              { className: 'grey-text text-lighten-3', href: '/problems' },
              'Why chat?'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'a',
              { className: 'grey-text text-lighten-3', href: '/benefits' },
              'Benefits'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'a',
              { className: 'grey-text text-lighten-3', href: '/about' },
              'About Us'
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
        '© 2016 OlisApp ',
        _react2.default.createElement(
          'a',
          { href: '/terms', style: { paddingLeft: '10px' } },
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
          'English'
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
          iconName: 'ion-android-walk'
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

;require.register("components/TermsPage", function(exports, require, module) {
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
    _react2.default.createElement(
      'div',
      { className: 'terms-container' },
      _react2.default.createElement(
        'div',
        { className: 'terms' },
        _react2.default.createElement(
          'h1',
          null,
          'Terms of Use'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Last Updated: March 8, 2016'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Thank you for using Olis. These Terms of Service (the “Terms”) and our Privacy Policy (at ',
          _react2.default.createElement(
            'a',
            { href: 'https://olis.com/about/privacy' },
            'https://olis.com/about/privacy'
          ),
          ') govern your use of Olis, so please read them carefully before using Olis. In addition, the Terms include Olis\'s Business Agreement (at ',
          _react2.default.createElement(
            'a',
            { href: 'https://olis.com/about/terms' },
            'https://getolis.com/terms'
          ),
          '), which is incorporated herein by reference.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'By using Olis, you agree to be bound by these Terms. If you don’t agree to these Terms, do not use Olis. If you are using Olis on behalf of an organization (such as your employer), you are agreeing to these Terms for that organization, and are indicating that you have the authority to bind that organization to these Terms. In that case, “you” and “your” will refer to that organization.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'We may revise the Terms from time to time. If a revision is material, as determined solely by us, we will notify you (for example via email to the email address associated with your account). Other changes may be posted to our blog, so please check that regularly. The most current version will always be posted on our Terms page. By continuing to use Olis after revisions become effective, you agree to be bound by the revised Terms. If you do not agree to the new Terms, please stop using Olis.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Your Information and Responsibilities'
        ),
        _react2.default.createElement(
          'p',
          null,
          'To use Olis, you\'ll need to create an account, either via Olis or through your account with a third-party service such as Google or Facebook. In the latter case, your Olis account will be created using the information you provided to that service, such as your name and email address and other personal information that your privacy settings on that service permit us to access.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'You may use Olis only if you are 13 years or older and are not barred from using Olis under applicable law.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'You are responsible for safeguarding the password that you use to access Olis. You are responsible for any activity on your account, whether or not you authorized that activity. You should immediately notify Olis of any unauthorized use of your account.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'By using Olis, you provide us with text, graphics, images and other information (“your content”). You retain full ownership to your content. Olis does not claim any ownership rights to your content. However, you are also solely responsible for your content. You indicate that you own or have the necessary rights to all of your content, and that use of your content does not infringe, misappropriate or violate a third party’s intellectual property rights, or rights of publicity or privacy, or result in the violation of any applicable law or regulation.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'You can remove your content by deleting it. However, in certain instances, some of your content (such as documents created by others that you have contributed to) may not be completely removed and copies of your content may continue to exist on Olis. We’re not responsible or liable for the removal or deletion of (or the failure to remove or delete) any of your content.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Olis Intellectual Property Rights'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Olis and its licensors exclusively own Olis, including all associated intellectual property rights. You acknowledge that Olis is protected by copyright, trademark, and other laws of the United States and foreign countries. You agree not to remove, alter or obscure any copyright, trademark, service mark or other proprietary rights or notices incorporated in or accompanying Olis.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Olis grants you a limited, non-exclusive, non-transferable license to view, copy, and display Olis solely in connection with your permitted use of Olis.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'General Prohibitions'
        ),
        _react2.default.createElement(
          'p',
          null,
          'You agree not to do—or attempt to do—any of the following:'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Probe, scan, or test the vulnerability of any Olis system or network or breach any security or authentication measures;'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Access, tamper with, or use non-public areas of Olis, Olis’s computer systems, or the technical delivery systems of Olis’s providers;'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Decipher, decompile, disassemble or reverse engineer any of the software used to provide Olis;'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Interfere with, or attempt to interfere with, the access of any user, host or network, including sending a virus, overloading, flooding, spamming, or mail-bombing Olis;'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Access or search Olis or download any intellectual property from Olis through the use of any engine, software, tool, agent, device or mechanism (including spiders, robots, crawlers, data mining tools or the like) other than our publicly supported interfaces;'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Plant malware or use Olis to distribute malware;'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Send any unsolicited communications, promotions, advertisements or spam;'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Send altered, deceptive or false source-identifying information, including “spoofing” or “phishing”;'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Post or transmit anything that is fraudulent or misleading, or that infringes on others\' rights;'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Impersonate or misrepresent your affiliation with any person or entity;'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Violate the privacy of others;'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Violate any applicable law or regulation; or'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Encourage or enable any other individual to do any of the above.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Although we’re not obligated to monitor access to or use of Olis or your content or to review or edit any of your content or the intellectual property of other Olis users, we have the right to do so for the purpose of operating Olis, to ensure compliance with these Terms, or to comply with applicable law or other legal requirements. We reserve the right, but are not obligated, to remove or disable access to any of your content, at any time and without notice, including, but not limited to, if we, at our sole discretion, consider any of your content to be objectionable or in violation of these Terms. We have the right to investigate violations of these Terms or conduct that affects Olis. We may also consult and cooperate with law enforcement authorities to prosecute users who violate the law.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'DMCA/Copyright Policy'
        ),
        _react2.default.createElement(
          'p',
          null,
          'We respect copyright law and expect you to do the same. It\'s our policy to terminate those accounts that repeatedly infringe or are believed to be repeatedly infringing the rights of copyright holders. '
        ),
        _react2.default.createElement(
          'p',
          null,
          'Termination'
        ),
        _react2.default.createElement(
          'p',
          null,
          'We may suspend Olis or terminate your access to and use of Olis, at our sole discretion, at any time and without notice to you. For example, we may suspend or terminate your use if you are not complying with these Terms, or use Olis in any way that would cause us legal liability or disrupt others’ use of Olis. If we suspend or terminate your use, we will try to let you know in advance and help you retrieve data, though there may be some cases (for example, repeatedly or flagrantly violating these Terms, a court order, or danger to other users) where we may suspend immediately. You may cancel your account at any time by sending an email to legal@olis.com.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Warranty Disclaimers'
        ),
        _react2.default.createElement(
          'p',
          null,
          'OLIS OR OUR LICENSORS\' INTELLECTUAL PROPERTY ARE PROVIDED “AS IS,” WITHOUT WARRANTY OF ANY KIND. WITHOUT LIMITING THE FOREGOING, WE EXPLICITLY DISCLAIM ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUIET ENJOYMENT AND NON-INFRINGEMENT AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE. WE MAKE NO WARRANTY THAT OLIS WILL MEET YOUR REQUIREMENTS OR BE AVAILABLE ON AN UNINTERRUPTED, SECURE, OR ERROR-FREE BASIS. WE MAKE NO WARRANTY REGARDING THE QUALITY, ACCURACY, TIMELINESS, TRUTHFULNESS, COMPLETENESS OR RELIABILITY OF ANY OF OUR INTELLECTUAL PROPERTY.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Indemnity'
        ),
        _react2.default.createElement(
          'p',
          null,
          'You will indemnify and hold harmless Olis and its officers, directors, employees and agents, from and against any claims, disputes, demands, liabilities, damages, losses, and costs and expenses, including, without limitation, reasonable legal and accounting fees, arising out of or in any way connected with (i) your access to or use of Olis or our licensors\' intellectual property; (ii) your content; or (iii) your violation of these Terms.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Limitation of Liability'
        ),
        _react2.default.createElement(
          'p',
          null,
          'NEITHER OLIS NOR ANY OTHER PARTY INVOLVED IN CREATING, PRODUCING, OR DELIVERING OLIS, INCLUDING OUR LICENSORS, WILL BE LIABLE FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, LOSS OF DATA OR GOODWILL, SERVICE INTERRUPTION, COMPUTER DAMAGE OR SYSTEM FAILURE OR THE COST OF SUBSTITUTE SERVICES ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR FROM THE USE OF OR INABILITY TO USE OLIS OR OUR LICENSORS\' INTELLECTUAL PROPERTY, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT OLIS HAS BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, EVEN IF A LIMITED REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, SO THE ABOVE LIMITATION MAY NOT APPLY TO YOU.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'IN NO EVENT WILL OLIS’S TOTAL LIABILITY ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR FROM THE USE OF OR INABILITY TO USE OLIS OR TO ACCESS YOUR CONTENT EXCEED THE AMOUNTS YOU HAVE PAID TO OLIS FOR USE OF OLIS OR TWENTY DOLLARS ($20), IF YOU HAVE NOT HAD ANY PAYMENT OBLIGATIONS TO OLIS, AS APPLICABLE. THE LIMITATIONS OF DAMAGES SET FORTH ABOVE ARE FUNDAMENTAL ELEMENTS OF THE BASIS OF THE BARGAIN BETWEEN OLIS AND YOU.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Dispute Resolution'
        ),
        _react2.default.createElement(
          'p',
          null,
          'GOVERNING LAW'
        ),
        _react2.default.createElement(
          'p',
          null,
          'These Terms and any action related thereto will be governed by the laws of Hong Kong without regard to its conflict of laws provisions.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'AGREEMENT TO ARBITRATE'
        ),
        _react2.default.createElement(
          'p',
          null,
          'You and Olis agree that any dispute, claim or controversy arising out of or relating to these Terms or the breach, termination, enforcement, interpretation or validity thereof or the use of Olis (collectively, “Disputes”) will be settled by binding arbitration, except that each party retains the right: (i) to bring an individual action in small claims court and (ii) to seek injunctive or other equitable relief in a court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation or violation of a party’s copyrights, trademarks, trade secrets, patents or other intellectual property rights (the action described in the foregoing clause (ii), an “IP Protection Action”). The exclusive jurisdiction and venue of any IP Protection Action will be the state and federal courts located in the Northern District of California and each of the parties hereto waives any objection to jurisdiction and venue in such courts. You acknowledge and agree that you and Olis are each waiving the right to a trial by jury or to participate as a plaintiff or class member in any purported class action or representative proceeding. Further, unless both you and Olis otherwise agree in writing, the arbitrator may not consolidate more than one person\'s claims, and may not otherwise preside over any form of any class or representative proceeding. If this specific paragraph is held unenforceable, then the entirety of this “Dispute Resolution” section will be deemed void. Except as provided in the preceding sentence, this “Dispute Resolution” section will survive any termination of these Terms.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'ARBITRATION RULES'
        ),
        _react2.default.createElement(
          'p',
          null,
          'The arbitration will be administered by the American Arbitration Association (“AAA”) in accordance with the Commercial Arbitration Rules and the Supplementary Procedures for Consumer Related Disputes (the “AAA Rules”) then in effect, except as modified by this “Dispute Resolution” section. (The AAA Rules are available at www.adr.org/arb_med or by calling the AAA at 1-800-778-7879.) The Federal Arbitration Act will govern the interpretation and enforcement of this Section.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'ARBITRATION PROCESS'
        ),
        _react2.default.createElement(
          'p',
          null,
          'A party who desires to initiate arbitration must provide the other party with a written Demand for Arbitration as specified in the AAA Rules. (The AAA provides a form Demand for Arbitration at ',
          _react2.default.createElement(
            'a',
            { href: 'http://www.adr.org/aaa/ShowPDF?doc=ADRSTG_004175' },
            'http://www.adr.org/aaa/ShowPDF?doc=ADRSTG_004175'
          ),
          ' and a separate form for California residents at ',
          _react2.default.createElement(
            'a',
            { href: 'http://www.adr.org/aaa/ShowPDF?doc=ADRSTG_015822' },
            'http://www.adr.org/aaa/ShowPDF?doc=ADRSTG_015822'
          ),
          '.) The arbitrator will be either a retired judge or an attorney licensed to practice law and will be selected by the parties from the AAA’s roster of arbitrators. If the parties are unable to agree upon an arbitrator within seven (7) days of delivery of the Demand for Arbitration, then the AAA will appoint the arbitrator in accordance with the AAA Rules.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'ARBITRATION LOCATION AND PROCEDURE'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Unless you and Olis otherwise agree, the arbitration will be conducted in the county where you reside. If your claim does not exceed $10,000, then the arbitration will be conducted solely on the basis of the documents that you and Olis submit to the arbitrator, unless you request a hearing or the arbitrator determines that a hearing is necessary. If your claim exceeds $10,000, your right to a hearing will be determined by the AAA Rules. Subject to the AAA Rules, the arbitrator will have the discretion to direct a reasonable exchange of information by the parties, consistent with the expedited nature of the arbitration.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'ARBITRATOR’S DECISION'
        ),
        _react2.default.createElement(
          'p',
          null,
          'The arbitrator will render an award within the time frame specified in the AAA Rules. The arbitrator’s decision will include the essential findings and conclusions upon which the arbitrator based the award. Judgment on the arbitration award may be entered in any court having jurisdiction thereof. The arbitrator’s award of damages must be consistent with the terms of the “Limitation of Liability” section above as to the types and amounts of damages for which a party may be held liable. The arbitrator may award declaratory or injunctive relief only in favor of the claimant and only to the extent necessary to provide relief warranted by the claimant’s individual claim. If you prevail in arbitration you will be entitled to an award of attorneys’ fees and expenses, to the extent provided under applicable law. Olis will not seek, and hereby waives all rights it may have under applicable law to recover, attorneys’ fees and expenses if it prevails in arbitration.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'FEES'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Your responsibility to pay any AAA filing, administrative and arbitrator fees will be solely as set forth in the AAA Rules. However, if your claim for damages does not exceed $75,000, Olis will pay all such fees unless the arbitrator finds that either the substance of your claim or the relief sought in your Demand for Arbitration was frivolous or was brought for an improper purpose (as measured by the standards set forth in Federal Rule of Civil Procedure 11(b)).'
        ),
        _react2.default.createElement(
          'p',
          null,
          'CHANGES'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Notwithstanding the provisions of the “Modification” section above, if Olis changes this “Dispute Resolution” section after the date you first accepted these Terms (or accepted any subsequent changes to these Terms), you may reject any such change by sending us written notice (including by email to legal@olis.com) within 30 days of the date such change became effective, as indicated in the “Last Updated” date above or in the date of Olis’s email to you notifying you of such change. By rejecting any change, you are agreeing that you will arbitrate any Dispute between you and Olis in accordance with the provisions of this “Dispute Resolution” section as of the date you first accepted these Terms (or accepted any subsequent changes to these Terms).'
        ),
        _react2.default.createElement(
          'p',
          null,
          'General Terms'
        ),
        _react2.default.createElement(
          'p',
          null,
          'These Terms constitute the entire and exclusive understanding and agreement between Olis and you regarding Olis, and these Terms supersede and replace any and all prior oral or written understandings or agreements between Olis and you regarding Olis, except that if you become a party to Olis\'s Business Agreement, either before or after reviewing these Terms, the terms and conditions of the Business Agreement will govern over any conflicting provisions herein. If for any reason a court of competent jurisdiction finds any provision of these Terms invalid or unenforceable, that provision will be enforced to the maximum extent permissible and the other provisions of these Terms will remain in full force and effect.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'You may not assign or transfer these Terms, by operation of law or otherwise, without Olis’s prior written consent. Any attempt by you to assign or transfer these Terms, without such consent, will be null and of no effect. Olis may freely assign or transfer these Terms without restriction. Subject to the foregoing, these Terms will bind and inure to the benefit of the parties, their successors and permitted assigns.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Any notices or other communications provided by Olis under these Terms, including those regarding modifications to these Terms, will be given: (i) by Olis via email; or (ii) by posting to our website. For notices made by e-mail, the date of receipt will be deemed the date on which such notice is transmitted.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Olis’s failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. The waiver of any such right or provision will be effective only if in writing and signed by a duly authorized representative of Olis. Except as expressly set forth in these Terms, the exercise by either party of any of its remedies under these Terms will be without prejudice to its other remedies under these Terms or otherwise.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Contact Information'
        ),
        _react2.default.createElement(
          'p',
          null,
          'If you have any questions about these Terms, please contact us at: legal@olis.com'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Privacy Policy'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Last Updated: March 8, 2016'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Thank you for using Olis. This Privacy Policy explains our practices regarding the collection, use and disclosure of information that we receive when you use Olis. This Privacy Policy only applies to Olis and doesn’t apply to anyone else’s websites, services, or applications, even if you can access those through Olis.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Information We Collect and How We Use It'
        ),
        _react2.default.createElement(
          'p',
          null,
          'ACCOUNT INFORMATION'
        ),
        _react2.default.createElement(
          'p',
          null,
          'When you create an account, we collect certain information that can be used to identify you, such as your name, email address, and if you are using a paid account, postal address, phone number, and credit card billing information (“personally identifiable information” or “PII”). We may also collect information like your gender, date of birth and zip code. If you choose to create a Olis account via a third-party service such as Google or Facebook, you may have to provide us with your username or user ID so that your identity can be authenticated. When the authentication is complete, we’ll be able to access certain information based on your permissions from the third-party service. We don’t receive or store passwords for any accounts on third-party services.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'INFORMATION COLLECTED USING COOKIES'
        ),
        _react2.default.createElement(
          'p',
          null,
          'We collect certain information through the use of “cookies,” which are small text files that are saved by your browser when you access Olis. We may use both session cookies and persistent cookies to identify that you’ve logged in to Olis and to tell us how and when you’ve used it. We may also use cookies to monitor aggregate usage and web traffic routing and to customize and improve Olis. Although most browsers automatically accept cookies, you can change your browser options to stop automatically accepting cookies or to prompt you before accepting cookies. Please note, however, that if you don’t accept cookies, you may not be able to access all portions or features of Olis. Some third-party services providers that we use may also place their own cookies on your browser. Note that this Privacy Policy covers only our use of cookies and does not include use of cookies by such third parties.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'INFORMATION RELATED TO USE OF OLIS'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Our servers automatically record information about how a person uses Olis, including IP addresses, browser types, operating systems, pages or features of Olis that were used and time spent on them, search terms and other statistics. We use and analyze (and may engage third parties to analyze) this information to customize and improve Olis. We also use IP addresses to generate aggregate, non-identifying information about how Olis is used.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'LOCATION INFORMATION'
        ),
        _react2.default.createElement(
          'p',
          null,
          'In some cases we collect and store information about where you are located, such as by converting your IP address into a rough geolocation. We may use location information to improve and personalize Olis.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Information We Share With Third Parties'
        ),
        _react2.default.createElement(
          'p',
          null,
          'We’ll only share your PII in the following cases:'
        ),
        _react2.default.createElement(
          'p',
          null,
          'We use a third-party service provider that requires it, such as for payment processing, data storage, and hosting and servers.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'We need to disclose it as part of a business transaction. Information that we collect from our users, including PII, is considered to be a business asset. As a result, if we go out of business or enter bankruptcy or if we are acquired as a result of a transaction such as a merger, acquisition or asset sale, your PII may be disclosed or transferred to the third-party acquirer in connection with the transaction.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'We need to do so for legal reasons or to protect ourselves or others. We strongly believe in protecting you from having your privacy violated through abuse of legal systems, whether by individuals, entities or government, and in contesting claims that we believe to be invalid under applicable law. However, we reserve the right to disclose any information about you to government or law enforcement officials or private parties if we believe it is necessary to satisfy or comply with any applicable law, regulation or legal process; to respond to lawful requests; to protect the rights, property and safety of us or others; and to prevent or stop activity we consider to be illegal or unethical.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'You expressly ask us to do so.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'We may share aggregated information and non-identifying information with third parties for industry analysis, demographic profiling and other similar purposes.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Modifying Your Information'
        ),
        _react2.default.createElement(
          'p',
          null,
          'To delete your PII and cancel your account, please send an email to legal@olis.com. We’ll take steps to delete your information as soon as is practicable, but some information may remain in archived/backup copies for our records or as otherwise required by law.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'International Transfer'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Your PII may be transferred to, and maintained on, computers located outside of your state, province, country or other governmental jurisdiction. If you’re located outside the United States and choose to provide your PII to us, we may transfer your PII to the United States and process it there.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Safe Harbor'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Olis complies with the US-EU Safe Harbor Framework and US-Swiss Safe Harbor Framework as set forth by the US Department of Commerce regarding the collection, use, and retention of personal information from European Union member countries and Switzerland. Olis has certified that it adheres to the Safe Harbor Privacy Principles of notice, choice, onward transfer, security, data integrity, access, and enforcement. To learn more about the Safe Harbor program, and to view our certification page, please visit ',
          _react2.default.createElement(
            'a',
            { href: 'http://www.export.gov/safeharbor/' },
            'http://www.export.gov/safeharbor/'
          ),
          '.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'In compliance with the US-EU and US-Swiss Safe Harbor Principles, Olis commits to resolve complaints about your privacy and our collection or use of your personal information. European Union or Swiss citizens with inquiries or complaints regarding this privacy policy should first contact Olis at: legal@olis.com'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Olis has further committed to refer unresolved privacy complaints under the US-EU and US-Swiss Safe Harbor Principles to an independent dispute resolution mechanism, the BBB EU SAFE HARBOR, operated by the Council of Better Business Bureaus. If you do not receive timely acknowledgment of your complaint, or if your complaint is not satisfactorily addressed, please visit www.bbb.org/us/safe-harbor-complaints for more information and to file a complaint.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Our Policy Towards Children'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Olis is not directed to children under 13 and we do not knowingly collect PII from children under 13. If we learn that we have collected PII of a child under 13, we will take steps to delete such information from our files as soon as is practicable.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Changes to Privacy Policy'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Any information that we collect is subject to the privacy policy in effect at the time such information is collected. We may, however, revise the Privacy Policy from time to time. If a revision—in our sole discretion—is material, we will notify you (for example via email to the email address associated with your account). Other changes may be posted to our blog, so please check that regularly. The most current version will always be posted on our Privacy Policy page.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Contact Information'
        ),
        _react2.default.createElement(
          'p',
          null,
          'If you have any questions about this Privacy Policy, please contact us at info@olis.com.',
          _react2.default.createElement('br', null)
        )
      )
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

var _Email = require('./Email');

var _Email2 = _interopRequireDefault(_Email);

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
        _react2.default.createElement(
          'div',
          { className: 'light-email' },
          _react2.default.createElement(_Email2.default, null)
        ),
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

require.register("initialize_terms", function(exports, require, module) {
'use strict';

var _reactDom = require('react-dom');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TermsPage = require('components/TermsPage');

var _TermsPage2 = _interopRequireDefault(_TermsPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  (0, _reactDom.render)(_react2.default.createElement(_TermsPage2.default, null), document.querySelector('#app'));
  $(".button-collapse").sideNav();
});
});


//# sourceMappingURL=app.js.map