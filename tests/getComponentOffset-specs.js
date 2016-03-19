var getComponentOffset = require('../src/lib/helpers').getComponentOffset;
var assert = require('assert');

describe('Get Component Width ', function() {
    it('it should get component width for small screen', function () {
      assert.equal(320, getComponentOffset('small', {parentWidth: 320, rowSize: 12, smOffset: 12, mdOffset: 6, lgOffset: 4}));
      assert.equal(160, getComponentOffset('small', {parentWidth: 320, rowSize: 12, smOffset: 6, mdOffset: 6, lgOffset: 4}));
      assert.equal(80, getComponentOffset('small', {parentWidth: 320, rowSize: 12, smOffset: 3, mdOffset: 4, lgOffset: 4}));
      assert.equal(0, getComponentOffset('small', {parentWidth: 768, rowSize: 12}));
    });

    it('it should get component width for medium screen', function () {
      assert.equal(768, getComponentOffset('medium', {parentWidth: 768, rowSize: 12, smOffset: 12, mdOffset: 12, lgOffset: 4}));
      assert.equal(384, getComponentOffset('medium', {parentWidth: 768, rowSize: 12, smOffset: 6, mdOffset: 6, lgOffset: 4}));
      assert.equal(192, getComponentOffset('medium', {parentWidth: 768, rowSize: 12, smOffset: 3, mdOffset: 3, lgOffset: 4}));
      assert.equal(768, getComponentOffset('medium', {parentWidth: 768, rowSize: 12, smOffset: 12, mdOffset: 12, lgOffset: 12}));
      assert.equal(384, getComponentOffset('medium', {parentWidth: 768, rowSize: 12, smOffset: 12, mdOffset: 6, lgOffset: 12}));
      assert.equal(192, getComponentOffset('medium', {parentWidth: 768, rowSize: 12, smOffset: 12, mdOffset: 3, lgOffset: 12}));
      assert.equal(0, getComponentOffset('medium', {parentWidth: 768, rowSize: 12}));
    });

    it('it should get component width for large screen', function () {
      assert.equal(1024, getComponentOffset('large', {parentWidth: 1024, rowSize: 12, smOffset: 12, mdOffset: 12}));
      assert.equal(1024, getComponentOffset('large', {parentWidth: 1024, rowSize: 12, smOffset: 12}));
      assert.equal(512, getComponentOffset('large', {parentWidth: 1024, rowSize: 12, smOffset: 6, mdOffset: 6, lgOffset: 6}));
      assert.equal(512, getComponentOffset('large', {parentWidth: 1024, rowSize: 12, smOffset: 6, mdOffset: 6}));
      assert.equal(0, getComponentOffset('large', {parentWidth: 1024, rowSize: 12}));
    });
});
