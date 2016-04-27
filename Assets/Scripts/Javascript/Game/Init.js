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

document.getElementById('change').addEventListener('click',function(){
	if (Application.LoadedScene == Scenes["Scene1"]) {

		Application.LoadedScene = Scenes["Scene2"];

	} else {
		Application.LoadedScene = Scenes["Scene1"];
	}
})
Scenes["loader"] = new Loader();
Application.LoadedScene = Scenes["loader"];
Run();