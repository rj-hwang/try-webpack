//import m1 from './m1';
//import m2 from './m/m2';
require(["./m1"], function (m) {
    console.log(m);
});

document.getElementById("load").addEventListener("click", function () {
    require(["./m/m2"], function (m) {
        console.log(m);
    });
});