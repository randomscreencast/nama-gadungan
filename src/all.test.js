const all = require('./all.js');

test('it works!', function() {
  const actual = all().every(function(currentValue) {
    return typeof currentValue === 'string';
  });
  expect(actual).toBe(true);
});