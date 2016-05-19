// GroupTest -> SceneTest2
function GroupTest() {
	// ensemble de game object ou que l'on peut déplacer
	this.name = "GroupTest";
	this.enabled = true;
	this.started = false;


	this.tabGO = [];

	this.speed = 5;

	// position ablosute
	this.Transform = {};
	this.Transform.position = new Vector(0,0);
	//this.Transform.size = new Vector();
	this.Transform.scale = new Vector(1,1);

	this.Awake = function() {
		console.log('%c System:GroupObject ' + this.name + " Created !", 'background:#222; color:#b00b55');
	};
	this.Start = function() {
		if (!this.started) {
			// operation start
			// push GO in group[]
			var go1 = new GOTest3();
			go1.Transform.position = new Vector(0, 0);
			var go2 = new GOTest3();
			go2.Transform.position = new Vector(200, 0);
			var go3 = new GOTest3();
			go3.Transform.position = new Vector(400, 0);
			var go4 = new GOTest3();
			go4.Transform.position = new Vector(400, 200);

			this.tabGO.push(go1, go2, go3, go4);

			this.started = true;
			console.log('%c System:GroupObject ' + this.name + " Started !", 'background:#222; color:#bada55');
		}
		this.PreUpdate();
	};
	this.PreUpdate = function() {
		if ( this.enabled ) {
			// code before the frame
			this.Update();
		}
	};
	this.Update = function() {
		if ( this.enabled ) {
			// Left
			if (Input.KeysDown[37]) {
				this.Transform.position.x -= this.speed;
			}
			// Top
			else if (Input.KeysDown[38]) {
				this.Transform.position.y -= this.speed;
			}
			// Right
			else if (Input.KeysDown[39]) {
				this.Transform.position.x += this.speed;
			}
			// Both
			else if (Input.KeysDown[40]) {
				this.Transform.position.y += this.speed;
			}
		}

		for (var i = 0; i < this.tabGO.length; i++) {
			this.tabGO[i].Transform.x = this.Transform.position.x;
			this.tabGO[i].Transform.y = this.Transform.position.y;
		}
		this.PostUpdate();
	};
	this.PostUpdate = function() {
		for (var i = 0; i < this.tabGO.length; i++) {
			this.tabGO[i].Start();
		}

		this.GUI();
	};
	this.GUI = function() {
		
	}
	this.onHover = function() {
		this.Physics.countHovered ++;
		
	}
	this.onClicked = function() {
		this.Physics.countHovered ++;
	}
	this.onUnHovered = function() {
		this.Physics.countHovered = 0;
	}

	this.Awake();
}