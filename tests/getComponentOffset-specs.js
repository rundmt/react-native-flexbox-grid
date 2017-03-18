var getComponentOffset = require('../src/lib/helpers').getComponentOffset;
var assert = require('assert');

describe('Get Component Width ', function() {
    it('it should get component width for small screen', function () {
      assert.equal('100%', getComponentOffset('small', {rowSize: 12, smOffset: 12, mdOffset: 6, lgOffset: 4}));
      assert.equal('50%', getComponentOffset('small', {rowSize: 12, smOffset: 6, mdOffset: 6, lgOffset: 4}));
      assert.equal('25%', getComponentOffset('small', {rowSize: 12, smOffset: 3, mdOffset: 4, lgOffset: 4}));
      assert.equal(0, getComponentOffset('small', {rowSize: 12}));
    });

    it('it should get component width for medium screen', function () {
      assert.equal('100%', getComponentOffset('medium', {rowSize: 12, smOffset: 12, mdOffset: 12, lgOffset: 4}));
      assert.equal('50%', getComponentOffset('medium', {rowSize: 12, smOffset: 6, mdOffset: 6, lgOffset: 4}));
      assert.equal('25%', getComponentOffset('medium', {rowSize: 12, smOffset: 3, mdOffset: 3, lgOffset: 4}));
      assert.equal('100%', getComponentOffset('medium', {rowSize: 12, smOffset: 12, mdOffset: 12, lgOffset: 12}));
      assert.equal('50%', getComponentOffset('medium', {rowSize: 12, smOffset: 12, mdOffset: 6, lgOffset: 12}));
      assert.equal('25%', getComponentOffset('medium', {rowSize: 12, smOffset: 12, mdOffset: 3, lgOffset: 12}));
      assert.equal(0, getComponentOffset('medium', {rowSize: 12}));
    });

    it('it should get component width for large screen', function () {
      assert.equal('100%', getComponentOffset('large', {rowSize: 12, smOffset: 12, mdOffset: 12}));
      assert.equal('100%', getComponentOffset('large', {rowSize: 12, smOffset: 12}));
      assert.equal('50%', getComponentOffset('large', {rowSize: 12, smOffset: 6, mdOffset: 6, lgOffset: 6}));
      assert.equal('50%', getComponentOffset('large', {rowSize: 12, smOffset: 6, mdOffset: 6}));
      assert.equal(0, getComponentOffset('large', {rowSize: 12}));
    });
});
