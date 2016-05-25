/**
 * Create a new Scene
 * <ul><li>Copy the content of this file in a new .js document.</li>
 * <li>Save the new file in Assets/Javascript/Scenes/NameOfYourScene.js .</li>
 * <li>In the index.html add below this comment <!-- Scene --> the line: 
*                    "<script type="text/javascript" src="Assets/Scripts/Javascript/Scenes/NameOfYourGameObject.js"></script>"</li>
 * <li>For create a new scene, use this instruction: "new Scene()".</li>
 * </ul>
 * <strong>To load your scene, use this instruction: "Application.LoadLevel(LevelName)".</strong>
 * 
 * @class
 * 
 * @return {Scene}
 * */
function SceneGameOver() 
{
	this.name = "SceneGameOver";
	this.GameObjects =[];
	this.Groups = [];
	this.Cameras = [];
	this.CurrentCamera = null;
	this.AlphaMask = null;
	this.started = false;

	this.boxReset;

	this.WorldSize = new Vector(4096,4096);

	/**
	 * Called at the instruction new Scene().
	 * */
	this.Awake = function() 
	{
		console.clear();
		Print('System:Scene ' + this.name + " Created !");
	}
	
	/**
	 * Start the Scene and show a message in console or launch Update() if already started
	 * Called at the first use of scene in game.
	 * */
	this.Start = function() 
	{
		if (!this.started) 
		{
			Time.SetTimeWhenSceneBegin();
			// operation start
			this.boxReset = new Box(canvas.width/2 - 100, canvas.width/2 - 70, 200, 100);
			this.started = true;
			Print('System:Scene ' + this.name + " Started !");
			Time.SetTimeWhenSceneLoaded();
		}
		this.Update();
	}
	/**
	 * Start every GameObject, Group and apply the debug mode if asked
	 * Called each frame,code game is here.
	 * */
	this.Update = function() 
	{
		if (!Application.GamePaused) 
		{
			ctx.fillStyle = "#11A348";
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			ctx.fillStyle = "#0D815F";
			ctx.fillRect(canvas.width/2 - 100, canvas.width/2 - 70, 200, 100);

			// Message
			ctx.font = '40px Arial';
			ctx.fillStyle = 'black';
			ctx.fillText('Game Over', canvas.width/2 - 100, canvas.width/2 - 400);

			// Message
			ctx.font = '28px Arial';
			ctx.fillStyle = 'black';
			ctx.fillText('Score : ' + Scenes["Forest"].score, canvas.width/2 - 60, canvas.width/2 - 90);

			// Message
			ctx.font = '28px Arial';
			ctx.fillStyle = 'black';
			ctx.fillText('Restart !', canvas.width/2 - 55, canvas.width/2 - 20);

			if (Input.mouseClick 
				&& Physics.CheckCollision(Input.MousePosition, this.boxReset)){

				Scenes["Forest"] = new SceneForest();
				Application.LoadedScene = Scenes["Forest"];
			}

			for (var i = 0; i < this.GameObjects.length; i++) 
			{
				this.GameObjects[i].Start();
			}
			for (var i = 0; i < this.Groups.length; i++) 
			{
				this.Groups[i].Start();
			}
		}
		if (Application.debugMode) 
		{
			Debug.DebugScene();
		}
		this.GUI();
	}
	/**
	 * Called each frame, code all the GUI here.
	 * */
	this.GUI = function() 
	{
		if (!Application.GamePaused) 
		{
			//Show UI
		} 
		else 
		{
			// Show pause menu
		}
	}

	this.Awake()
}