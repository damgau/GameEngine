// You need to use it with normalize vector (look notes)
function dotProduct (vector1, vector2) {

	return vector1.x * vector2.x + vector1.y * vector2.y;

}
Math.Clamp = function(value, min, max) {
		 return Math.min(Math.max(value, min), max);
}
Math.DegreeToRadian = function(deg) {

	return deg * Math.PI / 180;
}
Math.RadianToDegree = function(rad) {

	return rad * 180 / Math.PI;
}