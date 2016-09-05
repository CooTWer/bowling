var Bowling = function() {
	this.bowlingscores = [10,10,10,10,10,10,10,10,10,10,10,10,0,0];
};


Bowling.prototype.score = function() {
    var index = 0;
    var sum = 0;
    var that = this;

    function isStrike(){
		return that.bowlingscores[index] == 10;
    }

    function strikeBonus(){
        return that.bowlingscores[index+1] + that.bowlingscores[index+2];
    }

    function isSpare(){
        return that.bowlingscores[index] + that.bowlingscores[index + 1] == 10;
    }

    function spareBonus(){
        return that.bowlingscores[index+2];
    }

    function getFrameScore(){
        return that.bowlingscores[index] + that.bowlingscores[index+1];
    }

    for(var frame = 0; frame<10; frame++){
        if(isStrike()){
            sum += 10;
            sum += strikeBonus();
            index ++;
        }
        else if(isSpare()){
            sum += 10;
            sum += spareBonus();
            index += 2;
        }
        else{
            sum += getFrameScore();
            index += 2;
        }
    }
    return sum;
};


var bowling = new Bowling();
console.log(bowling.score());