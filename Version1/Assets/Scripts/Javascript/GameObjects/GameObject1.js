function GameObject1(){
	this.name = "GameObject1";
	this.started = false;
	this.enabled = true;
	this.rendered = true;

	//why? 
	this.frameHovered = 0;
	
	this.Transform = {
		position : new Vector(250, 250),
		size : new Vector(400, 400),
		scale : new Vector(.5, .5),
		//Between 0 and 1
		pivot : new Vector(.5, .5)
	};

	this.Renderer = {
		that : this.Transform,
		isVisible : true,
		isSpriteSheet : true,
		animationCount : 0,

		material : {

			source : "",

			sizeFrame : new Vector(64, 64),
			currentFrame : new Vector(0, 0)
		},
		animation : {
			animated : true,
			animations : [],
			current : [],
			currentIndex : 0,
			// in secondes
			totalAnimationLength : .5
		},
		draw : function() {
			if (this.isSpriteSheet) {
				if (this.animation.animated) {
					if (this.animationCount > this.animation.totalAnimationLength/this.animation.current.length) {
						this.animation.currentIndex ++ ;
						this.animationCount = 0 ;
						if (this.animation.currentIndex > this.animation.current.length-1) {
							this.animation.currentIndex = 0;
						}
					}
					this.animationCount += Time.DeltaTime ;
				} else {
					this.animationCount = 0;
					this.animation.currentIndex = 0;
				}
				this.material.currentFrame = this.animation.current[this.animation.currentIndex];
				console.log(this.material.currentFrame);

				var scaledSizeX = this.that.size.x * this.that.scale.x;
				var scaledSizeY = this.that.size.y * this.that.scale.y;

				// animate
				ctx.drawImage(this.material.source, 
					this.material.currentFrame.x,
					this.material.currentFrame.y,
					this.material.sizeFrame.x,
					this.material.sizeFrame.y,
					this.that.position.x - this.that.pivot.x * scaledSizeX, 
					this.that.position.y - this.that.pivot.y * scaledSizeY, 
					scaledSizeX,
					scaledSizeY);	
			} else {
				var scaledSizeX = this.that.size.x * this.that.scale.x;
				var scaledSizeY = this.that.size.y * this.that.scale.y;
				
				ctx.drawImage(this.material.source, 
					this.that.position.x - this.that.pivot.x * scaledSizeX, 
					this.that.position.y - this.that.pivot.y * scaledSizeY, 
					scaledSizeX,
					scaledSizeY);
			}
		}
	};
	this.Physics = {
		enabled : true,

		clickable : true,

		dragAndDroppable : true,
		colliderIsSameSizeAsTransform : false,

		boxCollider : {
			position : new Vector(),
			size : new Vector()
		}
	};
}

	this.Awake = function(){

		console.clear();
		// %c System:Scene = "add color" to console
		console.log("%c System:GameObject" + this.name + "Created!", 'background:#222; color:#bada55');
	};

	this.Start = function(){

		if(!this.started){
			// operation of Start
			this.started = true;
			var img = Images["bowser_spritesheet"];
			this.Renderer.material.source = img;

			//TEST ANIMATION ______

			//this.Renderer.material.currentFrame = new Vector(0, 0);
			//this.Renderer.material.sizeFrame = new Vector();
			

			if (this.Renderer.animation.animated) {
				
				for (var i = 0; i < img.height; i+= this.Renderer.material.sizeFrame.y) {
					var array = [];
					for (var j = 0; j < img.width; j+= this.Renderer.material.sizeFrame.x) {
						array.push(new Vector(j,i));
					}
					this.Renderer.animation.animations.push(array);
				}
				this.Renderer.animation.current = this.Renderer.animation.animations[0];
				}
			

			if(this.Physics.colliderIsSameSizeAsTransform){
				
				this.Physics.boxCollider = this.Transform;
			}
			console.log("%c System:GameObject" + this.name + "Started!", 'background:#222; color:#bada55');
		}
		this.Update();

	};

	this.Update = function(){
		//if () {}	Physics.clickable : true	Input.MouseClick	frameHovered > 1
		if( !Application.GamePaused && this.enabled ){
			// left
			if(Input.KeysDown[37]){

				var index = 0;
				this.Renderer.animation.current =  this.Renderer.animation.animations[1];

			}
			// right
			if(Input.KeysDown[39]){
	
			}
			this.Renderer.draw();
			//this.Renderer.currentFrame.draw();

		}
		this.GUI();
	};

	this.GUI = function(){
		if (true) {}
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