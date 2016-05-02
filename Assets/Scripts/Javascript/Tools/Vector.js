function Vector(x, y){
	// x and y = position final (origin = x:0 and y:0)
	this.x = x;
	this.y = y;

	this.add = function(vector){
		this.x += vector.x;
		this.y += vector.y;

		return this;
	}

	this.sub = function(vector){
		this.x -= vector.x;
		this.y -= vector.y;

		return this;
	}
	this.mul = function(scaler){
		this.x *= scaler;
		this.y *= scaler;

		return this;
	}
	this.div = function(scaler){
		this.x /= scaler;
		this.y /= scaler;
	}
	this.length= function(){
		var length;
		length = Math.sqrt( (this.x * this.x) + (this.y * this.y) );

		return length;	
	}
	this.lengthSq = function(){
		var lengthSq;
		length = this.x*this.x + this.y*this.y;
		return lengthSq;
	}
	this.normalize = function(){
		var vector = new Vector();
		vector.x = this.x;
		vector.y = this.y;
		Vector.div( this.length() );
		return Vector;
	}
}