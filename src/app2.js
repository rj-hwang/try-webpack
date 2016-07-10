require(["./m1"], function (m) {
	console.log("app2: ", m);
});

document.getElementById("load2").addEventListener("click", function () {
	require(["./m/m2", "./m1"], function (m, m1) {
		console.log("load2: ", m);
	});
});