"use strict";
var FakeLibrartClass = (function () {
    function FakeLibrartClass() {
    }
    FakeLibrartClass.prototype.foo = function () {
        console.log("I'm a Fake Library Class");
    };
    return FakeLibrartClass;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FakeLibrartClass;
