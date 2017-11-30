'use strict';

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_validator2.default.isEmail('venkat@v.hh'));

/*const template = (
	<p>Hello React and ReactDOM</p>
	);*/
var template = _react2.default.createElement('p', {}, 'Hello react and react-dom');
_reactDom2.default.render(template, document.getElementById('app'));
