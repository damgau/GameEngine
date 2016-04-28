var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var Scenes = {};

var Application = {

	LoadedScene : null,
	GamePaused : false
};

var Gravity = new Vector();
Gravity.x = 0;
Gravity.y = -2;

var ImagesPath = [
	{ name : "image1", path : "image1.png"},
	{ name : "image2", path : "image2.png"},
	{ name : "image3", path : "image3.png"}
];
var Images = {};

var WalkableTiles = [];