var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

var Scenes = {};

var Application = 
{
	LoadedScene: null,
	gamePaused: false
};
