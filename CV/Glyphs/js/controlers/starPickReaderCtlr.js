function starPickReader(scope, http, location, userId, activeNodeServer, deployNodeServer) {
    var elapsedTime = 0;
    var lastTime = 0;
    var previousTime = 0;
    var answer = 0;
    var colour = 'white';
    var dataTaskArray = picTaskArray;

    console.log("bug", userId);
    scope.instructions = ""
    if (demo) {
        colour = 'orange';
        dataTaskArray = picTaskTrainArray;
        scope.instructions = instructions;
    }

    scope.progress = counter/dataTaskArray.length * 100
    scope.shapes = [];
    scope.graph = {
        'width': 500,
        'height': 1500
    };


    scope.mouseOverThing = function(pick) {
        scope.shapes[answer].highlight = colour
        console.log("bug ", scope.shapes[answer].highlight, pick.highlight);

        if (scope.shapes[answer].highlight == pick.highlight) {
            var now = new Date().getTime() / 1000;
            elapsedTime = (now - lastTime);
            lastTime = now;
            taskid = dataTaskArray[counter]['id'];
            var update = {
                id: userId,
                data: {
                    type: 'odd',
                    action: 'star',
                    choice: pick.imId,
                    answer: answer==pick.imId,
                    time: elapsedTime,
                    taskId: taskid,
                    demo:demo,
                }
            };
            http.post(activeNodeServer + 'update', update).success(function(rData) {
                    console.log('node 4', 'success');
                    console.log('node 5', rData);
                })
                .error(function(err) {
                    console.log('node 6', 'error', err);
                });

            counter += 1;
            if (counter >= dataTaskArray.length) {
                if(demo){
                  location.path("/DemoPickGo")
                }else{
                  location.path("/CompletePick")
                }
            } else {
                if (dataTaskArray[counter]['glyph'] == 0) {
                    location.path("/StarPick");
                }
                if (dataTaskArray[counter]['glyph'] == 1) {
                    location.path("/FlowerPick");
                }
                if (dataTaskArray[counter]['glyph'] == 2) {
                    location.path("/ChernoffPick");
                }
                if (dataTaskArray[counter]['glyph'] == 3) {
                    location.path("/ChmojiPick");
                }
            }
        }
    };




    setShapes = function() {
        scope.shapes = [];

        size = dataTaskArray[counter]['size']
        data = dataTaskArray[counter]['data']
        pic = dataTaskArray[counter]['pic']
        imCounter = 0
        for (y = 0; y < size; y++) {
            for (x = 0; x < size; x++) {
                if (data[y][x] == pic) {
                    answer = scope.shapes.length
                }
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

    };
    lastTime = new Date().getTime() / 1000;
    setShapes();


    function getCordinate(idx, size, upper, lower) {
        sl = (iris2.data[idx]["sepalLength"] - iris2.min["sepalLength"]) / (iris2.max["sepalLength"] - iris2.min["sepalLength"]);
        sw = (iris2.data[idx]["sepalWidth"] - iris2.min["sepalWidth"]) / (iris2.max["sepalWidth"] - iris2.min["sepalWidth"]);
        pl = (iris2.data[idx]["petalLength"] - iris2.min["petalLength"]) / (iris2.max["petalLength"] - iris2.min["petalLength"]);
        pw = (iris2.data[idx]["petalWidth"] - iris2.min["petalWidth"]) / (iris2.max["petalWidth"] - iris2.min["petalWidth"]);
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



    function polygonGeneratorIris(idx) {
        sides = getCordinate(idx, 30, 1.0, 0.4)
        var pointsString = " M" + sides[0].x + " " + sides[0].y;
        for (var i = 1; i < sides.length; i++) {
            pointsString += " L" + sides[i].x + " " + sides[i].y;
        }
        pointsString += " L" + sides[0].x + " " + sides[0].y + " Z";
        console.log(pointsString);
        return pointsString;
    }



}
