var y = $(".mario").offset().top;
var x = $(".mario").offset().left;
var yParent = $(".mario").parent().offset().top;
var xParent = $(".mario").parent().offset().left;
var yFParent = yParent + $(".mario").parent().height();
var xFParent = xParent + $(".mario").parent().width();
var newY = y,
    newX = x,
    s = 20, // step or how many pixels it is moving
    r = 50, // dimension of Mario square
    jump = 60, // jump height
    keys = {}; // track multiple keypress at once

$(document).on("keydown", function(e) {

    console.clear();

    y = getY();
    x = getX();

    var key = getKey(e);
    keys[key] = true;
    var keyList = getKeyList(keys);
    console.log("keys pressed ", keyList);

    switch (keyList) {
        case "w":
            $(".mario").animate({ top: "-=" + jump }, "slow");
            $(".mario").animate({ top: "+=" + jump }, "slow");
            break;
        case "a":
            newX = x - s;
            break;
        case "wa":
            newX = x - s;
            break;
        case "aw":
            newX = x - s;
            break;
        case "d":
            newX = x + s;
            break;
        case "wd":
            newX = x + s;
            break;
        case "dw":
            newX = x + s;
            break;
        default:
            break;
    }

    if (newX < xParent) { newX = xParent; }
    if (newX + r > xFParent) { newX = xFParent - r; }

    $(".mario").offset({
        top: newY,
        left: newX
    });

});

$(document).on("keyup", function(e) {

    var key = getKey(e);
    delete keys[key];

});


function getKey(e) {
    var code = e.keyCode;
    var key = String.fromCharCode(code).toLowerCase();
    return key;
}

function getKeyList(keys) {
    var keyList = "";
    for (var i in keys) {
        if (!keys.hasOwnProperty(i)) continue;
        keyList += i;
    }
    return keyList;
}

function getX() {
    var x = $(".mario").offset().left;
    return x;
}

function getY() {
    var y = $(".mario").offset().top;
    return y;
}