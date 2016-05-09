var Gfx = {
	Filters : {

		Greyscale : function(affectedZone) {
			var pixels = ctx.getImageData(affectedZone.x, affectedZone.y, affectedZone.w, affectedZone.h);
			var d = pixels.data;
			// i+=4 -> rbga(xxxAlpha, xxxAlpha, xxxAlpha)
			for (var i = 0; i < d.length; i += 4) {
				var r = d[i];
				var g = d[i + 1];
				var b = d[i + 2];

				var variation = 0.2126 * r + 0.7152 * g + 0.0722 * b;

				d[i] = d[i + 1] = d[i + 2] = variation;
			}

			ctx.putImageData(pixels, affectedZone.x, affectedZone.y);
		},
		
		//Tint : function(affectedZone, color, intensity) {
		Tint : function(affectedZone, color) {
			//i = intensity || 0.3;
			var box = new Box(affectedZone.x,
					affectedZone.y,
					affectedZone.w,
					affectedZone.h);

			Gfx.Filters.Greyscale(box);

			//ctx.fillStyle = 'rgba(255,204,102,' + intensity +'"';
			ctx.fillStyle = color;
			fillRect(box.x, box.y, box.w, box.h);
		},
		Sepia : function(affectedZone) {

			var pixels = ctx.getImageData(affectedZone.x, affectedZone.y, affectedZone.w, affectedZone.h);

			var d = pixels.data;

			for (var i = 0; i < d.length; i += 4) {
				var r = d[i];
				var g = d[i+1];
				var b = d[i+2];

				var outR = (r * 0.393) + (g *.769) + (b * .189);
				var outG = (r * 0.349) + (g *0.686) + (b * 0.168);
				var outB = (r * 0.272) + (g *0.534) + (b * 0.131);

				d[i] = outR;
				d[i + 1] = outG;
				d[i + 2] = outB
			}
			ctx.putImageData(pixels, affectedZone.x, affectedZone.y);
		},
		// Mask Version 1
		Mask : function(affectedZone, mask){
			var pixels = ctx.getImageData(affectedZone.x, affectedZone.y, affectedZone.w, affectedZone.h);
			var d = pixels.data;

			ctx.drawImage(mask, affectedZone.x, affectedZone.y, affectedZone.w, affectedZone.h);
			var pixelsMask = ctx.getImageData(affectedZone.x, affectedZone.y, affectedZone.w, affectedZone.h);
			var dMask = pixelsMask.data;

			for (var i = 0; i < dMask.length; i++) {

				if (!(dMask[i] && dMask[i + 1] && dMask[i + 2])) {
					d[i] = 255;
					d[i + 1] = 255;
					d[i + 2] = 255;
				}
			}
			ctx.putImageData(pixels, affectedZone.x, affectedZone.y);

		},

		Flash : function(affectedZone, power, color) {
			// Flash this screen
			var current = 0;
			//									This tween and boucle are useless
			//while (current < power){
				//Tween.Approach(power, current, Time.DeltaTime);
				ctx.fillStyle = color;
				ctx.fillRect(affectedZone.x, affectedZone.y, affectedZone.w, affectedZone.h);
			//}	
			ctx.clearRect(0,0,canvas.width,canvas.height);
		},
		FlashV2 : function(affectedZone, power ,color) {
			var pixels = ctx.getImageData(affectedZone.x, affectedZone.y, affectedZone.w, affectedZone.h);
			var d = pixels.data;
			var dTmp = pixels.data;

			for (var i = 0; i < d.length; i+= 4) {
				d[i] = 255;
				d[i + 1] = 255;
				d[i + 2] = 255;
				d[i + 3] = power;
			}

		}
	}
}