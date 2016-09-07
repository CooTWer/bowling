var Bowling = function() {
	this.bowlingscores = [];
	this.http = require("http");
	this.options = {
	    host : 'localhost',
	    port : '8081',
	    path : '/content.ini'
	};
	this.index = 0;
	this.sum = 0;
	this.self;
};


Bowling.prototype.init = function(){
    var that = this;
    var request = this.http.request(this.options,callback);
    request.end();

    function callback(response){
       var receiveString = "";
       response.on('data', function(data) {
          receiveString += data;
       });
       response.on('end', function() {
          that.stringToArray(receiveString);
          that.getFinalScore();
       });
    }
};




Bowling.prototype.stringToArray = function(scoresString){
    var scoresArray = scoresString.split(',');
    for(var i = 0; i<scoresArray.length; i++){
        this.bowlingscores.push(parseInt(scoresArray[i]));
    }
};

Bowling.prototype.isStrike = function(){
    return this.bowlingscores[this.index] == 10;
};

Bowling.prototype.strikeBonus = function(){
    return this.bowlingscores[this.index+1] + this.bowlingscores[this.index+2];
};

Bowling.prototype.isSpare = function(){
    return this.bowlingscores[this.index] + this.bowlingscores[this.index+1] == 10;
};

Bowling.prototype.spareBonus = function(){
    return this.bowlingscores[this.index+2];
};

Bowling.prototype.getFinalScore = function(){
    for (var frame = 0; frame < 10; frame++){
        if(this.isStrike()){
            this.sum += 10;
            this.sum += this.strikeBonus();
            this.index++;
        }
        else if(this.isSpare()){
            this.sum += 10;
            this.sum += this.spareBonus();
            this.index += 2;
        }
        else{
            this.sum = this.getFrameScore();
            this.index += 2;
        }
    }
    console.log(this.sum);
};

var bowling = new Bowling();
bowling.init();
