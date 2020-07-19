function Shape(type){
    
        this.type = type;
}
Shape.prototype.getType = function(){
    return "Triangle";
}


Triangle.prototype = Object.create(Shape.prototype);

function Triangle(a, b, c){
   
        this.a = a;
        this.b = b;
        this.c = c;
}
Triangle.prototype.getPerimeter = function(){
    return this.a + this.b + this.c;
}

var t = new Triangle(2, 2, 4)
Triangle.prototype.constructor = Triangle;


t.constructor === Triangle; // True

Shape.prototype.isPrototypeOf(t);// True

t.getPerimeter();//8
t.getType();// Triangle