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
function SceneGame() 
{
	this.name = "SoundGame";
	this.GameObjects =[];
	this.Groups = [];
	this.Cameras = [];
	this.CurrentCamera = null;
	this.AlphaMask = null;
	this.started = false;

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
			//Model: Audios[name].src = "Assets/Graphics" + AudioPath[name].path;
			for (var i = 0; i < AudioPath.length; i++) 
			{
				var name = AudioPath[i].name;
				Audios[name] = document.createElement('audio');
				Audios[name].src = "Assets/Audio/" + AudioPath[i].path;
				Audios[name].addEventListener('canplaythrough', function()
				{
					audioLoaded ++;
					Scenes.Loader.imageLoaded = audioLoaded;
					if (audioLoaded == AudioPath.length) 
					{
						// All Audio are Loaded
						AudioLoaded(audioLoaded);
					}
				}, false);
				if (AudioPath[i].name != "Bend") {
					Audios[name].addEventListener('ended', function()
					{
						for (var i = 0; i <  AudioPath.length; i++) 
						{
							if (AudioPath[i].name != "Bend") {
								Audios[AudioPath[i].name].currentTime = 0;							
								Audios[AudioPath[i].name].play();						
							}
						}
					}, false);
				}
			}
			
			function AudioLoaded(_audioLoaded) 
			{
				Print('System: ' + _audioLoaded + " Loaded !");

				for (var i = 0; i <  AudioPath.length; i++) 
				{
					if (AudioPath[i].name != "Acoustic") {
						Audios[AudioPath[i].name].volume = 0;
						
						var randomX;
						var randomY;
						randomX = Math.Random.RangeInt(0, window.innerWidth - 100, false);
						randomY = Math.Random.RangeInt(0, window.innerHeight - 100, false);

						if (AudioPath[i].name != "Bend") {

						Application.LoadedScene.GameObjects.push(new MusicNote(new Vector(randomX, randomY), Audios[AudioPath[i].name]));
						}
					}
					Audios[AudioPath[i].name].play();
				}
			}

			// Create GameObj
			this.GameObjects.push(new MainSquare());

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
			ctx.fillStyle = "#6DF65B";
			ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

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