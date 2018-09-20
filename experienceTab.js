/*
The animation for the experience tab.
 */

var experienceAnimation = function( p ) {
    var canvas;

    /*
    When tabClicked is true, the user has clicked the 'experience' tab.
    This will launch the animation.
     */
    var tabClicked = false;

    /*
    True only after the bottom line of the animation is done.
     */
    var bottomLineDone = false;
    var stemDone = false;
    var bottomLineLength = 50;
    var stemElapsed= 0;

    /*
    The buttons to make and whether or not they have been made.
     */
    var buttonsMade;
    var arcButton;
    var sylmarButton;
    var amazonButton;


    var arcDateAndLocation;
    var sylmarDateAndLocation;
    var amazonDateAndLocation;

    p.setup = function() {
        canvas = p.createCanvas(p.windowWidth - 50, 500);
        canvas.style('z-index', '-1');
        var experienceTab = p.select('#experience-tab');
        experienceTab.mouseClicked(showAnimation);

        arcButton = p.select('#arcPopUp');
        arcButton.hide();

        sylmarButton = p.select('#sylmarPopUp');
        sylmarButton.hide();

        amazonButton = p.select('#amazonPopUp');
        amazonButton.hide();

        arcDateAndLocation = p.select('#arcDateAndTimePar');
        arcDateAndLocation.hide();

        sylmarDateAndLocation = p.select('#sylmarDateAndTimePar');
        sylmarDateAndLocation.hide();

        amazonDateAndLocation = p.select('#amazonDateAndTimePar');
        amazonDateAndLocation.hide();
    };

    p.draw = function() {
        console.log(canvas.position().y);
        p.background('white');
        if (tabClicked === true) {
            drawBottomLine();
            if (bottomLineDone === true) {
                drawStems();
            }
            if (stemDone === true) {
                if(!buttonsMade) {
                    drawButtons();
                    drawDates();
                }
            }
        }
    };

    /**
     * Draws the bottom line only after the user clicks the experience tab.
     * This is the first part of the animation.
     */
    function drawBottomLine() {
        p.push();
        p.strokeWeight(4);
        p.stroke('#f0d200');
        p.line(50, p.height/2, bottomLineLength, p.height/2);
        if (bottomLineLength < p.width - 50) {
            bottomLineLength += 10;
        } else {
            bottomLineDone = true;
        }
        p.pop();
    }

    /**
     * Draws the stems only after {@link drawBottomLine} reports being done.
     * This is the second part of the animation.
     */
    function drawStems() {
        p.push();
        p.strokeWeight(2);
        var firstFourth = p.width / 4; // timeline starts at 50px
        var secondFourth = p.width / 2;
        var thirdFourth = 3 * p.width / 4;
        p.stroke('#f0d200');
        p.noFill();

        p.curve(p.width/4 + 200, p.height/3, firstFourth, p.height/2 - stemElapsed, firstFourth, p.height/2, p.width/4, p.height);
        p.curve(p.width/2 + 200, p.height/2, secondFourth, p.height/2 + stemElapsed, secondFourth, p.height/2, p.width/2, p.height/3);
        p.curve(3*p.width/4 + 200, p.height/3, thirdFourth, p.height/2 - stemElapsed, thirdFourth, p.height/2, 3*p.width/4, p.height);

        if (stemElapsed < p.height/4 - 15) {
            stemElapsed += 2;
        } else {
            stemDone = true;
        }
        p.pop();
    }

    /**
     * Shows the dates.
     * This is the third part of the animation along with {@link drawButtons}
     */
    function drawDates() {
        var firstFourth = p.width / 4; // timeline starts at 50px
        var secondFourth = p.width / 2;
        var thirdFourth = 3 * p.width / 4;

        arcDateAndLocation.position(firstFourth, canvas.position().y +  p.height/2 + 10);
        arcDateAndLocation.show();

        sylmarDateAndLocation.position(secondFourth, canvas.position().y +  p.height/2 - 50);
        sylmarDateAndLocation.show();

        amazonDateAndLocation.position(thirdFourth, canvas.position().y +  p.height/2 + 10);
        amazonDateAndLocation.show();
    }

    /**
    Shows the buttons on the timeline.
    Invoked only once in {@link drawBottomLine}.
    This is the third part of the animation along with {@link drawDates}
     */
    function drawButtons() {
        var firstFourth = p.width / 4; // timeline starts at 50px
        var secondFourth = p.width / 2;
        var thirdFourth = 3 * p.width / 4;

        arcButton.position(firstFourth, canvas.position().y + p.height/4);
        arcButton.size(p.width/4, p.height/2);
        arcButton.show();

        sylmarButton.position(secondFourth, canvas.position().y + 3*p.height/4 - 25);
        sylmarButton.size(p.width/4, p.height/2);
        sylmarButton.show();

        amazonButton.position(thirdFourth, canvas.position().y + p.height/4);
        amazonButton.size(p.width/4, p.height/2);
        amazonButton.show();

        buttonsMade = true;
    }

    /**
    Only show the animation after the tab has been clicked on.
    Invoked only when the user clicks the experience tab.
    This launches the animation.
     */
    function showAnimation() {
        tabClicked = true;
    }

    /**
     * If the user re-sizes the window, re-size everything as well.
     */
    p.windowResized = function() {
        if (tabClicked) {
            canvas.size(p.windowWidth, 500 - 50);
            bottomLineDone = false;
            stemDone = false;
            buttonsMade = false;
        }

    };
};

var myp5 = new p5(experienceAnimation, 'experience');