
var a = 20;
(function a() { 
     a = 10; 
     console.log(a); // function a(){}
})();
console.log(a)  //20

// var a = 20;
// (function a() {
//      var a = 10;  //局部变量
//     console.log(a); // 10
// })();
// console.log(a)  //20
