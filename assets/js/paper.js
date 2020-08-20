var circles = [];

        function onKeyDown(event) {
            if(keyData[event.key]){
                var maxPoint = new Point(view.size.width, view.size.height);
                var randomPoint = Point.random();
                var point = maxPoint * randomPoint;
                var newCircle = new Path.Circle(point, 250);
                newCircle.fillColor = keyData[event.key].color;
                circles.push(newCircle);
                keyData[event.key].sound.play();
            }           
        }
        

        function onFrame(event){
            for(var i = 0; i < circles.length; i++){
                circles[i].fillColor.hue += 1;
                circles[i].scale(.98);
                if(circles[i].area < 1){
                    circles[i].remove(); // remove the circle from the canvas
                    circles.splice(i, 1); // remove the circle from the array
                    
                  }
            } 
        }