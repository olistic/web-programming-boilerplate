const longestString = require('./longestString');

describe('longestString', () => {
  describe('when no strings are passed', () => {
    test('returns null', () => {
      expect(longestString()).toBeNull();
    });
  });

  describe('when just one string is passed', () => {
    test('returns the string', () => {
      expect(longestString('pico')).toBe('pico');
    });
  });

  describe('when more than one string is passed', () => {
    test('returns the longest of the strings', () => {
      expect(longestString('pico', 'guacamole')).toBe('guacamole');
      expect(longestString('guacamole', 'pico')).toBe('guacamole');
    });

    test('returns the first string when there is a tie', () => {
      expect(longestString('tortillas', 'guacamole')).toBe('tortillas');
      expect(longestString('guacamole', 'tortillas')).toBe('guacamole');
    });
  });
});
