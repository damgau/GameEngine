/* *** Notes ***
Properties :
		chaine de char (text)
		police
		font
		font-size
		color
		destination
		interval (short-medium-long)
		interrupt, skip

function :  (method pour mesure les char exist!)
		initText (value)
		Begin (string 	-> tabWords 
						-> tabLetters
				)
		continue : 	- increments count, + delta T + add chars (vide les string et les tab)
					- "balises" (flash, screenCheck, ...)
		interrupt : finish (move text)
		write (param) : write next char !1 CHAR!
		checkLineLength

*/
function Dialogue() {

	this.text = "string";
	this.font = "Arial";
	this.fontSize = 18;
	this.color = "black";
	this.destination = new Box(0 ,0 ,0 ,0 );
	this.interval = .5;
	
	//	short : .5,
	//	medium : 1,
	//	long : 1.5
	
	this.skip = false;

	this.widthTxt = 0;
	this.heightTxt = 0;

	this.tabText = [];
	this.tabIsWrited = [];
	this.nbLine = 1;

	this.count = 0;
	this.canWrite = false;
	this.isWaiting = true;

	this.InitText = function(text, font, fontSize, color, destination, interval){

		this.text = text;
		this.font = font;
		this.fontSize = fontSize;
		this.color = color;
		this.destination = destination;
		this.interval = interval;

		this.tabText = text.split("");

		this.CheckLineLength();
		if (this.widthTxt > destination.w) {
			
			this.nbLine = Math.ceil(this.widthTxt/destination.w);
		}

	};
	this.Begin = function(){
		//var lengthTxt = this.text.length;
	};
	this.Continue = function(){
		this.count += Time.DeltaTime;
	};
	this.Interrupt = function(){
		// Clear all
		//ctx.clearRect(this.destination.x,this.destination.y,this.widthTxt,this.heightTxt);
	};
	this.Write = function(){
		//ctx.beginPath();
		ctx.fillStyle = "#2EFEF7";
		ctx.fillRect(this.destination.x,this.destination.y,this.destination.w,this.destination.h);
		ctx.fillStyle = this.color;
		ctx.font = this.fontSize + "px " + this.font;
		ctx.textBaseline = 'top';
		
		if (this.tabText.length) {

			if (this.canWrite) {
				var shiftEle = this.tabText.shift();
				//console.log("shiftEle : " + shiftEle);
				this.tabIsWrited.push(shiftEle);
				this.canWrite = false;
			
			}
			if (!this.canWrite) {
				this.Continue();
				if (this.count >= this.interval) {
					
					this.canWrite = true;
					this.count = 0;	
				}
			}
			//console.log(this.widthTxt)
			//console.log(this.destination.w)
			if (this.widthTxt > this.destination.w) {
				console.log("trop grand");
			}
		}
		// Write Tab is writed
		ctx.fillText(this.tabIsWrited.join(''), this.destination.x, this.destination.y);
	};
	this.CheckLineLength = function(){
		this.widthTxt = ctx.measureText(this.text).width;
		//don't work
		//this.heightTxt = ctx.measureText(this.text).height;
	}
}