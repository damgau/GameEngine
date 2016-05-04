function Particules ( position, velocity, color) {
	this.position = position;
	this.velocity = velocity;
	this.color = color;
	this.acceleration = new Vector();
}
Particules.prototype.Update = function() {
	this.submitToField();
	this.velocity.add(this.acceleration);
	this.position.add(this.velocity);
}

Particules.prototype.Render = function() {
	ctx.fillStyle = this.color;
	ctx.fillRect(this.position.x, this.position.y, 2, 2);
}

Particules.prototype.submitToField = function() {
	//var Acceleration = new Vector();
	for (var i = 0; i < Application.LoadedScene.GameObjects[0].fields.length; i++) {
		
		var field = Application.LoadedScene.GameObjects[0].fields[i];
		var vector = new Vector();
		vector.x = field.position.x - this.position.x;
		vector.y = field.position.y - this.position.y;

		var strength = field.mass / vector.lengthSq();
		this.acceleration = vector.mul(strength);
		//Acceleration = vector.mul(strength);
	}
	//this.acceleration = Acceleration;
};