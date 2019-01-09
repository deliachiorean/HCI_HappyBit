var myGamePiece;
var myObstacles = [];
var myScore;
var restart = false;
var icon = "sources/bear-icon.png";
var record = 0;
var isOnStart=true;

$(document).ready(function () {
    startGame();
    $("#highScore").html("<h1>0</h1>");
});

function stopIntro() {
    var thissound = document.getElementById("intro");
    thissound.pause();
    thissound.currentTime = 0;
}

function animal(num) {
    var audio = document.getElementById("animal" + num.toString())
    audio.play();
}

function stop(num) {
    var thissound = document.getElementById("animal" + num.toString());
    thissound.pause();
    thissound.currentTime = 0;
}


window.onresize = function () {
    restartGame();
}

function restartGame() {
    myGameArea.clear();
    myObstacles = [];
    restart = true;
    startGame();
}

function startGame() {
    myGamePiece = new component(40, 40, icon, 10, 120, "image");

    myGamePiece.gravity = 0.05;
    myScore = new component("30px", "Consolas", "black", 280, 40, "text");
    if(isOnStart) {
        setTimeout(
            function () {
                if(isOnStart)
                    myGameArea.start();
                isOnStart=false;
            }, 18000);
    }else{
        myGameArea.start();
    }
}

var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        var canvasContainer = document.getElementById("game-row");

        this.canvas.width = canvasContainer.clientWidth - 40;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        $("#game").append(this.canvas);
        this.frameNo = 0;
        if (!restart)
            this.interval = setInterval(updateGameArea, 20);
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.score = 0;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.gravity = 0;
    this.gravitySpeed = 0;
    this.update = function () {
        ctx = myGameArea.context;
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else if (type == "image") {
            ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function () {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom();
        this.hitTop();
    }
    this.hitBottom = function () {
        var rockbottom = myGameArea.canvas.height - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = 0;
        }
    }
    this.hitTop = function () {
        if (this.y < 0) {
            this.gravitySpeed = 0;
        }
    }

    function setHighScore() {
        record = myGameArea.frameNo;
        $("#highScore").html("<h1>" + myGameArea.frameNo + "</h1>");
    }

    this.crashWith = function (otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        if (crash == true) {
            if (record < myGameArea.frameNo) {
                setHighScore();
            }
        }

        return crash;
    }
}

function updateGameArea() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for (i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i])) {
            return;
        }
    }
    myGameArea.clear();
    myGameArea.frameNo += 1;
    if (myGameArea.frameNo == 1 || everyinterval(200)) {
        x = myGameArea.canvas.width;
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
        minGap = 100;
        maxGap = 200;
        gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
        myObstacles.push(new component(20, height, "green", x, 0));
        myObstacles.push(new component(20, x - height - gap, "green", x, height + gap));
    }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].x += -1;
        myObstacles[i].update();
    }
    $("#scorr").html("<h1   >\Scor: " + myGameArea.frameNo + "</h1>");

    // myScore.text="SCOR: " + myGameArea.frameNo;
    myScore.text = "";
    myScore.update();
    myGamePiece.newPos();
    myGamePiece.update();
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {
        return true;
    }
    return false;
}

function accelerate(n) {
    myGamePiece.gravity = n;
}

function changeAnimal(name) {
    icon = name;
    restartGame();
}


$(document).keydown(function (event) {
    // on up arrow or space game logic
    if (event.keyCode === 38 || event.keyCode === 32) {
        accelerate(-0.13);
    }
    //on enter -replay
    if (event.keyCode === 13) {
        restartGame();
    }
});

$(document).keyup(function (event) {
    // on up arrow or space game logic
    if (event.keyCode === 38 || event.keyCode === 32) {
        accelerate(0.05);
    }
});
