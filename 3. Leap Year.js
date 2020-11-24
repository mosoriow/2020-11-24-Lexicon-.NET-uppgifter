function leapYear(arr) {
    let year=Number(arr[0]);

    if( ( (year%4==0) && (year%100!=0) ) || (year%400==0) )
        return 'yes';
    else
        return 'no';
}

var array=['1999'];
console.log(leapYear(array));

array=['2000'];
console.log(leapYear(array));

array=['1900'];
console.log(leapYear(array));
