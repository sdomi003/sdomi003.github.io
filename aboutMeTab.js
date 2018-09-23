/*
The animation for the aboutme tab.
 */

var aboutMeAnimation = function( p ) {
    var sampleVideo;
    var canvas;
    var x;
    var y;
    var lineTrail = [];

    p.setup = function() {
        x = 500;
        y = 500;

        sampleVideo = p.createVideo(['second.mp4']);
        sampleVideo.size(p.windowWidth - 20, 3*p.windowWidth/4);
        sampleVideo.hide();

        canvas = p.createCanvas(p.windowWidth - 20, 3*p.windowWidth/4);
    };

    p.draw = function() {
        p.image(sampleVideo, 0, 0);

        if (p.mouseIsPressed) {
            lineTrail.push([p.pmouseX, p.pmouseY, p.mouseX, p.mouseY]);
        }
        var i;
        for(i = 0; i < lineTrail.length; ++i) {
            p.line(lineTrail[i][0], lineTrail[i][1], lineTrail[i][2], lineTrail[i][3]);
        }

        // p.stroke('black');
        // p.rect(x, y, 50, 50);
        // x += 1;


    };

    p.mousePressed = function() {
        sampleVideo.play(); // set the video to loop and start playing
    }

};

var aboutMe = new p5(aboutMeAnimation, 'aboutMe');