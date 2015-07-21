var recurse = function(num, end, callback) {
  if (num >= end) {
    return;
  }

  process.nextTick(function() {callback(num)});
  process.nextTick(function() {recurse(num + 1, end, callback)});
};

recurse(0, 10, function(num) {
  console.log('loop one: ' + num);
});

recurse(0, 15, function(num) {
  console.log('loop two: ' + num);
});
