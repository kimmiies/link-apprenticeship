describe('NuPack', function () {
  var NuPack = require('../lib/Nupack');

  it('adds two numbers together', function () {
    expect(1 + 2).toEqual(4);
  });

  it('calculates markup price of product', function () {
    expect(CostOfJob(12456.95, 4, "books")).toEqual(13707.63);
  });
});
