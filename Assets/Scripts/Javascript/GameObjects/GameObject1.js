function GameObject1(){
	this.name = "GameObject1";
	this.started = false;
	this.enabled = true;

	this.frameHovered = 0;
	
	this.Transform = {
		position : new Vector(),
		size : new Vector()
	};

	this.Physics = {
		enabled : true,

		clickable : true,

		dragAndDroppable : true,
		colliderIsSameSizeAsTransform : false,

		boxCollider : {
			position : new Vector(),
			size : new Vector(),
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
		}
		//colliderIsSameSizeAsTransform		____TEST
		// set Transform and boxCollider
		if(!this.Physics.colliderIsSameSizeAsTransform){
			this.Transform.position.x = this.Physics.boxCollider.position.x = 100;
			this.Transform.position.y = this.Physics.boxCollider.position.y = 100;
			this.Transform.size.x = this.Physics.boxCollider.size.x = 200;
			this.Transform.size.y = this.Physics.boxCollider.size.y = 100;

			// Something like that?
			this.Physics.colliderIsSameSizeAsTransform = true;
		}

		this.Update();

	};

	this.Update = function(){
		// background
		ctx.fillStyle = "green";
		ctx.fillRect(this.Transform.position.x, this.Transform.position.y, this.Transform.size.x, this.Transform.size.y);
		//if () {}	Physics.clickable : true	Input.MouseClick	frameHovered > 1
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