 console.log(f);
 //string reversal
 let num=1234;
 let reverse = 0;
 for (num>0;num=Math.floor(num/10)) {
    let rem=num%10
    reverse=reverse*rem
 }
 console.log(reverse)