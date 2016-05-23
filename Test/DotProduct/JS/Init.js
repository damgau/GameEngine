/**
 * 
 * Call the correct RequestAnimationFrame matching the browser else use the setTimout
 *
 * */
window.RequestAnimationFrame = (function()
{
    return  window.requestAnimationFrame         || 
            window.webkitRequestAnimationFrame   || 
            window.mozRequestAnimationFrame      || 
            window.oRequestAnimationFrame        || 
            window.msRequestAnimationFrame       || 
    function(_callback, _element)
    {
        window.setTimeout(_callback, 1000 / 60);
    };
})();



/********************
		Event
*********************/
/**
 * Handle the Input Event (Keyboard/Mouse)
 * */
window.addEventListener("mousemove", Input.MouseMove);


/********************
		Start
*********************/

/**
 * 
 * - Set the Time when for when game begin
 * - Call and load a scene 
 * 
 * */

Scenes["SceneTest"] = new SceneModel();
Application.LoadedScene = Scenes["SceneTest"];
/**
 * 
 * set window innerWidth to canvas width
 * set window innerHeight to canvas height
 * 
 * */
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

Run();