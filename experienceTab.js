/*
The animation for the experience tab.
 */
var experienceAnimation = function( p ) {

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

        var d = 70;
        var p1 = 70;
        var p2 = p1+d;
        var p3 = p2+d;

        // Draw gray box
        p.translate(140, 0);
        p.stroke(1000);
        p.line(p3, p3, p2, p3);
        p.line(p2, p3, p2, p2);
        p.line(p2, p2, p3, p2);
        p.line(p3, p2, p3, p3);
    };
};

var myp5 = new p5(experienceAnimation, 'experience');
