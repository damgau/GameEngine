function Group {
	// ensemble de game object ou que l'on peut déplacer
	this.name = "GroupModel";
	this.enabled = true;
	this.started = false;


	this.tabGO = [];


	// position ablosute
	this.Transform = {};
	this.Transform.position = new Vector();
	//this.Transform.size = new Vector();
	this.Transform.scale = new Vector(1,1);

	this.Awake = function() {
		console.log('%c System:GroupObject ' + this.name + " Created !", 'background:#222; color:#b00b55');
	};
	this.Start = function() {
		if (!this.started) {
			// operation start
			// push GO in group[]
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
		
		this.PostUpdate();
	};
	this.PostUpdate = function() {

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