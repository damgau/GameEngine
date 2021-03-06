function PathFinding(map, CollumnNb, lineNb) {
	// Map
	this.map = map;
	this.WalkableTiles = [];

	//Size and Dimensions
	this.mapDimensions = new Vector(CollumnNb, lineNb);
	this.sizeMap = this.mapDimensions.x * this.mapDimensions.y;

	// Shortcuts
	this.tileCol = Physics.tileCollision;
	// Settings
	this.distanceAlgo = Math.ManhattanDistant;
	this.neighboursAlgo/*=*/;


	this.Neighbours = function(x, y) {
		var N = 1,
			W = 2,
			S = 3,
			E = 4;

		var myN = this.tileCol(this.map, this.mapDimensions, new Vector(x, y),N);
		var myS = this.tileCol(this.map, this.mapDimensions, new Vector(x, y),S);
		var myE = this.tileCol(this.map, this.mapDimensions, new Vector(x, y),E);
		var myW = this.tileCol(this.map, this.mapDimensions, new Vector(x, y),W);

		var result = [];
		if(myN) result.push({x : x, y : y - 1});
		if(myS) result.push({x : x, y : y + 1});
		if(myE) result.push({x : x + 1, y : y});
		if(myW) result.push({x : x - 1, y : y});

		return result;
		//this.FindNeighbours();
	}
	// worldWidth = this.mapDimensions.x
	this.Node = function(parent, pos, worldWidth){
		var node = {
			parent : parent,
			value : pos.x + pos.y * worldWidth,
			x : pos.x,
			y : pos.y,
			estimateCost : 0,
			// dist between node start/
			goal : 0
		}
		return node;
	}
/*
	this.Process = function(parentStart, posStart, parentEnd, posEnd, worldWidth){
		var pathStart = this.Node(parentStart, posStart, worldWidth);
		var pathEnd = this.Node(parentEnd, posEnd, worldWidth);
*/
	this.Process = function(startPos,endPos){
		var pathStart = this.Node(null, startPos,this.mapDimension.x);
		var pathEnd = this.Node(null, endPos,this.mapDimension.x);
		// #Useless #JavaScript ?
		var ASTAR = new Array(this.sizeMap);
		var Available = [pathStart];
		// elements parcouru
		var Forbidden = [];
		var Result = [];
		var neighbours;
		var node;
		var path;
		var length, max, min, i, j;

		while(length = Available.length){
			max = this.sizeMap;
			min = -1;
			for (var i = 0; i < length; i++) {
				if (Available[i].estimateCost < max) {
					max = Available[i].estimateCost;
					min = i;
				}
			}
			node = Available.splice(min,1)[0];
			// if node test = destination
			if (node.value === pathEnd.value) {
				// node -> Forbidden
				path = Forbidden[Forbidden.push(node) - 1];
				while (path == path.parent){
					Result.push(new Vector(path.x,path.y));
				}

				ASTAR = Forbidden = Available = [];

				// for path start -> end
				Result.reverse();
				// HERE?
				return Result;
			} else { // != destination
				neighbours = Neighbours(node.x, node.y);
				for (var i = 0, j = neighbours.length; i < j; i++) {
					path = this.Node(node, neighbours[i], this.mapDimensions.x);
					if (!ASTAR[path.value]) {
						path.goal = node.goal + distanceAlgo(neighbours[i], node);
						path.estimateCost = node.goal + distanceAlgo(neighbours[i], pathEnd);
						Available.push(path);

						ASTAR[path.value] = true;
					}
				}
				Forbidden.push(node);
			}
		}

		return this.Process(startPos,endPos);

	};
	this.FindNeighbours = function() {

	};

}

