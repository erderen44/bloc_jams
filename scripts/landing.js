/*Refactor the individual style calls of the landing.js script to be a single function named revealPoint that:
takes a single argument: the index of the points class node element, and
gets called in a for loop.*/

        var animatePoints = function() {
 
                 var points = document.getElementsByClassName('point');
 
                 var revealPoint = function(indexNumber) {
                     for (var indexNumber = 0; indexNumber < 3; indexNumber ++ ){
                         points[indexNumber].style.opacity = 1;
                         points[indexNumber].style.transform = "scaleX(1) translateY(0)";
                         points[indexNumber].style.msTransform = "scaleX(1) translateY(0)";
                         points[indexNumber].style.WebkitTransform = "scaleX(1) translateY(0)";
                            }
                 };
 
            revealPoint();
 
             };