/*
The animation for the experience tab.
 */

var experienceAnimation = function( p ) {
    var tabClicked = false;
    var bottomLineDone = false;
    var stemDone = false;
    var bottomLineLength = 50;
    var stemElapsed= 0;
    var buttonsMade;
    var arcButton;
    var sylmarButton;
    var amazonButton;

    p.setup = function() {
        var canvas = p.createCanvas(p.windowWidth, p.windowHeight/2);
        var j = (p.windowHeight / 2);
        canvas.position(0, j);
        var experienceTab = p.select('#experience-tab');
        experienceTab.mouseClicked(showAnimation);
    };

    p.draw = function() {
        p.background('black');
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
        p.stroke('white');
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
        var firstFourth = p.width / 4; // timeline starts at 50px
        var secondFourth = p.width / 2;
        var thirdFourth = 3 * p.width / 4;
        p.stroke('white');
        p.line(firstFourth, p.height/2 - stemElapsed, firstFourth, p.height/2);
        p.line(secondFourth, p.height/2 + stemElapsed, secondFourth, p.height/2);
        p.line(thirdFourth, p.height/2 - stemElapsed, thirdFourth, p.height/2);
        if (stemElapsed < p.height/4) {
            stemElapsed += 10;
        } else {
            stemDone = true;
        }
        p.pop();
    }

    /**
     * Draws the dates.
     * This is the third part of the animation along with {@link drawButtons}
     */
    function drawDates() {
        var firstFourth = p.width / 4; // timeline starts at 50px
        var secondFourth = p.width / 2;
        var thirdFourth = 3 * p.width / 4;

        var arcDate = p.createP('Summer and Fall 2016');
        arcDate.position(firstFourth, p.windowHeight/2 +  p.height/2 + 10);
        arcDate.style('color', 'white');

        var sylmarDate = p.createP('Summer and Fall 2016');
        sylmarDate.position(secondFourth, p.windowHeight/2 +  p.height/2 - 25);
        sylmarDate.style('color', 'white');

        var amazonDate = p.createP('Summer and Fall 2016');
        amazonDate.position(thirdFourth, p.windowHeight/2 +  p.height/2 + 10);
        amazonDate.style('color', 'white');
    }

    /**
    Draws the buttons on the timeline.
    Invoked only once in {@link drawBottomLine}.
    This is the third part of the animation along with {@link drawDates}
     */
    function drawButtons() {
        var firstFourth = p.width / 4; // timeline starts at 50px
        var secondFourth = p.width / 2;
        var thirdFourth = 3 * p.width / 4;

        arcButton = p.createButton('ARC 35');
        arcButton.position(firstFourth, p.windowHeight/2 + p.height/4);

        sylmarButton = p.createButton('SYLMAR CODE');
        sylmarButton.position(secondFourth, p.windowHeight/2 + 3*p.height/4);

        amazonButton = p.createButton('AMAZON');
        amazonButton.position(thirdFourth, p.windowHeight/2 + p.height/4);

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
};

var myp5 = new p5(experienceAnimation, 'experience');
