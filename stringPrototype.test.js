const stringPrototype = require('./stringPrototype');

// hasVowel test
test('that string has a method hasvowel ', () => {
  expect('hasVowel' in String.prototype).toBe(true);
});

test('that hasVowel returns boolean value', () => {
  expect(typeof ('word'.hasVowel())).toBe('boolean');
});

test('that "wHEord".hasVowel returns true', () => {
  expect('wHEord'.hasVowel()).toBe(true);
});

test('that "Sql sw".hasVowel returns false', () => {
  expect('Sql sw'.hasVowel()).toBe(false);
});

test('that "wh_*hi*".hasVowel returns true value', () => {
  expect('wh_*hi*'.hasVowel()).toBe(true);
});

test('that "--$55".hasVowel does not return true', () => {
  expect('--$55'.hasVowel()).not.toBe(true);
});

test('that "6670rejhh".hasVowel returns  true', () => {
  expect('6670rejhh'.hasVowel()).toBe(true);
});

test('that "786540000".hasVowel returns false', () => {
  expect('786540000'.hasVowel()).toBe(false);
});

test('that "HEROD".hasVowel returns true', () => {
  expect('HEROD'.hasVowel()).toBe(true);
});


//toUpper
test('that string has a method toUpper ', () => {
  expect('toUpper' in String.prototype).toBe(true);
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
  expect('toLower' in String.prototype).toBe(true);
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