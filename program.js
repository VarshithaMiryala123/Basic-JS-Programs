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

function evenodd(a) {
    if (a%2==0) {
        console.log("even")
    } else {
        console.log("odd")
    }
}

evenodd(56)

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