"use strict";
var _a, _b;
{
    // tarnary operator || optional chaining || nullish coalescing operator 
    var age = 16;
    if (age >= 18) {
        console.log('adult');
    }
    else {
        console.log("not adult");
    }
    var isAdult = age >= 18 ? 'adult' : 'not adult';
    console.log({ isAdult: isAdult });
    // nullish operator 
    var isAuthenticated = null;
    var result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : 'guest';
    var result2 = isAuthenticated ? isAuthenticated : 'Guest';
    console.log({ result1: result1 }, { result2: result2 });
    var user_1 = {
        name: 'bappy',
        address: {
            city: "dhaka",
            road: "12",
            presentAdress: "dha",
        }
    };
    var parmanentAdress = (_b = (_a = user_1 === null || user_1 === void 0 ? void 0 : user_1.address) === null || _a === void 0 ? void 0 : _a.parmanentAdress) !== null && _b !== void 0 ? _b : 'No adress';
    console.log(parmanentAdress);
}
