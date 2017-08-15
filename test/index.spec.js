import { expect } from 'chai'
import obfus_email from '../index.js'

describe('Testing default variations', () => {
    it('obfuscates the email with 1 letter', () => {
        let expected = '*@foo.com'
        let actual = obfus_email('e@foo.com')

        expect(actual).to.equal(expected)
    })
    it('obfuscates the email with 2 letter', () => {
        let expected = 'e*@foo.com'
        let actual = obfus_email('em@foo.com')

        expect(actual).to.equal(expected)
    })
    it('obfuscates the email with 3 letter', () => {
        let expected = 'em*@foo.com'
        let actual = obfus_email('ema@foo.com')

        expect(actual).to.equal(expected)
    })
    it('obfuscates the email with more than 3 letter', () => {
        let expected = 'ema**@foo.com'
        let actual = obfus_email('email@foo.com')

        expect(actual).to.equal(expected)
    })
})

describe('Testing end3 variations', () => {
    it('obfuscates the email with 1 letter', () => {
        let expected = '*@foo.com'
        let actual = obfus_email('e@foo.com', 'end3')

        expect(actual).to.equal(expected)
    })
    it('obfuscates the email with 2 letter', () => {
        let expected = '*m@foo.com'
        let actual = obfus_email('em@foo.com', 'end3')

        expect(actual).to.equal(expected)
    })
    it('obfuscates the email with 3 letter', () => {
        let expected = '*ma@foo.com'
        let actual = obfus_email('ema@foo.com', 'end3')

        expect(actual).to.equal(expected)
    })
    it('obfuscates the email with more than 3 letter', () => {
        let expected = '**ail@foo.com'
        let actual = obfus_email('email@foo.com', 'end3')

        expect(actual).to.equal(expected)
    })
})

describe('Testing first3rs variations', () => {
    it('obfuscates the email with 1 letter', () => {
        let expected = '@foo.com'
        let actual = obfus_email('e@foo.com', 'fir3rs').replace(/\*/g, '')

        expect(actual).to.equal(expected)
    })
    it('obfuscates the email with 2 letter', () => {
        let expected = 'e@foo.com'
        let actual = obfus_email('em@foo.com', 'fir3rs').replace(/\*/g, '')

        expect(actual).to.equal(expected)
    })
    it('obfuscates the email with 3 letter', () => {
        let expected = 'em@foo.com'
        let actual = obfus_email('ema@foo.com', 'fir3rs').replace(/\*/g, '')

        expect(actual).to.equal(expected)
    })
    it('obfuscates the email with more than 3 letter', () => {
        let expected = 'ema@foo.com'
        let actual = obfus_email('email@foo.com', 'fir3rs').replace(/\*/g, '')

        expect(actual).to.equal(expected)
    })
})

describe('Testing end3rs variations', () => {
    it('obfuscates the email with 1 letter', () => {
        let expected = '@foo.com'
        let actual = obfus_email('e@foo.com', 'end3rs').replace(/\*/g, '')

        expect(actual).to.equal(expected)
    })
    it('obfuscates the email with 2 letter', () => {
        let expected = 'm@foo.com'
        let actual = obfus_email('em@foo.com', 'end3rs').replace(/\*/g, '')

        expect(actual).to.equal(expected)
    })
    it('obfuscates the email with 3 letter', () => {
        let expected = 'ma@foo.com'
        let actual = obfus_email('ema@foo.com', 'end3rs').replace(/\*/g, '')

        expect(actual).to.equal(expected)
    })
    it('obfuscates the email with more than 3 letter', () => {
        let expected = 'ail@foo.com'
        let actual = obfus_email('email@foo.com', 'end3rs').replace(/\*/g, '')

        expect(actual).to.equal(expected)
    })
})

describe('Testing errors', () => {
    it('returns null when nothing is passed', () => {
        let expected = null
        let actual = obfus_email()
        expect(actual).to.equal(expected)
    })
    it('returns null when there is no @', () => {
        let expected = null
        let actual = obfus_email('emailWithNoAt.com')
        expect(actual).to.equal(expected)
    })
    it('returns null if a variation is passed that doesn\'t exist', () => {
        let expected = null
        let actual = obfus_email('email@email.com', 'somethingThatDoesNotExist')
        expect(actual).to.equal(expected)
    })
})