window.RequestAnimationFrame = (function(){
    return  window.requestAnimationFrame         || 
            window.webkitRequestAnimationFrame     || 
            window.mozRequestAnimationFrame        || 
            window.oRequestAnimationFrame          || 
            window.msRequestAnimationFrame         || 
    function(callback, element){
    	window.setTimeout(callback, 1000 / 60);
    };
})()
//  INPUTS
// keyboard
document.addEventListener('keydown', Input.KeyDown);
document.addEventListener('keyup', Input.KeyUp);

// mouse
document.addEventListener('mousedown', Input.MouseDown);
document.addEventListener('mouseup', Input.MouseUp);
document.addEventListener('mousemove', Input.MouseMove);

document.getElementById('change').addEventListener('click',function(){
	if (Application.LoadedScene == Scenes["Scene1"]) {

		Application.LoadedScene = Scenes["Scene2"];

	} else {
		Application.LoadedScene = Scenes["Scene1"];
	}
})
Time.SetTimeWhenGameBegin();

Scenes["Loader"] = new Loader();
Application.LoadedScene = Scenes["Loader"];

// Image Loader
function LoadImages(){
    var count = 0;
    //for (var i = 0; i < ImagesPath.length; i++) {
    for (var i in ImagesPath) {

        var name = ImagesPath[i].name;
        var content = ImagesPath[i].path;

        Images[name] = new Image();
        Images[name].src = "Assets/Graphics/" + content;

        Images[name].onload = function(){
            count++;
            // Scene.loader.imageLoaded = count;
            if (count == ImagesPath.length) {
                ImageLoaded(count);
            }
        }
    }
}
function ImageLoaded(imageLoaded){
    console.log("%c System : " + imageLoaded + " Images loaded!", 'background:#222; color:#bada55');
}

//call in loader
//LoadImages();

Run();