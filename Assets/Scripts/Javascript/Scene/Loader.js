function Loader() {

	this.name = "Loader";
	this.GameObjects = [];

	this.started = false;

	// init of constructor (call when "new Loader")
	this.Awake = function(){

		console.clear();
		// %c System:Loader = "add color" to console
		console.log("%c System:Scene" + this.name + "Created!", 'background:#222; color:#bada55');
	};

	// init game
	this.Start = function(){

		if(!this.started){
			Time.SetTimeWhenGameBegin();
			// HERE? ok
			LoadImages();

			// operation of Start
			Scenes["Scene1"] = new Scene1();
			Scenes["Scene2"] = new Scene2();
			Application.LoadedScene = Scenes["Scene1"];

			this.started = true;
			console.log("%c System:Scene" + this.name + "Started!", 'background:#222; color:#bada55');
			Time.SetTimeWhenGameLoaded();
		}
		this.Update();
	};

	// update game 
	this.Update = function(){

		if (!Application.GamePaused) {
			for (var i = 0; i < this.GameObjects.length; i++) {
				//this.GameObjects[i].Start();
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