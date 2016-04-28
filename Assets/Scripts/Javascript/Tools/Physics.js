var Physics = {
	PointBoxCollision : function(point, box){

		if (point.x >= box.x && point.x <= box.x + box.w) {
			if (point.y >= box.y && point.y <= box.y + box.h) {
				return true;
			}
		}
		return false;
	},

	BoxBoxCollision : function(box1, box2){
		if (   box2.x >= box1.x + box1.w
			|| box2.x + box2.w <= box1.x
			|| box2.y >= box1.y + box1.h
			|| box2.y + box2.h <= box1.y
			) return false;
		return true;
	},

	PointCircleCollision : function(point, circle){
		var dist = point.sub(circle);
		if (dist.length < circle.radius) return true;
		return false;
	},

	CircleCircleCollision : function(Circle1, circle2){
		var dist = (Circle1.x - circle2.x)*(Circle1.x - circle2.x) + (Circle1.y - circle2.y)*(Circle1.y - circle2.y);
		if (dist > (Circle1.radius + circle2.radius) * (Circle1.radius + circle2.radius)) return false;
		return true;

	},
	CircleBoxCollision : function(circle, box){
		var distX = Math.abs(Circle.x - box.x - box.w / 2);
		var distY = Math.abs(Circle.y - box.y - box.h / 2);

		if (distX > (box.w/2 + circle.radius)) return false;
		if (distY > (box.h/2 + circle.radius)) return false;

		if (distX <= box.w/2) return true;
		if (distY <= box.h/2) return true;

		var dx = distX - box.w / 2;
		var dy = distY - box.h / 2;

		return(dx * dx + dy * dy <= circle.radius * circle * radius);

	},
	
	TileCollision : function(map, sizeMap, position, direction){
		if (direction == 1 && (position.y == 0)) return false;
		if (direction == 2 && (position.x == sizeMap.x - 1)) return false;
		if (direction == 3 && (position.y == sizeMap.y - 1)) return false;
		if (direction == 4 && (position.X == 0)) return false;

		var nextIndex = {x:position.x,y:position.y};
		switch(direction){
			case 1:
				nextIndex.y --;
			break;
			case 2:
				nextIndex.x ++;
			break;
			case 3:
				nextIndex.y ++;
			break;
			case 4:
				nextIndex.x --;
			break;
		}
		for (var i in WalkableTiles) {
			if (map[nextIndex.y * sizeMap.x + nextIndex.x] == i) return true;	
		}
		return false;

	}
};
function Box(x, y, width, height){
	this.x = x;
	this.y = y;
	this.w = width;
	this.h = height;
}
function Circle(x, y, radius){
	this.x = x;
	this.y = y;
	this.radius = radius;
}