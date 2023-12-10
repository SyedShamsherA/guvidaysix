class Circle{
    constructor(radius = 1.0, color = "red"){
        this._radius=radius;
        this._color = color;
    }

    getRadius(){
        return this._radius;
    }

    setRadius(radius){
        this._radius = radius;
    }

    getColor(){
        return this._color;
    }

    setColor(color){
        this._color = color;
    }

    toString(){
        return `Circle - Radius: ${this._radius}, Color: ${this._color}`
    }

    getArea(){
        return Math.PI * this._radius * this._radius;
    }

    getCircumference(){
        return 2 * Math.PI * this._radius;
    }
}