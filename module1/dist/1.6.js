"use strict";
{
    // learning function 
    // normal function 
    // arrow function 
    // function add(num1: number, num2: number = 10): number {
    //    return  num1 + num2;
    // }
    // add(2, 2)
    var addArrow = function (num1, num2) { return num1 + num2; };
    // object function method
    var poorUSer = {
        name: 'Bappy',
        balance: 0,
        addBalance: function (balance) {
            return "My new balance is: ".concat(this.balance + balance);
        }
    };
    var arr = [1, 2, 3, 4];
    var newArry = arr.map(function (elem) { return elem * elem; });
}
