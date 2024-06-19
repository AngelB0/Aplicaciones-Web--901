let n =10;
let a =0, b =1;

console.log(a);
if(n>1){
    console.log(b);
}
for(let i = 3; i<=n; i++){
    let c = b;
    b = a+b;
    a =c;
    console.log(b);
}