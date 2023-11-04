"use strict";
{
    // nullable type / unknown type
    var searchName = function (value) {
        if (value) {
            console.log('seatching');
        }
        else {
            console.log('there is nothing to search');
        }
    };
    searchName(null);
    // unknown typeof
    var getSpeedInMeterPerSecond = function (value) {
        if (typeof value === 'number') {
            var convertedSpeed = (value * 1000) / 3600;
            console.log("The speed is ".concat(convertedSpeed, " ms^-1"));
        }
        else if (typeof value === 'string') {
            var _a = value.split(' '), result = _a[0], unit = _a[1];
            var convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log("The speed is ".concat(convertedSpeed, " ms^-1"));
        }
        else {
            console.log('wrong input');
        }
    };
    getSpeedInMeterPerSecond("100 kmh^-1");
    var throwerror = function (msg) {
        throw new Error(msg);
    };
    throwerror("error hogaya");
}
