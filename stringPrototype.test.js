const stringPrototype = require('./stringPrototype');

// hasVowel test
test('that string has a method hasvowel ', () => {
  expect('hasVowel' in String.prototype).toBeTruthy();
});

test('that hasVowel returns boolean value', () => {
  expect(typeof ('word'.hasVowel())).toBe('boolean');
});

test('that "wHEord".hasVowel returns true', () => {
  expect('wHEord'.hasVowel()).toBeTruthy();
});

test('that "Sql sw".hasVowel returns false', () => {
  expect('Sql sw'.hasVowel()).toBeFalsy();
});

test('that "wh_*hi*".hasVowel returns true value', () => {
  expect('wh_*hi*'.hasVowel()).toBeTruthy();
});

test('that "--$55".hasVowel does not return true', () => {
  expect('--$55'.hasVowel()).not.toBeTruthy();
});

test('that "6670rejhh".hasVowel returns  true', () => {
  expect('6670rejhh'.hasVowel()).toBeTruthy();
});

test('that "786540000".hasVowel returns false', () => {
  expect('786540000'.hasVowel()).toBeFalsy();
});

test('that "HEROD".hasVowel returns true', () => {
  expect('HEROD'.hasVowel()).toBeTruthy();
});


//toUpper
test('that string has a method toUpper ', () => {
  expect('toUpper' in String.prototype).toBeTruthy();
});

test('that toUpper Method returns string type', () => {
  expect(typeof ('word'.toUpper())).toBe('string');
});

test('that "HELP".toUpper Method returns  "HELP"', () => {
  expect('HELP'.toUpper()).toBe('HELP');
});

test('that "SoLace".toUpper Method returns "SOLACE"', () => {
  expect('SoLace'.toUpper()).toBe('SOLACE');
});

test('that "55scale".toUpper Method returns "55SCALE"', () => {
  expect('55scale'.toUpper()).toBe('55SCALE');
});

test('that "sql-server`".toUpper Method returs "SQL-SERVER`"', () => {
  expect('sql-server`'.toUpper()).toBe('SQL-SERVER`');
});

test('that "3e + 3e = 6e".toUpper Method returns "3E + 3E = 6E"', () => {
  expect('3e + 3e = 6e'.toUpper()).toBe('3E + 3E = 6E');
});

test('that "3*3".toUpper Method returns "3*3"', () => {
  expect('3*3'.toUpper()).toBe('3*3');
});


//toLower
test('that string has a method toLower ', () => {
  expect('toLower' in String.prototype).toBeTruthy();
});

test('that toLower Method returns string type', () => {
  expect(typeof ('word'.toLower())).toBe('string');
});

test('that "HELP".toLower Method returns  "help"', () => {
  expect('HELP'.toLower()).toBe('help');
});

test('that "help".toLower Method returns  "help"', () => {
  expect('help'.toLower()).toBe('help');
});

test('that "SoLAce".toLower Method returns  "solace"', () => {
  expect('SoLAce'.toLower()).toBe('solace');
});

test('that "SoLAce".toLower Method returns  "solace"', () => {
  expect('SoLAce'.toLower()).toBe('solace');
});

test('that "55SSale".toLower Method returns  "55ssale"', () => {
  expect('55SSale'.toLower()).toBe('55ssale');
});

test('that "2*2E = 4E".toLower Method returns  "2*2e = 4e"', () => {
  expect('2*2E = 4E'.toLower()).toBe('2*2e = 4e');
});


//ucFirst
test('that string has a method ucFirst ', () => {
  expect('ucFirst' in String.prototype).toBeTruthy();
});

test('that ucFirst Method returns string type', () => {
  expect(typeof ('word'.ucFirst())).toBe('string');
});

test('that "word".ucFirst Method returns  "Word"', () => {
  expect('word'.ucFirst()).toBe('Word');
});

test('that "WORD".ucFirst Method returns  "WORD"', () => {
  expect('WORD'.ucFirst()).toBe('WORD');
});

test('that "1word".ucFirst Method returns  "1word"', () => {
  expect('1word'.ucFirst()).toBe('1word');
});

test('that "_word".ucFirst Method returns  "_word"', () => {
  expect('_word'.ucFirst()).toBe('_word');
});


//isQuestion
test('that String class has a method isQuestion ', () => {
  expect('isQuestion' in String.prototype).toBeTruthy();
});

test('that ucFirst Method returns string type', () => {
  expect(typeof ('word'.isQuestion())).toBe('boolean');
});

test('"what is your name? " is a question', () => {
  expect('what is your name? '.isQuestion()).toBeTruthy();
});

test('"what is your name?/t" is a question', () => {
  expect('what is your name? '.isQuestion()).toBeTruthy();
});

test('"what is your name?/n" is a question', () => {
  expect('what is your name? '.isQuestion()).toBeTruthy();
});

test('"what is your name? " is a question', () => {
  expect('what is your name? '.isQuestion()).toBeTruthy();
});

test('"what is your name??? is a question', () => {
  expect('what is your name? '.isQuestion()).toBeTruthy();
});

test('"what is your name" is not a question', () => {
  expect('what is your name'.isQuestion()).not.toBeTruthy();
});

test('"?what is your name " is not a question', () => {
  expect('?what is your name'.isQuestion()).not.toBeTruthy();
});

test('"__what is your name+_ " is a question', () => {
  expect('__what is your name_ '.isQuestion()).toBeFalsy();
});

test('"__what is your name+_ " is a question', () => {
  expect('__what is your name_ '.isQuestion()).toBeFalsy();
});