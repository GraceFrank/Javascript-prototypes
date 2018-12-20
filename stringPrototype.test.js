const stringPrototype = require('./stringPrototype');

// hasVowel test
test('that string has a method hasvowel ', () => {
  expect('hasVowel' in String.prototype).toBe(true);
});

test('that hasVowel returns boolean value', () => {
  expect(typeof ('word'.hasVowel())).toBe('boolean');
});

test('that hasVowel returns boolean value', () => {
  expect('wHEord'.hasVowel()).toBe(true);
});

test('that hasVowel returns boolean value', () => {
  expect('Sql sw'.hasVowel()).toBe(false);
});

test('that hasVowel returns boolean value', () => {
  expect('wh_*hi*'.hasVowel()).toBe(true);
});

test('that hasVowel returns boolean value', () => {
  expect('--$55'.hasVowel()).not.toBe(true);
});

test('that hasVowel returns boolean value', () => {
  expect('6670rejhh'.hasVowel()).toBe(true);
});

test('that hasVowel returns boolean value', () => {
  expect('786540000'.hasVowel()).toBe(false);
});

test('that hasVowel returns boolean value', () => {
  expect('HEROD'.hasVowel()).toBe(true);
});


//toUpper
test('that string has a method toUpper ', () => {
  expect('toUpper' in String.prototype).toBe(true);
});

test('that toUpper Method returns string type', () => {
  expect(typeof ('word'.toUpper())).toBe('string');
});

test('that toUpper Method returns string type', () => {
  expect('HELP'.toUpper()).toBe('HELP');
});

test('that toUpper Method returns string type', () => {
  expect('SoLace'.toUpper()).toBe('SOLACE');
});

test('that toUpper Method returns string type', () => {
  expect('55scale'.toUpper()).toBe('55SCALE');
});

test('that toUpper Method returns string type', () => {
  expect('sql-server`'.toUpper()).toBe('SQL-SERVER`');
});

test('that toUpper Method returns string type', () => {
  expect('3e + 3e = 6e'.toUpper()).toBe('3E + 3E = 6E');
});

test('that toUpper Method returns string type', () => {
  expect('3*3'.toUpper()).toBe('3*3');
});