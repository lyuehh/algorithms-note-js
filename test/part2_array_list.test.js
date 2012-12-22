var should = require('should');
var ArrayList = require('../lib/part2/array_list');

describe('part2: ArrayList', function() {
  it('constructor', function() {
    var arrayList = new ArrayList();
    arrayList.size().should.equal(0);
  });

  it('append', function() {
    var arrayList = new ArrayList();
    arrayList.append(0);
    arrayList.append(1);
    arrayList.append(2);
    arrayList.size().should.equal(3);
  });

  it('remove', function() {
    var arrayList = new ArrayList();
    arrayList.append(0);
    arrayList.append(1);
    arrayList.size().should.be.equal(2);
    arrayList.remove(0).should.be.equal(0);
    arrayList.size().should.be.equal(1);
  });

  it('insert', function() {
    var arrayList = new ArrayList();
    arrayList.append(0);
    arrayList.append(1);
    arrayList.append(2);
    arrayList.insert(1, 3);
    arrayList.size().should.be.equal(4);
    arrayList.remove(1).should.be.equal(3);
    console.log(arrayList);
    arrayList.remove(2).should.be.equal(2);
    arrayList.size().should.be.equal(2);
  });

  it('size', function() {
    var arrayList = new ArrayList();
    arrayList.append(0);
    arrayList.append(1);
    arrayList.size().should.be.equal(2);
  });

  it('check', function () {
    var arrayList = new ArrayList();
    arrayList.append(0);
    // FIXME  how to test throw error ???
    //arrayList.remove().should.throwError();
    //arrayList.remove(999).should.throwError();
  });
});

