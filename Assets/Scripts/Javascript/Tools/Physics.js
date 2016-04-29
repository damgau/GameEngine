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

		var distX = Math.abs(circle.x - box.x - box.w / 2);
		var distY = Math.abs(circle.y - box.y - box.h / 2);

		if (distX > (box.w/2 + circle.radius)) return false;
		if (distY > (box.h/2 + circle.radius)) return false;

		if (distX <= box.w/2) return true;
		if (distY <= box.h/2) return true;

		var dx = distX - box.w / 2;
		var dy = distY - box.h / 2;

		return(dx * dx + dy * dy <= circle.radius * circle.radius);

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

	},
	checkCollision : function(obj1, obj2){
		var typeObj1 = "";
		var typeObj2 = "";

		var typeForSwitch = "";
		var objForSwitch;

		if (obj1.w != null) typeObj1 = "box";
		else if (obj1.radius != null) typeObj1 = "circle";
		else typeObj1 = "point";

		if (obj2.w != null) typeObj2 = "box";
		else if (obj2.radius != null) typeObj2 = "circle";
		else typeObj2 = "point";

		for (var i = 0; i < 2; i++) {
			if (typeObj1 == "point" && typeObj2 == "box") return this.PointBoxCollision(obj1, obj2);
			else if (typeObj1 == "box" && typeObj2 == "box") return this.BoxBoxCollision(obj1, obj2);
			else if (typeObj1 == "point" && typeObj2 == "circle") return this.PointCircleCollision(obj1, obj2);
			else if (typeObj1 == "circle" && typeObj2 == "circle") return this.CircleCircleCollision(obj1, obj2);
			else if (typeObj1 == "circle" && typeObj2 == "box") return this.CircleBoxCollision(obj1, obj2);
			else {

				typeForSwitch = typeObj1;
				typeObj1 = typeObj2;
				typeObj2 = typeForSwitch;

				objForSwitch = obj1;
				obj1 = obj2;
				obj2 = objForSwitch;
			}
		}
	},
	checkClick : function(){
		for(var i = 0; i < Application.LoadedScene.GameObjects.length; i++){
			var go = Application.LoadedScene.GameObjects[i];
			if (go.Physics.clickable) {
				if (Physics.PointBoxCollision(Input.MousePosition,
					{
						x : go.Physics.boxCollider.position.x,
						y : go.Physics.boxCollider.position.y,
						w : go.Physics.boxCollider.size.x,
						h : go.Physics.boxCollider.size.y
					})) {
					if (!Input.MouseClick) go.OnHovered();
					else go.OnClicked();
				} else go.OnUnHovered();
			}
		}
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