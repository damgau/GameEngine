function GameObject(){
	this.name = "Model";
	this.started = false;
	this.enabled = true;

	this.frameHovered = 0;

	this.Transform = {
		position : new Vector(),
		size : new Vector()
	};

	this.Physics = {
		enabled : true,

		clickable : false,

		dragAndDroppable : false,
		colliderIsSameSizeAsTransform : false,

		boxCollider : {
			position : new Vector(),
			size : new Vector()
		}
	};

	

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

			//colliderIsSameSizeAsTransform		____TEST
			// set Transform and boxCollider
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
	this.OnClicked = function(){
		this.frameHovered++;
	}
	this.OnHovered = function(){
		this.frameHovered++;
	}
	this.OnUnHovered = function(){
		this.frameHovered = 0;
	}

	this.Awake();
}