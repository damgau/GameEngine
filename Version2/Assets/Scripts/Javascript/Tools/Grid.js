function Map(map, grid) {
	this.map = map;
	this.grid = grid;

	// .25 to have obstacle : exemple
	this.FillMap = function(chanceObstacle){
		var chanceObstacle = chanceObstacle || .25;
		for (var i = 0; i < this.grid.nbColumn * this.grid.nbLine ; i++) {
			rand = Math.random();
			var tmpTile = new Tile();
			if (rand > chanceObstacle) {
				tmpTile.Init(CoordFromIndex(i, this.grid.nbColumn),this.grid.scale,true);
			} else {
				tmpTile.Init(CoordFromIndex(i, this.grid.nbColumn),this.grid.scale,false);
			}
			this.map[i] = tmpTile;
		}
	}
}

function Grid (scale, w, h) {
	this.scale = scale;
	this.w = w;
	this.h = h;
	this.nbColumn = this.w/this.scale;
	this.nbLine = this.h / this.scale;
	
	this.DrawGrid = function() {
		ctx.beginPath();
			ctx.fillStyle = "black";
			for (var i = 0; i <= this.w; i = i + this.scale) {
				ctx.beginPath();
				//line x
				ctx.moveTo(i, 0);
				ctx.lineTo(i, this.w);
				//line y
				ctx.moveTo(0, i);
				ctx.lineTo(this.w, i);
				ctx.closePath();
				ctx.strokeStyle = "Black";
				ctx.lineWidth = 1;
				ctx.stroke();
			}
			ctx.closePath();
	}	
}
function Tile(){
		this.name = "tile"
		this.v = new Vector();
		this.scale;
		this.isWalkable;

		this.Init = function(v,scale,isWalkable) {
			this.v = v;
			this.scale = scale;
			this.isWalkable = isWalkable;
		};
		this.Draw = function() {
			ctx.fillStyle = "green";
			ctx.fillRect(this.v.x*this.scale, this.v.y*this.scale, this.scale, this.scale);
		};
}