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
function SceneTest2() {
	this.name = "SceneTest2";

	this.Groups =[];
	this.GameObjects =[];

	this.started = false;
	/*
	//		Test : PathFinding
	this.grid = new Grid(100, 800, 800);
	this.map = new Map([],this.grid);
	this.pf = new PathFinding(this.map,this.grid.nbColumn,this.grid.nbLine);
	*/
	this.Awake = function() {
		//console.clear();
		console.log('%c System:Scene ' + this.name + " Created !", 'background:#222; color:#bada55');

	}
	this.Start = function() {
		if (!this.started) {
			Time.SetTimeWhenSceneBegin();
			// operation start
			/*	____ TESTS ____
			//		Test : PathFinding
			this.map.FillMap();
			*/
			var groupTest = new GroupTest();
			groupTest.Start();
			this.Groups.push(groupTest);
			//console.log(this.Groups.length)
			for (var i = 0; i < this.Groups.length; i++) {
					console.log("this.Groups.length")
					console.log(this.Groups[i].tabGO)
				for (var j = 0; j < this.Groups[i].tabGO.length; j++) {
					this.GameObjects.push(this.Groups[i].tabGO[j]);
				}
			}
			
			this.started = true;
			console.log('%c System:Scene ' + this.name + " Started !", 'background:#222; color:#bada55');
			Time.SetTimeWhenSceneLoaded();
		}
		this.Update();
	}
	this.Update = function() {
		if (!Application.GamePaused) {
			/*	____ TESTS ____
			//		Test : PathFinding

			this.map.grid.DrawGrid();
			// when click
			if (Input.MouseClick) {
				var x = (Input.MousePosition.x/this.grid.scale)|0;
				var y = (Input.MousePosition.y/this.grid.scale)|0;
				console.log("x , y : " + x + "," + y);
			}

			for (var i = 0; i < this.map.map.length; i++) {
				if (this.map.map[i] && this.map.map[i].isWalkable == false) {
					
					this.map.map[i].Draw();
				}
			}
			**/
			
			//console.log(this.GameObjects.length)
			for (var i = 0; i < this.GameObjects.length; i++) {
				this.GameObjects[i].Start();

			}
			
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