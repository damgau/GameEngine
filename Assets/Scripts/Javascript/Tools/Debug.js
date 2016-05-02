var Debug = {}
Debug.showStats = function(){
	ctx.fillStyle = "rgba(122, 122, 122, .4)";
	ctx.fillRect(4,4,150,70);

	ctx.font = '14px Georgia';
	if(Time.FPS > 40) ctx.fillStyle = "green";
	if(Time.FPS < 40) ctx.fillStyle = "orange";
	if(Time.FPS < 20) ctx.fillStyle = "red";
	ctx.fillText('FPS : ' + Time.FPS, 40, 20);
	//console.log(Time.FPS)

	ctx.fillStyle = 'white';
	ctx.fillText("Game : " + (Time.GetTimeSinceGameBegin() / 1000 |0).toString().toHHMMSS(), 15, 40);
	//console.log(Time.GetTimeSinceGameBegin())
	ctx.fillText("Scene : " + (Time.GetTimeSinceSceneLoaded() / 1000 |0).toString().toHHMMSS(), 15, 60);

	ctx.fillStyle = Input.MouseClick ? "green" : "white";
	ctx.fillText("x : " + ~~(Input.MousePosition.x) + ", y : " + ~~(Input.MousePosition.y),
	 Input.MousePosition.x + 10, 
	 Input.MousePosition.y);

	ctx.fillStyle = "rgba(122, 122, 122, .4)";
	ctx.fillRect(canvas.width - 130, 4, 125, 30);
	ctx.fillStyle = "white";
	ctx.fillText("Scene : " + Application.LoadedScene.name, canvas.width - 120, 23);
}
