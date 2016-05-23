function Run() 
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	if (Application.LoadedScene != null) Application.LoadedScene.Start();
	
	if(Input.mouseReload > 0) Input.mouseClick = false;

	RequestAnimationFrame(Run);
}