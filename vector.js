var vector = function(x, y){ this.x = x; this.y = y; }
vector.prototype = {
	iadd: function(v){ this.x += v.x; this.y += v.y; return this},
	isub: function(v){ this.x -= v.x; this.y -= v.y; return this},
	imul: function(n){ this.x *= n; this.y *= n; return this},
	idiv: function(n){ this.x /= n; this.y /= n; return this},

	zero: function(n){ this.x = 0; this.y = 0; return this},

	add: function(v){ return new vector(this.x + v.x, this.y + v.y);},
	sub: function(v){ return new vector(this.x - v.x, this.y - v.y);},
	mul: function(n){ return new vector(this.x * n, this.y * n);},
	div: function(n){ return new vector(this.x/n, this.y/n);},

	dot: function(v){ return (this.x * v.x + this.y * v.y);},

	magnitude: function(){ return Math.sqrt(this.x * this.x + this.y * this.y);},
	magnitude2: function(){ return this.x * this.x + this.y * this.y;},
	unit: function(){
		var a = Math.sqrt(this.x * this.x + this.y * this.y);
		return new vector(
			this.x / a,
			this.y / a
		);
	},

	normalize: function(){
		var a = Math.sqrt(this.x * this.x + this.y * this.y);
		this.x /= a;
		this.y /= a;
		return this;
	},
}
