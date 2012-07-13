
/**
 * Adding new method 'startsWith' to the 'String' class.
 */                  
String.prototype.startsWith = function(value) {
	return (this.indexOf(value) == 0);
}

/**
 * Adding new method 'endsWith' to the 'String' class.
 */                  
String.prototype.endsWith = function(value) {
	return (this.substr(-value.length) == value);
}

/**
 * Adding new method 'isEmpty' to the 'String' class.
 */                  
String.prototype.isEmpty = function() {
	return (this.length == 0);
}

/**
 * Adding new method 'contains' to the 'String' class.
 */                  
String.prototype.contains = function(value) {
	return (this.indexOf(value) != -1);
}