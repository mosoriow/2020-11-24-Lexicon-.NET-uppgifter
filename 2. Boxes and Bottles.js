function boxesAndBottles(arr) {
    let n=parseInt(arr[0]);
    let k=parseInt(arr[1]);

    if(n%k==0)
        return n/k; // there shouldn't be any left
    else
        return Math.floor(n/k)+1;
}

var arr=['20','5'];
console.log(boxesAndBottles(arr));

arr=['17','7'];
console.log(boxesAndBottles(arr));

arr=['5','10'];
console.log(boxesAndBottles(arr));

