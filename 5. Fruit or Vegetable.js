const fruits=['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes', 'peach'];
const vegetable=['tomato', 'cucumber', 'pepper', 'onion', 'garlic', 'parsley']; 

function fruitOrVegetable(arr) {
    let food=arr[0];
/*
    // using for loops
    for(let i=0;i<fruits.length;i++)
        if(food==fruits[i])
            return 'fruit';
    for(let i=0;i<vegetable.length;i++)
        if(food==vegetable[i])
            return 'vegetable';
    return 'unknown';
*/
    // using array's find method
    if(fruits.find(fruit => fruit == food)!=undefined)
        return 'fruit';
    if(vegetable.find(veggy => veggy == food)!=undefined)
        return 'vegetable';
    return 'unknown';
}

var array=['banana'];
console.log(fruitOrVegetable(array));

var array=['cucumber'];
console.log(fruitOrVegetable(array));

var array=['pizza'];
console.log(fruitOrVegetable(array));
