function Grid () {
	this.scale = 100;
	this.w = 800;
	//this.h = 800;
	this.nbColumn = this.w/this.scale;

	this.InitGrid = function (scale, w){
		this.scale = scale;
		this.w = w;
		//this.h = h;

		this.nbColumn = this.w/this.scale;
	}
	
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