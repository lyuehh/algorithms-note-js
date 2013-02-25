var should = require('should');
var merge_sort = require('../lib-cov/part4/merge_sort').merge_sort;


var data = [1,5,2,7,3,8,9,0];
describe('sort', function() {
  it('merge_sort', function() {
    merge_sort(data);
    data.toString().should.equal('0,1,2,3,5,7,8,9');
  });
});
