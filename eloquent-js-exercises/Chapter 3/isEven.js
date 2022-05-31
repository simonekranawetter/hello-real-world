function isEven(number){
    if(number < 0){
        return isEven(-number); //Added this to handle snack overflow
    }
    else if(number === 0){
        return true;
    }
    else if (number === 1){
        return false;
    }
    else{
        return isEven(number -2);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));  //LOL, snack overflow if not handled correctly. 