require(["./m1"], function (m) {
	console.log("app1: ", m);
});

document.getElementById("load1").addEventListener("click", function () {
	require(["./m/m2"], function (m) {
		console.log("load1: ", m);
	});
});