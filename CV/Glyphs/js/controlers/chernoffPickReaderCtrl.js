function chernoffPickReader(scope, http, location, userId, activeNodeServer, deployNodeServer) {
    var elapsedTime = 0;
    var lastTime = 0;
    var previousTime = 0;
    var answer = 0;
    var colour = 'white';
    var dataTaskArray = picTaskArray;
    scope.instructions = ""
    if (demo) {
        colour = 'orange';
        dataTaskArray = picTaskTrainArray;
        scope.instructions = instructions;
    }

    scope.progress = counter / dataTaskArray.length * 100
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
            console.log('node 1', pick.highlight, elapsedTime)
            taskid = dataTaskArray[counter]['id'];
            var update = {
                id: userId,
                data: {
                    type: 'odd',
                    action: 'chernoff',
                    choice: pick.imId,
                    answer: answer==pick.imId,
                    time: elapsedTime,
                    taskId: taskid,
                    demo: demo,
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
                    location.path("/DemoPickGo")
                } else {
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
                sl = (iris2.data[data[y][x]]["sepalLength"] - iris2.min["sepalLength"]) / (iris2.max["sepalLength"] - iris2.min["sepalLength"]);
                sw = (iris2.data[data[y][x]]["sepalWidth"] - iris2.min["sepalWidth"]) / (iris2.max["sepalWidth"] - iris2.min["sepalWidth"]);
                pl = (iris2.data[data[y][x]]["petalLength"] - iris2.min["petalLength"]) / (iris2.max["petalLength"] - iris2.min["petalLength"]);
                pw = (iris2.data[data[y][x]]["petalWidth"] - iris2.min["petalWidth"]) / (iris2.max["petalWidth"] - iris2.min["petalWidth"]);
                scope.shapes.push({
                    'x': Math.floor((x + 1) * (scope.graph.width / 7)),
                    'y': Math.floor((y + 1) * (scope.graph.height / 20)),
                    "HeadTop": 15,
                    "HeadBottom": 20,
                    "HeadShape": 35,
                    "EyesVertical": 15,
                    "EyesHorizontal": 16,
                    "EyeRorate": 60 * sl, //#
                    "EyeWidth": 11 * sw, //#
                    "EyeHeight": 5,
                    "EyeBrowHeight": 8,
                    "EyeBrowLength": 10 * pl, //#
                    "NoseLength": 10, //#
                    "MouthLength": 15,
                    "MouthVertical": 18,
                    "MouthSmile": 15 * (pw - 50) / 50.0 + 30,
                    'highlight': 'white',
                    'imId': imCounter
                });
                imCounter++;
            }
        }

    };
    lastTime = new Date().getTime() / 1000;
    setShapes();


}
