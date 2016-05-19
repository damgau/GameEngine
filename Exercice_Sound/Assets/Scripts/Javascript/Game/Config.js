/**
 * Get Canvas and the context<br/>
 *
 * - Create Scene Object which will contain the scene<br/>
 * - Create and set the gravity<br/>
 * - Application : An Object which will handle the scene to load, if game is paused or not and if debug mode is activate<br/>
 * - imagesLoaded : counter for loaded images<br/>
 * - WalkableTiles : an Array which will contain where integer where we can walk<br/>
 * - ImagesPath : Array of image object. Each image has a name and a path<br/>
 * - Images : an object which contain all loaded image
 * 
 * */


var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

var Scenes = {};
var Gravity = new Vector();
Gravity.y = -9.81;


var Application = 
{
	LoadedScene: null,
	gamePaused: false,
	debugMode: false
};

var imagesLoaded = 0;
var WalkableTiles = [];

var ImagesPath = 
[
	// { name:"monImage",path: "background/image.png"},
	
];
var Images = {};
var audioLoaded = 0;
var AudioPath = 
[
	// { name:"monSound",path: "background/sound.mp3"},
	{ name:"Acoustic", path:"AudioShort/TechnoGame_Acoustic.mp3"},
	{ name:"Bass", path:"AudioShort/TechnoGame_Bass.mp3"},
	{ name:"Chorus", path:"AudioShort/TechnoGame_Chorus.mp3"},
	{ name:"HighNotes", path:"AudioShort/TechnoGame_HighNotes.mp3"},
	{ name:"Bend", path:"SFX/TechnoGame_Bend.mp3"}
];
var Audios = {};
