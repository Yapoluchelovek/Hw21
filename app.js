//№1
let a1 = 1, b1 = 1; 
let c1 = ++a + --a + b-- - b; // ? 
let d1 = b++ - a - ++b + b++ - --a; // ?

c = 
++a //2
+ //3
--a //1
+ //4
b-- //1
- //4
b //0

c = 4

d = 
b++ //0, 1
- //-1
a //1
- //-3
++b //2
+ // -1
b++ //2, 3
- //-1
--a //-1

d = -1

// Ответ: c1 = 4, d1 = -1

console.log(a, b, c, d);

//№2

let a2 = 2; 
let x2 = 5 + (a *= 2 + (a += 4) + a++); // ?
// a?

x = 5 
+
(a*=2 //4
    + //12
    (
        a+=4 //8
    )
    + //20
    a++ //8
)

// Ответ: х = 20, а = 9

//№3

"" + 1 + 0 // ? 
"" - 1 + 0 // ?
true + false // ?
6 / "3" // ?
"2" * "3" // ?
4 + 5 + "px" // ?
"$" + 4 + 5 // ?
"4" - 2 // ?
"4px" - 2 // ?
7 / 0 // ?
" -9 " + 5 // ? 
" -9 " - 5 // ?
null + 1 // ?
undefined + 1 // ?

let il = "";
let li = 1;
console.log(il + li);