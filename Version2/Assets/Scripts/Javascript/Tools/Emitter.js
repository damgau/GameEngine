function Emitter(position, velocity, spread, rate, max){
	this.particules = [];
	this.position = position || new Vector();	// Position
	this.velocity = velocity || new Vector();	// Acceleration
	this.spread = spread || Math.PI / 32;		// angles possible de direction
	this.rate = rate || 1000;					// nb de particules à la frame
	this.particulesMax = max || 2000000;
	this.color = "white";						// couleur des particules
	//fun
	this.i = 0;
}
Emitter.prototype.emitParticules = function() {

	var count = this.rate;
	while(count--){
		if (this.particules.length < this.particulesMax) {

			var angle = this.velocity.getAngle() + this.spread;
			
			//var angle = this.velocity.getAngle() + this.spread - (Math.random() * this.spread) + ++this.i;
			//var position = new Vector(this.position.x, this.position.y);
			//var velocity = this.velocity.fromAngle(angle);
			
			
			/* *** Yolo! ***
			*/
			//var angle = (this.velocity.getAngle() + this.spread) * Math.random();
			var position = new Vector(this.position.x + 10 * Math.random(), this.position.y + 10 * Math.random());
			var velocity = this.velocity.fromAngle(angle);
			//velocity.x *= Math.random();
			//velocity.y *= Math.random();

			this.particules.push(new Particules( position, velocity , this.color));			
			
		} else return;
	}
}
Emitter.prototype.Update = function() {
	this.emitParticules();
	for (var i = 0; i < this.particules.length; i++) {
		this.particules[i].Update();
		this.particules[i].Render();
		if (this.particules[i].position.x > canvas.width 
		|| this.particules[i].position.y > canvas.heigth 
		|| this.particules[i].position.x < 0 
		|| this.particules[i].position.y < 0) {
			this.particules.splice(i,1);
		}
	}
}