var Input = {
	//keyboard
	//mouse
	//you can test touch right click and others
	KeysDown : [],
	MousePosition : {
		x : 0,
		y : 0
	},

	KeyDown : function( event ){
		Input.KeysDown[event.keyCode] = true;
	},

	KeyUp : function( event ){
		// delete the "item" to this index
		delete Input.KeysDown[event.keyCode];
	},

	MouseMove : function( event ){
		var rect = canvas.getBoundingClientRect();
		Input.MousePosition.x = (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width | 0;
		Input.MousePosition.y = (event.clientY - canvas.offsetTop) / (rect.bottom - rect.top) * canvas.height | 0;
	},

	MouseDown : function( event ){
		console.log(Input.MousePosition);
		Input.MouseClick = true;
		Input.MouseLongClick = true;
		Input.MouseReload = 1;
	},

	MouseUp : function( event ){
		Input.MouseClick = false;
		Input.MouseLongClick = false;
		Input.MouseReload = 0;
		Input.MouseDraging = false;
		Input.DraggedElement = null;
	}
}