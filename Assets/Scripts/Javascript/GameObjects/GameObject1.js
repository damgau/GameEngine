function GameObject1(){
	this.name = "GameObject1";
	this.started = false;
	this.enabled = true;
	this.rendered = true;

	//why? 
	this.frameHovered = 0;
	
	this.Transform = {
		position : new Vector(),
		size : new Vector(),
		scale : new Vector(),
		//Between 0 and 1
		pivot : new Vector()
	};

	this.Renderer = {
		that : this.Transform,
		isVisible : true,
		isSpriteSheet : true,
		animationCount : 0,

		material : {

			source : "",

			sizeFrame : new Vector(),
			currentFrame : new Vector()
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
				//console.log(this.material.currentFrame);

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
					scaledSizeY
					);	
			} else {
				var scaledSizeX = this.that.size.x*this.that.scale.x;
				var scaledSizeY = this.that.size.y*this.that.scale.y;
				
				ctx.drawImage(this.material.source, 
					this.that.position.x - this.that.pivot.x * scaledSizeX, 
				this.that.position.y - this.that.pivot.y * scaledSizeY, 
				scaledSizeX,
				scaledSizeY
				);
			}
		}
	};
	this.Physics = {
		enabled : true,

		clickable : true,

		dragAndDroppable : true,
		colliderIsSameSizeAsTransform : true,

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
			this.Transform.position.x = 250;
			this.Transform.position.y = 250;
			this.Transform.size.x = 400;
			this.Transform.size.y = 400;
			this.Transform.scale.x = .5;
			this.Transform.scale.y = .5;
			this.Transform.pivot.x = .5;
			this.Transform.pivot.y = .5;
			this.Renderer.material.source = Images["bowser_spritesheet"];

			//TEST ANIMATION ______

			this.Renderer.material.currentFrame = new Vector();
			this.Renderer.material.sizeFrame = new Vector();
			this.Renderer.material.sizeFrame.x = 64;
			this.Renderer.material.sizeFrame.y = 64;

			if (this.Renderer.animation.animated) {

				
				var columns = 4;
				var lines = 4;
				var sizeAnimation = 64;
				for (var line = 0; line < lines; line++) {
					var tabByAnim = [];
					for (var column = 0; column < columns; column++) {
						tabByAnim.push({
							srcX : this.Renderer.material.sizeFrame.x * column,
							srcY : this.Renderer.material.sizeFrame.y * line
						});
					}
					this.Renderer.animation.animations.push(tabByAnim);
					this.Renderer.animation.current = this.Renderer.animation.animations[0];
				}
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