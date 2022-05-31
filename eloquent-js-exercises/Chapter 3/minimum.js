// Most basic solution not accounting for cases where both are the same
function minimum(x, y){
    return x > y ? y : x;
}

console.log(minimum(0, 10));
console.log(minimum(0, -10));

//This solution accounts for the case when both numbers are the same

function minimum2(x, y){
    if (x === y){
        return x;
    }
    else if (x > y){
        return y;
    }
    else{
        return x;
    }
}

console.log(minimum2(0, 10));
console.log(minimum2(0, -10));
console.log(minimum2(10,10));