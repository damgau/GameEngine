Math.Random = {
	RangeInt : function(min, max, isInclusive) {
		if (isInclusive) {
			max ++;
		} else {
			min ++;
		}
		return Math.floor(Math.random() * (max - min) + min); 
	},

	RangeFloat : function(min, max, isInclusive) {

		/*
		if (isInclusive) {
			min--;
			min++;
			var n = Math.random()*(max - min) + min;
			return Math.Clamp(n, min, max)	;
		} else {
			var n = Math.random()*(max - min) + min;
			if (n == min) 
			return (Math.random() * ( max - min )) + min;
		}
		*/
	},

	InArray : function(array) {

		return array[this.RangeInt(-1,array.length,false)];
	},

	// point random in a circle (see notes)
	InCircle : function(circle) {
		var randomAngle = this.RangeFloat(0,2*Math.PI, true);
		var vector = new Vector();
		vector.x = circle.x + circle.radius * Math.cos(randomAngle);
		vector.y = circle.y + circle.radius * Math.sin(randomAngle);

		return Vector;
	},
	
	// point random in a disk
	InDisk : function(circle) {
		var alpha = Math.Random.RangeFloat(0,2*Math.PI, true);
		var radius = Math.Random.RangeFloat(0,circle.radius, true);

		var p = new Vector();
		p.x = circle.x + radius*Math.cos(alpha) |0;
		p.y = circle.y + radius*Math.sin(alpha) |0;

		return p;
	},

	InScreen : function(screen) {
		var vector = new Vector();
			vector.x = Random.RangeInt(0,canvas.width,true);
			vector.y = Random.RangeInt(0,canvas.height,true);

		return vector;
	},

	InArea : function(box) {
		var vector = new Vector();
			vector.x = box.x + Random.RangeInt(0,box.w,true);
			vector.y = box.y + Random.RangeInt(0,box.h,true);

		return vector;
	},

	ColorRGB : function() { 
		return 'rgb(' + this.RangeInt(0,255,true) + ',' 
		+ this.RangeInt(0,255,true) + ',' 
		+ this.RangeInt(0,255,true) + ')';
	},

	ColorRGBA : function(a = 1) {
		return 'rgb(' + this.RangeInt(0,255,true) 
			+ ',' + this.RangeInt(0,255,true) 
			+ ',' + this.RangeInt(0,255,true) 
			+ ',' + a + ')';
	},

	ColorHex : function() {
		var letters = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
	    var color = '#';
	    for (var i = 0; i < 6; i++ ) {
	        color += letters[Math.Random.RangeInt(0,letters.length,false)];
	    }
	    return color;
	},

	AngleDegrees : function(min, max) {

		return this.RangeInt(min, max, true) % 360;
	},

	AngleRadian : function(min, max) {

		return this.RangeFloat(min, max, true) % (2*Math.PI);
	},

	IntPondere : function(min, max) {

		return this.FloatPondere() |0;
	},

	FloatPondere : function(min, max) {
		var a = this.RangeFloat(min, max, false);
		var b = this.RangeFloat(min, max, false);
		return (a + b) * 0.5;	
	}
};