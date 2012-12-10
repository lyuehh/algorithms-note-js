function Node(item) {
  this.item = item;
  this.next = null;
}

function Queue() {
  this.first = null;
  this.last = null;
  this.N = 0;
}

Queue.prototype.size = function () {
  return this.N;
};

Queue.prototype.isEmpty = function () {
  return this.N === 0;
};

Queue.prototype.enqueue = function (item) {
  var oldLast = this.last;
  this.last = new Node(item);
  this.last.next = null;
  if(this.isEmpty()) {
    this.first = this.last;
  } else {
    oldLast.next = this.last;
  }
  this.N++;
};

Queue.prototype.dequeue = function () {
  var item = this.first.item;
  this.first = this.first.next;
  if(this.isEmpty()) {
    this.last = null;
  }
  this.N--;
  return item;
};

Queue.prototype.removeLast = function () {
  
};

module.exports = Queue;
