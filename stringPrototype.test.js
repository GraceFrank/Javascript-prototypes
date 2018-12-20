const stringPrototype = require('./stringPrototype');

// hasVowel test
test('that string has a method hasvowel ', () => {
    expect('hasVowel'in String.prototype).toBe(true);
  });