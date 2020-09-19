const randomAddress = require('./randomAddress');
const allAddress = require('./allAddress');

test('check if random address exists in function allAddress', function () {
  const address = randomAddress();
  const addresses = allAddress();
  const addressExist = addresses.filter(function (item) {
    return item === address;
  });
  expect(addressExist.length).not.toBe(0);
});
