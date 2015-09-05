/*
其中 getNext 函数中，可以优化
 */
function getNext (pattern) {
  var next = [];
  next[0] = -1;
  var j = 0, k = -1;
  while (j < pattern.length-1) {
    if ( k == -1 || pattern[j] == pattern[k]) {
      j++;
      k++;
      next[j] = k;
    }else{
      k = next[k];  // 此处可以快速聚合，减少和主串匹配时的迭代
    }
  };
  return next;
}


/*
返回 pattern 串在 str 串中的index， 如果index 小于 0，则表示匹配失败
*/
function KMP (str, pattern) {
  var next = getNext(pattern);
  // console.log(next);
  var ret = -1;
  for (var i = 0, j = 0; i < str.length && j < pattern.length; ) {
    if (j == -1) {
      i++;
      j++;
      continue;
    }
    if (str[i] == pattern[j]) {
      i++;
      j++;
      ret = i;
    }else{
      j = next[j];
    }
  };
  return (ret - pattern.length);
}


/*
sample
 */

// var index = KMP('abdeababdace', 'abdac');
// index = 6