/*
   @https://github.com/jakemadness/random-weighted-value
*/
var randomInt = function(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
};

var randomArrayValue = function(array) {
   return array[randomInt(0, array.length - 1)];
};

var arrayShuffle = function(array) {
   for ( var i = 0, length = array.length, swap = 0, temp = ''; i < length; i++ ) {
      swap        = Math.floor(Math.random() * (i + 1));
      temp        = array[swap];
      array[swap] = array[i];
      array[i]    = temp;
   }
   return array;
};

var randomWeightedValue = function(weightList) {
   for ( var i = 0, length = weightList.length, pool = []; i < length; i++ ) {
      for ( var i2 = 0; i2 < weightList[i].weight; i2++ ) {
         pool.push(i);
      }
   }
   pool = arrayShuffle(pool);
   return randomArrayValue(weightList[randomArrayValue(pool)].values);
};
