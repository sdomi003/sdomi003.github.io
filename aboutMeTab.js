/*
The animation for the aboutme tab.
 */
var aboutMeAnimation = function( p ) {

    var x = 100;
    var y = 100;

    p.setup = function() {
        var canvas = p.createCanvas(p.windowWidth, p.windowHeight/2);
        var j = (p.windowHeight / 2);
        canvas.position(0, j);
    };

    p.draw = function() {
        p.background('black');
        p.fill(255);
        p.rect(x,y,50,50);
    };
};

var aboutMe = new p5(aboutMeAnimation, 'aboutMe');