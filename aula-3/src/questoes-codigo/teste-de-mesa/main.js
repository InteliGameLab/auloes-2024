var a = 9
var b = 7
var c = 5
var d = 3
var e = 0
var f = 0
var g = 0

if (a > b && a > c && a > d) {
    e = a;
}
else if (b > a && b > c) {
    e = b;
} else { e = c; }

if (c > d) {
    f = c;
    c = d;
    c = f;
}

if (a > b || c < d) {
    g += 1;
} else { f += 1 }

if (b < c) {
    e = e + 2;
    f = f + 2;
}

if (d < a) {
    e += 3;
    f += 3;
    a -= 4;
}
g += 3;

console.log("a = " + a);
console.log("b = " + b);
console.log("c = " + c);
console.log("d = " + d);
console.log("e = " + e);
console.log("f = " + f);
console.log("g = " + g);

