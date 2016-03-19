var getComponentWidth = require('../src/lib/helpers').getComponentWidth;
var assert = require('assert');

describe('Get Component Width ', function() {
    it('it should get component width for small screen', function () {
      assert.equal(320, getComponentWidth('small', {parentWidth: 320, rowSize: 12, sm: 12, md: 6, lg: 4}));
      assert.equal(160, getComponentWidth('small', {parentWidth: 320, rowSize: 12, sm: 6, md: 6, lg: 4}));
      assert.equal(80, getComponentWidth('small', {parentWidth: 320, rowSize: 12, sm: 3, md: 4, lg: 4}));
    });

    it('it should get component width for medium screen', function () {
      assert.equal(768, getComponentWidth('medium', {parentWidth: 768, rowSize: 12, sm: 12, md: 12, lg: 4}));
      assert.equal(384, getComponentWidth('medium', {parentWidth: 768, rowSize: 12, sm: 6, md: 6, lg: 4}));
      assert.equal(192, getComponentWidth('medium', {parentWidth: 768, rowSize: 12, sm: 3, md: 3, lg: 4}));
      assert.equal(768, getComponentWidth('medium', {parentWidth: 768, rowSize: 12, sm: 12, md: 12, lg: 12}));
      assert.equal(384, getComponentWidth('medium', {parentWidth: 768, rowSize: 12, sm: 12, md: 6, lg: 12}));
      assert.equal(192, getComponentWidth('medium', {parentWidth: 768, rowSize: 12, sm: 12, md: 3, lg: 12}));
    });

    it('it should get component width for large screen', function () {
      assert.equal(1024, getComponentWidth('large', {parentWidth: 1024, rowSize: 12, sm: 12, md: 12}));
      assert.equal(1024, getComponentWidth('large', {parentWidth: 1024, rowSize: 12, sm: 12}));
      assert.equal(512, getComponentWidth('large', {parentWidth: 1024, rowSize: 12, sm: 6, md: 6, lg: 6}));
      assert.equal(512, getComponentWidth('large', {parentWidth: 1024, rowSize: 12, sm: 6, md: 6}));
      assert.equal(256, getComponentWidth('large', {parentWidth: 1024, rowSize: 12, sm: 3}));
    });
});
