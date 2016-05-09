/**	**** Create a new Scene **** 
*
*	@step 1							Copy the content of this file in a new .js document.
*   ----------------------------------------------------------------------------------------------------------------------------
*	@step 2							Save the new file in Assets/Javascript/Scenes/NameOfYourScene.js .
*   ----------------------------------------------------------------------------------------------------------------------------
*	@step 3                      	In the index.html add below this comment <!-- Scene --> the line: 
*                    "<script type="text/javascript" src="Assets/Scripts/Javascript/Scenes/NameOfYourGameObject.js"></script>"
*	----------------------------------------------------------------------------------------------------------------------------
*	@step 4						    For create a new scene, use this instruction: "new Scene()".
*/

/*	**** How to make the setup of a Scene ****
*	
*	@property name 																											{string} 			 
*	The name of the scene.
*	--------------------------------------------------------------------------------------------------------------------------------
*	@property GameObjects 																				   {array[GameObject1, ...]} 			 
*	All the GameObject of the scene	
*
*/

/*	**** Scene's Methods ****
*
*	@method Awake()									
*	Called at the instruction new Scene().
*	--------------------------------------------------------------------------------------------------------------------------------
*	@method Start()									
*	Called at the first use of scene in game.
*	--------------------------------------------------------------------------------------------------------------------------------
*	@method Update()								
*	Called each frame,code game is here.
*	--------------------------------------------------------------------------------------------------------------------------------
*	@method GUI()
*	Called each frame, code all the GUI here.
*/

/* **** For launch Scene ****
*
*	To load your scene, use this instruction: "Application.LoadLevel(LevelName)".
*/
function SceneTest() {
	this.name = "SceneTest";
	this.GameObjects =[];

	this.started = false;

	this.Awake = function() {
		//console.clear();
		console.log('%c System:Scene ' + this.name + " Created !", 'background:#222; color:#bada55');

	}
	this.Start = function() {
		if (!this.started) {
			Time.SetTimeWhenSceneBegin();
			// operation start

			/*		Test : Translate/Rotate
			var goTest = new GOTest();
			this.GameObjects.push(goTest);
			*/
			/*		Test : Particules
			var particuleSystem = new ParticuleSystem();
			this.GameObjects.push(particuleSystem);
			*/
			var go2 = new GOTest2();
			var go3 = new GOTest3();
			var go4 = new GOTest4();

			this.GameObjects.push(go3, go4, go2);
			this.started = true;
			console.log('%c System:Scene ' + this.name + " Started !", 'background:#222; color:#bada55');
			Time.SetTimeWhenSceneLoaded();
		}
		this.Update();
	}
	this.Update = function() {
		if (!Application.GamePaused) {

			for (var i = 0; i < this.GameObjects.length; i++) {
				this.GameObjects[i].Start();
			}

			/*		Test : Particules
			ctx.fillStyle = "blue";
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			*/
			/* 		Test : Gfx
			ctx.fillStyle = "blue";
			ctx.fillRect(20, 20, canvas.width - 20, canvas.height - 20);

			ctx.fillStyle = "red";
			ctx.fillRect(500, 500, 400, 100);

			ctx.fillStyle = "green";
			ctx.fillRect(500, 30, 500, 100);
			*/
			/*		Test : Gfx
			Gfx.Filters.Sepia({
							x : 0,
							y : 0,
							w : canvas.width,
							h : canvas.height
						});
			Gfx.Filters.Mask({
							x : 0,
							y : 0,
							w : canvas.width,
							h : canvas.height
						}, Images["mask2"]);
			*/
			
		}
		this.GUI();
	}
	this.GUI = function() {
		if (!Application.GamePaused) {
			//Show UI
			Debug.debugScene();
		} else {
			// Show pause menu
		}
	}

	this.Awake()
}