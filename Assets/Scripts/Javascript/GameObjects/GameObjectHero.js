function GameObjectHero() {
	this.name = "GameObjectHero";
	this.started = false;
	this.enabled = true;
	this.rendered = true;

	this.frameHovered = 0;

	this.Transform = {
		position: new Vector(),
		size: new Vector(),
		scale: new Vector(),
		pivot: new Vector(),
	};

	this.Renderer = {
		isVisible: true,
		isSpriteSheet: true,
		that: this.Transform,
		Material: {
			Source: "",
			sizeFrame: new Vector(),
			CurrentFrame: new Vector(),		
		},

		Animation: {
			animated: true,
			animations:[],
			current:[],
			totalAnimationLength:0,
			animationcountx: 0,
			animationcounty: 0,
			animationdelay: 0,
			animationdelayMax: 0
		},

		draw: function() {
			if (this.isSpriteSheet) {
				ctx.drawImage(this.Material.Source,
					this.Material.sizeFrame.x * this.Animation.animationcountx,
					this.Material.sizeFrame.y * this.Animation.animationcounty,
					this.Material.sizeFrame.x,
					this.Material.sizeFrame.y,
					this.that.position.x,
					this.that.position.y,
					this.Material.sizeFrame.x,
					this.Material.sizeFrame.y);
			} else {
				ctx.drawImage(this.Material.Source,
				this.that.position.x - this.that.pivot.x * this.that.size.x * this.that.scale.x,
				this.that.position.y - this.that.pivot.y * this.that.size.y * this.that.scale.y,
				this.that.size.x * this.that.scale.x,
				this.that.size.y * this.that.scale.y);
			}			
		}
	};

	this.Physics = {
		enabled: true,
		clickable: false,
		dragAndDropable: false,
		colliderIsSameSizeAsTransform: false,
		boxCollider: {
			position: new Vector(),
			size: new Vector()
		}
	};
	this.SetPosition = function(x, y) {
		this.Transform.position.x = x;
		this.Transform.position.y = y;

		if (!this.Physics.colliderIsSameSizeAsTransform) {
			this.Physics.boxCollider.position.x = this.Transform.position.x;
			this.Physics.boxCollider.position.y = this.Transform.position.y;
		}
	};
	this.SetSize = function(x, y){
		this.Transform.size.x = x;
		this.Transform.size.y = y;

		if (!this.Physics.colliderIsSameSizeAsTransform) {
			this.Physics.boxCollider.size.x = this.Transform.size.x;
			this.Physics.boxCollider.size.y = this.Transform.size.y;
		}
	};
	this.SetScale = function(x, y){
		this.Transform.scale.x = x;
		this.Transform.scale.y = y;

		if (!this.Physics.colliderIsSameSizeAsTransform) {
			//this.Physics.boxCollider			__ A quoi ca sert ? Ou on l'utilise ? cree var Scale dans Physics.boxCollider?
		}
	};
	this.SetPivot = function(x, y){
		this.Transform.pivot.x = x;
		this.Transform.pivot.y = y;

		if (!this.Physics.colliderIsSameSizeAsTransform) {
			//this.Physics.boxCollider
		}
	};
	this.Awake = function() {
		console.clear();
		console.log("%c System:GameObject" + this.name + "Created!", "background:#222; color:#bada55");
	};

	this.Start = function() {
		if (!this.started) {
			this.Renderer.Material.Source = Images["Hero"];
			this.Transform.position.x = 200;
			this.Transform.position.y = 200;
			this.Transform.size.x = 128;
			this.Transform.size.y = 192;
			this.Transform.scale.x = 1;
			this.Transform.scale.y = 1;
			this.Transform.pivot.x = .5;
			this.Transform.pivot.y = .5;
			this.Renderer.Material.sizeFrame.x = this.Transform.size.x / 4;
			this.Renderer.Material.sizeFrame.y = this.Transform.size.y / 4;
			this.Physics.boxCollider.position.x = this.Transform.position.x + 10;		
			this.Physics.boxCollider.position.y = this.Transform.position.y + 10;
			this.Physics.boxCollider.size.x = this.Renderer.Material.sizeFrame.x - 20;
			this.Physics.boxCollider.size.y = this.Renderer.Material.sizeFrame.y  - 20;
			this.Renderer.Animation.animationdelay = 10;
			this.Renderer.Animation.animationdelayMax = 10;

			this.started = true;
			if(this.Physics.colliderIsSameSizeAsTransform){
				this.Physics.boxCollider = this.Transform;
			}
			console.log("%c System:GameObject" + this.name + "Started!", "background:#222; color:#bada55");
		}
		this.Update();
	};

	this.Update = function() {
		if (this.enabled) {

			if (Input.KeysDown[37] || Input.KeysDown[38] ||Input.KeysDown[39] || Input.KeysDown[40]) {
				this.Renderer.Animation.animationdelay--;
			} else {
				this.Renderer.Animation.animationcountx = 0;
			}

			if (Input.KeysDown[37]) {
				this.Transform.position.x--;
				this.Physics.boxCollider.position.x--;
				this.Renderer.Animation.animationcounty = 1;
				if (this.Renderer.Animation.animationdelay == 0) {
					if (this.Renderer.Animation.animationcountx < 3) this.Renderer.Animation.animationcountx++;
					else this.Renderer.Animation.animationcountx = 0;
					this.Renderer.Animation.animationdelay = this.Renderer.Animation.animationdelayMax;		
				}
			}

			if (Input.KeysDown[38]) {
				this.Transform.position.y--;
				this.Physics.boxCollider.position.y--
				this.Renderer.Animation.animationcounty = 3;
				if (this.Renderer.Animation.animationdelay == 0) {
					if (this.Renderer.Animation.animationcountx < 3) this.Renderer.Animation.animationcountx++;
					else this.Renderer.Animation.animationcountx = 0;
					this.Renderer.Animation.animationdelay = this.Renderer.Animation.animationdelayMax;	
				}
			}

			if (Input.KeysDown[39]) {
				this.Transform.position.x++;
				this.Physics.boxCollider.position.x++;
				this.Renderer.Animation.animationcounty = 2;
				if (this.Renderer.Animation.animationdelay == 0) {
					if (this.Renderer.Animation.animationcountx < 3) this.Renderer.Animation.animationcountx++;
					else this.Renderer.Animation.animationcountx = 0;
					this.Renderer.Animation.animationdelay = this.Renderer.Animation.animationdelayMax;					
				}
			}

			if (Input.KeysDown[40]) {
				this.Transform.position.y++;
				this.Physics.boxCollider.position.y++;
				this.Renderer.Animation.animationcounty = 0;
				if (this.Renderer.Animation.animationdelay == 0) {
				if (this.Renderer.Animation.animationcountx < 3) this.Renderer.Animation.animationcountx++;
				else this.Renderer.Animation.animationcountx = 0;
					this.Renderer.Animation.animationdelay = this.Renderer.Animation.animationdelayMax;	
				}
			}
			this.Renderer.draw();
		}
		this.GUI();
	};

	this.GUI = function() {
		if (Application.isDebug) {
			// boxCollider
			ctx.beginPath();
			ctx.rect(this.Physics.boxCollider.position.x, this.Physics.boxCollider.position.y, this.Physics.boxCollider.size.x, this.Physics.boxCollider.size.y);
			ctx.fillStyle = 'rgba(0,255,0,0.5)';
			ctx.fill();
			ctx.closePath();
			// tranform
			ctx.beginPath();
			ctx.rect(this.Transform.position.x, this.Transform.position.y, this.Renderer.Material.sizeFrame.x, this.Renderer.Material.sizeFrame.y);
			ctx.strokeStyle = 'rgba(100,100,100,1)';
			ctx.stroke();
			ctx.closePath();

			//x, y, h, w au dessus de sa tete
			// marche PPPPPPPPPPPPPPPPPPPPAAAAAAAAAAAAAAAAAAAAAAAAASSSSSSSSSSSSSS
			ctx.fillStyle = 'white';
			//ctx.fillText("x : " + 1, this.Renderer.Material.sizeFrame.x + 10, this.Renderer.Material.sizeFrame.y + 10);
			// name
			// dimension du collider
			//dessiner le pivot
		}
	};

	this.OnClicked = function() {
		this.frameHovered++;
	};

	this.OnHovered = function() {
		this.frameHovered++;
	};

	this.OnUnHovered = function() {
		this.frameHovered = 0;
	};
	this.Awake();
}