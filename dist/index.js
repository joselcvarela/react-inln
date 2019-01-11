"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Element =
/*#__PURE__*/
function (_Component) {
  _inherits(Element, _Component);

  function Element() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Element);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Element)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      css: {}
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "breakpoints", [{
      match: 'only screen and (max-width: 575px)',
      alias: 'xs'
    }, {
      match: 'only screen and (max-width: 768px)',
      alias: 's'
    }, {
      match: 'only screen and (max-width: 992px)',
      alias: 'm'
    }, {
      match: 'only screen and (max-width: 1200px)',
      alias: 'l'
    }, {
      match: 'only screen and (min-width: 1201px)',
      alias: 'xl'
    }]);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_breakpoints", []);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "ignoreAttributes", ['length', 'src']);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "cssAttributes", function () {
      // this, could be simple Object.keys....filter but firefox and ie doesn't support
      var attrs = [];

      for (var attr in document.body.style) {
        if (['length', 'src'].indexOf(attr) !== -1) break;

        if (document.body.style[attr].constructor && [String, Number].indexOf(document.body.style[attr].constructor) > -1) {
          attrs.push(attr);
        }
      }

      return attrs;
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "equalCss", function (prev, next) {
      return JSON.stringify(prev, _this.cssAttributes) === JSON.stringify(next, _this.cssAttributes);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "extractFromProps", function (props) {
      var _props$tag = props.tag,
          Tag = _props$tag === void 0 ? 'div' : _props$tag,
          children = props.children,
          rest = _objectWithoutProperties(props, ["tag", "children"]);

      var cssRules = {};
      var otherProps = {};

      for (var prop in rest) {
        var value = rest[prop];

        var _prop$split = prop.split('_'),
            _prop$split2 = _slicedToArray(_prop$split, 2),
            key = _prop$split2[0],
            _prop$split2$ = _prop$split2[1],
            breakpoint = _prop$split2$ === void 0 ? '' : _prop$split2$;

        if (_this.cssAttributes.includes(key)) {
          cssRules[breakpoint] = _objectSpread({}, cssRules[breakpoint], _defineProperty({}, key, value));
        } else {
          otherProps = _objectSpread({}, otherProps, _defineProperty({}, key, value));
        }
      }

      return {
        Tag: Tag,
        children: children,
        cssRules: cssRules,
        props: otherProps
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "matchedMedia", function (breakpoint, mql) {
      var _this$extractFromProp = _this.extractFromProps(_this.props),
          cssRules = _this$extractFromProp.cssRules;

      var css = cssRules[''] || {};

      if (breakpoint in cssRules && mql.matches) {
        css = _objectSpread({}, css, cssRules[breakpoint]);
      } else {
        var brk = _this._breakpoints.find(function (b) {
          return b.alias in cssRules && b.mql.matches;
        });

        if (brk) {
          css = _objectSpread({}, css, cssRules[brk.alias]);
        }
      }

      if (css && Object.keys(css).length) {
        if (!_this.equalCss(_this.state.css, css)) {
          _this.setState({
            css: css
          });
        }
      }
    });

    return _this;
  }

  _createClass(Element, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this._breakpoints = this.breakpoints.map(function (_ref) {
        var match = _ref.match,
            alias = _ref.alias;
        return {
          alias: alias,
          mql: window.matchMedia(match),
          listener: function listener(mql) {
            return _this2.matchedMedia(alias, mql);
          }
        };
      });

      this._breakpoints.forEach(function (_ref2) {
        var mql = _ref2.mql,
            listener = _ref2.listener;
        return mql.addListener(listener);
      });

      this._breakpoints.forEach(function (_ref3) {
        var mql = _ref3.mql,
            listener = _ref3.listener;
        return listener(mql);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._breakpoints.forEach(function (_ref4) {
        var mql = _ref4.mql,
            listener = _ref4.listener;
        return mql.removeListener(listener);
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!this.equalCss(prevProps, this.props)) {
        this._breakpoints.forEach(function (_ref5) {
          var mql = _ref5.mql,
              listener = _ref5.listener;
          return listener(mql);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$extractFromProp2 = this.extractFromProps(this.props),
          Tag = _this$extractFromProp2.Tag,
          children = _this$extractFromProp2.children,
          props = _this$extractFromProp2.props;

      return _react.default.createElement(Tag, _extends({}, props, {
        style: this.state.css
      }), children);
    }
  }]);

  return Element;
}(_react.Component);

var _default = Element;
exports.default = _default;
