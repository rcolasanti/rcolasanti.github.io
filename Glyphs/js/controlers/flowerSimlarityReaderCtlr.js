function flowerSimlarityReader(scope, http, location, userId, activeNodeServer, deployNodeServer) {
    var elapsedTime = 0;
    var lastTime = 0;
    var previousTime = 0;
    var answer = 0;
    var colour = 'white';
    var dataTaskArray = similarityTaskArray;
    scope.instructions = ""
    if (demo) {
        colour = 'orange';
        dataTaskArray = similarityTaskTrainArray;
        scope.instructions = "This is a chance to practice on some examples before the real task. The correct answer will be highlighted in orange . If you have not clicked on that image the first time click on the highlighted image to go to the next example"
    }



    scope.progress = counter / dataTaskArray.length * 100
    scope.graph = {
        'width': 500,
        'height': 1500
    };


    scope.mouseOverThing = function(pick) {
        scope.shapes[answer].highlight = colour
        console.log("bug ", scope.shapes[answer].highlight, pick.highlight);

        if ((demo==false)||(scope.shapes[answer].highlight == pick.highlight)) {
            var now = new Date().getTime() / 1000;
            elapsedTime = (now - lastTime);
            lastTime = now;
            console.log('node 1', pick.highlight, elapsedTime)
            taskid = dataTaskArray[counter]['id'];
            var update = {
                id: userId,
                data: {
                    type: 'similarity',
                    action: 'flower',
                    choice: pick.imId,
                    answer: answer==pick.imId,
                    time: elapsedTime,
                    taskId: taskid,
                    demo:demo,
                }
            };
            console.log('node 2', update.id);
            console.log('node 3', update.data);
            http.post(activeNodeServer + 'update', update).success(function(rData) {
                    console.log('node 4', 'success');
                    console.log('node 5', rData);
                })
                .error(function(err) {
                    console.log('node 6', 'error', err);
                });

            counter += 1;
            if (counter >= dataTaskArray.length) {
                if (demo) {
                    location.path("/DemoSimilarGo")
                } else {
                    location.path("/CompleteSimilar")
                }
            } else {
                if (dataTaskArray[counter]['glyph'] == 0) {
                    location.path("/StarSimlarity");
                }
                if (dataTaskArray[counter]['glyph'] == 1) {
                    location.path("/FlowerSimlarity");
                }
                if (dataTaskArray[counter]['glyph'] == 2) {
                    location.path("/ChernoffSimlarity");
                }
                if (dataTaskArray[counter]['glyph'] == 3) {
                    location.path("/ChmojiSimlarity");
                }
            }
        }
    };

    setShapes = function() {
        scope.shapes = [];

        size = dataTaskArray[counter]['size']
        data = dataTaskArray[counter]['data']
        choice = dataTaskArray[counter]['choice']
        target = dataTaskArray[counter]['target']
        imCounter = 0
        console.log("bug", choice, counter);
        console.log("bug " + size + "  " + counter);
        for (y = 0; y < size; y++) {
            for (x = 0; x < size; x++) {
                if (data[y][x] == target) {
                    answer = scope.shapes.length
                }
                scope.shapes.push({
                    'x': Math.floor((x + 1) * (scope.graph.width / 7)),
                    'pettles': pettleGenerator(data[y][x]),
                    'y': Math.floor((y + 1) * (scope.graph.height / 20)),
                    'highlight': 'white',
                    'imId': imCounter
                });
                imCounter++;

            }
        }

        scope.mshape = {
            'x': 55,
            'pettles': pettleGenerator(choice),
            'y': 55,
            'highlight': 'white'
        };

    }
    lastTime = new Date().getTime() / 1000;
    setShapes();

    function curvedPath(x, y, size, shape) {
        var pointsString = "M" + (x - size / 2.5) + "," + (y + size / 2.5);
        pointsString += " Q" + x + "," + (y + size / (0.9 + shape));
        pointsString += " " + (x + size / 2.5) + "," + (y + size / 2.5);
        return pointsString;
    }

    function randomDoubleArray(sides, size, upper, lower) {
        dataArray = [];
        for (var i = 0; i < sides; i++) {
            var l = Math.random() * (upper - lower) + lower;
            dataArray.push(Math.floor(l * size));
        }
        return dataArray;
    }

    function getCordinate(count, size, upper, lower) {
        sl = (iris2.data[count]["sepalLength"] - iris2.min["sepalLength"]) / (iris2.max["sepalLength"] - iris2.min["sepalLength"]);
        sw = (iris2.data[count]["sepalWidth"] - iris2.min["sepalWidth"]) / (iris2.max["sepalWidth"] - iris2.min["sepalWidth"]);
        pl = (iris2.data[count]["petalLength"] - iris2.min["petalLength"]) / (iris2.max["petalLength"] - iris2.min["petalLength"]);
        pw = (iris2.data[count]["petalWidth"] - iris2.min["petalWidth"]) / (iris2.max["petalWidth"] - iris2.min["petalWidth"]);
        dataArray = [sl, sw, pl, pw]
        coordArray = [];
        for (var i = 0; i < dataArray.length; i++) {
            var l = dataArray[i] * (upper - lower) + lower;
            coordArray.push(Math.floor(l * size));
        }
        return coordArray;
    }


    function pettleGenerator(count) {
        sides = getCordinate(count, 15, 1.0, 0.6)
        var rotate = 0;
        var incDegree = 360.0 / 4;
        var pettle = {};
        for (key = 0; key < sides.length; key++) {
            pettle[key] = {
                "ry": sides[key],
                "rx": 10,
                "rotate": rotate
            };
            rotate += incDegree;
        }
        return pettle;
    }

}
