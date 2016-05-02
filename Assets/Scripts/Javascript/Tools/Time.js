var Time = {
	Time : 0,
	DeltaTime : 0,
	TimeScale : 1,
	FPS : 0,

	/*
	TimeWhenGameBegin : 0,
	TimeWhenGameLoaded : 0,
	TimeWhenSceneBegin : 0,
	TimeWhenSceneLoaded : 0,
	*/

	TimeOfLastFrame : 0,

	averageDelay : 0,

	GetTimeWhenGameBegin : function(){
		return this.TimeWhenGameBegin;
	},
	SetTimeWhenGameBegin : function(){
		this.TimeWhenGameBegin = this.Time;
	},

	GetTimeWhenGameLoaded : function(){
		return this.TimeWhenGameLoaded;
	},
	SetTimeWhenGameLoaded : function(){
		this.TimeWhenGameLoaded = this.Time;
	},

	GetTimeWhenSceneBegin : function(){
		return this.TimeWhenSceneBegin;
	},
	SetTimeWhenSceneBegin : function(){
		this.TimeWhenSceneBegin = this.Time;
	},
	
	GetTimeWhenSceneLoaded : function(){
		return this.TimeWhenSceneLoaded;
	},
	SetTimeWhenSceneLoaded : function(){
		this.TimeWhenSceneLoaded = this.Time;
	},
	GetTimeSinceGameBegin : function(){
		return new Date().getTime() - this.GetTimeWhenGameBegin();
	},
	GetTimeSinceSceneLoaded : function(){
		return new Date().getTime() - this.GetTimeWhenSceneLoaded();
	},

	SetTimeValues : function(){
		this.Time = Date.now();
		this.DeltaTime = (this.Time - this.TimeOfLastFrame) / 1000;
		this.averageDelay += (( this.Time - this.TimeOfLastFrame ) - this.averageDelay) / 10;
		// fixed = apres la virgule
		this.FPS = (1000 / this.averageDelay).toFixed(1);
		this.TimeOfLastFrame = this.Time;
	}
}

String.prototype.toHHMMSS = function(){
	var sec_num = parseInt(this, 10);
	var hours = ~~(sec_num/3600);
	var minutes = ~~((sec_num -(hours * 3600))/60);
	var seconds = sec_num - (hours * 3600) - (minutes * 60);

	if (hours < 10) hours = "0" + hours;
	if (minutes < 10) minutes = "0" + minutes;
	if (seconds < 10) seconds = "0" + seconds;
	var time = hours + " : " + minutes + " : " + seconds;
	return time;
}