require.ensure([], function (require) {
	var m1 = require("./m1");
	console.log("app1: ", m);
}, 'm1');

document.getElementById("load1").addEventListener("click", function () {
	require(["./m/m2"], function (m) {
		console.log("load1: ", m);
	});
});