function Scene1() {

	this.name = "Scene1";
	this.GameObjects = [];

	this.started = false;

	// init of constructor (call when "new Scene")
	this.Awake = function(){

		console.clear();
		// %c System:Scene = "add color" to console
		console.log("%c System:Scene" + this.name + "Created!", 'background:#222; color:#bada55');
	};

	// init game
	this.Start = function(){
		if(!this.started){
			Time.SetTimeWhenSceneBegin();
			var gameObject1 = new GameObject1();
			var gameObject2 = new GameObject2();

			this.GameObjects.push(gameObject1, gameObject2);		

			// operation of Start
			this.started = true;
			console.log("%c System:Scene" + this.name + "Started!", 'background:#222; color:#bada55');
			Time.SetTimeWhenSceneLoaded();
		}
		this.Update();
	};

	// update game 
	this.Update = function(){

		if (!Application.GamePaused) {
			// background
			ctx.drawImage(Images["image3"], 0, 0, 1024, 728);
			for (var i = 0; i < this.GameObjects.length; i++) {
				this.GameObjects[i].Start();
			}
		}

		this.GUI();
	};
	this.GUI = function(){
		if(!Application.GamePaused){
			// show UI
		} else {
			// show pause menu
		}
	};

	this.Awake();
}