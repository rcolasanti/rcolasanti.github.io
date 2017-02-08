function starOrderReader(scope, http, location, userId, activeNodeServer, deployNodeServer) {
    var elapsedTime = 0;
    var lastTime = 0;
    var previousTime = 0;

    var answer = []
    var colour = 'white';
    var dataTaskArray = orderTaskArray;
    scope.instructions = ""
    if (demo) {
        colour = 'orange';
        dataTaskArray = orderTaskTrainArray;
        scope.instructions = instructions;
    }




    scope.progress = counter / dataTaskArray.length * 100
    scope.graph = {
        'width': 500,
        'height': 1500
    };


    scope.mouseOverThing = function(pick) {
        var flag = !demo
        for (i = 0; i < answer.length; i++) {
            scope.shapes[answer[i]].highlight = colour
            if (scope.shapes[answer[i]].highlight == pick.highlight) {
                flag = true
            }
        }
        var correct = false;
        for (i = 0; i < answer.length; i++) {
            if (answer[i] == pick.imId) {
                correct = true
            }
        }
        if (flag == true) {
            var now = new Date().getTime() / 1000;
            elapsedTime = (now - lastTime);
            lastTime = now;
            console.log('node 1', pick.highlight, elapsedTime)
            taskid = dataTaskArray[counter]['id'];
            var update = {
                id: userId,
                data: {
                    type: 'sequence',
                    action: 'star',
                    choice: pick.imId,
                    answer: correct,
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
                    location.path("/DemoSequenceGo")
                } else {
                    location.path("/CompleteSequence")
                }
            } else {
                if (dataTaskArray[counter]['glyph'] == 0) {
                    location.path("/StarOrder");
                }
                if (dataTaskArray[counter]['glyph'] == 1) {
                    location.path("/FlowerOrder");
                }
                if (dataTaskArray[counter]['glyph'] == 2) {
                    location.path("/ChernoffOrder");
                }
                if (dataTaskArray[counter]['glyph'] == 3) {
                    location.path("/ChmojiOrder");
                }
            }
        }
    };

    setShapes = function() {
        scope.shapes = [];
        scope.mshapes = [];

        size = dataTaskArray[counter]['size']
        data = dataTaskArray[counter]['data']
        seqlength = dataTaskArray[counter]['seqlength']
        sequance = dataTaskArray[counter]['sequance']
        sequancePos = dataTaskArray[counter]['sequancepos']
        imCounter = 0
        console.log("bug " + size + "  " + counter);
        for (y = 0; y < size; y++) {
            for (x = 0; x < size; x++) {
                scope.shapes.push({
                    'x': Math.floor((x + 1) * (scope.graph.width / 7)),
                    'd': polygonGeneratorIris(data[y][x]),
                    'y': Math.floor((y + 1) * (scope.graph.height / 20)),
                    'lines': getCordinate(data[y][x], 30, 1.0, 0.4),
                    'highlight': 'white',
                    'imId': imCounter
                });
                imCounter++;
            }
        }

        var indx = 0
        for (i = 0; i < sequancePos.length; i++) {
            indx = sequancePos[i][0] * size + sequancePos[i][1]
            answer.push(indx);
        }


        for (i = 0; i < seqlength; i++) {
            scope.mshapes.push({
                'x': 55 * (i + 1),
                'd': polygonGeneratorIris(sequance[i]),
                'y': 55,
                'lines': getCordinate(sequance[i], 30, 1.0, 0.4),
            });
        }
        lastTime = new Date().getTime() / 1000;
    };
    lastTime = new Date().getTime() / 1000;
    setShapes();



    function getCordinate(count, size, upper, lower) {
        sl = (iris.data[count]["sepalLength"] - iris.min["sepalLength"]) / (iris.max["sepalLength"] - iris.min["sepalLength"]);
        sw = (iris.data[count]["sepalWidth"] - iris.min["sepalWidth"]) / (iris.max["sepalWidth"] - iris.min["sepalWidth"]);
        pl = (iris.data[count]["petalLength"] - iris.min["petalLength"]) / (iris.max["petalLength"] - iris.min["petalLength"]);
        pw = (iris.data[count]["petalWidth"] - iris.min["petalWidth"]) / (iris.max["petalWidth"] - iris.min["petalWidth"]);
        dataArray = [sl, sw, pl, pw]
        coordArray = [];
        for (var i = 0; i < dataArray.length; i++) {
            var angle = 2 * Math.PI * i / dataArray.length;
            var l = dataArray[i] * (upper - lower) + lower;
            var x = Math.floor(l * Math.cos(angle) * size);
            var y = Math.floor(l * Math.sin(angle) * size);
            coordArray.push({
                'x': x,
                'y': y
            });
        }
        return coordArray;
    }



    function polygonGeneratorIris(count) {
        sides = getCordinate(count, 30, 1.0, 0.4)
        var pointsString = " M" + sides[0].x + " " + sides[0].y;
        for (var i = 1; i < sides.length; i++) {
            pointsString += " L" + sides[i].x + " " + sides[i].y;
        }
        pointsString += " L" + sides[0].x + " " + sides[0].y + " Z";
        console.log(pointsString);
        return pointsString;
    }



}
