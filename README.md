# Random Weighted Value
Select a random value from a weighted array in JavaScript.

## Example
```JS
var weightList = [
   {
      'weight': 18,// common
      'values': ['Caterpie', 'Pidgey', 'Weedle']
   },
   {
      'weight': 12,// rare
      'values': ['Clefairy', 'Vulpix', 'Jigglypuff']
   },
   {
      'weight': 6,// very rare
      'values': ['Mankey', 'Abra', 'Machop']
   },
   {
      'weight': 3,// super rare
      'values': ['Bulbasaur', 'Charmander', 'Squirtle']
   },
   {
      'weight': 2,// uber rare
      'values': ['Dratini', 'Bagon', 'Regirock']
   },
   {
      'weight': 1,// legendary
      'values': ['Articuno', 'Mewtwo', 'Lugia']
   }
];

alert('You got a ' + randomWeightedValue(weightList) + '!');
```

JSFiddle Example: https://jsfiddle.net/ijake/vasynhkp/
