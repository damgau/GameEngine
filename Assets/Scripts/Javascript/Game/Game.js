function Run() {
	Time.SetTimeValues();
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	//console.log("It works");
	// ICI ?? 
	Physics.checkClick();

	if (Application.LoadedScene != null) {
		Application.LoadedScene.Start();
	}
	RequestAnimationFrame(Run);
}