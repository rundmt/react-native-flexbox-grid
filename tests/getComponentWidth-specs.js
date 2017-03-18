var getComponentWidth = require('../src/lib/helpers').getComponentWidth;
var assert = require('assert');

describe('Get Component Width ', function() {
    it('should get component width for small screen', function () {
      assert.equal('100%', getComponentWidth('small', {rowSize: 12, sm: 12, md: 6, lg: 4}));
      assert.equal('50%', getComponentWidth('small', {rowSize: 12, sm: 6, md: 6, lg: 4}));
      assert.equal('25%', getComponentWidth('small', {rowSize: 12, sm: 3, md: 4, lg: 4}));
    });

    it('should get component width for medium screen', function () {
      assert.equal('100%', getComponentWidth('medium', {rowSize: 12, sm: 12, md: 12, lg: 4}));
      assert.equal('50%', getComponentWidth('medium', {rowSize: 12, sm: 6, md: 6, lg: 4}));
      assert.equal('25%', getComponentWidth('medium', {rowSize: 12, sm: 3, md: 3, lg: 4}));
      assert.equal('100%', getComponentWidth('medium', {rowSize: 12, sm: 12, md: 12, lg: 12}));
      assert.equal('50%', getComponentWidth('medium', {rowSize: 12, sm: 12, md: 6, lg: 12}));
      assert.equal('25%', getComponentWidth('medium', {rowSize: 12, sm: 12, md: 3, lg: 12}));
    });

    it('should get component width for large screen', function () {
      assert.equal('100%', getComponentWidth('large', {rowSize: 12, sm: 12, md: 12}));
      assert.equal('100%', getComponentWidth('large', {rowSize: 12, sm: 12}));
      assert.equal('50%', getComponentWidth('large', {rowSize: 12, sm: 6, md: 6, lg: 6}));
      assert.equal('50%', getComponentWidth('large', {rowSize: 12, sm: 6, md: 6}));
      assert.equal('25%', getComponentWidth('large', {rowSize: 12, sm: 3}));
      assert.equal('100%', getComponentWidth('large', {rowSize: 12, sm: 3, lg: 12}));
    });
});
