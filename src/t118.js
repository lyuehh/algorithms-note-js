var str = 'abc        ';

function removeBlank(str) {
  var lenBak = str.length;
  var len = str.length;
  var ret;
  while(len > 0) {
    var char = str.charAt(len - 1);
    console.log('c: ' + char);
    if(char !== ' ' && char !== '\t') {
      console.log('l: ' + len);
      ret = str.substr(0, len);
      break;
    }
    --len;
  }
  return ret;
}
console.log('[' + removeBlank(str) + ']');
