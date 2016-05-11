function PathFounding() {
	this.tab = [];

}
function Tile(){
		this.name = "tile"
		this.x;
		this.y;	
		this.scale;
		this.isWalkable;

		this.Init = function(x,y,scale,isWalkable) {
			this.x = x;
			this.y = y;
			this.scale = scale;
			this.isWalkable = isWalkable;
		};
		this.Draw = function() {
			ctx.fillStyle = "green";
			ctx.fillRect(this.x*this.scale, this.y*this.scale, this.scale, this.scale);
		};
}
