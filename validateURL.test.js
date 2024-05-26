// validateURL.test.js
const validateURL = require('./validateURL');
const { faker } = require('@faker-js/faker');

describe('validateURL', () => {
  test('validates a correct URL', () => {
    const validURL = faker.internet.url();
    expect(validateURL(validURL)).toBe(true);
  });

  test('rejects a URL without protocol', () => {
    const invalidURL = faker.internet.domainName();
    expect(validateURL(invalidURL)).toBe(false);
  });

  test('rejects a URL with spaces', () => {
    const validURL = faker.internet.url();
    const invalidURL = validURL.replace('://', ':// ');
    expect(validateURL(invalidURL)).toBe(false);
  });
});