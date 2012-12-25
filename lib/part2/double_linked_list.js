function Node(item) {
  this.item = item;
  this.prev = null;
  this.next = null;
}

function DoubleLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

DoubleLinkedList.prototype = {

  constructor: DoubleLinkedList,
  add: function(item) {
    var node = new Node(item);

    if(this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  },
  get: function (index) {
    this.check(index);
    var current = this.head,
      i = 0;

    while(i++ < index) {
      current = current.next;
    }
    return current.item;
  },
  remove: function (index) {
    var current = this.head,
      i = 0;

    if(index === 0) {
      this.head = current.next;

      if(!this.head) {
        this.tail = null;
      } else {
        this.head.prev = null;
      }
    } else if(index === this.length - 1){
      current = this.tail;
      this.tail = current.prev;
      this.tail.next = null;
    } else {
      while(i < index) {
        current = current.next;
        i++;
      }
      current.prev.next = current.next;
    }
    this.length--;
  },
  size: function () {
    return this.length;
  },
  toArray: function () {
    var ret = [],
      current = this.head;

    while(current) {
      ret.push(current.item);
      current = current.next;
    }
    return ret;
  },
  toString: function () {
    return this.toArray().toString();
  },
  check: function (index) {
    if(typeof index !== 'number') {
      throw 'index should be number';
    }
    if(index < 0 || index > this.length) {
      throw 'index should large than 0 and less than this.size()';
    }
  }

};

module.exports = DoubleLinkedList;
