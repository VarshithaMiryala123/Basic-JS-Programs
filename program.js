//fibonacci
function fibonacci(n) {
    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i++) {
        console.log(a);

        let temp = a + b;
        a = b;
        b = temp;
    }
}

fibonacci(10);
//even odd
function evenodd(a) {
    if (a%2==0) {
        console.log("even")
    } else {
        console.log("odd")
    }
}

evenodd(56)
//operator
function operator(a,b,c) {

    switch (c) {
        case "+" :
            console.log(a+b);
            break;
        case "-" :
            console.log(a-b);
            break;
        case '/' :
            console.log(a/b);
            break;
        case '*' :
            console.log(a*b)
            break;
    }
}
operator(45,56,"-");

//which day
let day = 5;
switch(day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thrusday");
        break;
    case 6:
        console.log("friday");
        break;
    case 7:
        console.log("saturday");
        break;
    
}

// Find Factorial of a number.

// String reversal using Math.floor

let num = 5;
let f = 1
 for(let i = 1;i<=num;i++) {
    f = f*i
    
 }
 console.log(f);

 //string reversal
 let n=1234;
 let reverse = 0;
 for (;n>0;n=Math.floor(n/10)) {
    let rem=n%10;
    reverse=reverse*10+rem;
 }
 console.log(reverse)


