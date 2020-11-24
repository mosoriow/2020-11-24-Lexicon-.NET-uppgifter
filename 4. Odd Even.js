function oddEven(arr) {
    let n=Number(arr[0]);

    if(Number.isInteger(n)) {
        if(n%2==0)
            return 'even';
        else
            return 'odd';
    }
    else // it is not an integer
        return 'invalid';
}

var array=['5'];
console.log(oddEven(array));

array=['8'];
console.log(oddEven(array));

array=['1.5'];
console.log(oddEven(array));

