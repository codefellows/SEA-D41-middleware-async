[0,1,2,3,4,5,6,7,8,9].forEach(function(num) {
  process.nextTick(function() {
    console.log(num);
  });
});

console.log('first!');
