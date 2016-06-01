var n;

function fib(n) {
  var sq5 = Math.sqrt(5);
  var a = (1 + sq5) / 2;
  var b = (1 - sq5) / 2;
  return (Math.pow(a, n) - Math.pow(b, n)) / sq5;
}


console.log(fib(n));

window.addEventListener("load", init, false);

function init () {  
test.addEventListener("click", action, true);
}

function action(){
    n = prompt('type n' ,n);
    alert(fib(n));
}