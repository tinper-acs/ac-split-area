'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
    clsfix: _propTypes2["default"].string,
    open: _propTypes2["default"].bool,
    ctn: _propTypes2["default"].node
};

var defaultProps = {
    clsfix: 'ac-split-area',
    open: false,
    ctn: '操作信息'
};

var SplitArea = function (_Component) {
    _inherits(SplitArea, _Component);

    function SplitArea(props) {
        _classCallCheck(this, SplitArea);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.click = function () {
            _this.setState({
                open: !_this.state.open
            });
        };

        _this.state = {
            open: props.open || false
        };
        return _this;
    }

    SplitArea.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('open' in nextProps) {
            this.setState({
                open: nextProps.open
            });
        }
    };

    SplitArea.prototype.render = function render() {
        var _props = this.props,
            children = _props.children,
            clsfix = _props.clsfix,
            ctn = _props.ctn;
        var open = this.state.open;

        return _react2["default"].createElement(
            'div',
            { className: '' + clsfix },
            _react2["default"].createElement(
                'div',
                { onClick: this.click, className: clsfix + '-left' },
                _react2["default"].createElement(
                    'span',
                    { className: clsfix + '-left-text' },
                    ctn
                ),
                _react2["default"].createElement(
                    'span',
                    { className: clsfix + '-left-line' },
                    _react2["default"].createElement('span', { className: clsfix + '-left-line-inner' })
                )
            ),
            _react2["default"].createElement(
                'div',
                { className: clsfix + '-ctn ' + (open ? 'open' : '') },
                open ? children : ''
            )
        );
    };

    return SplitArea;
}(_react.Component);

;

SplitArea.propTypes = propTypes;
SplitArea.defaultProps = defaultProps;

exports["default"] = SplitArea;
module.exports = exports['default'];