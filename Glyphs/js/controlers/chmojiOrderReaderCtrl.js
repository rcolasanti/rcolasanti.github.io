function chmojiOrderReader(scope, http, location, userId, activeNodeServer, deployNodeServer) {
    var elapsedTime = 0;
    var lastTime = 0;
    var previousTime = 0;
    var r = 32;

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
        'height': 1500,
        'choice': ''
    };


    scope.clicked = function(pick) {
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
                    action: 'chmoji',
                    choice: pick.imId,
                    answer: correct,
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
                sl = (iris2.data[data[y][x]]["sepalLength"] - iris2.min["sepalLength"]) / (iris2.max["sepalLength"] - iris2.min["sepalLength"]);
                sw = (iris2.data[data[y][x]]["sepalWidth"] - iris2.min["sepalWidth"]) / (iris2.max["sepalWidth"] - iris2.min["sepalWidth"]);
                pl = (iris2.data[data[y][x]]["petalLength"] - iris2.min["petalLength"]) / (iris2.max["petalLength"] - iris2.min["petalLength"]);
                pw = (iris2.data[data[y][x]]["petalWidth"] - iris2.min["petalWidth"]) / (iris2.max["petalWidth"] - iris2.min["petalWidth"]);

                scope.shapes.push({
                    'x': Math.floor((x + 1) * (scope.graph.width / 7)) - 7,
                    'faceR': r,
                    'y': Math.floor((y + 1) * (scope.graph.height / 20)) - 10,

                    'pupleEye': r / 12 * (sl * 0.8 + 0.2),
                    'outerEye': r / 3.1 * (0.6 + (sw * 0.4)),

                    'odd': false,
                    'mouthX': r,
                    'mouthY': r + r * 1 / 3,
                    'ebLength': 9 * pl,
                    "mouthLength": 15,
                    "mouthVertical": 12,
                    "mouthSmile": (20 * pw) + 20,
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
            sl = (iris2.data[sequance[i]]["sepalLength"] - iris2.min["sepalLength"]) / (iris2.max["sepalLength"] - iris2.min["sepalLength"]);
            sw = (iris2.data[sequance[i]]["sepalWidth"] - iris2.min["sepalWidth"]) / (iris2.max["sepalWidth"] - iris2.min["sepalWidth"]);
            pl = (iris2.data[sequance[i]]["petalLength"] - iris2.min["petalLength"]) / (iris2.max["petalLength"] - iris2.min["petalLength"]);
            pw = (iris2.data[sequance[i]]["petalWidth"] - iris2.min["petalWidth"]) / (iris2.max["petalWidth"] - iris2.min["petalWidth"]);

            scope.mshapes.push({
                'x': 55 * (i + 1),
                'y': 55,
                'faceR': r,

                'pupleEye': r / 12 * (sl * 0.8 + 0.2),
                'outerEye': r / 3.1 * (0.6 + (sw * 0.4)),

                'odd': false,
                'mouthX': r,
                'mouthY': r + r * 1 / 3,
                'ebLength': 9 * pl,
                "mouthLength": 15,
                "mouthVertical": 12,
                "mouthSmile": (20 * pw) + 20,
            });
        }
    };
    lastTime = new Date().getTime() / 1000;
    setShapes();

}
