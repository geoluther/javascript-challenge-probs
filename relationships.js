function getRelationship(x, y) {
// Your code goes here!
// passed!
var xtype = typeof x;
var ytype = typeof y;


if ( isNaN(x) ) {
	xtype = "NaN";
}

if ( isNaN(y) ) {
	ytype = "NaN";
}

// console.log(xtype);
// console.log(ytype);


if ( (xtype === "number") && (ytype === "number") ) {

	if (x > y) {
		return ">";
	} else if (x < y) {
		return "<";
	} else {
		return "=";
	}

}

	if ( (xtype !== "number") && (ytype !== "number") ){
		return "Can't compare relationships because " + x  + " and " + y + " are not numbers";
	} else if  ( (xtype === "number") && (ytype !== "number") ) {
		return "Can't compare relationships because " + y + " is not a number";
	} else {
		return "Can't compare relationships because " + x + " is not a number";
	}
};


var rel = getRelationship(2, 3);
console.log(rel); //

// Try logging these functions to test your code!
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));
console.log(getRelationship(NaN, 3));
