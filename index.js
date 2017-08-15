/**
 * Created by Josh Greenwell on 8/14/2017.
 */

import _ from 'lodash'

module.exports = (email, variation = 'default') => {
    let at, stars = '', loop, obfuscatedEmail

    if (!email || !_.includes(email, '@')) {return null} //TODO: Throw error

    at = email.indexOf('@')
    if (variation === 'fir3rs' || variation === 'end3rs') { loop = Math.floor(Math.random()*10+3) }
    else { loop = Math.max(1, at-3) }

    for(let i = 0; i < loop; i++) { stars += '*' }

    if (variation === 'default' || variation === 'fir3rs') {
        obfuscatedEmail = `${email.substring(0, Math.min(3, at-1))}${stars}${email.substring(at, email.length)}`
    }
    else if(variation === 'end3' || variation === 'end3rs') {
        let emailNoAt = email.substring(0, at);
        if(emailNoAt.length < 4) {
            obfuscatedEmail = `*${email.substring(1, email.length)}`
        }
        else {
            obfuscatedEmail = `${stars}${emailNoAt.substring(emailNoAt.length-3, emailNoAt.length)}${email.substring(at, email.length)}`
        }
    }
    else { return null } //TODO: Throw error

    return obfuscatedEmail
}