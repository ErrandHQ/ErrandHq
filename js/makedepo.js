let amount = document.getElementById('amount');
let error = document.getElementById('err')

/*Quick Amount 1k*/
function btn1k() {
    let result = amount.value = 1000;
    return result;
}

/*Quick Amount 5k*/

function btn5k() {
    let result = amount.value = 5000;
    return result;
}

/*Quick Amount 7k*/

function btn7k() {
    let result = amount.value = 7000;
    return result;
}


function makeDeposit() {
    try {
        if(amount.value == "") throw "Input is empty";
        if(isNaN(amount.value)) throw "Input is not a number";
        if(amount.value = Number(amount.value)) throw "";
        
    } catch(err) {
        error.innerHTML = err;
    }
}