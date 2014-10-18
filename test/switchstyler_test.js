(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */
  
  
  /* TODO: TEST UNITS */

  module('jQuery#switchStyler', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });
  
  /*

  test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(this.elems.switchStyler(), this.elems, 'should be chainable');
  });

  test('is switchStyler', function() {
    expect(1);
    strictEqual(this.elems.switchStyler().text(), 'switchStyler0switchStyler1switchStyler2', 'should be switchStyler');
  });

  module('jQuery.switchStyler');

  test('is switchStyler', function() {
    expect(2);
    strictEqual($.switchStyler(), 'switchStyler.', 'should be switchStyler');
    strictEqual($.switchStyler({punctuation: '!'}), 'switchStyler!', 'should be thoroughly switchStyler');
  });

  module(':switchStyler selector', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is switchStyler', function() {
    expect(1);
    // Use deepEqual & .get() when comparing jQuery objects.
    deepEqual(this.elems.filter(':switchStyler').get(), this.elems.last().get(), 'knows switchStyler when it sees it');
  });

  */

}(jQuery));
