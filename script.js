var fappyBird = {};

fappyBird.Character = function() {

    this.domElement = document.getElementById("littleBastard");
    this.domGame = document.getElementById("game");

    this.bindEvents();

};

fappyBird.Character.prototype.bindEvents = function() {

    var that = this;
    var jumpId = 0;
    this.domGame.addEventListener("click", function(){
        jumpId++;
        var currentJumpId = jumpId;
        setInterval(function(){
            if(currentJumpId == jumpId) {
                that.domElement.className = "upAnimation";
                //TODO: going up
                that.domElement.className = "downAnimation";
                //TODO: going down
                if(that.domElement.style.top = "100%"){
                    alert("die");
                }
                //TODO: collided with floor
            }
        }, 25);
    }, false);

};

fappyBird.Pipe = function(height, pipeNumber) {

    this.height = height;
    this.pipeId = "pipe_" + pipeNumber;
    this.domForeground = document.getElementById("foreground");

    this.appendPipe();
    this.setAnimation(3);
    this.bindEvents();

};

fappyBird.Pipe.prototype.appendPipe = function() {

    var domPipeTemplate = this.pipeTemplate();
    this.domForeground.innerHTML += domPipeTemplate;

};

fappyBird.Pipe.prototype.setAnimation = function() {

    //TODO: Move pipe from right to left

};

fappyBird.Pipe.prototype.pipeTemplate = function() {

    return '<div class="pipe" id="' + this.pipeId + '">' +
                      '<div class="pipeBody"></div>' +
                      '<div class="pipeHead down"></div>' +
                      '<div class="pipeHead"></div>'+
                      '<div class="pipeBody"></div>'
                  '</div>';

};

fappyBird.Level = function() {

    this.littleBastard = new fappyBird.Character();
    this.littleBastard.bindEvents();

    this.domBackground = document.getElementById("background");
    this.domGame = document.getElementById("game");
    this.bindEvents(3);

};

fappyBird.Level.prototype.bindEvents = function(speed) {

    var that = this;

    var gameActions = function() {
        //that.setAnimation(speed);
        //that.generatePipes();
        that.domGame.removeEventListener("click", gameActions, false);
    };

    that.domGame.addEventListener("click", gameActions, false);

};

fappyBird.Level.prototype.setAnimation = function(speed) {

    var that = this;

    var backgroundXPosition = 0;
    this.domBackground.style.backgroundPosition = backgroundXPosition + "px 0px";
    setInterval(function(){

        backgroundXPosition -= speed;
        that.domBackground.style.backgroundPosition = backgroundXPosition + "px 0px";

    }, 25);

};

fappyBird.Level.prototype.generatePipes = function(speed) {

    var pipeCount = 0;
    setInterval(function(){
        new fappyBird.Pipe(50, pipeCount);
    }, 5000);

};

