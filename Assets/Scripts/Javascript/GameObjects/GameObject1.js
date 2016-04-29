function GameObject1(){
	this.name = "GameObject1";
	this.started = false;
	this.enabled = true;

	this.frameHovered = 0;
	/*
	this.Transform = {
		position : new Vector(),
		position.x : 100,
		position.y : 100,
		size : new Vector(),
		size.x : 200,
		size.y : 100,
	};

	this.Physics = {
		enabled : true,

		clickable : true,

		dragAndDroppable : true,
		colliderIsSameSizeAsTransform : false,

		boxCollider : {
			position : new Vector(),
			position.x : 100,
			position.y : 100,
			size : new Vector(),
			size.x : 200,
			size.y : 100
		}
	};
	*/
	

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
		// background
			ctx.fillStyle = "green";
			ctx.fillRect(100, 100, 200, 100);
		if( !Application.GamePaused && this.enabled ){

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