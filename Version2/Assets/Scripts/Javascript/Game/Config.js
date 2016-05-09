var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

var Scenes = {};
var gravity = new Vector();
gravity.y = -9.81;

var Application = {
	LoadedScene: null,
	GamePaused: false,
	debugMode: true
};

var ImagesLoaded = 0;
var WalkableTiles = [];

var ImagesPath = [
	// { name:"myImage",path: "background/image.png"},
	{ name:"myImage",path: "PlanetCute/Character Boy.png"},
	{ name:"mask",path: "Filters/mask.png"},
	{ name:"mask2",path: "Filters/mask2.png"},
];
var Images = {};
