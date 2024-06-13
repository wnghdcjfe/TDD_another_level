const validateEmail = require('./validateEmail');
const { faker } = require('@faker-js/faker');

// before
test('validates a correct email address', () => {
  expect(validateEmail('test@example.com')).toBe(true);
});

test('rejects an email address without @ symbol', () => {
  expect(validateEmail('testexample.com')).toBe(false);
});

test('rejects an email address without domain', () => {
  expect(validateEmail('test@')).toBe(false);
});

test('rejects an email address without username', () => {
  expect(validateEmail('@example.com')).toBe(false);
});

test('rejects an email address with invalid characters', () => {
  expect(validateEmail('test@exa mple.com')).toBe(false);
}); 


// after 

describe('validateEmail', () => {
  test('validates a correct email address', () => {
    const validEmail = faker.internet.email();
    console.log(validEmail)
    expect(validateEmail(validEmail)).toBe(true);
  });

  test('rejects an email address without @ symbol', () => {
    const invalidEmail = faker.internet.email().replace('@', '');
    console.log(validEmail)
    expect(validateEmail(invalidEmail)).toBe(false);
  });

  test('rejects an email address without domain', () => {
    const invalidEmail = faker.internet.userName() + '@';
    expect(validateEmail(invalidEmail)).toBe(false);
  });

  test('rejects an email address without username', () => {
    const invalidEmail = '@' + faker.internet.domainName();
    expect(validateEmail(invalidEmail)).toBe(false);
  });

  test('rejects an email address with invalid characters', () => {
    const invalidEmail = faker.internet.email().replace('@', ' @');
    expect(validateEmail(invalidEmail)).toBe(false);
  });
});
