// if clear cache, loose everything
var PlayerPrefs = {
	// solution : localStorage
	Save : function (key, value){
		localStorage.setItem(key, value);
	}
	Load : function (key) {
		localStorage.setItem(key);
	}
	Delete : function(key){
		localStorage.removeItem(key);
	}
}