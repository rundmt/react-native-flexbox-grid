var isHidden = require('../src/lib/helpers').isHidden;
var assert = require('assert');

describe('Is Component Hidden ', function() {
    it('it should hide element for small screen', function () {
      assert.equal(true, isHidden('small', {smHidden: true}));
      assert.equal(true, isHidden('small', {smHidden: true, lgHidden: true}));
      assert.equal(true, isHidden('small', {smHidden: true, mdHidden: true}));
    });

    it('it should not hide element for small screen', function () {
      assert.equal(false, isHidden('small', {mdHidden: true}));
      assert.equal(false, isHidden('small', {lgHidden: true}));
      assert.equal(false, isHidden('small', {mdHidden: true, lgHidden: true}));
    });

    it('it should hide element for medium screen', function () {
      assert.equal(true, isHidden('medium', {mdHidden: true}));
      assert.equal(true, isHidden('medium', {mdHidden: true, lgHidden: true}));
      assert.equal(true, isHidden('medium', {mdHidden: true, smHidden: true}));
    });

    it('it should not hide element for medium screen', function () {
      assert.equal(false, isHidden('medium', {smHidden: true}));
      assert.equal(false, isHidden('medium', {lgHidden: true}));
      assert.equal(false, isHidden('medium', {smHidden: true, lgHidden: true}));
    });

    it('it should hide element for large screen', function () {
      assert.equal(true, isHidden('large', {lgHidden: true}));
      assert.equal(true, isHidden('large', {lgHidden: true, smHidden: true}));
      assert.equal(true, isHidden('large', {lgHidden: true, mdHidden: true}));
    });

    it('it should not hide element for large screen', function () {
      assert.equal(false, isHidden('large', {smHidden: true}));
      assert.equal(false, isHidden('large', {mdHidden: true}));
      assert.equal(false, isHidden('large', {smHidden: true, mdHidden: true}));
    });
});
