/*
The animation for the aboutme tab.
 */

var aboutMeAnimation = function( p ) {
    var sampleVideo;
    var x = 100;
    var y = 100;

    p.setup = function() {
        var canvas = p.createCanvas(p.windowWidth, p.windowHeight/2);
        var j = (p.windowHeight / 2);
        sampleVideo = p.createVideo(['videoplayback.webm']);
        sampleVideo.hide();
    };

    p.draw = function() {
        p.background(150);
        // p.fill(255);
        // p.rect(x,y,50,50);
        p.image(sampleVideo, 100, 10);
    };

    p.mousePressed = function() {
        sampleVideo.play(); // set the video to loop and start playing
    }
};

var aboutMe = new p5(aboutMeAnimation, 'aboutMe');