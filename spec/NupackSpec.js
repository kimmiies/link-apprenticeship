describe('NuPack Product Repacking Pricing System', function () {
  var costOfJob = require('../lib/Nupack');

  describe('Markup Calculator that takes 3 inputs', function () {

    it('calculates markup price of product #1', function () {
      expect(costOfJob(1299.99, 3, "food")).toEqual(1591.58);
    });

    it('calculates markup price of product #2', function () {
      expect(costOfJob(5432, 1, "drugs")).toEqual(6199.81);
    });

    it('calculates markup price of product #3', function () {
      expect(costOfJob(12456.95, 4, "books")).toEqual(13707.63);
    })
  });

});
