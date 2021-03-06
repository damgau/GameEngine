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
function SceneForest() 
{
	this.name = "Forest";
	this.GameObjects =[];
	this.Groups = [];
	this.Cameras = [];
	this.CurrentCamera = null;
	this.AlphaMask = null;
	this.started = false;

	this.Player;
	this.maxEnnemy = 3;

	// SCORE
	this.score = 0;

	this.WorldSize = new Vector(4096,4096);

	/**
	 * Called at the instruction new Scene().
	 * */
	this.Awake = function() 
	{
		//console.clear();
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
			Application.debugMode = true;
			this.Player = new MainChar();
			this.GameObjects.push(this.Player);

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
			// BackGround
			ctx.fillStyle = "#11A348";
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			ctx.beginPath();
			ctx.arc(canvas.width/2, canvas.height/2, 300, 0, Math.PI * 2);
			ctx.fill();
			ctx.stroke();
			ctx.closePath();

			// Message
			ctx.font = '28px Arial';
			ctx.fillStyle = 'black';
			ctx.fillText('Score : ' + this.score, 200, 50);

			if (this.GameObjects.length < this.maxEnnemy + 1) {
				this.GameObjects.push(new BasicEnnemy());
			}
			for (var i = 0; i < this.GameObjects.length; i++) 
			{
				this.GameObjects[i].Start();
			}
			// for (var i = 0; i < this.Groups.length; i++) 
			// {
			// 	this.Groups[i].Start();
			// }

			if (!this.Player.offsetSaved) {
				// Test game in pause
				Application.GamePaused = true;
			}
		}
		// Game paused
		else
		{
			ctx.fillStyle = "#11A348";
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			ctx.font = '28px Arial';
			ctx.fillStyle = 'black';
			ctx.fillText('Player need to "equilibre" is position for start the game', 800, 50);

			this.Player.Start();
			if (this.Player.offsetSaved) {
				Application.GamePaused = false;
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

	this.Awake();
}