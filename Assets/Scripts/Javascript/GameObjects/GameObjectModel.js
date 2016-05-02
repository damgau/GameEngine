function GameObject(){
	this.name = "Model";
	this.started = false;
	this.enabled = true;
	this.rendered = true;

	this.frameHovered = 0;

	this.Transform = {
		position : new Vector(),
		size : new Vector()
		scale : new Vector(),
		//Between 0 and 1
		pivot : new Vector()
	};
	this.Renderer = {
		that = this.Transform,
		isVisible : true,
		isSpriteSheet : true,
		material : {

			source : ""

			sizeFrame : new Vector(),
			currentFrame : new Vector()
		},
		animation : {
			animated : true,
			animations : [],
			current : [],
			// time between 2 animations
			totalAnimationLength : 0
		}
		draw : function(){
			// A completer
			if (this.isSpriteSheet) {}
			//ctx.drawImage(Images["bowser_spritesheet"], 0, 0, 40, 40);
			ctx.drawImage(this.material.source, 
				this.that.position.x - this.that.pivot.x * this.that.size.x * this.that.scale.x, 
				this.that.position.y - this.that.pivot.y * this.that.size.y * this.that.scale.y, 
				this.that.size.x * this.that.scale.x, 
				this.that.size.y * this.that.scale.y
			);
		}
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
			// set Transform(position, size, scale and pivot)
			// set Renderer.material.source (Images[""])
			// set boxCollider
			if(this.Physics.colliderIsSameSizeAsTransform){
				this.Physics.boxCollider = this.Transform;
			}
			this.started = true;
			console.log("%c System:GameObject" + this.name + "Started!", 'background:#222; color:#bada55');

		}

		this.Update();

	};

	this.Update = function(){
		// check in Scene
		//if( !Application.GamePaused && this.enabled ){
		if( this.enabled ){
			//Draw renderer if it exists
			//this.Renderer.draw();
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