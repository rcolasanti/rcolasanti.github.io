var demo = false
    //var demo = true


var deployNodeServer = "http://137.44.6.181/node/";
// When using local serever then Corrs everywhere add in has to be installed and activated in firefox
var hotelPriority = [];

var userId = "";
var counter = 0;
var instructions = "This is a chance to practice on some examples. The correct answer will be highlighted in orange. If you have not made the correct selection the first time click on the highlighted image to proceed to the next example"

var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
        .when("/GlyphTrial", {
            templateUrl: "Glyphs/partials/instructions/Welcome.html",
            controller: "welcomeCtlr"
        })
        .when("/GlyphTrial/User", {
            templateUrl: "Glyphs/partials/User.html",
            controller: "userCtlr"
        })
        .when("/Thankyou", {
            templateUrl: "Glyphs/partials/instructions/Thankyou.html",
        })
        .when("/CompletePick", {
            templateUrl: "Glyphs/partials/instructions/CompletePick.html",
            controller: "completePickCtlr"
        })
        .when("/CompleteSequence", {
            templateUrl: "Glyphs/partials/instructions/CompleteSequence.html",
            controller: "completeSequenceCtlr"
        })
        .when("/CompleteSimilar", {
            templateUrl: "Glyphs/partials/instructions/CompleteSimilar.html",
            controller: "completeSimilarCtlr"
        })
        .when("/User", {
            templateUrl: "partials/User.html",
            controller: "userCtlr"
        })
        .when("/DemoPick", {
            templateUrl: "Glyphs/partials/instructions/DemoPick.html",
            controller: "picDemoCtlr"
        })
        .when("/DemoPickGo", {
            templateUrl: "Glyphs/partials/instructions/DemoPickGo.html",
            controller: "picDemoGoCtlr"
        })
        .when("/DemoSequence", {
            templateUrl: "Glyphs/partials/instructions/DemoSequence.html",
            controller: "sequenceDemoCtlr"
        })
        .when("/DemoSequenceGo", {
            templateUrl: "Glyphs/partials/instructions/DemoSequenceGo.html",
            controller: "sequenceDemoGoCtlr"
        })
        .when("/DemoSimilar", {
            templateUrl: "Glyphs/partials/instructions/DemoSimilar.html",
            controller: "similarDemoCtlr"
        })
        .when("/DemoSimilarGo", {
            templateUrl: "Glyphs/partials/instructions/DemoSimilarGo.html",
            controller: "similarDemoGoCtlr"
        })
        .when("/StarPick", {
            templateUrl: "Glyphs/partials/StarPickReader.html",
            controller: "starPickReaderCtrl"
        })
        .when("/StarOrder", {
            templateUrl: "Glyphs/partials/StarOrderReader.html",
            controller: "starOrderReaderCtrl"
        })
        .when("/StarSimlarity", {
            templateUrl: "Glyphs/partials/StarSimilarityReader.html",
            controller: "starSimlarityReaderCtrl"
        })
        .when("/FlowerPick", {
            templateUrl: "Glyphs/partials/FlowerPickReader.html",
            controller: "flowerPickReaderCtrl"
        })
        .when("/FlowerOrder", {
            templateUrl: "Glyphs/partials/FlowerOrderReader.html",
            controller: "flowerOrderReaderCtrl"
        }).when("/FlowerSimlarity", {
            templateUrl: "Glyphs/partials/FlowerSimilarityReader.html",
            controller: "flowerSimlarityReaderCtrl"
        })
        .when("/ChmojiPick", {
            templateUrl: "Glyphs/partials/ChmojiPickReader.html",
            controller: "chmojiPickReaderCtrl"
        }).when("/ChmojiOrder", {
            templateUrl: "Glyphs/partials/ChmojiOrderReader.html",
            controller: "chmojiOrderReaderCtrl"
        }).when("/ChmojiSimlarity", {
            templateUrl: "Glyphs/partials/ChmojiSimilarityReader.html",
            controller: "chmojiSimlarityReaderCtrl"
        }).when("/ChernoffPick", {
            templateUrl: "Glyphs/partials/ChernoffPickReader.html",
            controller: "chernoffPickReaderCtrl"
        }).when("/ChernoffOrder", {
            templateUrl: "Glyphs/partials/ChernoffOrderReader.html",
            controller: "chernoffOrderReaderCtrl"
        }).when("/ChernoffSimlarity", {
            templateUrl: "Glyphs/partials/ChernoffSimilarityReader.html",
            controller: "chernoffSimlarityReaderCtrl"
        });
});


app.controller("starPickReaderCtrl", function($scope, $http, $location) {
    starPickReader($scope, $http, $location, userId, localNodeServer, deployNodeServer);
});

app.controller("starOrderReaderCtrl", function($scope, $http, $location) {
    starOrderReader($scope, $http, $location, userId, localNodeServer, deployNodeServer);
});

app.controller("starSimlarityReaderCtrl", function($scope, $http, $location) {
    starSimlarityReader($scope, $http, $location, userId, localNodeServer, deployNodeServer);
});



app.controller("flowerPickReaderCtrl", function($scope, $http, $location) {
    flowerPickReader($scope, $http, $location, userId, localNodeServer, deployNodeServer);
});

app.controller("flowerOrderReaderCtrl", function($scope, $http, $location) {
    flowerOrderReader($scope, $http, $location, userId, localNodeServer, deployNodeServer);
});

app.controller("flowerSimlarityReaderCtrl", function($scope, $http, $location) {
    flowerSimlarityReader($scope, $http, $location, userId, localNodeServer, deployNodeServer);
});



app.controller("chernoffPickReaderCtrl", function($scope, $http, $location) {
    chernoffPickReader($scope, $http, $location, userId, localNodeServer, deployNodeServer);
});

app.controller("chernoffOrderReaderCtrl", function($scope, $http, $location) {
    chernoffOrderReader($scope, $http, $location, userId, localNodeServer, deployNodeServer);
});

app.controller("chernoffSimlarityReaderCtrl", function($scope, $http, $location) {
    chernoffSimlarityReader($scope, $http, $location, userId, localNodeServer, deployNodeServer);
});


app.controller("chmojiPickReaderCtrl", function($scope, $http, $location) {
    chmojiPickReader($scope, $http, $location, userId, localNodeServer, deployNodeServer);
});

app.controller("chmojiOrderReaderCtrl", function($scope, $http, $location) {
    chmojiOrderReader($scope, $http, $location, userId, localNodeServer, deployNodeServer);
});

app.controller("chmojiSimlarityReaderCtrl", function($scope, $http, $location) {
    chmojiSimlarityReader($scope, $http, $location, userId, localNodeServer, deployNodeServer);
});


app.controller("userCtlr", function($scope, $http, $location) {
    counter = 0;
    $scope.listCountries = countries;
    $scope.listGender = ['Not supplied', 'Female', 'Male', 'Other'];
    $scope.listAge = ['Not supplied', '0-24', '25-44', '45-64', '65-74', '75+'];
    $scope.listEducation = ['Not supplied', 'None', 'Highschool', 'Degree', 'Postgraduate'];
    $scope.ListVizExperiance = ['Not supplied', 'None', 'Knowledgeable', 'Expert'];
    $scope.reset = function() {
        $http.post(localNodeServer + 'create', $scope.user).success(function(rData) {
                console.log('success');
                console.log(rData._id);
                userId = rData._id;
            })
            .error(function(err) {
                console.log('error', err);
            });
        counter = 0
        $location.path("/DemoPick");
    };
});

app.controller("welcomeCtlr", function($scope, $http, $location) {
    $scope.clicked = function() {
        $location.path("/User");
    };
});
app.controller("completePickCtlr", function($scope, $http, $location) {
    $scope.listOrder = ['Easy', 'Medium', 'Hard'];
    $scope.listGlyph = ['Star', 'Flower', 'Chernoff', 'Emoji'];

    $scope.send = function() {
        var update = {
            id: userId,
            data: {
                type: 'odd',
                action: 'question',
                level: $scope.question.order,
                best: $scope.question.glyphorder,
                worst: $scope.question.glyphhard,
            }
        };
        $http.post(localNodeServer + 'update', update).success(function(rData) {
                console.log('node 4', 'success');
                console.log('node 5', rData);
            })
            .error(function(err) {
                console.log('node 6', 'error', err);
            });
        counter = 0
        $location.path("/DemoSequence");
    };
});
app.controller("completeSequenceCtlr", function($scope, $http, $location) {
    $scope.listOrder = ['Easy', 'Medium', 'Hard'];
    $scope.listGlyph = ['Star', 'Flower', 'Chernoff', 'Emoji'];

    $scope.send = function() {
        var update = {
            id: userId,
            data: {
                type: 'sequence',
                action: 'question',
                level: $scope.question.order,
                best: $scope.question.glyphorder,
                worst: $scope.question.glyphhard,
            }
        };
        $http.post(localNodeServer + 'update', update).success(function(rData) {
                console.log('node 4', 'success');
                console.log('node 5', rData);
            })
            .error(function(err) {
                console.log('node 6', 'error', err);
            });
        counter = 0
        $location.path("/DemoSimilar");
    };
});
app.controller("completeSimilarCtlr", function($scope, $http, $location) {
    $scope.listOrder = ['Easy', 'Medium', 'Hard'];
    $scope.listGlyph = ['Star', 'Flower', 'Chernoff', 'Emoji'];

    $scope.send = function() {
        var update = {
            id: userId,
            data: {
                type: 'similar',
                action: 'question',
                level: $scope.question.order,
                best: $scope.question.glyphorder,
                worst: $scope.question.glyphhard,
            }
        };
        $http.post(localNodeServer + 'update', update).success(function(rData) {
                console.log('node 4', 'success');
                console.log('node 5', rData);
            })
            .error(function(err) {
                console.log('node 6', 'error', err);
            });
        counter = 0
        $location.path("/Thankyou");
    };
});









app.controller("picDemoCtlr", function($scope, $http, $location) {
    $scope.clicked = function() {
        counter = 0
        demo = true
        $location.path("/StarPick");
    };
});
app.controller("picDemoGoCtlr", function($scope, $http, $location) {
    $scope.clicked = function() {
        counter = 0
        demo = false
        console.log("bug", picTaskArray[counter]['glyph']);
        if (picTaskArray[counter]['glyph'] == 0) {
            $location.path("/StarPick");
        }
        if (picTaskArray[counter]['glyph'] == 1) {
            $location.path("/FlowerPick");
        }
        if (picTaskArray[counter]['glyph'] == 2) {
            $location.path("/ChernoffPick");
        }
        if (picTaskArray[counter]['glyph'] == 3) {
            $location.path("/ChmojiPick");
        }
    };
});

app.controller("similarDemoCtlr", function($scope, $http, $location) {
    $scope.clicked = function() {
        counter = 0
        demo = true
        $location.path("/StarSimlarity");
    };
});
app.controller("similarDemoGoCtlr", function($scope, $http, $location) {
    $scope.clicked = function() {
        counter = 0
        demo = false
        if (similarityTaskArray[counter]['glyph'] == 0) {
            $location.path("/StarSimlarity");
        }
        if (similarityTaskArray[counter]['glyph'] == 1) {
            $location.path("/FlowerSimlarity");
        }
        if (similarityTaskArray[counter]['glyph'] == 2) {
            $location.path("/ChernoffSimlarity");
        }
        if (similarityTaskArray[counter]['glyph'] == 3) {
            $location.path("/ChmojiSimlarity");
        }

    };
});
app.controller("sequenceDemoCtlr", function($scope, $http, $location) {
    $scope.clicked = function() {
        counter = 0
        demo = true
        $location.path("/StarOrder");
    };
});
app.controller("sequenceDemoGoCtlr", function($scope, $http, $location) {
    $scope.clicked = function() {
        counter = 0
        demo = false
        if (orderTaskArray[counter]['glyph'] == 0) {
            $location.path("/StarOrder");
        }
        if (orderTaskArray[counter]['glyph'] == 1) {
            $location.path("/FlowerOrder");
        }
        if (orderTaskArray[counter]['glyph'] == 2) {
            $location.path("/ChernoffOrder");
        }
        if (orderTaskArray[counter]['glyph'] == 3) {
            $location.path("/ChmojiOrder");
        }
    };
});
