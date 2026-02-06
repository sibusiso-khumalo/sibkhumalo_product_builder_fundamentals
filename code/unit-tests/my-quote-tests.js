/**
 * @file This file is used by the 'rp test' command and allows you to write and run unit tests locally.
 * When running unit tests, the unit test code files are appended to the product module code files, and executed using mocha.
 * The unit test files are automatically commented out when the product module definition is pushed to Root,
 * ensuring that the unit tests are not executed in production.
 */



describe('getQuote', function () {
  const quoteData = {
    policy_start_date: '2026-03-01',
    cover_amount: 65000 * 100,
    year_of_birth: 2010,
    dino_species: 'Brachiosaurus',
    dino_health_checks: true,
  };

  it('should pass quote data validation for correct data', function () {
    const validation = validateQuoteRequest(quoteData);
    expect(validation.error).to.equal(null);
  });

  it('should return a suggested premium of R1368 (cents)', function () {
    const quotePackage = getQuote(quoteData)[0];

    expect(quotePackage.suggested_premium).to.equal(1373); // cents
  });
});
