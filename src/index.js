let count;

function recurse() {
    if(count === undefined){
        count = 0
    }
    else {
        count++;
    }
    return count;
}

for (var i = 0; i<= 10; i++){
    console.log(recurse())
}