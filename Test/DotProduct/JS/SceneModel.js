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
function SceneModel() 
{
	this.name = "SceneTest";
	this.GameObjects =[];
	this.started = false;

	/**
	 * Called at the instruction new Scene().
	 * */
	this.Awake = function() 
	{
		//console.clear();
		//Print('System:Scene ' + this.name + " Created !");
	}
	
	/**
	 * Start the Scene and show a message in console or launch Update() if already started
	 * Called at the first use of scene in game.
	 * */
	this.Start = function() 
	{
		if (!this.started) 
		{
			// operation start
			this.GameObjects.push(new GameObject());
			this.started = true;
			//Print('System:Scene ' + this.name + " Started !");
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
			 for (var i = 0; i < this.GameObjects.length; i++) 
			 {
			 	this.GameObjects[i].Start();
			 }
			// recupere Input.MousePosition
			// DotProduct --> Mouse, GO
			// 												IL MANQUE LES ANGLES
			var mousePositionNormalize = Input.MousePosition.Normalize();
			var goNormalize = this.GameObjects[0].Transform.Position.Normalize();

			console.log(Math.DotProduct(mousePositionNormalize, goNormalize));
		}
	}

	this.Awake();
}