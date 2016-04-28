function GameObject(){
	this.name = "Model";
	this.started = false;
	this.enabled = true;

	

	this.Awake = function(){

		console.clear();
		// %c System:Scene = "add color" to console
		console.log("%c System:GameObject" + this.name + "Created!", 'background:#222; color:#bada55');
	};

	this.Start = function(){

		if(!this.started){
			// operation of Start
			this.started = true;
			console.log("%c System:GameObject" + this.name + "Started!", 'background:#222; color:#bada55');
		}

		this.Update();

	};

	this.Update = function(){
		// check in Scene
		//if( !Application.GamePaused && this.enabled ){
		if( this.enabled ){

		}
		this.GUI();
	};

	this.GUI = function(){

	};
	this.Awake();
}