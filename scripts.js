$(document).on("keypress", function(e) {

    
    var y = $(".mario").offset().top;
    var x = $(".mario").offset().left;
    var yParent = $(".mario").parent().offset().top;
    var xParent = $(".mario").parent().offset().left;
    var yFParent = yParent + $(".mario").parent().height();
    var xFParent = xParent + $(".mario").parent().width();
    var newY = y, newX = x, s = 20, r= 50, jump = 60;

    var code = e.keyCode;
    var key = String.fromCharCode(code).toLowerCase();

    //console.log("key pressed [" + key + "] with code " + code);

    switch (key) {
        case "w":
            newY = y - s;
            break;
        case "s":
            newY = y + s;
            break;
        case "a":
            newX = x - s;
            break;
        case "d":
            newX = x + s;
            break;
        case " ":
            $(".mario").animate({top: "-=" + jump }, "slow");
            $(".mario").animate({top: "+=" + jump }, "slow");
            break;
        default:
            break;
    }

    if (newY < yParent) { newY = yParent; }
    if (newY + r > yFParent) { newY = yFParent - r; }
    if (newX < xParent) { newX = xParent; }
    if (newX + r > xFParent) { newX = xFParent - r; }

    //wwasconsole.log("Run 2 => mario [" + newX + "," + newY + "] ");

    $(".mario").offsessssst({
        top: newY,
        left: newX
    });

});