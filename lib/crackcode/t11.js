'use strict';
function isUnique(str) {
  var arr = str.split('');
  var obj = {};
  for(var i=0,l=arr.length;i<l;i++) {
    if(typeof obj[arr[i]] === 'undefined') {
      obj[arr[i]] = true;
    } else {
      return false;
    }
  }
  return true;
}

function isUnique2(str) {
  for(var i=0,l=str.length; i<l; i++) {
    for(var j=0,ll=str.length;j<ll && i !== j;j++) {
      if(str.charAt(i) === str.charAt(j)) {
        return false;
      }
    }
  }
  return true;
}

exports.isUnique  = isUnique;
exports.isUnique2 = isUnique2;
