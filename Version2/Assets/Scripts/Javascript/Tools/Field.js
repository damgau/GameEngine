function Field(position, mass){
	this.position = position;
	this.setMass(mass);
}

Field.prototype.setMass = function(mass) {

	this.mass = mass || 50;
	this.drawColor = this.mass < 0 ? "#f00" : "#0f0";

};
Field.prototype.Update = function() {
	this.Render();
};
Field.prototype.Render = function()
{
	ctx.fillStyle = this.drawColor;
	ctx.fillRect(this.position.x, this.position.y, 10, 10);  
};