function Run() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	console.log("It works");

	if (Application.LoadedScene != null) {
		Application.LoadedScene.Start();
	}
	RequestAnimationFrame(Run);
}