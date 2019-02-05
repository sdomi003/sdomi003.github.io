/*
The animation for the aboutme tab.
 */
var aboutTabClicked = false;
var aboutMeVidPlaying = false;
var aboutMeVideo;
var aboutMeAnimation = function( p ) {
    var clearDrawingButton;
    var canvas;
    var x;
    var y;
    var lineTrail = [];

    p.setup = function() {
        x = 500;
        y = 500;

        aboutMeVideo = p.createVideo(['second.mp4']);
        aboutMeVideo.size(p.windowWidth - 20, 3*p.windowWidth/4);
        aboutMeVideo.hide();

        canvas = p.createCanvas(p.windowWidth - 20, 3*p.windowWidth/4);

        var aboutMeTab = p.select('#about-me-tab');
        aboutMeTab.mouseClicked(playVideo);

        var blogTab = p.select('#blog-tab');
        blogTab.mouseClicked(pauseVid);

        var experienceTab = p.select('#experience-tab');
        experienceTab.mouseClicked(pauseVid);

    };

    p.draw = function() {
        if (aboutTabClicked) {
            p.image(aboutMeVideo, 0, 0);
            if (p.mouseIsPressed) {
                lineTrail.push([p.pmouseX, p.pmouseY, p.mouseX, p.mouseY]);
            }
            var i;
            for(i = 0; i < lineTrail.length; ++i) {
                p.line(lineTrail[i][0], lineTrail[i][1], lineTrail[i][2], lineTrail[i][3]);
            }
        }
    };

    function playVideo() {
        aboutMeVideo.play(); // set the video to loop and start playing
        aboutTabClicked = true;
        aboutMeVidPlaying = true;
        clearDrawingButton = p.createButton('Clear My Sketch');
        clearDrawingButton.position(p.windowWidth / 2, canvas.position().y + p.height / 4);
        clearDrawingButton.mouseClicked(eraseUserSketch);
    }

    function eraseUserSketch() {
        lineTrail = [];
    }

    function pauseVid() {
        if (aboutMeVidPlaying) {
            aboutMeVideo.pause();
        }
    }
};

var aboutMe = new p5(aboutMeAnimation, 'aboutMe');