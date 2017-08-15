'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (email) {
    var variation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';

    var at = void 0,
        stars = '',
        loop = void 0,
        obfuscatedEmail = void 0;

    if (!email || !_lodash2.default.includes(email, '@')) {
        return null;
    } //TODO: Throw error

    at = email.indexOf('@');
    if (variation === 'fir3rs' || variation === 'end3rs') {
        loop = Math.floor(Math.random() * 10 + 3);
    } else {
        loop = Math.max(1, at - 3);
    }

    for (var i = 0; i < loop; i++) {
        stars += '*';
    }

    if (variation === 'default' || variation === 'fir3rs') {
        obfuscatedEmail = '' + email.substring(0, Math.min(3, at - 1)) + stars + email.substring(at, email.length);
    } else if (variation === 'end3' || variation === 'end3rs') {
        var emailNoAt = email.substring(0, at);
        if (emailNoAt.length < 4) {
            obfuscatedEmail = '*' + email.substring(1, email.length);
        } else {
            obfuscatedEmail = '' + stars + emailNoAt.substring(emailNoAt.length - 3, emailNoAt.length) + email.substring(at, email.length);
        }
    } else {
        return null;
    } //TODO: Throw error

    return obfuscatedEmail;
}; /**
    * Created by Josh Greenwell on 8/14/2017.
    */