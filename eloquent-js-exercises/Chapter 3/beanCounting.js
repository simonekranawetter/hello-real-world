function countBs(str){
    let count = 0;
    for (let i = 0 ; i < str.length; i++){
        if(str.charAt(i)=== "B"){ //I'd like to check for "b" too. But it's not required, so no.
            count++;
        }
    }
    return (count);
}
console.log(countBs("BBC"));

function countChar(str, char){
    let count = 0;
    for (let i = 0 ; i < str.length; i++){
        if(str.charAt(i)=== char){
            count++;
        }
    }
    return (count);
}
console.log(countChar("kakkerlak","k"));
