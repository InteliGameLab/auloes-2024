
function dalekInterceptado1(dk, td) {
    if (dk.x > (td.x - 10) &&
    dk.x < (td.x + 10) &&
    dk.y > (td.y - 10) &&
        dk.y < (td.y + 10)) {
            return true;
    } else {
        return false;
    }
}


function dalekInterceptado2(dk, td) {
    if (dk.x === (td.x - 10) &&
    dk.x === (td.x + 10) &&
    dk.y === (td.y - 10) &&
        dk.y === (td.y + 10)) {
            return true;
    } else {
        return false;
    }
}


function dalekInterceptado3(dk, td) {
    if ((dk.x > (td.x - 10) || dk.x < (td.x + 10)) &&
    (dk.y > (td.y - 10) || dk.y < (td.y + 10))) {
        return true;
    } else {
        return false;
    }
}
            
function dalekInterceptado4(dk, td) {
    if (dk.x >= (td.x - 10) &&
        dk.x <= (td.x + 10) &&
        dk.y >= (td.y - 10) &&
        dk.y <= (td.y + 10)) {
        return true;
    } else {
        return false;
    }
}
            

function dalekInterceptado5(dk, td) {
    if (dk.x > td.x && dk.y > td.y) {
        return true;
    } else {
        return false;
    }
}

console.log("A",dalekInterceptado1({x: 10, y: 10}, {x:20 , y: 20}));
console.log("B",dalekInterceptado2({x: 10, y: 10}, {x:20 , y: 20}));
console.log("C",dalekInterceptado3({x: 10, y: 10}, {x:21 , y: 21}));
console.log("D",dalekInterceptado4({x: 10, y: 10}, {x:20 , y: 20})); 
console.log("E",dalekInterceptado5({x: 10, y: 10}, {x:20 , y: 20}));