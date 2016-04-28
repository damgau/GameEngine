Math.Random = {

	RangeInt : function(min, max, isInclusive){
		if (isInclusive) {
			return (Math.random() * ( max - min + 1 )|0) + min;	
		}
		return (Math.random() * ( max - min )|0) + min;
	},

	RangeFloat : function(min, max, isInclusive){

	},

	InArray : function(array){
		return (Math.random() * array.length|0);
	},
	// point random in a circle
	InCircle : function(circle){},
	
	// point random in a disk
	InDisk : function(circle){},

	InScreen : function(screen){},

	ColorRGB : function(){ 
		return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' 
		+ (Math.floor(Math.random() * 256)) + ',' 
		+ (Math.floor(Math.random() * 256)) + ')';
	},

	ColorRGBA : function(){
		var opacity = Math.random() + 0.1;
		return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' 
		+ (Math.floor(Math.random() * 256)) + ',' 
		+ (Math.floor(Math.random() * 256)) + ','
		+ opacity + ')';
	},

	ColorHex : function(){
		return '#'+Math.floor(Math.random()*16777215).toString(16);
	},

	AngleDegrees : function(min, max){},

	AngleRadian : function(min, max){},

	IntPondere : function(min, max){},

	FloatPondere : function(min, max){}
};