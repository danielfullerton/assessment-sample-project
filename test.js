const { reverse, isPalindrome } = require('./index');
const { expect } = require('chai');

describe('The name reversal app', function() {
    it('should reject an empty name', () => {
        expect(() => reverse('')).to.throw('please provide a "name" query parameter that is between 1 and 1000 characters');
    });

    it('should reject a non-string', function() {
        expect(() => reverse(5)).to.throw('please provide a "name" query parameter that is between 1 and 1000 characters');
    });

    it('should successfully return a reversed string', function() {
        const name = 'daniel f fullerton is my name';
        const expected = 'eman ym si notrelluf f leinad';
        expect(reverse(name)).to.equal(expected);
    })

    it('should successfully test a true palindrome without a comparable parameter', function() {
        expect(isPalindrome('racecar')).to.be.true;
    });

    it('should successfully test a non-palindrome without a comparable parameter', function() {
        expect(isPalindrome('not a palindrome at all')).to.be.false;
    })

    it('should successfully test a true palindrome with a comparable parameter', function() {
        expect(isPalindrome('racecar', 'racecar')).to.be.true;
    });

    it('should successfully test a non-palindrome with a comparable parameter', function() {
        expect(isPalindrome('not a palindrome at all', 'lla ta emordnilap a ton')).to.be.false;
    })
});
